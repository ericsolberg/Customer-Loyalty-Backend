sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'customerloyaltybackend/ManageCustomers/test/integration/FirstJourney',
		'customerloyaltybackend/ManageCustomers/test/integration/pages/CustomersList',
		'customerloyaltybackend/ManageCustomers/test/integration/pages/CustomersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomersList, CustomersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('customerloyaltybackend/ManageCustomers') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomersList: CustomersList,
					onTheCustomersObjectPage: CustomersObjectPage
                }
            },
            opaJourney.run
        );
    }
);