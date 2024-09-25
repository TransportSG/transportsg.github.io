EDSFormats.SBST = {
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Hanover-19:11",
            spacing: {
                $$cond: {
                    "$spacing === undefined" : 3,
                    "else": "$spacing"
                }
            }
        },
        destination: {
            align: "left,bottom",
            margin: {
                bottom: {
                    $$cond: {
                        "$destinationFont |== 'Hanover-10'": 0,
                        "else": 2
                    }
                }
            },
            text: "$destination",
            font: "$destinationFont",
            spacing: {
                $$cond: {
                    "$destinationFont |== 'Hanover-10'": 2,
                    "$destinationFont |== 'Hanover-8'": 1,
                    "$destinationFont |== 'Hanover-7:3'": 1,
                    "else": 1
                }
            }
        },
        scroll: {
            align: "left,top",
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$serviceNumber+'\n'+$destination" // format to tts for now, check sbst later hopefully if no one kena pok
    },
    logo: {
        logo: {
            align: "centre-x",
            image: "$image"
        },

        text: "$text"
    },
    logoSvc: {
        logo: {
            align: "left",
            image: "$image",
        },
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Hanover-19:11",
            spacing: 2
        },

        text: "$serviceNumber+'\n'+$destination"
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
    brandedSvc: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Hanover-19:11",
            spacing: 2
        },
        branding: {
            align: "left",
            text: "$branding",
            font: "$font",
            spacing: '$spacing'
        },

        text: "$serviceNumber+'\n'+$branding"
    },
    twoline: {
        top: {
            align: "centre-x,top",
            text: "$top",
            font: "$topFont",
            spacing: "$topSpacing",
            margin: {top: 1}
        },
        bottom: {
            align: "centre-x,bottom",
            text: "$bottom",
            font: "$bottomFont",
            spacing: "$bottomSpacing",
            margin: {bottom: 1}
        },
        text: "$top+'\n'+$bottom"
    },
    rearService: {
        serviceNumber: {
            align: "centre-x,centre-y",
            text: "$serviceNumber",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$serviceNumber"
    },
    holidayMessage: {
        image: {
            align: "left",
            image: {
                $$cond: {
                    "$image === null": "blank",
                    "else": "$image"
                }
            }
        },
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Hanover-19:11;Space-Width=1",
            spacing: 2 // Just to trigger people HAHAHAHA
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: "$topFont",
            spacing: "$topSpacing",
            margin: {
                top: {
                    $$cond: {
                        "$topMargin !== null": "$topMargin",
                        "$bottom === ''": -2,
                        "else": 1
                    }
                },
                right: 'width(serviceNumber) - width(image)'
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: {
                $$cond: {
                    "$bottom !== null": "$bottom",
                    "else": "''"
                }
            },
            font: {
                $$cond: {
                    "$bottomFont !== null": "$bottomFont",
                    "else": "Mobitec-6:5"
                }
            },
            spacing: "$bottomSpacing",
            margin: {
                bottom: 1,
                right: 'width(serviceNumber) - width(image)'
            }
        },
        text: "$top"
    }
}

