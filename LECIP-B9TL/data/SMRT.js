EDSFormats.SMRT = {
    standardService: {
        serviceNumber: {
            align: "right,centre-y",
            margin: {
                right: 3
            },
            text: "$serviceNumber",
            font: "Arial-17",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                top: 1,
                right: 'width(serviceNumber) len(3)'
            },
            text: "$destination",
            font: "$destinationFont",
            spacing: 1
        },
        scroll: {
            align: "centre-x,top",
            margin: {
                top: 11,
                right: 'width(serviceNumber) len(3)'
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
            align: "centre-x",
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

EDSData.SMRT = {
    5: {
        1: {
            front: {
                renderType: 'message',
                text: 'OFF SERVICE',
                font: 'Arial-17',
                spacing: 2
            }
        }
    },
    61: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "61",
                destination: "EUNOS via",
                destinationFont: "ArialBold-8",
                scrolls: [
                    'CLEMENTI RD',
                    'HOLLAND RD',
                    'HOLLAND AVE',
                    'TELOK BLANGAH RD',
                    'CHINATOWN',
                    'VICTORIA ST',
                    'KALLANG BAHRU',
                    'MACPHERSON RD',
                    'UBI AVE 2'
                ],
                scrollFont: "Arial-8"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "61",
                destination: "BUKIT BATOK via",
                destinationFont: "ArialBold-8",
                scrolls: [
                    'UBI AVE 2',
                    'MACPHERSON RD',
                    'KALLANG BAHRU',
                    'NORTH BRIDGE RD',
                    'SOUTH BRIDGE RD',
                    'TELOK BLANGAH RD',
                    'HOLLAND RD',
                    'CLEMENTI RD'
                ],
                scrollFont: "Arial-8"
            }
        }
    },
    67: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67",
                destination: "TAMPINES via",
                destinationFont: "ArialBold-8",
                scrolls: [
                    'UPP BT TIMAH RD',
                    'DUNEARN RD',
                    'SERANGOON RD',
                    'SIMS AVE',
                    'NEW UPP CHANGI RD',
                    'BEDOK NTH AVE 3'
                ],
                scrollFont: "Arial-8"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "67",
                destination: "CHOA CHUA KANG via",
                destinationFont: "ArialBold-8",
                scrolls: [
                    'BEDOK NTH AVE 3',
                    'NEW UPP CHANGI RD',
                    'GEYLANG RD',
                    'JALAN BESAR',
                    'BUKIT TIMAH RD',
                    'UPP BT TIMAH RD'
                ],
                scrollFont: "Arial-8"
            }
        }
    },
    190: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "190",
                destination: "KAMPONG BAHRU TER",
                destinationFont: "ArialBold-8",
                scrolls: [
                    'BT PANJANG RD',
                    'STEVENS ROAD',
                    'ORCHARD ROAD',
                    'HILL STREET',
                    'CHINATOWN'
                ],
                scrollFont: "Arial-8"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "190",
                destination: "CHOA CHUA KANG via",
                destinationFont: "ArialBold-8",
                scrolls: [
                    'HILL STREET',
                    'SOMERSET RD',
                    'SCOTTS RD',
                    'STEVENS RD',
                    'BUKIT PANJANG RD'
                ],
                scrollFont: "Arial-8"
            }
        }
    },
    985: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "985",
                destination: "GEYLANG LOR 1 via",
                destinationFont: "ArialBold-8",
                scrolls: [
                    'TECK WHYE AVE',
                    'B. B WEST AVE 7, 4',
                    'B. B WEST AVE 2',
                    'B. B EAST AVE 2',
                    'JLN JURONG KECHIL',
                    'JLN TOA PAYOH',
                    'BENDEMEER ROAD',
                    'KALLANG MRT'
                ],
                scrollFont: "Arial-8"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "985",
                destination: "CHOA CHU KANG via",
                destinationFont: "ArialBold-8",
                scrolls: [
                    'SERANGOON ROAD',
                    'JLN TOA PAYOH',
                    'JLN JURONG KECHIL',
                    'B. B EAST AVE 2',
                    'B. B WEST AVE 2, 4',
                    'B. B WEST AVE 7',
                    'TECK WHYE AVE'
                ],
                scrollFont: "Arial-8"
            }
        }
    }
};
