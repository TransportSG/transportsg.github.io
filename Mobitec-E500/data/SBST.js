EDSFormats.SBST = {
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
        text: "$destination"
    },
    logo: {
        logo: {
            align: "centre-x,centre-y",
            image: "$image"
        },

        text: "$text"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    },
}

EDSData.SBST = {
    1111: {
        front: {
            renderType: "message",
            text: "OFF SERVICE",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    1741: {
        front: {
            renderType: "standardService",
            serviceNumber: "174",
            destination: {
                text: "> KAMPONG BAHRU TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG ROAD",
                "BUKIT BATOK E. AVE 3&6",
                "JALAN JURONG KECHIL",
                "DUNEARN RD",
                "FARRER RD",
                "HOLLAND RD",
                "ORCHARD RD",
                "NORTH&SOUTH BRIDGE RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1742: {
        front: {
            renderType: "standardService",
            serviceNumber: "174",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "EU TONG SEN ST",
                "ORCHARD BOULEVARD",
                "HOLLAND RD",
                "FARRER RD",
                "BUKIT TIMAH RD",
                "JALAN JURONG KECHIL",
                "BT. BATOK EAST AVE 6&3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    }
}

EDSExtras.SBST = {

}

EDSImages.SBST = {

}
