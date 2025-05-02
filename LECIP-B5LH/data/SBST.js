EDSFormats.SBST = {
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "LECIP-24",
            spacing: 1
        },
        scroll: {
            align: "left,top",
            margin: {
                top: 2,
                left: 2
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },
        destination: {
            align: "left,bottom",
            margin: {
                bottom: 1,
                left: 2
            },
            text: "$destination",
            spacing: 1
        },

        text: "$destination"
    },
    swt2: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "LECIP-24",
            spacing: 1
        },
        scroll: {
            align: "middle,top",
            margin: {
                top: 2,
                left: 2
            },
            scrolls: "$terminatingroad",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },
        destination: {
            align: "middle,bottom",
            margin: {
                bottom: 1,
                left: 2
            },
            text: "$terminatingbusstop",
            spacing: 1
        },

        text: "$destination"
    },
    swt: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LECIP-24",
            spacing: 3
        },
        terminateAt: {
            align: "centre-x,top",
            margin: {
                top: 2,
                right: "width(serviceNumber)"
            },
            text: {
                $$cond: {
                    "$terminateAt === undefined": "TERMINATING AT",
                    "else": "'TERMINATING AT '+$terminateAt"
                }
            },
            font: "LECIP-8",
            spacing: 1
        },
        landmark: {
            align: "centre-x,bottom",
            margin: {
                bottom: 3,
                right: "width(serviceNumber)"
            },
            text: "$landmark",
            font: "LECIP-8",
            spacing: 1
        },

        text: {
            $$cond: {
                "$terminateAt === undefined": "'TERMINATING AT '+$landmark",
                "else": "'TERMINATING AT '+$terminateAt+' '+$landmark"
            }
        }
    }
}

EDSFormats.SBST.pids = EDSFormats.SMRT.pids;


