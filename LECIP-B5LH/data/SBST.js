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
                    "EUNOS LINK"
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
                    "S'PORE POWER TRG INST",
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
                    "OPP S'PORE BIBLE COLL",
                    "OPP LUTHERAN TWRS",
                    "OPP ST. MARGARET'S SEC SCH",
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
    }
}
