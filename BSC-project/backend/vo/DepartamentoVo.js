export var DepartamentoVo = {
    name :null,
    desc :null,
    organigramaLevel: null

}


export function pushDepartamentoVo(name, desc, organigramaLevel,createUser) {
    DepartamentoVo.name = name;
    DepartamentoVo.desc = desc;
    DepartamentoVo.organigramaLevel = organigramaLevel;

}

export function clearDepartamentoVo() {
    DepartamentoVo.name = null;
    DepartamentoVo.desc = null;
    DepartamentoVo.organigramaLevel = null;

}