using { s4_product } from './external/s4_product.cds';

using { customerloyaltybackend as my } from '../db/schema.cds';

@path : '/service/customerloyaltybackend'
service customerloyaltybackendSrv
{
    entity Customers as
        projection on my.Customers;

    entity Purchases as
        projection on my.Purchases;

    entity Redemptions as
        projection on my.Redemptions;

    entity A_ProductBasicText as
        projection on s4_product.A_ProductBasicText;
}

annotate customerloyaltybackendSrv with @requires :
[
    'authenticated-user'
];
