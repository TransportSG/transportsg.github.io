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
                "PASIR RIS INT"            
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
                    "CLEMENTI INT",
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
                    "BISHAN INT",
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
                    "BISHAN INT",
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
                    "KAKI BUKIT AVE ",
                    " ",
                    " ",
                    " "
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "59",
                destination: "CHANGI VILLAGE TER",
                scrolls: [
                    "BISHAN INT"
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
                    "SIMS PL TER"
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
                destination: "SIMS PLACE TER",
                scrolls: [
                "BLK 166"            
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
                    "JALAN BOON LAY"
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
                "UNDEFINED"            
            }
        }            
    },            
                ]
            }
        }
    },                
}
