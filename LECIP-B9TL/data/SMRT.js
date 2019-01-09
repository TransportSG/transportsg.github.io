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
    6101: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "61",
                destination: {
                    text: "EUNOS via",
                    font: "ArialBold-8"
                },
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
    },
    6102: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "61",
                destination: {
                    text: "BUKIT BATOK via",
                    font: "ArialBold-8"
                },
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
    6701: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67",
                destination: {
                    text: "TAMPINES via",
                    font: "ArialBold-8"
                },
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
    },
    6702: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67",
                destination: {
                    text: "CHOA CHUA KANG via",
                    font: "ArialBold-8"
                },
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
    1901: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "190",
                destination: {
                    text: "KAMPONG BAHRU TER",
                    font: "ArialBold-8"
                },
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
    },
    1902: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "190",
                destination: {
                    text: "CHOA CHUA KANG via",
                    font: "ArialBold-8"
                },
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
    9791: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "979",
                destination: {
                    text: "BT PANJANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'PETIR / JELUBU RD',
                    'WOODLANDS RD',
                    {
                        text: 'CHOA CHU KANG NORTH 5',
                        font: 'Arial-7'
                    },
                    {
                        text: 'CHOA CHU KANG ST 52/DR',
                        font: 'Arial-7'
                    },
                    {
                        text: 'CHOA CHU KANG NORTH 7',
                        font: 'Arial-7'
                    },
                    'C.C.K CRES (LOOP)'
                ],
                scrollFont: "Arial-8"
            }
        },
    },
    9851: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "985",
                destination: {
                    text: "GEYLANG LOR 1 via",
                    font: "ArialBold-8"
                },
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
    },
    9852: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "985",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
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
