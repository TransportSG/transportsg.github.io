EDSFormats.SBST = {
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "LECIP-20:12",
            spacing: 2
        },
        destination: {
            align: "left,bottom",
            margin: {
                left: 1,
                bottom: {
                    "$destinationFont === 'LECIP-6'": 3,
                    "$destinationFont === 'LECIP-7:5'": 2,
                    "$destinationFont === 'LECIP-10'": 0
                },
            },
            text: "$destination",
            font: "$destinationFont",
            spacing: 1
        },
        scroll: {
            align: "left,top",
            margin: {
                left: 1,
                top: {
                    "$destinationFont === 'LECIP-6'": 2,
                    "else": 1
                }
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        }
    }
}

EDSData.SBST = {
    "1571": {
        front: {
            renderType: "standardService",
            serviceNumber: "157",
            destination: "> BOON LAY INT",
            destinationFont: "LECIP-10",
            scrolls: [
                "BRADDELL RD",
                "LORNIE RD",
                "BUKIT TIMAH RD",
                "JALAN JURONG KECHIL",
                "BUKIT BATOK EAST AVE 3",
                "JURONG EAST AVE 3",
                "JURONG WEST AVE 3"
            ],
            scrollFont: "LECIP-7:5"
        }
    },
    "1572": {
        front: {
            renderType: "standardService",
            serviceNumber: "157",
            destination: "> TOA PAYOH INT",
            destinationFont: "LECIP-10",
            scrolls: [
                "JURONG WEST AVE 1",
                "JURONG EAST AVE 1",
                "BUKIT BATOK EAST AVE 3",
                "JALAN JURONG KECHIL",
                "DUNEARN RD",
                "LORNIE RD",
                "BRADDELL RD"
            ],
            scrollFont: "LECIP-7:5"
        }
    },
    1741: {
        front: {
            renderType: "standardService",
            serviceNumber: "174",
            destination: "> KAMPONG BARHU TER",
            destinationFont: "LECIP-7:5",
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
            scrollFont: "LECIP-7:5"
        }
    },
    1742: {
        front: {
            renderType: "standardService",
            serviceNumber: "174",
            destination: "> BOON LAY INT",
            destinationFont: "LECIP-10",
            scrolls: [
                "EU TONG SEN ST",
                "ORCHARD BOULEVARD",
                "HOLLAND RD",
                "FARRER RD",
                "BUKIT TIMAH RD",
                "JALAN JURONG KECHIL",
                "BUKIT BATOK E. AVE 6&3"
            ],
            scrollFont: "LECIP-7:5"
        }
    },
    "2581": {
        front: {
            renderType: "standardService",
            serviceNumber: "258",
            destination: "JOO KOON INT-JUR W. ST 64",
            destinationFont: "LECIP-6",
            scrolls: [
                "PIONEER RD NTH",
                "JURONG W. ST 61&81&75",
                "JALAN AHMAD IBRAHIM"
            ],
            scrollFont: "LECIP-6"
        }
    },
}
