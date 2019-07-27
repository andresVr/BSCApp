export var BcgVo = {
    product:null,
    participation:null,
    earnings:null,
    marketGrowth:null

}


export function pushBcgVo(product, participation, earnings,marketGrowth) {
    BcgVo.product = product;
    BcgVo.participation = participation;
    BcgVo.earnings = earnings;
    BcgVo.marketGrowth = marketGrowth;

}



