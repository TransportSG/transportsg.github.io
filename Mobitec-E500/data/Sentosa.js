EDSFormats.Sentosa = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 1
        },
        destination: {
            align: "left,bottom",
            margin: {
                left: 1
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "left,top",
            margin: {
                left: 1,
                top: 1
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },
        text: "$serviceNumber+' '+$destination.text"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    }
}

EDSData.Sentosa = {
    1: {
        front: {
            renderType: "message",
            text: "OFF SERVICE",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    18: {
        front: {
            renderType: "standardService",
            serviceNumber: "LCS1",
            destination: {
                text: "> CHANGI AIRFREIGHT CTR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                'TAMPINES AVE 3',
                'TAMPINES AVE 5',
                'LOYANG WAY',
                'ALPS AVE',
                'AIRPORT CARGO RD',
                'AIRLINE RD'
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    9999: {
        front: {
            renderType: "message",
            text: "VER.10JUN19-DD",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
}

EDSExtras.Sentosa = {}

EDSImages.Sentosa = {
}
