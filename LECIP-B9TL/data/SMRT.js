EDSFormats.SMRT = {
    standardService: {
        serviceNumber: {
            align: "right,centre-y",
            text: "$serviceNumber",
            font: "Arial-17",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                top: 1,
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "centre-x,top",
            margin: {
                top: 11,
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
    testFontMix: {
        display: {
            align: "centre-x,bottom",
            text: "$text",
            spacing: "$spacing"
        }
    }
}

EDSData.SMRT = {
    1: {
        1: {
            front: {
                renderType: 'message',
                text: 'CHARTERED',
                font: 'Arial-17',
                spacing: 2
            }
        }
    },
    2: {
        1: {
            front: {
                renderType: 'message',
                text: 'ANG MO KIO DEPOT',
                font: 'Arial-15', // not this font but idk what
                spacing: 2
            }
        }
    },
    3: {
        1: {
            front: {
                renderType: 'message',
                text: 'KRANJI DEPOT',
                font: 'Arial-15',
                spacing: 2
            }
        }
    },
    4: {
        1: {
            front: {
                renderType: 'message',
                text: 'SMRT BUSES',
                font: 'Arial-17',
                spacing: 2
            }
        }
    },
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
    6: {
        1: {
            front: {
                renderType: 'message',
                text: 'WOODLANDS DEPOT',
                font: 'Arial-15',
                spacing: 2
            }
        }
    },
    7: {
        1: {
            front: {
                renderType: 'message',
                text: 'OFF SERVICE',
                font: 'Arial-17',
                spacing: 2
            }
        }
    },
    8: {
        1: {
            front: {
                renderType: 'message',
                text: 'OFF SERVICE',
                font: 'Arial-17',
                spacing: 2
            }
        }
    },
    9: {
        1: {
            front: {
                renderType: 'message',
                text: 'ON DRIVING TEST',
                font: 'Arial-15',
                spacing: 2
            }
        }
    },
    10: {
        1: {
            front: {
                renderType: 'message',
                text: 'FERRY SERVICE',
                font: 'Arial-15',
                spacing: 2
            }
        }
    },
    11: {
        1: {
            front: {
                renderType: 'message',
                text: 'MRT SHUTTLE',
                font: 'Arial-17',
                spacing: 2
            }
        }
    },
    13: {
        1: {
            front: {
                renderType: 'message',
                text: 'TRAINING BUS',
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
    1671: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: {
                    text: "BT MERAH via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'JLN BT MERAH'
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    1841: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "184",
                destination: {
                    text: "CLEMENTI via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'BT PANJANG RD'
                ],
                scrollFont: 'Arial-8'
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
    9001: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "900",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WDL AVENUE 7',
                    'WDL AVENUE 4',
                    'WDL DRIVE 14',
                    'WDL AVENUE 4',
                    'WDL AVENUE 7'
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    9002: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "900A", // fonts all messed up ????
                destination: {
                    text: "WOODLANDS INT",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 7',
                    'WOODLANDS AVE 4',
                    'WOODLANDS DR 14',
                    // '' ??
                    'INNOVA JC',
                    'WOODLANDS AVE 4',
                    'WOODLANDS AVE 7'
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    9011: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "901",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 2,1',
                    'WOODLANDS DRIVE 16',
                    'WOODLANDS AVE 6',
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    9021: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "902",
                destination: {
                    text: "REPUBLIC",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'POLYTECHNIC',
                ],
                scrollFont: 'ArialBold-8'
            }
        }
    },
    9031: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "903",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 2', // scrolls??
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    9032: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "903M",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 2', // scrolls??
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    9041: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "904",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WDL CRESENT(LOOP)',
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    9111: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "911",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 7',
                    'WOODLANDS ST 83',
                    'WOODLANDS AVE 2',
                    'WOODLANDS ST 13',
                    'WDL TRAIN CHECKPOINT',
                    'WOODLANDS ST 13'
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    9112: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "911T", // wot??
                destination: {
                    text: "ENDS AT",
                    font: "Arial-8"
                },
                scrolls: [
                    'WDL INT / MRT',
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    9121: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 5',
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    9122: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912A",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WDL AVE 2,5',
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    9123: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912B",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 5',
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    9124: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912T",
                destination: {
                    text: "ENDS AT",
                    font: "Arial-8"
                },
                scrolls: [
                    'WDL INT / MRT',
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    9125: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912M",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 5',
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    9131: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "913",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 7,6',
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    9132: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "913T",
                destination: {
                    text: "ENDS AT",
                    font: "Arial-8"
                },
                scrolls: [
                    'WDL INT / MRT',
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    9631: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "963",
                destination: {
                    text: "HARBOURFRONT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'ALEXANDRA RD',
                ],
                scrollFont: 'Arial-8'
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
    },
    9911: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "991",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    '',
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    9912: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "991",
                destination: {
                    text: "BUKIT BATOK via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'CHOA CHU KANG AVE 1,3',
                    'BT BATOK WEST AVE 6,3'
                ],
                scrollFont: 'Arial-8'
            }
        }
    }
};