EDSData.SBST = {
    4: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "4",
                destination: {
                    text: "TAMPINES - CHANGI NTH WAY",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 7",
                    "FLORA DR",
                    "CHANGI NORTH WAY",
                    "FLORA RD",
                    "TAMPINES AVE 7"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "4",
                destination: "TAMPINES INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        }
    },
    5: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "5",
                destination: {
                    text: ">  BUKIT MERAH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "UPP CHANGI RD EAST",
                    "BEDOK RESERVOIR RD",
                    "THOMSON RD",
                    "SCOTTS RD",
                    "TIONG BAHRU RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "5",
                destination: "BUKIT MERAH INT",
                scrolls: [
                    "BUKIT MERAH INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "5",
                destination: {
                    text: ">  PASIR RIS INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TIONG BAHRU RD",
                    "SCOTTS RD",
                    "THOMSON RD",
                    "BEDOK RESERVOIR RD",
                    "UPP CHANGI RD EAST"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "5",
                destination: "PASIR RIS INT",
                scrolls: [
                    "PASIR RIS INT"
                ]
            }
        }
    },
    7: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "7",
                destination: {
                    text: ">  CLEMENTI INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "CHANGI RD",
                    "GUILLEMARD RD",
                    "NORTH BRIDGE RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD",
                    "ULU PANDAN RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "7",
                destination: "CLEMENTI INT",
                scrolls: [
                    "CLEMENTI INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "7",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "ULU PANDAN RD",
                    "HOLLAND RD",
                    "ORCHARD RD",
                    "VICTORIA ST",
                    "GUILLEMARD RD",
                    "SIMS AVE EAST"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "7",
                destination: "BEDOK INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        }
    },
    8: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "8",
                destination: {
                    text: ">  TOA PAYOH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 1",
                    "BEDOK RESERVOIR RD",
                    "UBI AVE 2",
                    'PAYA LEBAR RD',
                    'MACPHERSON RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "8",
                destination: "TOA PAYOH INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            },
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "8",
                destination: {
                    text: ">  TAMPINES INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "MACPHERSON RD",
                    'PAYA LEBAR RD',
                    'UBI AVE 2',
                    'BEDOK RESERVOIR RD',
                    'TAMPINES AVE 1, 2, 7'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "8",
                destination: "TAMPINES INT",
                scrolls: [
                    "TOA PAYOH INT"
                ]
            }
        },
    },
    9: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "9",
                destination: {
                    text: ">  CHANGI AIRFREIGHT CTR",
                    font: "LECIP-8"
                },
                scrolls: [
                    "UPPER CHANGI RD",
                    'SIMEI ST 3',
                    'TAMPINES AVE 2, 7',
                    'LOYANG AVE',
                    'CHANGI CARGO RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "9",
                destination: "AIRLINE RD",
                scrolls: [
                    "BEDOK INT"
                ]
            },
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "9",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "AIRPORT CARGO RD",
                    "LOYANG AVE",
                    "TAMPINES AVE 7, 2",
                    "SIMEI ST 3",
                    'NEW UPPER CHANGI RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "9",
                destination: "BEDOK INT",
                scrolls: [
                    "POLICE PASS OFFICE"
                ]
            }
        },
    },
    10: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "10",
                destination: {
                    text: ">  KENT RIDGE TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "EAST COAST RD",
                    'TANJONG KATONG RD',
                    'SHENTON WAY',
                    'PASIR PANJANG RD',
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "10",
                destination: "KENT RIDGE TER",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "10",
                destination: {
                    text: ">  TAMPINES INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "PASIR PANJANG RD",
                    'NICOLL HIGHWAY',
                    'TANJONG KATONG RD',
                    'EAST COAST RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "10",
                destination: "TAMPINES INT",
                scrolls: [
                    "KENT RIDGE TER"
                ]
            }
        }
    },
    11: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "11",
                destination: {
                    text: "LOR 1 GEYLANG TER - RHU CROSS",
                    font: "LECIP-8"
                },
                scrolls: [
                    "SIMS WAY",
                    "STADIUM CRESCENT",
                    "RHU CROSS",
                    "STADIUM WALK",
                    "SIMS WAY"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "11",
                destination: "LOR 1 GEYLANG TER",
                scrolls: [
                    "LOR 1 GEYLANG TER"
                ]
            }
        }
    },
    13: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "13",
                destination: {
                    text: ">  UPPER EAST COAST TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "ANG MO KIO AVE 6",
                    'BRADDELL RD',
                    'LAVENDER ST',
                    'SIMS AVE',
                    'UPP EAST COAST RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "13",
                destination: "UPPER EAST COAST TER",
                scrolls: [
                    "YIO CHU KANG INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "13",
                destination: {
                    text: ">  YIO CHU KANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "UPP EAST COAST RD",
                    'GEYLANG RD',
                    'LAVENDER ST',
                    'BRADDELL RD',
                    'ANG MO KIO AVE 6, 8'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "13",
                destination: "YIO CHU KANG INT",
                scrolls: [
                    "UPPER EAST COAST TER"
                ]
            }
        }
    },
    14: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "14",
                destination: {
                    text: ">  CLEMENTI INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BEDOK NORTH AVE 3",
                    "UPPER EAST COAST RD", // check order later
                    'EAST COAST RD',
                    "MOUNTBATTEN RD",
                    "COMMONWEALTH AVE WEST"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "16",
                destination: "CLEMENTI INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "14",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "COMMONWEALTH AVE WEST",
                    "ORCHARD RD",
                    "MOUNTBATTEN RD",
                    "EAST COAST RD",
                    "UPPER EAST COAST RD",
                    "BEDOK NORTH RD" // check
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "14",
                destination: "BEDOK INT",
                scrolls: [
                    "CLEMENTI INT"
                ]
            }
        }
    },
    16: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "16",
                destination: {
                    text: ">  BUKIT MERAH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "UPP EAST COAST RD",
                    "MARINE PARADE RD",
                    "JOO CHIAT RD",
                    "SOMERSET RD",
                    "TIONG BAHRU RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "16",
                destination: "BUKIT MERAH INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "16",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TIONG BAHRU RD",
                    "ORCHARD RD",
                    "JOO CHIAT RD",
                    "MARINE PARADE RD",
                    "UPP EAST COAST RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "16",
                destination: "BEDOK INT",
                scrolls: [
                    "BUKIT MERAH INT"
                ]
            }
        }
    },
    "16M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "16M",
                destination: {
                    text: ">  BUKIT MERAH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "UPP EAST COAST RD",
                    "MARINE PARADE RD",
                    "JOO CHIAT RD",
                    "SOMERSET RD",
                    "TIONG BAHRU RD",
                    'JALAN BUKIT MERAH'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "16M",
                destination: "BUKIT MERAH INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "16M",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JALAN BUKIT MERAH",
                    "TIONG BAHRU RD",
                    "ORCHARD RD",
                    "JOO CHIAT RD",
                    "MARINE PARADE RD",
                    "UPP EAST COAST RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "16M",
                destination: "BEDOK INT",
                scrolls: [
                    "BUKIT MERAH INT"
                ]
            }
        }
    },    
    18: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "18",
                destination: {
                    text: ">  BEDOK NORTH DEPOT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'TAMPINES NORTH DR 1',
                    'TAMPINES AVE 9',
                    'TAMPINES ST 33',
                    'TAMPINES AVE 2',
                    'BEDOK RESERVOIR RD',
                    'BEDOK NORTH AVE 4'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "18",
                destination: "BEDOK NORTH DEPOT",
                scrolls: [
                    "TAMPINES NORTH INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "18",
                destination: {
                    text: ">  TAMPINES NORTH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BEDOK NORTH AVE 4",
                    'BEDOK RESERVOIR RD',
                    'TAMPINES AVE 2',
                    'TAMPINES ST 33',
                    'TAMPINES AVE 9',
                    'TAMPINES NORTH DR 1'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "18",
                destination: "TAMPINES NORTH INT",
                scrolls: [
                    "BEDOK NORTH DEPOT"
                ]
            }
        }
    },
    19: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "19",
                destination: {
                    text: ">  CHANGI AIRFREIGHT CTR",
                    font: "LECIP-8"
                },
                scrolls: [
                    'TAMPINES AVE 7',
                    "LOYANG AVE",
                    'AIRLINE RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "19",
                destination: "CHANGI AIRFREIGHT CTR",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "19",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'AIRLINE RD',
                    'LOYANG AVE',
                    'TAMPINES AVE 7'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "19",
                destination: "BEDOK INT",
                scrolls: [
                    "CHANGI AIRFREIGHT CTR"
                ]
            }
        }
    },
    20: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "20",
                destination: {
                    text: "TAMPINES INT - CHANGI BIZ PK",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES AVE 2",
                    "SIMEI ST 1",
                    "CHANGI STH AVE 2",
                    'CHANGI BIZ PK CTRL 2',
                    'TAMPINES AVE 2',
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "20",
                destination: "TAMPINES INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        }
    },
    21: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "21",
                destination: {
                    text: ">  ST. MICHAEL'S TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 7",
                    'BEDOK RESERVOIR RD',
                    'GEYLANG RD',
                    'BOON KENG RD',
                    'MOULMEIN RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "21",
                destination: "ST MICHAEL'S TER",
                scrolls: [
                    "PASIR RIS INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "21",
                destination: {
                    text: ">  PASIR RIS INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BALESTIER RD",
                    "MOULMEIN RD",
                    'SIMS AVE',
                    'BOON KENG RD',
                    'BEDOK RESERVOIR RD',
                    'TAMPINES AVE 7',
                    "PASIR RIS DR 1"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "21",
                destination: "PASIR RIS INT",
                scrolls: [
                    "ST MICHAEL'S TER"
                ]
            }
        }
    },
    23: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "23",
                destination: {
                    text: "TAMPINES INT - ROCHOR",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 1",
                    "BEDOK NORTH RD",
                    "BENDEMEER RD",
                    "SERANGOON RD",
                    "BEDOK NORTH RD",
                    "TAMPINES AVE 1"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "23",
                destination: "TAMPINES INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        }
    },
    24: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "24",
                destination: {
                    text: ">  CHANGI AIRPORT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BOUNDARY RD',
                    'UPPER PAYA LEBAR RD',
                    'SIMS AVE',
                    'NEW UPPER CHANGI RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "24",
                destination: "CHANGI AIRPORT TER 4",
                scrolls: [
                    "ANG MO KIO INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "24",
                destination: {
                    text: ">  ANG MO KIO INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'NEW UPPER CHANGI RD',
                    'GEYLANG RD',
                    'UPPER PAYA LEBAR RD',
                    'BOUNDARY RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "24",
                destination: "ANG MO KIO INT",
                scrolls: [
                    "CHANGI AIRPORT TER 4"
                ]
            }
        }
    },
    25: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "25",
                destination: {
                    text: ">  UPPER EAST COAST TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "ANG MO KIO AVE 3",
                    "HOUGANG AVE 2, 3",
                    "JALAN EUNOS",
                    "SIMS AVE EAST"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "25",
                destination: "UPPER EAST COAST TER",
                scrolls: [
                    "ANG MO KIO INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "25",
                destination: {
                    text: ">  ANG MO KIO INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "CHANGI RD",
                    "JALAN EUNOS",
                    "HOUGANG AVE 3",
                    "HOUGANG AVE 2",
                    "ANG MO KIO AVE 3"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "25",
                destination: "ANG MO KIO INT",
                scrolls: [
                    "UPPER EAST COAST TER"
                ]
            }
        }
    },
    26: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "26",
                destination: {
                    text: ">  TOA PAYOH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'NEW UPPER CHANGI RD',
                    'GEYLANG RD',
                    'KALLANG BAHRU',
                    'JALAN TOA PAYOH'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "26",
                destination: "TOA PAYOH INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "26",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'JALAN TOA PAYOH',
                    'KALLANG BAHRU',
                    'SIMS AVE',
                    'NEW UPPER CHANGI RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "26",
                destination: "BEDOK INT",
                scrolls: [
                    "TOA PAYOH INT"
                ]
            }
        }
    },
    27: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "27",
                destination: {
                    text: ">  CHANGI AIRPORT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'HOUGANG AVE 10, 6',
                    'SENGKANG CTRL',
                    'COMPASSVALE RD',
                    'TAMPINES AVE 10, 9, 7, 4, 5',
                    'AIRPORT BOULEVARD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "27",
                destination: "CHANGI AIRPORT TER 2",
                scrolls: [
                    "HOUGANG CENTRAL INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "27",
                destination: {
                    text: ">  HOUGANG CTRL INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'AIRPORT BOULEVARD',
                    'TAMPINES AVE 5, 4, 7, 9, 10',
                    'COMPASSVALE RD',
                    'SENGKANG CTRL',
                    'HOUGANG AVE 6, 10'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "27",
                destination: "HOUGANG CTRL INT",
                scrolls: [
                    "CHANGI AIRPORT TER 2"
                ]
            }
        }
    },
    28: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "28",
                destination: {
                    text: ">  TOA PAYOH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'TAMPINES AVE 9, 2',
                    'NEW UPP CHANGI RD',
                    'PAYA LEBAR RD',
                    'BRADDELL RD',
                    'TOA PAYOH LOR 4, 6'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "28",
                destination: "TOA PAYOH INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "28",
                destination: {
                    text: ">  TAMPINES INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'TOA PAYOH LOR 6, 4',
                    'BRADDELL RD',
                    'PAYA LEBAR RD',
                    'NEW UPP CHANGI RD',
                    'TAMPINES AVE 2, 9'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "28",
                destination: "TAMPINES INT",
                scrolls: [
                    "TOA PAYOH INT"
                ]
            }
        }
    },
    29: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "29",
                destination: {
                    text: "TAMPINES INT - CHANGI VILLAGE",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 9",
                    "OLD TAMPINES RD",
                    "UPPER CHANGI RD NORTH",
                    "NETHERAVON RD",
                    "CHANGI VILLAGE RD",
                    "NETHERAVON RD",
                    "UPPER CHANGI RD NORTH",
                    "OLD TAMPINES RD",
                    "TAMPINES AVE 9"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "29",
                destination: "TAMPINES INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        }
    },
    30: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "30",
                destination: {
                    text: ">  BOON LAY INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "CHANGI RD",
                    'TANJONG KATONG RD',
                    'OLD AIRPORT RD',
                    'KEPPEL RD',
                    'TELOK BLANGAH RD',
                    'PASIR PANJANG RD',
                    'WEST COAST RD',
                    'CORPORATION RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "32",
                destination: "BOON LAY INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "30",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "COPORATION DR",
                    "WEST COAST RD",
                    "PASIR PANJANG RD",
                    "TELOK BLANGAH RD",
                    "KEPPEL RD",
                    "OLD AIRPORT RD",
                    "SIMS AVE EAST"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "30",
                destination: "BEDOK INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        }
    },
    31: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "31",
                destination: {
                    text: ">  TOA PAYOH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'SIMEI AVE',
                    'BEDOK SOUTH AVE 1',
                    'MARINE PARADE RD',
                    'DUNMAN RD',
                    'SERANGOON RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "31",
                destination: "TOA PAYOH INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "31",
                destination: {
                    text: ">  TAMPINES INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BENDEMEER RD',
                    'DUNMAN RD',
                    'MARINE PARADE RD',
                    'BEDOK SOUTH AVE 1',
                    'SIMEI AVE'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "31",
                destination: "TAMPINES INT",
                scrolls: [
                    "TOA PAYOH INT"
                ]
            }
        }
    },
    32: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "32",
                destination: {
                    text: ">  BUONA VISTA TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'FRANKEL AVE',
                    'EAST COAST RD',
                    'NORTH BRIDGE RD',
                    'RIVER VALLEY RD',
                    'MARGARET DRIVE',
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "32",
                destination: "HOLLAND DR",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "32",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'MARGARET DR',
                    'RIVER VALLEY RD',
                    'VICTORIA ST',
                    'EASST COAST RD',
                    'FRANKEL AVE'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "32",
                destination: "BEDOK INT",
                scrolls: [
                    "BLK 34"
                ]
            }
        }
    },
    33: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "33",
                destination: {
                    text: ">  KENT RIDGE TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'JOO CHIAT PLACE',
                    'OLD AIRPORT RD',
                    'VICTORIA ST',
                    'NEW BRIDGE RD',
                    'TIONG BAHRU RD',
                    'ALEXANDRA RD',
                    'AYE'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "33",
                destination: "KENT RIDGE TER",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "33",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'AYE',
                    "ALEXANDRA RD",
                    'TIONG BAHRU RD',
                    "EU TONG SEN ST",
                    'VICTORIA ST',
                    'OLD AIRPORT RD',
                    "JOO CHIAT PLACE"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "33",
                destination: "BEDOK INT",
                scrolls: [
                    "KENT RIDGE TER"
                ]
            }
        }
    },
    35: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "35",
                destination: {
                    text: ">  ALPS AVE",
                    font: "LECIP-8"
                },
                scrolls: [
                    "NEW UPPER CHANGI RD",
                    "XILIN AVE",
                    "TANAH MERAH FERRY RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "35",
                destination: "ALPS AVE",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "35",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TANAH MERAH FERRY RD",
                    "XILIN AVE",
                    "NEW UPPER CHANGI RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "35",
                destination: "BEDOK INT",
                scrolls: [
                    "TANAH MERAH FERRY TER"
                ]
            }
        }
    },
    "35M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "35M",
                destination: {
                    text: ">  T. MERAH FERRY TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "NEW UPPER CHANGI RD",
                    "XILIN AVE",
                    "TANAH MERAH FERRY RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "35M",
                destination: "TANAH MERAH FERRY RD",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "35M",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TANAH MERAH FERRY RD",
                    "XILIN AVE",
                    "NEW UPPER CHANGI RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "35M",
                destination: "BEDOK INT",
                scrolls: [
                    "TANAH MERAH FERRY TER"
                ]
            }
        }
    },
    37: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "37",
                destination: {
                    text: "TAMP INT-CHANGI NTH CRES",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 7",
                    "UPPER CHANGI RD NORTH",
                    "CHANGI NORTH ST 1"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "37",
                destination: "TAMPINES INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        }
    },
    38: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "38",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'TAMPINES AVE 7, 2',
                    'SIMEI ST 1, 3, 4',
                    'NEW UPP CHANGI RD',
                    'BEDOK SOUTH AVE 3',
                    'BEDOK SOUTH RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "38",
                destination: "BEDOK INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "38",
                destination: {
                    text: ">  TAMPINES INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BEDOK SOUTH RD',
                    'BEDOK SOUTH AVE 3',
                    'NEW UPP CHANGI RD',
                    'SIMEI ST 4, 3, 1',
                    'TAMPINES AVE 2, 7'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "38",
                destination: "BEDOK INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        }
    },
    39: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "39",
                destination: {
                    text: ">  YISHUN INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 2",
                    'PASIR RIS DR 1',
                    "JALAN KAYU",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "39",
                destination: "YISHUN INT",
                scrolls: [
                    "TAMPINES CONCOURSE INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "39",
                destination: {
                    text: ">  TAMPINES CONCOURSE INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "YISHUN AVE 2",
                    "JALAN KAYU",
                    "PASIR RIS DR 1",
                    "TAMPINES AVE 2"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "39",
                destination: "TAMPINES CONCOURSE INT",
                scrolls: [
                    "YISHUN INT"
                ]
            }
        }
    },
    40: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "40",
                destination: {
                    text: "BEDOK INT - MERPATI RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    'SIGLAP RD',
                    'TANJONG KATONG RD',
                    'MACPHERSON EST',
                    'SIMS AVE'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "40",
                destination: "BEDOK INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        }
    },
    42: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "42",
                destination: {
                    text: "JLN KEMBANGAN - FIDELIO ST",
                    font: "LECIP-8"
                },
                scrolls: [
                    'LENGKOK TIGA',
                    'LENGKOK EMPAT',
                    'FIDELIO ST',
                    'SIGLAP DR',
                    'FRANKEL AVE'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "42",
                destination: "JLN KEMBANGAN",
                scrolls: [
                    "KEMBANGAN STN"
                ]
            }
        }
    },
    45: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "45",
                destination: {
                    text: ">  ANG MO KIO DEPOT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ANG MO KIO AVE 10',
                    'SERANGOON AVE 2',
                    'LOR AH SOO',
                    'EUNOS LINK',
                    'BEDOK NORTH RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "45",
                destination: "ANG MO KIO DEPOT",
                scrolls: [
                    "UPPER EAST COAST TER"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "45",
                destination: {
                    text: ">  UPPER EAST COAST TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BEDOK NORTH RD',
                    'EUNOS LINK',
                    'LOR AH SOO',
                    'SERANGOON AVE 2',
                    'ANG MO KIO AVE 10'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "45",
                destination: "UPPER EAST COAST TER",
                scrolls: [
                    "ANG MO KIO DEPOT"
                ]
            }
        }
    },
    46: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "46",
                destination: {
                    text: ">  UPPER EAST COAST TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "PASIR RIS DR 8",
                    "TAMPINES AVE 6",
                    "TAMPINES AVE 3",
                    "BEDOK RESERVOIR RD",
                    "BEDOK NORTH RD",
                    "BEDOK SOUTH AVE 3"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "46",
                destination: "UPPER EAST COAST TER",
                scrolls: [
                    "PASIR RIS INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "46",
                destination: {
                    text: ">  PASIR RIS INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BEDOK SOUTH AVE 3",
                    "BEDOK NORTH RD",
                    "BEDOK RESERVOIR RD",
                    "TAMPINES AVE 3",
                    "TAMPINES AVE 6",
                    "PASIR RIS DR 8"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "46",
                destination: "PASIR RIS INT",
                scrolls: [
                    "UPPER EAST COAST TER"
                ]
            }
        }
    },
    47: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "47",
                destination: {
                    text: "CHANGI BIZ PARK TER-AMBER RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BEDOK SOUTH RD",
                    "MARINE PARADE RD",
                    "AMBER RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "47",
                destination: "CHANGI BUSINESS PK TER",
                scrolls: [
                    "CHANGI BUSINESS PK TER"
                ]
            }
        }
    },
    48: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "48",
                destination: {
                    text: ">  BUONA VISTA TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BEDOK SOUTH AVE 3',
                    'UPPER EAST COAST RD',
                    'MARINE PARADE RD',
                    'BUKIT TIAMH RD',
                    'FARRER RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "48",
                destination: "HOLLAND DR",
                scrolls: [
                    "BEDOK NORTH DEPOT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "48",
                destination: {
                    text: ">  BEDOK NORTH DEPOT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'FARRER RD',
                    'DUNEARN RD',
                    'MARINE PARADE RD',
                    'UPP EAST COAST RD',
                    'BEDOK SOTUH AVE 3'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "48",
                destination: "BEDOK NORTH AVE 4",
                scrolls: [
                    "BLK 10A"
                ]
            }
        }
    },
    50: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "50",
                destination: {
                    text: ">  PUNGGOL INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "ANG MO KIO AVE 8",
                    "ANG MO KIO AVE 5",
                    "YIO CHU KANG RD",
                    "SENGKANG WEST AVE",
                    "SENGKANG EAST WAY",
                    "PUNGGOL DR"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "50",
                destination: "PUNGGOL INT",
                scrolls: [
                    "BISHAN INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "50",
                destination: {
                    text: ">  BISHAN INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "PUNGGOL DR",
                    "SENGKANG EAST WAY",
                    "SENGKANG WEST AVE",
                    "YIO CHU KANG RD",
                    "ANG MO KIO AVE 5",
                    "ANG MO KIO AVE 8"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "50",
                destination: "BISHAN INT",
                scrolls: [
                    "PUNGGOL INT"
                ]
            }
        }
    },
    51: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "51",
                destination: {
                    text: ">  JURONG EAST INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'HOUGANG AVE 3',
                    'EUNOS LINK',
                    'GEYLANG RD',
                    'NORTH BRIDGE RD',
                    'ALEXANDRA RD',
                    'PASIR PANJANG RD',
                    'WEST COAST RD',
                    'JURONG TOWN HALL RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "51",
                destination: "JURONG EAST INT",
                scrolls: [
                    "HOUGANG CENTRAL INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "51",
                destination: {
                    text: ">  HOUGANG CTRL INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'WEST COAST RD',
                    'PASIR PANJANG RD',
                    'ALEXANDRA RD',
                    'VICTORIA ST',
                    'SIMS AVE',
                    'EUNOS LINK',
                    'HOUGANG AVE 3'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "51",
                destination: "HOUGANG CTRL INT",
                scrolls: [
                    "JURONG EAST INT"
                ]
            }
        }
    },
    52: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "52",
                destination: {
                    text: ">  JURONG EAST INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BISHAN ST 22',
                    'SIN MING AVE',
                    'UPPER THOMSON RD',
                    'LORNIE RD',
                    'CLEMENTI RD',
                    "C'WEALTH AVE WEST",
                    'TOH GUAN RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "52",
                destination: "JURONG EAST INT",
                scrolls: [
                    "BISHAN INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "52",
                destination: {
                    text: ">  BISHAN INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'TOH GUAN RD',
                    "C'WEALTH AVE WEST",
                    'CLEMENTI RD',
                    'LORNIE RD',
                    'UPPER THOMSON RD',
                    'SIN MING AVE',
                    'BISHAN ST 22'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "52",
                destination: "BISHAN INT",
                scrolls: [
                    "JURONG EAST INT"
                ]
            }
        }
    },
    53: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "53",
                destination: {
                    text: ">  CHANGI AIRPORT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BISHAN RD",
                    "SERANGOON CENTRAL",
                    "LOR AH SOO",
                    "HOUGANG AVE 1",
                    "PASIR RIS DR 1"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "52",
                destination: "CHANGI AIRPORT TER 2",
                scrolls: [
                    "BISHAN INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "53",
                destination: {
                    text: ">  BISHAN INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "PASIR RIS DR 1",
                    "HOUGANG AVE 1",
                    "LOR AH SOO",
                    "SERANGOON CENTRAL",
                    "BISHAN RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "53",
                destination: "BISHAN INT",
                scrolls: [
                    "CHANGI AIRPORT TER 2"
                ]
            }
        }
    },
    54: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "54",
                destination: {
                    text: ">  KAMPONG BAHRU TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'MARYMOUNT RD',
                    'THOMSON RD',
                    'NEWTON RD',
                    'SCOTTS RD',
                    'RIVER VALLEY RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "54",
                destination: "KAMPONG BAHRU TER",
                scrolls: [
                    "BISHAN INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "54",
                destination: {
                    text: ">  BISHAN INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'RIVER VALLEY RD',
                    'SCOTTS RD',
                    'NEWTON RD',
                    'THOMSON RD',
                    'MARYMOUNT RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "54",
                destination: "BISHAN INT",
                scrolls: [
                    "KAMPONG BAHRU TER"
                ]
            }
        }
    },
    55: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "55",
                destination: {
                    text: ">  UPP EAST COAST TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ANG MO KIO AVE 10',
                    'HOUGANG AVE 2',
                    'HOUGANG AVE 3',
                    'JALAN EUNOS',
                    'STILL ROAD SOUTH',
                    'MARINE PARADE RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "55",
                destination: "UPPER EAST COAST TER",
                scrolls: [
                    "BISHAN INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "55",
                destination: {
                    text: ">  BISHAN INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'MARINE PARADE RD',
                    'STILL ROAD SOUTH',
                    'JALAN EUNOS',
                    'HOUGANG AVE 3',
                    'HOUGANG AVE 2',
                    'ANG MO KIO AVE 10'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "55",
                destination: "BISHAN INT",
                scrolls: [
                    "UPPER EAST COAST TER"
                ]
            }
        }
    },
    56: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "56",
                destination: {
                    text: ">  MARINA CTR TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BISHAN ST 13",
                    "LOR 6 TOA PAYOH",
                    "THOMSON RD",
                    "BUKIT TIMAH RD",
                    "MIDDLE RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "56",
                destination: "RAFFLES BOULEVARD",
                scrolls: [
                    "BISHAN INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "56",
                destination: {
                    text: ">  BISHAN INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'MIDDLE RD',
                    'BUKIT TIMAH RD',
                    'THOMSON RD',
                    'LOR 6 TOA PAYOH',
                    'BISHAN ST 13'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "56",
                destination: "BISHAN INT",
                scrolls: [
                    "MARINA CTR TER"
                ]
            }
        }
    },
    57: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "57",
                destination: {
                    text: ">  BUKIT MERAH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'LOR 6 TOA PAYOH',
                    'THOMSON RD',
                    'SHENTON WAY',
                    'TELOK BLANGAH RD',
                    'DEPOT RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "57",
                destination: "BUKIT MERAH INT",
                scrolls: [
                    "BISHAN INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "57",
                destination: {
                    text: ">  BISHAN INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'DEPOT RD',
                    'TELOK BLANGAH RD',
                    'CECIL ST',
                    'THOMSON RD',
                    'LOR 6 TOA PAYOH'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "57",
                destination: "BISHAN INT",
                scrolls: [
                    "BUKIT MERAH INT"
                ]
            }
        }
    },
    58: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "58",
                destination: {
                    text: ">  PASIR RIS INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'SERANGOON AVE 3',
                    'SERANGOON AVE 2',
                    'UPP PAYA LEBAR RD',
                    'UBI AVE 3',
                    'KAKI BUKIT AVE 1',
                    'TAMPINES AVE 10',
                    'PASIR RIS DR 12, 3',
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "58",
                destination: "PASIR RIS INT",
                scrolls: [
                    "BISHAN INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "58",
                destination: {
                    text: ">  BISHAN INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'PASIR RIS DR 3, 12',
                    'TAMPINES AVE 10',
                    'KAKI BUKIT AVE 1',
                    'UBI AVE 3',
                    'UPP PAYA LEBAR RD',
                    'SERANGOON AVE 2',
                    'SERANGOON AVE 3'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "58",
                destination: "BISHAN INT",
                scrolls: [
                    "BUKIT MERAH INT"
                ]
            }
        }
    },
    59: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "59",
                destination: {
                    text: ">  CHANGI VILLAGE TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "LOR 1 TOA PAYOH",
                    "KAKI BUKIT AVE 1",
                    "BEDOK RESERVOIR RD",
                    "TAMPINES AVE 2",
                    "LOYANG AVE"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "59",
                destination: "CHANGI VILLAGE TER",
                scrolls: [
                    "BISHAN INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "59",
                destination: {
                    text: ">  BISHAN INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "LOYANG AVE",
                    "TAMPINES AVE 2",
                    "BEDOK RESERVOIR RD",
                    "KAKI BUKIT AVE 1",
                    "LOR 1 TOA PAYOH"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "59",
                destination: "BISHAN INT",
                scrolls: [
                    "CHANGI VILLAGE TER"
                ]
            }
        }
    },
    "59N": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "59",
                destination: {
                    text: ">  CHANGI VILLAGE TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "LOR 1 TOA PAYOH",
                    "KAKI BUKIT AVE ",
                    "~",
                    "~",
                    "~"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "59",
                destination: "CHANGI VILLAGE TER",
                scrolls: [
                    "BISHAN INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "59",
                destination: {
                    text: ">  CHANGI VILLAGE TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "LOYANG AVE",
                    "TAMPINES AVE 2",
                    "BEDOK RESERVOIR RD",
                    "KAKI BUKIT AVE 1",
                    "LOR 1 TOA PAYOH"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "59",
                destination: "BISHAN INT",
                scrolls: [
                    "CHANGI VILLAGE TER"
                ]
            }
        }
    },
    60: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "60",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'JALAN EUNOS',
                    'BEDOK RESERVOIR RD',
                    'BEDOK NTH RD',
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "60",
                destination: "BEDOK INT",
                scrolls: [
                    "EUNOS INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "60",
                destination: {
                    text: ">  EUNOS INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BEDOK NORTH RD',
                    'BEDOK RESERVOIR RD',
                    'JALAN EUNOS'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "60",
                destination: "EUNOS INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        }
    },
    63: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "63",
                destination: {
                    text: ">  JALAN RUMAH TINGGI",
                    font: "LECIP-8"
                },
                scrolls: [
                    'UBI AVE 1',
                    'GEYLANG RD',
                    'NORTH BRIDGE RD',
                    'UPPER CROSS ST',
                    'TIONG BAHRU RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "63",
                destination: "JLN RUMAH TINGGI",
                scrolls: [
                    "EUNOS INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "63",
                destination: {
                    text: ">  EUNOS INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'TIONG BAHRU RD',
                    'EU TONG SEN ST',
                    'VICTORIA ST',
                    'SIMS AVE',
                    'UBI AVE 1'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "63",
                destination: "EUNOS INT",
                scrolls: [
                    "EUNOS INT"
                ]
            }
        }
    },
    "63M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "63M",
                destination: {
                    text: "EUNOS INT - CIRCUIT RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    'UBI AVE 1',
                    'UBI AVE 2',
                    'JALAN EUNOS',
                    'CIRCUIT RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "63M",
                destination: "EUNOS INT",
                scrolls: [
                    "EUNOS INT"
                ]
            }
        }
    },
    64: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "64",
                destination: {
                    text: ">  MEI LING ST",
                    font: "LECIP-8"
                },
                scrolls: [
                    "ALJUNIED RD",
                    "BENDEMEER RD",
                    "JALAN BESAR",
                    "CLEMENCEAU AVE",
                    "TIONG BAHRU RD",
                    "STIRLING RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "64",
                destination: "MEI LING ST",
                scrolls: [
                    "SIMS PL TER",
                    "BLK 49 MKT/FC",
                    "OPP BLK 53",
                    "SIMS URBAN OASIS",
                    "OPP BLK 125",
                    "OPP CANOSSA CATHOLIC PR",
                    "OPP ALJUNIED PK",
                    "CENCON BLDG",
                    "GULAB BLDG",
                    "BEF SIEMENS CTR",
                    "MOM SVCS CTR",
                    "BLK 54",
                    "BLK 44",
                    "OPP BOON KENG STN",
                    "BEF LAVENDER ST",
                    "HOA NAM BLDG",
                    "AFT ALLENBY RD",
                    "OPP VEERASAMY RD",
                    "JALAN BESAR STN EXIT A",
                    "IBIS S'PORE ON BENCOOLEN",
                    "BEF BENCOOLEN STN EXIT A",
                    "YMCA",
                    "AFT HAW PAR GLASS TWR",
                    "OPP UE SQ",
                    "BLK 2",
                    "HOTEL MIRAMAR",
                    "HOLIDAY INN ATRIUM",
                    "GANGES CTR",
                    "BLK 51 CP",
                    "BLK 48",
                    "OPP TIONG BAHRU PK",
                    "BEF AR-RABITAH MOSQUE",
                    "BLK 78",
                    "OPP REDHILL STN",
                    "SIS BLDG",
                    "BEF DAWSON RD",
                    "OPP QUEENS",
                    "TIONG GHEE TP",
                    "BLK 166"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "64",
                destination: {
                    text: ">  SIMS PLACE TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "ALEXANDRA RD",
                    "TIONG BAHRU RD",
                    "CLEMENCEAU AVE",
                    "SELEGIE RD",
                    "SERANGOON RD",
                    "ALJUNIED RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "64",
                destination: "SIMS PLACE TERMINAL",
                scrolls: [
                    "BLK 158",
                    "BLK 157",
                    "BLK 153",
                    "BLK 163",
                    "BLK 166",
                    "ANCHORPOINT",
                    "OPP LEA HIN HARDWARE FTY",
                    "AFT DAWSON RD",
                    "REDHILL STN",
                    "DELTA SWIMMING COMPLEX",
                    "BK 104A CP",
                    "TIONG BAHRU PK",
                    "OPP BK 48",
                    "BLK 79",
                    "OPP HARVEST MANSIONS",
                    "OPP HOLIDAY INN ATRIUM",
                    "OPP HOTEL MIRAMAR",
                    "RIVER PL CONDO",
                    "UE SQ",
                    "AFT RIVER VALLEY RD",
                    "OPP HAW PAR GLASS TWR",
                    "AFT DHOBY GHAUT STN",
                    "SCH OF THE ARTS",
                    "PEACE CTR",
                    "SELEGIE CTR",
                    "TEKKA CTR",
                    "BROADWAY HOTEL",
                    "AFT FARRER PK STN EXIT G",
                    "SRI VADAPATHIRA KALIAMMAN TP",
                    "KWONG WAI SHIU HOPS",
                    "BOON KENG STN/BLK 102",
                    "OPP BENDEMEER PRI SCH",
                    "ST. MICHAEL'S PL",
                    "AFT TAI THONG CRES",
                    "BEF JALAN WANGI",
                    "OPP CENCON BLDG",
                    "ALJUNIED PK",
                    "CANOSSA CATHOLIC PR",
                    "BLK 125",
                    "BEF BLK 53",
                    "BLK 45",
                    "SIMS PL TER"
                ]
            }
        }
    },
    65: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "65",
                destination: {
                    text: ">  HARBOURFRONT INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BEDOK RESERVOIR RD",
                    "UBI AVE 2",
                    "MACPHERSON RD",
                    "BENDEMEER RD",
                    "JALAN BESAR",
                    "ORCHARD BOULEVARD",
                    "LOWER DELTA RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "65",
                destination: "HARBOURFRONT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "65",
                destination: {
                    text: ">  TAMPINES INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "LOWER DELTA RD",
                    "ORCHARD RD",
                    "SELEGIE RD",
                    "SERANGOON RD",
                    "MACPHERSON RD",
                    "UBI AVE 2",
                    "BEDOK RESERVOIR RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "65",
                destination: "TAMPINES INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        }
    },
    69: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "69",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'TAMPINES AVE 5',
                    'TAMPINES AVE 8',
                    'TAMPINES AVE 1',
                    'BEDOK RESERVOIR RD',
                    'BEDOK NORTH AVE 3',
                    'BEDOK NORTH ST 1'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "69",
                destination: "BEDOK INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "69",
                destination: {
                    text: ">  TAMPINES INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BEDOK NORTH AVE 3',
                    'BEDOK RESERVOIR RD',
                    'TAMPINES AVE 1',
                    'TAMPINES AVE 8',
                    'TAMPINES AVE 5'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "69",
                destination: "TAMPINES INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        }
    },
    70: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "70",
                destination: {
                    text: ">  SHENTON WAY TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "YIO CHU KANG RD",
                    "SERANGOON CENTRAL",
                    "UPPER PAYA LEBAR RD",
                    "PAYA LEBAR RD",
                    "GUILLEMARD RD",
                    "NICOLL HIGHWAY"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "70",
                destination: "SHENTON WAY TER",
                scrolls: [
                    "YIO CHU KANG INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "70",
                destination: {
                    text: ">  YIO CHU KANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "NICOLL HIGHWAY",
                    'GUILLEMARD RD',
                    "PAYA LEBAR RD",
                    "UPPER PAYA LEBAR RD",
                    "SERANGOON CENTRAL",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "70",
                destination: "YIO CHU KANG INT",
                scrolls: [
                    "SHENTON WAY TER"
                ]
            }
        }
    },
    71: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "71",
                destination: {
                    text: "YCK INT - BISHAN ST 11",
                    font: "LECIP-8"
                },
                scrolls: [
                    "ANG MO KIO AVE 4",
                    "ANG MO KIO AVE 1",
                    "BISHAN RD",
                    "BRADDELL RD",
                    "BISHAN RD",
                    "ANG MO KIO AVE 1",
                    "ANG MO KIO AVE 4"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "71",
                destination: "YIO CHU KANG INT",
                scrolls: [
                    "YIO CHU KANG INT"
                ]
            }
        }
    },
    72: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "72",
                destination: {
                    text: ">  TAMPINES INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "ANG MO KIO AVE 5",
                    "HOUGANG AVE 9",
                    "HOUGANG CENTRAL",
                    "TAMPINES RD",
                    "TAMPINES AVE 10",
                    "TAMPINES AVE 9"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "72",
                destination: "TAMPINES INT",
                scrolls: [
                    "YIO CHU KANG INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "72",
                destination: {
                    text: ">  YIO CHU KANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 9",
                    "TAMPINES AVE 10",
                    "TAMPINES RD",
                    "HOUGANG CENTRAL",
                    "HOUGANG AVE 9",
                    "ANG MO KIO AVE 5"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "72",
                destination: "YIO CHU KANG INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        }
    },
    73: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "73",
                destination: {
                    text: ">  TOA PAYOH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'SERANGOON NORTH AVE 4',
                    'SERANGOON GARDEN WAY',
                    'LOR CHUAN',
                    'BRADDELL RD',
                    'LOR 4 TOA PAYOH'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "73",
                destination: "TOA PAYOH INT",
                scrolls: [
                    "ANG MO KIO INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "73",
                destination: {
                    text: ">  ANG MO KIO INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'LOR 4 TOA PAYOH',
                    'BRADDELL RD',
                    'LOR CHUAN',
                    'SERANGOON GARDEN WAY',
                    'SERANGOON NORTH AVE 4'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "73",
                destination: "ANG MO KIO INT",
                scrolls: [
                    "TOA PAYOH INT"
                ]
            }
        }
    },
    74: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "74",
                destination: {
                    text: ">  BUONA VISTA TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'HOUGANG AVE 8',
                    'ANG MO KIO AVE 3',
                    'MARYMOUNT RD',
                    'LORNIE RD',
                    'DUNEARN RD',
                    'CLEMENTI RD',
                    'DOVER AVE'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "74",
                destination: "HOLLAND DR",
                scrolls: [
                    "HOUGANG CENTRAL INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "74",
                destination: {
                    text: ">  HOUGANG CTRL INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'DOVER AVE',
                    'CLEMENTI RD',
                    'BUKIT TIMAH RD',
                    'LORNIE RD',
                    'MARYMOUNT RD',
                    'ANG MO KIO AVE 3',
                    'HOUGANG AVE 8'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "74",
                destination: "HOUGANG CTRL INT",
                scrolls: [
                    "BLK 10A"
                ]
            }
        }
    },
    76: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "76",
                destination: {
                    text: ">  EUNOS INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 3',
                    'YIO CHU KANG RD',
                    'UPP PAYA LEBAR RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "76",
                destination: "EUNOS INT",
                scrolls: [
                    "YIO CHU KANG INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "76",
                destination: {
                    text: ">  YIO CHU KANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'UPP PAYA LEBAR RD',
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 3',
                    'ANG MO KIO AVE 4'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "76",
                destination: "YIO CHU KANG INT",
                scrolls: [
                    "EUNOS INT"
                ]
            }
        }
    },
    "76S": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "76",
                destination: {
                    text: ">  MARINE TERRACE",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 3',
                    'YIO CHU KANG RD',
                    'UPP PAYA LEBAR RD',
                    'TANJONG KATONG RD',
                    'MARINE PARADE RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "76",
                destination: "MARINE TERRACE",
                scrolls: [
                    "YIO CHU KANG INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "76",
                destination: {
                    text: ">  YIO CHU KANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'MARINE PARADE RD',
                    'TANJONG KATONG RD',
                    'UPP PAYA LEBAR RD',
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 3',
                    'ANG MO KIO AVE 4'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "76",
                destination: "YIO CHU KANG INT",
                scrolls: [
                    "EUNOS INT"
                ]
            }
        }
    },
    80: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "80",
                destination: {
                    text: ">  HARBOURFRONT INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'UPP SERANGOON RD',
                    'UPP PAYA LEBAR RD',
                    'GEYLANG RD',
                    'NORTH BRIDGE RD',
                    'KEPPEL RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "80",
                destination: "HARBOURFRONT",
                scrolls: [
                    "SENGKANG INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "80",
                destination: {
                    text: ">  SENGKANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'KEPPEL RD',
                    'VICTORIA ST',
                    'SIMS AVE',
                    'UPP PAYA LEBAR RD',
                    'UPP SERANGOON RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "80",
                destination: "SENGKANG INT",
                scrolls: [
                    "HARBOURFRONT INT"
                ]
            }
        }
    },
    81: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "81",
                destination: {
                    text: "TAMPINES INT-S'GOON CTRL",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 7",
                    "PASIR RIS DR 1",
                    "TAMPINES RD",
                    "UPP SERANGOON RD",
                    "TAMPINES RD",
                    "PASIR RIS DR 1",
                    "TAMPINES AVE 7",
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "81",
                destination: "TAMPINES INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        }
    },
    86: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "86",
                destination: {
                    text: ">  ANG MO KIO INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'COMPASSVALE RD',
                    'RIVERVALE DR',
                    'JALAN KAYU',
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 6'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "86",
                destination: "ANG MO KIO INT",
                scrolls: [
                    "SENGKANG INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "86",
                destination: {
                    text: ">  SENGKANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ANG MO KIO AVE 6',
                    'YIO CHU KANG RD',
                    'JALAN KAYU',
                    'RIVERVALE DR',
                    'COMPASSVALE RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "86",
                destination: "SENGKANG INT",
                scrolls: [
                    "ANG MO KIO INT"
                ]
            }
        }
    },
    87: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "87",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'COMPASSVALE RD',
                    'HOUGANG AVE 10, 5, 7, 3',
                    'EUNOS LINK',
                    'KAKI BUKIT AVE 1',
                    'BEDOK NTH RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "87",
                destination: "BEDOK INT",
                scrolls: [
                    "SENGKANG INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "87",
                destination: {
                    text: ">  SENGKANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BEDOK NTH RD',
                    'KAKI BUKIT AVE 1',
                    'EUNOS LINK',
                    'HOUGANG AVE 3, 5, 7, 10',
                    'COMPASSVALE RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "87",
                destination: "SENGKANG INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        }
    },
    88: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "88",
                destination: {
                    text: ">  TOA PAYOH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'PASIR RIS DR 3',
                    'PUNGGOL RD',
                    'HOUGANG AVE 8',
                    'ANG MO KIO AVE 5',
                    'BISHAN ST 22'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "88",
                destination: "TOA PAYOH INT",
                scrolls: [
                    "PASIR RIS INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "88",
                destination: {
                    text: ">  PASIR RIS INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BISHAN ST 22',
                    'ANG MO KIO AVE 5',
                    'HOUGANG AVE 8',
                    'PUNGGOL RD',
                    'PASIR RIS DR 3'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "88",
                destination: "PASIR RIS INT",
                scrolls: [
                    "TOA PAYOH INT"
                ]
            }
        }
    },
    89: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "89",
                destination: {
                    text: ">  CHANGI AIRFREIGHT CTR",
                    font: "LECIP-8"
                },
                scrolls: [
                    "HOUGANG AVE 10",
                    "COMPASSVALE RD",
                    "PASIR RIS DR 1",
                    "PASIR RIS DR 3",
                    "LOYANG AVE",
                    "AIRLINE RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "89",
                destination: "AIRLINE RD",
                scrolls: [
                    "HOUGANG CENTRAL INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "89",
                destination: {
                    text: ">  HOUGANG CENTRAL INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'AIRLINE RD',
                    'LOYANG AVE',
                    'PASIR RIS DR 3',
                    'PASIR RIS DR 1',
                    'COMPASSVALE RD',
                    'HOUGANG AVE 10'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "89",
                destination: "HOUGANG CENTRAL INT",
                scrolls: [
                    "POLICE PASS OFFICE"
                ]
            }
        }
    },
    90: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "90",
                destination: {
                    text: "TOA PAYOH INT - AIRPORT RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    "LOR 6 TOA PAYOH",
                    "JALAN TOA PAYOH",
                    "MACPHERSON RD",
                    "AIRPORT RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "90",
                destination: "TOA PAYOH INT",
                scrolls: [
                    "TOA PAYOH INT"
                ]
            }
        }
    },
    91: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "91",
                destination: {
                    text: "BUONA VISTA TER-AYER RAJAH C.",
                    font: "LECIP-8"
                },
                scrolls: [
                    'COMMONWEALTH AVE',
                    'NORTH BUONA VISTA RD',
                    'AYER RAJAH AVE',
                    'AYER RAJAH CRES',
                    'AYER RAJAH AVE',
                    'NORTH BUONA VISTA RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "91",
                destination: "HOLLAND DR",
                scrolls: [
                    "AYER RAJAH BUS PK"
                ]
            }
        }
    },
    92: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "92",
                destination: {
                    text: "GHIM MOH TER-SCIENCE PK DR",
                    font: "LECIP-8"
                },
                scrolls: [
                    'NORTH BUONA VISTA RD',
                    'BUONA VISTA FLYOVER',
                    'SCIENCE PK DR',
                    'BUONA VISTA FLYOVER',
                    'NORTH BUONA VISTA RD',
                    'MOUNT SINAI RD',
                    'MOUNT SINAI DR',
                    'MOUNT SINAI RISE'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "92",
                destination: "GHIM MOH TER",
                scrolls: [
                    "GHIM MOH TER"
                ]
            }
        }
    },
    "92M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "92M",
                destination: {
                    text: "GHIM MOH TER-N. BUONA VISTA",
                    font: "LECIP-8"
                },
                scrolls: [
                    'NORTH BUONA VISTA RD',
                    'MOUNT SINAI RD',
                    'MOUNT SINAI DR',
                    'MOUNT SINAI RISE'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "92M",
                destination: "GHIM MOH TER",
                scrolls: [
                    "GHIM MOH TER"
                ]
            }
        }
    },
    93: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "93",
                destination: {
                    text: ">  EUNOS INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ALEXANDRA RD',
                    'FARRER RD',
                    'BRADDELL RD',
                    'BARTLEY RD',
                    'JALAN EUNOS'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "93",
                destination: "EUNOS INT",
                scrolls: [
                    "HARBOURFRONT INT",
                    "EUNOS INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "93",
                destination: {
                    text: ">  HARBOURFRONT INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JALAN EUNOS",
                    "BARTLEY RD",
                    "BRADDELL RD",
                    "FARRER RD",
                    "ALEXANDRA RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "93",
                destination: "HARBOURFRONT INT",
                scrolls: [
                    "EUNOS INT",
                    "EUNOS STN/ INT",
                    "EUNOS STN",
                    "BLK 17",
                    "BLK 322",
                    "BLK 311",
                    "OPP EUNOS TECHNOLINK",
                    "COMFORT DRIVING CTR",
                    "COMFORT TEST CTR",
                    "OPP BLK 1022",
                    "AFT TAI SENG STN",
                    "ASIAWIDE IND BLDG",
                    "AFT PAYA LEBAR ST",
                    "AFT UPP PAYA LEBAR RD",
                    "BARTLEY STN EXIT A",
                    "OPP BARTLEY CHR CH",
                    "OPP GAMBIR RIDGE",
                    "BEF UPP SERANGOON RD",
                    // "S'PORE POWER TRG INST",
                    "PUB RECREATION CLUB",
                    "BEF BRADDELL FLYOVER",
                    "COMFORTDELGRO CORP LTD",
                    "BLK 219",
                    "AFT MUHAJIRIN MQUE",
                    "BLK 1004",
                    "AFT BISHAN RD",
                    "BRADDELL VIEW",
                    "OPP MACRITCHIE RESERVOIR",
                    "BEF ANDREW RD",
                    "BEF KHEAM HOCK RD",
                    "AFT THE JAPANESE ASSN",
                    // "OPP S'PORE BIBLE COLL",
                    "OPP LUTHERAN TWRS",
                    // "OPP ST. MARGARET'S SEC SCH",
                    "FARRER RD STN EXIT A",
                    "SPANISH VILLAGE",
                    "OPP TULIP GDN",
                    "OPP HOLLAND HILL LODGE",
                    "OPP BLK 95",
                    "QUEENSWAY SEC SCH",
                    "QUEENSTOWN POLYCLINIC",
                    "OPP BLESSED SACRAMENT CH",
                    "BLK 19",
                    "BLK 166",
                    "OPP QUEENSWAY SHOP CTR",
                    "BEF TELOK BLANGAH HILL PK",
                    "OPP ALEXANDRA PT",
                    "BEF PSA BLDG",
                    "AFT ALEXANDRA RD",
                    "YEO'S BLDG",
                    "OPP TELOK BLANGAH STN",
                    "BEF CHR COMMUNITY CHAPEL",
                    "BEF SEAH IM RD",
                    "HARBOURFRONT INT"
                ]
            }
        }
    },
    94: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "94",
                destination: {
                    text: "EUNOS - AIRPORT RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    'JALAN EUNOS',
                    'EUNOS LINK',
                    'AIRPORT RD',
                    'PAYA LEBAR AIRPORT',
                    'AIRPORT RD',
                    'EUNOS LINK',
                    'JALAN EUNOS'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "94",
                destination: "EUNOS INT",
                scrolls: [
                    "EUNOS INT"
                ]
            }
        }
    },
    95: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "95",
                destination: {
                    text: "KENT RIDGE TER - HOLLAND RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    'KENT RIDGE CRESCENT',
                    'LOWER KENT RIDGE RD',
                    "NORTH BUONA VISTA RD",
                    "HOLLAND AVE",
                    'NORTH BUONA VISTA RD',
                    'LOWER KENT RIDGE RD',
                    'KENT RIDGE CRESENT'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "95",
                destination: "KENT RIDGE TER",
                scrolls: [
                    "KENT RIDGE TER"
                ]
            }
        }
    },
    99: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "99",
                destination: {
                    text: ">  JOO KOON INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1",
                    "JURONG WEST AVE 4",
                    "JURONG WEST ST 91",
                    "UPPER JURONG RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "99",
                destination: "JOO KOON INT",
                scrolls: [
                    "CLEMENTI INT",
                    "JOO KOON INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "99",
                destination: {
                    text: ">  CLEMENTI INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "UPP JURONG RD",
                    "JURONG WEST ST 91",
                    "JURONG WEST AVE 4",
                    "JURONG WEST AVE 1",
                    "JURONG EAST AVE 1"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "99",
                destination: "CLEMENTI INT",
                scrolls: [
                    "JOO KOON INT"
                ]
            }
        }
    },
    100: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "100",
                destination: {
                    text: ">  GHIM MOH TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ALJUNIED RD',
                    'BEACH RD',
                    'SHENTON WAY',
                    'TELOK BLANGAH RD',
                    'ALEXANDRA RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "100",
                destination: "GHIM MOH TER",
                scrolls: [
                    "SERANGOON INT",
                    "GHIM MOH TER"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "100",
                destination: {
                    text: ">  SERANGOON INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ALEXANDRA RD',
                    'TELOK BLANGAH RD',
                    'ROBINSON RD',
                    'BEACH RD',
                    'ALJUNIED RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "100",
                destination: "SERANGOON INT",
                scrolls: [
                    "SERANGOON INT"
                ]
            }
        }
    },
    101: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "101",
                destination: {
                    text: "SERANGOON INT-BUANGKOK LINK",
                    font: "LECIP-8"
                },
                scrolls: [
                    "UPPER SERANGOON RD",
                    "HOUGANG CENTRAL",
                    "HOUGANG AVE 8",
                    "HOUGANG ST 51",
                    "BUANGKOK LINK",
                    "HOUGANG ST 51",
                    "HOUGANG AVE 8",
                    "HOUGANG CENTRAL",
                    "UPPER SERANGOON RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "101",
                destination: "SERANGOON INT",
                scrolls: [
                    "SERANGOON INT"
                ]
            }
        }
    },
    102: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "102",
                destination: {
                    text: "HOUGANG-SELETAR A'SPACE",
                    font: "LECIP-8"
                },
                scrolls: [
                    "UPPER SERANGOON RD",
                    "BUANGKOK DR",
                    "COMPASSVALE DR",
                    "SENGKANG EAST WAY",
                    "SENGKANG WEST WAY",
                    "SELETAR A'SPACE DR"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "102",
                destination: "HOUGANG CENTRAL INT",
                scrolls: [
                    "HOUGANG CENTRAL INT"
                ]
            }
        }
    },
    103: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "103",
                destination: {
                    text: ">  YISHUN INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "YIO CHU KANG RD",
                    "JALAN KAYU",
                    "SELETAR AEROSPACE DR",
                    "WEST CAMP RD",
                    "YISHUN CENTRAL"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "103",
                destination: "YISHUN INT",
                scrolls: [
                    "SERANGOON INT",
                    "YISHUN INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "103",
                destination: {
                    text: ">  SERANGOON INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "YISHUN CENTRAL",
                    "WEST CAMP RD",
                    "SELETAR AEROSPACE DR",
                    "JALAN KAYU",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "103",
                destination: "SERANGOON INT",
                scrolls: [
                    "SERANGOON INT"
                ]
            }
        }
    },
    105: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "105",
                destination: {
                    text: ">  JURONG EAST INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'SERANGOON AVE 3',
                    'TOA PAYOH CENTRAL',
                    'STEVENS RD',
                    'HOLLAND RD',
                    "COMMONWEALTH AVE WEST",
                    'TOH GUAN RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "105",
                destination: "JURONG EAST INT",
                scrolls: [
                    "SERANGOON INT",
                    "JURONG EAST INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "105",
                destination: {
                    text: ">  SERANGOON INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'TOH GUAN RD',
                    "COMMONWEALTH AVE WEST",
                    'HOLLAND RD',
                    'STEVEN RD',
                    'TOA PAYOH CENTRAL',
                    'SERANGOON AVE 3'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "105",
                destination: "SERANGOON INT",
                scrolls: [
                    "SERANGOON INT"
                ]
            }
        }
    },
    107: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "107",
                destination: {
                    text: ">  SHENTON WAY TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "HOUGANG AVE 10",
                    "UPPER SERANGOON RD",
                    "KALLANG BAHRU",
                    "LAVENDER ST",
                    "BEACH RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "107",
                destination: "SHENTON WAY TER",
                scrolls: [
                    "HOUGANG CENTRAL INT",
                    "SHENTON WAY TER"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "107",
                destination: {
                    text: ">  HOUGANG CENTRAL INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BEACH RD",
                    "LAVENDER ST",
                    "KALLANG BAHRU",
                    "UPPER SERANGOON RD",
                    "HOUGANG AVE 10"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "107",
                destination: "HOUGANG CENTRAL INT",
                scrolls: [
                    "HOUGANG CENTRAL INT"
                ]
            }
        }
    },
    "107M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "107M",
                destination: {
                    text: "HOUGANG - MARINA CTR",
                    font: "LECIP-8"
                },
                scrolls: [
                    'UPPER SERANGOON RD',
                    'KALLANG BAHRU',
                    'BEACH RD',
                    'TEMASAK BOULEVARD',
                    'KALLANG BAHRU'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "107M",
                destination: "HOUGANG CENTRAL INT",
                scrolls: [
                    "HOUGANG CENTRAL INT"
                ]
            }
        }
    },
    109: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "109",
                destination: {
                    text: ">  CHANGI VILLAGE TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "YIO CHU KANG RD",
                    "HOUGANG AVE 9",
                    "SENGKANG EAST RD",
                    "PASIR RIS DR 1",
                    "LOYANG AVE"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "109",
                destination: "CHANGI VILLAGE TER",
                scrolls: [
                    "SERANGOON INT",
                    "CHANGI VILLAGE TER"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "109",
                destination: {
                    text: ">  SERANGOON INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "LOYANG AVE",
                    "PASIR RIS DR 1",
                    "SENGKANG EAST RD",
                    "HOUGANG AVE 9",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "109",
                destination: "SERANGOON INT",
                scrolls: [
                    "SERANGOON INT"
                ]
            }
        }
    },
    111: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "111",
                destination: {
                    text: "GHIM MOH TER - TEMASEK AVE",
                    font: "LECIP-8"
                },
                scrolls: [
                    "COMMONWEALTH AVE",
                    "TANGLIN RD",
                    "ORCHARD RD",
                    "STAMFORD RD",
                    "ORCHARD BOULEVARD",
                    "TANGLIN RD",
                    "COMMONWEALTH AVE"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "111",
                destination: "GHIM MOH TER",
                scrolls: [
                    "GHIM MOH TER"
                ]
            }
        }
    },
    112: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "112",
                destination: {
                    text: "HOUGANG CTRL INT-HOUGANG ST 92",
                    font: "LECIP-8"
                },
                scrolls: [
                    'HOUGANG AVE 7',
                    'TAMPINES RD',
                    'HOUGANG AVE 2',
                    'HOUGANG AVE 9'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "112",
                destination: "HOUGANG CENTRAL INT",
                scrolls: [
                    "HOUGANG CTRL INT"
                ]
            }
        }
    },
    113: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "113",
                destination: {
                    text: "HOUGANG CTRL INT-U. PAYA LEBAR",
                    font: "LECIP-8"
                },
                scrolls: [
                    'HOUGANG AVE 8',
                    'HOUGANG AVE 10',
                    'UPP SERANGOON RD',
                    'HOUGANG ST 21',
                    'LORONG AH SOO',
                    'HOUGANG ST 21',
                    'UPP SERANGOON RD',
                    'HOUGANG AVE 10',
                    'HOUGANG AVE 8'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "113",
                destination: "HOUGANG CENTRAL INT",
                scrolls: [
                    "HOUGANG CTRL INT"
                ]
            }
        }
    },
    114: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "114",
                destination: {
                    text: "BUANGKOK INT-BUANGKOK CR",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BUANGKOK LINK',
                    'BUANGKOK CRES',
                    'BUANGKOK DR'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "114",
                destination: "BUANGKOK STN EXIT A",
                scrolls: [
                    "BUANGKOK STN EXIT B",
                    "BUANGKOK STN EXIT A"
                ]
            }
        }
    },
    "114S": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "114",
                destination: {
                    text: "BUANGKOK STN-BUANGKOK CR",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BUANGKOK LINK',
                    'BUANGKOK CRES',
                    'BUANGKOK DR'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "114",
                destination: "BUANGKOK STN EXIT A",
                scrolls: [
                    "BUANGKOK STN EXIT B",
                    "BUANGKOK STN EXIT A"
                ]
            }
        }
    },
    115: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "115",
                destination: {
                    text: "HOUGANG - HOUGANG AVE 3",
                    font: "LECIP-8"
                },
                scrolls: [
                    'HOUGANG AVE 1'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "115",
                destination: "HOUGANG ST 21",
                scrolls: [
                    "KOVAN HUB"
                ]
            }
        }
    },
    116: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "116",
                destination: {
                    text: "HOUGANG CTRL INT-S'GOON CTRL",
                    font: "LECIP-8"
                },
                scrolls: [
                    'HOUGANG AVE 4',
                    'HOUGANG AVE 9',
                    "S'GOON NORTH AVE 4",
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 3',
                    'SERANGOON CTRL'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "116",
                destination: "HOUGANG CENTRAL INT",
                scrolls: [
                    "HOUGANG CTRL INT"
                ]
            }
        }
    },
    117: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "117",
                destination: {
                    text: ">  SEMBAWANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "PUNGGOL WAY",
                    "SELETAR A'SPACE DR",
                    "YISHUN AVE 1",
                    "YISHUN AVE 2",
                    "CANBERRA LINK",
                    "SEMBAWANG WAY"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "117",
                destination: "SEMBAWANG INT",
                scrolls: [
                    "PUNGGOL TEMP INT",
                    "SEMBAWANG INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "117",
                destination: {
                    text: ">  PUNGGOL INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "SEMBAWANG WAY",
                    "CANBERRA LINK",
                    "YISHUN AVE 2",
                    "YISHUN AVE 1",
                    "SELETAR A'SPACE CR",
                    "PUNGGOL WAY"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "117",
                destination: "PUNGGOL TEMP INT",
                scrolls: [
                    "SEMBAWANG INT"
                ]
            }
        }
    },
    "117M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "117M",
                destination: {
                    text: ">  SEMBAWANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "PUNGGOL WAY",
                    "SELETAR A'SPACE DR",
                    "SELETAR A'SPACE LINK",
                    "YISHUN AVE 1",
                    "YISHUN AVE 2",
                    "CANBERRA LINK",
                    "SEMBAWANG WAY"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "117M",
                destination: "SEMBAWANG INT",
                scrolls: [
                    "PUNGGOL TEMP INT",
                    "SEMBAWANG INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "117M",
                destination: {
                    text: ">  PUNGGOL INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "SEMBAWANG WAY",
                    "CANBERRA LINK",
                    "YISHUN AVE 2",
                    "YISHUN AVE 1",
                    "SELETAR A'SPACE LINK",
                    "SELETAR A'SPACE DR",
                    "PUNGGOL WAY"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "117M",
                destination: "PUNGGOL TEMP INT",
                scrolls: [
                    "SEMBAWANG INT"
                ]
            }
        }
    },
    120: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "120",
                destination: {
                    text: "KG BAHRU TER-T.BLANGAH HTS",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JALAN BUKIT MERAH",
                    "ALEXANDRA RD",
                    "TELOK BLANGAH RD",
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH RD",
                    "ALEXANDRA RD",
                    "TIONG BAHRU RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "120",
                destination: "KG BAHRU TER",
                scrolls: [
                    "KAMPONG BAHRU TER"
                ]
            }
        }
    },
    121: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "121",
                destination: {
                    text: "SHENTON WAY TER - T.BLANGAH",
                    font: "LECIP-8"
                },
                scrolls: [
                    "SHENTON WAY",
                    "ZION RD",
                    "GANGES AVE",
                    "JALAN BUKIT MERAH",
                    "LOWER DELTA RD",
                    "TELOK BLANGAH RISE",
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "121",
                destination: "KG BAHRU TER",
                scrolls: [
                    "KAMPONG BAHRU TER"
                ]
            }
        }
    },
    "121K": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "121",
                destination: {
                    text: "KG BAHRU TER - T. BLANGAH RISE",
                    font: "LECIP-8"
                },
                scrolls: [
                    "GANGES AVE",
                    "TIONG BAHRU RD",
                    "KIM TIAN RD",
                    "LOWER DELTA RD",
                    "TELOK BLANGAH RISE",
                    "LOWER DELTA RD",
                    "KIM TIAN RD",
                    "TIONG BAHRU RD",
                    "GANGES AVE"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "121",
                destination: "KG BAHRU TER",
                scrolls: [
                    "KAMPONG BAHRU TER"
                ]
            }
        }
    },
    122: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "122",
                destination: {
                    text: "KG BAHRU TER - C'WEALTH DR",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TIONG BAHRU RD",
                    "ALEXANDRA RD",
                    "MARGARET DR",
                    "COMMONWEALTH DR",
                    "MARGRET DR",
                    "ALEXANDRA RD",
                    "TIONG BAHRU RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "122",
                destination: "KG BAHRU TER",
                scrolls: [
                    "KAMPONG BAHRU TER"
                ]
            }
        }
    },
    123: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "123",
                destination: {
                    text: ">  SENTOSA",
                    font: "LECIP-8"
                },
                scrolls: [
                    "QUEENSWAY",
                    "HOLLAND RD",
                    "ORCHARD RD",
                    "HAVELOCK RD",
                    "TIONG BAHRU RD",
                    "LOWER DELTA RD",
                    "BUKIT PURMEI AVE"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "123",
                destination: "BEACH STN TER",
                scrolls: [
                    "BUKIT MERAH INT",
                    "BEACH STN TER"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "123",
                destination: {
                    text: ">  BUKIT MERAH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BUKIT PURMEI AVE",
                    "LOWER DELTA RD",
                    "TIONG BAHRU RD",
                    "HAVELOCK RD",
                    "ORCHARD BLVD",
                    "HOLLAND RD",
                    "QUEENSWAY"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "123",
                destination: "BUKIT MERAH INT",
                scrolls: [
                    "BEACH STN TER",
                    "BUKIT MERAH INT"
                ]
            }
        }
    },
    "123M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "123M",
                destination: {
                    text: "HARBOURFRONT-TIONG BAHRU",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BUKIT PURMEI AVE',
                    'LOWER DELTA RD',
                    'TIONG BAHRU RD',
                    'LOWER DELTA RD',
                    'BUKIT PURMEI AVE'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "123M",
                destination: "HARBOURFRONT INT",
                scrolls: [
                    "HARBOURFRONT INT",
                    "HARBOURFRONT STN EXIT A",
                    "OPP VIVOCITY",
                    "THE PEARL @ MOUNT FABER",
                    "BLK 40",
                    "OPP BLOCK 109",
                    "BLK 109",
                    "ST THERESA'S CONVENT",
                    "CENDEX CTR",
                    "BLK 129",
                    "TIONG BAHRU STN",
                    "BLK 1",
                    "BLK 18",
                    "CTRL GREEN CONDO",
                    "OPP TIONG BAHRU STN",
                    "BLK 25B",
                    "OPP CENDEX CTR",
                    "OPP ST THERESA'S CONVENT",
                    "OPP BLOCK 109",
                    "BLK 109",
                    "BLK 105",
                    "OPP MT FABER LODGE",
                    "HARBOURFRONT STN / VIVOCITY",
                    "HARBOURFRONT INT"
                ]
            }
        }
    },
    124: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "124",
                destination: {
                    text: ">  HARBOURFRONT INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "MOULMEIN RD",
                    "ORCHARD RD",
                    "NEW BRIDGE RD",
                    "KAMPONG BAHRU RD",
                    "TELOK BLANGAH WAY",
                    "TELOK BLANGAH HTS"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "124",
                destination: "HARBOURFRONT INT",
                scrolls: [
                    "ST MICHAEL'S TER",
                    "HARBOURFRONT INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "124",
                destination: {
                    text: ">  ST MICHAEL'S TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH WAY",
                    "KAMPONG BAHRU RD",
                    "NEW BRIDGE RD",
                    "EU TONG SEN ST",
                    "ORCHARD TURN",
                    "MOULMEIN RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "124",
                destination: "ST MICHAEL'S TER",
                scrolls: [
                    "HARBOURFRONT INT",
                    "ST MICHAEL'S TER"
                ]
            }
        }
    },
    125: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "125",
                destination: {
                    text: ">  SIMS DR",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BALESTIER RD',
                    'SERANGOON RD',
                    'KALLANG WAY',
                    'ALJUNIED RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "125",
                destination: "SIMS DR",
                scrolls: [
                    "ST MICHAEL'S TER",
                    "BLK 53"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "125",
                destination: {
                    text: ">  ST MICHAEL'S TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ALJUNIED RD',
                    'KALLANG WAY',
                    'BENDEMEER RD',
                    'BALESTIER RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "125",
                destination: "ST MICHAEL'S TER",
                scrolls: [
                    "BLK 53",
                    "ST MICHAEL'S TER"
                ]
            }
        }
    },
    127: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "127",
                destination: {
                    text: "TAMP INT-TAMP IND AVE 5",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES CONCOURSE",
                    "TAMPINES AVE 9, 10",
                    "TAMPINES IND AVE 5",
                    "TAMPINES RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "127",
                destination: "TAMPINES INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        }
    },
    128: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "128",
                destination: {
                    text: ">  SHENTON WAY TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "ANG MO KIO AVE 8",
                    "BISHAN RD",
                    "SCOTTS RD",
                    "ORCHARD RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "128",
                destination: "SHENTON WAY TER",
                scrolls: [
                    "ANG MO KIO DEPOT",
                    "SHENTON WAY TER"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "128",
                destination: {
                    text: ">  ANG MO KIO DEPOT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "ORCHARD TURN",
                    "SCOTTS RD",
                    "BISHAN RD",
                    "ANG MO KIO AVE 8"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "128",
                destination: "ANG MO KIO ST 63",
                scrolls: [
                    "SHENTON WAY TER",
                    "ANG MO KIO DEPOT"
                ]
            }
        }
    },
    129: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "129",
                destination: {
                    text: ">  ST MICHAEL'S TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES NORTH DR 2",
                    "TAMPINES AVE 4",
                    "TAMPINES AVE 1",
                    "BRADDELL RD",
                    "LOR 2 TOA PAYOH",
                    "BALESTIER RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "129",
                destination: "ST MICHAEL'S TER",
                scrolls: [
                    "ST MICHAEL'S TER"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "129",
                destination: {
                    text: ">  TAMPINES NORTH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BALESTIER RD",
                    "LOR 2 TOA PAYOH",
                    "BRADDELL RD",
                    "TAMPINES AVE 1",
                    "TAMPINES AVE 4",
                    'TAMPINES NORTH DR 2'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "129",
                destination: "TAMPINES NORTH INT",
                scrolls: [
                    "TAMPINES NORTH INT"
                ]
            }
        }
    },
    "129T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "129",
                destination: {
                    text: ">  ST MICHAEL'S TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 4",
                    "TAMPINES AVE 1",
                    "BRADDELL RD",
                    "LOR 1 TOA PAYOH",
                    "BALESTIER RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "129",
                destination: "ST MICHAEL'S TER",
                scrolls: [
                    "ST MICHAEL'S TER"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "129",
                destination: {
                    text: ">  TAMPINES CONCOURSE INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BALESTIER RD",
                    "LOR 1 TOA PAYOH",
                    "BRADDELL RD",
                    "TAMPINES AVE 1",
                    "TAMPINES AVE 4"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "129",
                destination: "TAMPINES CONCOURSE INT",
                scrolls: [
                    "TAMPINES CONCOURSE INT"
                ]
            }
        }
    },
    130: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "130",
                destination: {
                    text: ">  SHENTON WAY TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'SIN MING RD',
                    'BALESTIER RD',
                    'JALAN BESAR',
                    'SHENTON WAY'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "130",
                destination: "SHENTON WAY",
                scrolls: [
                    "ANG MO KIO INT"
                ]
            },
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "130",
                destination: {
                    text: ">  ANG MO KIO INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ROBINSON RD',
                    'SERANGOON RD',
                    'BALESTIER RD',
                    'SIN MING RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "130",
                destination: "ANG MO KIO INT",
                scrolls: [
                    "ANG MO KIO INT"
                ]
            }
        },
    },
    131: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "131",
                destination: {
                    text: ">  BUKIT MERAH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'THOMSON RD',
                    'OWEN RD',
                    'SHENTON WAY',
                    'TELOK BLANGAH RD',
                    'BUKIT PURMEI AVE'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "131",
                destination: "BUKIT MERAH INT",
                scrolls: [
                    "BUKIT MERAH INT"
                ]
            },
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "131",
                destination: {
                    text: ">  ST.MICHAEL'S TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BUKIT PURMEI AVE',
                    'TELOK BLANGAH RD',
                    'CECIL ST',
                    'OWEN RD',
                    'THOMSON RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "131",
                destination: "ST MICHAEL'S TER",
                scrolls: [
                    "BUKIT MERAH INT"
                ]
            }
        },
    },
    "131M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "131M",
                destination: {
                    text: "BUKIT MERAH INT-BT PURMEI",
                    font: "LECIP-8"
                },
                scrolls: [
                    'JALAN BUKIT MERAH',
                    'LOWER DELTA RD',
                    'BUKIT PURMEI AVE',
                    'LOWER DELTA RD',
                    'JALAN BUKIT MERAH'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "131M",
                destination: "BUKIT MERAH INT",
                scrolls: [
                    "CENDEX CTR"
                ]
            }
        }
    },
    132: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "132",
                destination: {
                    text: ">  BUKIT MERAH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'HOUGANG AVE 2',
                    'ANG MO KIO AVE 3',
                    'UPPER THOMSON RD',
                    'THOMSON RD',
                    'STEVENS RD',
                    'TANGLIN RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "132",
                destination: "BUKIT MERAH INT",
                scrolls: [
                    "BUKIT MERAH INT"
                ]
            },
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "132",
                destination: {
                    text: ">  HOUGANG CTRL INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'TANGLIN RD',
                    'STEVENS RD',
                    'THOMSON RD',
                    'UPPER THOMSON RD',
                    'ANG MO KIO AVE 3',
                    'HOUGANG AVE 2'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "132",
                destination: "HOUGANG CENTRAL INT",
                scrolls: [
                    "BUKIT MERAH INT"
                ]
            }
        },
    },
    133: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "133",
                destination: {
                    text: ">  SHENTON WAY TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ANG MO KIO AVE 1',
                    'SERANGOON AVE 2',
                    'BENDEMEER RD',
                    'VICTORIA ST',
                    'BAYFRONT AVE'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "133",
                destination: "SHENTON WAY",
                scrolls: [
                    "ANG MO KIO INT"
                ]
            },
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "133",
                destination: {
                    text: ">  ANG MO KIO INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BAYFRONT AVE',
                    'VICTORIA ST',
                    'SERANGOON RD',
                    'SERANGOON AVE 2',
                    'ANG MO KIO AVE 1'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "133",
                destination: "ANG MO KIO INT",
                scrolls: [
                    "ANG MO KIO INT"
                ]
            }
        },
    },
    134: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "134",
                destination: {
                    text: "SIMS PL TER-MARINE TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "GEYLANG EAST CENTRAL",
                    "TANJONG KATONG RD",
                    "MARINE PARADE RD",
                    "MARINE TERRACE",
                    "MARINE PARADE RD",
                    "TANJONG KATONG RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "134",
                destination: "SIMS PLACE TER",
                scrolls: [
                    "SIMS PLACE TERMINAL",
                    "BLOCK 49 MARKET/FOODCOURT",
                    "OPPOSITE BLOCK 53",
                    "OPPOSITE GEYLANG METHODIST SECONDARY SCHOOL",
                    "GEYLANG POLYCLINIC",
                    "OPPOSITE BLOCK 1015",
                    "PAYA LEBAR STATION EXIT B",
                    "TANJONG KATONG COMPLEX",
                    "CDAC BUILDING",
                    "AFTER IPOH LANE",
                    "TANJONG KATONG GIRLS' SCHOOL",
                    "BEFORE KATONG PO",
                    "OPPOSITE AMBER GARDENS",
                    "OPPOSITE PARKWAY PARADE",
                    "OPPOSITE BLOCK 72",
                    "CHIJ KATONG CONVENT (PRIMARY)",
                    "BLOCK 45",
                    "BLOCK 53",
                    "OPPOSITE CHIJ KATONG CONVENT",
                    "BLOCK 57",
                    "TAO NAN SCHOOL",
                    "BETWEEN BLOCKS 72/74",
                    "PARKWAY PARADE",
                    "AMBER GARDENS",
                    "AFTER KATONG PO",
                    "OPPOSITE TANJONG KATONG GIRLS' SCHOOL",
                    "AFTER DUNMAN ROAD",
                    "AFTER QUEEN OF PEACE CHURCH",
                    "PAYA LEBAR STATION EXIT D",
                    "PAYA LEBAR STATION EXIT C",
                    "BLOCK 1015",
                    "OPPOSITE GEYLANG POLYCLINIC",
                    "GEYLANG METHODIST PRIMARY SCHOOL",
                    "BEFORE BLOCK 53",
                    "BLOCK 45",
                    "SIMS PLACE TERMINAL"
                ]
            }
        }
    },
    135: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "135",
                destination: {
                    text: ">  JLN KEMBANGAN",
                    font: "LECIP-8"
                },
                scrolls: [
                    'SERANGOON AVE 2',
                    'UPPER ALJUNIED RD',
                    'MACPHERSON EST',
                    'TANJONG KATONG RD',
                    'MARINE PARADE RD',
                    'EAST COAST RD',
                    'FRANKEL AVE'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "135",
                destination: "JLN KEMBANGAN",
                scrolls: [
                    "ALJUNIED PK"
                ]
            },
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "135",
                destination: {
                    text: ">  ANG MO KIO INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'FRANKEL AVE',
                    'EAST COAST RD',
                    'MARINE PARADE RD',
                    'TANJONG KATONG RD',
                    'MACPHERSON EST',
                    'UPPER ALJUNIED RD',
                    'SERANGOON AVE 2'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "135",
                destination: "ANG MO KIO INT",
                scrolls: [
                    "OPP ALJUNIED PK"
                ]
            }
        },
    },
    "135S": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "135",
                destination: {
                    text: ">  SIGLAP RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    'SERANGOON AVE 2',
                    'UPPER ALJUNIED RD',
                    'MACPHERSON EST',
                    'TANJONG KATONG RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "135",
                destination: "SIGLAP RD",
                scrolls: [
                    "ALJUNIED PK"
                ]
            },
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "135",
                destination: {
                    text: ">  ANG MO KIO INT",
                    font: "LECIP-8"
                },
                scrolls: [

                    'MARINE PARADE RD',
                    'TANJONG KATONG RD',
                    'MACPHERSON EST',
                    'UPPER ALJUNIED RD',
                    'SERANGOON AVE 2'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "135",
                destination: "ANG MO KIO INT",
                scrolls: [
                    "OPP ALJUNIED PK"
                ]
            }
        },
    },
    137: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "137",
                destination: {
                    text: ">  SIMS PLACE TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BEDOK SOUTH RD',
                    'BEDOK NTH AVE 2',
                    'KAKI BUKIT AVE 3',
                    'UBI AVE 1',
                    'GEYLANG RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "137",
                destination: "SIMS PL TER",
                scrolls: [
                    "SIMS PL TER"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "137",
                destination: {
                    text: ">  UPP EAST COAST TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BEDOK SOUTH RD',
                    'BEDOK NTH AVE 2',
                    'KAKI BUKIT AVE 3',
                    'UBI AVE 1',
                    'GEYLANG RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "137",
                destination: "UPP EAST COAST TER",
                scrolls: [
                    "UPP EAST COAST TER"
                ]
            }
        }
    },
    138: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "138",
                destination: {
                    text: ">  SINGAPORE ZOO",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ANG MO KIO AVE 3, 6, 5',
                    'YIO CHU KANG RD',
                    'UPP THOMSON RD',
                    'MANDAI RD',
                    'MANDAI LAKE RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "138",
                destination: "MANDAI LAKE RD",
                scrolls: [
                    "ANG MO KIO INT"
                ]
            },
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "138",
                destination: {
                    text: ">  ANG MO KIO INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'MANDAI LAKE RD',
                    'MANDAI RD',
                    'UPP THOMSON RD',
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 5, 6, 3'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "138",
                destination: "ANG MO KIO INT",
                scrolls: [
                    "ANG MO KIO INT"
                ]
            }
        },
    },
    139: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "139",
                destination: {
                    text: ">  BUKIT MERAH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JALAN BAHAGIA",
                    'BALESTIER RD',
                    'BENCOOLEN ST',
                    'RIVER VALLEY RD',
                    'ALEXANDRA RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "139",
                destination: "BUKIT MERAH INT",
                scrolls: [
                    "OPP DAWSON PL"
                ]
            },
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "139",
                destination: {
                    text: ">  TOA PAYOH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ALEXANDRA RD',
                    'RIVER VALLEY RD',
                    'SELEGIE RD',
                    'BALESTIER RD',
                    "JALAN BAHAGIA"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "139",
                destination: "TOA PAYOH INT",
                scrolls: [
                    "TEKKA CTR"
                ]
            }
        },
    },
    "139M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "139M",
                destination: {
                    text: "TOA PAYOH INT-JLN BAHAGIA",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BALESTIER RD",
                    "JLN RAJAH",
                    "JLN BAHAGIA",
                    "BALESTIER RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "139M",
                destination: "TOA PAYOH INT",
                scrolls: [
                    "TOA PAYOH INT"
                ]
            }
        }
    },
    140: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "140",
                destination: {
                    text: "LOR 1 GEYLANG-ST WILFRED RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    "GEYLANG BAHRU",
                    "BENDEMEER RD",
                    "ST WILFRED RD",
                    "GEYLANG BAHRU",
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "140",
                destination: "LOR 1 GEYLANG TER",
                scrolls: [
                    "LOR 1 GEYLANG TER"
                ]
            }
        }
    },
    141: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "141",
                destination: {
                    text: ">  TOA PAYOH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'LAVENDER ST',
                    'JALAN BESAR',
                    'RANGOON RD',
                    'THOMSON RD',
                    'LOR 1 TOA PAYOH'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "141",
                destination: "TOA PAYOH INT",
                scrolls: [
                    "TOA PAYOH INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "141",
                destination: {
                    text: ">  LOR 1 GEYLANG TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'LOR 1 TOA PAYOH',
                    'THOMSON RD',
                    'RANGOON RD',
                    'SERANGOON RD',
                    'LAVENDER ST'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "141",
                destination: "LOR 1 GEYLANG TER",
                scrolls: [
                    "LOR 1 GEYLANG TER"
                ]
            }
        }
    },
    142: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "142",
                destination: {
                    text: "TOA PAYOH INT-POTONG P. AVE 1",
                    font: "LECIP-8"
                },
                scrolls: [
                    'LOR 6 TOA PAYOH',
                    'JLN TOA PAYOH',
                    'UPP SERANGOON RD',
                    'POTONG PASIR AVE 1, 3, 2'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "142",
                destination: "TOA PAYOH INT",
                scrolls: [
                    "TOA PAYOH INT"
                ]
            }
        }
    },
    145: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "145",
                destination: {
                    text: ">  BUONA VISTA TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BALESTIER RD',
                    'LAVENDER ST',
                    'NORTH BRIDGE RD',
                    'TANJONG PAGAR RD',
                    'TELOK BLANGAH RD',
                    'HENDERSON RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "145",
                destination: "HOLLAND DR",
                scrolls: [
                    "TOA PAYOH INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "145",
                destination: {
                    text: ">  TOA PAYOH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'HENDERSON RD',
                    'TELOK BLANGAH RD',
                    'TANJONG PAGAR RD',
                    'VICTORIA ST',
                    'LAVENDERS ST',
                    'BALESTIER RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "145",
                destination: "TOA PAOYH INT",
                scrolls: [
                    "BLK 43"
                ]
            }
        }
    },
    146: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "146",
                destination: {
                    text: "BARTLEY RD - BIDADARI PK DR",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BARTLEY RD',
                    'UPPER SERANGOON RD',
                    'BIDADARI PARK DR'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "146",
                destination: "BARTLEY RD",
                scrolls: [
                    "BARTLEY STN EXIT A"
                ]
            }
        }
    },
    147: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "147",
                destination: {
                    text: ">  CLEMENTI INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "HOUGANG AVE 8",
                    "YIO CHU KANG RD",
                    "UPP SERANGOON RD",
                    "BENDEMEER RD",
                    "JALAN BESAR",
                    "NEW BRIDGE RD",
                    "JALAN BUKIT MERAH",
                    "COMMONWEALTH AVE WEST"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "147",
                destination: "CLEMENTI INT",
                scrolls: [
                    "HOUGANG CENTRAL INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "147",
                destination: {
                    text: ">  HOUGANG CTRL INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "COMMONWEALTH AVE WEST",
                    "JALAN BUKIT MERAH",
                    "EU TONG SEN ST",
                    "SELEGIE RD",
                    "SERANGOON RD",
                    "UPP SERANGOON RD",
                    "YIO CHU KANG RD",
                    "HOUGANG AVE 8"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "147",
                destination: "HOUGANG CTRL INT",
                scrolls: [
                    "CLEMENTI INT"
                ]
            }
        }
    },
    150: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "150",
                destination: {
                    text: "EUNOS INT - MARINE TERR",
                    font: "LECIP-8"
                },
                scrolls: [
                    'STILL RD',
                    'TELOK KURAU RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "150",
                destination: "EUNOS INT",
                scrolls: [
                    "EUNOS INT"
                ]
            }
        }
    },
    151: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "151",
                destination: {
                    text: ">  KENT RIDGE TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'HOUGANG AVE 5, 7, 3',
                    'MACPHERSON RD',
                    'JLN TOA PAYOH',
                    'BUKIT TIMAH RD',
                    'CLEMENTI RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "151",
                destination: "KENT RIDGE TER",
                scrolls: [
                    "HOUGANG CENTRAL INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "151",
                destination: {
                    text: ">  HOUGANG CTRL INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'CLEMENTI RD',
                    'DUNEARN RD',
                    'JLN TOA PAYOH',
                    'MACPHERSON RD',
                    'HOUGANG AVE 3, 7, 5'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "151",
                destination: "HOUGANG CTRL INT",
                scrolls: [
                    "CLEMENTI INT"
                ]
            }
        }
    },
    153: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "153",
                destination: {
                    text: ">  BUKIT MERAH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BRADDELL RD',
                    'TOA PAYOH CENTRAL',
                    'BUKIT TIMAH RD',
                    'FARRER RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "153",
                destination: "BUKIT MERAH INT",
                scrolls: [
                    "HOUGANG CENTRAL INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "153",
                destination: {
                    text: ">  HOUGANG CTRL INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'FARRER RD',
                    'DUNEARN RD',
                    'TOA PAYOH CENTRAL',
                    'BRADDELL RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "153",
                destination: "HOUGANG CTRL INT",
                scrolls: [
                    "CLEMENTI INT"
                ]
            }
        }
    },
    154: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "154",
                destination: {
                    text: ">  EUNOS INT", 
                    font: "LECIP-8"
                },
                scrolls: [
                    "YUAN CHING RD",
                    "AYE",
                    "COMMONWEALTH AVE WEST",
                    "CLEMENTI RD",
                    "DUNEARN RD",
                    "JALAN TOA PAYOH",
                    "PAYA LEBAR RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "154",
                destination: "EUNOS INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "154",
                destination: {
                    text: ">  BOON LAY INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "PAYA LEBAR RD",
                    "JALAN TOA PAYOH",
                    "BUKIT TIMAH RD",
                    "CLEMENTI RD",
                    "C'WEALTH AVE WEST",
                    "AYE",
                    "YUAN CHING RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "154",
                destination: "BOON LAY INT",
                scrolls: [
                    "EUNOS INT"
                ]
            }
        }
    },
    155: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "155",
                destination: {
                    text: ">  BEDOK INT", 
                    font: "LECIP-8"
                },
                scrolls: [
                    'BRADDELL RD',
                    'UPP ALJUNIED RD',
                    'GEYLANG EAST CTRL',
                    'CIRCUIT RD',
                    'TELOK KURAU RD',
                    'EAST COAST RD',
                    'BEDOK STH AVE 1'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "155",
                destination: "BEDOK INT",
                scrolls: [
                    "TOA PAYOH INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "155",
                destination: {
                    text: ">  TOA PAYOH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BEDOK STH AVE 1',
                    'EAST COAST RD',
                    'TELOK KURAU RD',
                    'CIRCUIT RD',
                    'GEYLANG EAST CTRL',
                    'UPP ALJUNIED RD',
                    'BRADDELL RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "155",
                destination: "TOA PAYOH INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        }
    },
    156: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "156",
                destination: {
                    text: ">  CLEMENTI INT", 
                    font: "LECIP-8"
                },
                scrolls: [
                    'SENGKANG EAST AVE',
                    'BUANGKOK GREEN',
                    'YIO CHU KANG RD',
                    'BISHAN RD',
                    'BUKIT TIMAH RD',
                    'SIXTH AVE',
                    'ULU PANDAN RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "156",
                destination: "CLEMENTI INT",
                scrolls: [
                    "BUANGKOK INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "156",
                destination: {
                    text: ">  BUANGKOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "ULU PANDAN RD",
                    "SIXTH AVE",
                    "DUNEARN RD",
                    "THOMSON RD",
                    "BISHAN RD",
                    "YIO CHU KANG RD",
                    "BUANGKOK GREEN",
                    "SENGKANG EAST AVE"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "156",
                destination: "BUANGKOK INT",
                scrolls: [
                    "CLEMENTI INT"
                ]
            }
        }
    },
    "156S": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "156",
                destination: {
                    text: ">  CLEMENTI INT", 
                    font: "LECIP-8"
                },
                scrolls: [
                    'SENGKANG EAST RD',
                    'BUANGKOK GREEN',
                    'YIO CHU KANG RD',
                    'BISHAN RD',
                    'BUKIT TIMAH RD',
                    'SIXTH AVE',
                    'ULU PANDAN RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "156",
                destination: "CLEMENTI INT",
                scrolls: [
                    "BUANGKOK INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "156",
                destination: {
                    text: ">  SENGKANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "ULU PANDAN RD",
                    "SIXTH AVE",
                    "DUNEARN RD",
                    "THOMSON RD",
                    "BISHAN RD",
                    "YIO CHU KANG RD",
                    "BUANGKOK GREEN",
                    "SENGKANG EAST RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "156",
                destination: "SENGKANG INT",
                scrolls: [
                    "CLEMENTI INT"
                ]
            }
        }
    },
    157: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "157",
                destination: {
                    text: ">  TOA PAYOH INT", 
                    font: "LECIP-8"
                },
                scrolls: [
                    "JURONG WEST AVE 1",
                    "JURONG EAST AVE 1",
                    "BUKIT BATOK EAST AVE 3",
                    "JALAN JURONG KECHIL",
                    "DUNEARN RD",
                    "LORNIE RD",
                    "BRADDELL RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "157",
                destination: "TOA PAYOH INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "157",
                destination: {
                    text: ">  BOON LAY INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BRADDELL RD",
                    "LORNIE RD",
                    "BUKIT TIMAH RD",
                    "JALAN JURONG KECHIL",
                    "BUKIT BATOK EAST AVE 3",
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "157",
                destination: "BOON LAY INT",
                scrolls: [
                    "TOA PAYOH INT"
                ]
            }
        }
    },
    158: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "158",
                destination: {
                    text: ">  RHU CROSS", 
                    font: "LECIP-8"
                },
                scrolls: [
                    'UPPER PAYA LEBAR RD',
                    'CIRCUIT RD',
                    'ALJUNIED RD',
                    'MOUNTBATTEN RD', 
                    'TANJONG RHU RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "158",
                destination: "RHU CROSS",
                scrolls: [
                    "SERANGOON INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "158",
                destination: {
                    text: ">  SERANGOON INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'TANJONG RHU RD',
                    'MOUNTBATTEN RD',
                    'ALJUNIED RD',
                    'CIRCUIT RD',
                    'UPPER PAYA LEBAR RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "158",
                destination: "SERANGOON INT",
                scrolls: [
                    "SERANGOON INT"
                ]
            }
        }
    },
    159: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "159",
                destination: {
                    text: ">  TOA PAYOH INT", 
                    font: "LECIP-8"
                },
                scrolls: [
                    'SENGKANG EAST RD',
                    'HOUGANG AVE 9',
                    "S'GOON NTH AVE 5, 6",
                    'ANG MO KIO AVE 5, 8',
                    'LOR CHUAN'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "158",
                destination: "TOA PAYOH INT",
                scrolls: [
                    "SENGKANG INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "158",
                destination: {
                    text: ">  SENGKANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'LOR CHUAN',
                    'ANG MO KIO AVE 8, 5',
                    "S'GOON NTH AVE 6, 5",
                    'HOUGANG AVE 9',
                    'SENGKANG EAST RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "158",
                destination: "SENGKANG INT",
                scrolls: [
                    "TOA PAYOH INT"
                ]
            }
        }
    },
    160: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: {
                    text: ">  JB SENTRAL TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'BUKIT BATOK RD',
                    'CHOA CHU KANG RD',
                    'WOODLANDS RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "160",
                destination: "JB SENTRAL TERMINAL",
                scrolls: [
                    "JURONG EAST INT",
                    "JB SENTRAL TER"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: {
                    text: ">  JURONG TOWN HALL INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'WOODLANDS RD',
                    'CHOA CHU KANG RD',
                    'BUKIT BATOK RD',
                    'JURONG TOWN HALL RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "160",
                destination: "JURONG TOWN HALL INT",
                scrolls: [
                    "JB SENTRAL TER",
                    "JURONG TOWN HALL INT"
                ]
            }
        }
    },
    "160B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: {
                    text: ">  MARSILING PARK",
                    font: "LECIP-8"
                },
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'BUKIT BATOK RD',
                    'CHOA CHU KANG RD',
                    'WOODLANDS RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "160",
                destination: "WOODLANDS CTR RD",
                scrolls: [
                    "JURONG EAST INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: {
                    text: ">  JURONG EAST INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'WOODLANDS RD',
                    'CHOA CHU KANG RD',
                    'BUKIT BATOK RD',
                    'JURONG TOWN HALL RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "160",
                destination: "JURONG EAST INT",
                scrolls: [
                    "GLOBALFOUNDARIES/AFT BKE",
                    "JURONG EAST INT"
                ]
            }
        }
    },
    "160J": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: {
                    text: ">  JB SENTRAL TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'BUKIT BATOK RD',
                    'CHOA CHU KANG RD',
                    'WOODLANDS RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "160",
                destination: "JB SENTRAL TERMINAL",
                scrolls: [
                    "JURONG EAST INT",
                    "JUNCTION 10",
                    "OPPOSITE BLOCK 632 CARPARK",
                    "OPPOSITE BLOCK 635A",
                    "BEFORE YEW TEE FLYOVER",
                    "AFTER YEW TEE FLYOVER",
                    "HEAVY VEHICLE PARK",
                    "YEW TEE INDUSTRIAL ESTATE",
                    "THONG HUAT BROS PTE LTD",
                    "DA DI GLASS",
                    "OPPOSITE MANDAI ESTATE",
                    "BEFORE MANDAI ROAD",
                    "OPPOSITE JALAN BUMBONG",
                    "AFTER LAMP POST 234",
                    "OPPOSITE KRANJI WAR MEMORIAL",
                    "OPPOSITE SINGAPORE TURF CLUB",
                    "OPPOSITE KRANJI STATION",
                    "JB SENTRAL TER"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: {
                    text: ">  JURONG EAST INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'WOODLANDS RD',
                    'CHOA CHU KANG RD',
                    'BUKIT BATOK RD',
                    'JURONG TOWN HALL RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "160",
                destination: "JURONG EAST INT",
                scrolls: [
                    "JB SENTRAL TER",
                    "JURONG EAST INT"
                ]
            }
        }
    },
    "160M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "160M",
                destination: {
                    text: "JURONG EAST-BT BATOK RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BOON LAY WAY",
                    "JURONG TOWN HALL RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK RD",
                    "BUKIT BATOK WEST AVE 8",
                    "JURONG TOWN HALL RD",
                    "BOON LAY WAY"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "160M",
                destination: "JURONG EAST INT",
                scrolls: [
                    "JURONG EAST INT"
                ]
            }
        }
    },
    161: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "161",
                destination: {
                    text: ">  WOODLANDS INT", 
                    font: "LECIP-8"
                },
                scrolls: [
                    "HOUGANG AVE 8",
                    "HOUGANG AVE 4",
                    "SENGKANG EAST RD",
                    "SENGKANG EAST WAY",
                    "WOODLANDS AVE 2"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "160",
                destination: "WOODLANDS INT",
                scrolls: [
                    "HOUGANG CENTRAL INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "161",
                destination: {
                    text: ">  HOUGANG CTRL INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "WOODLANDS AVE 2",
                    "SENGKANG EAST WAY",
                    "SENGKANG EAST RD",
                    "HOUGANG AVE 4",
                    "HOUGANG AVE 8"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "161",
                destination: "HOUGANG CTRL INT",
                scrolls: [
                    "WOODLANDS INT"
                ]
            }
        }
    },
    162: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "162",
                destination: {
                    text: "YCK INT - SIN MING RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ANG MO KIO AVE 8',
                    'BISHAN ST 22',
                    'SIN MING AVE',
                    'UPPER THOMSON RD',
                    'SHUNFU RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "162",
                destination: "YIO CHU KANG INT",
                scrolls: [
                    "YIO CHU KANG INT"
                ]
            }
        }
    },
    "162M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "162M",
                destination: {
                    text: "YCK INT - TEMASEK AVE",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ANG MO KIO AVE 8',
                    'BISHAN ST 22',
                    'SIN MING AVE',
                    'THOMSON RD',
                    'ORCHARD RD',
                    'THOMSON RD',
                    'SING MIN AVE',
                    'BISHAN ST 22',
                    'ANG MO KIO AVE 8'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "162M",
                destination: "YIO CHU KANG INT",
                scrolls: [
                    "YIO CHU KANG INT"
                ]
            }
        }
    },
    '162S': {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "162",
                destination: {
                    text: ">  SHENTON WAY TER", 
                    font: "LECIP-8"
                },
                scrolls: [
                    "ANG MO KIO AVE 8",
                    "ANG MO KIO AVE 6",
                    "BISHAN ST 22",
                    "SIN MING AVE",
                    "UPPER THOMSON RD",
                    "THOMSON RD",
                    "ORCHARD RD",
                    "BRAS BASAH RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "162",
                destination: "SHENTON WAY TER",
                scrolls: [
                    "YIO CHU KANG INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "162",
                destination: {
                    text: ">  YIO CHU KANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "STAMFORD RD",
                    "ORCHARD TURN",
                    "THOMSON RD",
                    "UPPER THOMSON RD",
                    "SIN MING AVE",
                    "BISHAN ST 22",
                    "ANG MO KIO AVE 6",
                    "ANG MO KIO AVE 8"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "162",
                destination: "YIO CHU KANG INT",
                scrolls: [
                    "SHENTON WAY TER"
                ]
            }
        }
    },
    163: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "163",
                destination: {
                    text: ">  SENGKANG INT", 
                    font: "LECIP-8"
                },
                scrolls: [
                    "LOR 4 TOA PAYOH",
                    "BRADDELL RD",
                    "UPPER THOMSON RD",
                    "YIO CHU KANG RD",
                    "SENGKANG WEST AVE",
                    "SENGKANG EAST AVE"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "163",
                destination: "SENGKANG INT",
                scrolls: [
                    "TOA PAYOH INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "163",
                destination: {
                    text: ">  TOA PAYOH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "SENGKANG EAST AVE",
                    "SENGKANG WEST AVE",
                    "YIO CHU KANG RD",
                    "UPPER THOMSON RD",
                    "BRADDELL RD",
                    "LOR 4 TOA PAYOH"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "163",
                destination: "TOA PAYOH INT",
                scrolls: [
                    "SENGKANG INT"
                ]
            }
        }
    },
    "163M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "163M",
                destination: {
                    text: ">  SENGKANG W. AVE", 
                    font: "LECIP-8"
                },
                scrolls: [
                    "PUNGGOL RD",
                    "SENGKANG EAST AVE",
                    "SENGKANG WEST AVE",
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "163M",
                destination: "SENGKANG WEST AVE",
                scrolls: [
                    "SENGKANG INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "163M",
                destination: {
                    text: ">  SENGKANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "SENGKANG WEST AVE",
                    "SENGKANG EAST AVE",
                    "PUNGGOL RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "163M",
                destination: "SENGKANG INT",
                scrolls: [
                    "SENGKANG INT"
                ]
            }
        }
    },
    165: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "165",
                destination: {
                    text: ">  CLEMENTI INT", 
                    font: "LECIP-8"
                },
                scrolls: [
                    'HOUGANG AVE 8',
                    'ANG MO KIO AVE 3',
                    'UPPER THOMSON RD',
                    "LORNIE RD",
                    'FARRER RD',
                    'HOLLAND RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "165",
                destination: "CLEMENTI INT",
                scrolls: [
                    "HOUGANG CTRL INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "165",
                destination: {
                    text: ">  HOUGANG CTRL INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'HOLLAND RD',
                    'FARRER RD',
                    'UPP THOMSON RD',
                    'ANG MO KIO AVE 3',
                    'HOUGANG AVE 8, 4',
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "165",
                destination: "HOUGANG CTRL INT",
                scrolls: [
                    "CLEMENTI INT"
                ]
            }
        }
    },
    166: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "166",
                destination: {
                    text: ">  CLEMENTI INT", 
                    font: "LECIP-8"
                },
                scrolls: [
                    'THOMSON RD',
                    'STH BRIDGE RD',
                    'TELOK BLANGAH RD',
                    'ALEXANDRA RD',
                    'DOVER RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "166",
                destination: "CLEMENTI INT",
                scrolls: [
                    "ANG MO KIO INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "166",
                destination: {
                    text: ">  ANG MO KIO INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "KAMPONG BAHRU RD",
                    "EU TONG SEN ST",
                    "UPPER THOMSON RD",
                    'DOVER RD',
                    'ALEXANDRA RD',
                    'TELOK BLANGAH RD',
                    'EU TONG SEN ST',
                    'THOMSON RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "166",
                destination: "ANG MO KIO INT",
                scrolls: [
                    "CLEMENTI INT"
                ]
            }
        }
    },
    168: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "168",
                destination: {
                    text: ">  WOODLANDS INT", 
                    font: "LECIP-8"
                },
                scrolls: [
                    "BEDOK NORTH AVE 3",
                    "TAMPINES AVE 4",
                    "TAMPINES AVE 10",
                    "JALAN KAYU",
                    "WOODLANDS AVE 2"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "168",
                destination: "WOODLANDS INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "168",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "WOODLANDS AVE 2",
                    "JALAN KAYU",
                    "TAMPINES AVE 10",
                    "TAMPINES AVE 4",
                    "BEDOK NORTH AVE 3"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "168",
                destination: "BEDOK INT",
                scrolls: [
                    "WOODLANDS INT"
                ]
            }
        }
    },
    170: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "170",
                destination: {
                    text: ">  LARKIN TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BUKIT TIMAH RD",
                    "UPPER BT TIMAH RD",
                    "WOODLANDS RD",
                    "WOODLANDS CTR RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "170",
                destination: "LARKIN TERMINAL",
                scrolls: [
                    "QUEEN STREET TERMINAL",
                    "FU LU SHOU COMPLEX",
                    "ROCHOR STATION",
                    "LITTLE INDIA STATION EXIT A",
                    "OPPOSITE KK WOMEN & CHILD HOPSITAL",
                    "BEFORE WINSTEDT ROAD",
                    "NEWTON FOODCOURT",
                    "NEWTON STATION EXIT C",
                    "BALMORAL PLAZA",
                    "FERRELL RESIDENCES",
                    "LENG KWANG BAPTIST CHURCH",
                    "STEVENS STATION",
                    "BEFORE LEWIS ROAD",
                    "NUS BUKIT TIMAH CAMPUS",
                    "BOTANIC GARDENS STATION",
                    "BEFORE CROWN CENTRE",
                    "CORONATION PLAZA",
                    "TAN KAH KEE STATION",
                    "CHINESE HIGH SCHOOL",
                    "OPPOSITE NATIONAL JC",
                    "SIXTH AVENUE STATION",
                    "SIXTH AVENUE CENTRE",
                    "AFTER MAPLE AVENUE",
                    "THE TESSARINA",
                    "THE NEXUS",
                    "KING ALBERT PARK STATION",
                    "KING ALBERT PARK",
                    "PEI HWA PRESBYTERIAN PRIMARY SCHOOL",
                    "BEAUTY WORLD STATION EXIT B",
                    "WOH HUP BUILDING",
                    "BUKIT REGENCY",
                    "AFTER OLD JURONG ROAD",
                    "HUME PARK CONDO",
                    "OPPOSITE THE RAIL MALL",
                    "HILLVIEW STATION",
                    "OPPOSITE DAIRY FARM ROAD",
                    "OPPOSITE ASSUMPTION ENGLISH SCHOOL",
                    "BEFORE CASHEW STATION",
                    "MIN OF DEFENCE",
                    "OPPOSITE THE LINEAR",
                    "BUKIT PANJANG STATION EXIT B",
                    "JUNCTION 10",
                    "OPPOSITE BLOCK 632 CARPARK",
                    "OPPOSITE BLOCK 635A",
                    "BEFORE YEW TEE FLYOVER",
                    "AFTER YEW TEE FLYOVER",
                    "HEAVY VEHICLE PARK",
                    "YEW TEE INDUSTRIAL ESTATE",
                    "THONG HUAT BROS PTE LTD",
                    "DA DI GLASS",
                    "OPPOSITE MANDAI ESTATE",
                    "BEFORE MANDAI ROAD",
                    "OPPOSITE JALAN BUMBONG",
                    "AFTER LAMP POST 234",
                    "OPPOSITE KRANJI WAR MEMORIAL",
                    "OPPOSITE SINGAPORE TURF CLUB",
                    "OPPOSITE KRANJI STATION",
                    "BEFORE WOODLANDS INDUSTRIAL PARK D STREET 2",
                    "KRANJI LODGE 1",
                    "OPPOSITE GLOBALFOUNDRIES",
                    "BEFORE BKE",
                    "WOODLANDS TRAIN CHECKPOINT",
                    "BLOCK 25",
                    "WOODLANDS CHECKPOINT",
                    "JOHOR BAHRU CHECKPOINT",
                    "LARKIN TERMINAL"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "170",
                destination: {
                    text: ">  QUEEN ST TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "WOODLANDS CTR RD",
                    "WOODLANDS RD",
                    "UPPER BUKIT TIMAH RD",
                    "DUNEARN RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "170",
                destination: "QUEEN STREET TER",
                scrolls: [
                    "LARKIN TER",
                    "QUEEN ST TER"
                ]
            }
        }
    },
    "170X": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "170X",
                destination: {
                    text: ">  JB SENTRAL TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "WOODLANDS RD",
                    "WOODLANDS CROSSING",
                    "JB SENTRAL"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "170X",
                destination: "JB SENTRAL TERMINAL",
                scrolls: [
                    "OPPOSITE KRANJI STATION",
                    "BEFORE WOODLANDS INDUSTRIAL PARK D STREET 2",
                    "KRANJI LODGE 1",
                    "OPPOSITE GLOBALFOUNDRIES",
                    "BEFORE BKE",
                    "WOODLANDS CHECKPOINT",
                    "JOHOR BAHRU CHECKPOINT",
                    "JB SENTRAL TERMINAL"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "170X",
                destination: {
                    text: ">  KRANJI STN",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JB SENTRAL",
                    "WOODLANDS CROSSING",
                    "WOODLANDS RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "170X",
                destination: "WOODLANDS RD",
                scrolls: [
                    "JB SENTRAL TER",
                    "KRANJI STN"
                ]
            }
        }
    },
    174: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "174",
                destination: {
                    text: ">  KAMPONG BAHRU TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BT BATOK E. AVE 3, 6",
                    "JLN JURONG KECHIL",
                    "DUNEARN RD",
                    "FARRER RD",
                    "HOLLAND RD",
                    "ORCHARD RD",
                    "NTH, STH BRIDGE RD",
                    "NTH BRIDGE RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "174",
                destination: "KAMPONG BAHRU TER",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "174",
                destination: {
                    text: ">  BOON LAY INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "EU TONG SEN ST",
                    "ORCHARD BLVD",
                    "HOLLAND RD",
                    "FARRER RD",
                    "BT TIMAH RD",
                    "JLN JURONG KECHIL",
                    "BT BATOK E. AVE 6, 3"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "174",
                destination: "BOON LAY INT",
                scrolls: [
                    "KAMPONG BAHRU TER"
                ]
            }
        }
    },
    175: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "175",
                destination: {
                    text: ">  LOR 1 GEYLANG TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "WEST COAST HIGHWAY",
                    "PASIR PANJANG RD",
                    "ALEXANDRA RD",
                    "JLN BUKIT MERAH",
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "KALLANG BAHRU"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "175",
                destination: "LOR 1 GEYLANG TER",
                scrolls: [
                    "SOON LEE BUS PK"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "175",
                destination: {
                    text: ">  CLEMENTI INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'KALLANG BAHRU',
                    'STAMFORD RD',
                    'ORCHARD BOULEVARD',
                    'JALAN BUKIT MERAH',
                    'ALEXANDRA RD',
                    'PASIR PANJANG RD',
                    'WEST COAST HIGHWAY'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "175",
                destination: "CLEMENTI INT",
                scrolls: [
                    "LOR 1 GEYLANG TER"
                ]
            }
        }
    },
    179: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "179",
                destination: {
                    text: "BOON LAY INT - NTU",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JURONG WEST ST 63",
                    "PIONEER RD NORTH",
                    "LIEN YING CHOW DR",
                    "NANYANG DR"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "179",
                destination: "BOON LAY INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        }
    },
    "179A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "179A",
                destination: {
                    text: "BOON LAY INT - NANYANG DR",
                    font: "LECIP-8"
                },
                scrolls: [
                    "LIEN YING CHOW DR",
                    "NANYANG DR"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "179",
                destination: "BOON LAY INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        }
    },
    181: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "181",
                destination: {
                    text: "BOON LAY INT - JURONG W.",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JURONG WEST ST 64",
                    "JURONG WEST ST 75",
                    'JURONG WEST AVE 5',
                    'JURONG WEST AVE 3'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "181",
                destination: "BOON LAY INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        }
    },
    "181M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "181M",
                destination: {
                    text: "BOON LAY INT-JUR W. ST 23",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JURONG WEST ST 64",
                    "JURONG WEST ST 75",
                    "JURONG WEST AVE 5",
                    "JURONG WEST AVE 3",
                    "JURONG WEST ST 64",
                    "JURONG WEST ST 75",
                    "JURONG WEST AVE 5",
                    "JURONG WEST AVE 3"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "181M",
                destination: "BOON LAY INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        }
    },
    182: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "182",
                destination: {
                    text: ">  TUAS SOUTH AVE 9",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TUAS STH AVE 3",
                    "JALAN AHMAD IBRAHIM",
                    "TUAS STH AVE 3",
                    "TUAS STH AVE 9"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "182",
                destination: "TUAS SOUTH AVE 9",
                scrolls: [
                    "JOO KOON INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "182",
                destination: {
                    text: ">  JOO KOON INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TUAS STH AVE 3",
                    "JALAN AHMAD IBRAHIM",
                    "TUAS STH AVE 3",
                    "TUAS STH AVE 9"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "182",
                destination: "JOO KOON INT",
                scrolls: [
                    "TUAS"
                ]
            }
        }
    },
    "182M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "182M",
                destination: {
                    text: "JOO KOON INT - TUAS STH",
                    font: "LECIP-8"
                },
                scrolls: [
                    'TUAS STH AVE 3',
                    "JALAN AHMAD IBRAHIM",
                    'TUAS STH AVE 3',
                    'TUAS STH AVE 9',
                    'TUAS STH AVE 5'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "182M",
                destination: "TUAS SOUTH AVE 9",
                scrolls: [
                    "JOO KOON INT"
                ]
            }
        }
    },
    185: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "185",
                destination: {
                    text: ">  BUONA VISTA TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'PIONEER RD NTH',
                    'JURONG WEST AVE 5, 3, 1',
                    'JURONG EAST AVE 1',
                    'CLEMENTI AVE 6',
                    "C'WEALTH AVE WEST"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "185",
                destination: "HOLLAND DR",
                scrolls: [
                    "SOON LEE BUS PK"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "185",
                destination: {
                    text: ">  SOON LEE DEPOT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "C'WEALTH AVE WEST",
                    'CLEMENTI AVE 6',
                    'JURONG EAST AVE 1',
                    'JURONG WEST AVE 1, 5, 3',
                    'PIONEER RD NTH'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "185",
                destination: "SOON LEE RD",
                scrolls: [
                    "BLK 10A"
                ]
            }
        }
    },
    186: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "186",
                destination: {
                    text: ">  ST MICHAEL'S TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "UPPER PICKERING ST",
                    "HAVELOCK RD",
                    "ALEXANDRA RD",
                    "QUEENSWAY",
                    "FARRER RD",
                    "BALESTIER RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "186",
                destination: "ST MICHAEL'S TER",
                scrolls: [
                    "SHENTON WAY TER"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "186",
                destination: {
                    text: ">  SHENTON WAY TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BALESTIER RD",
                    "FARRER RD",
                    "QUEENSWAY",
                    "ALEXANDRA RD",
                    "HAVELOCK RD",
                    "UPPER PICKERING ST"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "186",
                destination: "SHENTON WAY TER",
                scrolls: [
                    "ST MICHAEL'S TER"
                ]
            }
        }
    },
    191: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "191",
                destination: {
                    text: "BUONA VISTA - PORTSDOWN RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    'COMMONWEALTH AVE',
                    'NORTH BUONA VISTA RD',
                    'PORTSDOWN RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "191",
                destination: "HOLLAND DR",
                scrolls: [
                    "BLOCK 10A"
                ]
            }
        }
    },
    192: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "192",
                destination: {
                    text: ">  TUAS TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JURONG WEST ST 62",
                    "TUAS AVE 1",
                    'JALAN AHMAD IBRAHIM',
                    "TUAS AVE 12",
                    "PIONEER RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "192",
                destination: "TUAS TER",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "192",
                destination: {
                    text: ">  BOON LAY INTT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "PIONEER RD",
                    "TUAS AVE 1",
                    "JALAN AHMAD IBRAHIM",
                    "UPP JURONG RD",
                    "JURONG WEST ST 62"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "192",
                destination: "BOON LAY INT",
                scrolls: [
                    "TUAS TER"
                ]
            }
        }
    },
    194: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "194",
                destination: {
                    text: ">  TUAS TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JURONG WEST AVE 4",
                    "LOK YANG WAY",
                    "TUAS RD",
                    "TUAS AVE 5, 9",
                    "TUAS WEST DR"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "193",
                destination: "TUAS TER",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "193",
                destination: {
                    text: ">  BOON LAY INTT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TUAS WEST DR",
                    "TUAS AVE 9, 5",
                    "TUAS RD",
                    "LOK YANG WAY",
                    "JURONG WEST AVE 4"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "193",
                destination: "BOON LAY INT",
                scrolls: [
                    "TUAS TER"
                ]
            }
        }
    },
    194: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "194",
                destination: {
                    text: "BOON LAY-JLN AHMAD IBRAHIM",
                    font: "LECIP-8"
                },
                scrolls: [
                    'JALAN AHMAD IBRAHIM'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "194",
                destination: "BOON LAY INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        }
    },
    195: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "195",
                destination: {
                    text: "MARINA CTR - CWEALTH DR",
                    font: "LECIP-8"
                },
                scrolls: [
                    'RIVER VALLEY RD',
                    'TIONG BAHRU RD',
                    'LOWER DELTA RD',
                    'TELOK BLANGAH WAY',
                    'ALEXANDRA RD',
                    'COMMONWEALTH DR'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "195",
                destination: "RAFFLES BLVD",
                scrolls: [
                    "MARINA CTR TER"
                ]
            }
        }
    },
    196: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "196",
                destination: {
                    text: ">  CLEMENTI INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "MOUNTBATTEN RD",
                    "NICOLL HIGHWAY",
                    "JALAN BUKIT MERAH",
                    'BEDOK STH AVE 1',
                    'MARINE PARADE RD',
                    'MOUNTBATTEN RD',
                    'SHENTON WAY',
                    'JLN BUKIT MERAH',
                    'QUEENSWAY',
                    'DOVER RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "196",
                destination: "CLEMENTI INT",
                scrolls: [
                    "BEDOK INT INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "196",
                destination: {
                    text: ">  BEDOK INTT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'DOVER RD',
                    'JLN BUKIT MERAH',
                    'QUEENSWAY',
                    'ROBINSON RD',
                    'MOUNTBATTEN RD',
                    'MARINE PARADE RD',
                    'BEDOK STH AVE 1'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "196",
                destination: "BEDOK INT",
                scrolls: [
                    "CLEMENTI INT"
                ]
            }
        }
    },
    197: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "197",
                destination: {
                    text: ">  JURONG EAST INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BEDOK SOUTH AVE 1',
                    'MARINE PARADE RD',
                    'NTH, STH BRIDGE RD',
                    'JALAN BUKIT MERAH',
                    'JURONG TOWN HALL RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "197",
                destination: "JURONG EAST INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "197",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'JALAN BUKIT MERAH',
                    'EU TONG SEN ST',
                    'MARINE PARADE RD',
                    'BEDOK SOUTH AVE 1'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "197",
                destination: "BEDOK INT",
                scrolls: [
                    "JURONG EAST INT"
                ]
            }
        }
    },
    198: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "198",
                destination: {
                    text: ">  BUKIT MERAH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BOON LAY AVE',
                    'JURONG WEST AVE 1',
                    'JURONG EAST AVE 1',
                    'JURONG TOWN HALL RD',
                    'AYE',
                    'QUEENSWAY'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "198",
                destination: "BUKIT MERAH INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "198",
                destination: {
                    text: ">  BOON LAY INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "QUEENSWAY",
                    "AYE",
                    "JURONG TOWN HALL RD",
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1",
                    "BOON LAY AVE"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "198",
                destination: "BOON LAY INT",
                scrolls: [
                    "BUKIT MERAH INT"
                ]
            }
        }
    },
    199: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "199",
                destination: {
                    text: "BOON LAY INT-NANYANG CRES",
                    font: "LECIP-8"
                },
                scrolls: [
                    'JALAN BAHAR',
                    'NANYANG AVE',
                    'NANYANG CRES',
                    'NANYANG DR'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "199",
                destination: "BOON LAY INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        }
    },
    200: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "200",
                destination: {
                    text: ">  KENT RIDGE TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'HOLLAND DR',
                    'COMMONWEALTH AVE',
                    'NORTH BUONA VISTA RD',
                    'SOUTH BUONA VISTA RD',
                    "PASIR PANJANG RD",
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "200",
                destination: "KENT RIDGE TER",
                scrolls: [
                    "BLK 10A"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "200",
                destination: {
                    text: ">  BUONA VISTA TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    'PASIR PANJANG RD',
                    'SOUTH BUONA VISTA RD',
                    'NORTH BUONA VISTA RD',
                    'COMMONWEALTH AVE',
                    'HOLLAND DR'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "145",
                destination: "HOLLAND DR",
                scrolls: [
                    "KENT RIDGE TER"
                ]
            }
        }
    },
    201: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "201",
                destination: {
                    text: "KENT RIDGE TER - PANDAN GDNS",
                    font: "LECIP-8"
                },
                scrolls: [
                    "WEST COAST RD",
                    "C'WEALTH AVE WEST",
                    "TEBAN GARDENS RD",
                    "PANDAN GARDENS",
                    "C'WEALTH AVE WEST",
                    "WEST COAST RD",
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "201",
                destination: "KENT RIDGE TER",
                scrolls: [
                    "KENT RIDGE TER"
                ]
            }
        }
    },
    222: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "222",
                destination: {
                    text: "BEDOK INT-CHAI CHEE DR",
                    font: "LECIP-8"
                },
                scrolls: [
                    'BEDOK NORTH ST 1',
                    'BEDOK NORTH AVE 3',
                    'BEDOK NORTH RD',
                    'CHAI CHEE RD',
                    'CHAI CHEE ST'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "222",
                destination: "BEDOK INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        }
    },
    228: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "228",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BEDOK NORTH ST 1",
                    "BEDOK NORTH AVE 3",
                    "BEDOK RESERVOIR RD",
                    "BEDOK NORTH AVE 3"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "228",
                destination: "BEDOK INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        }
    },
    229: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "299",
                destination: {
                    text: ">  BEDOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'CHAI CHEE RD',
                    'BEDOK SOUTH RD',
                    'BEDOK SOUTH AVE 3',
                    'UPPER EAST COAST RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "229",
                destination: "BEDOK INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        }
    },
    230: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "230",
                destination: {
                    text: "> CALDECOTT STN",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TOA PAYOH RISE",
                    "LOR 6 TOA PAYOH",
                    "LOR 8, 7 TOA PAYOH",
                    "LOR 6 TOA PAYOH",
                    "TOA PAYOH RISE",
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "230",
                destination: "CALDECOTT STN",
                scrolls: [
                    "CALDECOTT STN"
                ]
            }
        }
    },
    231: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "231",
                destination: {
                    text: ">  TOA PAYOH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'LOR 1 TOA PAYOH',
                    'LOR 4 TOA PAYOH',
                    'LOR 5 TOA PAYOH'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "231",
                destination: "TOA PAYOH INT",
                scrolls: [
                    "TOA PAYOH INT"
                ]
            }
        }
    },
    241: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "241",
                destination: {
                    text: ">  BOON LAY INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JURONG WEST ST 63",
                    "PIONEER RD NORTH",
                    "JURONG WEST ST 91"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "241",
                destination: "BOON LAY INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        }
    },
    242: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "242",
                destination: {
                    text: ">  BOON LAY INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JURONG WEST CENTRAL 1",
                    "JALAN BOON LAY",
                    "JURONG WEST AVE 4",
                    "JURONG WEST ST 72",
                    "JURONG WEST AVE 5",
                    "JURONG WEST AVE 4",
                    "JALAN BOON LAY"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "242",
                destination: "BOON LAY INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        }
    },
    246: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "246",
                destination: {
                    text: ">  BOON LAY INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'CHIN BEE DR',
                    'TAH CHING RD',
                    'BOON LAY DR',
                    "YUAN CHING RD",
                    'JALAN TUKANG'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "246",
                destination: "BOON LAY INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        }
    },
    247: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "247",
                destination: {
                    text: "TUAS TER-TUAS BAY LINK",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TUAS LINK 4",
                    "TUAS AVE 7",
                    "TUAS CRES",
                    "TUAS STH AVE 5, 4, 7",
                    "TUAS STH AVE 3, 9, 8",
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "247",
                destination: "TUAS TER",
                scrolls: [
                    "TUAS TER"
                ]
            }
        }
    },
    248: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "248",
                destination: {
                    text: "TUAS TER-TUAS STH AVE 14",
                    font: "LECIP-8"
                },
                scrolls: [
                    "PIONEER RD",
                    "TUAS AVE 20",
                    "TUAS STH AVE 5",
                    "TUAS STH AVE 9",
                    "TUAS STH AVE 10"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "248",
                destination: "TUAS TER",
                scrolls: [
                    "TUAS TER"
                ]
            }
        }
    },
    "248M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "248M",
                destination: {
                    text: "TUAS TER-TUAS STH WAY",
                    font: "LECIP-8"
                },
                scrolls: [
                    "PIONEER RD",
                    "TUAS AVE 20",
                    "TUAS STH AVE 5",
                    "TUAS STH AVE 14",
                    "TUAS SOUTH WAY",
                    "TUAS STH AVE 9",
                    "TUAS STH AVE 10",
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "248M",
                destination: "TUAS TER",
                scrolls: [
                    "TUAS TER"
                ]
            }
        }
    },
    249: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "249",
                destination: {
                    text: ">  BOON LAY INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JALAN BOON LAY",
                    "JURONG PIER RD",
                    "TANJONG KLING RD",
                    "SHIPYARD RD",
                    "JALAN SAMULUN",
                    "SHIPYARD RD",
                    "TANJONG KLING RD",
                    "JURONG PIER RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "249",
                destination: "BOON LAY INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        }
    },
    251: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "251",
                destination: {
                    text: "BOON LAY INT-SHIPYARD RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BOON LAY WAY",
                    "PIONEER RD NTH",
                    "SHIPYARD RD",
                    "PIONEER RD NTH"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "251",
                destination: "BOON LAY INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        }
    },
    252: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "252",
                destination: {
                    text: ">  BOON LAY INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "INTERNATIONAL RD",
                    "JOO KOON CIRCLE",
                    "JOO KOON RD",
                    "JOO KOON WAY",
                    "JOO KOON RD",
                    "JOO KOON CIRCLE",
                    "INTERNATIONAL RD",
                    "ENTERPRISE RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "252",
                destination: "BOON LAY INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        }
    },
    253: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "253",
                destination: {
                    text: "JOO KOON INT - BENOI RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    "PIONEER RD",
                    "BENOI RD",
                    "PIONEER RD",
                    "BENOI SECTOR"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "253",
                destination: "JOO KOON INT",
                scrolls: [
                    "JOO KOON INT"
                ]
            }
        }
    },
    254: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "253",
                destination: {
                    text: "JOO KOON INT-TUAS AVE 11",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TUAS RD",
                    "TUAS BASIN LINK",
                    "BENOI RD",
                    "PIONEER RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "254",
                destination: "JOO KOON INT",
                scrolls: [
                    "JOO KOON INT"
                ]
            }
        }
    },
    255: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "255",
                destination: {
                    text: ">  JOO KOON INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "GUL AVE",
                    "GUL CIRCLE",
                    "GUL CRES"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "255",
                destination: "JOO KOON INT",
                scrolls: [
                    "JOO KOON INT"
                ]
            }
        }
    },
    256: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "256",
                destination: {
                    text: "BOON LAY INT - JOO KOON",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JURONG WEST ST 62",
                    "PIONEER RD NTH",
                    "JOO KOON CIRCLE",
                    "PIONEER RD NTH",
                    "JURONG WEST ST 62",
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "256",
                destination: "JOO KOON INT",
                scrolls: [
                    "JOO KOON INT"
                ]
            }
        }
    },
    262: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "262",
                destination: {
                    text: ">  ANG MO KIO INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ANG MO KIO AVE 8',
                    'ANG MO KIO AVE 1',
                    'ANG MO KIO ST 11',
                    'ANG MO KIO AVE 2'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "262",
                destination: "ANG MO KIO INT",
                scrolls: [
                    "ANG MO KIO INT"
                ]
            }
        }
    },
    272: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "272",
                destination: {
                    text: ">  BUKIT MERAH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "HENDERSON RD",
                    "TELOK BLANGAH CRES"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "272",
                destination: "TELOK BLANGAH CRES",
                scrolls: [
                    "BT MERAH INT",
                    "AFT BT MERAH CTRL",
                    "BLK 1",
                    "BLK 25",
                    "BLK 28",
                    "BLK 36 MKT/FC",
                    "BLK 41",
                    "BLK 40",
                    "BLK 27",
                    "BLK 10",
                    "BLK 11",
                    "OPP BLK 1",
                    "BEF BT MERAH CTRL",
                    "BT MERAH INT"
                ]
            }
        }
    },
    272: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "273",
                destination: {
                    text: ">  BUKIT MERAH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "HENDERSON RD",
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH ST 32",
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "273",
                destination: "TELOK BLANGAH HTS",
                scrolls: [
                    "BUKIT MERAH INT"
                ]
            }
        }
    },
    275: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "275",
                destination: {
                    text: ">  BUKIT MERAH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'JALAN BUKIT MERAH',
                    'LOWER DELTA RD',
                    'BUKIT PURMEI AVE',
                    'LOWER DELTA RD',
                    'JALAN BUKIT MERAH'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "275",
                destination: "BT MERAH INT",
                scrolls: [
                    "BUKIT MERAH INT",
                    "BLK 119",
                    "OPP CENDEX CTR",
                    "OPP ST THERESA'S CONVENT",
                    "OPP BLK 109",
                    "BLK 109",
                    "ST THERESA'S CONVENT",
                    "CENDEX CTR",
                    "OPP BLK 120"
                ]
            }
        }
    },
    291: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "291",
                destination: {
                    text: ">  TAMPINES ST 83 & 33",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES ST 83",
                    "TAMPINES ST 81",
                    "TAMPINES ST 21",
                    "TAMPINES ST 32",
                    "TAMPINES ST 21"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "291",
                destination: "TAMPINES INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        }
    },
    "291T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "291T",
                destination: {
                    text: ">  TAMPINES ST 83 & 33",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES ST 83",
                    "TAMPINES ST 81",
                    "TAMPINES ST 21",
                    "TAMPINES ST 32",
                    "TAMPINES ST 21"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "291T",
                destination: "TAMPINES INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        }
    },
    292: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "292",
                destination: {
                    text: ">  TAMPINES INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES AVE 2",
                    "TAMPINES ST 22",
                    "TAMPINES AVE 2",
                    "TAMPINES ST 11"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "292",
                destination: "TAMPINES INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        }
    },
    293: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "293",
                destination: {
                    text: ">  TAMPINES ST 71 & AVE 7",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 4 & 3",
                    "TAMPINES AVE 8 & 9",
                    "TAMPINES ST 45&42",
                    "TAMPINES AVE 4 & 3"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "293",
                destination: "TAMPINES INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        }
    },
    "293T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "293T",
                destination: {
                    text: ">  TAMPINES ST 71 & AVE 7",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 4 & 3",
                    "TAMPINES AVE 8 & 9",
                    "TAMPINES ST 45&42",
                    "TAMPINES AVE 4 & 3"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "293",
                destination: "TAMPINES INT",
                scrolls: [
                    "TAMPINES INT"
                ]
            }
        }
    },
    296: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "296",
                destination: {
                    text: "TAMP INT - TAMP NTH DR 2",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES AVE 6",
                    "TAMPINES NORTH DR 1",
                    "TAMPINES ST 64"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "296",
                destination: "TAMPINES INT",
                scrolls: [
                    "IKEA TAMPINES"
                ]
            }
        }
    },
    298: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "298",
                destination: {
                    text: "TAMP NORTH INT-TAMP ST 86",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES ST 62",
                    "TAMPINES NORTH DR 2",
                    "TAMPINES CONCOURSE",
                    "TAMPINES AVE 4",
                    "TAMPINES AVE 3"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "298",
                destination: "TAMPINES NORTH INT",
                scrolls: [
                    "TAMPINES NORTH INT"
                ]
            }
        }
    },
    "298T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "298",
                destination: {
                    text: "TAMP CONCOURSE INT-TAMP ST 86",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TAMPINES CENTRAL 1",
                    "TAMPINES AVE 4",
                    "TAMPINES AVE 3"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "298",
                destination: "TAMPINES CONCOURSE INT",
                scrolls: [
                    "TAMPINES CONCOURSE INT"
                ]
            }
        }
    },
    315: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "315",
                destination: {
                    text: ">  SERANGOON NTH AVE 5",
                    font: "LECIP-8"
                },
                scrolls: [
                    'LORONG CHUAN',
                    'SERANGOON GARDEN WAY',
                    'SERANGOON NORTH AVE 1',
                    'SERANGOON NORTH AVE 4',
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "315",
                destination: "S'GOON NORTH AVE 5",
                scrolls: [
                    "SERANGOON INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "315",
                destination: {
                    text: ">  SERANGOON INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'ANG MO KIO AVE 3',
                    'SERANGOON NORTH 1',
                    'SERANGOON GARDEN WAY',
                    'LORONG CHUAN'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "315",
                destination: "SERANGOON INT",
                scrolls: [
                    "SERANGOON INT"
                ]
            }
        }
    },
    317: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "317",
                destination: {
                    text: ">  BERWICK DR",
                    font: "LECIP-8"
                },
                scrolls: [
                    'UPPER SERANGOON RD',
                    'YIO CHU KANG LINK',
                    'SERANGOON GARDEN WAY',
                    'CHARTWELL DR',
                    'BURGHLEY DR'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "317",
                destination: "BERWICK DR",
                scrolls: [
                    "SERANGOON INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "317",
                destination: {
                    text: ">  SERANGOON INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'TAVISTOCK AVE',
                    'HEMSLEY AVE',
                    'KENSINGTON PARK RD',
                    'SERANGOON GARDEN WAY',
                    'YIO CHU KANG LINK',
                    'UPP SERANGOON RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "317",
                destination: "SERANGOON INT",
                scrolls: [
                    "SERANGOON INT"
                ]
            }
        }
    },
    324: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "324",
                destination: {
                    text: ">  HOUGANG CTRL INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'UPP SERANGOON RD',
                    'UPP SERANGOON CRES',
                    'UPP SERANGOON VIEW',
                    'UPP SERANGOON RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "324",
                destination: "HOUGANG CTRL INT",
                scrolls: [
                    "HOUGANG CTRL INT"
                ]
            }
        }
    },
    325: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "325",
                destination: {
                    text: ">  HOUGANG AVE 9",
                    font: "LECIP-8"
                },
                scrolls: [
                    'UPP SERANGOON RD',
                    'HOUGANG AVE 2, 10, 8',
                    'HOUGANG ST 51',
                    'BUANGKOK GREEN'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "325",
                destination: "HOUGANG CTRL INT",
                scrolls: [
                    "HOUGANG CTRL INT"
                ]
            }
        }
    },
    329: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "329",
                destination: {
                    text: "HOUGANG CTRL INT-BUANGKOK CRES",
                    font: "LECIP-8"
                },
                scrolls: [
                    "HOUGANG AVE 4,9",
                    "HOUGANG ST 91,93",
                    "BUANGKOK LINK"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "329",
                destination: "HOUGANG CTRL INT",
                scrolls: [
                    "HOUGANG CTRL INT"
                ]
            }
        }
    },
    371: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "371",
                destination: {
                    text: ">  SENGKANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "COMPASSVALE RD",
                    "RIVERVALE DR",
                    "RIVERVALE CRES",
                    "COMPASSVALE ST"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "371",
                destination: "SENGKANG INT",
                scrolls: [
                    "COMPASSVALE INT"
                ]
            }
        }
    },
    372: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "372",
                destination: {
                    text: ">  SENGKANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'SENGKANG EAST WAY',
                    'ANCHORVALE DR',
                    'PUNGGOL DR',
                    'COMPASSVALE RD',
                    'ANCHORVALE RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "372",
                destination: "SENGKANG INT",
                scrolls: [
                    "COMPASSVALE INT"
                ]
            }
        }
    },
    374: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "374",
                destination: {
                    text: ">  COMPASSVALE INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "SENGKANG EAST WAY",
                    "ANCHORVALE CRES",
                    "COMPASSVALE RD",
                    "SENGKANG EAST WAY",
                    "FERNVALE RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "374",
                destination: "COMPASSVALE INT",
                scrolls: [
                    "COMPASSVALE INT"
                ]
            }
        }
    },
    400: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "400",
                destination: {
                    text: "SHENTON WAY - M. COASTAL",
                    font: "LECIP-8"
                },
                scrolls: [
                    "MARINA BOULEVARD",
                    "MARINA GDNS DR",
                    "MARINA COSTAL DR",
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "400",
                destination: "SHENTON WAY TER",
                scrolls: [
                    "SHENTON WAY TER"
                ]
            }
        }
    },
    401: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "401",
                destination: {
                    text: "BEDOK INT - FORT RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    'EAST COAST PARK SVC RD',
                    'MARINE PARADE RD',
                    'TANJONG KATONG RD',
                    'OLD AIRPORT RD',
                    'FORT RD',
                    'EAST COAST PARK SVC RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "401",
                destination: "BEDOK INT",
                scrolls: [
                    "BEDOK INT"
                ]
            }
        }
    },
    405: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "405",
                destination: {
                    text: "BOON LAY INT-OLD CCK RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JURONG WEST CENTRAL 1",
                    "JALAN BOON LAY",
                    "JALAN BAHAR",
                    "OLD CHOA CHU KANG RD",
                    "JALAN BAHAR",
                    "JALAN BOON LAY",
                    "JURONG WEST CENTRAL 1"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "405",
                destination: "BOON LAY INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        }
    },
    "405M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "405M",
                destination: {
                    text: "BOON LAY - OLD CCK RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JURONG WEST CENTRAL 1",
                    "JALAN BOON LAY",
                    "JALAN BAHAR",
                    "OLD CHOA CHU KANG RD",
                    "JALAN BAHAR",
                    "JALAN BOON LAY",
                    "JURONG WEST CENTRAL 1"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "405M",
                destination: "BOON LAY INT",
                scrolls: [
                    "BOON LAY INT"
                ]
            }
        }
    },
    770: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "170A",
                destination: {
                    text: ">  WOODLANDS TRAIN CHECKPT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BUKIT TIMAH RD",
                    "UPPER BT TIMAH RD",
                    "WOODLANDS RD",
                    "WOODLANDS CTR RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "170A",
                destination: "WOODLANDS CTR RD",
                scrolls: [
                    "WOODLANDS TRAIN CHECKPOINT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "170A",
                destination: {
                    text: ">  QUEEN ST TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "WOODLANDS CTR RD",
                    "WOODLANDS RD",
                    "UPPER BUKIT TIMAH RD",
                    "DUNEARN RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "170A",
                destination: "QUEEN STREET TER",
                scrolls: [
                    "WOODLANDS TRAIN CHECKPOINT",
                    "QUEEN ST TER"
                ]
            }
        }
    },
    800: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "800",
                destination: {
                    text: "YISHUN INT - SEMBAWANG RD",
                    font: "LECIP-8"
                },
                scrolls: [
                    "YISHUN AVE 7",
                    "SEMBAWANG RD",
                    "YISHUN ST 71",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "801",
                destination: "YISHUN INT",
                scrolls: [
                    "YISHUN INT"
                ]
            }
        }
    },
    803: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "803",
                destination: {
                    text: "YISHUN INT - YISHUN AVE 6",
                    font: "LECIP-8"
                },
                scrolls: [
                    "YISHUN AVE 6",
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "801",
                destination: "YISHUN INT",
                scrolls: [
                    "YISHUN INT"
                ]
            }
        }
    },
    804: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "804",
                destination: {
                    text: "YISHUN INT - YISHUN AVE 6",
                    font: "LECIP-8"
                },
                scrolls: [
                    "YISHUN AVE 2",
                    "YISHUN RING RD",
                    "YISHUN ST 41",
                    "YISHUN AVE 1",
                    "YISHUN AVE 11",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "804",
                destination: "YISHUN INT",
                scrolls: [
                    "YISHUN INT"
                ]
            }
        }
    },
    805: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "805",
                destination: {
                    text: "YISHUN INT - YISHUN AVE 1",
                    font: "LECIP-8"
                },
                scrolls: [
                    "YISHUN AVE 2",
                    "YISHUN AVE 4",
                    "YISHUN AVE 1",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "805",
                destination: "YISHUN INT",
                scrolls: [
                    "YISHUN INT"
                ]
            }
        }
    },
    806: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "806",
                destination: {
                    text: "YISHUN INT - YISHUN AVE 6",
                    font: "LECIP-8"
                },
                scrolls: [
                    "YISHUN CENTRAL",
                    "YISHUN AVE 11",
                    "YISHUN AVE 6",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "806",
                destination: "YISHUN INT",
                scrolls: [
                    "YISHUN INT"
                ]
            }
        }
    },
    807: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "807",
                destination: {
                    text: "YISHUN INT - YISHUN ST 71",
                    font: "LECIP-8"
                },
                scrolls: [
                    "YISHUN RING RD",
                    "YISHUN AVE 9",
                    "YISHUN RING RD",
                    "YISHUN AVE 5",
                    "SEMBAWANG RD",
                    "YISHUN ST 71"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "807",
                destination: "YISHUN INT",
                scrolls: [
                    "YISHUN INT"
                ]
            }
        }
    },
    811: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "811",
                destination: {
                    text: ">  YISHUN AVE 5 & 1",
                    font: "LECIP-8"
                },
                scrolls: [
                    "YISHUN AVE 9,6,7",
                    "SEMBAWANG RD",
                    "YISHUN AVE 5,2",
                    "YISHUN RING RD",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "811",
                destination: "YISHUN INT",
                scrolls: [
                    "YISHUN INT"
                ]
            }
        }
    },
    812: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "812",
                destination: {
                    text: ">  YISHUN AVE 4 & 3",
                    font: "LECIP-8"
                },
                scrolls: [
                    "YISHUN ST 61",
                    "YISHUN AVE 2",
                    "YISHUN RING RD",
                    "YISHUN CENTRAL"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "812",
                destination: "YISHUN INT",
                scrolls: [
                    "YISHUN INT"
                ]
            }
        }
    },
    851: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "851",
                destination: {
                    text: ">  BUKIT MERAH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    'YISHUN AVE 2',
                    'LENTOR AVE',
                    'ANG MO KIO AVE 6',
                    'ANG MO KIO AVE 5',
                    'MARYMOUNT RD',
                    'THOMSON RD',
                    'VICTORIA ST',
                    'NEW BRIDGE RD',
                    'TIONG BAHRU RD'
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "851",
                destination: "BUKIT MERAH INT",
                scrolls: [
                    "YISHUN INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "851",
                destination: {
                    text: ">  YISHUN INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "TIONG BAHRU RD",
                    'EU TONG SEN ST',
                    "VICTORIA ST",
                    "THOMSON RD",
                    "MARYMOUNT RD",
                    "ANG MO KIO AVE 5",
                    "ANG MO KIO AVE 6",
                    "LENTOR AVE",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "851",
                destination: "YISHUN INT",
                scrolls: [
                    "BUKIT MERAH INT"
                ]
            }
        }
    },
    852: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "852",
                destination: {
                    text: ">  BUKIT BATOK INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "YISHUN AVE 2",
                    "LENTOR AVE",
                    "ANG MO KIO AVE 6",
                    "LORNIE RD",
                    "BUKIT TIMAH RD",
                    "UPP BUKIT TIMAH RD",
                    "BUKIT BATOK E. AVE 6"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "852",
                destination: "BUKIT BATOK INT",
                scrolls: [
                    "YISHUN INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "852",
                destination: {
                    text: ">  YISHUN INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BUKIT BATOK E. AVE 6",
                    "UPP BUKIT TIMAH RD",
                    "DUNEARN RD",
                    "LORNIE RD",
                    "MARYMOUNT RD",
                    "ANG MO KIO AVE 6",
                    "LENTOR AVE",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "852",
                destination: "YISHUN INT",
                scrolls: [
                    "BUKIT MERAH INT"
                ]
            }
        }
    },
    860: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "860",
                destination: {
                    text: ">  YISHUN INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "UPPER THOMSON RD",
                    "ANG MO KIO AVE 5",
                    "YISHUN RING RD",
                    "YISHUN AVE 3"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "860",
                destination: "YISHUN INT",
                scrolls: [
                    "YIO CHU KANG INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "860",
                destination: {
                    text: ">  YIO CHU KANG INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "YISHUN RING RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD",
                    "YISHUN AVE 3"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "860",
                destination: "YIO CHU KANG INT",
                scrolls: [
                    "YISHUN INT"
                ]
            }
        }
    },
    974: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: {
                    text: ">  BUKIT PANJANG STN",
                    font: "LECIP-8"
                },
                scrolls: [
                    "UPPER JURONG RD",
                    "JURONG WEST ST 64",
                    "JALAN BOON LAY",
                    "CHOA CHU KANG WAY"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "974",
                destination: "BUKIT PANJANG STN",
                scrolls: [
                    "JOO KOON INT"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: {
                    text: ">  JOO KOON INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "CHOA CHU KANG WAY",
                    "JALAN BOON LAY",
                    "JURONG WEST ST 64",
                    "UPPER JURONG RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "974",
                destination: "JOO KOON INT",
                scrolls: [
                    "JOO KOON INT"
                ]
            }
        }
    },
    993: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "993",
                destination: {
                    text: "JURONG E. - BT BATOK W. AVE 8",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BOON LAY WAY",
                    "JURONG TOWN HALL RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK RD"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "993",
                destination: "JURONG EAST INT",
                scrolls: [
                    "JURONG EAST INT"
                ]
            }
        }
    },
    "9999A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "T10",
                destination: {
                    text: ">  KOTA TINGGI",
                    font: "LECIP-8"
                },
                scrolls: [
                    "JALAN YAHA AWAL",
                    "LARKIN TERMINAL",
                    "JALAN TAMPOI",
                    "TEBRAU HIGHWAY",
                    "JALAN KOTA TINGGI",
                    "ULU TIRAM TERMINAL",
                    "JALAN JOHOR"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "T10",
                destination: "KOTA TINGGI",
                scrolls: [
                    "JB SENTRAL TER",
                    "LARKIN TER",
                    "OPP PARAGON MARKET PLACE",
                    "AEON TEBRAU / BEF IKEA",
                    "ULU TIRAM TER",
                    "KOTA TINGGI TER",
                ]
            }
        }
    },
    "9999B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "420",
                destination: {
                    text: ">  PANDAN INDAH",
                    font: "LECIP-8"
                },
                scrolls: [
                    "MALURI",
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "300",
                destination: "PANDAN INDAH",
                scrolls: [
                    "MALURI",
                ]
            }
        }
    }
}
