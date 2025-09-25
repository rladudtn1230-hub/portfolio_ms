// 상품 데이터를 관리하는 파일
export const productData = {
  tshirts: [
    {        
        id : 0,
        name : "DENIAL OF NEGATIVITY",
        src : "/img/main/main_4_img1.png",        
        category : "Tshirts"
    },{        
        id : 1,
        name : "DENIAL OF NEGATIVITY",
        src : "/img/main/main_4_img2.png",        
        category : "Tshirts"
    },{        
        id : 2,
        name : "DENIAL OF NEGATIVITY",
        src : "/img/main/main_4_img3.png",        
        category : "Tshirts"
    },{        
        id : 3,
        name : "DENIAL OF NEGATIVITY",
        src : "/img/main/main_4_img4.png",        
        category : "Tshirts"
    }
  ],
  
  pants: [
    {        
        id : 0,
        name : "DENIAL OF NEGATIVITY",
        src : "/img/main/main_7_img1.png",        
        category : "PANTS"
    },{        
        id : 1,
        name : "DENIAL OF NEGATIVITY",
        src : "/img/main/main_7_img2.png",        
        category : "PANTS"
    },{       
        id : 2, 
        name : "DENIAL OF NEGATIVITY",
        src : "/img/main/main_7_img3.png",        
        category : "PANTS"
    },{       
        id : 3, 
        name : "DENIAL OF NEGATIVITY",
        src : "/img/main/main_7_img4.png",        
        category : "PANTS"
    }
  ]
  
};

// 특정 상품 데이터를 가져오는 함수
export const getProductData = (productId) => {
  return productData[productId] || null;
};

// 모든 상품 데이터를 가져오는 함수
export const getAllProducts = () => {
  return Object.values(productData);
};
