/**
 * Note: for OPC built in xcart 4.x 
 * Purpose: reload #opc_payment block, place within // Widget :: profile form update listener of ajax.checkout.js
 * Date: Oct 2015
**/

   $("#opc_payment").load(location.href + " #opc_payment");

