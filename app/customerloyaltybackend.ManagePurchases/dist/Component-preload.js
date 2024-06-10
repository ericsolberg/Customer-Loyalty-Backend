//@ui5-bundle customerloyaltybackend/ManagePurchases/Component-preload.js
sap.ui.require.preload({
	"customerloyaltybackend/ManagePurchases/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("customerloyaltybackend.ManagePurchases.Component",{metadata:{manifest:"json"}})});
},
	"customerloyaltybackend/ManagePurchases/i18n/i18n.properties":'# This is the resource bundle for customerloyaltybackend.ManagePurchases\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Manage Purchases\n\n#YDES: Application description\nappDescription=Manage Purchases\n\n#XFLD,48\nflpTitle=Manage Purchases\n',
	"customerloyaltybackend/ManagePurchases/manifest.json":'{"_version":"1.48.0","sap.app":{"id":"customerloyaltybackend.ManagePurchases","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.5","toolsId":"e05244fa-4af0-4e9d-b7ae-66f887c4e855"},"dataSources":{"mainService":{"uri":"service/customerloyaltybackend/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"customerloyaltybackendManagePu-display":{"semanticObject":"customerloyaltybackendManagePu","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.108.7","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"customerloyaltybackend.ManagePurchases.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"PurchasesList","target":"PurchasesList"},{"pattern":"Purchases({key}):?query:","name":"PurchasesObjectPage","target":"PurchasesObjectPage"}],"targets":{"PurchasesList":{"type":"Component","id":"PurchasesList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Purchases","variantManagement":"Page","navigation":{"Purchases":{"detail":{"route":"PurchasesObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"PurchasesObjectPage":{"type":"Component","id":"PurchasesObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Purchases"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"lcap.customerloyaltybackend"}}'
});
//# sourceMappingURL=Component-preload.js.map
