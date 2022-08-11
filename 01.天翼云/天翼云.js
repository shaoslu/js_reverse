
var window = global;
var get_sign;

require("./aaa");


(function(e) {
    function n(n) {
        for (var a, r, o = n[0], u = n[1], d = n[2], l = 0, s = []; l < o.length; l++)
            r = o[l],
            Object.prototype.hasOwnProperty.call(c, r) && c[r] && s.push(c[r][0]),
            c[r] = 0;
        for (a in u)
            Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
        p && p(n);
        while (s.length)
            s.shift()();
        return i.push.apply(i, d || []),
        t()
    }
    function t() {
        for (var e, n = 0; n < i.length; n++) {
            for (var t = i[n], a = !0, r = 1; r < t.length; r++) {
                var o = t[r];
                0 !== c[o] && (a = !1)
            }
            a && (i.splice(n--, 1),
            e = u(u.s = t[0]))
        }
        return e
    }
    var a = {}
      , r = {
        main: 0
    }
      , c = {
        main: 0
    }
      , i = [];
    function o(e) {
        return u.p + "js/" + ({
            202103: "202103",
            2021517: "2021517",
            2021818: "2021818",
            20201218: "20201218",
            "20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c": "20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c",
            addBankCard: "addBankCard",
            "add~continuedDetail~edit~order~orderDetail": "add~continuedDetail~edit~order~orderDetail",
            add: "add",
            edit: "edit",
            agent: "agent",
            "agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa": "agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa",
            "agentRecheckFill~detail~order~register~spring": "agentRecheckFill~detail~order~register~spring",
            "detail~workorderDetail": "detail~workorderDetail",
            detail: "detail",
            "challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement": "challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement",
            orderDetail: "orderDetail",
            workorderDetail: "workorderDetail",
            write: "write",
            "buy~recognition~submitWorkorderTwo": "buy~recognition~submitWorkorderTwo",
            recognition: "recognition",
            "console~home~my~product": "console~home~my~product",
            console: "console",
            editBankCard: "editBankCard",
            feedback: "feedback",
            qrCodeInOne: "qrCodeInOne",
            "202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca": "202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca",
            "cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a": "cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a",
            "cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077": "cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077",
            cdn: "cdn",
            cloud: "cloud",
            cloudInstance: "cloudInstance",
            desktop: "desktop",
            physicalMachine: "physicalMachine",
            workorderManagement: "workorderManagement",
            diskIndex: "diskIndex",
            ip: "ip",
            index: "index",
            helpCenterDocsDetail: "helpCenterDocsDetail",
            helpCenterPageDetail: "helpCenterPageDetail",
            paymentResponse: "paymentResponse",
            "5G": "5G",
            about: "about",
            account: "account",
            accountBind: "accountBind",
            activity: "activity",
            address: "address",
            continuedDetail: "continuedDetail",
            order: "order",
            agentRecheckFill: "agentRecheckFill",
            "identification~login~register": "identification~login~register",
            register: "register",
            spring: "spring",
            exchangeAddress: "exchangeAddress",
            agentRecheckResult: "agentRecheckResult",
            agentRecheckSubmit: "agentRecheckSubmit",
            agentSubmit: "agentSubmit",
            app: "app",
            "appSolutionDetail~home~productDetail": "appSolutionDetail~home~productDetail",
            appSolutionDetail: "appSolutionDetail",
            productDetail: "productDetail",
            appSolutionIndex: "appSolutionIndex",
            auth: "auth",
            businessOpportunities: "businessOpportunities",
            channel: "channel",
            helpCenterSearch: "helpCenterSearch",
            list: "list",
            priseList: "priseList",
            "home~voucher": "home~voucher",
            voucher: "voucher",
            continuedList: "continuedList",
            loginHistory: "loginHistory",
            newsList: "newsList",
            serviceCaseCategory: "serviceCaseCategory",
            coupon: "coupon",
            home: "home",
            messageList: "messageList",
            challenge: "challenge",
            challengeApply: "challengeApply",
            settingAccountBind: "settingAccountBind",
            challengeCheck: "challengeCheck",
            challengeField: "challengeField",
            exchangeOrder: "exchangeOrder",
            exchangeRecord: "exchangeRecord",
            withdraw: "withdraw",
            "agentBank~agentInfo~agentPhone": "agentBank~agentInfo~agentPhone",
            agentInfo: "agentInfo",
            apply: "apply",
            "bindDisk~bindIp~createBackup~ipDetail": "bindDisk~bindIp~createBackup~ipDetail",
            bindDisk: "bindDisk",
            bindIp: "bindIp",
            createBackup: "createBackup",
            diskInstance: "diskInstance",
            ipDetail: "ipDetail",
            submitWorkorder: "submitWorkorder",
            buy: "buy",
            submitWorkorderTwo: "submitWorkorderTwo",
            "activity.2021": "activity.2021",
            "customer&5g": "customer&5g",
            eComputer: "eComputer",
            eComputer2: "eComputer2",
            enterprise: "enterprise",
            new: "new",
            province: "province",
            security3: "security3",
            trial: "trial",
            workorderSearch: "workorderSearch",
            agentBank: "agentBank",
            agentPhone: "agentPhone",
            "businessOpportunitiesWeekly~pivotalPerson": "businessOpportunitiesWeekly~pivotalPerson",
            businessOpportunitiesWeekly: "businessOpportunitiesWeekly",
            pivotalPerson: "pivotalPerson",
            workorderDemand: "workorderDemand",
            cloudCampus: "cloudCampus",
            identificationStep: "identificationStep",
            info: "info",
            orderList: "orderList",
            orderListHistory: "orderListHistory",
            cloudHostDiscount: "cloudHostDiscount",
            cloudHostDiscount2020: "cloudHostDiscount2020",
            exchangeApply: "exchangeApply",
            noviceSpecialty: "noviceSpecialty",
            smartCampus: "smartCampus",
            appSolutionForm: "appSolutionForm",
            cloudMarket: "cloudMarket",
            collect: "collect",
            my: "my",
            product: "product",
            ctyunVision: "ctyunVision",
            download: "download",
            exchange: "exchange",
            helpCenter: "helpCenter",
            helpCenterDocs: "helpCenterDocs",
            identificationIndex: "identificationIndex",
            identification: "identification",
            login: "login",
            invoice: "invoice",
            jobDetail: "jobDetail",
            messageDetail: "messageDetail",
            modifyPwd: "modifyPwd",
            money: "money",
            news: "news",
            newsDetail: "newsDetail",
            notFound: "notFound",
            noticeDetail: "noticeDetail",
            noticeList: "noticeList",
            operateProduct: "operateProduct",
            qrCodeLogin: "qrCodeLogin",
            rds: "rds",
            recharge: "recharge",
            rechargeResponse: "rechargeResponse",
            record: "record",
            reset: "reset",
            result: "result",
            safeCenter: "safeCenter",
            serviceCase: "serviceCase",
            serviceCaseDetail: "serviceCaseDetail",
            setting: "setting",
            title: "title",
            video: "video",
            workorder: "workorder",
            workorderProgress: "workorderProgress"
        }[e] || e) + "." + {
            202103: "160b8487",
            2021517: "cc869516",
            2021818: "865bec84",
            20201218: "5e18c79b",
            "20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c": "850a7aa4",
            addBankCard: "c8b4007b",
            "add~continuedDetail~edit~order~orderDetail": "0085ae1a",
            add: "052e20df",
            edit: "781f045e",
            agent: "652f7626",
            "agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa": "d3fb1def",
            "agentRecheckFill~detail~order~register~spring": "15dbc313",
            "detail~workorderDetail": "b31f2732",
            detail: "1463010c",
            "challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement": "98f16a8c",
            orderDetail: "6d1210ea",
            workorderDetail: "2b7bc9a2",
            write: "72aba752",
            "buy~recognition~submitWorkorderTwo": "7ab5f139",
            "chunk-eec5f6b8": "bba7d5b7",
            recognition: "228102f4",
            "console~home~my~product": "024579ad",
            console: "4463799e",
            editBankCard: "9b6ac47b",
            feedback: "1d7a4d7c",
            qrCodeInOne: "932ab854",
            "202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca": "b0442f27",
            "cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a": "8794bb34",
            "cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077": "96ec827c",
            cdn: "5311cc8d",
            cloud: "dd65ddd3",
            cloudInstance: "4ee1a318",
            desktop: "f66c7d6d",
            physicalMachine: "efc318ff",
            workorderManagement: "597f4cff",
            diskIndex: "b3a13913",
            ip: "f2f3eb16",
            "chunk-5f38eea7": "eb56c126",
            index: "b3114419",
            helpCenterDocsDetail: "a1699438",
            helpCenterPageDetail: "fa92581b",
            paymentResponse: "c365b6e1",
            "5G": "0021659a",
            about: "864a6b32",
            account: "a905cb33",
            accountBind: "0737cde8",
            activity: "42505fa0",
            address: "1182f3c8",
            continuedDetail: "7bc5277e",
            order: "1357a8a1",
            agentRecheckFill: "5ebd94c1",
            "identification~login~register": "3994396c",
            register: "d59dee92",
            spring: "481d7d53",
            exchangeAddress: "2b999568",
            agentRecheckResult: "64d938f8",
            agentRecheckSubmit: "bfab3afc",
            agentSubmit: "c433d59a",
            app: "2a6306d4",
            "appSolutionDetail~home~productDetail": "f21b749a",
            appSolutionDetail: "b9d127fe",
            productDetail: "e1b8023e",
            appSolutionIndex: "c5236a46",
            auth: "19759802",
            businessOpportunities: "6e4e5cab",
            channel: "b5c2a01d",
            helpCenterSearch: "48287338",
            list: "edc91b87",
            priseList: "031b4fec",
            "chunk-6b589ffd": "566758eb",
            "home~voucher": "08dec47b",
            voucher: "7b343c34",
            continuedList: "70d95150",
            loginHistory: "76f20cf6",
            newsList: "c09e9375",
            serviceCaseCategory: "f433bf51",
            coupon: "21fabecf",
            home: "ec0314eb",
            messageList: "2bc0a55a",
            challenge: "6154da82",
            challengeApply: "75116e43",
            settingAccountBind: "439e2f54",
            challengeCheck: "303f7754",
            challengeField: "f7d58140",
            "chunk-1eec049b": "9a54331d",
            "chunk-2d213728": "822ab233",
            exchangeOrder: "b8c11632",
            exchangeRecord: "2d2cc14c",
            "chunk-4d275443": "b0e96a7d",
            withdraw: "eb2cea32",
            "chunk-7722201c": "02e7904d",
            "agentBank~agentInfo~agentPhone": "f04ddbab",
            agentInfo: "ccdb1874",
            "chunk-2e3a7f6e": "41be3814",
            apply: "d492b2c3",
            "bindDisk~bindIp~createBackup~ipDetail": "459526cf",
            bindDisk: "f845e94c",
            bindIp: "08618da0",
            createBackup: "88c97df5",
            diskInstance: "4e268bb1",
            ipDetail: "7e5400af",
            submitWorkorder: "bd8c1ae4",
            buy: "9cbbdecb",
            submitWorkorderTwo: "1e3ba5c6",
            "activity.2021": "af52239b",
            "customer&5g": "dc40146a",
            eComputer: "376e9281",
            eComputer2: "cd3c7f43",
            enterprise: "157c404c",
            new: "3bf3672d",
            province: "720cd484",
            security3: "5bb04c0f",
            trial: "c210ea4d",
            workorderSearch: "59c79e81",
            agentBank: "f057baa6",
            agentPhone: "52a0536b",
            "businessOpportunitiesWeekly~pivotalPerson": "896ee5c5",
            businessOpportunitiesWeekly: "b5d96098",
            pivotalPerson: "45b62c9e",
            workorderDemand: "3d74e878",
            cloudCampus: "fa4b6a9c",
            identificationStep: "5d6aaa27",
            info: "cb5ebff9",
            orderList: "42a5f752",
            orderListHistory: "a185efcb",
            cloudHostDiscount: "72458568",
            cloudHostDiscount2020: "caa7c9ea",
            exchangeApply: "2b275239",
            noviceSpecialty: "4a1d04ff",
            smartCampus: "f48ad73e",
            "chunk-f374825a": "ffe0e602",
            appSolutionForm: "ce5ed127",
            "chunk-db90efe0": "b730524f",
            cloudMarket: "0af34248",
            collect: "c8e88780",
            my: "d46482b6",
            product: "531b1df0",
            ctyunVision: "d29fe68e",
            download: "81a20cb4",
            exchange: "06a5a863",
            helpCenter: "6ccf8791",
            helpCenterDocs: "85e111c1",
            identificationIndex: "492f5455",
            identification: "d19811e9",
            login: "3816eccd",
            invoice: "aa00481c",
            jobDetail: "1beb11f6",
            messageDetail: "3bf99f14",
            modifyPwd: "d7e4ab6b",
            money: "ab21e01b",
            news: "76a4157c",
            newsDetail: "55a2e804",
            notFound: "bc7cd432",
            noticeDetail: "3ed91fda",
            noticeList: "b02640ca",
            operateProduct: "f902349a",
            qrCodeLogin: "2a0ac2ad",
            rds: "53e9b86a",
            recharge: "7437f218",
            rechargeResponse: "c1a36288",
            record: "fabdc2c1",
            reset: "ca573bd8",
            result: "a0ba32c7",
            safeCenter: "428adfdd",
            serviceCase: "94ae2964",
            serviceCaseDetail: "bf90ff59",
            setting: "e8b5d675",
            title: "c94d1bab",
            video: "2cc5f30b",
            workorder: "6a438ea4",
            workorderProgress: "b08406a1",
            "chunk-1936b90a": "24524edd",
            "chunk-74e30748": "e3f9c1e1",
            "chunk-7190e4d1": "ac0e6c38",
            "chunk-65d6996c": "b0f334c8",
            "chunk-5577805c": "14f56101",
            "chunk-0ac89b64": "35447d5c",
            "chunk-41a7e986": "3bfb2889",
            "chunk-69b8d2ae": "b2e6db75",
            "chunk-bc30c3bc": "1639951f",
            "chunk-5407991a": "b5fa8415",
            "chunk-31fa5bf6": "7b4e7c84",
            "chunk-4cc06d01": "42a40d94",
            "chunk-f350c91a": "f32a8f95",
            "chunk-024694d2": "a1864345",
            "chunk-0b3f71a4": "76c90387",
            "chunk-2c2ce9c0": "fa916af8",
            "chunk-5bc05cd0": "62546024",
            "chunk-aaa3e3c8": "d7270d22",
            "chunk-57de39d4": "e43a01e8",
            "chunk-5c4cb6d0": "36e475ce",
            "chunk-6fc7c2c8": "947a3b0b",
            "chunk-5c4cf7fe": "5a6eee13",
            "chunk-aebc957e": "027328df",
            "chunk-58526af0": "b4eadacc",
            "chunk-3d6ad964": "fdc4ec78",
            "chunk-0630cef9": "af6edd6c",
            "chunk-051790d2": "aa9f7827",
            "chunk-1b40b847": "35c65d1a",
            "chunk-672dc5c8": "d9303598"
        }[e] + ".js"
    }
    function u(n) {
        if (a[n])
            return a[n].exports;
        var t = a[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(t.exports, t, t.exports, u),
        t.l = !0,
        t.exports
    }
    u.e = function(e) {
        var n = []
          , t = {
            202103: 1,
            2021517: 1,
            2021818: 1,
            20201218: 1,
            "20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c": 1,
            addBankCard: 1,
            "add~continuedDetail~edit~order~orderDetail": 1,
            add: 1,
            edit: 1,
            agent: 1,
            "agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa": 1,
            "agentRecheckFill~detail~order~register~spring": 1,
            "detail~workorderDetail": 1,
            detail: 1,
            "challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement": 1,
            orderDetail: 1,
            workorderDetail: 1,
            write: 1,
            "buy~recognition~submitWorkorderTwo": 1,
            "chunk-eec5f6b8": 1,
            recognition: 1,
            "console~home~my~product": 1,
            console: 1,
            editBankCard: 1,
            feedback: 1,
            "cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a": 1,
            "cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077": 1,
            cdn: 1,
            cloud: 1,
            cloudInstance: 1,
            desktop: 1,
            physicalMachine: 1,
            workorderManagement: 1,
            diskIndex: 1,
            ip: 1,
            "chunk-5f38eea7": 1,
            index: 1,
            helpCenterDocsDetail: 1,
            helpCenterPageDetail: 1,
            paymentResponse: 1,
            "5G": 1,
            about: 1,
            account: 1,
            accountBind: 1,
            address: 1,
            continuedDetail: 1,
            order: 1,
            agentRecheckFill: 1,
            "identification~login~register": 1,
            register: 1,
            spring: 1,
            exchangeAddress: 1,
            agentRecheckResult: 1,
            agentRecheckSubmit: 1,
            agentSubmit: 1,
            app: 1,
            "appSolutionDetail~home~productDetail": 1,
            appSolutionDetail: 1,
            productDetail: 1,
            appSolutionIndex: 1,
            auth: 1,
            channel: 1,
            helpCenterSearch: 1,
            list: 1,
            priseList: 1,
            "chunk-6b589ffd": 1,
            "home~voucher": 1,
            voucher: 1,
            continuedList: 1,
            loginHistory: 1,
            newsList: 1,
            serviceCaseCategory: 1,
            coupon: 1,
            home: 1,
            messageList: 1,
            challenge: 1,
            challengeApply: 1,
            settingAccountBind: 1,
            challengeCheck: 1,
            challengeField: 1,
            "chunk-1eec049b": 1,
            exchangeOrder: 1,
            exchangeRecord: 1,
            "chunk-4d275443": 1,
            withdraw: 1,
            "chunk-7722201c": 1,
            "agentBank~agentInfo~agentPhone": 1,
            agentInfo: 1,
            "chunk-2e3a7f6e": 1,
            apply: 1,
            "bindDisk~bindIp~createBackup~ipDetail": 1,
            bindDisk: 1,
            bindIp: 1,
            createBackup: 1,
            diskInstance: 1,
            ipDetail: 1,
            submitWorkorder: 1,
            buy: 1,
            submitWorkorderTwo: 1,
            "activity.2021": 1,
            "customer&5g": 1,
            eComputer: 1,
            eComputer2: 1,
            enterprise: 1,
            new: 1,
            province: 1,
            security3: 1,
            trial: 1,
            workorderSearch: 1,
            agentBank: 1,
            agentPhone: 1,
            "businessOpportunitiesWeekly~pivotalPerson": 1,
            businessOpportunitiesWeekly: 1,
            pivotalPerson: 1,
            workorderDemand: 1,
            cloudCampus: 1,
            identificationStep: 1,
            info: 1,
            orderList: 1,
            orderListHistory: 1,
            cloudHostDiscount: 1,
            cloudHostDiscount2020: 1,
            exchangeApply: 1,
            noviceSpecialty: 1,
            smartCampus: 1,
            "chunk-f374825a": 1,
            appSolutionForm: 1,
            "chunk-db90efe0": 1,
            collect: 1,
            my: 1,
            product: 1,
            ctyunVision: 1,
            download: 1,
            exchange: 1,
            helpCenter: 1,
            helpCenterDocs: 1,
            identificationIndex: 1,
            login: 1,
            jobDetail: 1,
            messageDetail: 1,
            modifyPwd: 1,
            money: 1,
            newsDetail: 1,
            notFound: 1,
            noticeList: 1,
            operateProduct: 1,
            qrCodeLogin: 1,
            recharge: 1,
            rechargeResponse: 1,
            reset: 1,
            result: 1,
            safeCenter: 1,
            serviceCaseDetail: 1,
            workorder: 1,
            workorderProgress: 1,
            "chunk-1936b90a": 1,
            "chunk-74e30748": 1,
            "chunk-7190e4d1": 1,
            "chunk-65d6996c": 1,
            "chunk-5577805c": 1,
            "chunk-0ac89b64": 1,
            "chunk-41a7e986": 1,
            "chunk-69b8d2ae": 1,
            "chunk-bc30c3bc": 1,
            "chunk-5407991a": 1,
            "chunk-31fa5bf6": 1,
            "chunk-4cc06d01": 1,
            "chunk-f350c91a": 1,
            "chunk-024694d2": 1,
            "chunk-0b3f71a4": 1,
            "chunk-2c2ce9c0": 1,
            "chunk-5bc05cd0": 1,
            "chunk-aaa3e3c8": 1,
            "chunk-57de39d4": 1,
            "chunk-5c4cb6d0": 1,
            "chunk-6fc7c2c8": 1,
            "chunk-5c4cf7fe": 1,
            "chunk-aebc957e": 1,
            "chunk-58526af0": 1,
            "chunk-3d6ad964": 1,
            "chunk-0630cef9": 1,
            "chunk-051790d2": 1,
            "chunk-1b40b847": 1,
            "chunk-672dc5c8": 1
        };
        r[e] ? n.push(r[e]) : 0 !== r[e] && t[e] && n.push(r[e] = new Promise((function(n, t) {
            for (var a = "css/" + ({
                202103: "202103",
                2021517: "2021517",
                2021818: "2021818",
                20201218: "20201218",
                "20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c": "20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c",
                addBankCard: "addBankCard",
                "add~continuedDetail~edit~order~orderDetail": "add~continuedDetail~edit~order~orderDetail",
                add: "add",
                edit: "edit",
                agent: "agent",
                "agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa": "agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa",
                "agentRecheckFill~detail~order~register~spring": "agentRecheckFill~detail~order~register~spring",
                "detail~workorderDetail": "detail~workorderDetail",
                detail: "detail",
                "challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement": "challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement",
                orderDetail: "orderDetail",
                workorderDetail: "workorderDetail",
                write: "write",
                "buy~recognition~submitWorkorderTwo": "buy~recognition~submitWorkorderTwo",
                recognition: "recognition",
                "console~home~my~product": "console~home~my~product",
                console: "console",
                editBankCard: "editBankCard",
                feedback: "feedback",
                qrCodeInOne: "qrCodeInOne",
                "202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca": "202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca",
                "cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a": "cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a",
                "cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077": "cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077",
                cdn: "cdn",
                cloud: "cloud",
                cloudInstance: "cloudInstance",
                desktop: "desktop",
                physicalMachine: "physicalMachine",
                workorderManagement: "workorderManagement",
                diskIndex: "diskIndex",
                ip: "ip",
                index: "index",
                helpCenterDocsDetail: "helpCenterDocsDetail",
                helpCenterPageDetail: "helpCenterPageDetail",
                paymentResponse: "paymentResponse",
                "5G": "5G",
                about: "about",
                account: "account",
                accountBind: "accountBind",
                activity: "activity",
                address: "address",
                continuedDetail: "continuedDetail",
                order: "order",
                agentRecheckFill: "agentRecheckFill",
                "identification~login~register": "identification~login~register",
                register: "register",
                spring: "spring",
                exchangeAddress: "exchangeAddress",
                agentRecheckResult: "agentRecheckResult",
                agentRecheckSubmit: "agentRecheckSubmit",
                agentSubmit: "agentSubmit",
                app: "app",
                "appSolutionDetail~home~productDetail": "appSolutionDetail~home~productDetail",
                appSolutionDetail: "appSolutionDetail",
                productDetail: "productDetail",
                appSolutionIndex: "appSolutionIndex",
                auth: "auth",
                businessOpportunities: "businessOpportunities",
                channel: "channel",
                helpCenterSearch: "helpCenterSearch",
                list: "list",
                priseList: "priseList",
                "home~voucher": "home~voucher",
                voucher: "voucher",
                continuedList: "continuedList",
                loginHistory: "loginHistory",
                newsList: "newsList",
                serviceCaseCategory: "serviceCaseCategory",
                coupon: "coupon",
                home: "home",
                messageList: "messageList",
                challenge: "challenge",
                challengeApply: "challengeApply",
                settingAccountBind: "settingAccountBind",
                challengeCheck: "challengeCheck",
                challengeField: "challengeField",
                exchangeOrder: "exchangeOrder",
                exchangeRecord: "exchangeRecord",
                withdraw: "withdraw",
                "agentBank~agentInfo~agentPhone": "agentBank~agentInfo~agentPhone",
                agentInfo: "agentInfo",
                apply: "apply",
                "bindDisk~bindIp~createBackup~ipDetail": "bindDisk~bindIp~createBackup~ipDetail",
                bindDisk: "bindDisk",
                bindIp: "bindIp",
                createBackup: "createBackup",
                diskInstance: "diskInstance",
                ipDetail: "ipDetail",
                submitWorkorder: "submitWorkorder",
                buy: "buy",
                submitWorkorderTwo: "submitWorkorderTwo",
                "activity.2021": "activity.2021",
                "customer&5g": "customer&5g",
                eComputer: "eComputer",
                eComputer2: "eComputer2",
                enterprise: "enterprise",
                new: "new",
                province: "province",
                security3: "security3",
                trial: "trial",
                workorderSearch: "workorderSearch",
                agentBank: "agentBank",
                agentPhone: "agentPhone",
                "businessOpportunitiesWeekly~pivotalPerson": "businessOpportunitiesWeekly~pivotalPerson",
                businessOpportunitiesWeekly: "businessOpportunitiesWeekly",
                pivotalPerson: "pivotalPerson",
                workorderDemand: "workorderDemand",
                cloudCampus: "cloudCampus",
                identificationStep: "identificationStep",
                info: "info",
                orderList: "orderList",
                orderListHistory: "orderListHistory",
                cloudHostDiscount: "cloudHostDiscount",
                cloudHostDiscount2020: "cloudHostDiscount2020",
                exchangeApply: "exchangeApply",
                noviceSpecialty: "noviceSpecialty",
                smartCampus: "smartCampus",
                appSolutionForm: "appSolutionForm",
                cloudMarket: "cloudMarket",
                collect: "collect",
                my: "my",
                product: "product",
                ctyunVision: "ctyunVision",
                download: "download",
                exchange: "exchange",
                helpCenter: "helpCenter",
                helpCenterDocs: "helpCenterDocs",
                identificationIndex: "identificationIndex",
                identification: "identification",
                login: "login",
                invoice: "invoice",
                jobDetail: "jobDetail",
                messageDetail: "messageDetail",
                modifyPwd: "modifyPwd",
                money: "money",
                news: "news",
                newsDetail: "newsDetail",
                notFound: "notFound",
                noticeDetail: "noticeDetail",
                noticeList: "noticeList",
                operateProduct: "operateProduct",
                qrCodeLogin: "qrCodeLogin",
                rds: "rds",
                recharge: "recharge",
                rechargeResponse: "rechargeResponse",
                record: "record",
                reset: "reset",
                result: "result",
                safeCenter: "safeCenter",
                serviceCase: "serviceCase",
                serviceCaseDetail: "serviceCaseDetail",
                setting: "setting",
                title: "title",
                video: "video",
                workorder: "workorder",
                workorderProgress: "workorderProgress"
            }[e] || e) + "." + {
                202103: "7606ea29",
                2021517: "11596543",
                2021818: "6bd364ea",
                20201218: "56c83fb2",
                "20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c": "ed763bab",
                addBankCard: "60d1294f",
                "add~continuedDetail~edit~order~orderDetail": "2ab2a430",
                add: "7505d39b",
                edit: "36040eb2",
                agent: "8bd5d638",
                "agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa": "cbc7d2ae",
                "agentRecheckFill~detail~order~register~spring": "cd6dcfb5",
                "detail~workorderDetail": "1b2d7da8",
                detail: "90cba75a",
                "challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement": "c6de1a0f",
                orderDetail: "a2d7ed7a",
                workorderDetail: "e8ea0b36",
                write: "4e0335a1",
                "buy~recognition~submitWorkorderTwo": "f1d953ff",
                "chunk-eec5f6b8": "cc17e29e",
                recognition: "38940af3",
                "console~home~my~product": "af801117",
                console: "069f49f6",
                editBankCard: "60fc247f",
                feedback: "a1b5e233",
                qrCodeInOne: "31d6cfe0",
                "202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca": "31d6cfe0",
                "cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a": "acbde69f",
                "cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077": "edfefe7b",
                cdn: "76149fc2",
                cloud: "98078bc5",
                cloudInstance: "69ba2fa2",
                desktop: "50fc6a56",
                physicalMachine: "8bf5ac42",
                workorderManagement: "a15a1b98",
                diskIndex: "c5b687b2",
                ip: "c900cac5",
                "chunk-5f38eea7": "835495c4",
                index: "becb63d6",
                helpCenterDocsDetail: "316f33b4",
                helpCenterPageDetail: "3fe9ad52",
                paymentResponse: "c034cbf6",
                "5G": "08022f5a",
                about: "4ac2203b",
                account: "f7820a4b",
                accountBind: "b8d3eb85",
                activity: "31d6cfe0",
                address: "0db08c86",
                continuedDetail: "d3680095",
                order: "18d52023",
                agentRecheckFill: "fc543257",
                "identification~login~register": "1665b3d2",
                register: "3a338193",
                spring: "a42165b3",
                exchangeAddress: "c5c5125e",
                agentRecheckResult: "663a3d75",
                agentRecheckSubmit: "71f82df5",
                agentSubmit: "41d97b53",
                app: "1af20eac",
                "appSolutionDetail~home~productDetail": "358f1167",
                appSolutionDetail: "6c75b17d",
                productDetail: "cdb72cb3",
                appSolutionIndex: "206d346e",
                auth: "05a3f7e9",
                businessOpportunities: "31d6cfe0",
                channel: "13f36c7f",
                helpCenterSearch: "072d4d01",
                list: "37285cb3",
                priseList: "fb9cd01a",
                "chunk-6b589ffd": "3555396a",
                "home~voucher": "a4e56e57",
                voucher: "2e8baa94",
                continuedList: "5089fcc3",
                loginHistory: "0493843c",
                newsList: "621b394b",
                serviceCaseCategory: "d1ea0f5f",
                coupon: "be05b2b3",
                home: "b52fc80a",
                messageList: "62ab2551",
                challenge: "9cb73442",
                challengeApply: "41598cbd",
                settingAccountBind: "ceaefc4b",
                challengeCheck: "11d2eaee",
                challengeField: "6e24cdbc",
                "chunk-1eec049b": "b02e26bd",
                "chunk-2d213728": "31d6cfe0",
                exchangeOrder: "449174f9",
                exchangeRecord: "ddf35c5c",
                "chunk-4d275443": "edde0b47",
                withdraw: "4e523b72",
                "chunk-7722201c": "ea2a9005",
                "agentBank~agentInfo~agentPhone": "e96e731d",
                agentInfo: "7a8f718e",
                "chunk-2e3a7f6e": "912182df",
                apply: "fefaefde",
                "bindDisk~bindIp~createBackup~ipDetail": "a9212f01",
                bindDisk: "84d3e36c",
                bindIp: "0bc199cb",
                createBackup: "ee593fca",
                diskInstance: "ca504ea9",
                ipDetail: "143ad1b5",
                submitWorkorder: "9092e182",
                buy: "5ffc4f10",
                submitWorkorderTwo: "d025f07c",
                "activity.2021": "0070bdf2",
                "customer&5g": "64cf075c",
                eComputer: "abb25b19",
                eComputer2: "24abf24f",
                enterprise: "ba998c12",
                new: "483663a7",
                province: "009c0cdb",
                security3: "9d83e1ef",
                trial: "273d85ed",
                workorderSearch: "2268c399",
                agentBank: "e6320e1f",
                agentPhone: "788ff25f",
                "businessOpportunitiesWeekly~pivotalPerson": "553631d2",
                businessOpportunitiesWeekly: "731a3ab9",
                pivotalPerson: "71df04ca",
                workorderDemand: "46e9209b",
                cloudCampus: "82fb6b6c",
                identificationStep: "ff2b045a",
                info: "333af362",
                orderList: "e48f0c3b",
                orderListHistory: "fd2c48af",
                cloudHostDiscount: "5a30fa5d",
                cloudHostDiscount2020: "613c5699",
                exchangeApply: "8d0538e7",
                noviceSpecialty: "91cf7adb",
                smartCampus: "5ac5e305",
                "chunk-f374825a": "5653e3df",
                appSolutionForm: "367c1283",
                "chunk-db90efe0": "27bd9d0f",
                cloudMarket: "31d6cfe0",
                collect: "79fb4f0c",
                my: "2c3d4270",
                product: "56d57b48",
                ctyunVision: "a3c47d06",
                download: "9466bb57",
                exchange: "d86083b8",
                helpCenter: "78fc0b2a",
                helpCenterDocs: "7e21b966",
                identificationIndex: "34bf956f",
                identification: "31d6cfe0",
                login: "a7c75c1c",
                invoice: "31d6cfe0",
                jobDetail: "4f5ec63b",
                messageDetail: "9feb3548",
                modifyPwd: "7d1b0fd1",
                money: "371e841c",
                news: "31d6cfe0",
                newsDetail: "1734e35d",
                notFound: "db0258f3",
                noticeDetail: "31d6cfe0",
                noticeList: "9d94bfdb",
                operateProduct: "8b429558",
                qrCodeLogin: "5894efcc",
                rds: "31d6cfe0",
                recharge: "37c88e4b",
                rechargeResponse: "136d4fac",
                record: "31d6cfe0",
                reset: "eda8e96f",
                result: "d6d69a48",
                safeCenter: "83bf4fc8",
                serviceCase: "31d6cfe0",
                serviceCaseDetail: "11e17834",
                setting: "31d6cfe0",
                title: "31d6cfe0",
                video: "31d6cfe0",
                workorder: "496d02f8",
                workorderProgress: "5905bc67",
                "chunk-1936b90a": "cbc7d2ae",
                "chunk-74e30748": "bf492b4d",
                "chunk-7190e4d1": "cd97e2f9",
                "chunk-65d6996c": "f315f4a2",
                "chunk-5577805c": "a6f3f537",
                "chunk-0ac89b64": "cd6dcfb5",
                "chunk-41a7e986": "faba6d72",
                "chunk-69b8d2ae": "cbd7ea72",
                "chunk-bc30c3bc": "c2536d88",
                "chunk-5407991a": "df3a4169",
                "chunk-31fa5bf6": "0a9ad63b",
                "chunk-4cc06d01": "efa28012",
                "chunk-f350c91a": "33b6f03b",
                "chunk-024694d2": "1455c573",
                "chunk-0b3f71a4": "f10d1f9d",
                "chunk-2c2ce9c0": "c18aa804",
                "chunk-5bc05cd0": "792da90d",
                "chunk-aaa3e3c8": "a35b3b9e",
                "chunk-57de39d4": "f0158d6b",
                "chunk-5c4cb6d0": "4f68d914",
                "chunk-6fc7c2c8": "433daa89",
                "chunk-5c4cf7fe": "afdb5a1d",
                "chunk-aebc957e": "b8e21be8",
                "chunk-58526af0": "f739450a",
                "chunk-3d6ad964": "8027743b",
                "chunk-0630cef9": "806b0096",
                "chunk-051790d2": "b15d7e71",
                "chunk-1b40b847": "a5203109",
                "chunk-672dc5c8": "21c0f49f"
            }[e] + ".css", c = u.p + a, i = document.getElementsByTagName("link"), o = 0; o < i.length; o++) {
                var d = i[o]
                  , l = d.getAttribute("data-href") || d.getAttribute("href");
                if ("stylesheet" === d.rel && (l === a || l === c))
                    return n()
            }
            var s = document.getElementsByTagName("style");
            for (o = 0; o < s.length; o++) {
                d = s[o],
                l = d.getAttribute("data-href");
                if (l === a || l === c)
                    return n()
            }
            var p = document.createElement("link");
            p.rel = "stylesheet",
            p.type = "text/css",
            p.onload = n,
            p.onerror = function(n) {
                var a = n && n.target && n.target.src || c
                  , i = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED",
                i.request = a,
                delete r[e],
                p.parentNode.removeChild(p),
                t(i)
            }
            ,
            p.href = c;
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(p)
        }
        )).then((function() {
            r[e] = 0
        }
        )));
        var a = c[e];
        if (0 !== a)
            if (a)
                n.push(a[2]);
            else {
                var i = new Promise((function(n, t) {
                    a = c[e] = [n, t]
                }
                ));
                n.push(a[2] = i);
                var d, l = document.createElement("script");
                l.charset = "utf-8",
                l.timeout = 120,
                u.nc && l.setAttribute("nonce", u.nc),
                l.src = o(e);
                var s = new Error;
                d = function(n) {
                    l.onerror = l.onload = null,
                    clearTimeout(p);
                    var t = c[e];
                    if (0 !== t) {
                        if (t) {
                            var a = n && ("load" === n.type ? "missing" : n.type)
                              , r = n && n.target && n.target.src;
                            s.message = "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")",
                            s.name = "ChunkLoadError",
                            s.type = a,
                            s.request = r,
                            t[1](s)
                        }
                        c[e] = void 0
                    }
                }
                ;
                var p = setTimeout((function() {
                    d({
                        type: "timeout",
                        target: l
                    })
                }
                ), 12e4);
                l.onerror = l.onload = d,
                document.head.appendChild(l)
            }
        return Promise.all(n)
    }
    ,
    u.m = e,
    u.c = a,
    u.d = function(e, n, t) {
        u.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }
    ,
    u.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    u.t = function(e, n) {
        if (1 & n && (e = u(e)),
        8 & n)
            return e;
        if (4 & n && "object" === typeof e && e && e.__esModule)
            return e;
        var t = Object.create(null);
        if (u.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }),
        2 & n && "string" != typeof e)
            for (var a in e)
                u.d(t, a, function(n) {
                    return e[n]
                }
                .bind(null, a));
        return t
    }
    ,
    u.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return u.d(n, "a", n),
        n
    }
    ,
    u.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    u.p = "/wap/main/",
    u.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var d = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = d.push.bind(d);
    d.push = n,
    d = d.slice();
    for (var s = 0; s < d.length; s++)
        n(d[s]);
    var p = l;
    i.push([0, "chunk-vendors"]),
    get_sign = u;
}
)({
    0: function(e, n, t) {
        e.exports = t("b196")
    },
    "04c0": function(e, n, t) {
        e.exports = t.p + "img/loading.696aeaa2.gif"
    },
    "0680": function(e, n, t) {
        "use strict";
        t.d(n, "f", (function() {
            return a
        }
        )),
        t.d(n, "l", (function() {
            return r
        }
        )),
        t.d(n, "a", (function() {
            return c
        }
        )),
        t.d(n, "d", (function() {
            return i
        }
        )),
        t.d(n, "e", (function() {
            return o
        }
        )),
        t.d(n, "c", (function() {
            return p
        }
        )),
        t.d(n, "k", (function() {
            return l
        }
        )),
        t.d(n, "g", (function() {
            return f
        }
        )),
        t.d(n, "m", (function() {
            return s
        }
        )),
        t.d(n, "j", (function() {
            return h
        }
        )),
        t.d(n, "i", (function() {
            return m
        }
        )),
        t.d(n, "b", (function() {
            return b
        }
        )),
        t.d(n, "h", (function() {
            return g
        }
        ));
        t("a481");
        var a = "......"
          , r = 3e3
          , c = {
            1: "个人客户",
            2: "企业客户"
        }
          , i = {
            0: "未实名认证",
            1: "认证审核中",
            2: "认证失败",
            3: "已实名认证",
            4: "认证审核中"
        }
          , o = {
            1: "工商营业执照",
            2: "组织机构代码",
            3: "事业法人",
            4: "社团法人",
            5: "军队代号"
        }
          , u = window.location.origin
          , d = u.replace("m", "app")
          , l = "https://www.ctyun.cn/home/?from=wap "
          , s = ("".concat(u, "/wap/main"),
        "".concat(u, "/wechat/main"))
          , p = "".concat(d, "/app/index.html#")
          , f = "".concat(u, "/alogic-ctyun/account/invoice/Download?fileId=")
          , h = "https://app.ctyun.cn/index/app.html"
          , m = "https://itunes.apple.com/cn/app/id1358565649?mt=8"
          , b = "https://app.ctyun.cn/download/ctyun.apk"
          , g = ""
    },
    "0870": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/5G",
            name: "5G",
            meta: {
                title: "5G+拎包入住",
                platform: ["all"]
            },
            component: function() {
                return t.e("5G").then(t.bind(null, "aa6a"))
            }
        }
    },
    "0881": function(e, n, t) {
        "use strict";
        t("551c"),
        t("96cf");
        var a = t("3b8d")
          , r = (t("7f7f"),
        t("bdd0"));
        function c(e) {
            return i.apply(this, arguments)
        }
        function i() {
            return i = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "track/info",
                            e.abrupt("return", r["a"].post(t, n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            i.apply(this, arguments)
        }
        var o = t("7f6d")
          , u = t("a78e")
          , d = t.n(u)
          , l = t("faac")
          , s = t.n(l)
          , p = t("4773");
        function f() {
            var e = m("sid1")
              , n = m("sid2")
              , t = Object(o["p"])("sidExpires");
            e && t > Date.now() ? n ? h(e) : h() : (h(),
            v()),
            g(k()),
            I(k()),
            console.log("ocpc初始化"),
            Object(p["b"])(),
            Object(p["a"])()
        }
        function h(e) {
            var n = Date.now()
              , t = n + 18e5
              , a = new Date(t);
            e = e || "".concat(n, "-").concat(Object(o["k"])()),
            d.a.set("sid1", e, {
                expires: a
            }),
            d.a.set("sid2", e, {
                expires: a
            }),
            Object(o["K"])("sidExpires", t)
        }
        function m() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "sid1";
            return d.a.get(e)
        }
        function b() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "sid2";
            d.a.remove(e)
        }
        function g(e) {
            e = e ? ++e : 1,
            d.a.set("pvid", e)
        }
        function k() {
            return d.a.get("pvid")
        }
        function v() {
            d.a.remove("pvid")
        }
        function w() {
            return encodeURI(document.URL)
        }
        function y() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = document.referrer;
            return e.name && (n = window.location.origin + "/wap/main" + e.fullPath),
            n
        }
        function I(e) {
            var n = Object(o["p"])("referrerPvid") || {};
            n[document.URL] = e,
            Object(o["K"])("referrerPvid", n)
        }
        function D() {
            var e = Object(o["p"])("referrerPvid") || {};
            return e[y()]
        }
        function C() {
            return Object(o["G"])("referrerPvid")
        }
        function x() {
            var e = Object(p["b"])()
              , n = Object(p["c"])(e);
            if (!n)
                return e;
            var t = Object(p["e"])(e);
            return t.content || ""
        }
        function P() {
            return O.apply(this, arguments)
        }
        function O() {
            return O = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "wap",
                            e.prev = 1,
                            a = t("f0d1"),
                            e.next = 5,
                            new Promise((function(e) {
                                var t = a.miniProgram;
                                t && t.getEnv ? t.getEnv((function(t) {
                                    t.miniprogram && (n = "wechat-manager"),
                                    e()
                                }
                                )) : e()
                            }
                            ));
                        case 5:
                            e.next = 10;
                            break;
                        case 7:
                            return e.prev = 7,
                            e.t0 = e["catch"](1),
                            e.abrupt("return", n);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 7]])
            }
            ))),
            O.apply(this, arguments)
        }
        function R() {
            var e = s.a.os
              , n = s.a.name
              , t = s.a.version
              , a = e.family + "-" + n + "/" + t;
            return a.toLowerCase()
        }
        function S(e) {
            var n;
            function t() {
                n = Date.now()
            }
            function r() {
                Date.now() - n <= 5 && (b(),
                v(),
                C())
            }
            window.addEventListener("beforeunload", t),
            window.addEventListener("unload", r),
            setTimeout(Object(a["a"])(regeneratorRuntime.mark((function n() {
                var t;
                return regeneratorRuntime.wrap((function(n) {
                    while (1)
                        switch (n.prev = n.next) {
                        case 0:
                            return f(),
                            n.t0 = m(),
                            n.t1 = k(),
                            n.t2 = w(),
                            n.t3 = y(e),
                            n.t4 = D(),
                            n.t5 = x(),
                            n.next = 9,
                            P();
                        case 9:
                            n.t6 = n.sent,
                            n.t7 = R(),
                            t = {
                                sid: n.t0,
                                pvid: n.t1,
                                url: n.t2,
                                referer: n.t3,
                                referer_pvid: n.t4,
                                track: n.t5,
                                source: n.t6,
                                sourceType: n.t7
                            },
                            c(t).catch(console.log);
                        case 13:
                        case "end":
                            return n.stop()
                        }
                }
                ), n)
            }
            ))), 0)
        }
        var A = S;
        n["a"] = A
    },
    "0b92": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = [{
            name: "trial.personal",
            path: "/activity/trial/personal",
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("trial")]).then(t.bind(null, "ab1d"))
            },
            props: {
                ACTIVITY_DOMAIN: "trial.personal"
            },
            meta: {
                title: "个人免费试用中心",
                platform: ["all"]
            }
        }, {
            name: "trial.enterprise",
            path: "/activity/trial/enterprise",
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("trial")]).then(t.bind(null, "ab1d"))
            },
            props: {
                ACTIVITY_DOMAIN: "trial.enterprise"
            },
            meta: {
                title: "企业免费试用中心",
                platform: ["all"]
            }
        }]
    },
    "0b94": function(e, n, t) {
        var a = {
            "./20201218/router.js": "142f",
            "./2021/router.js": "42a9",
            "./202103/router.js": "afc4",
            "./2021818/router.js": "6a74",
            "./5G/router.js": "cbd5",
            "./5g/router.js": "0870",
            "./_offline/2021618/router.js": "c51c",
            "./_offline/router.js": "a89b",
            "./cloudCampus/router.js": "1119",
            "./cloudHostDiscount/router.js": "4baf",
            "./cloudHostDiscount2020/router.js": "98ff",
            "./collect/router.js": "582e",
            "./customer&5g/router.js": "4364",
            "./eComputer/router.js": "6803",
            "./eComputer2/router.js": "6992",
            "./enterprise/router.js": "428f",
            "./exchange/router.js": "369c",
            "./index/router.js": "2b5f",
            "./noviceRegister/router.js": "52e7",
            "./noviceSpecialty/router.js": "b124",
            "./security3/router.js": "b713",
            "./smartCampus/router.js": "ad7d",
            "./trial/router.js": "0b92"
        };
        function r(e) {
            var n = c(e);
            return t(n)
        }
        function c(e) {
            if (!t.o(a, e)) {
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND",
                n
            }
            return a[e]
        }
        r.keys = function() {
            return Object.keys(a)
        }
        ,
        r.resolve = c,
        e.exports = r,
        r.id = "0b94"
    },
    1: function(e, n) {},
    1119: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/cloudCampus",
            name: "cloudCampus",
            meta: {
                title: "云创校园",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-2e3a7f6e"), t.e("cloudCampus")]).then(t.bind(null, "02f7"))
            }
        }
    },
    "142f": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/20201218",
            name: "20201218",
            meta: {
                title: "中国电信&云智谷专属活动",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-2e3a7f6e"), t.e("20201218")]).then(t.bind(null, "b383"))
            }
        }
    },
    "2b5f": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/index",
            name: "index",
            meta: {
                title: "最新活动",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "ea20"))
            }
        }
    },
    "2da2": function(e, n, t) {},
    "32ee": function(e, n, t) {
        "use strict";
        t.d(n, "E", (function() {
            return l
        }
        )),
        t.d(n, "o", (function() {
            return p
        }
        )),
        t.d(n, "z", (function() {
            return h
        }
        )),
        t.d(n, "L", (function() {
            return b
        }
        )),
        t.d(n, "K", (function() {
            return k
        }
        )),
        t.d(n, "N", (function() {
            return w
        }
        )),
        t.d(n, "O", (function() {
            return I
        }
        )),
        t.d(n, "m", (function() {
            return C
        }
        )),
        t.d(n, "r", (function() {
            return P
        }
        )),
        t.d(n, "C", (function() {
            return R
        }
        )),
        t.d(n, "f", (function() {
            return A
        }
        )),
        t.d(n, "t", (function() {
            return j
        }
        )),
        t.d(n, "D", (function() {
            return M
        }
        )),
        t.d(n, "B", (function() {
            return T
        }
        )),
        t.d(n, "g", (function() {
            return H
        }
        )),
        t.d(n, "l", (function() {
            return W
        }
        )),
        t.d(n, "k", (function() {
            return $
        }
        )),
        t.d(n, "q", (function() {
            return G
        }
        )),
        t.d(n, "h", (function() {
            return z
        }
        )),
        t.d(n, "G", (function() {
            return Z
        }
        )),
        t.d(n, "A", (function() {
            return K
        }
        )),
        t.d(n, "s", (function() {
            return Q
        }
        )),
        t.d(n, "F", (function() {
            return X
        }
        )),
        t.d(n, "J", (function() {
            return Y
        }
        )),
        t.d(n, "j", (function() {
            return ee
        }
        )),
        t.d(n, "x", (function() {
            return ne
        }
        )),
        t.d(n, "w", (function() {
            return te
        }
        )),
        t.d(n, "y", (function() {
            return ae
        }
        )),
        t.d(n, "n", (function() {
            return re
        }
        )),
        t.d(n, "I", (function() {
            return ce
        }
        )),
        t.d(n, "i", (function() {
            return ie
        }
        )),
        t.d(n, "e", (function() {
            return oe
        }
        )),
        t.d(n, "d", (function() {
            return de
        }
        )),
        t.d(n, "c", (function() {
            return se
        }
        )),
        t.d(n, "b", (function() {
            return fe
        }
        )),
        t.d(n, "a", (function() {
            return me
        }
        )),
        t.d(n, "v", (function() {
            return ge
        }
        )),
        t.d(n, "p", (function() {
            return ve
        }
        )),
        t.d(n, "H", (function() {
            return ye
        }
        )),
        t.d(n, "M", (function() {
            return De
        }
        )),
        t.d(n, "u", (function() {
            return Ce
        }
        ));
        t("8e6e"),
        t("ac6a"),
        t("cadf"),
        t("456d"),
        t("96cf");
        var a = t("bd86")
          , r = t("3b8d")
          , c = t("bdd0")
          , i = t("4328")
          , o = t.n(i);
        function u(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                n && (a = a.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, a)
            }
            return t
        }
        function d(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? u(Object(t), !0).forEach((function(n) {
                    Object(a["a"])(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        function l(e) {
            return s.apply(this, arguments)
        }
        function s() {
            return s = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "account/queryPrivacyAccountInfo",
                            e.abrupt("return", c["a"].get(t));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            s.apply(this, arguments)
        }
        function p(e) {
            return f.apply(this, arguments)
        }
        function f() {
            return f = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "account/getAuditTemp",
                            e.abrupt("return", c["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            f.apply(this, arguments)
        }
        function h() {
            return m.apply(this, arguments)
        }
        function m() {
            return m = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "/order/credit/selfaccountbook",
                            e.abrupt("return", c["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            m.apply(this, arguments)
        }
        function b(e) {
            return g.apply(this, arguments)
        }
        function g() {
            return g = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "account/updateAccount",
                            e.abrupt("return", c["a"].post(t, o.a.stringify({
                                accountInfo: n.personal
                            }), {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            g.apply(this, arguments)
        }
        function k(e) {
            return v.apply(this, arguments)
        }
        function v() {
            return v = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "account/updateAccount",
                            e.abrupt("return", c["a"].post(t, o.a.stringify({
                                accountInfo: n.company
                            }), {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            v.apply(this, arguments)
        }
        function w(e) {
            return y.apply(this, arguments)
        }
        function y() {
            return y = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "alogic-ctyun/self/VerifyMailCode",
                            e.abrupt("return", c["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            y.apply(this, arguments)
        }
        function I(e) {
            return D.apply(this, arguments)
        }
        function D() {
            return D = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "alogic-ctyun/self/VerifyPhoneCode",
                            e.abrupt("return", c["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            D.apply(this, arguments)
        }
        function C() {
            return x.apply(this, arguments)
        }
        function x() {
            return x = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "account/selfaccountbook",
                            e.abrupt("return", c["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            x.apply(this, arguments)
        }
        function P(e) {
            return O.apply(this, arguments)
        }
        function O() {
            return O = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctcloudet/v1/bcc/cash/queryCashTransactionDetail",
                            e.abrupt("return", c["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            O.apply(this, arguments)
        }
        function R() {
            return S.apply(this, arguments)
        }
        function S() {
            return S = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "order/credit/queryCreditAmount",
                            e.abrupt("return", c["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            S.apply(this, arguments)
        }
        function A(e) {
            return B.apply(this, arguments)
        }
        function B() {
            return B = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "order/credit/activeCreditCard",
                            e.abrupt("return", c["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            B.apply(this, arguments)
        }
        function j(e) {
            return L.apply(this, arguments)
        }
        function L() {
            return L = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "order/credit/getCreditTransactionFlow",
                            e.abrupt("return", c["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            L.apply(this, arguments)
        }
        function M() {
            return E.apply(this, arguments)
        }
        function E() {
            return E = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "order/credit/queryInactiveList",
                            e.abrupt("return", c["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            E.apply(this, arguments)
        }
        function T(e) {
            return F.apply(this, arguments)
        }
        function F() {
            return F = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "coupon/list",
                            e.abrupt("return", c["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            F.apply(this, arguments)
        }
        function H(e) {
            return _.apply(this, arguments)
        }
        function _() {
            return _ = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "alogic-ctyun/user/bankacct/New",
                            e.abrupt("return", c["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            _.apply(this, arguments)
        }
        function W(e) {
            return q.apply(this, arguments)
        }
        function q() {
            return q = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "alogic-ctyun/user/bankacct/Update",
                            e.abrupt("return", c["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            q.apply(this, arguments)
        }
        function $(e) {
            return U.apply(this, arguments)
        }
        function U() {
            return U = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "alogic-ctyun/user/bankacct/Delete",
                            e.abrupt("return", c["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            U.apply(this, arguments)
        }
        function G(e) {
            return N.apply(this, arguments)
        }
        function N() {
            return N = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "alogic-ctyun/user/bankacct/List",
                            e.abrupt("return", c["a"].get(t, {
                                params: {
                                    bankacctId: n
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            N.apply(this, arguments)
        }
        function z(e) {
            return V.apply(this, arguments)
        }
        function V() {
            return V = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "alogic-ctyun/account/cash/ApplyWithdraw2",
                            e.abrupt("return", c["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            V.apply(this, arguments)
        }
        function Z(e) {
            return J.apply(this, arguments)
        }
        function J() {
            return J = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "order/payAcct",
                            e.abrupt("return", c["a"].get(t, {
                                params: {
                                    amount: n
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            J.apply(this, arguments)
        }
        function K() {
            var e = "account/queryAllProvince";
            return c["a"].get(e)
        }
        function Q(e) {
            var n = "account/queryProvinceCity";
            return c["a"].get(n, {
                params: {
                    id: e
                }
            })
        }
        function X(e) {
            var n = "account/queryProvinceInfo";
            return c["a"].get(n, {
                params: e
            })
        }
        function Y(e) {
            var n = "account/updateAccount";
            return c["a"].post(n, o.a.stringify(e), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
        }
        function ee() {
            var e = "account/checkAccountType";
            return c["a"].get(e)
        }
        function ne() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = "alogic-ctyun/account/cash/GetWithdrawList";
            return c["a"].get(n, {
                params: d({
                    pageSize: 15
                }, e)
            })
        }
        function te(e) {
            var n = "alogic-ctyun/account/cash/WithdrawDetail";
            return c["a"].get(n, {
                params: {
                    withdrawalId: e
                }
            })
        }
        function ae(e) {
            var n = "alogic-ctyun/account/cash/WithdrawReturn";
            return c["a"].get(n, {
                params: e
            })
        }
        function re(e) {
            var n = "alogic-ctyun/account/cash/GetAmount";
            return c["a"].get(n, {
                params: {
                    withdrawalId: e
                }
            })
        }
        function ce(e) {
            var n = "alogic-ctyun/user/bankacct/UpdateAndSetDef";
            return c["a"].get(n, {
                params: e
            })
        }
        function ie(e) {
            var n = "alogic-ctyun/account/cash/WithdrawBank";
            return c["a"].get(n, {
                params: e
            })
        }
        function oe(e) {
            return ue.apply(this, arguments)
        }
        function ue() {
            return ue = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/self/SendMobileCode",
                            e.abrupt("return", c["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            ue.apply(this, arguments)
        }
        function de(e) {
            return le.apply(this, arguments)
        }
        function le() {
            return le = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/self/SendMobileCodeV3",
                            e.abrupt("return", c["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            le.apply(this, arguments)
        }
        function se() {
            return pe.apply(this, arguments)
        }
        function pe() {
            return pe = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "/alogic-ctyun/self/SendEmailCodeV3",
                            e.abrupt("return", c["a"].get(n, {}));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            pe.apply(this, arguments)
        }
        function fe() {
            return he.apply(this, arguments)
        }
        function he() {
            return he = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "/alogic-ctcloudet/v1/bcc/order/GetTrialBalance",
                            e.abrupt("return", c["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            he.apply(this, arguments)
        }
        function me(e) {
            return be.apply(this, arguments)
        }
        function be() {
            return be = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/ctcloud/self/ActiveAccount",
                            e.abrupt("return", c["a"].get(t, {
                                params: {
                                    accountId: window.btoa(n)
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            be.apply(this, arguments)
        }
        function ge() {
            return ke.apply(this, arguments)
        }
        function ke() {
            return ke = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "/subscription/getReceivers",
                            e.abrupt("return", c["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            ke.apply(this, arguments)
        }
        function ve() {
            return we.apply(this, arguments)
        }
        function we() {
            return we = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "/alogic-ctcloudet/v1/bcc/account/GetBalanceRemind",
                            e.abrupt("return", c["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            we.apply(this, arguments)
        }
        function ye(e, n) {
            return Ie.apply(this, arguments)
        }
        function Ie() {
            return Ie = Object(r["a"])(regeneratorRuntime.mark((function e(n, t) {
                var a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return a = "/alogic-ctcloudet/v1/bcc/account/SetBalanceRemind",
                            e.abrupt("return", c["a"].get(a, {
                                params: {
                                    switchType: n,
                                    remindValue: t
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            Ie.apply(this, arguments)
        }
        function De(e, n) {
            var t = "/account/personalBankAuthLivePhotoUpload?token=".concat(n);
            return c["a"].post(t, e, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        }
        function Ce() {
            var e = "/alogic-ctyun/user/GetCurrent";
            return c["a"].get(e)
        }
        console.log(c["a"], "request")
    },
    "369c": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/exchange",
            component: function() {
                return t.e("exchange").then(t.bind(null, "d7d1"))
            },
            children: [{
                path: "/activity/exchange/record",
                name: "record",
                meta: {
                    title: "兑换记录",
                    auth: !0,
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-2d213728"), t.e("exchangeRecord")]).then(t.bind(null, "dd7c"))
                }
            }, {
                path: "/activity/exchange/selectOrder",
                name: "selectOrder",
                meta: {
                    title: "选择兑换订单",
                    auth: !0,
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-2d213728"), t.e("exchangeOrder")]).then(t.bind(null, "be3d"))
                }
            }, {
                path: "/activity/exchange/apply",
                name: "apply",
                meta: {
                    title: "活动兑换",
                    auth: !0,
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("chunk-2d213728"), t.e("exchangeApply")]).then(t.bind(null, "1804"))
                }
            }, {
                path: "/activity/exchange/address",
                name: "exchangeAddress",
                meta: {
                    title: "收货地址",
                    auth: !0,
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("exchangeAddress")]).then(t.bind(null, "6d6b"))
                }
            }, {
                path: "/activity/exchange/result",
                name: "acResult",
                meta: {
                    title: "兑换结果",
                    auth: !0,
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("exchangeAddress")]).then(t.bind(null, "3607"))
                }
            }, {
                path: "/activity/exchange/exchanged",
                name: "exchanged",
                meta: {
                    title: "已兑换订单",
                    auth: !0,
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("exchangeAddress")]).then(t.bind(null, "6180"))
                }
            }]
        }
    },
    "3fc8": function(e, n, t) {
        "use strict";
        t.d(n, "d", (function() {
            return k
        }
        )),
        t.d(n, "b", (function() {
            return v
        }
        )),
        t.d(n, "c", (function() {
            return w
        }
        ));
        t("96cf");
        var a = t("3b8d")
          , r = (t("a481"),
        t("7f7f"),
        t("7514"),
        t("cadf"),
        t("ac6a"),
        t("28a5"),
        t("551c"),
        t("bdd0"))
          , c = "/alogic-ctcloudet/v1/portal/provinceZone/Get";
        function i(e) {
            return r["a"].get(c, {
                params: {
                    provinceId: e
                }
            })
        }
        function o(e) {
            var n = e;
            if (!n) {
                var t = "无url返回，未拉取到页面数据";
                return Promise.reject(t)
            }
            return r["a"].get(n)
        }
        var u = t("7f6d")
          , d = t("2f62");
        function l(e) {
            var n = {}
              , t = e.split(";");
            return t.forEach((function(e) {
                var t = e.split("=")[0] ? e.split("=")[0].trim() : ""
                  , a = e.split("=")[1] ? e.split("=")[1].trim() : "";
                t && (n[t] = a)
            }
            )),
            n
        }
        var s = function(e) {
            function n(n) {
                if (!e.module)
                    return null;
                var t = e.module.data.item.find((function(e) {
                    return e.groupCode.pValue === n
                }
                ));
                return t ? t.name.pValue : null
            }
            Object.values(e).forEach((function(e) {
                "ArrayEditor" === e.editor ? e.data.item.forEach((function(e) {
                    Object.values(e).forEach((function(e) {
                        ("dataArray" === e.editor || e.type && "dataArray" === e.type.editor) && e.pValue && (e.pValueParse = JSON.parse(e.pValue)),
                        "params" === e.pId && e.pValue && (e.pValueParse = l(e.pValue))
                    }
                    ))
                }
                )) : Object.values(e).forEach((function(e) {
                    ("dataArray" === e.editor || e.type && "dataArray" === e.type.editor) && e.pValue && (e.pValueParse = JSON.parse(e.pValue)),
                    "params" === e.pId && e.pValue && (e.pValueParse = l(e.pValue))
                }
                ))
            }
            ));
            var t = [["seckillTime", "seckillList", "seckill"], ["hotGoodsCategory", "hotGoodsList", "hotGoods"], ["cloudGoodsCategory", "cloudGoodsList", "cloudGoods"], ["caseCategory", "caseList", "cases"]];
            t.forEach((function(t) {
                if (e[t[0]]) {
                    var a = [];
                    e[t[0]].data.item.forEach((function(e) {
                        e.code && a.push({
                            id: e.code,
                            category: e,
                            list: []
                        })
                    }
                    )),
                    e[t[1]] && e[t[1]].data.item.forEach((function(e) {
                        if (e.category.pValue) {
                            var n = Object(u["m"])(a, "id", e.category.pValue);
                            n > -1 && a[n].list.push(e)
                        }
                    }
                    )),
                    e[t[2]] = {
                        id: t[2],
                        name: n(t[2]) || e[t[0]].name.split("-")[0],
                        list: a
                    }
                }
            }
            ));
            var a = [["mixGoodsList", "mixGoods"], ["serviceList", "service"], ["module", "module"]];
            return a.forEach((function(t) {
                e[t[0]] && (e[t[1]] = {
                    id: t[1],
                    name: n(t[1]) || e[t[0]].name.split("-")[0],
                    list: e[t[0]].data.item
                })
            }
            )),
            e
        }
          , p = {
            loaded: !1,
            provinceId: "",
            pageUrl: "",
            pageData: {}
        }
          , f = function(e) {
            return function(n) {
                return n.pageData[e] || null
            }
        }
          , h = {
            provinceId: f("provinceId"),
            module: f("module"),
            topBanner: f("topBanner"),
            seckill: f("seckill"),
            hotGoods: f("hotGoods"),
            cloudGoods: f("cloudGoods"),
            mixGoods: f("mixGoods"),
            service: f("service"),
            cases: f("cases"),
            footBanner: f("footBanner")
        }
          , m = {
            setLoaded: function(e, n) {
                e.loaded = n
            },
            setProvinceId: function(e, n) {
                e.provinceId = n.provinceId
            },
            setMeta: function(e, n) {
                e.pageUrl = n.jsonPath
            },
            setPageData: function(e, n) {
                e.pageData = s(n)
            }
        }
          , b = {
            getData: function() {
                var e = Object(a["a"])(regeneratorRuntime.mark((function e(n, t) {
                    var a, r;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return a = n.dispatch,
                                r = n.commit,
                                r("setLoaded", !1),
                                r("setProvinceId", t),
                                e.next = 5,
                                a("getMeta");
                            case 5:
                                return e.next = 7,
                                a("getPageData");
                            case 7:
                                r("setLoaded", !0);
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                function n(n, t) {
                    return e.apply(this, arguments)
                }
                return n
            }(),
            getMeta: function() {
                var e = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                    var t, a, r;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return t = n.commit,
                                a = n.state,
                                e.next = 3,
                                i(a.provinceId);
                            case 3:
                                r = e.sent,
                                t("setMeta", r.data);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                function n(n) {
                    return e.apply(this, arguments)
                }
                return n
            }(),
            getPageData: function() {
                var e = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                    var t, a, r;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return t = n.commit,
                                a = n.state,
                                e.next = 3,
                                o(a.pageUrl);
                            case 3:
                                r = e.sent,
                                t("setPageData", r.data);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                function n(n) {
                    return e.apply(this, arguments)
                }
                return n
            }()
        }
          , g = (n["a"] = {
            namespaced: !0,
            state: p,
            getters: h,
            mutations: m,
            actions: b
        },
        Object(d["a"])("province"))
          , k = g.mapState
          , v = g.mapActions
          , w = g.mapGetters
    },
    "428f": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            name: "enterprise",
            path: "/activity/enterprise",
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("enterprise")]).then(t.bind(null, "29e6"))
            },
            meta: {
                title: "云领智企 助力百万企业转型腾飞",
                platform: ["all"]
            },
            children: [{
                name: "enterprise.page",
                path: "/enterprise/:column",
                meta: {
                    title: "云领智企 助力百万企业转型腾飞",
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("enterprise")]).then(t.bind(null, "09ad"))
                }
            }]
        }
    },
    "42a9": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = [{
            path: "/activity/2021/:activityId/:sub",
            name: "activity.2021.sub",
            meta: {
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("activity.2021")]).then(t.bind(null, "3049"))
            }
        }, {
            path: "/activity/2021/:activityId",
            name: "activity.2021",
            meta: {
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("activity.2021")]).then(t.bind(null, "3049"))
            }
        }, {
            path: "/activity/2022/:activityId/:sub",
            name: "activity.2022.sub",
            meta: {
                platform: ["all"]
            },
            props: {
                prefix: "2022"
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("activity.2021")]).then(t.bind(null, "3049"))
            }
        }, {
            path: "/activity/2022/:activityId",
            name: "activity.2022",
            meta: {
                platform: ["all"]
            },
            props: {
                prefix: "2022"
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("activity.2021")]).then(t.bind(null, "3049"))
            }
        }]
    },
    4360: function(e, n, t) {
        "use strict";
        var a = t("2b0e")
          , r = t("2f62")
          , c = (t("f751"),
        t("6bf2"))
          , i = t("7f6d")
          , o = t("2ef0")
          , u = t.n(o)
          , d = {}
          , l = {
            namespaced: !0,
            state: u.a.cloneDeep(d),
            mutations: {
                reset: function(e) {
                    Object.assign(e, d)
                }
            },
            actions: {
                login: function(e, n) {
                    var t = e.commit;
                    c["default"].updateLoginStatus(!0),
                    t("account/setUserInfo", n, {
                        root: !0
                    })
                },
                logout: function(e) {
                    var n = e.commit;
                    e.rootState;
                    c["default"].updateLoginStatus(!1),
                    Object(i["G"])("addressInfo"),
                    Object(i["G"])("invoiceInfo"),
                    Object(i["G"])("userInfo"),
                    n("auth/reset", null, {
                        root: !0
                    }),
                    n("account/reset", null, {
                        root: !0
                    })
                }
            }
        }
          , s = l
          , p = t("768b")
          , f = (t("551c"),
        t("ac6a"),
        t("cadf"),
        t("5df3"),
        t("32ee"))
          , h = t("7306")
          , m = t("0680")
          , b = {
            userInfo: {},
            privacyUserInfo: {},
            queryAccountInfoPromise: null,
            capital: {},
            voucher: {},
            coupon: {}
        }
          , g = {
            a: {
                b: 1
            }
        }
          , k = {
            namespaced: !0,
            state: u.a.cloneDeep(b),
            mutations: {
                setUserInfo: function(e, n) {
                    Object(i["K"])("userInfo", n),
                    e.userInfo = n
                },
                setPrivacyUserInfo: function(e, n) {
                    Object(i["K"])("privacyUserInfo", n),
                    e.privacyUserInfo = n
                },
                setAccountCapital: function(e, n) {
                    e.capital = n
                },
                setAccountVoucher: function(e, n) {
                    e.voucher = n
                },
                setAccountCoupon: function(e, n) {
                    e.coupon = n
                },
                reset: function(e) {
                    Object.assign(e, b)
                },
                setUserItemInfo: function(e, n) {
                    Object.assign(e.userInfo, n),
                    Object.assign(e.privacyUserInfo, n)
                },
                setQueryAccountInfoPromise: function(e, n) {
                    e.queryAccountInfoPromise = n
                }
            },
            getters: {
                authStateText: function(e) {
                    return m["d"][e.userInfo.auditStatus - 0] || ""
                },
                auditStatus: function(e) {
                    return e.userInfo.auditStatus
                },
                accountType: function(e) {
                    return e.userInfo.accountType
                },
                accountCanceling: function(e) {
                    var n = e.userInfo.invalidStatus;
                    return "1" === "".concat(n) || "2" === "".concat(n)
                }
            },
            actions: {
                queryAccountInfo: function(e) {
                    var n = e.commit
                      , t = (e.state,
                    Object(f["E"])().then((function(e) {
                        return n("setPrivacyUserInfo", e.data),
                        Promise.all([Object(h["g"])(), Promise.resolve(e.data)])
                    }
                    )).then((function(e) {
                        var t = Object(p["a"])(e, 2)
                          , a = t[0]
                          , r = t[1]
                          , c = !1;
                        "101" === a.data.status && (c = !0),
                        r.emailStatus = c,
                        r.test = g.a.b,
                        g.a.b = g.a.b + 1,
                        n("setUserInfo", r)
                    }
                    )));
                    return n("setQueryAccountInfoPromise", t),
                    t
                },
                queryAccountCapital: function(e) {
                    var n = e.commit;
                    return Object(f["z"])().then((function(e) {
                        n("setAccountCapital", e.data)
                    }
                    ))
                },
                queryInactiveList: function(e) {
                    var n = e.commit;
                    return Object(f["D"])().then((function(e) {
                        n("setAccountVoucher", e.data)
                    }
                    ))
                },
                queryCouponList: function(e, n) {
                    var t = e.commit;
                    return Object(f["B"])(n).then((function(e) {
                        t("setAccountCoupon", e.data)
                    }
                    ))
                }
            }
        }
          , v = k
          , w = (t("7f7f"),
        {
            active: 0,
            remark: "",
            createAgency: {
                agencyType: 2,
                agencyLevel: 3,
                agencySort: 1
            },
            contractData: {},
            bankData: {}
        })
          , y = {
            changeValue: function(e, n) {
                var t = n.name
                  , a = n.value;
                e[t] = a
            },
            setAgencyData: function(e, n) {
                Object.assign(e.createAgency, n)
            },
            setContractData: function(e, n) {
                Object.assign(e.contractData, n)
            },
            setBankData: function(e, n) {
                Object.assign(e.bankData, n)
            },
            setContractDataTypeActive: function(e, n) {
                e.contractData["typeActive"] = n
            },
            changeContractData: function(e, n) {
                var t = n.name
                  , a = n.value;
                e.contractData[t] = a
            },
            clearContractData: function(e, n) {
                e.contractData = n
            },
            clearBankData: function(e, n) {
                e.bankData = n
            },
            changeBankData: function(e, n) {
                var t = n.name
                  , a = n.value;
                e.bankData[t] = a
            }
        }
          , I = {}
          , D = {}
          , C = {
            namespaced: !0,
            state: w,
            mutations: y,
            actions: I,
            getters: D
        }
          , x = {
            globalModalClassName: "",
            modal: {}
        }
          , P = {
            MODAL_CLASS_NAME: function(e, n) {
                e.globalModalClassName = n
            },
            ADD_MODAL: function(e, n) {
                var t = n.id
                  , a = n.modal;
                e.modal[t] = a
            },
            DELETE_MODAL: function(e, n) {
                delete e.modal[n]
            },
            OPEN_MODAL: function(e, n) {
                var t = e.modal[n];
                t && t.open()
            }
        }
          , O = {
            SET_MODAL_CLASS_NAME: function(e, n) {
                var t = e.commit;
                t("MODAL_CLASS_NAME", n)
            },
            ADD_MODAL: function(e, n) {
                var t = e.commit;
                t("ADD_MODAL", n)
            },
            DELETE_MODAL: function(e, n) {
                var t = e.commit;
                t("DELETE_MODAL", n)
            },
            openModal: function(e, n) {
                var t = e.commit;
                t("OPEN_MODAL", n)
            }
        }
          , R = {
            namespaced: !0,
            state: x,
            actions: O,
            mutations: P
        }
          , S = t("3fc8");
        a["default"].use(r["b"]);
        n["a"] = new r["b"].Store({
            modules: {
                auth: s,
                account: v,
                agent: C,
                activity: R,
                province: S["a"]
            }
        })
    },
    4364: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = [{
            name: "activity.customer",
            path: "/activity/customer",
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("customer&5g")]).then(t.bind(null, "02c7"))
            },
            meta: {
                title: "客户IT上云",
                platform: ["all"]
            },
            props: {
                ACTIVITY_DOMAIN: "customer"
            }
        }, {
            name: "activity.5gcustom",
            path: "/activity/5gcustom",
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("customer&5g")]).then(t.bind(null, "02c7"))
            },
            meta: {
                title: "5G定制网",
                platform: ["all"]
            },
            props: {
                ACTIVITY_DOMAIN: "5g"
            }
        }]
    },
    4773: function(e, n, t) {
        "use strict";
        t.d(n, "d", (function() {
            return D
        }
        )),
        t.d(n, "a", (function() {
            return h
        }
        )),
        t.d(n, "b", (function() {
            return u
        }
        )),
        t.d(n, "c", (function() {
            return d
        }
        )),
        t.d(n, "e", (function() {
            return l
        }
        ));
        t("8e6e"),
        t("ac6a"),
        t("cadf"),
        t("456d");
        var a = t("bd86")
          , r = t("7618")
          , c = (t("28a5"),
        t("4917"),
        t("3b2b"),
        function(e, n, t) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "/"
              , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ""
              , c = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
              , i = new Date;
            t && i.setMinutes(i.getMinutes() + +t),
            document.cookie = e + "=" + escape("" + n) + (t ? ";expires=" + i.toUTCString() : "") + (a ? ";path=" + a : "") + (r ? ";domain=" + r : "") + (c ? ";secure=true" : "")
        }
        )
          , i = function(e) {
            var n = new RegExp("(^| )" + e + "(?:=([^;]*))?(;|$)")
              , t = document.cookie.match(n);
            return t && t[2] ? unescape(t[2]) : ""
        }
          , o = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.hash
              , t = new RegExp("(^|&)" + e + "=([^&#]*)([&#]?)")
              , a = n.substr(n.indexOf("?") + 1).match(t);
            return a ? a[2] : ""
        }
          , u = function() {
            var e = o("track", window.location.href) || "";
            return e = window.decodeURIComponent(e),
            e && c("ct_m_track", e, null, "/", ".ctyun.cn"),
            e || i("ct_m_track") || ""
        }
          , d = function(e) {
            return e = e || u(),
            e.indexOf("-") > -1 && e.indexOf("_") > -1
        }
          , l = function(e) {
            e = e || u();
            var n = d(e)
              , t = {};
            if (!n)
                return t;
            var a = e.split("-");
            return a.forEach((function(e) {
                var n = e.split("_");
                t[n[0]] = n[1] || ""
            }
            )),
            t
        }
          , s = function(e) {
            var n = ["source_360ps", "source_360ms", "source_360zs", "source_360web"];
            return n.some((function(n) {
                return e.indexOf(n) > -1
            }
            ))
        }
          , p = function(e) {
            return o("bd_vid", e) || ""
        }
          , f = function(e) {
            e = e || window.location.href;
            var n = s(e) || p(e);
            return n
        }
          , h = function() {
            var e = window.location.href
              , n = f(e);
            return n && c("ct_m_ocpc_url", e, null, "/", ".ctyun.cn"),
            n ? e : i("ct_m_ocpc_url")
        }
          , m = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            n = JSON.stringify(n),
            navigator.sendBeacon(e, n)
        }
          , b = t("7f6d");
        function g(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                n && (a = a.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, a)
            }
            return t
        }
        function k(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? g(Object(t), !0).forEach((function(n) {
                    Object(a["a"])(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var v = "/collection/gw/pv/BaiduOcpc"
          , w = "/collection/gw/pv/UploadWebConvert"
          , y = {
            source_360ps: "ocpc_ps_convert",
            source_360ms: "ocpc_ms_convert",
            source_360zs: "ocpc_zs_convert",
            source_360web: "ocpc_web_convert"
        }
          , I = function(e) {
            if (!e)
                return !1;
            var n = u()
              , t = decodeURIComponent(o("track", e));
            return n === t
        }
          , D = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3
              , n = h();
            I(n) && (p(n) ? C(n, e) : x(n))
        };
        window.ocpcReport = D;
        var C = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3
              , t = "object" === Object(r["a"])(n) ? k(k({}, n), {}, {
                logidUrl: e
            }) : {
                newType: n,
                logidUrl: e
            }
              , a = {
                conversions: [t]
            }
              , c = l()
              , i = c.source;
            i && (a.source = i);
            var o = {
                data: a
            };
            m(v, o)
        }
          , x = function(e) {
            var n = Object.keys(y).filter((function(n) {
                return e.indexOf(n) > -1
            }
            ))[0]
              , t = y[n]
              , a = Math.floor(Date.now() / 1e3)
              , r = "" + Date.now() + Object(b["k"])()
              , c = {
                requestTime: a,
                dataIndustry: t,
                transId: r,
                event: "SUBMIT",
                eventTime: a
            }
              , i = o("qhclickid", e);
            i && (c.qhcLickId = i);
            var u = {
                data: c
            };
            m(w, u)
        }
    },
    "4baf": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/cloudHostDiscount",
            name: "cloudHostDiscount",
            meta: {
                title: "云主机特惠",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("chunk-2d213728"), t.e("cloudHostDiscount")]).then(t.bind(null, "2740"))
            }
        }
    },
    "52e7": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/noviceRegister",
            name: "noviceRegister",
            meta: {
                title: "新手注册",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("chunk-2d213728"), t.e("noviceSpecialty")]).then(t.bind(null, "da68"))
            }
        }
    },
    "582e": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/collect",
            name: "collect",
            meta: {
                title: "新年大Fang价-建站活动",
                platform: ["all"]
            },
            component: function() {
                return t.e("collect").then(t.bind(null, "58d5"))
            }
        }
    },
    6715: function(e, n, t) {},
    6803: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = [{
            name: "activity.eComputer",
            path: "/activity/eComputer",
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("eComputer")]).then(t.bind(null, "1eea"))
            },
            meta: {
                title: "0元试用云电脑",
                platform: ["all"]
            }
        }]
    },
    6992: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = [{
            name: "activity.eComputer2",
            path: "/activity/eComputer2",
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("eComputer2")]).then(t.bind(null, "c709"))
            },
            meta: {
                title: "随身云电脑",
                platform: ["all"]
            },
            props: {
                activityId: "eComputer2"
            }
        }]
    },
    "6a74": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = [{
            path: "/activity/2021818",
            name: "activity.2021818",
            meta: {
                title: "818大促",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("2021818")]).then(t.bind(null, "1834"))
            },
            props: {
                activityId: "2021818",
                color: "#FFFFFF",
                background: "linear-gradient(#1D2364 0%, #1D2364 2.6rem, #3B207E 42%, #2E2FA8 100%)"
            }
        }, {
            name: "activity.2021818.renew",
            path: "/activity/2021818/renew",
            meta: {
                title: "老用户续费专区",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("2021818")]).then(t.bind(null, "1834"))
            },
            props: {
                activityId: "2021818.renew",
                background: "#1E2365",
                color: "#FFFFFF"
            }
        }]
    },
    "6bf2": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = !1
          , r = {
            updateLoginStatus: function(e) {
                a = e
            },
            isLogin: function() {
                return a
            }
        }
          , c = r;
        n["default"] = c
    },
    7306: function(e, n, t) {
        "use strict";
        t.d(n, "r", (function() {
            return c
        }
        )),
        t.d(n, "p", (function() {
            return o
        }
        )),
        t.d(n, "o", (function() {
            return d
        }
        )),
        t.d(n, "q", (function() {
            return s
        }
        )),
        t.d(n, "x", (function() {
            return f
        }
        )),
        t.d(n, "v", (function() {
            return m
        }
        )),
        t.d(n, "w", (function() {
            return g
        }
        )),
        t.d(n, "m", (function() {
            return v
        }
        )),
        t.d(n, "k", (function() {
            return y
        }
        )),
        t.d(n, "n", (function() {
            return D
        }
        )),
        t.d(n, "a", (function() {
            return x
        }
        )),
        t.d(n, "f", (function() {
            return O
        }
        )),
        t.d(n, "g", (function() {
            return S
        }
        )),
        t.d(n, "e", (function() {
            return B
        }
        )),
        t.d(n, "b", (function() {
            return L
        }
        )),
        t.d(n, "d", (function() {
            return E
        }
        )),
        t.d(n, "i", (function() {
            return F
        }
        )),
        t.d(n, "c", (function() {
            return _
        }
        )),
        t.d(n, "h", (function() {
            return q
        }
        )),
        t.d(n, "j", (function() {
            return U
        }
        )),
        t.d(n, "t", (function() {
            return N
        }
        )),
        t.d(n, "l", (function() {
            return V
        }
        )),
        t.d(n, "s", (function() {
            return J
        }
        )),
        t.d(n, "y", (function() {
            return Q
        }
        )),
        t.d(n, "u", (function() {
            return Y
        }
        ));
        t("551c"),
        t("96cf");
        var a = t("3b8d")
          , r = t("bdd0");
        function c(e) {
            return i.apply(this, arguments)
        }
        function i() {
            return i = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "account/login",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            i.apply(this, arguments)
        }
        function o() {
            return u.apply(this, arguments)
        }
        function u() {
            return u = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "thirdLogin/getBrief",
                            e.abrupt("return", r["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            u.apply(this, arguments)
        }
        function d(e) {
            return l.apply(this, arguments)
        }
        function l() {
            return l = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "thirdLogin/createOpenUser",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            l.apply(this, arguments)
        }
        function s() {
            return p.apply(this, arguments)
        }
        function p() {
            return p = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "thirdLogin/getOpenUser",
                            e.abrupt("return", r["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            p.apply(this, arguments)
        }
        function f(e) {
            return h.apply(this, arguments)
        }
        function h() {
            return h = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "thirdLogin/unbindOpenUser",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            h.apply(this, arguments)
        }
        function m(e) {
            return b.apply(this, arguments)
        }
        function b() {
            return b = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/account/sendMobileCode",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            b.apply(this, arguments)
        }
        function g(e) {
            return k.apply(this, arguments)
        }
        function k() {
            return k = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/account/sendMobileCodeSpring",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            k.apply(this, arguments)
        }
        function v(e) {
            return w.apply(this, arguments)
        }
        function w() {
            return w = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/account/createAccountWithCodeAfterCheck",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            w.apply(this, arguments)
        }
        function y(e) {
            return I.apply(this, arguments)
        }
        function I() {
            return I = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/account/checkRegisterPassword",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            I.apply(this, arguments)
        }
        function D(e) {
            return C.apply(this, arguments)
        }
        function C() {
            return C = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/account/createAccount",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            C.apply(this, arguments)
        }
        function x(e) {
            return P.apply(this, arguments)
        }
        function P() {
            return P = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/self/CheckEmail",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            P.apply(this, arguments)
        }
        function O(e) {
            return R.apply(this, arguments)
        }
        function R() {
            return R = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/user/findPass/QueryEmailStatus",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            R.apply(this, arguments)
        }
        function S(e) {
            return A.apply(this, arguments)
        }
        function A() {
            return A = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/user/findPass/QueryEmailStatus2",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            A.apply(this, arguments)
        }
        function B(e) {
            return j.apply(this, arguments)
        }
        function j() {
            return j = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/user/findPass/QueryEmailStat",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            j.apply(this, arguments)
        }
        function L(e) {
            return M.apply(this, arguments)
        }
        function M() {
            return M = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/user/findPass/CheckEmailSame",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            M.apply(this, arguments)
        }
        function E(e) {
            return T.apply(this, arguments)
        }
        function T() {
            return T = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/user/findPass/QueryEmailList",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            T.apply(this, arguments)
        }
        function F(e) {
            return H.apply(this, arguments)
        }
        function H() {
            return H = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/self/SendEmailCode",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            H.apply(this, arguments)
        }
        function _(e) {
            return W.apply(this, arguments)
        }
        function W() {
            return W = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/self/CheckMobile",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            W.apply(this, arguments)
        }
        function q(e) {
            return $.apply(this, arguments)
        }
        function $() {
            return $ = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/self/SendMobileCode",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            $.apply(this, arguments)
        }
        function U(e) {
            return G.apply(this, arguments)
        }
        function G() {
            return G = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/self/VerifySmsCode",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            G.apply(this, arguments)
        }
        function N(e) {
            return z.apply(this, arguments)
        }
        function z() {
            return z = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/user/findPass/ResetPwdNew",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            z.apply(this, arguments)
        }
        function V() {
            return Z.apply(this, arguments)
        }
        function Z() {
            return Z = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "account/validateToken",
                            e.abrupt("return", r["a"].get(n, {
                                headers: {
                                    noAuth: !0
                                }
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            Z.apply(this, arguments)
        }
        function J() {
            return K.apply(this, arguments)
        }
        function K() {
            return K = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "account/logout",
                            e.abrupt("return", r["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            K.apply(this, arguments)
        }
        function Q(e) {
            return X.apply(this, arguments)
        }
        function X() {
            return X = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/alogic-ctyun/user/pwd/Update",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            X.apply(this, arguments)
        }
        function Y(e) {
            return ee.apply(this, arguments)
        }
        function ee() {
            return ee = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "/saml/bind",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            ee.apply(this, arguments)
        }
    },
    "7f6d": function(e, n, t) {
        "use strict";
        t.d(n, "t", (function() {
            return Y
        }
        )),
        t.d(n, "E", (function() {
            return ee
        }
        )),
        t.d(n, "j", (function() {
            return y
        }
        )),
        t.d(n, "d", (function() {
            return I
        }
        )),
        t.d(n, "M", (function() {
            return D
        }
        )),
        t.d(n, "r", (function() {
            return C
        }
        )),
        t.d(n, "q", (function() {
            return x
        }
        )),
        t.d(n, "L", (function() {
            return P
        }
        )),
        t.d(n, "w", (function() {
            return O
        }
        )),
        t.d(n, "u", (function() {
            return R
        }
        )),
        t.d(n, "A", (function() {
            return S
        }
        )),
        t.d(n, "a", (function() {
            return A
        }
        )),
        t.d(n, "b", (function() {
            return B
        }
        )),
        t.d(n, "N", (function() {
            return L
        }
        )),
        t.d(n, "J", (function() {
            return M
        }
        )),
        t.d(n, "I", (function() {
            return E
        }
        )),
        t.d(n, "c", (function() {
            return T
        }
        )),
        t.d(n, "f", (function() {
            return F
        }
        )),
        t.d(n, "i", (function() {
            return H
        }
        )),
        t.d(n, "k", (function() {
            return _
        }
        )),
        t.d(n, "C", (function() {
            return W
        }
        )),
        t.d(n, "z", (function() {
            return b
        }
        )),
        t.d(n, "y", (function() {
            return g
        }
        )),
        t.d(n, "v", (function() {
            return w
        }
        )),
        t.d(n, "x", (function() {
            return U
        }
        )),
        t.d(n, "H", (function() {
            return G
        }
        )),
        t.d(n, "B", (function() {
            return N
        }
        )),
        t.d(n, "K", (function() {
            return V
        }
        )),
        t.d(n, "p", (function() {
            return Z
        }
        )),
        t.d(n, "G", (function() {
            return J
        }
        )),
        t.d(n, "g", (function() {
            return K
        }
        )),
        t.d(n, "D", (function() {
            return X
        }
        )),
        t.d(n, "o", (function() {
            return ne
        }
        )),
        t.d(n, "e", (function() {
            return re
        }
        )),
        t.d(n, "l", (function() {
            return ce
        }
        )),
        t.d(n, "h", (function() {
            return te
        }
        )),
        t.d(n, "F", (function() {
            return ae
        }
        )),
        t.d(n, "s", (function() {
            return ie
        }
        )),
        t.d(n, "m", (function() {
            return oe
        }
        )),
        t.d(n, "n", (function() {
            return ue
        }
        ));
        t("456d");
        var a = t("75fc")
          , r = t("7618")
          , c = (t("6762"),
        t("2fdb"),
        t("3b2b"),
        t("768b"))
          , i = (t("cadf"),
        t("ac6a"),
        t("a481"),
        t("551c"),
        t("4917"),
        t("28a5"),
        t("5fc6"),
        t("5af2"))
          , o = t.n(i)
          , u = (t("6b54"),
        t("0680"))
          , d = t("80e3")
          , l = t.n(d)
          , s = t("3452")
          , p = t.n(s)
          , f = t("c466")
          , h = null
          , m = function(e) {
            return function(n) {
                return Object.prototype.toString.call(n) === "[object ".concat(e, "]")
            }
        }
          , b = m("String")
          , g = m("Object")
          , k = m("RegExp")
          , v = m("Function")
          , w = m("Boolean")
          , y = function(e) {
            return e !== u["f"] ? (+e / 100).toFixed(2) : e
        }
          , I = function(e) {
            e.hide || D(e || "未知错误")
        }
          , D = function(e) {
            var n = e.message
              , t = void 0 === n ? e : n
              , a = e.duration
              , r = void 0 === a ? u["l"] : a;
            return h && h.close(),
            h = o()(t),
            setTimeout((function() {
                h.close()
            }
            ), r),
            h
        }
          , C = function(e) {
            e.preventDefault()
        }
          , x = function(e) {
            e.target.src = l.a
        }
          , P = function(e, n) {
            return e.split(n || "<separator />")
        }
          , O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        }
          , R = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return e.indexOf("Android") > -1 || e.indexOf("Adr") > -1
        }
          , S = function() {
            var e = !1;
            try {
                var n = Object.defineProperty({}, "passive", {
                    get: function() {
                        return e = !0,
                        e
                    }
                });
                window.addEventListener("test", null, n),
                window.removeEventListener("test", null)
            } catch (t) {
                I(t)
            }
            return e
        }
          , A = function(e, n) {
            return new Promise((function(t, a) {
                var r = n.type
                  , c = void 0 === r ? "image/jpeg" : r
                  , i = n.ratio
                  , o = void 0 === i ? .7 : i
                  , u = n.fidelity
                  , d = void 0 === u ? .92 : u
                  , l = new Image;
                l.src = e,
                l.onload = function() {
                    var e = document.createElement("canvas")
                      , n = e.getContext("2d");
                    e.width = this.width * o,
                    e.height = this.height * o,
                    n.drawImage(l, 0, 0, e.width, e.height),
                    e.toBlob((function(e) {
                        t(e)
                    }
                    ), c, d)
                }
                ,
                l.onerror = function(e) {
                    a(e)
                }
            }
            ))
        }
          , B = function(e) {
            return e.replace(/&#39;/g, "'").replace(/&quot;/g, '"')
        }
          , j = function() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.continueLength, t = void 0 === n ? 3 : n, a = [{
                list: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
            }, {
                list: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
            }, {
                list: ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
            }, {
                list: ["z", "x", "c", "v", "b", "n", "m"]
            }].map((function(e) {
                return e.xContinueKeyList = [],
                e.xReverseContinueKeyList = [],
                e.yLeftContinueKeyList = [],
                e.yLeftReverseContinueKeyList = [],
                e.yRightContinueKeyList = [],
                e.yRightReverseContinueKeyList = [],
                e
            }
            )), r = 0; r < a.length; r++)
                for (var i = 0; i < a[r].list.length; i++) {
                    var o = a[r].list;
                    if (i < o.length - 2) {
                        for (var u = "", d = 0; d < t; d++)
                            u += o[i + d];
                        a[r].xContinueKeyList.push(u),
                        a[r].xReverseContinueKeyList.push(Q(u))
                    }
                }
            var l = a.reduce((function(e, n) {
                var t = [];
                return Object.entries(n).forEach((function(e) {
                    var n = Object(c["a"])(e, 2)
                      , a = n[0]
                      , r = n[1];
                    "list" !== a && (t = t.concat(r))
                }
                )),
                e = e.concat(t),
                e
            }
            ), []);
            return l
        }
          , L = {
            isChinese: function(e) {
                return /^[\u4e00-\u9fa5]+$/.test(e.toString().trim())
            },
            name: function(e) {
                return /^[\u4E00-\u9FA5A-Za-z]+$/.test(e.toString().trim())
            },
            postNo: function(e) {
                return /^[1-9][0-9]{5}$/.test(e.toString().trim())
            },
            phone: function(e) {
                return /^1(3|4|5|6|7|8|9)\d{9}$/.test(e.toString().trim())
            },
            email: function(e) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e.toString().trim())
            },
            bankCard: function(e) {
                return /^\d{9,30}$/.test(e.toString().trim())
            },
            subBranchNo: function(e) {
                return 12 === e.toString().trim().length
            },
            idCard: function(e) {
                return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(e.toString().trim())
            },
            isBusinessNo: function(e) {
                return /^[0-9A-Za-z]{9,18}$/.test(e.toString().trim())
            },
            isBusinessName: function(e) {
                return /^[^0-9A-Za-z]{2,}$/.test(e.toString().trim())
            },
            isAuthorizerName: function(e) {
                return /^[^0-9]{2,}$/.test(e.toString().trim())
            },
            taxpayerNo: function(e) {
                return /^[A-Za-z0-9]+$/.test(e.toString().trim())
            },
            ip: function(e) {
                return /^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$/.test(e.toString().trim())
            },
            password: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , t = n.minLength
                  , a = void 0 === t ? 8 : t
                  , r = n.maxLength
                  , c = void 0 === r ? 26 : r
                  , i = n.account
                  , o = void 0 === i ? "" : i;
                function u() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n;
                    return function(t) {
                        return t.length >= e && t.length <= n
                    }
                }
                function d() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return new RegExp("^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z~!@#$%^*_+\\-{\\[\\]}:?,.\\/]+$)(?![a-z0-9]+$)(?![a-z~!@#$%^*_+\\-{\\[\\]}:?,.\\/]+$)(?![0-9~!@#$%^*_+\\-{\\[\\]}:?,.\\/]+$)[a-zA-Z0-9~!@#$%^*_+\\-{\\[\\]}:?,.\\/]{".concat(a, ",").concat(c, "}$")).test(e)
                }
                function l(e) {
                    return function(n) {
                        return !!e && (e = e.toLowerCase().split("@")[0],
                        n = n.toLowerCase(),
                        !n.includes(e) && !n.includes(Q(e)))
                    }
                }
                function s() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return !j().some((function(n) {
                        return e.toLowerCase().includes(n)
                    }
                    ))
                }
                function p() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , n = ["Weidong13@", "Pr@ject94", "Pr@ject4", "Pr@ject9", "gzbljc2014!.", "ZX@USS_135246", "nsc&57711135", "tele@HB3*8=2.1", "ZXIPTV_13", "U_tywg_2008", "jiangyanjingwa520.", "1..1administrator", "ZTE@iptv2009", "fshg1433..1", "sf100769978 ..1", "14759179..a", "SqlGdn@InfoxMas2008", "SqlMsde@InfoxEie2000", "Infox1Eies2Sps3Was4!", "Infox4Sms3Sps2Was1!", "zxr10!^**", "ZTE@uss100ZXM10", "cmnet2010@zte", "1qaz@WSX3edc$RFV", "1qaz@WSX", "HPP187 SYS", "P@55w0rd!", "UI-PSWD-01", "UI-PSWD-02", "and 2000 Series", "r@p8p0r+", "tellabs#1", "wrgg15_di524", "P@ssw0rd2017", "P@ssw0rd2018", "R&g3x3vi1", "P@ssw0rd", "P@ssword1", "1qazXSW@", "!QAZ2wsx", "Abc@1396", "P@ssw0rd1", "Pa$$w0rd", "p4$$w0rd", "P@ssw19rd", "Passw0rd!", "P@55w0rd", "p@$$w0rd", "dlghtmxm2017!!", "Password1!", "!QAZ2wsx#EDC", "!QAZ2wsx3edc", "Muklesr0x!221845", "P@55word", "!QAZxsw2", "Server@2017", "zaq1@WSX", "rhsdlek1!", "P@ssw0rds", "@P@ssw0rd", "P@ssw9rd", "P@ssw0rd02", "$easyWinArt4", "M3d!aP0rtal", "Pr!vat3Sh3llAcc3sS", "P@ssw0rd!", "P@ssw0rd1!", "1qaz$RFV", "@P@ssword1", "p@ssword1!", "1qaz2wsx#EDC", "P@55w0rd101", "V4in$ight", "P455w0rd@dm1n", "!QAZ@WSX3edc", "ec2-user", "OvW*busr1", "p@ck3tf3nc3", "qaz_2wsx", "skf_admin1", "!QAZ1qaz", "1qazXSW@", "1qazXSW@", "1qaz2wsx#EDC", "1qaz$RFV", "1qaz@WSX", "1qaz2wsx#EDC"].map((function(e) {
                        return e.toLowerCase()
                    }
                    ));
                    return !n.includes(e.toLowerCase())
                }
                e = e.toString().trim();
                var f, h = {
                    length: {
                        pattern: u(a, c),
                        tips: "密码长度为8~26个字符"
                    },
                    combine: {
                        pattern: d,
                        tips: "密码需为字母（区分大小写）、数字和特殊字符（~!@#$%^*_-+{[]}:,.?/）的组合"
                    },
                    account: {
                        pattern: l(o),
                        tips: "密码不能包含与账号相关的信息，不建议包含账号完整字符串、大小写变为或形似变换的字符串"
                    },
                    dictionary: {
                        pattern: p,
                        tips: "密码不能使用常用的具有特殊含义的字符串或形似变换的字符串"
                    },
                    continue: {
                        pattern: s,
                        tips: "密码不能使用连续3个及以上键位排序字符，如123，Qwe"
                    }
                }, m = Object.values(h).every((function(n) {
                    var t = n.pattern;
                    return !(v(t) && !t(e)) || (f = n.tips,
                    !1)
                }
                ));
                return m || f
            },
            verificationCode: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , t = n.length
                  , a = void 0 === t ? 6 : t;
                return new RegExp("^\\d{".concat(a, "}$")).test(e.toString().trim())
            },
            money: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , n = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
                return !(!e || !n.test(e) || ["0.0", "0.00"].includes(e))
            },
            money2: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , n = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
                return !(!e || !n.test(e))
            }
        }
          , M = function(e) {
            return {
                backgroundImage: "url(".concat(e || l.a, ")")
            }
        }
          , E = function(e) {
            e || (e = {});
            var n = [];
            for (var t in e)
                null !== e[t] && n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
            return n.length > 0 ? "?" + n.join("&") : ""
        }
          , T = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , a = t.enc
              , r = void 0 === a ? "Utf8" : a
              , c = t.mode
              , i = void 0 === c ? "ECB" : c
              , o = t.padding
              , u = void 0 === o ? "Pkcs7" : o
              , d = p.a.enc[r].parse(n)
              , l = {
                mode: p.a.mode[i],
                padding: p.a.pad[u]
            }
              , s = p.a.TripleDES.encrypt(e, d, l);
            return s.toString()
        }
          , F = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (e && "string" === typeof e) {
                var t = n.text || "0"
                  , a = n.length || 24;
                if (e.length < a)
                    for (var r = e.length; r < a; r++)
                        e += t;
                else
                    e = e.substring(0, a);
                return e
            }
        }
          , H = function(e, n) {
            return f["a"].format(e, n)
        }
          , _ = function() {
            var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), c = [];
            if (a = a || r.length,
            t)
                for (e = 0; e < t; e++)
                    c[e] = r[0 | Math.random() * a];
            else
                for (c[8] = c[13] = c[18] = c[23] = "-",
                c[14] = "4",
                e = 0; e < 36; e++)
                    c[e] || (n = 0 | 16 * Math.random(),
                    c[e] = r[19 === e ? 3 & n | 8 : n]);
            return c.join("")
        }
          , W = function() {
            return /MicroMessenger/i.test(window.navigator.userAgent.toLowerCase())
        }
          , q = function() {
            return function(e) {
                var n = window.navigator.userAgent;
                return k(e) ? e.test(n) : b(e) ? n.toLowerCase().includes(e.toLowerCase()) : void 0
            }
        }
          , $ = q()
          , U = function() {
            var e = /[MP]\w+\s+\s+Build\/\w+/;
            return $(e) || $("meitu")
        }
          , G = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return e.replace(/<\/?[a-zA-Z]+\s*\/?>/g, n)
        }
          , N = function() {
            var e = window.navigator.userAgent.toLowerCase()
              , n = ["UCBrowser", "Quark"].map((function(e) {
                return e.toLowerCase()
            }
            ))
              , t = n.some((function(n) {
                return e.includes(n)
            }
            ));
            return t
        }
          , z = function(e) {
            if ("string" !== typeof e)
                return !1;
            try {
                var n = JSON.parse(e);
                return !("object" !== Object(r["a"])(n) || !n)
            } catch (t) {
                return !1
            }
        }
          , V = function(e, n) {
            g(n) && (n = JSON.stringify(n)),
            sessionStorage.setItem(e, n)
        }
          , Z = function(e) {
            var n = sessionStorage.getItem(e);
            return z(n) ? JSON.parse(n) : n
        }
          , J = function(e) {
            sessionStorage.removeItem(e)
        }
          , K = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e.replace(/\s+/g, "")
        };
        function Q() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (b(e))
                return e.split("").reverse().join("");
            throw new Error("input must be string")
        }
        var X = function(e) {
            if (!e)
                return !1;
            var n = window.open(e);
            null === n && (window.location.href = e)
        }
          , Y = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.URL;
            if (window.history && window.history.pushState) {
                if (e === document.URL) {
                    var n = Math.floor(10 * Math.random());
                    e.includes("?") ? e = e.replace("?", "?t=".concat(n, "&")) : e += "?t=".concat(n)
                }
                window.history.pushState(null, null, e)
            } else
                console.error("浏览器不支持pushState")
        }
          , ee = function() {
            window.history.go(-1)
        }
          , ne = function() {
            var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (!b(t))
                throw new Error("input params must be str");
            if (!t)
                return !1;
            var r = t.split("?");
            return n = r[1] ? r[1].split("&") : t.split("&"),
            e = {},
            n.forEach((function(n) {
                var t = n.split("=");
                if (2 === t.length) {
                    var r = t[0]
                      , c = t[1];
                    e[r] ? e[r] = Array.isArray(e[r]) ? [].concat(Object(a["a"])(e[r]), [c]) : [e[r], c] : e[r] = c
                }
            }
            )),
            e
        }
          , te = function() {
            var e = document.getElementById("app");
            e && (e.style.overflow = "hidden",
            e.style.position = "fixed")
        }
          , ae = function() {
            var e = document.getElementById("app");
            e && (e.style.overflow = "",
            e.style.position = "")
        }
          , re = function(e) {
            return window.JSON.parse(window.JSON.stringify(e))
        }
          , ce = function(e) {
            var n = e.lastIndexOf(".");
            return e.substring(n + 1)
        }
          , ie = function(e, n) {
            return e ? "bankAct" === n ? e.replace(/(.{4})(.*)(.{4})/, (function(e, n, t, a) {
                return n + t.replace(/.{1}/g, "*") + a
            }
            )) : /@/.test(e) || "mail" === n ? e.replace(/(.{1})(.*)(.{1})(@.*)/, "$1****$3$4") : /^\d{7,11}$/.test(e) ? e.replace(/(\d{3})(\d+)(\d{4})/, "$1****$3") : /^\d{12,22}$/.test(e) ? e.replace(/(\d{4})(\d+)(\d{4})/, "$1 **** **** $3") : e.replace(/(\d{2})(\d+)(\d{2})/, "$1**************$3") : ""
        }
          , oe = function(e, n, t) {
            if (!(e instanceof Array) || "string" !== typeof n && "object" !== Object(r["a"])(n))
                return -1;
            if ("string" === typeof n) {
                for (var a = 0; a < e.length; a++)
                    if (e[a][n] === t)
                        return a
            } else if ("object" === Object(r["a"])(n))
                for (var c = function(t) {
                    if (Object.keys(n).every((function(a) {
                        return e[t][a] === n[a]
                    }
                    )))
                        return {
                            v: t
                        }
                }, i = 0; i < e.length; i++) {
                    var o = c(i);
                    if ("object" === Object(r["a"])(o))
                        return o.v
                }
            return -1
        }
          , ue = function(e, n) {
            var t = document.createElement("div");
            t.innerHTML = e;
            var a = t.innerText;
            return n && (a = a.trim().replace(/[\n\r\t]/g, "")),
            a
        }
    },
    "80e3": function(e, n, t) {
        e.exports = t.p + "img/errorImg.61959ae7.png"
    },
    "8ace": function(e, n, t) {
        "use strict";
        var a = t("ba10")
          , r = t.n(a)
          , c = new r.a;
        c.events = {
            AUTH_FAIL: "auth-fail",
            AGREE_PRIVACY: "agree-privacy",
            IDENTIFICATION_FAIL: "identification-fail"
        },
        n["a"] = c
    },
    "8d96": function(e, n, t) {
        "use strict";
        t("6715")
    },
    "98ff": function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/cloudHostDiscount2020",
            name: "cloudHostDiscount2020",
            meta: {
                title: "云主机钜惠",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("chunk-2d213728"), t.e("cloudHostDiscount2020")]).then(t.bind(null, "fea7"))
            }
        }
    },
    a174: function(e, n, t) {
        "use strict";
        t("6762"),
        t("2fdb"),
        t("20d6"),
        t("f751"),
        t("551c"),
        t("ac6a"),
        t("cadf"),
        t("5df3"),
        t("96cf");
        var a = t("3b8d")
          , r = t("bc3a")
          , c = t.n(r)
          , i = t("8d81")
          , o = t.n(i)
          , u = t("7f6d");
        function d() {
            return l.apply(this, arguments)
        }
        function l() {
            return l = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "version/checkUpdateVersion",
                            e.abrupt("return", m.get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            l.apply(this, arguments)
        }
        var s = t("8ace")
          , p = "300031500"
          , f = 0
          , h = c.a.create();
        h.setMainVersion = function(e) {
            p = e,
            localStorage.setItem("mainVersion", e)
        }
        ,
        h.getMainVersion = function() {
            return p || localStorage.getItem("mainVersion")
        }
        ,
        h.setTimestampOffset = function(e) {
            f = e,
            localStorage.setItem("timestampOffset", e)
        }
        ,
        h.getTimestampOffset = function() {
            return localStorage.getItem("timestampOffset") || f
        }
        ,
        h.initPublicParams = Object(a["a"])(regeneratorRuntime.mark((function e() {
            return regeneratorRuntime.wrap((function(e) {
                while (1)
                    switch (e.prev = e.next) {
                    case 0:
                        return h.setMainVersion(p),
                        e.next = 3,
                        Promise.all([d().then((function(e) {
                            h.setTimestampOffset((new Date).getTime() - e.data.curTime)
                        }
                        ))]).catch(u["d"]);
                    case 3:
                        return e.abrupt("return", e.sent);
                    case 4:
                    case "end":
                        return e.stop()
                    }
            }
            ), e)
        }
        ))),
        h.interceptors.request.use((function(e) {
            var n = (new Date).getTime() - h.getTimestampOffset()
              , t = "s54zv9bm1vd5czfujy6nnuxj1l4g2ny6"
              , a = Object(u["k"])()
              , r = o()(n + a + o()(a + t + n));
            return e.params = Object.assign(e.params || {}, {
                mainVersion: h.getMainVersion(),
                comParam_curTime: n,
                comParam_seqCode: a,
                comParam_signature: r,
                isCheck: !0,
                locale: "zh-cn"
            }),
            e
        }
        )),
        h.interceptors.response.use(function() {
            var e = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t, a, r, c, i, o, d;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.data,
                            a = t.data,
                            r = [-700, -707, -998],
                            c = n.config.url,
                            i = ["alogic-ctyun/order/SubmitOnce2", "alogic-ctyun/lottery/Gain", "alogic-ctyun/abm/coupon/Gain", "alogic-ctyun/school/race/participant/Join"],
                            o = i.findIndex((function(e) {
                                return -1 !== c.indexOf(e)
                            }
                            )),
                            -1 !== o && ([0, 1].includes(o) && "noauth" === t.data.state || [2].includes(o) && "-200" === t.data.code || [3].includes(o) && !t.success) && (t.resultCode = -998,
                            t.success = !1),
                            d = +t.resultCode,
                            -707 !== d) {
                                e.next = 15;
                                break
                            }
                            return h.setTimestampOffset((new Date).getTime() - a.curTime),
                            e.next = 12,
                            h(n.config);
                        case 12:
                            n.data = e.sent,
                            e.next = 16;
                            break;
                        case 15:
                            706 === d ? s["a"].emit(s["a"].events.AGREE_PRIVACY) : -998 === d && s["a"].emit(s["a"].events.IDENTIFICATION_FAIL);
                        case 16:
                            return Object(u["y"])(t) && (t.hideError = r.includes(+d)),
                            e.abrupt("return", n);
                        case 18:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }());
        var m = n["a"] = h
    },
    a537: function(e, n, t) {
        "use strict";
        t.d(n, "b", (function() {
            return c
        }
        )),
        t.d(n, "c", (function() {
            return o
        }
        )),
        t.d(n, "a", (function() {
            return d
        }
        )),
        t.d(n, "f", (function() {
            return s
        }
        )),
        t.d(n, "e", (function() {
            return f
        }
        )),
        t.d(n, "d", (function() {
            return m
        }
        ));
        t("f751"),
        t("96cf");
        var a = t("3b8d")
          , r = t("bdd0");
        function c() {
            return i.apply(this, arguments)
        }
        function i() {
            return i = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "index/getIcons",
                            e.abrupt("return", r["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            i.apply(this, arguments)
        }
        function o() {
            return u.apply(this, arguments)
        }
        function u() {
            return u = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "protocol/list",
                            e.abrupt("return", r["a"].get(n));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            u.apply(this, arguments)
        }
        function d(e) {
            return l.apply(this, arguments)
        }
        function l() {
            return l = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", r["a"].get(n));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            l.apply(this, arguments)
        }
        function s() {
            return p.apply(this, arguments)
        }
        function p() {
            return p = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var n, t, a = arguments;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return n = a.length > 0 && void 0 !== a[0] ? a[0] : {},
                            t = "visit/pushVisitInfo",
                            n = Object.assign({
                                visitUrl: document.URL,
                                visitUrlTitle: document.title,
                                visitReffer: document.referrer,
                                visitRefferType: 0,
                                visitChannel: 1002,
                                visitInTime: (new Date).getTime(),
                                visitOutTime: "",
                                visitObjectId: "",
                                visitObjectName: "",
                                visitType: ""
                            }, n),
                            e.abrupt("return", r["a"].post(t, n));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            p.apply(this, arguments)
        }
        function f(e) {
            return h.apply(this, arguments)
        }
        function h() {
            return h = Object(a["a"])(regeneratorRuntime.mark((function e(n) {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "manager/nbr",
                            e.abrupt("return", r["a"].get(t, {
                                params: n
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            h.apply(this, arguments)
        }
        function m(e) {
            var n = "config/switch/".concat(e);
            return r["a"].get(n)
        }
    },
    a89b: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, "children", (function() {
            return a
        }
        ));
        var a = []
    },
    ad7d: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/smartCampus",
            name: "smartCampus",
            meta: {
                title: "智慧校园云上行",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("chunk-2d213728"), t.e("smartCampus")]).then(t.bind(null, "5d24"))
            }
        }
    },
    afc4: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/202103",
            name: "202103",
            meta: {
                title: "开工季特惠",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("202103")]).then(t.bind(null, "7262"))
            }
        }
    },
    b124: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/noviceSpecialty",
            name: "noviceSpecialty",
            meta: {
                title: "首购专场",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("chunk-2d213728"), t.e("noviceSpecialty")]).then(t.bind(null, "3e2a"))
            }
        }
    },
    b196: function(e, n, t) {
        "use strict";
        t.r(n);
        t("7f7f"),
        t("6762"),
        t("2fdb"),
        t("768b"),
        t("8615"),
        t("ffc1");
        var a = t("2b0e")
          , r = function() {
            var e = this
              , n = e.$createElement
              , t = e._self._c || n;
            return t("div", {
                attrs: {
                    id: "app"
                }
            }, [e.isRouterAlive ? t("keep-alive", {
                attrs: {
                    include: "home,orderList,serviceCase,cloudMarket"
                }
            }, [t("router-view", {
                class: {
                    "router-view": e.protocol.show
                }
            })], 1) : e._e(), e.protocol.show ? t("privacy", {
                attrs: {
                    title: e.protocol.active.dialog.title,
                    content: e.protocol.active.dialog.content,
                    btns: e.protocol.active.dialog.btns
                },
                on: {
                    handleBtnClick: e.handleProtocolBtnClick
                }
            }) : e._e(), e.modal.show ? t("guide", {
                attrs: {
                    title: e.modal.title,
                    content: e.modal.content,
                    btn: e.modal.btn,
                    btnCancel: e.modal.btnCancel
                },
                on: {
                    handleBtnClose: e.handleModalBtnClose,
                    handleBtnClick: e.handleModalBtnClick
                }
            }) : e._e()], 1)
        }
          , c = []
          , i = (t("20d6"),
        t("a481"),
        t("b54a"),
        t("96cf"),
        t("3b8d"))
          , o = (t("551c"),
        t("28a5"),
        t("8ace"))
          , u = t("a537")
          , d = t("7306")
          , l = {
            name: "app",
            components: {
                Privacy: function() {
                    return t.e("chunk-1eec049b").then(t.bind(null, "8589"))
                },
                Guide: function() {
                    return t.e("chunk-db90efe0").then(t.bind(null, "7cef"))
                }
            },
            provide: function() {
                return {
                    reload: this.reload,
                    onProtocolModal: this.onProtocolModal
                }
            },
            data: function() {
                return {
                    isRouterAlive: !0,
                    protocol: {
                        show: !1,
                        active: {},
                        list: [],
                        config: {}
                    },
                    modal: {
                        show: !1,
                        content: "您尚未完成实名认证，请实名认证后再进行操作。",
                        btn: "立即认证",
                        btnCancel: "取消",
                        link: "/identification"
                    }
                }
            },
            watch: {
                $route: function(e, n) {
                    var t = this;
                    if (t.protocol.show && e.name !== n.name && (t.protocol.show = !1),
                    window._czc) {
                        var a = window.location
                          , r = a.hash.split("?")[0]
                          , c = a.pathname + r
                          , i = "/";
                        window._czc.push(["_trackPageview", c, i])
                    }
                }
            },
            methods: {
                reload: function() {
                    var e = this;
                    this.isRouterAlive = !1,
                    this.$nextTick((function() {
                        e.isRouterAlive = !0
                    }
                    ))
                },
                onProtocolModal: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = this;
                    return n.protocol.config = e,
                    new Promise(function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                            var r, c;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        e.next = 3,
                                        Object(u["c"])();
                                    case 3:
                                        r = e.sent,
                                        c = r.data,
                                        c && c.length ? (n.protocol.list = c,
                                        n.protocol.active = c[0],
                                        n.protocol.show = !0,
                                        t(c)) : t(!1),
                                        e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8,
                                        e.t0 = e["catch"](0),
                                        a(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[0, 8]])
                        }
                        )));
                        return function(n, t) {
                            return e.apply(this, arguments)
                        }
                    }())
                },
                onGuideModal: function() {
                    var e = this;
                    e.modal.show = !0
                },
                handleModalBtnClick: function() {
                    var e = this;
                    e.modal.show = !1,
                    e.$router.push({
                        path: e.modal.link,
                        query: {
                            redirect: e.$route.fullPath
                        }
                    })
                },
                handleModalBtnClose: function() {
                    var e = this;
                    e.modal.show = !1
                },
                handleProtocolBtnClick: function() {
                    var e = Object(i["a"])(regeneratorRuntime.mark((function e(n) {
                        var t, a, r, c, i, o, l;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = this,
                                    a = n.needToQuit,
                                    r = n.callBack,
                                    c = t.protocol.config,
                                    i = c.cancelCallback,
                                    o = c.confirmCallback,
                                    e.prev = 3,
                                    !a) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 7,
                                    Object(d["s"])();
                                case 7:
                                    return e.next = 9,
                                    t.$store.dispatch("auth/logout");
                                case 9:
                                    t.protocol.show = !1,
                                    i ? i() : t.$router.replace({
                                        name: "login",
                                        query: {
                                            redirect: t.$route.fullPath
                                        }
                                    }),
                                    e.next = 17;
                                    break;
                                case 13:
                                    return e.next = 15,
                                    Object(u["a"])(r);
                                case 15:
                                    l = t.protocol.list.findIndex((function(e) {
                                        return e === t.protocol.active
                                    }
                                    )),
                                    l !== t.protocol.list.length - 1 ? t.protocol.active = t.protocol.list[l + 1] : (t.protocol.show = !1,
                                    o && o());
                                case 17:
                                    e.next = 22;
                                    break;
                                case 19:
                                    e.prev = 19,
                                    e.t0 = e["catch"](3),
                                    t.errorCallback(e.t0);
                                case 22:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[3, 19]])
                    }
                    )));
                    function n(n) {
                        return e.apply(this, arguments)
                    }
                    return n
                }()
            },
            mounted: function() {
                var e = this
                  , n = .01 * window.innerHeight;
                document.documentElement.style.setProperty("--vh", "".concat(n, "px")),
                o["a"].on(o["a"].events.AGREE_PRIVACY, (function() {
                    e.onProtocolModal().catch(e.errorCallback)
                }
                )),
                o["a"].on(o["a"].events.IDENTIFICATION_FAIL, (function() {
                    e.onGuideModal()
                }
                ))
            }
        }
          , s = l
          , p = (t("fb18"),
        t("2877"))
          , f = Object(p["a"])(s, r, c, !1, null, "2d740a78", null)
          , h = f.exports
          , m = t("dd8e")
          , b = (t("386d"),
        t("a174"))
          , g = t("7f6d")
          , k = {
            onReady: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                    var n, t, a, r, c, i, o, u, d = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (n = d.length > 0 && void 0 !== d[0] ? d[0] : {},
                                !Object(g["C"])()) {
                                    e.next = 9;
                                    break
                                }
                                t = window.location,
                                a = t.origin,
                                r = t.pathname,
                                c = t.search,
                                i = t.hash,
                                o = a + r.replace("wap", "wechat") + c,
                                u = ["javascript:", "vbscript:", "data:"],
                                u.every((function(e) {
                                    return !i.includes(e)
                                }
                                )) && (o += i),
                                window.location.href = o,
                                e.next = 12;
                                break;
                            case 9:
                                return e.next = 11,
                                b["a"].initPublicParams();
                            case 11:
                                return e.abrupt("return", Promise.resolve(n));
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                function n() {
                    return e.apply(this, arguments)
                }
                return n
            }(),
            onGoBack: function(e) {
                e()
            },
            closeWindow: function() {
                return !1
            }
        }
          , v = k
          , w = v
          , y = (t("f751"),
        null)
          , I = {
            inspect: function(e) {
                y = e
            },
            to: function(e) {
                if (e.href)
                    return location.href = e.href,
                    !1;
                if (y)
                    return e.replace ? y.replace(e) : y.push(e),
                    !1;
                var n = e.query || {};
                e.params && Object.assign(n, {
                    _params: JSON.stringify(e.params)
                }),
                n._method = e.name ? "name" : "path",
                window.location.href = "/wap/main/redirect/" + (e.name || e.path) + Object(g["I"])(n)
            }
        }
          , D = I
          , C = D
          , x = (t("ceaa"),
        t("b2fb"))
          , P = t.n(x)
          , O = (t("0d6d"),
        t("6bf2"))
          , R = {};
        var S = {
            data: function() {
                return {
                    auth: O["default"],
                    router: C,
                    Native: R,
                    isApp: Object.freeze(!1),
                    isWap: Object.freeze(!0),
                    isWechat: Object.freeze(!1)
                }
            },
            methods: {
                errorCallback: g["d"],
                toast: g["M"],
                setBackgroundImage: g["J"],
                isUnSupportPushStateBrowser: g["B"]
            },
            beforeRouteLeave: function(e, n, t) {
                P.a.close(),
                t()
            }
        }
          , A = S
          , B = t("4360")
          , j = t("0881");
        a["default"].directive("clickOutside", {
            bind: function(e, n, t, r) {
                e.handler = function(r) {
                    a["default"].nextTick((function() {
                        if (console.log(e),
                        console.log(r.target),
                        !e.contains(r.target)) {
                            var a = n.expression
                              , c = t.context;
                            c[a]()
                        }
                    }
                    ))
                }
                ,
                document.addEventListener("click", e.handler)
            },
            unbind: function(e) {
                document.removeEventListener("click", e.handler)
            }
        });
        var L = t("ed09")
          , M = function() {
            var e = this
              , n = e.$createElement
              , t = e._self._c || n;
            return e.visible ? t("div", {
                staticClass: "loading-mask",
                style: {
                    zIndex: e.zIndex
                }
            }, [e._m(0)]) : e._e()
        }
          , E = [function() {
            var e = this
              , n = e.$createElement
              , a = e._self._c || n;
            return a("div", {
                staticClass: "loading-mask-container"
            }, [a("div", {
                staticClass: "loading-mask-main"
            }, [a("img", {
                attrs: {
                    src: t("04c0")
                }
            }), a("p", [e._v("加载中...")])])])
        }
        ]
          , T = {
            data: function() {
                return {
                    visible: !1,
                    zIndex: 99
                }
            }
        }
          , F = T
          , H = (t("8d96"),
        Object(p["a"])(F, M, E, !1, null, null, null))
          , _ = H.exports
          , W = (t("3b2b"),
        t("5df3"),
        t("1c4c"),
        a["default"].prototype.$isServer)
          , q = "classList"in document.body
          , $ = function e(n, t) {
            return t = t ? "string" === typeof t ? e(t) : t : document,
            t.querySelector(n)
        }
          , U = function(e, n) {
            return n = n ? "string" === typeof n ? $(n) : n : document,
            Array.from(n.querySelectorAll(e))
        }
          , G = function(e, n) {
            if (!V(e, n))
                if (q)
                    e.classList.add(n);
                else {
                    var t = e.className;
                    t += " ".concat(n),
                    e.className = t.trim().replace(/\s+/g, " ")
                }
        }
          , N = function(e, n) {
            V(e, n) ? Z(e, n) : G(e, n)
        }
          , z = function(e, n, t) {
            var a = new RegExp("\\b" + n + "\\b","g");
            e.className = e.className.replace(a, t)
        }
          , V = function(e, n) {
            return q ? e.classList.contains(n) : e.className.includes(n)
        }
          , Z = function(e, n) {
            var t = new RegExp("".concat(n, "\\s?"),"g");
            return q ? e.classList.remove(n) : e.className = e.className.replace(t, "").trim()
        }
          , J = function() {
            return !W && document.addEventListener ? function(e, n, t) {
                e && n && t && e.addEventListener(n, t, !1)
            }
            : function(e, n, t) {
                e && n && t && e.attachEvent("on" + n, t)
            }
        }()
          , K = function(e, n, t) {
            e.style[n] = e.style["ms".concat(n.slice(0, 1).toUpperCase()).concat(n.slice(1))] = t
        }
          , Q = function(e, n) {
            var t = n.parentNode;
            t.lastChild === n ? t.appendChild(e) : t.insertBefore(e, n.nextSibling)
        }
          , X = {
            setCssProperty: K,
            getEle: $,
            getEles: U,
            addClass: G,
            replaceClass: z,
            toggleClass: N,
            hasClass: V,
            removeClass: Z,
            on: J,
            insertAfter: Q
        }
          , Y = X
          , ee = a["default"].extend(_)
          , ne = function(e, n) {
            return e && e.data && e.data.attrs && e.data.attrs[n]
        }
          , te = function(e, n) {
            n.value ? a["default"].nextTick((function() {
                e.mask.visible = !0,
                Y.addClass(e, "loading-parent--relative")
            }
            )) : (e.mask.visible = !1,
            Y.removeClass(e, "loading-parent--relative"))
        }
          , ae = {
            bind: function(e, n, t) {
                var a = new ee({
                    data: function() {
                        return {
                            zIndex: ne(t, "zIndex")
                        }
                    },
                    el: document.createElement("div")
                });
                e.mask = a,
                e.appendChild(a.$el),
                e.domInserted = !0,
                te(e, n)
            },
            update: function(e, n) {
                n.oldValue !== n.value && te(e, n)
            },
            unbind: function(e) {
                e.domInserted && e.mask && (e.mask.$destroy(),
                e.mask.$el.remove()),
                delete e.domInserted,
                delete e.mask
            }
        };
        function re(e) {
            re.installed || (e.directive("ct-loading", ae),
            re.installed = !0)
        }
        var ce = t("4eb5")
          , ie = t.n(ce);
        a["default"].config.productionTip = !1,
        a["default"].use(L["b"]),
        a["default"].mixin(A),
        a["default"].use(re),
        a["default"].use(ie.a);
        var oe = function(e) {
            C.to({
                name: "login",
                query: {
                    redirect: e
                },
                replace: !0
            })
        };
        C.inspect(m["a"]),
        o["a"].on(o["a"].events.AUTH_FAIL, (function() {
            B["a"].dispatch("auth/logout"),
            oe(m["a"].currentRoute.query.redirect || m["a"].currentRoute.fullPath)
        }
        ));
        var ue = t("6bf2").default;
        m["a"].beforeEach((function(e, n, t) {
            Object(d["l"])().then((function() {
                ue.isLogin() || B["a"].dispatch("account/queryAccountInfo"),
                ue.updateLoginStatus(!0),
                ["login", "register"].includes(e.name) ? t(e.query.redirect || "/") : t()
            }
            )).catch((function(n) {
                -999 === +n.code ? (e.meta.auth ? t({
                    name: "login",
                    query: {
                        redirect: e.fullPath
                    }
                }) : t(),
                B["a"].dispatch("auth/logout")) : console.log(n)
            }
            ))
        }
        )),
        m["a"].afterEach((function(e, n) {
            var t = e.meta.title;
            t && (document.title = t),
            window.setShareInfo && window.setShareInfo({
                title: "天翼云 安全云",
                summary: t,
                pic: "/img/logo.png",
                url: document.URL
            }),
            Object(j["a"])(n)
        }
        )),
        w.onReady().then((function() {
            new a["default"]({
                router: m["a"],
                store: B["a"],
                render: function(e) {
                    return e(h)
                }
            }).$mount("#app")
        }
        )).catch((function(e) {
            console.log(e)
        }
        ))
    },
    b713: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = [{
            path: "/activity/security2",
            name: "security2",
            meta: {
                title: "合规无忧，翼起同行",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("security3")]).then(t.bind(null, "83dd"))
            }
        }]
    },
    bdd0: function(e, n, t) {
        "use strict";
        t("6762"),
        t("2fdb"),
        t("551c"),
        t("c5f6"),
        t("a481"),
        t("f751");
        var a = t("a174")
          , r = {
            host: "/"
        }
          , c = t("8ace")
          , i = t("7f6d")
          , o = (t("049f"),
        t("9f3c"),
        t("c7c6"),
        t("25c9"),
        t("6c1a"),
        t("d9ab"),
        t("536b"),
        t("7f25"),
        t("7f7f"),
        t("55dd"),
        t("6c7b"),
        t("28a5"),
        t("5df3"),
        t("ac6a"),
        t("cadf"),
        t("456d"),
        t("7618"))
          , u = (t("6b54"),
        t("ac4d"),
        t("8a81"),
        function() {
            return u = Object.assign || function(e) {
                for (var n, t = 1, a = arguments.length; t < a; t++)
                    for (var r in n = arguments[t])
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                return e
            }
            ,
            u.apply(this, arguments)
        }
        );
        function d(e, n, t, a) {
            return new (t || (t = Promise))((function(r, c) {
                function i(e) {
                    try {
                        u(a.next(e))
                    } catch (n) {
                        c(n)
                    }
                }
                function o(e) {
                    try {
                        u(a.throw(e))
                    } catch (n) {
                        c(n)
                    }
                }
                function u(e) {
                    var n;
                    e.done ? r(e.value) : (n = e.value,
                    n instanceof t ? n : new t((function(e) {
                        e(n)
                    }
                    ))).then(i, o)
                }
                u((a = a.apply(e, n || [])).next())
            }
            ))
        }
        function l(e, n) {
            var t, a, r, c, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return c = {
                next: o(0),
                throw: o(1),
                return: o(2)
            },
            "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }
            ),
            c;
            function o(c) {
                return function(o) {
                    return function(c) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (t = 1,
                                a && (r = 2 & c[0] ? a.return : c[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, c[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (c = [2 & c[0], r.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    a = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (r = i.trys,
                                    !((r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        i.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = c;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(c);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                c = n.call(e, i)
                            } catch (o) {
                                c = [6, o],
                                a = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, o])
                }
            }
        }
        function s() {
            for (var e = 0, n = 0, t = arguments.length; n < t; n++)
                e += arguments[n].length;
            var a = Array(e)
              , r = 0;
            for (n = 0; n < t; n++)
                for (var c = arguments[n], i = 0, o = c.length; i < o; i++,
                r++)
                    a[r] = c[i];
            return a
        }
        function p(e, n) {
            return new Promise((function(t) {
                return setTimeout(t, e, n)
            }
            ))
        }
        function f(e, n) {
            try {
                var t = e();
                (a = t) && "function" == typeof a.then ? t.then((function(e) {
                    return n(!0, e)
                }
                ), (function(e) {
                    return n(!1, e)
                }
                )) : n(!0, t)
            } catch (r) {
                n(!1, r)
            }
            var a
        }
        function h(e, n, t) {
            return void 0 === t && (t = 16),
            d(this, void 0, void 0, (function() {
                var a, r, c;
                return l(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        a = Date.now(),
                        r = 0,
                        i.label = 1;
                    case 1:
                        return r < e.length ? (n(e[r], r),
                        (c = Date.now()) >= a + t ? (a = c,
                        [4, p(0)]) : [3, 3]) : [3, 4];
                    case 2:
                        i.sent(),
                        i.label = 3;
                    case 3:
                        return ++r,
                        [3, 1];
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        function m(e, n) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
            n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
            var t = [0, 0, 0, 0];
            return t[3] += e[3] + n[3],
            t[2] += t[3] >>> 16,
            t[3] &= 65535,
            t[2] += e[2] + n[2],
            t[1] += t[2] >>> 16,
            t[2] &= 65535,
            t[1] += e[1] + n[1],
            t[0] += t[1] >>> 16,
            t[1] &= 65535,
            t[0] += e[0] + n[0],
            t[0] &= 65535,
            [t[0] << 16 | t[1], t[2] << 16 | t[3]]
        }
        function b(e, n) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
            n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
            var t = [0, 0, 0, 0];
            return t[3] += e[3] * n[3],
            t[2] += t[3] >>> 16,
            t[3] &= 65535,
            t[2] += e[2] * n[3],
            t[1] += t[2] >>> 16,
            t[2] &= 65535,
            t[2] += e[3] * n[2],
            t[1] += t[2] >>> 16,
            t[2] &= 65535,
            t[1] += e[1] * n[3],
            t[0] += t[1] >>> 16,
            t[1] &= 65535,
            t[1] += e[2] * n[2],
            t[0] += t[1] >>> 16,
            t[1] &= 65535,
            t[1] += e[3] * n[1],
            t[0] += t[1] >>> 16,
            t[1] &= 65535,
            t[0] += e[0] * n[3] + e[1] * n[2] + e[2] * n[1] + e[3] * n[0],
            t[0] &= 65535,
            [t[0] << 16 | t[1], t[2] << 16 | t[3]]
        }
        function g(e, n) {
            return 32 === (n %= 64) ? [e[1], e[0]] : n < 32 ? [e[0] << n | e[1] >>> 32 - n, e[1] << n | e[0] >>> 32 - n] : (n -= 32,
            [e[1] << n | e[0] >>> 32 - n, e[0] << n | e[1] >>> 32 - n])
        }
        function k(e, n) {
            return 0 === (n %= 64) ? e : n < 32 ? [e[0] << n | e[1] >>> 32 - n, e[1] << n] : [e[1] << n - 32, 0]
        }
        function v(e, n) {
            return [e[0] ^ n[0], e[1] ^ n[1]]
        }
        function w(e) {
            return e = v(e, [0, e[0] >>> 1]),
            e = v(e = b(e, [4283543511, 3981806797]), [0, e[0] >>> 1]),
            v(e = b(e, [3301882366, 444984403]), [0, e[0] >>> 1])
        }
        function y(e, n) {
            n = n || 0;
            var t, a = (e = e || "").length % 16, r = e.length - a, c = [0, n], i = [0, n], o = [0, 0], u = [0, 0], d = [2277735313, 289559509], l = [1291169091, 658871167];
            for (t = 0; t < r; t += 16)
                o = [255 & e.charCodeAt(t + 4) | (255 & e.charCodeAt(t + 5)) << 8 | (255 & e.charCodeAt(t + 6)) << 16 | (255 & e.charCodeAt(t + 7)) << 24, 255 & e.charCodeAt(t) | (255 & e.charCodeAt(t + 1)) << 8 | (255 & e.charCodeAt(t + 2)) << 16 | (255 & e.charCodeAt(t + 3)) << 24],
                u = [255 & e.charCodeAt(t + 12) | (255 & e.charCodeAt(t + 13)) << 8 | (255 & e.charCodeAt(t + 14)) << 16 | (255 & e.charCodeAt(t + 15)) << 24, 255 & e.charCodeAt(t + 8) | (255 & e.charCodeAt(t + 9)) << 8 | (255 & e.charCodeAt(t + 10)) << 16 | (255 & e.charCodeAt(t + 11)) << 24],
                o = g(o = b(o, d), 31),
                c = m(c = g(c = v(c, o = b(o, l)), 27), i),
                c = m(b(c, [0, 5]), [0, 1390208809]),
                u = g(u = b(u, l), 33),
                i = m(i = g(i = v(i, u = b(u, d)), 31), c),
                i = m(b(i, [0, 5]), [0, 944331445]);
            switch (o = [0, 0],
            u = [0, 0],
            a) {
            case 15:
                u = v(u, k([0, e.charCodeAt(t + 14)], 48));
            case 14:
                u = v(u, k([0, e.charCodeAt(t + 13)], 40));
            case 13:
                u = v(u, k([0, e.charCodeAt(t + 12)], 32));
            case 12:
                u = v(u, k([0, e.charCodeAt(t + 11)], 24));
            case 11:
                u = v(u, k([0, e.charCodeAt(t + 10)], 16));
            case 10:
                u = v(u, k([0, e.charCodeAt(t + 9)], 8));
            case 9:
                u = b(u = v(u, [0, e.charCodeAt(t + 8)]), l),
                i = v(i, u = b(u = g(u, 33), d));
            case 8:
                o = v(o, k([0, e.charCodeAt(t + 7)], 56));
            case 7:
                o = v(o, k([0, e.charCodeAt(t + 6)], 48));
            case 6:
                o = v(o, k([0, e.charCodeAt(t + 5)], 40));
            case 5:
                o = v(o, k([0, e.charCodeAt(t + 4)], 32));
            case 4:
                o = v(o, k([0, e.charCodeAt(t + 3)], 24));
            case 3:
                o = v(o, k([0, e.charCodeAt(t + 2)], 16));
            case 2:
                o = v(o, k([0, e.charCodeAt(t + 1)], 8));
            case 1:
                o = b(o = v(o, [0, e.charCodeAt(t)]), d),
                c = v(c, o = b(o = g(o, 31), l))
            }
            return c = m(c = v(c, [0, e.length]), i = v(i, [0, e.length])),
            i = m(i, c),
            c = m(c = w(c), i = w(i)),
            i = m(i, c),
            ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
        }
        function I(e) {
            return parseInt(e)
        }
        function D(e) {
            return parseFloat(e)
        }
        function C(e, n) {
            return "number" == typeof e && isNaN(e) ? n : e
        }
        function x(e) {
            return e.reduce((function(e, n) {
                return e + (n ? 1 : 0)
            }
            ), 0)
        }
        function P(e, n) {
            if (void 0 === n && (n = 1),
            Math.abs(n) >= 1)
                return Math.round(e / n) * n;
            var t = 1 / n;
            return Math.round(e * t) / t
        }
        function O(e) {
            return e && "object" == Object(o["a"])(e) && "message"in e ? e : {
                message: e
            }
        }
        function R(e, n, t) {
            var a = Object.keys(e).filter((function(e) {
                return !function(e, n) {
                    for (var t = 0, a = e.length; t < a; ++t)
                        if (e[t] === n)
                            return !0;
                    return !1
                }(t, e)
            }
            ))
              , r = Array(a.length);
            return h(a, (function(t, a) {
                r[a] = function(e, n) {
                    var t = function(e) {
                        return "function" != typeof e
                    }
                      , a = new Promise((function(a) {
                        var r = Date.now();
                        f(e.bind(null, n), (function() {
                            for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                            var c = Date.now() - r;
                            if (!e[0])
                                return a((function() {
                                    return {
                                        error: O(e[1]),
                                        duration: c
                                    }
                                }
                                ));
                            var i = e[1];
                            if (t(i))
                                return a((function() {
                                    return {
                                        value: i,
                                        duration: c
                                    }
                                }
                                ));
                            a((function() {
                                return new Promise((function(e) {
                                    var n = Date.now();
                                    f(i, (function() {
                                        for (var t = [], a = 0; a < arguments.length; a++)
                                            t[a] = arguments[a];
                                        var r = c + Date.now() - n;
                                        if (!t[0])
                                            return e({
                                                error: O(t[1]),
                                                duration: r
                                            });
                                        e({
                                            value: t[1],
                                            duration: r
                                        })
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    ));
                    return function() {
                        return a.then((function(e) {
                            return e()
                        }
                        ))
                    }
                }(e[t], n)
            }
            )),
            function() {
                return d(this, void 0, void 0, (function() {
                    var e, n, t, c, i, o;
                    return l(this, (function(u) {
                        switch (u.label) {
                        case 0:
                            for (e = {},
                            n = 0,
                            t = a; n < t.length; n++)
                                c = t[n],
                                e[c] = void 0;
                            i = Array(a.length),
                            o = function() {
                                var n;
                                return l(this, (function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return n = !0,
                                        [4, h(a, (function(t, a) {
                                            i[a] || (r[a] ? i[a] = r[a]().then((function(n) {
                                                return e[t] = n
                                            }
                                            )) : n = !1)
                                        }
                                        ))];
                                    case 1:
                                        return t.sent(),
                                        n ? [2, "break"] : [4, p(1)];
                                    case 2:
                                        return t.sent(),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ,
                            u.label = 1;
                        case 1:
                            return [5, o()];
                        case 2:
                            if ("break" === u.sent())
                                return [3, 4];
                            u.label = 3;
                        case 3:
                            return [3, 1];
                        case 4:
                            return [4, Promise.all(i)];
                        case 5:
                            return u.sent(),
                            [2, e]
                        }
                    }
                    ))
                }
                ))
            }
        }
        function S() {
            var e = window
              , n = navigator;
            return x(["MSCSSMatrix"in e, "msSetImmediate"in e, "msIndexedDB"in e, "msMaxTouchPoints"in n, "msPointerEnabled"in n]) >= 4
        }
        function A() {
            var e = window
              , n = navigator;
            return x(["msWriteProfilerMark"in e, "MSStream"in e, "msLaunchUri"in n, "msSaveBlob"in n]) >= 3 && !S()
        }
        function B() {
            var e = window
              , n = navigator;
            return x(["webkitPersistentStorage"in n, "webkitTemporaryStorage"in n, 0 === n.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL"in e, "BatteryManager"in e, "webkitMediaStream"in e, "webkitSpeechGrammar"in e]) >= 5
        }
        function j() {
            var e = window
              , n = navigator;
            return x(["ApplePayError"in e, "CSSPrimitiveValue"in e, "Counter"in e, 0 === n.vendor.indexOf("Apple"), "getStorageUpdates"in n, "WebKitMediaKeys"in e]) >= 4
        }
        function L() {
            var e = window;
            return x(["safari"in e, !("DeviceMotionEvent"in e), !("ongestureend"in e), !("standalone"in navigator)]) >= 3
        }
        function M() {
            var e, n, t = window;
            return x(["buildID"in navigator, "MozAppearance"in (null !== (n = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== n ? n : {}), "onmozfullscreenchange"in t, "mozInnerScreenX"in t, "CSSMozDocumentRule"in t, "CanvasCaptureMediaStream"in t]) >= 4
        }
        function E() {
            var e = document;
            return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
        }
        function T() {
            var e = B()
              , n = M();
            if (!e && !n)
                return !1;
            var t = window;
            return x(["onorientationchange"in t, "orientation"in t, e && !("SharedWorker"in t), n && /android/i.test(navigator.appVersion)]) >= 2
        }
        function F(e) {
            var n = new Error(e);
            return n.name = e,
            n
        }
        function H(e, n, t) {
            var a, r, c;
            return void 0 === t && (t = 50),
            d(this, void 0, void 0, (function() {
                var i, o;
                return l(this, (function(u) {
                    switch (u.label) {
                    case 0:
                        i = document,
                        u.label = 1;
                    case 1:
                        return i.body ? [3, 3] : [4, p(t)];
                    case 2:
                        return u.sent(),
                        [3, 1];
                    case 3:
                        o = i.createElement("iframe"),
                        u.label = 4;
                    case 4:
                        return u.trys.push([4, , 10, 11]),
                        [4, new Promise((function(e, t) {
                            var a = !1
                              , r = function() {
                                a = !0,
                                e()
                            };
                            o.onload = r,
                            o.onerror = function(e) {
                                a = !0,
                                t(e)
                            }
                            ;
                            var c = o.style;
                            c.setProperty("display", "block", "important"),
                            c.position = "absolute",
                            c.top = "0",
                            c.left = "0",
                            c.visibility = "hidden",
                            n && "srcdoc"in o ? o.srcdoc = n : o.src = "about:blank",
                            i.body.appendChild(o);
                            var u = function e() {
                                var n, t;
                                a || ("complete" === (null === (t = null === (n = o.contentWindow) || void 0 === n ? void 0 : n.document) || void 0 === t ? void 0 : t.readyState) ? r() : setTimeout(e, 10))
                            };
                            u()
                        }
                        ))];
                    case 5:
                        u.sent(),
                        u.label = 6;
                    case 6:
                        return (null === (r = null === (a = o.contentWindow) || void 0 === a ? void 0 : a.document) || void 0 === r ? void 0 : r.body) ? [3, 8] : [4, p(t)];
                    case 7:
                        return u.sent(),
                        [3, 6];
                    case 8:
                        return [4, e(o, o.contentWindow)];
                    case 9:
                        return [2, u.sent()];
                    case 10:
                        return null === (c = o.parentNode) || void 0 === c || c.removeChild(o),
                        [7];
                    case 11:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        function _(e) {
            for (var n = function(e) {
                for (var n, t, a = "Unexpected syntax '" + e + "'", r = /^\s*([a-z-]*)(.*)$/i.exec(e), c = r[1] || void 0, i = {}, o = /([.:#][\w-]+|\[.+?\])/gi, u = function(e, n) {
                    i[e] = i[e] || [],
                    i[e].push(n)
                }; ; ) {
                    var d = o.exec(r[2]);
                    if (!d)
                        break;
                    var l = d[0];
                    switch (l[0]) {
                    case ".":
                        u("class", l.slice(1));
                        break;
                    case "#":
                        u("id", l.slice(1));
                        break;
                    case "[":
                        var s = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l);
                        if (!s)
                            throw new Error(a);
                        u(s[1], null !== (t = null !== (n = s[4]) && void 0 !== n ? n : s[5]) && void 0 !== t ? t : "");
                        break;
                    default:
                        throw new Error(a)
                    }
                }
                return [c, i]
            }(e), t = n[0], a = n[1], r = document.createElement(null != t ? t : "div"), c = 0, i = Object.keys(a); c < i.length; c++) {
                var o = i[c]
                  , u = a[o].join(" ");
                "style" === o ? W(r.style, u) : r.setAttribute(o, u)
            }
            return r
        }
        function W(e, n) {
            for (var t = 0, a = n.split(";"); t < a.length; t++) {
                var r = a[t]
                  , c = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(r);
                if (c) {
                    var i = c[1]
                      , o = c[2]
                      , u = c[4];
                    e.setProperty(i, o, u || "")
                }
            }
        }
        var q, $, U = ["monospace", "sans-serif", "serif"], G = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];
        function N(e) {
            return e.rect(0, 0, 10, 10),
            e.rect(2, 2, 6, 6),
            !e.isPointInPath(5, 5, "evenodd")
        }
        function z(e, n) {
            e.width = 240,
            e.height = 60,
            n.textBaseline = "alphabetic",
            n.fillStyle = "#f60",
            n.fillRect(100, 1, 62, 20),
            n.fillStyle = "#069",
            n.font = '11pt "Times New Roman"';
            var t = "Cwm fjordbank gly " + String.fromCharCode(55357, 56835);
            return n.fillText(t, 2, 15),
            n.fillStyle = "rgba(102, 204, 0, 0.2)",
            n.font = "18pt Arial",
            n.fillText(t, 4, 45),
            Z(e)
        }
        function V(e, n) {
            e.width = 122,
            e.height = 110,
            n.globalCompositeOperation = "multiply";
            for (var t = 0, a = [["#f2f", 40, 40], ["#2ff", 80, 40], ["#ff2", 60, 80]]; t < a.length; t++) {
                var r = a[t]
                  , c = r[0]
                  , i = r[1]
                  , o = r[2];
                n.fillStyle = c,
                n.beginPath(),
                n.arc(i, o, 40, 0, 2 * Math.PI, !0),
                n.closePath(),
                n.fill()
            }
            return n.fillStyle = "#f9c",
            n.arc(60, 60, 60, 0, 2 * Math.PI, !0),
            n.arc(60, 60, 20, 0, 2 * Math.PI, !0),
            n.fill("evenodd"),
            Z(e)
        }
        function Z(e) {
            return e.toDataURL()
        }
        function J() {
            var e = this;
            return function() {
                if (void 0 === $) {
                    var e = function e() {
                        var n = K();
                        Q(n) ? $ = setTimeout(e, 2500) : (q = n,
                        $ = void 0)
                    };
                    e()
                }
            }(),
            function() {
                return d(e, void 0, void 0, (function() {
                    var e;
                    return l(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return Q(e = K()) ? q ? [2, s(q)] : E() ? [4, (t = document,
                            (t.exitFullscreen || t.msExitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen).call(t))] : [3, 2] : [3, 2];
                        case 1:
                            n.sent(),
                            e = K(),
                            n.label = 2;
                        case 2:
                            return Q(e) || (q = e),
                            [2, e]
                        }
                        var t
                    }
                    ))
                }
                ))
            }
        }
        function K() {
            var e = screen;
            return [C(D(e.availTop), null), C(D(e.width) - D(e.availWidth) - C(D(e.availLeft), 0), null), C(D(e.height) - D(e.availHeight) - C(D(e.availTop), 0), null), C(D(e.availLeft), null)]
        }
        function Q(e) {
            for (var n = 0; n < 4; ++n)
                if (e[n])
                    return !1;
            return !0
        }
        var X = {};
        function Y(e) {
            var n;
            return d(this, void 0, void 0, (function() {
                var t, a, r, c, i, o, u;
                return l(this, (function(d) {
                    switch (d.label) {
                    case 0:
                        for (t = document,
                        a = t.createElement("div"),
                        r = new Array(e.length),
                        c = {},
                        ee(a),
                        u = 0; u < e.length; ++u)
                            i = _(e[u]),
                            ee(o = t.createElement("div")),
                            o.appendChild(i),
                            a.appendChild(o),
                            r[u] = i;
                        d.label = 1;
                    case 1:
                        return t.body ? [3, 3] : [4, p(50)];
                    case 2:
                        return d.sent(),
                        [3, 1];
                    case 3:
                        t.body.appendChild(a);
                        try {
                            for (u = 0; u < e.length; ++u)
                                r[u].offsetParent || (c[e[u]] = !0)
                        } finally {
                            null === (n = a.parentNode) || void 0 === n || n.removeChild(a)
                        }
                        return [2, c]
                    }
                }
                ))
            }
            ))
        }
        function ee(e) {
            e.style.setProperty("display", "block", "important")
        }
        function ne(e) {
            return matchMedia("(inverted-colors: " + e + ")").matches
        }
        function te(e) {
            return matchMedia("(forced-colors: " + e + ")").matches
        }
        function ae(e) {
            return matchMedia("(prefers-contrast: " + e + ")").matches
        }
        function re(e) {
            return matchMedia("(prefers-reduced-motion: " + e + ")").matches
        }
        function ce(e) {
            return matchMedia("(dynamic-range: " + e + ")").matches
        }
        var ie = Math
          , oe = function() {
            return 0
        }
          , ue = {
            default: [],
            apple: [{
                font: "-apple-system-body"
            }],
            serif: [{
                fontFamily: "serif"
            }],
            sans: [{
                fontFamily: "sans-serif"
            }],
            mono: [{
                fontFamily: "monospace"
            }],
            min: [{
                fontSize: "1px"
            }],
            system: [{
                fontFamily: "system-ui"
            }]
        }
          , de = {
            fonts: function() {
                return H((function(e, n) {
                    var t = n.document
                      , a = t.body;
                    a.style.fontSize = "48px";
                    var r = t.createElement("div")
                      , c = {}
                      , i = {}
                      , o = function(e) {
                        var n = t.createElement("span")
                          , a = n.style;
                        return a.position = "absolute",
                        a.top = "0",
                        a.left = "0",
                        a.fontFamily = e,
                        n.textContent = "mmMwWLliI0O&1",
                        r.appendChild(n),
                        n
                    }
                      , u = U.map(o)
                      , d = function() {
                        for (var e = {}, n = function(n) {
                            e[n] = U.map((function(e) {
                                return function(e, n) {
                                    return o("'" + e + "'," + n)
                                }(n, e)
                            }
                            ))
                        }, t = 0, a = G; t < a.length; t++)
                            n(a[t]);
                        return e
                    }();
                    a.appendChild(r);
                    for (var l = 0; l < U.length; l++)
                        c[U[l]] = u[l].offsetWidth,
                        i[U[l]] = u[l].offsetHeight;
                    return G.filter((function(e) {
                        return n = d[e],
                        U.some((function(e, t) {
                            return n[t].offsetWidth !== c[e] || n[t].offsetHeight !== i[e]
                        }
                        ));
                        var n
                    }
                    ))
                }
                ))
            },
            domBlockers: function(e) {
                var n = (void 0 === e ? {} : e).debug;
                return d(this, void 0, void 0, (function() {
                    var e, t, a, r;
                    return l(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            return j() || T() ? (e = Object.keys(X),
                            [4, Y((r = []).concat.apply(r, e.map((function(e) {
                                return X[e]
                            }
                            ))))]) : [2, void 0];
                        case 1:
                            return t = c.sent(),
                            n && function(e) {
                                for (var n = "DOM blockers debug:\n```", t = 0, a = Object.keys(X); t < a.length; t++) {
                                    var r = a[t];
                                    n += "\n" + r + ":";
                                    for (var c = 0, i = X[r]; c < i.length; c++) {
                                        var o = i[c];
                                        n += "\n  " + o + " " + (e[o] ? "🚫" : "➡️")
                                    }
                                }
                                console.log(n + "\n```")
                            }(t),
                            (a = e.filter((function(e) {
                                var n = X[e];
                                return x(n.map((function(e) {
                                    return t[e]
                                }
                                ))) > .6 * n.length
                            }
                            ))).sort(),
                            [2, a]
                        }
                    }
                    ))
                }
                ))
            },
            fontPreferences: function() {
                return function(e, n) {
                    return void 0 === n && (n = 4e3),
                    H((function(t, a) {
                        var r = a.document
                          , c = r.body
                          , i = c.style;
                        i.width = n + "px",
                        i.webkitTextSizeAdjust = i.textSizeAdjust = "none",
                        B() ? c.style.zoom = "" + 1 / a.devicePixelRatio : j() && (c.style.zoom = "reset");
                        var o = r.createElement("div");
                        return o.textContent = s(Array(n / 20 << 0)).map((function() {
                            return "word"
                        }
                        )).join(" "),
                        c.appendChild(o),
                        e(r, c)
                    }
                    ), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
                }((function(e, n) {
                    for (var t = {}, a = {}, r = 0, c = Object.keys(ue); r < c.length; r++) {
                        var i = c[r]
                          , o = ue[i]
                          , u = o[0]
                          , d = void 0 === u ? {} : u
                          , l = o[1]
                          , s = void 0 === l ? "mmMwWLliI0fiflO&1" : l
                          , p = e.createElement("span");
                        p.textContent = s,
                        p.style.whiteSpace = "nowrap";
                        for (var f = 0, h = Object.keys(d); f < h.length; f++) {
                            var m = h[f]
                              , b = d[m];
                            void 0 !== b && (p.style[m] = b)
                        }
                        t[i] = p,
                        n.appendChild(e.createElement("br")),
                        n.appendChild(p)
                    }
                    for (var g = 0, k = Object.keys(ue); g < k.length; g++)
                        a[i = k[g]] = t[i].getBoundingClientRect().width;
                    return a
                }
                ))
            },
            audio: function() {
                var e = window
                  , n = e.OfflineAudioContext || e.webkitOfflineAudioContext;
                if (!n)
                    return -2;
                if (j() && !L() && !function() {
                    var e = window;
                    return x(["DOMRectList"in e, "RTCPeerConnectionIceEvent"in e, "SVGGeometryElement"in e, "ontransitioncancel"in e]) >= 3
                }())
                    return -1;
                var t = new n(1,5e3,44100)
                  , a = t.createOscillator();
                a.type = "triangle",
                a.frequency.value = 1e4;
                var r = t.createDynamicsCompressor();
                r.threshold.value = -50,
                r.knee.value = 40,
                r.ratio.value = 12,
                r.attack.value = 0,
                r.release.value = .25,
                a.connect(r),
                r.connect(t.destination),
                a.start(0);
                var c = function(e) {
                    var n = 3
                      , t = 500
                      , a = 500
                      , r = 5e3
                      , c = function() {};
                    return [new Promise((function(i, o) {
                        var u = !1
                          , d = 0
                          , l = 0;
                        e.oncomplete = function(e) {
                            return i(e.renderedBuffer)
                        }
                        ;
                        var s = function() {
                            setTimeout((function() {
                                return o(F("timeout"))
                            }
                            ), Math.min(a, l + r - Date.now()))
                        }
                          , p = function r() {
                            try {
                                switch (e.startRendering(),
                                e.state) {
                                case "running":
                                    l = Date.now(),
                                    u && s();
                                    break;
                                case "suspended":
                                    document.hidden || d++,
                                    u && d >= n ? o(F("suspended")) : setTimeout(r, t)
                                }
                            } catch (a) {
                                o(a)
                            }
                        };
                        p(),
                        c = function() {
                            u || (u = !0,
                            l > 0 && s())
                        }
                    }
                    )), c]
                }(t)
                  , i = c[0]
                  , o = c[1]
                  , u = i.then((function(e) {
                    return function(e) {
                        for (var n = 0, t = 0; t < e.length; ++t)
                            n += Math.abs(e[t]);
                        return n
                    }(e.getChannelData(0).subarray(4500))
                }
                ), (function(e) {
                    if ("timeout" === e.name || "suspended" === e.name)
                        return -3;
                    throw e
                }
                ));
                return u.catch((function() {}
                )),
                function() {
                    return o(),
                    u
                }
            },
            screenFrame: function() {
                var e = this
                  , n = J();
                return function() {
                    return d(e, void 0, void 0, (function() {
                        var e, t;
                        return l(this, (function(a) {
                            switch (a.label) {
                            case 0:
                                return [4, n()];
                            case 1:
                                return e = a.sent(),
                                [2, [(t = function(e) {
                                    return null === e ? null : P(e, 10)
                                }
                                )(e[0]), t(e[1]), t(e[2]), t(e[3])]]
                            }
                        }
                        ))
                    }
                    ))
                }
            },
            osCpu: function() {
                return navigator.oscpu
            },
            languages: function() {
                var e, n = navigator, t = [], a = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
                if (void 0 !== a && t.push([a]),
                Array.isArray(n.languages))
                    B() && x([!("MediaSettingsRange"in (e = window)), "RTCEncodedAudioFrame"in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || t.push(n.languages);
                else if ("string" == typeof n.languages) {
                    var r = n.languages;
                    r && t.push(r.split(","))
                }
                return t
            },
            colorDepth: function() {
                return window.screen.colorDepth
            },
            deviceMemory: function() {
                return C(D(navigator.deviceMemory), void 0)
            },
            screenResolution: function() {
                var e = screen
                  , n = function(e) {
                    return C(I(e), null)
                }
                  , t = [n(e.width), n(e.height)];
                return t.sort().reverse(),
                t
            },
            hardwareConcurrency: function() {
                return C(I(navigator.hardwareConcurrency), void 0)
            },
            timezone: function() {
                var e, n = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
                if (n) {
                    var t = (new n).resolvedOptions().timeZone;
                    if (t)
                        return t
                }
                var a, r = (a = (new Date).getFullYear(),
                -Math.max(D(new Date(a,0,1).getTimezoneOffset()), D(new Date(a,6,1).getTimezoneOffset())));
                return "UTC" + (r >= 0 ? "+" : "") + Math.abs(r)
            },
            sessionStorage: function() {
                try {
                    return !!window.sessionStorage
                } catch (e) {
                    return !0
                }
            },
            localStorage: function() {
                try {
                    return !!window.localStorage
                } catch (e) {
                    return !0
                }
            },
            indexedDB: function() {
                if (!S() && !A())
                    try {
                        return !!window.indexedDB
                    } catch (e) {
                        return !0
                    }
            },
            openDatabase: function() {
                return !!window.openDatabase
            },
            cpuClass: function() {
                return navigator.cpuClass
            },
            platform: function() {
                var e = navigator.platform;
                return "MacIntel" === e && j() && !L() ? function() {
                    if ("iPad" === navigator.platform)
                        return !0;
                    var e = screen
                      , n = e.width / e.height;
                    return x(["MediaSource"in window, !!Element.prototype.webkitRequestFullscreen, n > .65 && n < 1.53]) >= 2
                }() ? "iPad" : "iPhone" : e
            },
            plugins: function() {
                var e = navigator.plugins;
                if (e) {
                    for (var n = [], t = 0; t < e.length; ++t) {
                        var a = e[t];
                        if (a) {
                            for (var r = [], c = 0; c < a.length; ++c) {
                                var i = a[c];
                                r.push({
                                    type: i.type,
                                    suffixes: i.suffixes
                                })
                            }
                            n.push({
                                name: a.name,
                                description: a.description,
                                mimeTypes: r
                            })
                        }
                    }
                    return n
                }
            },
            canvas: function() {
                var e = function() {
                    var e = document.createElement("canvas");
                    return e.width = 1,
                    e.height = 1,
                    [e, e.getContext("2d")]
                }()
                  , n = e[0]
                  , t = e[1];
                return function(e, n) {
                    return !(!n || !e.toDataURL)
                }(n, t) ? {
                    winding: N(t),
                    geometry: V(n, t),
                    text: z(n, t)
                } : {
                    winding: !1,
                    geometry: "",
                    text: ""
                }
            },
            touchSupport: function() {
                var e, n = navigator, t = 0;
                void 0 !== n.maxTouchPoints ? t = I(n.maxTouchPoints) : void 0 !== n.msMaxTouchPoints && (t = n.msMaxTouchPoints);
                try {
                    document.createEvent("TouchEvent"),
                    e = !0
                } catch (a) {
                    e = !1
                }
                return {
                    maxTouchPoints: t,
                    touchEvent: e,
                    touchStart: "ontouchstart"in window
                }
            },
            vendor: function() {
                return navigator.vendor || ""
            },
            vendorFlavors: function() {
                for (var e = [], n = 0, t = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; n < t.length; n++) {
                    var a = t[n]
                      , r = window[a];
                    r && "object" == Object(o["a"])(r) && e.push(a)
                }
                return e.sort()
            },
            cookiesEnabled: function() {
                var e = document;
                try {
                    e.cookie = "cookietest=1; SameSite=Strict;";
                    var n = -1 !== e.cookie.indexOf("cookietest=");
                    return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",
                    n
                } catch (t) {
                    return !1
                }
            },
            colorGamut: function() {
                for (var e = 0, n = ["rec2020", "p3", "srgb"]; e < n.length; e++) {
                    var t = n[e];
                    if (matchMedia("(color-gamut: " + t + ")").matches)
                        return t
                }
            },
            invertedColors: function() {
                return !!ne("inverted") || !ne("none") && void 0
            },
            forcedColors: function() {
                return !!te("active") || !te("none") && void 0
            },
            monochrome: function() {
                if (matchMedia("(min-monochrome: 0)").matches) {
                    for (var e = 0; e <= 100; ++e)
                        if (matchMedia("(max-monochrome: " + e + ")").matches)
                            return e;
                    throw new Error("Too high value")
                }
            },
            contrast: function() {
                return ae("no-preference") ? 0 : ae("high") || ae("more") ? 1 : ae("low") || ae("less") ? -1 : ae("forced") ? 10 : void 0
            },
            reducedMotion: function() {
                return !!re("reduce") || !re("no-preference") && void 0
            },
            hdr: function() {
                return !!ce("high") || !ce("standard") && void 0
            },
            math: function() {
                var e, n = ie.acos || oe, t = ie.acosh || oe, a = ie.asin || oe, r = ie.asinh || oe, c = ie.atanh || oe, i = ie.atan || oe, o = ie.sin || oe, u = ie.sinh || oe, d = ie.cos || oe, l = ie.cosh || oe, s = ie.tan || oe, p = ie.tanh || oe, f = ie.exp || oe, h = ie.expm1 || oe, m = ie.log1p || oe;
                return {
                    acos: n(.12312423423423424),
                    acosh: t(1e308),
                    acoshPf: (e = 1e154,
                    ie.log(e + ie.sqrt(e * e - 1))),
                    asin: a(.12312423423423424),
                    asinh: r(1),
                    asinhPf: function(e) {
                        return ie.log(e + ie.sqrt(e * e + 1))
                    }(1),
                    atanh: c(.5),
                    atanhPf: function(e) {
                        return ie.log((1 + e) / (1 - e)) / 2
                    }(.5),
                    atan: i(.5),
                    sin: o(-1e300),
                    sinh: u(1),
                    sinhPf: function(e) {
                        return ie.exp(e) - 1 / ie.exp(e) / 2
                    }(1),
                    cos: d(10.000000000123),
                    cosh: l(1),
                    coshPf: function(e) {
                        return (ie.exp(e) + 1 / ie.exp(e)) / 2
                    }(1),
                    tan: s(-1e300),
                    tanh: p(1),
                    tanhPf: function(e) {
                        return (ie.exp(2 * e) - 1) / (ie.exp(2 * e) + 1)
                    }(1),
                    exp: f(1),
                    expm1: h(1),
                    expm1Pf: function(e) {
                        return ie.exp(e) - 1
                    }(1),
                    log1p: m(10),
                    log1pPf: function(e) {
                        return ie.log(1 + e)
                    }(10),
                    powPI: function(e) {
                        return ie.pow(ie.PI, e)
                    }(-100)
                }
            }
        };
        function le(e) {
            var n = function(e) {
                if (T())
                    return .4;
                if (j())
                    return L() ? .5 : .3;
                var n = e.platform.value || "";
                return /^Win/.test(n) ? .6 : /^Mac/.test(n) ? .5 : .7
            }(e)
              , t = function(e) {
                return P(.99 + .01 * e, 1e-4)
            }(n);
            return {
                score: n,
                comment: "$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g, "" + t)
            }
        }
        function se(e) {
            return JSON.stringify(e, (function(e, n) {
                return n instanceof Error ? u({
                    name: (t = n).name,
                    message: t.message,
                    stack: null === (a = t.stack) || void 0 === a ? void 0 : a.split("\n")
                }, t) : n;
                var t, a
            }
            ), 2)
        }
        function pe(e) {
            return y(function(e) {
                for (var n = "", t = 0, a = Object.keys(e).sort(); t < a.length; t++) {
                    var r = a[t]
                      , c = e[r]
                      , i = c.error ? "error" : JSON.stringify(c.value);
                    n += (n ? "|" : "") + r.replace(/([:|\\])/g, "\\$1") + ":" + i
                }
                return n
            }(e))
        }
        function fe(e) {
            return void 0 === e && (e = 50),
            function(e, n) {
                void 0 === n && (n = 1 / 0);
                var t = window.requestIdleCallback;
                return t ? new Promise((function(e) {
                    return t.call(window, (function() {
                        return e()
                    }
                    ), {
                        timeout: n
                    })
                }
                )) : p(Math.min(e, n))
            }(e, 2 * e)
        }
        function he(e, n) {
            var t = Date.now();
            return {
                get: function(a) {
                    return d(this, void 0, void 0, (function() {
                        var r, c, i;
                        return l(this, (function(o) {
                            switch (o.label) {
                            case 0:
                                return r = Date.now(),
                                [4, e()];
                            case 1:
                                return c = o.sent(),
                                i = function(e) {
                                    var n;
                                    return {
                                        get visitorId() {
                                            return void 0 === n && (n = pe(this.components)),
                                            n
                                        },
                                        set visitorId(e) {
                                            n = e
                                        },
                                        confidence: le(e),
                                        components: e,
                                        version: "3.3.3"
                                    }
                                }(c),
                                (n || (null == a ? void 0 : a.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: " + i.version + "\nuserAgent: " + navigator.userAgent + "\ntimeBetweenLoadAndGet: " + (r - t) + "\nvisitorId: " + i.visitorId + "\ncomponents: " + se(c) + "\n```"),
                                [2, i]
                            }
                        }
                        ))
                    }
                    ))
                }
            }
        }
        function me(e) {
            var n = void 0 === e ? {} : e
              , t = n.delayFallback
              , a = n.debug;
            return n.monitoring,
            d(this, void 0, void 0, (function() {
                return l(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, fe(t)];
                    case 1:
                        return e.sent(),
                        [2, he(R(de, {
                            debug: a
                        }, []), a)]
                    }
                }
                ))
            }
            ))
        }
        var be = {
            load: me,
            hashComponents: pe,
            componentsToDebugString: se
        };
        be.load().then((function(e) {
            return e.get()
        }
        )).then((function(e) {
            var n = e.visitorId;
            window.sessionStorage.setItem("x-riskdevicesign", n)
        }
        )),
        a["a"].defaults.timeout = 6e4,
        a["a"].defaults.baseURL = r.host,
        a["a"].interceptors.request.use((function(e) {
            var n = "wap";
            return e.params = Object.assign(e.params || {}, {
                referrer: n
            }),
            e.headers["x-riskdevicesign"] = window.sessionStorage.getItem("x-riskdevicesign"),
            e
        }
        )),
        a["a"].interceptors.response.use((function(e) {
            var n = e.data
              , t = /\/s\//.test(e.config.url);
            if (Object(i["y"])(n) && !n.success && !t) {
                var a = new Error(n.resultMsg);
                return a.code = n.resultCode,
                a.data = n.data,
                a.hide = n.hideError,
                a.statusCode = n.code,
                e.config.headers.noAuth || -999 !== Number(a.code) || c["a"].emit(c["a"].events.AUTH_FAIL),
                Promise.reject(a)
            }
            return n
        }
        ), (function(e) {
            if (e.response)
                switch (e.response.status) {
                case 400:
                    e.message = "请求错误";
                    break;
                case 401:
                    e.message = "未授权，请登录",
                    c["a"].emit(c["a"].events.AUTH_FAIL);
                    break;
                case 403:
                    e.message = "登录过期，请重新登录",
                    c["a"].emit(c["a"].events.AUTH_FAIL);
                    break;
                case 404:
                    e.message = "请求地址出错";
                    break;
                case 500:
                    e.message = "服务器内部错误";
                    break;
                case 501:
                    e.message = "服务未实现";
                    break;
                case 502:
                    e.message = "网关错误";
                    break;
                case 503:
                    e.message = "服务不可用";
                    break;
                case 504:
                    e.message = "网关超时";
                    break;
                case 505:
                    e.message = "HTTP版本不受支持";
                    break;
                default:
                    break
                }
            else
                "ECONNABORTED" === e.code && e.message.includes("timeout") && (e.message = "请求超时",
                e.status = "timeout"),
                e.message.includes("Network Error") && (e.message = "网络错误");
            return Promise.reject(e)
        }
        ));
        n["a"] = a["a"]
    },
    c466: function(e, n, t) {
        "use strict";
        t("3b2b"),
        t("a481");
        n["a"] = {
            format: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd"
                  , t = new Date(e)
                  , a = {
                    "M+": t.getMonth() + 1,
                    "d+": t.getDate(),
                    "h+": t.getHours(),
                    "m+": t.getMinutes(),
                    "s+": t.getSeconds(),
                    "q+": Math.floor((t.getMonth() + 3) / 3),
                    S: t.getMilliseconds()
                };
                for (var r in /(y+)/.test(n) && (n = n.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))),
                a)
                    new RegExp("(" + r + ")").test(n) && (n = n.replace(RegExp.$1, 1 === RegExp.$1.length ? a[r] : ("00" + a[r]).substr(("" + a[r]).length)));
                return n
            },
            getDateTimestamp: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , n = new Date;
                return n.setDate(n.getDate() + e),
                n.setHours(0),
                n.setMinutes(0),
                n.setSeconds(0),
                n.setMilliseconds(0),
                n.getTime()
            }
        }
    },
    c51c: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = [{
            path: "/activity/2021618",
            name: "2021618",
            meta: {
                title: "年中大促 翼促即发",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("2021517")]).then(t.bind(null, "f35b"))
            }
        }]
    },
    cbd5: function(e, n, t) {
        "use strict";
        t.r(n),
        n["default"] = {
            path: "/activity/5G",
            name: "5G",
            meta: {
                title: "5G+拎包入住",
                platform: ["all"]
            },
            component: function() {
                return t.e("5G").then(t.bind(null, "5f0c"))
            }
        }
    },
    dd8e: function(e, n, t) {
        "use strict";
        var a = t("bd86")
          , r = t("a8db")
          , c = (t("a481"),
        t("75fc"))
          , i = (t("6b54"),
        t("ac6a"),
        t("7f7f"),
        t("6762"),
        t("2fdb"),
        t("2b0e"))
          , o = t("8c4f")
          , u = [{
            path: "/product/:productCode",
            name: "productDetail",
            meta: {
                title: "",
                platform: ["wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("appSolutionDetail~home~productDetail"), t.e("productDetail")]).then(t.bind(null, "46f9"))
            }
        }, {
            path: "/operateProduct",
            name: "operateProduct",
            meta: {
                title: "天翼云产品",
                auth: !0,
                platform: ["wap", "wechat"]
            },
            component: function() {
                return t.e("operateProduct").then(t.bind(null, "61ee"))
            }
        }, {
            path: "/buy/ops",
            name: "ops",
            meta: {
                title: "产品选购",
                auth: !0,
                platform: ["wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("buy~recognition~submitWorkorderTwo"), t.e("buy")]).then(t.bind(null, "b90e"))
            }
        }, {
            path: "/buy/:type/:code",
            name: "buy",
            meta: {
                title: "产品选购",
                auth: !0,
                platform: ["wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("buy~recognition~submitWorkorderTwo"), t.e("buy")]).then(t.bind(null, "c9a5"))
            }
        }, {
            path: "/paymentResponse",
            name: "paymentResponse",
            meta: {
                title: "订单支付",
                auth: !0,
                platform: ["wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("paymentResponse")]).then(t.bind(null, "7fe2"))
            }
        }]
          , d = u
          , l = [{
            path: "/calculator/:code",
            name: "calculator",
            meta: {
                title: "价格计算器",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("new")]).then(t.bind(null, "f93b"))
            }
        }, {
            path: "/budget",
            name: "budget",
            meta: {
                title: "价格预算清单",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("priseList")]).then(t.bind(null, "f3df"))
            }
        }]
          , s = l
          , p = {
            path: "/serviceCase",
            name: "serviceCase",
            component: function() {
                return t.e("serviceCase").then(t.bind(null, "3016"))
            },
            children: [{
                path: ":category",
                name: "serviceCaseCategory",
                meta: {
                    title: "服务案例",
                    keepAlive: !0,
                    platform: ["all"],
                    newPath: "h5/clientcases"
                },
                component: function() {
                    return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("serviceCaseCategory")]).then(t.bind(null, "ac97"))
                }
            }, {
                path: ":category/:caseId",
                name: "serviceCaseDetail",
                meta: {
                    title: "服务案例详情",
                    platform: ["all"],
                    newPath: function(e) {
                        return "/h5/clientcases/".concat(e.caseId)
                    }
                },
                component: function() {
                    return t.e("serviceCaseDetail").then(t.bind(null, "a09a"))
                }
            }]
        }
          , f = p
          , h = [{
            path: "/cloud/:id?",
            name: "cloud",
            meta: {
                title: "弹性云主机",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("cloud")]).then(t.bind(null, "c410"))
            }
        }, {
            path: "/cloud/instance/:nodeId/:hostId/:regionId/:version",
            name: "cloudInstance",
            meta: {
                title: "弹性云主机",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("cloudInstance")]).then(t.bind(null, "867d"))
            }
        }]
          , m = h
          , b = [{
            path: "/disk/:id?",
            name: "diskIndex",
            meta: {
                title: "云硬盘",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("diskIndex")]).then(t.bind(null, "87fd"))
            }
        }, {
            path: "/disk/instance/:id/:name/:regionId/:version/:from/:nodeId/:hostId?",
            name: "diskInstance",
            meta: {
                title: "云硬盘",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("diskInstance")]).then(t.bind(null, "e93f"))
            }
        }, {
            path: "/disk/backup/:id/:name/:regionId/:version",
            name: "diskBackup",
            meta: {
                title: "创建云硬盘备份",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("bindDisk~bindIp~createBackup~ipDetail"), t.e("createBackup")]).then(t.bind(null, "6562"))
            }
        }, {
            path: "/disk/bind/:hostId/:regionId/:version",
            name: "bindDisk",
            meta: {
                title: "挂载磁盘",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("bindDisk~bindIp~createBackup~ipDetail"), t.e("bindDisk")]).then(t.bind(null, "264a"))
            }
        }]
          , g = b
          , k = [{
            path: "/ip/:id?",
            name: "ip",
            meta: {
                title: "弹性IP",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("ip")]).then(t.bind(null, "c167"))
            }
        }, {
            path: "/bindip/:id/:zoneId/:version",
            name: "bindIp",
            meta: {
                title: "绑定弹性IP",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("bindDisk~bindIp~createBackup~ipDetail"), t.e("bindIp")]).then(t.bind(null, "3ce6"))
            }
        }, {
            path: "/ip/detail/:id/:regionId/:version",
            name: "detailIp",
            meta: {
                title: "弹性IP详情",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("bindDisk~bindIp~createBackup~ipDetail"), t.e("ipDetail")]).then(t.bind(null, "e2d2"))
            }
        }]
          , v = k
          , w = [{
            path: "/appSolution/index",
            name: "appSolutionIndex",
            meta: {
                title: "天翼云解决方案",
                platform: ["all"],
                newPath: "/h5/solutions"
            },
            component: function() {
                return t.e("appSolutionIndex").then(t.bind(null, "e57f"))
            }
        }, {
            path: "/appSolution/detail/:solutionId",
            name: "solutionDetail",
            meta: {
                title: "",
                platform: ["all"],
                newPath: function(e) {
                    return "/h5/solutions/".concat(e.solutionId)
                }
            },
            component: function() {
                return Promise.all([t.e("appSolutionDetail~home~productDetail"), t.e("appSolutionDetail")]).then(t.bind(null, "465e"))
            }
        }, {
            path: "/appSolution/form",
            name: "appSolutionForm2",
            meta: {
                title: "服务咨询",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("chunk-f374825a"), t.e("appSolutionForm")]).then(t.bind(null, "f9cc"))
            }
        }]
          , y = w
          , I = (t("cadf"),
        function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            n = Array.isArray(n) ? n : [n],
            e.push.apply(e, Object(c["a"])(n))
        }
        )
          , D = function() {
            var e = []
              , n = t("0b94");
            return n.keys().forEach((function(t) {
                var a = n(t).default;
                I(e, a)
            }
            )),
            e
        }
          , C = D()
          , x = {
            path: "/activity",
            name: "activity",
            component: function() {
                return t.e("activity").then(t.bind(null, "6e5b"))
            },
            children: C
        }
          , P = x
          , O = {
            path: "/agent",
            name: "agent",
            meta: {
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agent")]).then(t.bind(null, "bc86"))
            },
            children: [{
                path: "info",
                name: "info",
                meta: {
                    title: "基本信息 (1/3)",
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agentBank~agentInfo~agentPhone"), t.e("agentInfo")]).then(t.bind(null, "9b26"))
                }
            }, {
                path: "phone",
                name: "phone",
                meta: {
                    title: "联系方式 (2/3)",
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("agentBank~agentInfo~agentPhone"), t.e("agentPhone")]).then(t.bind(null, "248b"))
                }
            }, {
                path: "bank",
                name: "bank",
                meta: {
                    title: "银行信息 (3/3)",
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("agentBank~agentInfo~agentPhone"), t.e("agentBank")]).then(t.bind(null, "4f6b"))
                }
            }, {
                path: "submit",
                name: "submit",
                meta: {
                    title: "提交",
                    platform: ["all"]
                },
                component: function() {
                    return t.e("agentSubmit").then(t.bind(null, "e784"))
                }
            }, {
                path: "recheckFill",
                name: "recheckFill",
                meta: {
                    title: "复审",
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("agentRecheckFill~detail~order~register~spring"), t.e("agentRecheckFill")]).then(t.bind(null, "1b8a"))
                }
            }, {
                path: "recheckSubmit",
                name: "recheckSubmit",
                meta: {
                    title: "复审",
                    platform: ["all"]
                },
                component: function() {
                    return t.e("agentRecheckSubmit").then(t.bind(null, "ce6c"))
                }
            }, {
                path: "recheckResult",
                name: "recheckResult",
                meta: {
                    title: "复审",
                    platform: ["all"]
                },
                component: function() {
                    return t.e("agentRecheckResult").then(t.bind(null, "2344"))
                }
            }]
        }
          , R = O
          , S = {
            path: "/",
            component: function() {
                return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("console~home~my~product"), t.e("appSolutionDetail~home~productDetail"), t.e("home~voucher"), t.e("home")]).then(t.bind(null, "3b4d"))
            },
            children: [{
                path: "",
                name: "home",
                meta: {
                    title: "天翼云",
                    platform: ["wap", "wechat"],
                    newPath: "/h5"
                },
                component: function() {
                    return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("console~home~my~product"), t.e("appSolutionDetail~home~productDetail"), t.e("home~voucher"), t.e("home")]).then(t.bind(null, "1c07"))
                }
            }, {
                path: "product",
                name: "product",
                meta: {
                    title: "产品",
                    platform: ["wap", "wechat"],
                    newPath: "/h5/discover/product"
                },
                component: function() {
                    return Promise.all([t.e("console~home~my~product"), t.e("product")]).then(t.bind(null, "dc86"))
                }
            }, {
                path: "console",
                name: "console",
                meta: {
                    title: "控制台",
                    platform: ["wap", "wechat"],
                    newPath: "/h5/manage/console"
                },
                component: function() {
                    return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("console~home~my~product"), t.e("console")]).then(t.bind(null, "7e60"))
                }
            }, {
                path: "my",
                name: "my",
                meta: {
                    title: "我的",
                    platform: ["wap", "wechat"],
                    newPath: "/h5/my"
                },
                component: function() {
                    return Promise.all([t.e("console~home~my~product"), t.e("my")]).then(t.bind(null, "d63a"))
                }
            }]
        }
          , A = S
          , B = {
            path: "/auth",
            component: function() {
                return t.e("auth").then(t.bind(null, "e9eb"))
            },
            children: [{
                path: "login",
                name: "login",
                meta: {
                    title: "登录",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("identification~login~register"), t.e("login")]).then(t.bind(null, "ebb0"))
                }
            }, {
                path: "register",
                name: "register",
                meta: {
                    title: "新用户注册",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("agentRecheckFill~detail~order~register~spring"), t.e("identification~login~register"), t.e("register")]).then(t.bind(null, "a6ac"))
                }
            }, {
                path: "reset",
                name: "reset",
                meta: {
                    title: "重置登录密码",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("reset").then(t.bind(null, "0537"))
                }
            }, {
                path: "accountBind",
                name: "accountBind",
                meta: {
                    title: "账号绑定",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("accountBind").then(t.bind(null, "2041"))
                }
            }, {
                path: "modify",
                name: "modifyPassword",
                meta: {
                    title: "修改密码",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("modifyPwd").then(t.bind(null, "9b8e"))
                }
            }]
        }
          , j = B
          , L = {
            path: "/business",
            name: "business",
            meta: {
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return t.e("businessOpportunities").then(t.bind(null, "1811"))
            },
            children: [{
                path: "weekly",
                name: "weekly",
                meta: {
                    title: "战团周报",
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("businessOpportunitiesWeekly~pivotalPerson"), t.e("businessOpportunitiesWeekly")]).then(t.bind(null, "8358"))
                }
            }, {
                path: "pivotalPerson",
                name: "pivotalPerson",
                meta: {
                    title: "关键人收集",
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("businessOpportunitiesWeekly~pivotalPerson"), t.e("pivotalPerson")]).then(t.bind(null, "0804"))
                }
            }]
        }
          , M = L
          , E = {
            path: "/video",
            component: function() {
                return t.e("video").then(t.bind(null, "f479"))
            },
            children: [{
                path: "",
                name: "video",
                meta: {
                    title: "视频播放",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "3867"))
                }
            }]
        }
          , T = E
          , F = [{
            path: "/account",
            component: function() {
                return t.e("account").then(t.bind(null, "18ce"))
            },
            children: [{
                path: "",
                name: "account",
                meta: {
                    title: "账户管理",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "97d4"))
                }
            }, {
                path: "coupon",
                name: "coupon",
                meta: {
                    title: "优惠券",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("chunk-6b589ffd"), t.e("coupon")]).then(t.bind(null, "88a6"))
                }
            }, {
                path: "voucher",
                name: "voucher",
                meta: {
                    title: "代金券",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("chunk-6b589ffd"), t.e("home~voucher"), t.e("voucher")]).then(t.bind(null, "fbe7"))
                }
            }, {
                path: "info",
                name: "acctInfo",
                meta: {
                    title: "账户信息",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-2e3a7f6e"), t.e("info")]).then(t.bind(null, "6838"))
                }
            }, {
                path: "realname",
                name: "realname",
                meta: {
                    title: "实名认证",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-2e3a7f6e"), t.e("info")]).then(t.bind(null, "b335"))
                }
            }, {
                path: "realname/uploadpic",
                name: "realname/uploadpic",
                meta: {
                    title: "银行卡认证",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-2e3a7f6e"), t.e("info")]).then(t.bind(null, "c2cc"))
                }
            }, {
                path: "realAuthHelper",
                name: "realAuthHelper",
                meta: {
                    title: "实名认证",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-2e3a7f6e"), t.e("info")]).then(t.bind(null, "ef1f"))
                }
            }, {
                path: "recognition",
                name: "recognition",
                meta: {
                    title: "活体认证",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("buy~recognition~submitWorkorderTwo"), t.e("chunk-eec5f6b8"), t.e("recognition")]).then(t.bind(null, "7628"))
                }
            }, {
                path: "mobile",
                name: "mobile",
                meta: {
                    title: "修改绑定手机号",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-2e3a7f6e"), t.e("info")]).then(t.bind(null, "7bf7"))
                }
            }, {
                path: "edit",
                name: "edit",
                meta: {
                    title: "修改账户信息",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("add~continuedDetail~edit~order~orderDetail"), t.e("edit")]).then(t.bind(null, "40d8"))
                }
            }, {
                path: "edit/address",
                name: "address",
                meta: {
                    title: "修改联系地址",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("address").then(t.bind(null, "dfc0"))
                }
            }, {
                path: "withdraw",
                component: function() {
                    return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("add~continuedDetail~edit~order~orderDetail"), t.e("edit")]).then(t.bind(null, "850e"))
                },
                children: [{
                    path: "",
                    name: "withdraw",
                    meta: {
                        title: "提现",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("withdraw")]).then(t.bind(null, "fefa"))
                    }
                }, {
                    path: "bankList",
                    name: "bankList",
                    meta: {
                        title: "选择银行卡",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("withdraw")]).then(t.bind(null, "0dad"))
                    }
                }, {
                    path: "addBankCard",
                    name: "addBankCard",
                    meta: {
                        title: "银行卡信息",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("addBankCard")]).then(t.bind(null, "207c"))
                    }
                }, {
                    path: "editBankCard",
                    name: "editBankCard",
                    meta: {
                        title: "银行卡信息",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("editBankCard")]).then(t.bind(null, "91da"))
                    }
                }, {
                    path: "result",
                    name: "result",
                    meta: {
                        title: "处理结果",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return t.e("result").then(t.bind(null, "81b8"))
                    }
                }, {
                    path: "list",
                    name: "list",
                    meta: {
                        title: "提现明细",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("list")]).then(t.bind(null, "b825"))
                    }
                }, {
                    path: "detail/:id",
                    name: "detail",
                    meta: {
                        title: "提现详情",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("agentRecheckFill~detail~order~register~spring"), t.e("detail~workorderDetail"), t.e("detail")]).then(t.bind(null, "4c1b"))
                    }
                }]
            }, {
                path: "recharge",
                name: "recharge",
                meta: {
                    title: "充值",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("recharge").then(t.bind(null, "2469"))
                }
            }]
        }, {
            path: "/rechargeResponse/:result",
            name: "rechargeResponse",
            meta: {
                title: "账户充值",
                auth: !0,
                platform: ["wap", "wechat"]
            },
            component: function() {
                return t.e("rechargeResponse").then(t.bind(null, "6217"))
            }
        }]
          , H = F
          , _ = {
            path: "/setting",
            component: function() {
                return t.e("setting").then(t.bind(null, "efb7"))
            },
            children: [{
                path: "",
                name: "setting",
                meta: {
                    title: "设置",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "aa3a"))
                }
            }, {
                path: "accountBind",
                name: "settingAccountBind",
                meta: {
                    title: "账号绑定",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("settingAccountBind")]).then(t.bind(null, "f356"))
                }
            }, {
                path: "about",
                name: "about",
                meta: {
                    title: "关于我们",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("about").then(t.bind(null, "5b2a"))
                }
            }]
        }
          , W = _
          , q = [{
            path: "/order/list",
            name: "orderList",
            meta: {
                title: "",
                keepAlive: !0,
                auth: !0,
                platform: ["wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("orderList")]).then(t.bind(null, "7ded"))
            }
        }, {
            path: "/order/list-history",
            name: "orderListHistory",
            meta: {
                title: "历史订单",
                keepAlive: !0,
                auth: !0,
                platform: ["wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("orderListHistory")]).then(t.bind(null, "b551"))
            }
        }, {
            path: "/order/detail/:orderId",
            name: "orderDetail",
            meta: {
                title: "订单详情",
                keepAlive: !1,
                auth: !0,
                platform: ["wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("add~continuedDetail~edit~order~orderDetail"), t.e("orderDetail")]).then(t.bind(null, "d355"))
            }
        }]
          , $ = q
          , U = {
            path: "/news",
            component: function() {
                return t.e("news").then(t.bind(null, "69a2"))
            },
            children: [{
                path: "detail/:newsId",
                name: "newsDetail",
                meta: {
                    title: "资讯详情",
                    platform: ["wap", "wechat"],
                    newPath: function(e) {
                        return "/h5/news/".concat(e.newsId)
                    }
                },
                component: function() {
                    return t.e("newsDetail").then(t.bind(null, "6684"))
                }
            }, {
                path: "list",
                name: "newsList",
                meta: {
                    title: "新闻资讯",
                    platform: ["wap", "wechat"],
                    newPath: "/h5/news"
                },
                component: function() {
                    return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("newsList")]).then(t.bind(null, "05cb"))
                }
            }]
        }
          , G = U
          , N = {
            path: "/identification",
            component: function() {
                return Promise.all([t.e("identification~login~register"), t.e("identification")]).then(t.bind(null, "697f"))
            },
            children: [{
                path: "",
                name: "identificationIndex",
                meta: {
                    title: "用户类型",
                    auth: !1,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("identificationIndex").then(t.bind(null, "4fc2"))
                }
            }, {
                path: "authing",
                name: "authing",
                meta: {
                    title: "审核认证中",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("identificationIndex").then(t.bind(null, "279e"))
                }
            }, {
                path: "fail",
                name: "fail",
                meta: {
                    title: "认证状态",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("identificationIndex").then(t.bind(null, "5583"))
                }
            }, {
                path: "personal",
                name: "personalAuth",
                meta: {
                    title: "个人实名认证",
                    auth: !1,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-2e3a7f6e"), t.e("identificationStep")]).then(t.bind(null, "0b72"))
                }
            }, {
                path: "company",
                name: "companyAuth",
                meta: {
                    title: "企业实名认证",
                    auth: !1,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-2e3a7f6e"), t.e("identificationStep")]).then(t.bind(null, "d2ff"))
                }
            }, {
                path: "personal/idAuth",
                name: "idAuth",
                meta: {
                    title: "个人身份证认证",
                    auth: !1,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-2e3a7f6e"), t.e("identificationStep")]).then(t.bind(null, "6def"))
                }
            }, {
                path: "company/nonIdAuth",
                name: "nonIdAuth",
                meta: {
                    title: "个人非身份证认证",
                    auth: !1,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-2e3a7f6e"), t.e("identificationStep")]).then(t.bind(null, "937c"))
                }
            }]
        }
          , z = N
          , V = {
            path: "/cloudMarket",
            component: function() {
                return t.e("cloudMarket").then(t.bind(null, "7735"))
            },
            children: [{
                path: "",
                name: "cloudMarketEntrance",
                meta: {
                    title: "云市场",
                    keepAlive: !0,
                    platform: ["app"]
                },
                component: function() {
                    return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "314f"))
                }
            }, {
                path: "channel/:code",
                name: "cloudMarketChannel",
                meta: {
                    keepAlive: !0,
                    platform: ["app"]
                },
                component: function() {
                    return Promise.all([t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("channel")]).then(t.bind(null, "d468"))
                }
            }, {
                path: "detail/:productId",
                name: "cloudMarketDetail",
                meta: {
                    title: "商品详情",
                    platform: ["app"]
                },
                component: function() {
                    return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("agentRecheckFill~detail~order~register~spring"), t.e("detail~workorderDetail"), t.e("detail")]).then(t.bind(null, "33e3"))
                }
            }, {
                path: "order/:orderId",
                name: "cloudMarketOrder",
                meta: {
                    title: "确认订单",
                    auth: !0,
                    platform: ["app"]
                },
                component: function() {
                    return Promise.all([t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("add~continuedDetail~edit~order~orderDetail"), t.e("agentRecheckFill~detail~order~register~spring"), t.e("order")]).then(t.bind(null, "4781"))
                }
            }]
        }
          , Z = V
          , J = {
            path: "/qrCodeLogin",
            name: "qrCodeLogin",
            meta: {
                platform: ["app"]
            },
            component: function() {
                return t.e("qrCodeLogin").then(t.bind(null, "b99b"))
            }
        }
          , K = J
          , Q = {
            path: "/qrcodeInOne",
            name: "qrcodeInOne",
            meta: {
                platform: ["app", "wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("qrCodeInOne")]).then(t.bind(null, "60cd"))
            }
        }
          , X = Q
          , Y = {
            path: "/workorder",
            component: function() {
                return t.e("workorder").then(t.bind(null, "5cd8"))
            },
            children: [{
                path: "",
                name: "submitWorkorderTwo",
                meta: {
                    title: "提交工单",
                    auth: !0,
                    platform: ["app"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("buy~recognition~submitWorkorderTwo"), t.e("submitWorkorderTwo")]).then(t.bind(null, "4f0c"))
                }
            }, {
                path: "management",
                name: "workorderManagement",
                meta: {
                    title: "工单管理",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("workorderManagement")]).then(t.bind(null, "f83e"))
                }
            }, {
                path: "submit",
                name: "submitWorkorder",
                meta: {
                    title: "新建工单",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("submitWorkorder")]).then(t.bind(null, "fa56"))
                }
            }, {
                path: "product",
                name: "workorderProducts",
                meta: {
                    title: "选择产品",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("chunk-4d275443").then(t.bind(null, "057c"))
                }
            }, {
                path: "detail/:workorderId",
                name: "workorderDetail",
                meta: {
                    title: "工单详情",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("detail~workorderDetail"), t.e("workorderDetail")]).then(t.bind(null, "6614"))
                }
            }, {
                path: "search",
                name: "workorderSearch",
                meta: {
                    title: "工单管理",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("workorderSearch")]).then(t.bind(null, "e936"))
                }
            }, {
                path: "progress",
                name: "workorderProgress",
                meta: {
                    title: "工单进度",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return t.e("workorderProgress").then(t.bind(null, "ad73"))
                }
            }, {
                path: "demand",
                name: "workorderDemand",
                meta: {
                    title: "业务需求单",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("chunk-2e3a7f6e"), t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("workorderDemand")]).then(t.bind(null, "4969"))
                }
            }]
        }
          , ee = Y
          , ne = {
            path: "*",
            meta: {
                title: "找到不到该页面",
                platform: ["all"]
            },
            component: function() {
                return t.e("notFound").then(t.bind(null, "935e"))
            }
        }
          , te = ne
          , ae = {
            path: "/download",
            name: "download",
            meta: {
                title: "天翼云 安全云",
                platform: ["wap", "wechat"]
            },
            component: function() {
                return t.e("download").then(t.bind(null, "fe59"))
            }
        }
          , re = ae
          , ce = {
            path: "/feedback",
            name: "feedback",
            meta: {
                title: "建议与反馈",
                platform: ["wap", "wechat"],
                auth: !0
            },
            component: function() {
                return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("feedback")]).then(t.bind(null, "2639"))
            }
        }
          , ie = ce
          , oe = [{
            path: "/message/list",
            name: "messageList",
            meta: {
                title: "消息",
                platform: ["wap", "wechat"],
                auth: !0,
                newPath: "/h5/messages"
            },
            component: function() {
                return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("messageList")]).then(t.bind(null, "6db4"))
            }
        }, {
            path: "/message/detail/:id",
            name: "messageDetail",
            meta: {
                title: "消息详情",
                platform: ["wap", "wechat"],
                auth: !0,
                newPath: function(e) {
                    return "/h5/solutions/".concat(e.id)
                }
            },
            component: function() {
                return t.e("messageDetail").then(t.bind(null, "1fe8"))
            }
        }]
          , ue = oe
          , de = [{
            path: "/notice/list",
            name: "noticeList",
            meta: {
                title: "消息",
                platform: ["wap", "wechat"],
                newPath: "/h5/notices"
            },
            component: function() {
                return t.e("noticeList").then(t.bind(null, "0294"))
            }
        }, {
            path: "/notice/detail/:id",
            name: "noticeDetail",
            meta: {
                title: "公告详情",
                platform: ["wap", "wechat"],
                newPath: function(e) {
                    return "/h5/notices/".concat(e.id)
                }
            },
            component: function() {
                return t.e("noticeDetail").then(t.bind(null, "e3e1"))
            }
        }]
          , le = de
          , se = [{
            path: "/helpCenter",
            name: "helpCenter",
            meta: {
                title: "帮助中心",
                platform: ["wap", "wechat"]
            },
            component: function() {
                return t.e("helpCenter").then(t.bind(null, "5cb7"))
            }
        }, {
            path: "/helpCenter/docs",
            name: "helpCenterDocs",
            meta: {
                title: "帮助文档",
                platform: ["all"]
            },
            component: function() {
                return t.e("helpCenterDocs").then(t.bind(null, "3e9f"))
            }
        }, {
            path: "/helpCenter/docs/:id",
            name: "helpCenterDocsDetail",
            meta: {
                title: "帮助中心",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("helpCenterDocsDetail")]).then(t.bind(null, "3851"))
            }
        }, {
            path: "/helpCenter/docs/:bookId/:pageId",
            name: "helpCenterPageDetail",
            meta: {
                title: "帮助中心",
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("helpCenterPageDetail")]).then(t.bind(null, "7ce2"))
            }
        }, {
            path: "/helpCenter/search",
            name: "helpCenterSearch",
            meta: {
                title: "",
                platform: ["wap", "wechat"]
            },
            component: function() {
                return Promise.all([t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("helpCenterSearch")]).then(t.bind(null, "5747"))
            }
        }]
          , pe = se
          , fe = [{
            path: "/challenge",
            name: "challenge",
            meta: {
                title: "“创青春”智慧校园主题赛",
                platform: ["all"]
            },
            component: function() {
                return t.e("challenge").then(t.bind(null, "bb41"))
            }
        }, {
            path: "/challenge/field",
            name: "challengeField",
            meta: {
                title: "主题赛场",
                platform: ["all"]
            },
            component: function() {
                return t.e("challengeField").then(t.bind(null, "beb7"))
            }
        }, {
            path: "/challenge/apply",
            name: "challengeApply",
            meta: {
                title: "填写报名信息",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("challengeApply~diskIndex~ip~orderDetail~settingAccountBind~withdraw~workorderDetail~workorderManagement"), t.e("challengeApply")]).then(t.bind(null, "70a9"))
            }
        }, {
            path: "/challenge/check",
            name: "challengeCheck",
            meta: {
                title: "查看报名信息",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return t.e("challengeCheck").then(t.bind(null, "9ab3"))
            }
        }]
          , he = fe
          , me = [{
            path: "/continued/list",
            name: "continuedList",
            meta: {
                title: "待续订",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("continuedList")]).then(t.bind(null, "6047"))
            }
        }, {
            path: "/continued/:id",
            name: "continuedDetail",
            meta: {
                title: "续订详情",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("add~continuedDetail~edit~order~orderDetail"), t.e("continuedDetail")]).then(t.bind(null, "597c"))
            }
        }]
          , be = me
          , ge = {
            path: "/invoice",
            component: function() {
                return t.e("invoice").then(t.bind(null, "0720"))
            },
            children: [{
                path: "/",
                name: "invoice",
                meta: {
                    title: "发票管理",
                    auth: !0,
                    platform: ["wap", "wechat"],
                    newPath: "/h5/receipt"
                },
                component: function() {
                    return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "eb2c"))
                }
            }, {
                path: "apply",
                name: "applyInvoice",
                meta: {
                    title: "申请开票",
                    auth: !0,
                    platform: ["wap", "wechat"],
                    newPath: "/h5/receipt/apply"
                },
                component: function() {
                    return Promise.all([t.e("chunk-7722201c"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("chunk-2e3a7f6e"), t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("apply")]).then(t.bind(null, "8e9b"))
                }
            }, {
                path: "title",
                component: function() {
                    return t.e("title").then(t.bind(null, "4531"))
                },
                children: [{
                    path: "/",
                    name: "title",
                    meta: {
                        title: "发票抬头",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "8bb3"))
                    }
                }, {
                    path: "write",
                    name: "invoiceWrite",
                    meta: {
                        title: "填写抬头",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("write")]).then(t.bind(null, "674a"))
                    }
                }, {
                    path: "add",
                    name: "invoiceAdd",
                    meta: {
                        title: "添加抬头",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("add~continuedDetail~edit~order~orderDetail"), t.e("add")]).then(t.bind(null, "69b8"))
                    }
                }, {
                    path: "edit",
                    name: "invoiceEdit",
                    meta: {
                        title: "编辑抬头",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("add~continuedDetail~edit~order~orderDetail"), t.e("edit")]).then(t.bind(null, "a78f"))
                    }
                }]
            }, {
                path: "address",
                component: function() {
                    return t.e("address").then(t.bind(null, "ec9f"))
                },
                children: [{
                    path: "/",
                    name: "invoiceAddress",
                    meta: {
                        title: "邮寄地址",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "a7e4"))
                    }
                }, {
                    path: "add",
                    name: "addressAdd",
                    meta: {
                        title: "新增地址",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("add~continuedDetail~edit~order~orderDetail"), t.e("add")]).then(t.bind(null, "ae92"))
                    }
                }, {
                    path: "edit",
                    name: "addressEdit",
                    meta: {
                        title: "编辑地址",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("add~continuedDetail~edit~order~orderDetail"), t.e("edit")]).then(t.bind(null, "245c"))
                    }
                }]
            }, {
                path: "record",
                component: function() {
                    return t.e("record").then(t.bind(null, "a0c7"))
                },
                children: [{
                    path: "/",
                    name: "invoiceRecord",
                    meta: {
                        title: "开票历史",
                        auth: !0,
                        platform: ["wap", "wechat"],
                        newPath: "/h5/receipt/record"
                    },
                    component: function() {
                        return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "a2aa"))
                    }
                }, {
                    path: "detail/:id",
                    name: "invoiceDetail",
                    meta: {
                        title: "发票详情",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("agentRecheckFill~detail~order~register~spring"), t.e("detail~workorderDetail"), t.e("detail")]).then(t.bind(null, "4b4b"))
                    }
                }, {
                    path: "money",
                    name: "money",
                    meta: {
                        title: "金额详情",
                        auth: !0,
                        platform: ["wap", "wechat"]
                    },
                    component: function() {
                        return t.e("money").then(t.bind(null, "f2d6"))
                    }
                }]
            }]
        }
          , ke = ge
          , ve = {
            path: "/safeCenter",
            component: function() {
                return t.e("safeCenter").then(t.bind(null, "8d1e"))
            },
            children: [{
                path: "/",
                name: "safeCenter",
                meta: {
                    title: "安全中心",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "06de"))
                }
            }, {
                path: "loginHistory",
                name: "loginHistory",
                meta: {
                    title: "登录历史",
                    auth: !0,
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("loginHistory")]).then(t.bind(null, "2055"))
                }
            }]
        }
          , we = ve
          , ye = [{
            path: "/cdn/:id?",
            name: "cdn",
            meta: {
                title: "CDN",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("cdn")]).then(t.bind(null, "5af5"))
            }
        }]
          , Ie = ye
          , De = [{
            path: "/physicalMachine/:id?",
            name: "physicalMachine",
            meta: {
                title: "物理机",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("physicalMachine")]).then(t.bind(null, "10343"))
            }
        }]
          , Ce = De
          , xe = [{
            path: "/rds",
            component: function() {
                return t.e("rds").then(t.bind(null, "3bf3"))
            },
            children: [{
                path: "",
                name: "rdsIndex",
                meta: {
                    title: "RDS数据库",
                    auth: !0,
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("index")]).then(t.bind(null, "bf27"))
                }
            }, {
                path: "detail/:regionId/:id",
                name: "rdsDetail",
                meta: {
                    title: "RDS数据库",
                    auth: !0,
                    platform: ["all"]
                },
                component: function() {
                    return Promise.all([t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("agentRecheckFill~detail~order~register~spring"), t.e("detail~workorderDetail"), t.e("detail")]).then(t.bind(null, "d4e0"))
                }
            }]
        }]
          , Pe = xe
          , Oe = [{
            path: "/desktop/:id?",
            name: "desktop",
            meta: {
                title: "云桌面",
                auth: !0,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("20201218~add~addBankCard~agent~agentInfo~apply~bindDisk~bindIp~cdn~cloud~cloudCampus~cloudInstance~c~a6cd0e2c"), t.e("cdn~cloud~cloudInstance~continuedList~coupon~desktop~diskIndex~diskInstance~home~index~ip~loginHisto~53e8876a"), t.e("cdn~channel~cloud~cloudInstance~continuedList~desktop~diskIndex~helpCenterSearch~ip~list~loginHistor~ee95f077"), t.e("desktop")]).then(t.bind(null, "5779"))
            }
        }]
          , Re = Oe
          , Se = [{
            path: "/app",
            name: "app",
            meta: {
                title: "天翼云",
                platform: ["all"]
            },
            component: function() {
                return t.e("app").then(t.bind(null, "9f06"))
            }
        }, {
            path: "/app/permission",
            name: "app.permission",
            meta: {
                title: "权限描述",
                platform: ["all"]
            },
            component: function() {
                return t.e("app").then(t.bind(null, "f12b"))
            }
        }]
          , Ae = {
            name: "province",
            path: "/province/:provinceId",
            props: !0,
            meta: {
                title: "省份专区",
                auth: !1,
                platform: ["all"]
            },
            component: function() {
                return Promise.all([t.e("chunk-7722201c"), t.e("202103~2021517~2021818~activity.2021~bindDisk~bindIp~buy~cdn~cloud~cloudInstance~createBackup~custom~b15783ca"), t.e("chunk-5f38eea7"), t.e("chunk-2e3a7f6e"), t.e("province")]).then(t.bind(null, "1b92"))
            }
        }
          , Be = {
            path: "/job/detail/:id",
            name: "jobDetail",
            meta: {
                title: "招贤纳士",
                platform: ["all"]
            },
            component: function() {
                return t.e("jobDetail").then(t.bind(null, "e672"))
            }
        }
          , je = Be
          , Le = ["_method", "_params"];
        function Me(e) {
            if (e.children)
                e.children = Ee(e.children);
            else {
                var n = e.meta.platform;
                if (!n.includes("all") && !n.includes("wap"))
                    return null;
                e.name && (Fe[e.name] = e.name)
            }
            return e
        }
        function Ee(e) {
            var n = [];
            return e.forEach((function(e) {
                var t = Me(e);
                t && n.push(t)
            }
            )),
            n
        }
        function Te(e) {
            var n = [];
            return e.push(te),
            e.forEach((function(e) {
                if ("[object Object]" === Object.prototype.toString.call(e)) {
                    var t = Me(e);
                    t && n.push(t)
                }
                Array.isArray(e) && n.push.apply(n, Object(c["a"])(Ee(e)))
            }
            )),
            n
        }
        var Fe = {}
          , He = [Se, s, f, m, g, v, y, R, P, A, j, M, d, T, H, W, $, G, z, Z, K, X, ee, re, ie, ue, le, pe, he, be, ke, we, Ie, Ce, Pe, Re, Ae, je]
          , _e = window.location
          , We = _e.pathname
          , qe = _e.href;
        if (/\wap\/main\/h5/.test(We)) {
            var $e = qe.replace("/wap/main/h5", "/h5");
            window.location.replace($e)
        }
        var Ue = Te(He);
        i["default"].use(o["a"]);
        var Ge = new o["a"]({
            mode: "history",
            base: "/".concat("wap", "/").concat("main"),
            routes: [{
                path: "/redirect/:path*",
                name: "redirect",
                redirect: function(e) {
                    var n, t = e.query, c = t._method, i = t._params, o = Object(r["a"])(t, Le), u = i ? JSON.parse(i) : {};
                    return n = {},
                    Object(a["a"])(n, "name" === c ? "name" : "path", e.params.path || ("name" === c ? "home" : "/")),
                    Object(a["a"])(n, "params", u),
                    Object(a["a"])(n, "query", o),
                    n
                }
            }, {
                path: "/ctyunVision",
                name: "ctyunVision",
                meta: {
                    title: "翼视捷下载中心",
                    platform: ["all"]
                },
                component: function() {
                    return t.e("ctyunVision").then(t.bind(null, "13d9"))
                }
            }, {
                path: "/spring",
                name: "spring",
                meta: {
                    title: "安全云网 暖春行动",
                    platform: ["wap", "wechat"]
                },
                component: function() {
                    return Promise.all([t.e("agentRecheckFill~apply~detail~exchangeAddress~order~orderDetail~register~spring~workorderDemand~work~735b22fa"), t.e("agentRecheckFill~detail~order~register~spring"), t.e("spring")]).then(t.bind(null, "a514"))
                }
            }].concat(Object(c["a"])(Ue), Object(c["a"])([]))
        });
        Ge.beforeEach((function(e, n, t) {
            var a = e.meta.newPath;
            if (a) {
                var r = "[object Function]" === Object.prototype.toString.call(a);
                window.location.replace(r ? a(e.params) : a)
            } else
                t()
        }
        ));
        n["a"] = Ge
    },
    f0d1: function(e, n) {
        e.exports = wx
    },
    fb18: function(e, n, t) {
        "use strict";
        t("2da2")
    }
});


function getUsername(e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (e && "string" === typeof e) {
        var t = n.text || "0"
          , a = n.length || 24;
        if (e.length < a)
            for (var r = e.length; r < a; r++)
                e += t;
        else
            e = e.substring(0, a);
        return e
    }
}


function getPwd(username, pwd) {
    var s = get_sign('3452')
    var p = get_sign.n(s)
    var n = getUsername(username)
      , t = {}
      , a = t.enc
      , r = "Utf8"
      , c = t.mode
      , i = "ECB"
      , o = t.padding
      , u = "Pkcs7"
      , d = p.a.enc[r].parse(n)
      , l = {
        mode: p.a.mode[i],
        padding: p.a.pad[u]
      }
      , s = p.a.TripleDES.encrypt(pwd, d, l);
    return s.toString()
}

// console.log(getPwd(username, password))

//新增一个导出函数（node方式）
module.exports.init = function (username, password) {
    console.log(getPwd(username, password));
}

