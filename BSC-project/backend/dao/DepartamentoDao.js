
import {DepartamentoVo} from "../vo/DepartamentoVo";

Meteor.methods({
        insertarDepartamento: function (DepartamentoVo){

                Departamento.insert({
                    name:DepartamentoVo.name,
                    desc:DepartamentoVo.desc,
                    organigramaLevel:DepartamentoVo.organigramaLevel

                });
        }
    }
)