export var BcgVo = {
    product:null,
    participation:null,
    earnings:null,
    marketGrowth:null

}


export function pushBcgVo(product, participation, earnings,marketGrowth, bcgIdentifier,horizontalArrow, verticalArrow) {
    BcgVo.product = product;
    BcgVo.participation = participation;
    BcgVo.earnings = earnings;
    BcgVo.marketGrowth = marketGrowth;
    BcgVo.bcgIdentifier = bcgIdentifier;
    BcgVo.bcgIdentifierHorizontalArrow = horizontalArrow;
    BcgVo.bcgIdentifierVerticalArrow = verticalArrow;

}



