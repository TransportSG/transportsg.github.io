EDSFormats.SMRT = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "centre-x,bottom",
            margin: {
                right: 'width(serviceNumber)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },
}

EDSData.SMRT = {
    9122: {
        front: {
            renderType: "standardService",
            serviceNumber: "912A",
            destination: {
                text: "WOODLANDS INT via",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                'WDL AVE 2,5',
                'WOODLANDS DR 50',
                'WOODLANDS RING RD',
                'ADMIRALTY MRT',
                'WDL AVE 7 (LOOP)'
            ],
            scrollFont: 'Mobitec-7:5:3'
        }
    }
}
