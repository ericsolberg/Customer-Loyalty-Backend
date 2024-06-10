/**
 * 
 * @On(event = { "CREATE" }, entity = "customerloyaltybackendSrv.Purchases")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
    // Calculate reward points based on purchase value
    request.data.rewardPoints = Math.floor(request.data.purchaseValue / 10);

    // Get the related customer
    const customer = await SELECT.one.from('customerloyaltybackendSrv.Customers').where({ ID: request.data.customer_ID });

    // Update the total purchase value and total reward points of the related customer
    if (customer) {
        customer.totalPurchaseValue += request.data.purchaseValue;
        customer.totalRewardPoints += request.data.rewardPoints;

        await UPDATE('customerloyaltybackendSrv.Customers')
            .set({
                totalPurchaseValue: customer.totalPurchaseValue,
                totalRewardPoints: customer.totalRewardPoints
            })
            .where({ ID: customer.ID });
    }
}