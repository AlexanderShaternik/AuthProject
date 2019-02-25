export default {
    state: {
        arrTerminals: ['5c652ec266bada047c8f512b'],
        terminals:[
            {   id: '5c652ec266bada047c8f512b',
                versionApp: "72",
                natsConnect: "ok",
                serverConnect: "ok",
                thermo: "err",
                alco: "err",
                pressure: "err",
                control: "err"
            }
        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        getArrTerminals: (state) => state.arrTerminals,
        getTerminals: (state) => state.terminals
    }
}