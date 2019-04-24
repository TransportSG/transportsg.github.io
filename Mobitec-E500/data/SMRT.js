EDSFormats.SMRT = {
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination.text+' via'",
            font: "$destination.font",
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

        text: "$destination.text+' '+$serviceNumber"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 2
        },
        top: {
            align: {
                "$bottom === null": "centre-x,centre-y",
                "else": "centre-x,top"
            },
            text: "$top",
            font: "$topFont",
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: {
                "$bottom !== null": "$bottom",
                "else": "''"
            },
            font: {
                "$bottomFont !== null": "$bottomFont",
                "else": "Mobitec-6:5"
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
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

EDSData.SMRT = {
    1: {
        front: {
            renderType: "message",
            text: "CHARTERED",
            font: "Mobitec-16:8",
            spacing: 2
        }
    },
    2: {
        front: {
            renderType: "message",
            text: "ANG MO KIO DEPOT",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    3: {
        front: {
            renderType: "message",
            text: "KRANJI DEPOT",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    4: {
        front: {
            renderType: "message",
            text: "SMRT BUSES",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    5: {
        front: {
            renderType: "message",
            text: "OFF SERVICE",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    6: {
        front: {
            renderType: "message",
            text: "WOODLANDS DEPOT",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    7: {
        front: {
            renderType: "message",
            text: "OUT OF SERVICE",
            font: "Mobitec-13:7",
            spacing: 2
        }
    },
    8: {
        front: {
            renderType: "message",
            text: "OFF SERVICE",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    9: {
        front: {
            renderType: "message",
            text: "ON DRIVING TEST",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    10: {
        front: {
            renderType: "message",
            text: "FERRY SERVICE",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    11: {
        front: {
            renderType: "message",
            text: "MRT SHUTTLE",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    13: {
        front: {
            renderType: "message",
            text: "TRAINING BUS",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    14: {
        front: {
            renderType: "message",
            text: "MoBi 240419",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    16: {
        front: {
            renderType: "message",
            text: "PULAU TEKONG",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    18: {
        front: {
            renderType: "message",
            text: "LRT SHUTTLE A",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    19: {
        front: {
            renderType: "message",
            text: "LRT SHUTTLE B",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    21: {
        front: {
            renderType: "message",
            text: "WT 1",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    22: {
        front: {
            renderType: "message",
            text: "WT 2",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    23: {
        front: {
            renderType: "message",
            text: "WT 3",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    24: {
        front: {
            renderType: "message",
            text: "WT 4",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    25: {
        front: {
            renderType: "message",
            text: "WT 5",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    26: {
        front: {
            renderType: "message",
            text: "WT 6",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    27: {
        front: {
            renderType: "message",
            text: "WT 7",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    28: {
        front: {
            renderType: "message",
            text: "WT 8",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    29: {
        front: {
            renderType: "message",
            text: "WT 9",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    30: {
        front: {
            renderType: "message",
            text: "WT 10",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    31: {
        front: {
            renderType: "message",
            text: "WT 11",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    32: {
        front: {
            renderType: "message",
            text: "WT 12",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    33: {
        front: {
            renderType: "message",
            text: "WT 13",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    34: {
        front: {
            renderType: "message",
            text: "WT 14",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    35: {
        front: {
            renderType: "message",
            text: "WT 15",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    36: {
        front: {
            renderType: "message",
            text: "WT 16",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    37: {
        front: {
            renderType: "message",
            text: "WT 17",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    38: {
        front: {
            renderType: "message",
            text: "WT 18",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    39: {
        front: {
            renderType: "message",
            text: "WT 19",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    40: {
        front: {
            renderType: "message",
            text: "WT 20",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    41: {
        front: {
            renderType: "message",
            text: "WT 21",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    42: {
        front: {
            renderType: "message",
            text: "LRT A",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    43: {
        front: {
            renderType: "message",
            text: "LRT B",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    44: {
        front: {
            renderType: "message",
            text: "WT 22",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    45: {
        front: {
            renderType: "message",
            text: "WT 23",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    46: {
        front: {
            renderType: "destScroll",
            top: "RESORTS WORLD",
            topFont: "Mobitec-7:7",

            bottom: "SENTOSA",
            bottomFont: "Mobitec-7:7",
            serviceNumber: "NR6"
        }
    },
    47: {
        front: {
            renderType: "destScroll",
            top: "RESORTS WORLD",
            topFont: "Mobitec-7:7",

            bottom: "SENTOSA",
            bottomFont: "Mobitec-7:7",
            serviceNumber: "NR1"
        }
    },
    48: {
        front: {
            renderType: "destScroll",
            top: "YISHUN",
            topFont: "Mobitec-13:7",

            serviceNumber: "NR1"
        }
    },
    117: {
        front: {
            renderType: "logo",
            image: "logo",
            text: "SMRT LOGO"
        }
    },
    1901: {
        front: {
            renderType: 'standardService',
            serviceNumber: '190',
            destination: {
                text: 'KAMPONG BAHRU TER',
                font: 'Mobitec-7:4'
            },
            scrolls: [
                {
                    renderType: 'destScroll',
                    top: "KAMPONG BAHRU",
                    topFont: "Mobitec-7:7",

                    bottom: "TERMINAL",
                    bottomFont: "Mobitec-7:7",
                    serviceNumber: "190"
                },
                'BT PANJANG RD',
                'STEVENS ROAD',
                'ORCHARD ROAD',
                'HILL STREET',
                'CHINATOWN'
            ],
            scrollFont: 'Mobitec-7:5:3'
        }
    },
    1902: {
        front: {
            renderType: 'standardService',
            serviceNumber: '190',
            destination: {
                text: 'CHOA CHU KANG',
                font: 'Mobitec-7:5:3'
            },
            scrolls: [
                {
                    renderType: 'destScroll',
                    top: "CHOA CHU KANG",
                    topFont: "Mobitec-7:7",

                    bottom: "INT / MRT / LRT",
                    bottomFont: "Mobitec-7:7",
                    serviceNumber: "190"
                },
                'HILL STREET',
                'SOMERSET ROAD',
                'SCOTTS ROAD',
                'STEVENS ROAD',
                'BUKIT PANJANG RD'
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9122: {
        front: {
            renderType: "standardService",
            serviceNumber: "912A",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: 'destScroll',
                    top: "WOODLANDS",
                    topFont: "Mobitec-7:7",

                    bottom: "INT / MRT",
                    bottomFont: "Mobitec-7:7",
                    serviceNumber: "912A"
                },
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

EDSImages.SMRT = {
    logo: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}
