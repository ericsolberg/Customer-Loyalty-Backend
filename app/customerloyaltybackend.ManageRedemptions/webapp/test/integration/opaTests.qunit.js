sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'customerloyaltybackend/ManageRedemptions/test/integration/FirstJourney',
		'customerloyaltybackend/ManageRedemptions/test/integration/pages/RedemptionsList',
		'customerloyaltybackend/ManageRedemptions/test/integration/pages/RedemptionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, RedemptionsList, RedemptionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('customerloyaltybackend/ManageRedemptions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRedemptionsList: RedemptionsList,
					onTheRedemptionsObjectPage: RedemptionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);