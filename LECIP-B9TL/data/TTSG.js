EDSFormats.TTSG = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont === null": "LECIP-19:TowerB9Front",
                    "else": "$serviceFont"
                }
            },
            spacing: 3
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            font: "$destinationFont",
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

        text: "$destination"
    },
    standardService2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont === null": "LECIP-19:TowerB9Front",
                    "else": "$serviceFont"
                }
            },
            spacing: 3
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)',
                Top: 1
            },
            text: "$destination",
            font: "$destinationFont",
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

        text: "$destination"
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
    twoline: {
        top: {
            align: "centre-x,top",
            text: "$top",
            font: "$topFont",
            spacing: "$topSpacing",
            margin: {
                top: 1
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: "$bottom",
            font: "$bottomFont",
            spacing: "$bottomSpacing",
            margin: {
                bottom: 1
            }
        },
        text: "$top"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: {
                $$cond: {
                    "$spacing === null" : 3,
                    "else": "$spacing"
                }
            }
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
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
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
                    "else": "LECIP-10"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    OngTengHuat: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: 2
        },
        top: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber) - width(image)',
                Top: 1
            },
            text: "$destination",
            font: "$topFont",
            spacing: 1
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
                    "$bottomFont === null": "LECIP-7:5",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
            }
        },
        image: {
            align: "left,centre-y",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
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
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
        },
        text: "FULL"
    },
    'centreMessageServiceScroll': {
        serviceNumber: {
            align: 'right,centre-y',
            margin: {
                right: 1
            },
            text: '$serviceNumber',
            font: 'LECIP-19:TowerB9Front',
            spacing: 3
        },
        top: {
            align: 'centre-x,top',
            margin: {
                right: 'width(serviceNumber) len(5)',
                top: 0
            },
            text: '$top',
            font: '$topFont',
            spacing: 1
        },
        bottom: {
            align: 'centre-x,bottom',
            margin: {
                right: 'width(serviceNumber) len(5)',
                bottom: 1
            },
            text: '$bottom',
            font: '$bottomFont',
            spacing: 1
        }
    },
    '944to992': {
        serviceNumber: {
            align: 'right,centre-y',
            margin: {
                right: 1
            },
            text: '$serviceNumber',
            font: 'LECIP-19:TowerB9Front',
            spacing: 3
        },
        top: {
            align: 'centre-x,top',
            margin: {
                right: 'width(serviceNumber) len(5)',
                top: 2
            },
            text: '$top',
            font: '$topFont',
            spacing: 1
        },
        bottom: {
            align: 'centre-x,bottom',
            margin: {
                right: 'width(serviceNumber) len(5)',
                bottom: 1
            },
            text: '$bottom',
            font: '$bottomFont',
            spacing: 1
        }
    },
    rearService: {
        serviceNumber: {
            align: "centre-x,centre-y",
            text: "$serviceNumber",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$serviceNumber"
    }
}

