

import {BcgVo} from "../vo/BcgVo";

Meteor.methods({
        insertarBcg: function (BcgVo){

            Bcg.insert({
                product:BcgVo.product,
                participation:BcgVo.participation,
                earnings:BcgVo.earnings,
                marketGrowth:BcgVo.marketGrowth,
                bcgIdentifier:BcgVo.bcgIdentifier,
                bcgIdentifierHorizontalArrow:BcgVo.bcgIdentifierHorizontalArrow,
                bcgIdentifierVerticalArrow:BcgVo.bcgIdentifierVerticalArrow
            });
        }
    }
)