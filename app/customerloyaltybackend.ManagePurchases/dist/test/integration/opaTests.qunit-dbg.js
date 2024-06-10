sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'customerloyaltybackend/ManagePurchases/test/integration/FirstJourney',
		'customerloyaltybackend/ManagePurchases/test/integration/pages/PurchasesList',
		'customerloyaltybackend/ManagePurchases/test/integration/pages/PurchasesObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchasesList, PurchasesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('customerloyaltybackend/ManagePurchases') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchasesList: PurchasesList,
					onThePurchasesObjectPage: PurchasesObjectPage
                }
            },
            opaJourney.run
        );
    }
);