EDSData.SBST = {
    1234 : {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "SPECIAL MESSAGE TESTING",
                destinationFont: "Hanover-10",
                scrolls: [
                    {
                        renderType: "holidayMessage",
                        serviceNumber: "OFF",
                        image: "fireworks",

                        top: "HAPPY NEW YEAR",
                        topFont: "Hanover-8"
                    },
                    {
                        renderType: "holidayMessage",
                        serviceNumber: "OFF",
                        image: "ingot",

                        top: "HAPPY",
                        topFont: "Hanover-7:5",

                        bottom: "CHINESE NEW YEAR",
                        bottomFont: "Hanover-7:5"
                    },
                    {
                        renderType: "holidayMessage",
                        serviceNumber: "OFF",
                        image: "ingot",

                        top: "新年快乐",
                        topMargin: 0,
                        topFont: "Chinese-18"
                    },
                    {
                        renderType: "holidayMessage",
                        serviceNumber: "OFF",
                        image: "fireworks",

                        top: "Happy National Day",
                        topFont: "Hanover-7:3",

                        bottom: "Singapore!",
                        bottomFont: "Hanover-7:5"
                    },
                    {
                        renderType: "holidayMessage",
                        serviceNumber: "OFF",

                        top: "Be Kind, Be Great !",
                        topFont: "Hanover-12:3",
                        topSpacing: 2
                    },
                ],
                scrollFont: "Hanover-7:5"
            }
        },
    },
    5: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "5",
                destination: "> BUKIT MERAH INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "UPPER CHANGI RD EAST",
                    "BEDOK RESERVOIR RD",
                    "THOMSON RD",
                    "SCOTTS RD",
                    "TIONG BAHRU RD",
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "5",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "5",
                destination: "> PASIR RIS INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "TIONG BAHRU RD",
                    "SCOTTS RD",
                    "THOMSON RD",
                    "BEDOK RESERVOIR RD",
                    "UPPER CHANGI RD EAST"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "5",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },    
    16: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "16",
                destination: "> BUKIT MERAH INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "UPPER EAST COAST RD",
                    "MARINE PARADE RD",
                    "JOO CHIAT RD",
                    "SOMERSET RD",
                    "TIONG BAHRU RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "16",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "16",
                destination: "> BEDOK INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "TIONG BAHRU RD",
                    "ORCHARD RD",
                    "JOO CHIAT RD",
                    "MARINE PARADE RD",
                    "UPPER EAST COAST RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "16",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    "16M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "16M",
                destination: "> BUKIT MERAH INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "UPPER EAST COAST RD",
                    "MARINE PARADE RD",
                    "JOO CHIAT RD",
                    "SOMERSET RD",
                    "TIONG BAHRU RD",
                    "JALAN BUKIT MERAH"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "16M",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "16M",
                destination: "> BEDOK INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "JALAN BUKIT MERAH",
                    "TIONG BAHRU RD",
                    "ORCHARD RD",
                    "JOO CHIAT RD",
                    "MARINE PARADE RD",
                    "UPPER EAST COAST RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "16M",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },      
    50: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "50",
                destination: "> PUNGGOL INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "ANG MO KIO AVE 8",
                    "ANG MO KIO AVE 5",
                    "YIO CHU KANG RD",
                    "SENGKANG WEST AVE",
                    "SENGKANG EAST WAY",
                    "PUNGGOL DR"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "50",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "50",
                destination: "> BISHAN INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "PUNGGOL DR",
                    "SENGKANG EAST WAY",
                    "SENGKANG WEST AVE",
                    "YIO CHU KANG RD",
                    "ANG MO KIO AVE 5",
                    "ANG MO KIO AVE 8"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "50",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    52: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "52",
                destination: "> JURONG EAST INT",
                destinationFont: "Hanover-10",
                scrolls: [,
                    'SIN MING AVE',
                    'UPPER THOMSON RD',
                    'LORNIE RD',
                    'CLEMENTI RD',
                    "COMMONWEALTH AVE WEST",
                    'TOH GUAN RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "52",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "52",
                destination: "> BISHAN INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    'TOH GUAN RD',
                    "COMMONWEALTH AVE WEST",
                    'CLEMENTI RD',
                    'LORNIE RD',
                    'UPPER THOMSON RD',
                    'SIN MING AVE'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "52",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    }, 
    53: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "53",
                destination: "> CHANGI AIRPORT",
                destinationFont: "Hanover-10",
                scrolls: [,
                    "BISHAN RD",
                    "SERANGOON CENTRAL",
                    "LOR AH SOO",
                    "HOUGANG AVE 1",
                    "PASIR RIS DR 1"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "53",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "53",
                destination: "> BISHAN INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "PASIR RIS DR 1",
                    "HOUGANG AVE 1",
                    "LOR AH SOO",
                    "SERANGOON CENTRAL",
                    "BISHAN RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "53",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    57: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "57",
                destination: "> BUKIT MERAH INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    'LOR 6 TOA PAYOH',
                    'THOMSON RD',
                    'SHENTON WAY',
                    'TELOK BLANGAH RD',
                    'DEPOT RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "57",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "57",
                destination: "> BISHAN INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    'DEPOT RD',
                    'TELOK BLANGAH RD',
                    'CECIL ST',
                    'THOMSON RD',
                    'LOR 6 TOA PAYOH'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "57",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    }, 
    58: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "58",
                destination: "> PASIR RIS INT",
                destinationFont: "Hanover-10",
                scrolls: [,
                    'SERANGOON AVE 3',
                    'SERANGOON AVE 2',
                    'UPP PAYA LEBAR RD',
                    'UBI AVE 3',
                    'KAKI BUKIT AVE 1',
                    'TAMPINES AVE 10',
                    'PASIR RIS DR 12, 3',
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "58",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "58",
                destination: "> BISHAN INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    'PASIR RIS DR 3, 12',
                    'TAMPINES AVE 10',
                    'KAKI BUKIT AVE 1',
                    'UBI AVE 3',
                    'UPP PAYA LEBAR RD',
                    'SERANGOON AVE 2',
                    'SERANGOON AVE 3'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "58",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    }, 
    59: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "59",
                destination: "> CHANGI VILLAGE TER",
                destinationFont: "Hanover-10",
                scrolls: [,
                    "LOR 1 TOA PAYOH",
                    "KAKI BUKIT AVE 1",
                    "BEDOK RESERVOIR RD",
                    "TAMPINES AVE 2",
                    "LOYANG AVE"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "59",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "59",
                destination: "> BISHAN INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "LOYANG AVE",
                    "TAMPINES AVE 2",
                    "BEDOK RESERVOIR RD",
                    "KAKI BUKIT AVE 1",
                    "LOR 1 TOA PAYOH"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "59",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    64: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "64",
                destination: "> MEI LING ST",
                destinationFont: "Hanover-10",
                scrolls: [
                    "ALJUNIED RD",
                    "BENDEMEER RD",
                    "JALAN BESAR",
                    "CLEMENCEAU AVE",
                    "TIONG BAHRU RD",
                    "STIRLING RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "64",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "64",
                destination: "> SIMS PLACE TER",
                destinationFont: "Hanover-10",
                scrolls: [
                    "ALEXANDRA RD",
                    "TIONG BAHRU RD",
                    "CLEMENCEAU AVE",
                    "SELEGIE RD",
                    "SERANGOON RD",
                    "ALJUNIED RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "64",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },  
    65: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "65",
                destination: "> HARBOURFRONT INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "BEDOK RESERVOIR RD",
                    "UBI AVE 2",
                    "MACPHERSON RD",
                    "BENDEMEER RD",
                    "JALAN BESAR",
                    "ORCHARD BOULEVARD",
                    "LOWER DELTA RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "65",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "65",
                destination: "> TAMPINES INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "LOWER DELTA RD",
                    "ORCHARD RD",
                    "SELEGIE RD",
                    "SERANGOON RD",
                    "MACPHERSON RD",
                    "UBI AVE 2",
                    "BEDOK RESERVOIR RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "65",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },      
    88: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "88",
                destination: "> TOA PAYOH INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    'PASIR RIS DR 3',
                    'PUNGGOL RD',
                    'HOUGANG AVE 8',
                    'ANG MO KIO AVE 5',
                    'BISHAN ST 22'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "88",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "88",
                destination: "> PASIR RIS INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    'BISHAN ST 22',
                    'ANG MO KIO AVE 5',
                    'HOUGANG AVE 8',
                    'PUNGGOL RD',
                    'PASIR RIS DR 3'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "88",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    90: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "90",
                destination: "TOA PAYOH INT-AIRPORT RD",
                destinationFont: "Hanover-7:3",
                scrolls: [
                    "LOR 6 TOA PAYOH",
                    "JALAN TOA PAYOH",
                    "MACPHERSON RD",
                    "AIRPORT RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "90",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    93: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "93",
                destination: "> EUNOS INT",
                destinationFont: "Hanover-10",
                scrolls: [,
                    'ALEXANDRA RD',
                    'FARRER RD',
                    'BRADDELL RD',
                    'BARTLEY RD',
                    'JALAN EUNOS'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "93",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "93",
                destination: "> HARBOURFRONT INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    'JALAN EUNOS',
                    'BARTLEY RD',
                    'BRADDELL RD',
                    'FARRER RD',
                    'ALEXANDRA RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "93",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },  
    94: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "94",
                destination: "EUNOS INT - AIRPORT RD",
                destinationFont: "Hanover-7:3",
                scrolls: [
                    'JALAN EUNOS',
                    'EUNOS LINK',
                    'AIRPORT RD',
                    'PAYA LEBAR AIRPORT',
                    'AIRPORT RD',
                    'EUNOS LINK',
                    'JALAN EUNOS'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "94",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    100: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "100",
                destination: "> GHIM MOH TER",
                destinationFont: "Hanover-10",
                scrolls: [,
                    'ALJUNIED RD',
                    'GEYLANG RD',
                    'BEACH RD',
                    'SHENTON WAY',
                    'TELOK BLANGAH RD',
                    'ALEXANDRA RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "100",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "100",
                destination: "> SERANGOON INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    'ALEXANDRA RD',
                    'TELOK BLANGAH RD',
                    'ROBINSON RD',
                    'BEACH RD',
                    'SIMS AVE',
                    'ALJUNIED RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "105",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    101: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "101",
                destination: "S'GOON INT - BUANGKOK CRES",
                destinationFont: "Hanover-7:3",
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
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "101",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    103: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "103",
                destination: "> YISHUN INT",
                destinationFont: "Hanover-10",
                scrolls: [,
                    "YIO CHU KANG RD",
                    "JALAN KAYU",
                    "SELETAR AEROSPACE DR",
                    "WEST CAMP RD",
                    "YISHUN CENTRAL"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "103",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "103",
                destination: "> SERANGOON INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "YISHUN CENTRAL",
                    "WEST CAMP RD",
                    "SELETAR AEROSPACE DR",
                    "JALAN KAYU",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "103",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    105: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "105",
                destination: "> JURONG EAST INT",
                destinationFont: "Hanover-10",
                scrolls: [,
                    "COMMONWEALTH AVE WEST",
                    "TOH GUAN RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "105",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "105",
                destination: "> SERANGOON INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "TOH GUAN RD",
                    "COMMONWEALTH AVE WEST"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "105",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    109: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "109",
                destination: "> CHANGI VILLAGE TER",
                destinationFont: "Hanover-10",
                scrolls: [,
                    "YIO CHU KANG RD",
                    "HOUGANG AVE 9",
                    "SENGKANG EAST RD",
                    "PASIR RIS DR 1",
                    "LOYANG AVE"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "109",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "109",
                destination: "> SERANGOON INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "LOYANG AVE",
                    "PASIR RIS DR 1",
                    "SENGKANG EAST RD",
                    "HOUGANG AVE 9",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "109",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    111: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "111",
                destination: "GHIM MOH - TEMASEK BLVD",
                destinationFont: "Hanover-7:3",
                scrolls: [
                    "COMMONWEALTH AVE",
                    "TANGLIN RD",
                    "ORCHARD RD",
                    "STAMFORD RD",
                    "ORCHARD BOULEVARD",
                    "TANGLIN RD",
                    "COMMONWEALTH AVE"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "111",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    120: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "120",
                destination: "KG BAHRU TER-T.BLANGAH HTS",
                destinationFont: "Hanover-7:3",
                scrolls: [
                    "JALAN BUKIT MERAH",
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH RD",
                    "ALEXANDRA RD", // <-
                    "TIONG BAHRU RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "120",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    121: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "121",
                destination: "KG BAHRU TER-T.BLANGAH ",
                destinationFont: "Hanover-7:3",
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
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "121",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    122: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "121",
                destination: "KG BAHRU TER-C'WEALTH ",
                destinationFont: "Hanover-7:3",
                scrolls: [
                    "TIONG BAHRU RD",
                    "ALEXANDRA RD",
                    "MARGARET DR",
                    "COMMONWEALTH DR",
                    "MARGRET DR",
                    "ALEXANDRA RD",
                    "TIONG BAHRU RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "122",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    123: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "123",
                destination: "> SENTOSA",
                destinationFont: "Hanover-10",
                scrolls: [

                    "QUEENSWAY",
                    "HOLLAND RD",
                    "ORCHARD RD",
                    "HAVELOCK RD",
                    "TIONG BAHRU RD",
                    "LOWER DELTA RD",
                    "BUKIT PURMEI AVE"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "123",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "123",
                destination: "> BUKIT MERAH INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    {
                        renderType: "holidayMessage",
                        serviceNumber: "123",
                        image: "fireworks",

                        top: "I AM THE",
                        topFont: "Hanover-7:5",

                        bottom: "WORST SERVICE",
                        bottomFont: "Hanover-7:5"
                    },
                    "BUKIT PURMEI AVE",
                    "LOWER DELTA RD",
                    "TIONG BAHRU RD",
                    "HAVELOCK RD",
                    "ORCHARD BLVD",
                    "HOLLAND RD",
                    "QUEENSWAY"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "123",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    124: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "124",
                destination: "> ST MICHAEL'S TER",
                destinationFont: "Hanover-10",
                scrolls: [
                    "NEW BRIDGE RD",
                    "KAMPONG BAHRU RD",
                    "TELOK BLANGAH HTS",
                    "MOULMEIN RD",
                    "ORCHARD RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "124",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "124",
                destination: "> HARBOURFRONT INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH WAY",
                    "EU TONG SEN ST",
                    "ORCHARD TURN",
                    "MOULMEIN RD",
                    "TELOK BLANGAH WAY",
                    "KAMPONG BAHRU RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "124",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    131: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "131",
                destination: "> BUKIT MERAH INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    'THOMSON RD',
                    'OWEN RD',
                    'SHENTON WAY',
                    'TELOK BLANGAH RD',
                    'BUKIT PURMEI AVE'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "132",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "131",
                destination: ">ST MICHAEL TER",
                destinationFont: "Hanover-10",
                scrolls: [
                    'BUKIT PURMEI AVE',
                    'TELOK BLANGAH RD',
                    'CECIL ST',
                    'OWEN RD',
                    'THOMSON RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "131",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    }, 
    132: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "132",
                destination: "> BUKIT MERAH INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    'HOUGANG AVE 2',
                    'TANGLIN RD',
                    'STEVENS RD',
                    'UPPER THOMSON RD',
                    'ANG MO KIO AVE 3'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "132",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "132",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    'TANGLIN RD',
                    'STEVENS RD',
                    'UPPER THOMSON RD',
                    'ANG MO KIO AVE 3',
                    'HOUGANG AVE 2'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "132",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },      
    134: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "134",
                destination: "SIMS PL TER-MARINE TERR",
                destinationFont: "Hanover-7:4",
                scrolls: [
                    'GEYLANG EAST CENTRAL',
                    'TANJONG KATONG RD',
                    'MARINE PARADE RD',
                    'MARINE TERRACE',
                    'MARINE PARADE RD',
                    'TANJONG KATONG RD'
                ],
                scrollFont: "Hanover-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "134",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },    
    145: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "145",
                destination: "> BUONA VISTA TER",
                destinationFont: "Hanover-10",
                scrolls: [
                    'BALESTIER RD',
                    'LAVENDER ST',
                    'NORTH BRIDGE RD',
                    'TANJONG PAGAR RD',
                    'TELOK BLANGAH RD',
                    'HENDERSON RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "145",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "145",
                destination: "> TOA PAYOH INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    'HENDERSON RD',
                    'TELOK BLANGAH RD',
                    'TANJONG PAGAR RD',
                    'VICTORIA ST',
                    'LAVENDERS ST',
                    'BALESTIER RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    154: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "154",
                destination: "> BOON LAY INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "PAYA LEBAR RD",
                    "JALAN TOA PAYOH",
                    "BUKIT TIMAH RD",
                    "CLEMENTI RD",
                    "COMMONWEALTH AVE WEST",
                    "AYE",
                    "YUAN CHING RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "154",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    160: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: "> JB SENTRAL TER",
                destinationFont: "Hanover-10",
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'BUKIT BATOK RD',
                    'CHOA CHU KANG RD',
                    'WOODLANDS RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: "> JURONG EAST INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    'WOODLANDS RD',
                    'CHOA CHU KANG RD',
                    'BUKIT BATOK RD',
                    'JURONG TOWN HALL RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    "160B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: "> MARSILING PARK",
                destinationFont: "Hanover-7:5",
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'BUKIT BATOK RD',
                    'CHOA CHU KANG RD',
                    'WOODLANDS RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: "> JURONG EAST INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    'WOODLANDS RD',
                    'CHOA CHU KANG RD',
                    'BUKIT BATOK RD',
                    'JURONG TOWN HALL RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },    
    "160J": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: "> JB SENTRAL TER",
                destinationFont: "Hanover-10",
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'BUKIT BATOK RD',
                    'CHOA CHU KANG RD',
                    'WOODLANDS RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: "> JURONG TOWN HALL INT",
                destinationFont: "Hanover-8",
                scrolls: [
                    'WOODLANDS RD',
                    'CHOA CHU KANG RD',
                    'BUKIT BATOK RD',
                    'JURONG TOWN HALL RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },   
    161: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "161",
                destination: "> WOODLANDS INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "HOUGANG AVE 8",
                    "HOUGANG AVE 4",
                    "SENGKANG EAST RD",
                    "SENGKANG EAST WAY",
                    "WOODLANDS AVE 2"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "161",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "161",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "Hanover-8",
                scrolls: [
                    "WOODLANDS AVE 2",
                    "SENGKANG EAST WAY",
                    "SENGKANG EAST RD",
                    "HOUGANG AVE 4",
                    "HOUGANG AVE 8"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "161",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    162: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "162",
                destination: "> SHENTON WAY TER",
                destinationFont: "Hanover-10",
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
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "162",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "162",
                destination: "> YIO CHU KANG INT",
                destinationFont: "Hanover-8",
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
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "162",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    "162M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "162M",
                destination: "YCK INT - MARINA CTR",
                destinationFont: "Hanover-7:3",
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
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "162M",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    170: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "170",
                destination: "> LARKIN TER",
                destinationFont: "Hanover-10",
                scrolls: [
                    "BUKIT TIMAH RD",
                    "UPPER BT TIMAH RD",
                    "WOODLANDS RD",
                    "WOODLANDS CENTRE RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "170",
                destination: "> QUEEN ST TER",
                destinationFont: "Hanover-10",
                scrolls: [
                    "WOODLANDS CTR RD",
                    "WOODLANDS RD",
                    "UPPER BT TIMAH RD",
                    "DUNEARN RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },         
    174: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "174",
                destination: "> BOON LAY INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    {
                        renderType: "holidayMessage",
                        serviceNumber: "174",

                        top: "Be Kind, Be Great !",
                        topFont: "Hanover-12:3",
                        topSpacing: 2
                    },
                    "EU TONG SEN ST",
                    "ORCHARD BLVD",
                    "HOLLAND RD",
                    "FARRER RD",
                    "BT TIMAH RD",
                    "JLN JURONG KECHIL",
                    "BT BATOK E. AVE 6, 3"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "174",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "174",
                destination: "> KAMPONG BAHRU TER",
                destinationFont: "Hanover-8",
                scrolls: [
                    "BT BATOK E. AVE 3, 6",
                    "JLN JURONG KECHIL",
                    "DUNEARN RD",
                    "FARRER RD",
                    "HOLLAND RD",
                    "ORCHARD RD",
                    "NTH, STH BRIDGE RD",
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "174",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    175: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "175",
                destination: "> LOR 1 GEYLANG TER",
                destinationFont: "Hanover-8",
                scrolls: [
                    "PASIR PANJANG RD",
                    "ALEXANDRA RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "175",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    195: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "195",
                destination: "MARINA CTR - C WEALTH",
                destinationFont: "Hanover-7:3",
                scrolls: [
                    'RIVER VALLEY RD',
                    'TIONG BAHRU RD',
                    'LOWER DELTA RD',
                    'TELOK BLANGAH WAY',
                    'ALEXANDRA RD',
                    'COMMONWEALTH DR'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "195",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    198: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "198",
                destination: "> BOON LAY INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "QUEENSWAY",
                    "AYE",
                    "JURONG TOWN HALL RD",
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1",
                    "BOON LAY AVE"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "198",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "198",
                destination: "> BUKIT MERAH INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    'BOON LAY AVE',
                    'JURONG WEST AVE 1',
                    'JURONG EAST AVE 1',
                    'JURONG TOWN HALL RD',
                    'AYE',
                    'QUEENSWAY'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "198",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    }, 
    200: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "200",
                destination: "> KENT RIDGE TER",
                destinationFont: "Hanover-10",
                scrolls: [
                    'HOLLAND DR',
                    'COMMONWEALTH AVE',
                    'NTH BUONA VISTA RD',
                    'STH BUONA VISTA RD',
                    "PASIR PANJANG RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "200",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "200",
                destination: "> BUONA VISTA TER",
                destinationFont: "Hanover-10",
                scrolls: [
                    'PASIR PANJANG RD',
                    'STH BUONA VISTA RD',
                    'NTH BUONA VISTA RD',
                    'COMMONWEALTH AVE',
                    'HOLLAND DR'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "200",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },       
    201: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "201",
                destination: "KENT RIDGE TER-PANDAN GDNS",
                destinationFont: "Hanover-7:4",
                scrolls: [
                    "C'WEALTH AVE WEST",
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "201",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    272: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "272",
                destination: "> BUKIT MERAH INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "HENDERSON RD",
                    "TELOK BLANGAH WAY",
                    "TELOK BLANGAH RISE",
                    "TELOK BLANGAH CRES",
                    "HENDERSON RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "272",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    273: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "272",
                destination: "> BUKIT MERAH INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "HENDERSON RD",
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH ST 32",
                    "TELOK BLANGAH DRIVE",
                    "HENDERSON RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "273",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    275: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "272",
                destination: "> BUKIT MERAH INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "JALAN BUKIT MERAH",
                    "LOWER DELTA RD",
                    "BUKIT PURMEI AVE",
                    "LOWER DELTA RD",
                    "JALAN BUKIT MERAH"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "275",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    258: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "258",
                spacing: 1,
                destination: "JOO KOON INT-JUR W.ST64",
                destinationFont: "Hanover-8",
                scrolls: [
                    "PIONEER RD NTH",
                    "JURONG WEST ST 61,81,75",
                    "JLN AHMAD IBRAHIM"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "258",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    400: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "400",
                destination: "SHENTON WY-M. COASTAL",
                destinationFont: "Hanover-7:3",
                scrolls: [
                    "MARINA BOULEVARD",
                    "MARINA GDNS DR",
                    "MARINA COSTAL DR",
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "400",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    851: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "851",
                destination: "> BUKIT MERAH INT",
                destinationFont: "Hanover-10",
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
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "851",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "851",
                destination: "> YISHUN INT",
                destinationFont: "Hanover-10",
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
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "851",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },       
    852: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "851",
                destination: "> BUKIT BATOK INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "YISHUN AVE 2",
                    "LENTOR AVE",
                    "ANG MO KIO AVE 6",
                    "LORNIE RD",
                    "BUKIT TIMAH RD",
                    "UPP BUKIT TIMAH RD",
                    "BUKIT BATOK E. AVE 6"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "851",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "852",
                destination: "> YISHUN INT",
                destinationFont: "Hanover-10",
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
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "852",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },             
    974: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "> BUKIT PANJANG STN",
                destinationFont: "Hanover-7:5",
                scrolls: [
                    'UPPER JURONG RD',
                    'JURONG WEST ST 63',
                    'JALAN BOON LAY',
                    'CHOA CHUA KANG WAY'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "> JOO KOON INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    'CHOA CHU KANG WAY',
                    'JALAN BOON LAY',
                    'JURONG WEST ST 63',
                    'UPPER JURONG RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },  
    "974U": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "JOO KOON INT-UPP BT TIMAH",
                destinationFont: "Hanover-7:5",
                scrolls: [
                    'UPPER JURONG RD',
                    'JURONG WEST ST 63',
                    'JALAN BOON LAY',
                    'CHOA CHUA KANG WAY'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "> BUKIT TIMAH STN",
                destinationFont: "Hanover-7:5",
                scrolls: [
                    'UPPER JURONG RD',
                    'JURONG WEST ST 63',
                    'JALAN BOON LAY',
                    'CHOA CHUA KANG WAY'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },     
    993: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "993",
                spacing: 1,
                destination: "JURONG E. INT-BT BATOK W. AVE 8",
                destinationFont: "Hanover-7:3",
                scrolls: [
                    "BOON LAY WAY",
                    "JURONG TOWN HALL RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "993",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    1111: {
        1: {
            front: {
                renderType: "message",
                text: "OFF SERVICE",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    2222: {
        1: {
            front: {
                renderType: "logo",
                text: "SBS TRANSIT",
                image: "logo"
            }
        }
    },
    5049: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S1",
                destination: "> HIGHWOODS",
                destinationFont: "Hanover-7:5",
                scrolls: [
                    'UNIVERSITY OF ESSEX',
                    'WHITEHALL RD',
                    'OSBORNE ST STN',
                    'COLCHESTER STN',
                    'GENERAL HOSPITAL',
                    'TESCO HIGHWOODS',
                                        {
                        renderType: "holidayMessage",
                        serviceNumber: "S1",

                        top: "RUN RUN RUN! LAST BUS LAST BUS!",
                        topFont: "Hanover-7:5",
                        topSpacing: 2
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S1",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "S1",
                destination: "> WIVENHOE STN",
                destinationFont: "Hanover-7:5",
                scrolls: [
                    'GENERAL HOSPITAL', 
                    'COLCHESTER STN',
                    'OSBORNE ST',
                    'WHITEHALL RD',
                    'UNIVERSITY OF ESSEX',
                                        {
                        renderType: "holidayMessage",
                        serviceNumber: "S1",

                        top: "WHAT YOU SMELL IS WHAT YOU GET",
                        topFont: "Hanover-7:5",
                        topSpacing: 2
                    },      
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S1",
                font: "Hanover-19:11",
                spacing: 2

            }
        }
    }
}

EDSImages.SBST = {
    "fireworks": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    ],
    "ingot": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    ],
    "logo": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    blank: [[]]
}
