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
                    "$destinationFont === 'LECIP-6:3'": 3,
                    "$destinationFont === 'LECIP-6:4'": 3,
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
                    "$destinationFont === 'LECIP-6:3'": 2,
                    "$destinationFont === 'LECIP-6:4'": 2,
                    "else": 1
                }
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        }
    },
    logo: {
        logo: {
            align: "centre-x",
            image: "$image"
        }
    },
    logoSvc: {
        logo: {
            align: "left",
            image: "$image",
        },
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "LECIP-20:12",
            spacing: 2
        },
    },
    message: {
        text: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        }
    }
}

EDSData.SBST = {
	4: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "4",
				destination: "TAMP INT-CHANGI NTH WAY",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"TAMPINES AVE 7",
					"FLORA DR",
					"CHANGI NORTH WAY",
					"FLORA RD",
					"TAMPINES AVE 7"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	5: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "5",
				destination: "> BUKIT MERAH INT",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"THOMSON RD"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "5",
				destination: "> PASIR RIS INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"THOMSON RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	7: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "7",
				destination: "> BEDOK INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"ULU PANDAN RD",
					"HOLLAND RD",
					"ORCHARD RD",
					"VICTORA ST",
					"GUILLEMARD RD",
					"SIMS AVE EAST"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "7",
				destination: "> CLEMENTI INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"CHANGI RD",
					"GUILLEMARD RD",
					"NORTH BRIDGE RD",
					"ORCHARD BOULEVARD",
					"HOLLAND RD",
					"ULU PANDAN RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
    "10e": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "10e",
                image: "express"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "10e",
                image: "express"
            }
        }
    },
    "14e": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "14e",
                image: "express"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "14e",
                image: "express"
            }
        }
    },
	20: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "20",
				destination: "TAMPINES INT-CHANGI BIZ PK",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"TAMPINES AVE 5",
					"TAMPINES AVE 2",
					"SIMEI ST 1",
					"CHANGI STH AVE 1&2"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	22: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "22",
				destination: "> ANG MO KIO INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"TAMPINES AVE 4",
					"BEDOK RESERVOIR RD",
					"UBI AVE 2",
					"UPPER PAYA LEBAR RD",
					"SERANGOON CTRL",
					"ANG MO KIO AVE 8"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "22",
				destination: "> TAMPINES INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"ANG MO KIO AVE 8",
					"SERANGOON CTRL",
					"UPPER PAYA LEBAR RD",
					"UBI AVE 2",
					"BEDOK RESERVOIR RD",
					"TAMPINES AVE 4"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	23: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "23",
				destination: "TAMPINES INT-ROCHOR",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"TAMPINES AVE 1",
					"BEDOK NORTH RD",
					"BENDEMMER RD",
					"SERANGOON RD",
					"BEDOK NORTH RD",
					"TAMPINES AVE 1"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	25: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "25",
				destination: "> ANG MO KIO INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"CHANGI RD",
					"JALAN EUNOS",
					"HOUGANG AVE 3",
					"HOUGANG AVE 2",
					"ANG MO KIO AVE 3"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "25",
				destination: "> UPP EAST COAST TER",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"ANG MO KIO AVE 3",
					"HOUGANG AVE 2",
					"HOUGANG AVE 3",
					"JALAN EUNOS",
					"SIMS AVE EAST"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	29: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "29",
				destination: "TAMP INT-CHANGI VILLAGE",
				destinationFont: "LECIP-6:4",
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
				scrollFont: "LECIP-6:4"
			}
		}
	},
	30: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "30",
				destination: "> BEDOK INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"COPORATION DR",
					"WEST COAST RD",
					"PASIR PANJANG RD",
					"TELOK BLANGAH RD",
					"KEPPEL RD",
					"OLD AIRPORT RD",
					"SIMS AVE EAST"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "30",
				destination: "> BOON LAY INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"OLD AIRPORT RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
    "30e": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "30e",
                image: "express"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "30e",
                image: "express"
            }
        }
    },
	35: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "35",
				destination: "> ALPS AVE",
				destinationFont: "LECIP-10",
				scrolls: [
					"NEW UPPER CHANGI RD",
					"XILIN AVE",
					"TANAH MERAH FERRY RD"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "35",
				destination: "> BEDOK INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"TANAH MERAH FERRY RD",
					"XILIN AVE",
					"NEW UPPER CHANGI RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	37: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "37",
				destination: "TAMP INT-CHANGI NTH CRES",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"TAMPINES AVE 7",
					"UPPER CHANGI RD NORTH",
					"CHANGI NORTH ST 1"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	39: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "39",
				destination: "> TAMPINES CONCOURSE INT",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"YISHUN AVE 2",
					"JALAN KAYU",
					"PASIR RIS DR 1",
					"TAMPINES AVE 2"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "39",
				destination: "> YISHUN INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"TAMPINES AVE 2",
					"PASIR RIS DR 1",
					"JALAN KAYU",
					"YISHUN AVE 2"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	46: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "46",
				destination: "> UPP EAST COAST TER",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"TAMPINES AVE 3",
					"BEDOK RESERVOIR RD",
					"BEDOK NORTH RD",
					"BEDOK SOUTH AVE 3"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "46",
				destination: "> TAMPINES INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"BEDOK SOUTH AVE 3",
					"BEDOK NORTH RD",
					"BEDOK RESERVOIR RD",
					"TAMPINES AVE 3"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	50: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "50",
				destination: "> BISHAN INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"PUNGGOL DR",
					"SENGKANG EAST WAY",
					"SENGKANG WEST AVE",
					"YIO CHU KANG RD",
					"ANG MO KIO AVE 5",
					"ANG MO KIO AVE 8"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "50",
				destination: "> PUNGGOL INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"ANG MO KIO AVE 8",
					"ANG MO KIO AVE 5",
					"YIO CHU KANG RD",
					"SENGKANG WEST AVE",
					"SENGKANG EAST WAY",
					"PUNGGOL DR"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	53: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "53",
				destination: "> CHANGI AIRPORT",
				destinationFont: "LECIP-10",
				scrolls: [
					"BISHAN RD",
					"SERANGOON CENTRAL",
					"LORONG AH SOO",
					"HOUGANG AVE 1",
					"PASIR RIS DR 1"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "53",
				destination: "> BISHAN INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"PASIR RIS DR 1",
					"HOUGANG AVE 1",
					"LORONG AH SOO",
					"SERANGOON CENTRAL",
					"BISHAN RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	59: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "59",
				destination: "> BISHAN INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"LOYANG AVE",
					"TAMPINES AVE 2",
					"BEDOK RESERVOIR RD",
					"KAKI BUKIT AVE 1",
					"LOR 1 TOA PAYOH"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "59",
				destination: "> CHANGI VILLAGE TER",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"LOR 1 TOA PAYOH",
					"KAKI BUKIT AVE 1",
					"BEDOK RESERVOIR RD",
					"TAMPINES AVE 2",
					"LOYANG AVE"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	64: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "64",
				destination: "> MEI LING ST",
				destinationFont: "LECIP-10",
				scrolls: [
					"ALJUNIED RD",
					"BENDEMEER RD",
					"JALAN BESAR",
					"CLEMANCEAU AVE",
					"TIONG BAHRU RD",
					"STIRLING RD"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "64",
				destination: "> SIMS PLACE TER",
				destinationFont: "LECIP-10",
				scrolls: [
					"ALEXANDRA RD",
					"TIONG BAHRU RD",
					"CLEMANCEAU AVE",
					"SELEGIE RD",
					"SERANGOON RD",
					"ALJUNIED RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	65: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "65",
				destination: "> TAMPINES INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"LOWER DELTA RD",
					"ORCHARD RD",
					"SELEGIE RD",
					"SERANGOON RD",
					"MACPHERSON RD",
					"UBI AVE 2",
					"BEDOK RESERVOIR RD"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "65",
				destination: "> HARBOURFRONT INT",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"BEDOK RESERVOIR RD",
					"UBI AVE 2",
					"MACPHERSON RD",
					"BENDEMEER RD",
					"JALAN BESAR",
					"ORCHARD BOULEVARD",
					"LOWER DELTA RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	72: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "72",
				destination: "> YIO CHU KANG INT",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"TAMPINES AVE 9",
					"TAMPINES AVE 10",
					"TAMPINES RD",
					"HOUGANG CENTRAL",
					"HOUGANG AVE 9",
					"ANG MO KIO AVE 5"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "72",
				destination: "> TAMPINES INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"ANG MO KIO AVE 5",
					"HOUGANG AVE 9",
					"HOUGANG CENTRAL",
					"TAMPINES RD",
					"TAMPINES AVE 10",
					"TAMPINES AVE 9"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	81: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "81",
				destination: "TAMPINES INT-S'GOON CTRL",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"TAMPINES AVE 7",
					"PASIR RIS DR 1",
					"TAMPINES RD",
					"UPPER SERANGOON RD",
					"TAMPINES RD",
					"PASIR RIS DR 1",
					"TAMPINES AVE 7"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	89: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "89",
				destination: "CHANGI AIRFREIGHT CTR",
				destinationFont: "LECIP-7:5",
				scrolls: [],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "89",
				destination: "> HOUGANG CTRL INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"HOUGANG AVE 10",
					"COMPASSVALE RD",
					"PASIR RIS DR 1",
					"PASIR RIS DR 3",
					"LOYANG AVE",
					"AIRLINE RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	90: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "90",
				destination: "EUNOS INT-AIRPORT RD",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"LOR 6 TOA PAYOH",
					"JALAN TOA PAYOH",
					"MACPHERSON RD",
					"AIRPORT RD"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	95: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "95",
				destination: "KENT RIDGE TER-HOLLAND RD",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"NORTH BUONA VISTA RD",
					"HOLLAND AVE"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	99: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "99",
				destination: "> CLEMENTI INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"JURONG EAST AVE 1",
					"UPPER JURONG RD"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "99",
				destination: "> JOO KOON INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"JURONG EAST AVE 1",
					"JURONG WEST AVE 1",
					"JURONG WEST AVE 4",
					"JURONG WEST ST 91",
					"UPPER JURONG RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	101: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "101",
				destination: "S'GOON INT-BUANGKOK LINK",
				destinationFont: "LECIP-7:5",
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
				scrollFont: "LECIP-7:5"
			}
		}
	},
	102: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "102",
				destination: "HOUGANG-SELETAR A'SPACE",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"UPPER SERANGOON RD",
					"BUANGKOK DR",
					"COMPASSVALE DR",
					"SENGKANG EAST WAY",
					"SENGKANG WEST WAY"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	103: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "103",
				destination: "> SERANGOON INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"YISHUN CENTRAL",
					"WEST CAMP RD",
					"SELETAR AEROSPACE DR",
					"JALAN KAYU",
					"YIO CHU KANG RD"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "103",
				destination: "> YISHUN INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"YIO CHU KANG RD",
					"JALAN KAYU",
					"SELETAR AEROSPACE DR",
					"WEST CAMP RD",
					"YISHUN CENTRAL"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	107: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "107",
				destination: "> HOUGANG CTRL INT",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"BEACH RD",
					"LAVENDER ST",
					"KALLANG BAHRU",
					"UPPER SERANGOON RD",
					"HOUGANG AVE 10"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "107",
				destination: "> SHENTON WAY TER",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"HOUGANG AVE 10",
					"UPPER SERANGOON RD",
					"KALLANG BAHRU",
					"LAVENDER ST",
					"BEACH RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	109: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "109",
				destination: "> SERANGOON INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"LOYANG AVE",
					"PASIR RIS DR 1",
					"SENGKANG EAST RD",
					"HOUGANG AVE 9",
					"YIO CHU KANG RD"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "109",
				destination: "> CHANGI VILLAGE",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"YIO CHU KANG RD",
					"HOUGANG AVE 9",
					"SENGKANG EAST RD",
					"PASIR RIS DR 1",
					"LOYANG AVE"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	111: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "111",
				destination: "GHIM MOH TER-TAMASEK AVE",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"COMMONWEALTH AVE",
					"TANGLIN RD",
					"ORCHARD RD",
					"STAMFORD RD",
					"ORCHARD BOULEVARD",
					"TANGLIN RD",
					"COMMONWEALTH AVE"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	120: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "120",
				destination: "KG BAHRU TER-T.BLANGAH HTS",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"JALAN BUKIT MERAH",
					"TELOK BLANGAH HTS",
					"TELOK BLANGAH RD",
					"ALEXANDRA RD",
					"TIONG BAHRU RD"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	123: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "123",
				destination: "> SENTOSA",
				destinationFont: "LECIP-10",
				scrolls: [
					"BUKIT PURMEI AVE",
					"LOWER DELTA RD",
					"TIONG BAHRU RD",
					"HAVELOCK RD",
					"ORCHARD BLVD",
					"HOLLAND RD",
					"QUEENSWAY"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "123",
				destination: "> BUKIT MERAH INT",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"QUEENSWAY",
					"HOLLAND RD",
					"ORCHARD RD",
					"HAVELOCK RD",
					"TIONG BAHRU RD",
					"LOWER DELTA RD",
					"BUKIT PURMEI AVE"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	124: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "124",
				destination: "> ST.MICHAEL'S TER",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"NEW BRIDGE RD",
					"KAMPONG BAHRU RD",
					"TELOK BLANGAH HTS",
					"MOULMEIN RD",
					"ORCHARD RD"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "124",
				destination: "> HARBOURFRONT INT",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"TELOK BLANGAH HTS",
					"TELOK BLANGAH WAY",
					"EU TONG SEN ST",
					"ORCHARD TURN",
					"MOULMEIN RD",
					"TELOK BLANGAH WAY",
					"KAMPONG BAHRU RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	127: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "127",
				destination: "TAMP INT-TAMP IND AVE 5",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"TAMPINES CONCOURSE",
					"TAMPINES AVE 9, 10",
					"TAMPINES IND AVE 5",
					"TAMPINES RD"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	129: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "129",
				destination: "> TAMPINES INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"BALESTIER RD",
					"LOR 1 TOA PAYOH",
					"BRADDELL RD",
					"TAMPINES AVE 1",
					"TAMPINES AVE 4"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "129",
				destination: "> ST. MICHAEL'S TER",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"TAMPINES AVE 4",
					"TAMPINES AVE 1",
					"BRADDELL RD",
					"LOR 1 TOA PAYOH",
					"BALESTIER RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
    "147e": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "147e",
                image: "express"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "147e",
                image: "express"
            }
        }
    },
	154: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "154",
				destination: "> BOON LAY INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"PAYA LEBAR RD",
					"JALAN TOA PAYOH",
					"BUKIT TIMAH RD",
					"CLEMENTI RD",
					"C'WEALTH AVE WEST",
					"AYE",
					"YUAN CHING RD"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "154",
				destination: "> EUNOS INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"YUAN CHIN RD",
					"AYE",
					"COMMONWEALTH AVE WEST",
					"CLEMENTI RD",
					"DUNEARN RD",
					"JALAN TOA PAYOH",
					"PAYA LEBAR RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	156: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "156",
				destination: "> SENGKANG INT",
				destinationFont: "LECIP-10",
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
				scrollFont: "LECIP-7:5"
			}
		}
	},
	157: {
		1: {
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
		2: {
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
					"JURONG EAST AVE 1",
					"JURONG WEST AVE 1"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	161: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "161",
				destination: "> WOODLANDS INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"HOUGANG AVE 8",
					"HOUGANG AVE 4",
					"SENGKANG EAST RD",
					"SENGKANG EAST WAY",
					"WOODLANDS AVE 2"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "161",
				destination: "> HOUGANG CTRL INT",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"WOODLANDS AVE 2",
					"SENGKANG EAST WAY",
					"SENGKANG EAST RD",
					"HOUGANG AVE 4",
					"HOUGANG AVE 8"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	163: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "163",
				destination: "> SENGKANG INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"LOR 4 TOA PAYOH",
					"LOR 6 TOA PAYOH",
					"BRADDELL RD",
					"UPPER THOMSON RD",
					"YIO CHU KANG RD",
					"SENGKANG WEST AVE",
					"SENGKANG EAST AVE"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "163",
				destination: "> TOA PAYOH INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"SENGKANG EAST AVE",
					"SENGKANG WEST AVE",
					"YIO CHU KANG RD",
					"UPPER THOMSON RD",
					"BRADDELL RD",
					"LOR 6 TOA PAYOH",
					"LOR 4 TOA PAYOH"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	168: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "168",
				destination: "> WOODLANDS INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"BEDOK NORTH AVE 3",
					"TAMPINES AVE 4",
					"TAMPINES AVE 10",
					"JALAN KAYU",
					"WOODLANDS AVE 2"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "168",
				destination: "> BEDOK INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"WOODLANDS AVE 2",
					"JALAN KAYU",
					"TAMPINES AVE 10",
					"TAMPINES AVE 4",
					"BEDOK NORTH AVE 3"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	174: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "174",
				destination: "> BOON LAY INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"EU TONG SEN ST",
					"ORCHARD BLVD",
					"HOLLAND RD",
					"FARRER RD",
					"BT TIMAH RD",
					"JLN JURONG KECHIL",
					"BT BATOK E. AVE 6, 3"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "174",
				destination: "> KAMPONG BAHRU INT",
				destinationFont: "LECIP-7:5",
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
				scrollFont: "LECIP-7:5"
			}
		}
	},
    "174e": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "174e",
                image: "express"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "174e",
                image: "express"
            }
        }
    },
	179: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "179",
				destination: "BOON LAY INT-NTU",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"JURONG WEST ST 63",
					"PIONEER RD NORTH",
					"LIEN YING CHOW DR",
					"NANYANG DR"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
    "179A": {
        1: {
			front: {
				renderType: "standardService",
				serviceNumber: "179A",
				destination: "BOON LAY INT-NANYANG DR",
				destinationFont: "LECIP-6:3",
				scrolls: [
					"NANYANG DR",
					"PIONEER RD NTH"
				],
				scrollFont: "LECIP-6:3"
			}
        }
    },
	181: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "181",
				destination: "> BOON LAY INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"JURONG WEST ST 64"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	182: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "182",
				destination: "JOO KOON INT-TUAS STH",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"TUAS STH AVE 3",
					"JALAN AHMAD IBRAHIM",
					"TUAS STH AVE 3",
					"TUAS STH AVE 9"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
    "182M": {
        1: {
			front: {
				renderType: "standardService",
				serviceNumber: "182M",
				destination: "JOO KOON INT-TUAS STH",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"JALAN AHMAD IBRAHIM"
				],
				scrollFont: "LECIP-7:5"
			}
        }
    },
	186: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "186",
				destination: ">SHENTON WAY TER",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"BALESTIER RD",
					"FARRER RD",
					"QUEENSWAY",
					"ALEXANDRA RD",
					"HAVELOCK RD",
					"UPPER PICKERING ST"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "186",
				destination: "> ST. MICHAEL'S TER",
				destinationFont: "LECIP-10",
				scrolls: [
					"UPPER PICKERING ST",
					"HAVELOCK RD",
					"ALEXANDRA RD",
					"QUEENSWAY",
					"FARRER RD",
					"BALESTIER RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	192: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "192",
				destination: "> BOON LAY INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"PIONEER RD",
					"TUAS AVE 1",
					"JALAN AHMAD IBRAHIM",
					"UPP JURONG RD",
					"JURONG WEST ST 62"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "192",
				destination: "> TUAS TER",
				destinationFont: "LECIP-10",
				scrolls: [
					"JURONG WEST ST 62",
					"TUAS AVE 1",
					"TUAS AVE 12",
					"PIONEER RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	193: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "193",
				destination: "> BOON LAY INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"TUAS WEST DR",
					"TUAS AVE 9, 5",
					"TUAS RD",
					"LOK YANG WAY",
					"JURONG WEST AVE 4"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "193",
				destination: "> TUAS TER",
				destinationFont: "LECIP-10",
				scrolls: [
					"JURONG WEST AVE 4",
					"LOK YANG WAY",
					"TUAS RD",
					"TUAS AVE 5, 9",
					"TUAS WEST DR"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	194: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "194",
				destination: "BOON LAY INT-JALAN AHMAD IBRAHIM",
				destinationFont: "LECIP-6:3",
				scrolls: [
					"JALAN AHMAD IBRAHIM"
				],
				scrollFont: "LECIP-6:3"
			}
		}
	},
    "196e": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "196e",
                image: "express"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "196e",
                image: "express"
            }
        }
    },
	198: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "198",
				destination: "> BOON LAY INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"QUEENSWAY",
					"AYE",
					"JURONG TOWN HALL RD",
					"JURONG EAST AVE 1",
					"JURONG WEST AVE 1",
					"BOON LAY AVE"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	200: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "200",
				destination: "> KENT RIDGE TER",
				destinationFont: "LECIP-10",
				scrolls: [
					"PASIR PANJANG RD",
					"STH BUONA VISTA RD"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "200",
				destination: "> BUONA VISTA TER",
				destinationFont: "LECIP-7:5",
				scrolls: [],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	201: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "201",
				destination: "KENT RIDGE TER-PANDAN GDNS",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"C'WEALTH AVE WEST"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	228: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "228",
				destination: "> BEDOK INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"BEDOK NORTH ST 1",
					"BEDOK NORTH AVE 3",
					"BEDOK RESERVOIR RD",
					"BEDOK NORTH AVE 3"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	240: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "240",
				destination: "> BOON LAY INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"JALAN AHMAD IBRAHIM",
					"KANG CHING RD",
					"YUAN CHING RD",
					"BOON LAY PLACE",
					"BOON LAY WAY"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	"240M": {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "240M",
				destination: "BOON LAY WY-JUR W.64",
				destinationFont: "LECIP-6:3",
				scrolls: [
                    "JURONG W ST 64"
				],
				scrollFont: "LECIP-6:3"
			}
		}
	},
	241: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "241",
				destination: "> BOON LAY INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"JURONG WEST ST 63",
					"PIONEER RD NORTH",
					"JURONG WEST ST 91"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
    242: {
        1: {
            front: {
				renderType: "standardService",
				serviceNumber: "242",
				destination: "> BOON LAY INT",
				destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST CENTRAL 1",
                    "JALAN BOON LAY",
                    "JURONG WEST AVE 4",
                    "JURONG WEST ST 72",
                    "JURONG WEST AVE 5",
                    "JURONG WEST AVE 4",
                    "JALAN BOON LAY"
                ],
				scrollFont: "LECIP-7:5"
            }
        }
    },
    "243G": {
        1: {
            front: {
				renderType: "standardService",
				serviceNumber: "243G",
				destination: "> BOON LAY INT",
				destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST ST 64",
                    "JURONG WEST ST 75",
                    "JURONG WEST ST 81",
                    "JURONG WEST AVE 5",
                    "JURONG WEST AVE 4",
                    "JURONG WEST ST 62"
                ],
				scrollFont: "LECIP-7:5"
            }
        }
    },
    "243W": {
        1: {
            front: {
				renderType: "standardService",
				serviceNumber: "243W",
				destination: "> BOON LAY INT",
				destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST ST 62",
                    "JURONG WEST AVE 4",
                    "JURONG WEST AVE 5",
                    "JURONG WEST ST 81",
                    "JURONG WEST ST 75",
                    "JURONG WEST ST 64"
                ],
				scrollFont: "LECIP-7:5"
            }
        }
    },
	246: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "246",
				destination: "> BOON LAY INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"YUAN CHING RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
    247: {
        1: {
            front: {
				renderType: "standardService",
				serviceNumber: "247",
				destination: "TUAS TER-TUAS BAY LINK",
				destinationFont: "LECIP-6:4",
				scrolls: [
                    "TUAS AVE 7",
                    "TUAS CRES",
                    "TUAS STH AVE 5&4&7",
                    "TUAS STH AVE 3&9&8",
                    "TUAS LINK 4"
				],
				scrollFont: "LECIP-6:4"
            }
        }
    },
    248: {
        1: {
            front: {
				renderType: "standardService",
				serviceNumber: "248",
				destination: "TUAS TER-TUAS STH AVE 14",
				destinationFont: "LECIP-6:4",
				scrolls: [
                    "PIONEER RD",
                    "TUAS AVE 20",
                    "TUAS STH AVE 5",
                    "TUAS STH AVE 9",
                    "TUAS STH AVE 10"
				],
				scrollFont: "LECIP-6:4"
            }
        }
    },
	249: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "249",
				destination: "> BOON LAY INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"JALAN BOON LAY",
					"JURONG PIER RD",
					"TANJONG KLING RD",
					"SHIPYARD RD",
					"JALAN SAMULUN",
					"SHIPYARD RD",
					"TANJONG KLING RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	251: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "251",
				destination: "BOON LAY INT-SHIPYARD RD",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"BOON LAY WAY",
					"PIONEER RD NTH",
					"SHIPYARD RD",
					"PIONEER RD NTH"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	252: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "252",
				destination: "> BOON LAY INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"JOO KOON CIRCLE",
					"ENTERPRISE RD",
					"INTERNATIONAL RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	253: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "253",
				destination: "JOO KOON INT-BENOI RD",
				destinationFont: "LECIP-10",
				scrolls: [
					"PIONEER RD",
					"BENOI RD",
					"PIONEER RD",
					"BENOI SECTOR"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	254: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "254",
				destination: "JOO KOON INT-TUAS AVE 11",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"TUAS RD",
					"TUAS BASIN LINK",
					"BENOI RD",
					"PIONEER RD"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	255: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "255",
				destination: "JOO KOON INT-GUL CRES",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"GUL AVE",
					"GUL CIRCLE",
					"GUL CRES"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	257: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "257",
				destination: "JOO KOON INT-PIONEER SEC 2",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"PIONEER SECT. 2",
					"PIONEER SECT. 1",
					"BENOI RD",
					"GUL RD"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	258: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "258",
				destination: "JOO KOON INT-JUR W. ST 64",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"PIONEER RD NTH",
					"JURONG WEST ST 61, 81, 75",
					"JALAN AHMAD IBRAHIM"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	291: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "291",
				destination: "> TAMPINES ST 83 & 33",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"TAMPINES AVE 5",
					"TAMPINES ST 83",
					"TAMPINES ST 81",
					"TAMPINES ST 21",
					"TAMPINES ST 32",
					"TAMPINES ST 21"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	292: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "292",
				destination: "> TAMPINES INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"TAMPINES AVE 5",
					"TAMPINES AVE 2",
					"TAMPINES ST 22",
					"TAMPINES AVE 2",
					"TAMPINES ST 11"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	293: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "293",
				destination: "> TAMPINES ST 71&AVE 7",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"TAMPINES ST 45&42",
					"TAMPINES AVE 4&3",
					"TAMPINES AVE 8&9"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	371: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "371",
				destination: "> SENGKANG INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"COMPASSVALE RD",
					"RIVERVALE DR",
					"RIVERVALE CRES",
					"COMPASSVALE ST"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	374: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "374",
				destination: "> COMPASSVALE INT",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"SENGKANG EAST WAY",
					"ANCHORVALE CRES",
					"COMPASSVALE RD",
					"SENGKANG EAST WAY",
					"FERNVALE RD"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	405: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "405",
				destination: "BOON LAY INT-OLD CCK RD",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"JURONG WEST CENTRAL 1",
					"JALAN BOON LAY",
					"JALAN BAHAR",
					"OLD CHOA CHU KANG RD",
					"JALAN BAHAR",
					"JALAN BOON LAY",
					"JURONG WEST CENTRAL 1"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	"410W": {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "410W",
				destination: "> BISHAN INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"BISHAN ST 22",
					"SIN MING AVE",
					"UPPER THOMSON RD",
					"SHUNFU RD",
					"BISHAN ST 21",
					"BISHAN ST 12",
					"BISHAN ST 14"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	609: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "DTL",
				destination: "> CHINATOWN",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"BUKIT PANJANG",
					"CASHEW",
					"HILLVIEW",
					"BEAUTY WORLD",
					"KING ALBERT PARK",
					"SIXTH AVENUE",
					"TAN KAH KEE",
					"BOTANIC GARDENS",
					"STEVENS",
					"NEWTON",
					"LITTLE INDIA",
					"ROCHOR",
					"BUGIS",
					"PROMENADE",
					"BAYFRONT",
					"DOWNTOWN",
					"TELOK AYER"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "DTL",
				destination: "> BUKIT PANJANG",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"CHINATOWN",
					"TELOK AYER",
					"DOWNTOWN",
					"BAYFRONT",
					"PROMENADE",
					"BUGIS",
					"ROCHOR",
					"LITTLE INDIA",
					"NEWTON",
					"STEVENS",
					"BOTANIC GARDENS",
					"TAN KAH KEE",
					"SIXTH AVENUE",
					"KING ALBERT PARK",
					"BEAUTY WORLD",
					"HILLVIEW",
					"CASHEW"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	800: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "800",
				destination: "YISHUN INT-SEMBAWANG RD",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"YISHUN AVE 7",
					"SEMBAWANG RD",
					"YISHUN ST 71",
					"YISHUN RING RD"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	803: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "803",
				destination: "YISHUN INT-YISHUN AVE 6",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"YISHUN AVE 6"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	804: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "804",
				destination: "YISHUN INT-YISHUN AVE 11",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"YISHUN AVE 2",
					"YISHUN RING RD",
					"YISHUN ST 41",
					"YISHUN AVE 1",
					"YISHUN AVE 11",
					"YISHUN RING RD"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	805: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "805",
				destination: "YISHUN-YISHUN AVE 1",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"YISHUN AVE 2",
					"YISHUN AVE 4",
					"YISHUN AVE 1",
					"YISHUN RING RD"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	806: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "806",
				destination: "YISHUN INT-YISHUN AVE 6",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"YISHUN CENTRAL",
					"YISHUN AVE 11",
					"YISHUN AVE 6",
					"YISHUN RING RD"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	807: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "807",
				destination: "YISHUN INT-YISHUN ST 71",
				destinationFont: "LECIP-6:4",
				scrolls: [
					"YISHUN RING RD",
					"YISHUN AVE 9",
					"YISHUN RING RD",
					"YISHUN AVE 5",
					"SEMBAWANG RD",
					"YISHUN ST 71"
				],
				scrollFont: "LECIP-6:4"
			}
		}
	},
	811: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "811",
				destination: "> YISHUN AVE 5&1",
				destinationFont: "LECIP-10",
				scrolls: [
					"YISHUN AVE 9,6,7",
					"SEMBAWANG RD",
					"YISHUN AVE 5,2",
					"YISHUN RING RD",
					"YISHUN AVE 2"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	812: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "812",
				destination: "> YISHUN AVE 4&3",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"YISHUN ST 61",
					"YISHUN AVE 2",
					"YISHUN RING RD",
					"YISHUN CENTRAL"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	851: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "851",
				destination: "> YISHUN INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"TIONG BAHRU RD",
					"VICTORIA ST",
					"THOMSON RD",
					"MARYMOUNT RD",
					"ANG MO KIO AVE 5",
					"ANG MO KIO AVE 6",
					"LENTOR AVE",
					"YISHUN AVE 2"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "851",
				destination: "> BUKIT MERAH INT",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"YISHUN AVE 2"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
    "851e": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "851e",
                image: "express"
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "851e",
                image: "express"
            }
        }
    },
	852: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "852",
				destination: "> YISHUN INT",
				destinationFont: "LECIP-10",
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
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "852",
				destination: "> BUKIT BATOK INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"YISHUN AVE 2",
					"LENTOR AVE",
					"ANG MO KIO AVE 6",
					"LORNIE RD",
					"BUKIT TIMAH RD",
					"UPP BUKIT TIMAH RD",
					"BUKIT BATOK E. AVE 6"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
	860: {
		1: {
			front: {
				renderType: "standardService",
				serviceNumber: "860",
				destination: "> YIO CHU KANG INT",
				destinationFont: "LECIP-7:5",
				scrolls: [
					"YISHUN RING RD",
					"UPPER THOMSON RD",
					"SEMBAWANG RD",
					"YISHUN AVE 3"
				],
				scrollFont: "LECIP-7:5"
			}
		},
		2: {
			front: {
				renderType: "standardService",
				serviceNumber: "860",
				destination: "> YISHUN INT",
				destinationFont: "LECIP-10",
				scrolls: [
					"UPPER THOMSON RD",
					"ANG MO KIO AVE 5",
					"YISHUN RING RD",
					"YISHUN AVE 3"
				],
				scrollFont: "LECIP-7:5"
			}
		}
	},
    1111: {
        1: {
            front: {
                renderType: "message",
                text: "OFF SERVICE",
                font: "LECIP-20:12",
                spacing: 3
            }
        }
    },
	2222: {
		1: {
			front: {
				renderType: "logo",
                image: "logo"
			}
		}
	},
    3333: {
        1: {
            front: {
                renderType: "message",
                text: "FREE SHUTTLE",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    4444: {
        1: {
            front: {
                renderType: "message",
                text: "ON TEST",
                font: "LECIP-20:12",
                spacing: 3
            }
        }
    },
    5555: {
        1: {
            front: {
                renderType: "message",
                text: "TRAINING BUS",
                font: "LECIP-20:12",
                spacing: 3
            }
        }
    },
    7777: {
        1: {
            front: {
                renderType: "message",
                text: "FREE BRIDGING BUS",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    9999: {
        1: {
            front: {
                renderType: "message",
                text: "VER. 1234567890-18",
                font: "LECIP-14",
                spacing: 1
            }
        }
    },
}

EDSImages.SBST = {
    logo: [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    ],
    express: [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
        [ 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0 ],
        [ 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0 ],
        [ 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    ],
    fastForward: [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ]
    ]
}
