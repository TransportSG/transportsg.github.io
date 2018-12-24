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
                    else: 1
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
	41: {
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
	},
	51: {
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
	52: {
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
	},
	71: {
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
	72: {
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
	},
	201: {
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
	},
	221: {
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
	222: {
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
	},
	231: {
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
	},
	251: {
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
	252: {
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
	},
	291: {
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
	},
	301: {
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
	302: {
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
	},
	351: {
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
	352: {
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
	},
	371: {
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
	},
	391: {
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
	392: {
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
	},
	461: {
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
	462: {
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
	},
	501: {
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
	502: {
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
	},
	531: {
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
	532: {
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
	},
	591: {
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
	592: {
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
	},
	641: {
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
	642: {
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
	},
	651: {
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
	652: {
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
	},
	721: {
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
	722: {
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
	},
	811: {
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
	},
	891: {
		front: {
			renderType: "standardService",
			serviceNumber: "89",
			destination: "CHANGI AIRFREIGHT CTR",
			destinationFont: "LECIP-7:5",
			scrolls: [
			],
			scrollFont: "LECIP-7:5"
		}
	},
	892: {
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
	},
	901: {
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
	},
	951: {
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
	},
	991: {
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
	992: {
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
	},
	1011: {
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
	},
	1021: {
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
	},
	1031: {
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
	1032: {
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
	},
	1071: {
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
	1072: {
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
	},
	1091: {
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
	1092: {
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
	},
	1111: {
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
	},
	1201: {
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
	},
	1231: {
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
	1232: {
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
	},
	1241: {
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
	1242: {
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
	},
	1271: {
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
	},
	1291: {
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
	1292: {
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
	},
	1541: {
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
	1542: {
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
	},
	1561: {
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
	},
	1571: {
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
	1572: {
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
	},
	1611: {
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
	1612: {
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
	},
	1631: {
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
	1632: {
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
	},
	1681: {
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
	1682: {
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
	},
	1741: {
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
	1742: {
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
	},
	1791: {
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
	},
	1811: {
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
	},
	1821: {
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
	},
	1861: {
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
	1862: {
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
	},
	1921: {
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
	1922: {
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
	},
	1931: {
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
	1932: {
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
	},
	1941: {
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
	},
	1981: {
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
	},
	2001: {
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
	2002: {
		front: {
			renderType: "standardService",
			serviceNumber: "200",
			destination: "> BUONA VISTA TER",
			destinationFont: "LECIP-7:5",
			scrolls: [
			],
			scrollFont: "LECIP-7:5"
		}
	},
	2011: {
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
	},
	2281: {
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
	},
	2401: {
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
	},
	2411: {
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
	},
	2461: {
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
	},
	2491: {
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
	},
	2511: {
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
	},
	2521: {
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
	},
	2531: {
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
	},
	2541: {
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
	},
	2551: {
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
	},
	2571: {
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
	},
	2581: {
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
	},
	2911: {
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
	},
	2921: {
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
	},
	2931: {
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
	},
	3711: {
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
	},
	3741: {
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
	},
	4051: {
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
	},
	6091: {
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
	6092: {
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
	},
	8001: {
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
	},
	8031: {
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
	},
	8041: {
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
	},
	8051: {
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
	},
	8061: {
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
	},
	8071: {
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
	},
	8111: {
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
	},
	8121: {
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
	},
	8511: {
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
	8512: {
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
	},
	8521: {
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
	8522: {
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
	},
	8601: {
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
	8602: {
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
	},
	"179A": {
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
	},
	"182M": {
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
	},
	"410W": {
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
	},
}