EDSData.TTSG = {   
    41: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "41",
                destination: "BEAUTY WORLD MRT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BEAUTY WORLD MRT",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "41"
                },
                "TOH GUAN RD",
                "TOH GUAN RD EAST",
                "TOH TUCK RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "41",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "41",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "41"
                },
                "TOH TUCK RD",
                "TOH GUAN RD EAST",
                "TOH GUAN RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "41",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },   
    49: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "49",
                destination: "JURONG WEST ST 42",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG   WEST   ST   42",
                    topFont: "Hanover-14:6",
        
                    serviceNumber: "49"
                },
                "JALAN AHMAD IBRAHIM",
                "CORPORATION DR",
                "LAKESIDE MRT",
                "JURONG WEST ST 51"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "49",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "49",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "49"
                },
                "JURONG WEST ST 51",
                "LAKESIDE MRT",
                "CORPORATION DR",
                "JALAN AHMAD IBRAHIM"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "49",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },   
    66: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "BEAUTY WORLD MRT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BEAUTY WORLD MRT",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "66"
                },
                    "JURONG TOWN HALL RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK WEST AVE 6",
                    "JALAN JURONG KECHIL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "66"
                },
                    "JALAN JURONG KECHIL",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "JURONG TOWN HALL RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },  
    "66A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "BUKIT TIMAH RD",
                    "LITTLE INDIA STN EXIT A"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "66B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66B",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "TEKKA CENTRE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66B",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "66C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66C",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "OPP BEAUTY WORLD STN"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66C",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "66K": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "BEDOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BEDOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "66"
                },
                    "BUKIT BATOK CENTRAL",
                    "DUNEARN RD",
                    "LITTLE INDIA",
                    "MACPHERSON RD / EST",
                    "BEDOK RESERVOIR RD",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "66"
                },
                    "BEDOK RESERVOIR RD",
                    "MACPHERSON EST / RD",
                    "LITTLE INDIA",
                    "BUKIT TIMAH RD",
                    "BUKIT BATOK CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },  
    77: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "MARINA CENTRE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "MARINA CENTRE",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "77"
                },
                    "TOH TUCK RD",
                    "SIXTH AVE",
                    "HOLLAND VILLAGE / RD",
                    "ORCHARD RD",
                    "BRAS BASAH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "77"
                },
                    "STAMFORD RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "SIXTH AVE",
                    "TOH TUCK RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "77F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "STAMFORD RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "STAMFORD RD",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "77"
                },
                    "TOH TUCK AVE",
                    "SIXTH AVE",
                    "HOLLAND VILLAGE / RD",
                    "ORCHARD RD",
                    "BRAS BASAH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "77"
                },
                    "STAMFORD RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "SIXTH AVE",
                    "TOH TUCK RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    78: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "78",
                destination: "CLEMENTI MRT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CLEMENTI MRT",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "78"
                },
                    "PENJURU RD",
                    "TANJONG PENJURU",
                    "PANDAN RD / AVE",
                    "WEST COAST RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "78",
                destination: "JURONG TOWN HALL",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG TOWN HALL",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "78"
                },
                    "WEST COAST RD",
                    "PANDAN RD",
                    "TANJONG PENJURU",
                    "PENJURU RD",

                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "78A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "78A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "TANJONG PENJURU",
                    "OPP CLP INTL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "78J": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "78",
                destination: "CLEMENTI MRT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CLEMENTI MRT",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "78"
                },
                "PENJURU RD",
                "TANJONG PENJURU",
                "PANDAN RD / AVE",
                "WEST COAST RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "78",
                destination: "JURONG EAST MRT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST MRT",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "78"
                },
                  "WEST COAST RD",
                  "PANDAN RD",
                  "TANJONG PENJURU",
                  "PENJURU RD",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    79: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "79",
                destination: "JURONG EAST MRT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST MRT",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "79"
                },
                    "PENJURU"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "79",
                destination: "BOON LAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "79"
                },
                    "PENJURU"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "79A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "79A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "JURONG EAST LIB"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "79A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "BOON LAY INT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    96: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "96",
                destination: "CLEMENTI",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CLEMENTI - NUS",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "96"
                },
                    "CLEMENTI RD",
                    "NAT'L UNIVERSITY OF S'PORE",
                    "KENT RIDGE CRESCENT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "96",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "96A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "96A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "KENT RIDGE CRES",
                    "NUS RAFFLES HALL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "96A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "96B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "96B",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "CLEMENTI STN EXIT A"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "96B",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    97: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "MARINA CENTRE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "MARINA CENTRE",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "97"
                },
                    "AYE",
                    "ALEXANDRA RD",
                    "HARBOURFRONT",
                    "ROBINSON RD",
                    "BAYFRONT AVE / MBS",
                    "SUNTEC CITY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "97"
                },
                    "SUNTEC CITY",
                    "BAYFRONT AVE / MBS",
                    "SHENTON WAY",
                    "HARBOURFRONT",
                    "ALEXANDRA RD",
                    "A Y E"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "97E": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97e",
                destination: "MARINA CENTRE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "centreMessageServiceScroll",
                        serviceNumber: "97e",
                        top: "LIMITED STOPS",
                        topFont: "Hanover-Tower11:7",

                        bottom: "EXPRESS SERVICE",
                        bottomFont: "LECIP-7:5"
                    },
                    {
                        renderType: "destScroll",
                        top: "MARINA CENTRE",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "97e"
                    },
                    "AYE",
                    "ALEXANDRA RD",
                    "HARBOURFRONT",
                    "ROBINSON RD",
                    "BAYFRONT AVE / MBS",
                    "SUNTEC CITY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97e",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "centreMessageServiceScroll",
                        serviceNumber: "97e",
                        top: "LIMITED STOPS",
                        topFont: "Hanover-Tower11:7",

                        bottom: "EXPRESS SERVICE",
                        bottomFont: "LECIP-7:5"
                    },
                    {
                        renderType: "destScroll",
                        top: "JURONG EAST",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "97e"
                    },
                    "SUNTEC CITY",
                    "BAYFRONT AVE / MBS",
                    "SHENTON WAY",
                    "HARBOURFRONT",
                    "ALEXANDRA RD",
                    "A Y E"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "97F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "RAFFLES QUAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "RAFFLES QUAY",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "97"
                },
                    "A Y E",
                    "ALEXANDRA RD",
                    "HARBOURFRONT",
                    "ROBINSON RD",
                    "(SKIP MBS)",
                    "(SKIP SUNTEC)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "97"
                },
                    "SHENTON WAY",
                    "HARBOURFRONT",
                    "ALEXANDRA RD",
                    "A Y E"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    98: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98",
                destination: "JURONG PIER WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG PIER WAY",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "98"
                },
                    "JURONG EAST AVE 1",
                    'JURONG WEST AVE 1',
                    "LAKESIDE MRT",
                    "CORPORATION DR",
                    "JURONG PORT RD",
                    "JALAN BUROH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "98",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "JUR. PIER",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "98",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "98"
                },
                    "JALAN BUROH",
                    "JURONG PORT RD",
                    "CORPORATION DR",
                    "LAKESIDE MRT",
                    "JURONG WEST AVE 1",
                    "JURONG EAST AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "98",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "JUR`EAST",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    "98A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "CORPORATION PL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "98B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98B",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "JURONG PIER WAY",
                    "JURONG ISLAND CHECKPT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98B",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "98M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98M",
                destination: "CORPORATION RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CORPORATION RD",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "98M"
                },
                "JURONG EAST AVE 1",
                'JURONG WEST AVE 1',
                "LAKESIDE MRT",
                "CORPORATION DR"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98M",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "98M",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "98M"
                },
                "CORPORATION DR",
                "LAKESIDE MRT",
                "JURONG WEST AVE 1",
                "JURONG EAST AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98M",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    101: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "N1",
                destination: "YISHUN RING RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "NEWTON RD",
                    "TOA PAYOH CENTRAL",
                    "BISHAN ST 11",
                    "ANG MO KIO AVE 3",
                    "ANG MO KIO AVE 4",
                    "LENTOR AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "N1",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    102: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "N2",
                destination: "SEMBAWANG DR",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "WOODLANDS CENTRE RD",
                    "MARSILING RD",
                    "WOODLANDS AVE 7",
                    "ADMIRALTY DR",
                    "CANBERRA RD",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "N2",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    106: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SHENTON WAY",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "106"
                },
                    "COMMONWEALTH AVE WEST",
                    "HOLLAND VILLAGE / RD",
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "BAYFRONT AVE / MBS"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "106"
                },
                    "ROBINSON RD",
                    "CENTRAL BOULEVARD",
                    "BAYFRONT AVE / MBS",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "COMMONWEALTH AVE WEST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "106A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "106A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "C'WEALTH AVE WEST",
                    "CLEMENTI STN EXIT B"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "106F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "COMMONWEALTH AVE WEST",
                    "HOLLAND VILLAGE / RD",
                    "ORCHARD RD",
                    "CITY HALL MRT",
                    "SOUTH BRIDGE RD",
                    "(SKIP SUNTEC / MBS)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "ROBINSON RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "COMMONWEALTH AVE WEST",
                    "(SKIP MBS / SUNTEC)"

                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    143: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "143",
                destination: "TOA PAYOH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "TOA PAYOH",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "143"
                },
                    "TEBAN GARDENS RD",
                    "WEST COAST RD",
                    "HARBOURFRONT",
                    "CHINATOWN",
                    "ORCHARD TURN"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "143",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "143"
                },
                    "ORCHARD RD",
                    "CHINATOWN",
                    "HARBOURFRONT",
                    "WEST COAST RD",
                    "TEBAN GARDENS RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "143M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "143M",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "centreMessageServiceScroll",
                        serviceNumber: "143M",
                        top: "LOOPS AT",
                        topFont: "Hanover-Tower11:7",

                        bottom: "PANDAN GARDENS",
                        bottomFont: "LECIP-7:5"
                    },
                    {
                        renderType: "destScroll",
                        top: "JURONG EAST",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "143M"
                    },
                    "JURONG TOWN HALL RD",
                    "TEBAN GARDEN RD",
                    "PANDAN GARDENS"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143M",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    167: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "BUKIT MERAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT MERAH",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "167"
                },
                    "SEMBAWANG RD",
                    "UPPER THOMSON RD",
                    "THOMSON RD",
                    "ORCHARD RD",
                    "SHENTON WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "167"
                },
                    "CECIL STREET",
                    "ORCHARD TURN",
                    "THOMSON RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "167F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "BUKIT MERAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT MERAH",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "167"
                },
                    "SEMBAWANG RD",
                    "UPPER THOMSON RD",
                    "THOMSON RD",
                    "ORCHARD RD",
                    "SHENTON WAY",
                    "(SKIP COLLYER QUAY)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "167"
                },
                    "CECIL STREET",
                    "ORCHARD TURN",
                    "THOMSON RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD",
                    "SKIP FULLERTON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    169: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "169",
                destination: "ANG MO KIO",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "ANG MO KIO",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "169"
                },
                    "WOODLANDS AVE 9",
                    "ADMIRALTY RD EAST",
                    "YISHUN MRT",
                    "SEMBAWANG RD",
                    "ANG MO KIO AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "169",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "169",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "169"
                },
                    "ANG MO KIO AVE 3",
                    "SEMBAWANG RD",
                    "YISHUN MRT",
                    "ADMIRALTY RD EAST",
                    "WOODLANDS AVE 9"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "169",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "169A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "169A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "OPP YISHUN STN"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "169A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "169B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "169B",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "WOODLANDS AVE 8",
                    "BEF ADMIRALTY RD WEST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "169B",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    171: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "171",
                destination: "BUKIT PANJANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT PANJANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "171"
                },
                    "YISHUN AVE 5",
                    "SEMBAWANG RD",
                    "MANDAI RD",
                    "PETIR RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "171",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "171",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "171"
                },
                    "PETIR RD",
                    "MANDAI RD",
                    "SEMBAWANG RD",
                    "YISHUN AVE 5"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "171",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    173: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "173",
                destination: "CLEMENTI",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "173"
                },
                    "BUKIT BATOK EAST AVE 4",
                    "HILLVIEW AVE",
                    "JALAN BATU NILAM",
                    "HUME AVE",
                    "BEAUTY WORLD MRT",
                    "TOH TUCK RISE / RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "173",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "CLEMENTI",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "173",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "173"
                },
                    "TOH TUCK RISE / RD",
                    "BEAUTY WORLD MRT",
                    "HUME AVE",
                    "JALAN BATU NILAM",
                    "HILLVIEW AVE",
                    "BUKIT BATOK EAST AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "173",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "BT BATOK",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    "173A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "173A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "BT BATOK EAST AVE 4",
                    "BLK 254"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "173A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    177: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "177",
                destination: "BUKIT PANJANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT PANJANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "177"
                },
                    "BUKIT BATOK EAST AVE 4",
                    "HILLVIEW AVE",
                    "M I N D E F",
                    "UPPER BUKIT TIMAH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "standardService2",
                serviceNumber: "",
                destination: "177",
                destinationFont: "LECIP-TowerRear10:7",
                scrolls: [{
                    renderType: "twoline",
                    top: "177",
                    topFont: "LECIP-TowerRear10:7",
                    topSpacing: 1,
    
                    bottom: "PANJANG",
                    bottomFont: "Hanover-5:3",
                    bottomSpacing: 1,
                },
                    "BUKIT"
                ],
                scrollFont: "Hanover-5:3"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "177",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "177"
                },
                    "JELEBU RD",
                    "UPPER BUKIT TIMAH RD",
                    "M I N D E F",
                    "HILLVIEW AVE",
                    "BUKIT BATOK EAST AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "177",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "BT BATOK",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    183: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "183",
                destination: "SCIENCE PARK RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SCIENCE  PARK  RD",
                    topFont: "Hanover-14:6",
        
                    serviceNumber: "183"
                },
                    "TOH GUAN RD EAST",
                    "CLEMENTI MRT",
                    "CLEMENTI RD",
                    "PASIR PANJANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "183",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "183",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "183"
                },
                    "PASIR PANJANG RD",
                    "CLEMENTI RD",
                    "CLEMENTI MRT",
                    "TOH GUAN RD EAST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "183",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "183B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "183B",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "TOH TUCK AVE",
                    "AFT TOH TUCK LINK"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "183B",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    189: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "189",
                destination: "CLEMENTI AVE 1",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CLEMENTI AVE 1",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "189"
                },
                    "BUKIT BATOK EAST AVE 6",                    
                    "BUKIT BATOK ST 23",
                    "CLEMENTI AVE 6",
                    "CLEMENTI MRT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "189",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "189",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "189"
                },
                    "CLEMENTI MRT",
                    "CLEMENTI AVE 6",
                    "BUKIT BATOK ST 23",
                    "BUKIT BATOK EAST AVE 6"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "189",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "189A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "189A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "BUKIT BATOK ST 23",
                    "OPP MIDVIEW BUILDING"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "189A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    282: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "282",
                destination: "CLEMENTI",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "282"
                },
                    "CLEMENTI AVE 5",
                    "CLEMENTI AVE 2",
                    "CLEMENTI WEST ST 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "282",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    284: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "284",
                destination: "CLEMENTI",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "284"
                },
                    "CLEMENTI AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "284",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    285: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "285",
                destination: "CLEMENTI",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "285"
                },
                    "CLEMENTI AVE 2",
                    "WEST COAST RD",
                    "PANDAN LOOP"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "285",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    311: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "E31",
                destination: "CCL EXPRESS BUS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "KENT RIDGE > HARBOURFRONT"
                ],
                scrollFont: "Hanover-7:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "E31",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    312: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "E31",
                destination: "CCL EXPRESS BUS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "HARBOURFRONT > KENT RIDGE"
                ],
                scrollFont: "Hanover-7:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "E31",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    333: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "333",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "333"
                },
                    "TOH GUAN RD", 
                    "JURONG EAST AVE 1",
                    "JURONG EAST ST 32"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "333",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    334: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "334",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "334"
                },
                    "JURONG EAST AVE 1", 
                    "JURONG WEST AVE 1",
                    "JURONG EAST ST 42"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "334",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    335: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "335",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "335"
                },
                    "JURONG TOWN HALL RD",
                    "BOON LAY WAY",
                    "JURONG WEST ST 51",
                    "JURONG WEST ST 52",
                    "JURONG WEST ST 41"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "335",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    521: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S52",
                destination: "TEL SHUTTLE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "CALDECOTT > OUTRAM PARK"
                ],
                scrollFont: "Hanover-7:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S52",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    522: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S52",
                destination: "TEL SHUTTLE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "OUTRAM PARK > CALDECOTT"
                ],
                scrollFont: "Hanover-7:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S52",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    651: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "651",
                destination: "MARINA BOULEVARD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "651"
                    },
                    {
                        renderType: "destScroll",
                        top: "MARINA  BOULEVARD",
                        topFont: "Hanover-14:6",
            
                        serviceNumber: "651"
                    },
                    "JURONG WEST AVE 5",
                    "JURONG WEST ST 75/64",
                    "JURONG WEST ST 81/61",
                    "ROBINSON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "651",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "651",
                destination: "JURONG WEST AVE 3",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "651"
                    },
                    {
                        renderType: "destScroll",
                        top: "JURONG  WEST  AVE  3",
                        topFont: "Hanover-14:6",
            
                        serviceNumber: "651"
                    },
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "JURONG WEST ST 61/81",
                    "JURONG WEST ST 64/75",
                    "JURONG WEST AVE 5",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "651",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    653: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "653",
                destination: "MARINA BOULEVARD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "653"
                    },
                    {
                        renderType: "destScroll",
                        top: "MARINA  BOULEVARD",
                        topFont: "Hanover-14:6",
            
                        serviceNumber: "653"
                    },
                    "HILLVIEW AVE",
                    "BUKIT BATOK EAST AVE 2",
                    "BUKIT BATOK EAST AVE 3",
                    "ROBINSON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "653",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "653",
                destination: "HILLVIEW AVE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "653"
                    },
                    {
                        renderType: "destScroll",
                        top: "HILLVIEW AVE",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "653"
                    },
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "BUKIT BATOK EAST AVE 3",
                    "BUKIT BATOK EAST AVE 2",
                    "HUME AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "653",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    656: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "656",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "656"
                    },
                    {
                        renderType: "destScroll",
                        top: "SHENTON WAY",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "656"
                    },
                    "ADMIRALTY LINK",
                    "SEMBAWANG DR",
                    "DHOBY GHAUT MRT",
                    "BRAS BASAH RD",
                    "COLLYER QUAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "656",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "656",
                destination: "CANBERRA RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "656"
                    },
                    {
                        renderType: "destScroll",
                        top: "CANBERRA RD",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "656"
                    },
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "SEMBAWANG RD",
                    "ADMIRALTY LINK"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "656",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "656F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "656",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "656"
                    },
                    {
                        renderType: "destScroll",
                        top: "SHENTON WAY",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "656"
                    },
                    "ADMIRALTY LINK",
                    "SEMBAWANG DR",
                    "DHOBY GHAUT MRT",
                    "NORTH BRIDGE RD",
                    "(SKIP BRAS BASAH RD)",
                    "(SKIP COLLYER QUAY)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "656",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "656",
                destination: "CANBERRA RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "656"
                    },
                    {
                        renderType: "destScroll",
                        top: "CANBERRA RD",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "656"
                    },
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "SEMBAWANG RD",
                    "ADMIRALTY LINK",
                    "(SKIP FULLERTON RD)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "656",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    657: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "657",
                destination: "MARINA BOULEVARD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "657"
                    },
                    {
                        renderType: "destScroll",
                        top: "MARINA  BOULEVARD",
                        topFont: "Hanover-14:6",
            
                        serviceNumber: "657"
                    },
                    "JURONG EAST AVE 1",
                    "TOH GUAN RD",
                    "ROBINSON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "657",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "657",
                destination: "JUR WEST AVE 1",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "657"
                    },
                    {
                        renderType: "destScroll",
                        top: "JURONG  WEST  AVE  1",
                        topFont: "Hanover-14:6",
            
                        serviceNumber: "657"
                    },
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "TOH GUAN RD",
                    'JURONG EAST AVE 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "657",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    663: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "663",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "663"
                    },
                    {
                        renderType: "destScroll",
                        top: "SHENTON WAY",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "663"
                    },
                    "YISHUN AVE 6 / RING RD",
                    "YISHUN CTRL / AVE 2",
                    "DHOBY GHAUT MRT",
                    "BRAS BASAH RD",
                    "COLLYER QUAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "663",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "663",
                destination: "YISHUN AVE 6",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "663"
                    },
                    {
                        renderType: "destScroll",
                        top: "YISHUN AVE 6",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "663"
                    },
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "YISHUN AVE 2 / CTRL",
                    "YISHUN AVE 11 / RING RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "663",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "663F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "663",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "663"
                    },
                    {
                        renderType: "destScroll",
                        top: "SHENTON WAY",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "663"
                    },
                    "YISHUN AVE 6 / RING RD",
                    "YISHUN CTRL / AVE 2",
                    "DHOBY GHAUT MRT",
                    "NORTH BRIDGE RD",
                    "(SKIP COLLYER QUAY)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "663",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "663",
                destination: "YISHUN AVE 6",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "663"
                    },
                    {
                        renderType: "destScroll",
                        top: "YISHUN AVE 6",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "663"
                    },
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "YISHUN AVE 2 / CTRL",
                    "YISHUN AVE 11 / RING RD",
                    "(SKIP FULLERTON RD)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "663",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    665: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "665",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "665"
                    },
                    {
                        renderType: "destScroll",
                        top: "SHENTON WAY",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "665"
                    },
                    "MARSILING LANE / RISE",
                    "WOODLANDS AVE 5 / 4 / 1",
                    "DHOBY GHAUT MRT",
                    "BRAS BASAH RD",
                    "COLLYER QUAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "665",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "665",
                destination: "MARSILING DR",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "665"
                    },
                    {
                        renderType: "destScroll",
                        top: "MARSILING DR",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "665"
                    },
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "WOODLANDS AVE 1 / 4 / 5",
                    "MARSILING RISE / LANE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "665",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "665F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "665",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "665"
                    },
                    {
                        renderType: "destScroll",
                        top: "SHENTON WAY",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "665"
                    },
                    "MARSILING LANE / RISE",
                    "WOODLANDS AVE 5 / 4 / 1",
                    "DHOBY GHAUT MRT",
                    "NORTH BRIDGE RD",
                    "(SKIP COLLYER QUAY)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "665",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "665",
                destination: "MARSILING DR",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "665"
                    },
                    {
                        renderType: "destScroll",
                        top: "MARSILING DR",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "665"
                    },
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "WOODLANDS AVE 1 / 4 / 5",
                    "MARSILING RISE / LANE",
                    "(SKIP FULLERTON RD)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "665",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    670: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "670",
                destination: "MARINA BOULEVARD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "670"
                    },
                    {
                        renderType: "destScroll",
                        top: "MARINA  BOULEVARD",
                        topFont: "Hanover-14:6",
            
                        serviceNumber: "670"
                    },
                    "YISHUN AVE 6",
                    "YISHUN AVE 9",
                    "YISHUN RING RD",
                    "ANSON RD",
                    "ROBINSON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "670",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "670",
                destination: "YISHUN AVE 7",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "destScroll",
                        top: "CITY DIRECT",
                        topFont: "Hanover-Tower12:7",
        
                        serviceNumber: "670"
                    },
                    {
                        renderType: "destScroll",
                        top: "YISHUN AVE 7",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "670"
                    },
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "YISHUN RING RD",
                    "YISHUN AVE 9",
                    "YISHUN AVE 6"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "670",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    801: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "801",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "801"
                },
                    "YISHUN CENTRAL",
                    "YISHUN AVE 9",
                    "YISHUN AVE 6",
                    "YISHUN ST 42",
                    "YISHUN AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "801",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    825: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "825",
                destination: "YIO CHU KANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YIO CHU KANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "825"
                },
                    "ANG MO KIO AVE 6",
                    "LENTOR MRT",
                    "LENTOR RD",
                    "LENTOR LOOP"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "825",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    853: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "853",
                destination: "LOR 1 GEYLANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "LOR 1 GEYLANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "853"
                },
                    "YISHUN AVE 2",
                    "ANG MO KIO AVE 6",
                    "SERANGOON CENTRAL",
                    "UPPER SERANGOON RD",
                    "GEYLANG BAHRU"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "853",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "853",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "853"
                },
                    "GEYLANG BAHRU",
                    "UPPER SERANGOON RD",
                    "SERANGOON CENTRAL",
                    "ANG MO KIO AVE 6",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "853",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },   
    "853M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "853M",
                destination: "UPP EAST COAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "UPP  EAST  COAST",
                    topFont: "Hanover-14:6",
        
                    serviceNumber: "853M"
                },
                    "ANG MO KIO AVE 6",
                    "SERANGOON CENTRAL",
                    "SIMS AVE",
                    "TANJONG KATONG RD",
                    "MARINE PARADE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "853M",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "853M",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "853M"
                },
                    "MARINE PARADE RD",
                    "TANJONG KATONG RD",
                    "GEYLANG RD",
                    "SERANGOON CENTRAL",
                    "ANG MO KIO AVE 6"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "853M",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },   
    854: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "854",
                destination: "BEDOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BEDOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "854"
                },
                    "YISHUN AVE 2",
                    "YIO CHU KANG RD",
                    "HOUGANG AVE 3",
                    "JLN EUNOS",
                    "NEW UPPER CHANGI RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "854",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "854",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "854"
                },
                    "NEW UPPER CHANGI RD",
                    "EUNOS LINK",
                    "HOUGANG AVE 3",
                    "YIO CHU KANG RD",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "854",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },   
    "854E": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "854e",
                destination: "BEDOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "centreMessageServiceScroll",
                        serviceNumber: "854e",
                        top: "LIMITED STOPS",
                        topFont: "Hanover-Tower11:7",

                        bottom: "EXPRESS SERVICE",
                        bottomFont: "LECIP-7:5"
                    },
                    {
                        renderType: "destScroll",
                        top: "BEDOK",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "854e"
                    },
                    "YISHUN AVE 2",
                    "YIO CHU KANG RD",
                    "HOUGANG AVE 3",
                    "EUNOS LINK"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "854e",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    855: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "855",
                destination: "HARBOURFRONT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "HARBOURFRONT",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "855"
                },
                    "YISHUN AVE 2",
                    "UPPER THOMSON RD",
                    "ADAM RD",
                    "QUEENSWAY",
                    "JALAN BUKIT MERAH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "855",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "855",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "855"
                },
                    "JALAN BUKIT MERAH",
                    "QUEENSWAY",
                    "FARRER RD",
                    "UPPER THOMSON RD",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "855",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },   
    856: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "856",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "856"
                },
                    "CANBERRA RD",
                    "ADMIRALTY RD WEST",
                    "SENOKO DR",
                    "WOODLANDS NORTH MRT",
                    "MARSILING ESTATE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "856",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "W'LANDS",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "856",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "856"
                },
                    "WOODLANDS TRAIN CHKPT",
                    "WOODLANDS NORTH MRT",
                    "SENOKO RD",
                    "ADMIRALTY RD WEST",
                    "CANBERRA"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "856",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "YISHUN",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },   
    "856A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "856A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "WDL TRAIN CHECKPT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "856A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "856B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "856B",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "CANBERRA RD",
                    "AFT ADMIRAL HILL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "856B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    857: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: "TEMASEK AVE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "TEMASEK AVE",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "857"
                },
                    "YIO CHU KANG RD",
                    "BENDEMEER RD",
                    "LITTLE INDIA",
                    "BENCOOLEN ST",
                    "BRAS BASAH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "857"
                },
                    "STAMFORD RD",
                    "SELEGIE RD",
                    "BOON KENG MRT",
                    "SERANGOON RD",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },  
    "857A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "YIO CHU KANG RD",
                    "OPP SUNRISE GARDENS"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "857B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857B",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "TEMASEK AVE",
                    "PROMENADE MRT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "857B",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "STAMFORD RD",
                    "CAPITOL BUILDING"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },  
    "857F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: "STAMFORD RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "STAMFORD RD",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "857"
                },
                    "YIO CHU KANG RD",
                    "BENDEMEER RD",
                    "LITTLE INDIA",
                    "BENCOOLEN ST",
                    "BRAS BASAH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "857"
                },
                    "STAMFORD RD",
                    "SELEGIE RD",
                    "BOON KENG MRT",
                    "SERANGOON RD",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },  
    858: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "858",
                destination: "CHANGI AIRPORT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CHANGI AIRPORT",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "858"
                },
                    "WOODLANDS AVE 9",
                    "SEMBAWANG WAY",
                    "YISHUN MRT",
                    "JALAN KAYU",
                    "T P E"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "858",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "858"
                },
                    "T P E",
                    "JALAN KAYU",
                    "YISHUN MRT",
                    "SEMBAWANG WAY",
                    "WOODLANDS AVE 9"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },   
    "858A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "858A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "OPP YISHUN STN"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "OngTengHuat",
                serviceNumber: "858",
                destination: "CHANGI AIRPORT",
                topFont: "Hanover-Tower11:7",
                bottom: "( PTB 3, 1, 2 )",
                bottomFont: "Hanover-5:3",
                image: "ChangiAirportControlTower"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "858B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "858B",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "JALAN KAYU",
                    "AFT SELETAR CAMP G"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    859: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "859"
                },
                    "CANBERRA RD",
                    "ADMIRALTY LINK",
                    "SEMBAWANG CRES",
                    "SEMBAWANG RD",
                    "YISHUN AVE 5"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "859",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "859"
                },
                    "YISHUN AVE 5",
                    "SEMBAWANG RD",
                    "SEMBAWANG CRES",
                    "ADMIRALTY LINK",
                    "CANBERRA RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },   
    "859A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859A",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "859A"
                },
                "CANBERRA RD",
                "ADMIRALTY LINK",
                "ADMIRALTY DR",
                "SEMBWAWANG CRES"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "859B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859B",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "859B"
                },
                "SEMBAWANG CRES",
                "ADMIRALTY DR",
                "ADMIRALTY LINK",
                "CANBERRA RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "859T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859T",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "YISHUN INT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859T",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    870: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "870",
                destination: "TENGAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "TENGAH",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "870"
                },
                    "BUKIT BATOK AVE 1",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 3",
                    "PLANTATION CRESCENT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "870",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "870",
                destination: "JURONG TOWN HALL",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG  TOWN  HALL",
                    topFont: "Hanover-14:6",
        
                    serviceNumber: "870"
                },
                    "BUKIT BATOK RD",
                    "BUKIT BATOK WEST AVE 3",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK AVE 1",
                    "JURONG EAST CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "870",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "870A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "870A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "PLANTATION CRES",
                    "BLK 111"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "870A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    882: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "882",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "882"
                },
                    "WELLINGTON CIRCLE",
                    "MONTREAL DR",
                    "MONTREAL LINK",
                    "SEMBAWANG RD",
                    "SEMBAWANG PARK"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "882",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "882A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "882A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "MONTREAL LINK",
                    "BLK 592A"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "882A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    883: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "883",
                destination: "YISHUN CTRL 2",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN CTRL 2",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "883"
                },
                    "CANBERRA WAY",
                    "CANBERRA ST",
                    "CANBERRA MRT",
                    "YISHUN AVE 2",
                    "YISHUN MRT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "883",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "YISHUN",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "883",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "883"
                },
                    "YISHUN MRT",
                    "YISHUN AVE 2",
                    "CANBERRA MRT",
                    "CANBERRA ST",
                    "CANBERRA WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "883",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "S'WANG",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    "883A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "883A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "CANBERRA WAY",
                    "BLK 129A"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "883A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "883B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "883B",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "SEMBAWANG RD",
                    "OPP BLK 590C"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "883B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "883M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "883M",
                destination: "YISHUN AVE 5",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN AVE 5",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "883M"
                },
                    "CANBERRA WAY",
                    "CANBERRA ST",
                    "CANBERRA MRT",
                    "YISHUN AVE 7",
                    "YISHUN AVE 5"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "883M",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 1,

                bottom: "YISHUN",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "883M",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBWANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "883M"
                },
                    "YISHUN MRT",
                    "YISHUN AVE 2",
                    "CANBERRA MRT",
                    "CANBERRA ST",
                    "CANBERRA WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "883M",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 1,

                bottom: "S'WANG",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    941: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "941",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "941"
                },
                    "BUKIT BATOK AVE 1",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK WEST AVE 9",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "941",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    944: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "944",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "944"
                },
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK RD",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "944",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    945: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "945",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "945"
                },
                   "BUKIT BATOK EAST AVE 5",
                   "BUKIT BATOK ST 52",
                   "BUKIT GOMBAK MRT",
                   "BUKIT BATOK WEST AVE 7",
                   "BUKIT BATOK ST 34",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "945",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    947: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "947",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "947"
                },
                    "BUKIT BATOK"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "947",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    963: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "963",
                destination: "HARBOURFRONT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "HARBOURFRONT",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "963"
                },
                    "BUKIT PANJANG RD",
                    "HILLVIEW AVE",
                    "BUKIT BATOK EAST AVE 3",
                    "A Y E",
                    "ALEXANDRA RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "963",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "963"
                },
                    "ALEXANDRA RD",
                    "A Y E",
                    "BUKIT BATOK EAST AVE 3",
                    "HILLVIEW AVE",
                    "BUKIT PANJANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "963E": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "963e",
                destination: "HARBOURFRONT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "centreMessageServiceScroll",
                        serviceNumber: "963e",
                        top: "LIMITED STOPS",
                        topFont: "Hanover-Tower11:7",

                        bottom: "EXPRESS SERVICE",
                        bottomFont: "LECIP-7:5"
                    },
                    {
                        renderType: "destScroll",
                        top: "HARBOURFRONT",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "963e"
                    },
                    "WOODLANDS AVE 3",
                    "BUKIT PANJANG RD",
                    "HILLVIEW AVE",
                    "BT BATOK EAST AVE 3",
                    " A Y E"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963e",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "963e",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "centreMessageServiceScroll",
                        serviceNumber: "963e",
                        top: "LIMITED STOPS",
                        topFont: "Hanover-Tower11:7",

                        bottom: "EXPRESS SERVICE",
                        bottomFont: "LECIP-7:5"
                    },
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "963e"
                    },
                    "A Y E",
                    "BT BATOK EAST AVE 3",
                    "HILLVIEW AVE",
                    "BUKIT PANJANG RD",
                    "WOODLANDS AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963e",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "963R": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "963R",
                destination: "RESORTS WORLD SENTOSA",
                destinationFont: "Mobitec-Tower9:4",
                scrolls: [{
                        renderType: "centreMessageServiceScroll",
                        serviceNumber: "963R",
                        top: "LIMITED STOPS",
                        topFont: "Hanover-Tower11:7",

                        bottom: "EXPRESS SERVICE",
                        bottomFont: "LECIP-7:5"
                    },
                    {
                        renderType: "destScroll",
                        top: "RESORTS WORLD",
                        topFont: "Hanover-Tower11:7",
            
                        serviceNumber: "963R"
                    },
                    "WOODLANDS AVE 3",
                    "BUKIT PANJANG RD",
                    "HILLVIEW AVE",
                    "BT BATOK EAST AVE 3",
                    " A Y E"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963R",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "963R",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "centreMessageServiceScroll",
                        serviceNumber: "963R",
                        top: "LIMITED STOPS",
                        topFont: "Hanover-Tower11:7",

                        bottom: "EXPRESS SERVICE",
                        bottomFont: "LECIP-7:5"
                    },
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "963R"
                    },
                    "A Y E",
                    "BT BATOK EAST AVE 3",
                    "HILLVIEW AVE",
                    "BUKIT PANJANG RD",
                    "WOODLANDS AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963R",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    965: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "965",
                destination: "SENGKANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SENGKANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "965"
                },
                    "WOODLANDS AVE 7",
                    "GAMBAS AVE",
                    "YISHUN MRT",
                    "YISHUN MRT",
                    "COMPASSVALE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "965",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "965",
                destination: "WDL TEMP INT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "WOODLANDS TEMP INT",
                    topFont: "Hanover-14:6",
        
                    serviceNumber: "965"
                },
                    "COMPASSVALE RD",
                    "YISHUN MRT",
                    "YISHUN AVE 7",
                    "GAMBAS AVE",
                    "WOODLANDS AVE 7"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "965",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "965A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "965A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "OPP YISHUN STN"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "965A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "965T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "965T",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "SENGKANG INT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "965T",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    966: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "966",
                destination: "MARINE PARADE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "MARINE PARADE",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "966"
                },
                    "WOODLANDS AVE 3",
                    "PENDING RD",
                    "JALAN KOLAM AYER",
                    "JALAN TOA PAYOH",
                    "JALAN EUNOS"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "966",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "966",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "966"
                },
                    "MARINE PARADE RD",
                    "JALAN EUNOS",
                    "JALAN KOLAM AYER",
                    "JALAN TOA PAYOH",
                    "PENDING RD"

                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "966",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "966A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "966A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "MARINE PARADE RD",
                    "OPP PARKWAY PARADE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "966A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    969: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "969",
                destination: "TAMPINES",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "TAMPINES",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "969"
                },
                    "WOODLANDS AVE 7",
                    "GAMBAS AVE",
                    "YISHUN MRT",
                    "T P E",
                    "TAMPINES CONCOURSE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "969",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "969",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "969"
                },
                    "TAMPINES CONCOURSE",
                    "T P E",
                    "YISHUN MRT",
                    "GAMBAS AVE",
                    "WOODLANDS AVE 7"

                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "969",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "969A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "969A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "YISHUN STN"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "969A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    974: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "BUKIT PANJANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT PANJANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "974"
                },
                    "UPPER JURONG RD",
                    "JURONG WEST ST 63",
                    "JALAN BOON LAY",
                    "CHOA CHU KANG MRT",
                    "CHOA CHU KANG WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "JOO KOON",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JOO KOON",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "974"
                },
                    "CHOA CHU KANG WAY",
                    "CHOA CHU KANG MRT",
                    "JALAN BOON LAY",
                    "JURONG WEST ST 63",
                    "UPPER JURONG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    980: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "980",
                destination: "LOR 1 GEYLANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "LOR 1 GEYLANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "980"
                },
                    "SEMBAWANG RD",
                    "UPPER THOMSON RD",
                    "THOMSON RD",
                    "LITTLE INDIA",
                    "BEACH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "980",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "980",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "980"
                },
                    "BEACH RD",
                    "LITTLE INDIA",
                    "THOMSON RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "980",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },   
    981: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "981",
                destination: "SENOKO LOOP",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SENOKO LOOP",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "981"
                },
                    "CANBERRA RD",
                    "ADMIRALTY RD WEST",
                    "SENOKO DR",
                    "SENOKO RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "981",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "981",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "981"
                },
                    "SENOKO RD",
                    "SENOKO LOOP",
                    "SENOKO DR",
                    "ADMIRALTY RD WEST",
                    "CANBERRA RD"

                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "981",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    990: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "990",
                destination: "JURONG EAST MRT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG  EAST  MRT",
                    topFont: "Hanover-14:6",
        
                    serviceNumber: "990"
                },
                    "BUKIT BATOK EAST AVE 3",
                    "BUKIT BATOK EAST AVE 6",
                    "TOH GUAN RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "990",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "990",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "990"
                },
                    "TOH GUAN RD",
                    "BUKIT BATOK EAST AVE 6",
                    "BUKIT BATOK EAST AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "990",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    992: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "992",
                destination: "TENGAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "TENGAH",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "992"
                },
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK RD",
                    "PLANTATION CRESCENT",
                    "TENGAH BOULEVARD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "992",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "992"
                },
                "PLANTATION CRESCENT",
                "BUKIT BATOK RD",
                "BUKIT BATOK WEST AVE 8",
                "BUKIT BATOK WEST AVE 6"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "992A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "992A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "PLANTATION CRES",
                    "BLK 111"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "992N": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "992",
                destination: "TENGAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "944to992",
                        serviceNumber: "944>992",
                        top: "Start from",
                        topFont: "Lecip-Tower6:5",

                        bottom: " 24 Sep 2023",
                        bottomFont: "Lecip-Tower6:5"
                    },
                    {
                        renderType: "destScroll",
                        top: "TENGAH",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "992"
                    },
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK RD",
                    "PLANTATION CRESCENT",
                    "TENGAH BOULEVARD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "992",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "944to992",
                        serviceNumber: "944>992",
                        top: "Start from",
                        topFont: "Lecip-Tower6:5",

                        bottom: " 24 Sep 2023",
                        bottomFont: "Lecip-Tower6:5"
                    },
                    {
                        renderType: "destScroll",
                        top: "BUKIT BATOK",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "992"
                    },
                    "PLANTATION CRESCENT",
                    "BUKIT BATOK RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK WEST AVE 6"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    1111: {
        1: {
            front: {
                renderType: "message",
                text: "OFF SERVICE",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "OFF",
                topFont: "LECIP-7:4",

                bottom: "SERVICE",
                bottomFont: "LECIP-7:4"
            }
        }
    },
    1112: {
        1: {
            front: {
                renderType: "message",
                text: "SGUS",
                font: "SGBusLogo-Mobitec",
                spacing: 1
            },
            rear: {
                renderType: 'twoline',
                top: "",
                topFont: "LECIP-7:4",

                bottom: "",
                bottomFont: "LECIP-7:4"
            }
        }
    },
    2222: {
        1: {
            front: {
                renderType: "message",
                text: "SPARE  BUS",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "SPARE",
                topFont: "LECIP-7:4", // check font

                bottom: "BUS",
                bottomFont: "LECIP-7:4"
            }
        }
    },
    3333: {
        1: {
            front: {
                renderType: "full"
            },
            rear: {
                renderType: "full"
            }
        }
    },
    5000: {
        1: {
            front: {
                renderType: "twoline",
                top: "ROUTE FAMILIARISATION",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "TRAINING",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "ROUTE",
                topFont: "LECIP-6:3",
                topSpacing: 1,

                bottom: "FAM. TRG",
                bottomFont: "LECIP-6:3",
                bottomSpacing: 1,
            }
        }
    },
    5001: {
        1: {
            front: {
                renderType: "message",
                text: "NSL  Bridging  Bus",
                font: "Hanover-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "NSL",
                topFont: "Mobitec-10:7",

                bottom: "Bridging",
                bottomFont: "Hanover-7:3"
            }
        }
    },
    5002: {
        1: {
            front: {
                renderType: "message",
                text: "EWL  Bridging  Bus",
                font: "Hanover-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "EWL",
                topFont: "Mobitec-10:7",

                bottom: "Bridging",
                bottomFont: "Hanover-7:3"
            }
        }
    },
    5003: {
        1: {
            front: {
                renderType: "message",
                text: "NEL  Bridging  Bus",
                font: "Hanover-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "NEL",
                topFont: "Mobitec-10:7",

                bottom: "Bridging",
                bottomFont: "Hanover-7:3"
            }
        }
    },
    5004: {
        1: {
            front: {
                renderType: "message",
                text: "CCL  Bridging  Bus",
                font: "Hanover-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "CCL",
                topFont: "Mobitec-10:7",

                bottom: "Bridging",
                bottomFont: "Hanover-7:3"
            }
        }
    },
    5005: {
        1: {
            front: {
                renderType: "message",
                text: "DTL  Bridging  Bus",
                font: "Hanover-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "DTL",
                topFont: "Mobitec-10:7",

                bottom: "Bridging",
                bottomFont: "Hanover-7:3"
            }
        }
    },
    5006: {
        1: {
            front: {
                renderType: "message",
                text: "TEL  Bridging  Bus",
                font: "Hanover-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "TEL",
                topFont: "Mobitec-10:7",

                bottom: "Bridging",
                bottomFont: "Hanover-7:3"
            }
        }
    },
    5007: {
        1: {
            front: {
                renderType: "message",
                text: "LRT  Bridging  A",
                font: "Hanover-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "LRT",
                topFont: "Mobitec-10:7",

                bottom: "A",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    5008: {
        1: {
            front: {
                renderType: "message",
                text: "LRT  Bridging  B",
                font: "Hanover-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "LRT",
                topFont: "Mobitec-10:7",

                bottom: "B",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    5009: {
        1: {
            front: {
                renderType: "message",
                text: "LRT  Bridging  East",
                font: "Hanover-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "LRT",
                topFont: "Mobitec-10:7",

                bottom: "EAST",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    5010: {
        1: {
            front: {
                renderType: "message",
                text: "LRT  Bridging  West",
                font: "Hanover-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "LRT",
                topFont: "Mobitec-10:7",

                bottom: "WEST",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    5100: {
        1: {
            front: {
                renderType: "message",
                text: "TT Black 01",
                font: "Mobitec-Tower16:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "BLACK",
                topFont: "LECIP-7:5",

                bottom: "01",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5101: {
        1: {
            front: {
                renderType: "message",
                text: "TT Black 02",
                font: "Mobitec-Tower16:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "BLACK",
                topFont: "LECIP-7:5",

                bottom: "02",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5102: {
        1: {
            front: {
                renderType: "message",
                text: "TT Black 03",
                font: "Mobitec-Tower16:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "BLACK",
                topFont: "LECIP-7:5",

                bottom: "03",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5103: {
        1: {
            front: {
                renderType: "message",
                text: "TT Black 04",
                font: "Mobitec-Tower16:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "BLACK",
                topFont: "LECIP-7:5",

                bottom: "04",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5104: {
        1: {
            front: {
                renderType: "message",
                text: "TT Blue 01",
                font: "Mobitec-Tower16:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "BLUE",
                topFont: "LECIP-7:5",

                bottom: "01",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5105: {
        1: {
            front: {
                renderType: "message",
                text: "TT Blue 02",
                font: "Mobitec-Tower16:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "BLUE",
                topFont: "LECIP-7:5",

                bottom: "02",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5106: {
        1: {
            front: {
                renderType: "message",
                text: "TT Blue 03",
                font: "Mobitec-Tower16:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "BLUE",
                topFont: "LECIP-7:5",

                bottom: "03",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5107: {
        1: {
            front: {
                renderType: "message",
                text: "TT Blue 04",
                font: "Mobitec-Tower16:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "BLUE",
                topFont: "LECIP-7:5",

                bottom: "04",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5108: {
        1: {
            front: {
                renderType: "message",
                text: "TT Brown 01",
                font: "Mobitec-Tower16:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "BROWN",
                topFont: "LECIP-7:5",

                bottom: "01",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5109: {
        1: {
            front: {
                renderType: "message",
                text: "TT Brown 02",
                font: "Mobitec-Tower16:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "BROWN",
                topFont: "LECIP-7:5",

                bottom: "02",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5110: {
        1: {
            front: {
                renderType: "message",
                text: "TT Brown 03",
                font: "Mobitec-Tower16:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "BROWN",
                topFont: "LECIP-7:5",

                bottom: "03",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5111: {
        1: {
            front: {
                renderType: "message",
                text: "TT Brown 04",
                font: "Mobitec-Tower16:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "BROWN",
                topFont: "LECIP-7:5",

                bottom: "04",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5112: {
        1: {
            front: {
                renderType: "message",
                text: "TT Green 01",
                font: "Mobitec-Tower16:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "GREEN",
                topFont: "LECIP-7:5",

                bottom: "01",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5113: {
        1: {
            front: {
                renderType: "message",
                text: "TT Green 02",
                font: "Mobitec-Tower16:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "GREEN",
                topFont: "LECIP-7:5",

                bottom: "02",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5114: {
        1: {
            front: {
                renderType: "message",
                text: "TT Green 03",
                font: "Mobitec-Tower16:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "GREEN",
                topFont: "LECIP-7:5",

                bottom: "03",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5115: {
        1: {
            front: {
                renderType: "message",
                text: "TT Green 04",
                font: "Mobitec-Tower16:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "GREEN",
                topFont: "LECIP-7:5",

                bottom: "04",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5200: {
        1: {
            front: {
                renderType: "message",
                text: "~  $  $  0  1",
                font: "Mobitec-Tower16:10",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT01",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5201: {
        1: {
            front: {
                renderType: "message",
                text: "~  $  $  0  2",
                font: "Mobitec-Tower16:10",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT02",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5224: {
        1: {
            front: {
                renderType: "message",
                text: "~  $  $  2  5",
                font: "Mobitec-Tower16:10",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT25",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5300: {
        1: {
            front: {
                renderType: "message",
                text: "Crew Bus                     B1",
                font: "Hanover-14:6",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "B1",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5400: {
        1: {
            front: {
                renderType: "twoline",
                top: "BULIM   TTS",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "HOTEL FERRY",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "BULIM",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "DEPOT",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    5401: {
        1: {
            front: {
                renderType: "twoline",
                top: "MANDAI   TTS",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "HOTEL FERRY",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "MANDAI",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "DEPOT",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    5401: {
        1: {
            front: {
                renderType: "twoline",
                top: "TTS HOTEL FERRY",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "EMPLOYEE SHUTTLE",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "HOTEL",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "FERRY",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    5998: {
        1: {
            front: {
                renderType: "twoline",
                top: "BULIM DEPOT",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "CREW BUS",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "BULIM",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "DEPOT",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    5999: {
        1: {
            front: {
                renderType: "twoline",
                top: "MANDAI DEPOT",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "CREW BUS",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "MANDAI",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "DEPOT",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    6271: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "170",
                destination: "LARKIN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "LARKIN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "170"
                },
                    "UPPER BUKIT TIMAH RD",
                    "BUKIT PANJANG MRT",
                    "WOODLANDS RD",
                    "KRANJI MRT",
                    "WOODLANDS CENTRE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "%50",
                destination: "PONTIAN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "PONTIAN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "%50"
                },
                    "PARADIGM MALL",
                    "SKUDAI",
                    "SRI PULAI / PULAI JAYA",
                    "KANGKAR PULAI",
                    "PEKAN NANAS",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "%50",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    6666: {
        1: {
            front: {
                renderType: "twoline",
                top: "TOWER TRANSIT SG",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "(FONTS ARE STILL WIP)",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "TOWER",
                topFont: "LECIP-6:4",
                topSpacing: 1,

                bottom: "TRANSIT",
                bottomFont: "LECIP-6:4",
                bottomSpacing: 1,
            }
        }
    },
    7971: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97e",
                destination: "RAFFLES QUAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "centreMessageServiceScroll",
                        serviceNumber: "97e",
                        top: "LIMITED STOPS",
                        topFont: "Hanover-Tower11:7",

                        bottom: "EXPRESS SERVICE",
                        bottomFont: "LECIP-7:5"
                    },
                    {
                        renderType: "destScroll",
                        top: "RAFFLES QUAY",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "97e"
                    },
                    "A Y E",
                    "ALEXANDRA RD",
                    "HARBOURFRONT",
                    "ROBINSON RD",
                    "(SKIP MBS)",
                    "(SKIP SUNTEC)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97e",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "centreMessageServiceScroll",
                        serviceNumber: "97e",
                        top: "LIMITED STOPS",
                        topFont: "Hanover-Tower11:7",

                        bottom: "EXPRESS SERVICE",
                        bottomFont: "LECIP-7:5"
                    },
                    {
                        renderType: "destScroll",
                        top: "JURONG EAST",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "97e"
                    },
                    "SHENTON WAY",
                    "HARBOURFRONT",
                    "ALEXANDRA RD",
                    "A Y E"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    9999: {
        1: {
            front: {
                renderType: "message",
                text: "BUS  UNDER  REPAIR",
                font: "LECIP-20:9",
                spacing: 1
            },
            rear: {
                renderType: 'twoline',
                top: "UNDER",
                topFont: "LECIP-7:4", // check font

                bottom: "REPAIR",
                bottomFont: "LECIP-7:4"
            }
        }
    }
}

EDSImages.TTSG = {
    blank: [[]],
    ChangiAirportControlTower: [
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    ],
}
