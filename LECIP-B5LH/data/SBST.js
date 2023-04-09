EDSFormats.SBST = {
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "LECIP-24",
            spacing: 2
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
            spacing: 2
        },
        destination: {
            align: "left,bottom",
            margin: {
                bottom: 1,
                left: 2
            },
            text: "$destination",
            spacing: 2
        },

        text: "$destination"
    },
}

EDSFormats.SBST.pids = EDSFormats.SMRT.pids;


EDSData.SBST = {
    4: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "4",
                destination: {
                    text: "TAMPINES-CHANGI NTH WAY",
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
                    text: ">BUKIT MERAH INT",
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
                    text: ">PASIR RIS INT",
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
                  "PASIR RIS INT",
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
                    text: ">CLEMENTI INT",
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
                    text: ">BEDOK INT",
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
    54: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "54",
                destination: {
                    text: ">KAMPONG BAHRU TER",
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
                    text: ">BISHAN INT",
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
    59: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "59",
                destination: {
                    text: ">CHANGI VILLAGE TER",
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
                    text: ">BISHAN INT",
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
                    text: ">CHANGI VILLAGE TER",
                    font: "LECIP-8"
                },
                scrolls: [
                    "LOR 1 TOA PAYOH",
                    "KAKI BUKIT AVE "
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
                    text: ">CHANGI VILLAGE TER",
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
    64: {
      1: {
            front: {
                renderType: "standardService",
                serviceNumber: "64",
                destination: {
                    text: ">MEI LING ST",
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
                    "SIMS PLACE TERMINAL",
                    "BLOCK 49 MARKET/FOODCOURT",
                    "OPPOSITE BLOCK 53",
                    "SIMS URBAN OASIS",
                    "OPPOSITE BLOCK 125",
                    "OPPOSITE CANOSSA CATHOLIC PR",
                    "OPPOSITE ALJUNIED PARK",
                    "CENCON BUILDING",
                    "GULAB BUILDING",
                    "BEFORE SIEMENS CENTRE",
                    "MOM SVCS CENTRE",
                    "BLOCK 54",
                    "BLOCK 44",
                    "OPPOSITE BOON KENG STATION",
                    "BEFORE LAVENDER STREET",
                    "HOA NAM BUILDING",
                    "AFTER ALLENBY ROAD",
                    "OPPOSITE VEERASAMY ROAD",
                    "JALAN BESAR STATION EXIT A",
                    "IBIS SINGAPORE ON BENCOOLEN",
                    "BEFORE BENCOOLEN STATION EXIT A",
                    "YMCA",
                    "AFTER HAW PAR GLASS TOWER",
                    "OPPOSITE UE SQUARE",
                    "BLOCK 2",
                    "HOTEL MIRAMAR",
                    "HOLIDAY INN ATRIUM",
                    "GANGES CENTRE",
                    "BLOCK 51 CARPARK",
                    "BLOCK 48",
                    "OPPOSITE TIONG BAHRU PARK",
                    "BEFORE AR-RABITAH MOSQUE",
                    "BLOCK 78",
                    "OPPOSITE REDHILL STATION",
                    "SIS BUILDING",
                    "BEFORE DAWSON ROAD",
                    "OPPOSITE QUEENS",
                    "TIONG GHEE TEMPLE",
                    "BLOCK 166"
                ]
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "64",
                destination: {
                    text: ">SIMS PLACE TER",
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
                destination: "SIMS PLACE TERMINAL",
                scrolls: [
                    "BLOCK 158",
                    "BLOCK 157",
                    "BLOCK 153",
                    "BLOCK 163",
                    "BLOCK 166",
                    "ANCHORPOINT",
                    "OPPOSITE LEA HIN HARDWARE FACTORY",
                    "AFTER DAWSON ROAD",
                    "REDHILL STATION",
                    "DELTA SWIMMING COMPLEX",
                    "BLOCK 104A CARPARK",
                    "TIONG BAHRU PARK",
                    "OPPOSITE BLOCK 48",
                    "BLOCK 79",
                    "OPPOSITE HARVEST MANSIONS",
                    "OPPOSITE HOLIDAY INN ATRIUM",
                    "OPPOSITE HOTEL MIRAMAR",
                    "RIVER PLACE CONDO",
                    "UE SQUARE",
                    "AFTER RIVER VALLEY ROAD",
                    "OPPOSITE HAW PAR GLASS TOWER",
                    "AFTER DHOBY GHAUT STATION",
                    "SCHOOL OF THE ARTS",
                    "PEACE CENTRE",
                    "SELEGIE CENTRE",
                    "TEKKA CENTRE",
                    "BROADWAY HOTEL",
                    "AFTER FARRER PARK STATION EXIT G",
                    "SRI VADAPATHIRA KALIAMMAN TEMPLE",
                    "KWONG WAI SHIU HOPSITAL",
                    "BOON KENG STATION/BLOCK 102",
                    "OPPOSITE BENDEMEER PRIMARY SCHOOL",
                    "ST. MICHAEL'S PLACE",
                    "AFTER TAI THONG CRESENT",
                    "BEFORE JALAN WANGI",
                    "OPPOSITE CENCON BUILDING",
                    "ALJUNIED PARK",
                    "CANOSSA CATHOLIC PR",
                    "BLOCK 125",
                    "BEFORE BLOCK 53",
                    "BLOCK 45",
                    "SIMS PLACE TERMINAL"
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
                    text: ">HARBOURFRONT INT",
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
    170: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "170",
                destination: {
                    text: ">LARKIN TER",
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
        }
    },
    272: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "272",
                destination: {
                    text: ">BUKIT MERAH INT",
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
    974: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: {
                    text: ">BUKIT PANJANG STN",
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
                    text: ">JOO KOON INT",
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
                    ""
                ]
            }
        }
    },
}
