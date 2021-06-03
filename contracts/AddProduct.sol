// SPDX-License-Identifier: MIT
pragma solidity >=0.5.8 <=0.8.4;

contract AddProduct {

    uint totalPrice;
    mapping (uint => Products) products;
    mapping (uint => Products) batchs;
    struct Products {
        uint product_id;
        uint batch_id;
        uint biji_id;
        uint jenis_id;
        uint proses_id;
        string asal;
        string volume;
        string tgl_panen;
        string tgl_proses;
        bool init;
    }
    function addProducts(uint product_id, uint batch_id, uint biji_id, uint jenis_id, uint proses_id, string memory asal, string memory volume, string memory tgl_panen, string memory tgl_proses) public {   
        products[product_id] = Products(product_id, batch_id, biji_id, jenis_id, proses_id, asal, volume, tgl_panen, tgl_proses, true);
        batchs[batch_id] = Products(product_id, batch_id, biji_id, jenis_id, proses_id, asal, volume, tgl_panen, tgl_proses, true);
    }
    function getProductsByProductId(uint product_id) view public returns (uint, uint, uint, uint, uint, string memory, string memory, string memory, string memory) {
        require(products[product_id].init);
        Products memory productStruct;
        productStruct = products[product_id];
        return(productStruct.product_id, productStruct.batch_id, productStruct.biji_id, productStruct.jenis_id, productStruct.proses_id, productStruct.asal, productStruct.volume, productStruct.tgl_panen, productStruct.tgl_proses);
    }
    function getProductsByBatchId(uint batch_id) view public returns (uint, uint, uint, uint, uint, string memory, string memory, string memory, string memory) {
        require(batchs[batch_id].init);
        Products memory batchStruct;
        batchStruct = batchs[batch_id];
        return(batchStruct.product_id, batchStruct.batch_id, batchStruct.biji_id, batchStruct.jenis_id, batchStruct.proses_id, batchStruct.asal, batchStruct.volume, batchStruct.tgl_panen, batchStruct.tgl_proses);
    }
}