/**
 * 
 * @On(event = { "CREATE" }, entity = "customerloyaltybackendSrv.Redemptions")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
    const { data } = request;
    const tx = cds.transaction(request);
    const customer = await tx.run(SELECT.one.from('customerloyaltybackendSrv.Customers').where({ ID: data.customer_ID }));

    if (customer.totalRewardPoints < data.redeemedAmount) {
        request.error(400, 'Insufficient reward points for redemption');
        return;
    }

    customer.totalRewardPoints -= data.redeemedAmount;
    customer.totalRedeemedRewardPoints += data.redeemedAmount;

    await tx.run(UPDATE('customerloyaltybackendSrv.Customers').set({
        totalRewardPoints: customer.totalRewardPoints,
        totalRedeemedRewardPoints: customer.totalRedeemedRewardPoints
    }).where({ ID: data.customer_ID }));
}