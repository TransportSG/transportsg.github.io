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
    twolinerear: {
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
    twolinefront: {
        top: {
            align: "centre-x,top",
            text: "$top",
            font: "$topFont",
            spacing: "$topSpacing",
            margin: {
                top: 0
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: "$bottom",
            font: "$bottomFont",
            spacing: "$bottomSpacing",
            margin: {
                bottom: 0
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
    standardServiceWithLeftImage: {
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
                    "else": "$topFont"
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
    'centreMessageServiceScroll2': {
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
                scrolls: [                    
                    "TOH GUAN RD",
                    "TOH GUAN RD EAST",
                    "TOH TUCK RD",   
                {
                    renderType: "destScroll",
                    top: "BEAUTY WORLD MRT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "41"
                },
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
                scrolls: [                    
                    "TOH TUCK RD",
                    "TOH GUAN RD EAST",
                    "TOH GUAN RD", 
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "41"
                },
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
    "41J": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "41",
                destination: "JALAN ANAK BUKIT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TOH GUAN RD",
                    "TOH GUAN RD EAST",
                    "TOH TUCK RD",   
                {
                    renderType: "destScroll",
                    top: "JALAN ANAK BUKIT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "41"
                },
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
                scrolls: [                    
                    "TOH TUCK RD",
                    "TOH GUAN RD EAST",
                    "TOH GUAN RD", 
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "41"
                },
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
                scrolls: [                    
                    "JURONG TOWN HALL RD",
                    "JALAN AHMAD IBRAHIM",
                    "CORPORATION DR",
                    "LAKESIDE MRT",
                    "JURONG WEST ST 51",   
                {
                    renderType: "destScroll",
                    top: "JURONG  WEST  ST  42",
                    topFont: "Hanover-14:6",
    
                    serviceNumber: "49"
                },
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
                scrolls: [                    
                    "JURONG WEST ST 51",
                    "LAKESIDE MRT",
                    "CORPORATION DR",
                    "YUAN CHING RD",
                    "JALAN AHMAD IBRAHIM",
                    "BOON LAY WAY", 
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "49"
                },
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
                scrolls: [                    
                    "JURONG TOWN HALL RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK WEST AVE 6",
                    "JALAN JURONG KECHIL",   
                {
                    renderType: "destScroll",
                    top: "BEAUTY WORLD MRT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "66"
                },
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
                scrolls: [                    
                    "JALAN JURONG KECHIL",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "JURONG TOWN HALL RD", 
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "66"
                },
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
                scrolls: [                    
                    "BUKIT BATOK CENTRAL",
                    "DUNEARN RD",
                    "LITTLE INDIA",
                    "MACPHERSON RD / EST",
                    "BEDOK RESERVOIR RD",,   
                {
                    renderType: "destScroll",
                    top: "BEDOK",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "66"
                },
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
                scrolls: [                    
                    "BEDOK RESERVOIR RD",
                    "MACPHERSON EST / RD",
                    "LITTLE INDIA",
                    "BUKIT TIMAH RD",
                    "BUKIT BATOK CENTRAL", 
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "66"
                },
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
                scrolls: [                    
                    "TOH TUCK RD",
                    "SIXTH AVE",
                    "HOLLAND VILLAGE / RD",
                    "ORCHARD RD",
                    "BRAS BASAH RD",   
                {
                    renderType: "destScroll",
                    top: "MARINA CENTRE",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "77"
                },
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
                scrolls: [                    
                    "STAMFORD RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "SIXTH AVE",
                    "TOH TUCK RD", 
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "77"
                },
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
                scrolls: [                    
                    "TOH TUCK AVE",
                    "SIXTH AVE",
                    "HOLLAND VILLAGE / RD",
                    "ORCHARD RD",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "77",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "BRAS BASAH RD",
                    bottomFont: "LECIP-7:5"
                },      
                {
                    renderType: "destScroll",
                    top: "STAMFORD RD",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "77"
                },
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
                scrolls: [                    
                    "STAMFORD RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "SIXTH AVE",
                    "TOH TUCK RD", 
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "77"
                },
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
                scrolls: [                    
                    "PENJURU RD",
                    "TANJONG PENJURU",
                    "PANDAN RD / AVE",
                    "WEST COAST RD",
                {
                    renderType: "destScroll",
                    top: "CLEMENTI MRT",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "78"
                },
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
                scrolls: [                    
                    "WEST COAST RD",
                    "PANDAN RD",
                    "TANJONG PENJURU",
                    "PENJURU RD",,
                {
                    renderType: "destScroll",
                    top: "JURONG TOWN HALL",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "78"
                },
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
                scrolls: [                    
                    "PENJURU RD",
                    "TANJONG PENJURU",
                    "PANDAN RD / AVE",
                    "WEST COAST RD",
                {
                    renderType: "destScroll",
                    top: "CLEMENTI MRT",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "78"
                },
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
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WEST COAST RD",
                    "PANDAN RD",
                    "TANJONG PENJURU",
                    "PENJURU RD",,
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "78"
                },
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
                scrolls: [                    
                    "QUALITY RD",
                    "THIRD CHIN BEE RD",
                    "JURONG PORT RD",
                    "TEBAN GARDENS RD",
                {
                    renderType: "destScroll",
                    top: "JURONG EAST MRT",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "79"
                },
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
                scrolls: [                    
                    "TEBAN GARDENS RD",
                    "JURONG PORT RD",
                    "THIRD CHIN BEE RD",
                    "QUALITY RD",
                {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "79"
                },
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
                    "JURONG TOWN HALL RD",
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
                scrolls: [                    
                    "CLEMENTI RD",
                    "NAT'L UNIVERSITY OF S'PORE",
                    "KENT RIDGE CRESCENT",

                {
                    renderType: "destScroll",
                    top: "CLEMENTI - NUS",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "96"
                },
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
                scrolls: [                    
                    "A Y E",
                    "ALEXANDRA RD",
                    "HARBOURFRONT",
                    "ROBINSON RD",
                    "BAYFRONT AVE / MBS",
                {
                    renderType: "destScroll",
                    top: "MARINA CENTRE",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "97"
                },
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
                scrolls: [                    
                    "BAYFRONT AVE / MBS",
                    "SHENTON WAY",
                    "HARBOURFRONT",
                    "ALEXANDRA RD",
                    "A Y E",
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "97"
                },
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
                scrolls: [                    
                    "A Y E",
                    "ALEXANDRA RD",
                    "HARBOURFRONT",
                    "ROBINSON RD",
                    "BAYFRONT AVE / MBS",
                {
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
                scrolls: [                    
                    "BAYFRONT AVE / MBS",
                    "SHENTON WAY",
                    "HARBOURFRONT",
                    "ALEXANDRA RD",
                    "A Y E",
                {
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
                destination: "CENTRAL BOULEVARD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "A Y E",
                    "ALEXANDRA RD",
                    "HARBOURFRONT",
                    "ROBINSON RD",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "97",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "MBS / SUNTEC",
                    bottomFont: "LECIP-7:5"
                },          
                {
                    renderType: "destScroll",
                    top: "CENTRAL  BOULEVARD",
                    topFont: "Hanover-14:6",
    
                    serviceNumber: "97"
                },
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
                scrolls: [                    
                    "SHENTON WAY",
                    "HARBOURFRONT",
                    "ALEXANDRA RD",
                    "A Y E",      
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "97"
                },
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
                scrolls: [                    
                    "JURONG EAST AVE 1",
                    'JURONG WEST AVE 1',
                    "LAKESIDE MRT",
                    "CORPORATION DR",
                    "JURONG PORT RD",
                    "JALAN BUROH",         
                {
                    renderType: "destScroll",
                    top: "JUORNG PIER WAY",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "98"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twolinerear",
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
                scrolls: [                    
                    "JURONG PORT RD",
                    "CORPORATION DR",
                    "LAKESIDE MRT",
                    "JURONG WEST AVE 1",
                    "JURONG EAST AVE 1",
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "98"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twolinerear",
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
                    "CORPORATION RD",
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
                    "JURONG ISLAND CHKPT"
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
                scrolls: [                    
                    "JURONG EAST AVE 1",
                    'JURONG WEST AVE 1',
                    "LAKESIDE MRT",
                    "CORPORATION DR",         
                {
                    renderType: "destScroll",
                    top: "CORPORATION RD",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "98M"
                },
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
                scrolls: [                    
                    "CORPORATION DR",
                    "LAKESIDE MRT",
                    "JURONG WEST AVE 1",
                    "JURONG EAST AVE 1",
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "98M"
                },
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
                    "LENTOR AVE",

                {
                    renderType: "destScroll",
                    top: "YISHUN RING RD",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "N1"
                },
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
                    "CANBERRA RD",,

                {
                    renderType: "destScroll",
                    top: "SEMBAWANG DR",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "N2"
                },
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
                scrolls: [                    
                    "COMMONWEALTH AVE WEST",
                    "HOLLAND VILLAGE / RD",
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "BAYFRONT AVE / MBS",         
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "106"
                },
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
                    "CENTRAL BOULEVARD", //Check if exist irl
                    "BAYFRONT AVE / MBS",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "COMMONWEALTH AVE WEST",
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "106"
                },
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
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "106",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "BRAS BASAH RD",
                    bottomFont: "LECIP-7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "106",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "SUNTEC / MBS",
                    bottomFont: "LECIP-7:5"
                },           
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "106"
                },
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
                    "COMMONWEALTH AVE WEST",,
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "106",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "MBS / ESPLANADE",
                    bottomFont: "LECIP-7:5"
                },       
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "106"
                },
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
                scrolls: [                    
                    "TEBAN GARDENS RD",
                    "WEST COAST RD",
                    "HARBOURFRONT",
                    "CHINATOWN",
                    "ORCHARD TURN",   
                {
                    renderType: "destScroll",
                    top: "TOA PAYOH",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "143"
                },
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
                scrolls: [                    
                    "ORCHARD RD",
                    "CHINATOWN",
                    "HARBOURFRONT",
                    "WEST COAST RD",
                    "TEBAN GARDENS RD",       
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "143"
                },
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
                scrolls: [                    
                    "JURONG TOWN HALL RD",
                    "TEBAN GARDENS RD",
                    "PANDAN GARDENS",

                {
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
                scrolls: [                    
                    "SEMBAWANG RD",
                    "UPPER THOMSON RD",
                    "THOMSON RD",
                    "ORCHARD RD",
                    "SHENTON WAY",   
                {
                    renderType: "destScroll",
                    top: "BUKIT MERAH",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "167"
                },
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
                scrolls: [                    
                    "CECIL STREET",
                    "ORCHARD TURN",
                    "THOMSON RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD",       
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "167"
                },
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
    "167E": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "167e",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "SEMBAWANG RD",
                    "SPRINGLEAF MRT",
                    "NEWTON MRT",
                    "ORCHARD RD",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "167e",
                    top: "LIMITED STOPS",
                    topFont: "Hanover-Tower11:7",

                    bottom: "EXPRESS SERVICE",
                    bottomFont: "LECIP-7:5"
                },
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "167e"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167e",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "167e",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "STAMFORD RD",
                    "ORCHARD TURN",
                    "NEWTON MRT",
                    "SPRINGLEAF MRT",
                    "SEMBAWANG RD",,
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "167e",
                    top: "LIMITED STOPS",
                    topFont: "Hanover-Tower11:7",

                    bottom: "EXPRESS SERVICE",
                    bottomFont: "LECIP-7:5"
                },
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "167e"
                },
                    ],
                    scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167e",
                font: "LECIP-TowerRear17:7",
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
                scrolls: [                    
                    "SEMBAWANG RD",
                    "UPPER THOMSON RD",
                    "THOMSON RD",
                    "ORCHARD RD",
                    "SHENTON WAY",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "167",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "BRAS BASAH RD",
                    bottomFont: "LECIP-7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "167",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "COLLYER QUAY",
                    bottomFont: "LECIP-7:5"
                },           
                {
                    renderType: "destScroll",
                    top: "BUKIT MERAH",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "167"
                },
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
                scrolls: [                    
                    "CECIL STREET",
                    "ORCHARD TURN",
                    "THOMSON RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "167",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "FULLERTON RD",
                    bottomFont: "LECIP-7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "167",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "ESPLANADE DR",
                    bottomFont: "LECIP-7:5"
                },             
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "167"
                },
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
                scrolls: [                    
                    "WOODLANDS AVE 9",
                    "ADMIRALTY RD EAST",
                    "YISHUN MRT",
                    "SEMBAWANG RD",
                    "ANG MO KIO AVE 3",
                {
                    renderType: "destScroll",
                    top: "ANG MO KIO",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "169"
                },
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
                scrolls: [                    
                    "ANG MO KIO AVE 3",
                    "SEMBAWANG RD",
                    "YISHUN MRT",
                    "ADMIRALTY RD EAST",
                    "WOODLANDS AVE 9",
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "169"
                    },
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
                scrolls: [                    
                    "YISHUN AVE 5",
                    "SEMBAWANG RD",
                    "MANDAI RD",
                    "PETIR RD",
                {
                    renderType: "destScroll",
                    top: "BUKIT PANJANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "171"
                },
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
                scrolls: [                    
                    "PETIR RD",
                    "MANDAI RD",
                    "SEMBAWANG RD",
                    "YISHUN AVE 5",
                    {
                        renderType: "destScroll",
                        top: "YISHUN",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "171"
                    },
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
    "171M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "171",
                destination: "MARINA CENTRE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "MANDAI RD",
                    "PETIR RD",
                    "UPPER BUKIT TIMAH RD",
                    "DUNEARN RD",
                    "ORCHARD / BRAS BASAH RD",
                {
                    renderType: "destScroll",
                    top: "MARINA CENTRE",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "171"
                },
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
                scrolls: [                    
                    "ORCHARD TURN",
                    "BUKIT TIMAH RD",
                    "UPPER BUKIT TIMAH RD",
                    "PETIR RD",
                    "MANDAI RD",
                    {
                        renderType: "destScroll",
                        top: "YISHUN",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "171"
                    },
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
                scrolls: [                    
                    "BUKIT BATOK EAST AVE 4",
                    "HILLVIEW AVE",
                    "HUME AVE",
                    "BEAUTY WORLD MRT",
                    "TOH TUCK RD / TERRACE",
                {
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "173"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twolinerear",
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
                scrolls: [                    
                    "TOH TUCK RD / RISE",
                    "BEAUTY WORLD MRT",
                    "HUME AVE",
                    "JALAN BATU NILAM",
                    "BUKIT BATOK EAST AVE 4",
                    {
                        renderType: "destScroll",
                        top: "BUKIT BATOK",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "173"
                    },
                    ],
                    scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twolinerear",
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
                scrolls: [                    
                    "BUKIT BATOK EAST AVE 4",
                    "HILLVIEW AVE",
                    "MINDEF",
                    "UPPER BUKIT TIMAH RD",
                {
                    renderType: "destScroll",
                    top: "BUKIT PANJANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "177"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "177",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "PANJANG",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
                scrolls: [
                    {
                        renderType: "twolinerear",
                        top: "177",
                        topFont: "LECIP-TowerRear10:7",
                        topSpacing: 2,
        
                        bottom: "PANJANG",
                        bottomFont: "Hanover-5:3",
                        bottomSpacing: 1,
                    }
                ]
            },
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "177",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JELEBU RD",
                    "UPPER BUKIT TIMAH RD",
                    "MINDEF",
                    "HILLVIEW AVE",
                    "BUKIT BATOK EAST AVE 4",
                    {
                        renderType: "destScroll",
                        top: "BUKIT BATOK",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "177"
                    },
                    ],
                    scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twolinerear",
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
                scrolls: [                    
                    "TOH GUAN RD EAST",
                    "CLEMENTI MRT",
                    "CLEMENTI RD",
                    "PASIR PANJANG RD",
                {
                    renderType: "destScroll",
                    top: "SCIENCE  PARK  RD",
                    topFont: "Hanover-14:6",
        
                    serviceNumber: "183"
                },
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
                scrolls: [                    
                    "PASIR PANJANG RD",
                    "CLEMENTI RD",
                    "CLEMENTI MRT",
                    "TOH GUAN RD EAST",
                    {
                        renderType: "destScroll",
                        top: "JURONG EAST",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "183"
                    },
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
                scrolls: [                    
                    "BUKIT BATOK EAST AVE 6",                    
                    "BUKIT BATOK ST 23",
                    "CLEMENTI AVE 6",
                    "CLEMENTI MRT",
                {
                    renderType: "destScroll",
                    top: "CLEMENTI AVE 1",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "189"
                },
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
                scrolls: [                    
                    "CLEMENTI MRT",
                    "CLEMENTI AVE 6",
                    "BUKIT BATOK ST 23",
                    "BUKIT BATOK EAST AVE 6",
                    {
                        renderType: "destScroll",
                        top: "BUKIT BATOK",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "189"
                    },
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
                scrolls: [                    
                    "CLEMENTI AVE 5",
                    "CLEMENTI AVE 2",
                    "CLEMENTI WEST ST 2",

                {
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "282"
                },
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
                scrolls: [                    
                    "CLEMENTI AVE 4",

                {
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "284"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "28$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
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
                scrolls: [                    
                    "CLEMENTI AVE 2",
                    "WEST COAST RD",
                    "PANDAN LOOP",
                {
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "285"
                },
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
                scrolls: [                    
                    "TOH GUAN RD", 
                    "JURONG EAST AVE 1",
                    "JURONG EAST ST 32",
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "333"
                },
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
                scrolls: [                    
                    "JURONG EAST AVE 1", 
                    "JURONG WEST AVE 1",
                    "JURONG WEST ST 42",
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "334"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "33$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
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
                scrolls: [                    
                    "JURONG TOWN HALL RD",
                    "BOON LAY WAY",
                    "JURONG WEST ST 51",
                    "JURONG WEST ST 52",
                    "JURONG WEST ST 41",
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "335"
                },
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
                destination: "MARINA BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JURONG WEST AVE 3/5",
                    "JURONG WEST ST 75/64",
                    "JURONG WEST ST 81/61",
                    "ANSON RD",
                    "ROBINSON RD",
                {
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
                scrolls: [                    
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "JURONG WEST ST 61/81",
                    "JURONG WEST ST 64/75",
                    "JURONG WEST AVE 5",
                {
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
                destination: "MARINA BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "HILLVIEW AVE",
                    "BUKIT BATOK EAST AVE 2",
                    "BUKIT BATOK EAST AVE 3",
                    "ANSON RD",
                    "ROBINSON RD",
                {
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
                scrolls: [                    
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "BUKIT BATOK EAST AVE 3",
                    "BUKIT BATOK EAST AVE 2",
                    "HUME AVE",
                {
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
                scrolls: [                    
                    "ADMIRALTY LINK",
                    "SEMBAWANG DR",
                    "DHOBY GHAUT MRT",
                    "BRAS BASAH RD",
                    "COLLYER QUAY",
                {
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
                scrolls: [                    
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "BUKIT BATOK EAST AVE 3",
                    "BUKIT BATOK EAST AVE 2",
                    "HUME AVE",
                {
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
                scrolls: [                    
                    "ADMIRALTY LINK",
                    "SEMBAWANG DR",
                    "DHOBY GHAUT MRT",
                    "NORTH BRIDGE RD",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "656",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "BRAS BASAH RD",
                    bottomFont: "LECIP-7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "656",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "COLLYER QUAY",
                    bottomFont: "LECIP-7:5"
                },

                {
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
                scrolls: [                    
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "SEMBAWANG RD",
                    "ADMIRALTY LINK",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "656",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "FULLERTON RD",
                    bottomFont: "LECIP-7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "656",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "ESPLANADE DR",
                    bottomFont: "LECIP-7:5"
                },

                {
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
                destination: "MARINA BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JURONG EAST AVE 1",
                    "TOH GUAN RD",
                    "ANSON RD",
                    "ROBINSON RD",
                {
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
                destination: "JURONG WEST AVE 1",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "TOH GUAN RD",
                    'JURONG EAST AVE 1',
                {
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
                scrolls: [                    
                    "YISHUN AVE 6 / RING RD",
                    "YISHUN CTRL / AVE 2",
                    "DHOBY GHAUT MRT",
                    "BRAS BASAH RD",
                    "COLLYER QUAY",

                {
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
                scrolls: [                    
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "YISHUN AVE 2 / CTRL",
                    "YISHUN AVE 11 / RING RD",

                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "663"
                },
                {
                    renderType: "destScroll",
                    top: "YISHUN AVE 6",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "665"
                },
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
                scrolls: [                    
                    "YISHUN AVE 6 / RING RD",
                    "YISHUN CTRL / AVE 2",
                    "DHOBY GHAUT MRT",
                    "NORTH BRIDGE RD",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "663",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "BRAS BASAH RD",
                    bottomFont: "LECIP-7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "663",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "COLLYER QUAY",
                    bottomFont: "LECIP-7:5"
                },

                {
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
                scrolls: [                    
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "YISHUN AVE 2 / CTRL",
                    "YISHUN AVE 11 / RING RD",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "663",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "FULLERTON RD",
                    bottomFont: "LECIP-7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "663",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "ESPLANADE DR",
                    bottomFont: "LECIP-7:5"
                },

                {
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
                scrolls: [                    
                    "MARSILING LANE / RISE",
                    "WOODLANDS AVE 5 / 4 / 1",
                    "DHOBY GHAUT MRT",
                    "BRAS BASAH RD",
                    "COLLYER QUAY",

                {
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
                destination: "MARSILING DRIVE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "WOODLANDS AVE 1 / 4 / 5",
                    "MARSILING RISE / LANE",

                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "665"
                },                
                {
                    renderType: "destScroll",
                    top: "MARSILING DRIVE",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "665"
                },
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
                scrolls: [                    
                    "MARSILING LANE / RISE",
                    "WOODLANDS AVE 5 / 4 / 1",
                    "DHOBY GHAUT MRT",
                    "NORTH BRIDGE RD",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "665",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "BRAS BASAH RD",
                    bottomFont: "LECIP-7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "665",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "COLLYER QUAY",
                    bottomFont: "LECIP-7:5"
                },

                {
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
                destination: "MARSILING DRIVE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "WOODLANDS AVE 1 / 4 / 5",
                    "MARSILING RISE / LANE",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "665",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "FULLERTON RD",
                    bottomFont: "LECIP-7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "665",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "ESPLANADE DR",
                    bottomFont: "LECIP-7:5"
                },

                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "665"
                },                
                {
                    renderType: "destScroll",
                    top: "MARSILING DRIVE",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "665"
                },
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
                destination: "MARINA BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "YISHUN AVE 6",
                    "YISHUN AVE 9",
                    "YISHUN RING RD",
                    "ANSON RD",
                    "ROBINSON RD",
                {
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
                scrolls: [                    
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "YISHUN RING RD",
                    "YISHUN AVE 9",
                    "YISHUN AVE 6",
                {
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
                scrolls: [                    
                    "YISHUN CENTRAL",
                    "YISHUN AVE 9",
                    "YISHUN AVE 6",
                    "YISHUN ST 42",
                    "YISHUN AVE 1",
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "801"
                },
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
                scrolls: [                    
                    "ANG MO KIO AVE 6",
                    "LENTOR MRT",
                    "LENTOR RD",
                    "LENTOR LOOP",
                {
                    renderType: "destScroll",
                    top: "YIO CHU KANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "825"
                },
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
                scrolls: [                    
                    "YISHUN AVE 2",
                    "ANG MO KIO AVE 6",
                    "SERANGOON CENTRAL",
                    "UPPER SERANGOON RD",
                    "GEYLANG BAHRU",
            {
                renderType: "destScroll",
                top: "LOR 1 GEYLANG",
                topFont: "Hanover-Tower11:7",
    
                serviceNumber: "853"
            },
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
                scrolls: [                    
                    "GEYLANG BAHRU",
                    "UPPER SERANGOON RD",
                    "SERANGOON CENTRAL",
                    "ANG MO KIO AVE 6",
                    "YISHUN AVE 2",
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "853"
                },
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
                scrolls: [                    
                    "ANG MO KIO AVE 6",
                    "SERANGOON CENTRAL",
                    "SIMS AVE",
                    "TANJONG KATONG RD",
                    "MARINE PARADE RD",
            {
                renderType: "destScroll",
                top: "UPP  EAST  COAST",
                topFont: "Hanover-14:6",
    
                serviceNumber: "853M"
            },
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
                scrolls: [                    
                    "MARINE PARADE RD",
                    "TANJONG KATONG RD",
                    "GEYLANG RD",
                    "SERANGOON CENTRAL",
                    "ANG MO KIO AVE 6",
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "853M"
                },
                ],
                    scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "853M",
                font: "LECIP-TowerRear17:10",
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
                scrolls: [                    
                    "YISHUN AVE 2",
                    "YIO CHU KANG RD",
                    "HOUGANG AVE 3",
                    "JLN EUNOS",
                    "NEW UPPER CHANGI RD",
            {
                renderType: "destScroll",
                top: "BEDOK",
                topFont: "Hanover-Tower12:7",
    
                serviceNumber: "854"
            },
            ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "854",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "NEW UPPER CHANGI RD",
                    "EUNOS LINK",
                    "HOUGANG AVE 3",
                    "YIO CHU KANG RD",
                    "YISHUN AVE 2",
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "854"
                },
                ],
                    scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
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
                scrolls: [                    
                    "YISHUN AVE 2",
                    "YIO CHU KANG RD",
                    "HOUGANG AVE 3",
                    "EUNOS LINK",
                {
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
                scrolls: [                    
                    "YISHUN AVE 2",
                    "UPPER THOMSON RD",
                    "ADAM RD",
                    "QUEENSWAY",
                    "JALAN BUKIT MERAH",
            {
                renderType: "destScroll",
                top: "HARBOURFRONT",
                topFont: "Hanover-Tower12:7",
    
                serviceNumber: "855"
            },
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
                scrolls: [                    
                    "JALAN BUKIT MERAH",
                    "QUEENSWAY",
                    "FARRER RD",
                    "UPPER THOMSON RD",
                    "YISHUN AVE 2",
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "855"
                },
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
                scrolls: [                    
                    "CANBERRA RD",
                    "ADMIRALTY RD WEST",
                    "SENOKO DR",
                    "WOODLANDS NORTH MRT",
                    "MARSILING ESTATE",
            {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "856"
            },
            ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twolinerear",
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
                scrolls: [                    
                    "WOODLANDS TRAIN CHKPT",
                    "WOODLANDS NORTH MRT",
                    "SENOKO RD",
                    "ADMIRALTY RD WEST",
                    "CANBERRA RD",
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "856"
                },
                ],
                    scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twolinerear",
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
                scrolls: [                    
                "YIO CHU KANG RD",
                "BENDEMEER RD",
                "LITTLE INDIA",
                "BENCOOLEN ST",
                "BRAS BASAH RD",
            {
                renderType: "destScroll",
                top: "TEMASEK AVE",
                topFont: "Hanover-Tower12:7",
    
                serviceNumber: "857"
            },
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
                scrolls: [                    
                    "STAMFORD RD",
                    "SELEGIE RD",
                    "BOON KENG MRT",
                    "SERANGOON RD",
                    "YIO CHU KANG RD",
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "857"
                },
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
                scrolls: [                    
                    "YIO CHU KANG RD",
                    "BENDEMEER RD",
                    "LITTLE INDIA",
                    "BENCOOLEN ST",
            {
                renderType: "centreMessageServiceScroll",
                serviceNumber: "857",
                top: "SKIP",
                topFont: "Hanover-Tower11:7",

                bottom: "BRAS BASAH RD",
                bottomFont: "LECIP-7:5"
            },
            {
                renderType: "centreMessageServiceScroll",
                serviceNumber: "857",
                top: "SKIP",
                topFont: "Hanover-Tower11:7",

                bottom: "MARINA CENTRE / SUNTEC",
                bottomFont: "LECIP-7:5"
            },
            {
                renderType: "destScroll",
                top: "STAMFORD RD",
                topFont: "Hanover-Tower12:7",
    
                serviceNumber: "857"
            },
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
                scrolls: [                    
                    "STAMFORD RD",
                    "SELEGIE RD",
                    "BOON KENG MRT",
                    "SERANGOON RD",
                    "YIO CHU KANG RD",
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "857"
                },
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
                scrolls: [                    
                    "WOODLANDS AVE 9",
                    "SEMBAWANG WAY",
                    "YISHUN MRT",
                    "JALAN KAYU",
                    "T P E",
            {
                    renderType: "destScroll",
                    top: "CHANGI AIRPORT",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "858"
            },
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
                scrolls: [                    
                    "T P E",
                    "JALAN KAYU",
                    "YISHUN MRT",
                    "SEMBAWANG WAY",
                    "WOODLANDS AVE 9",
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "858"
                },
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
                    "AFT SELETAR CAMP G",
                    {
                        renderType: "destScroll",
                        top: "JALAN KAYU",
                        topFont: "Hanover-Tower11:7",
                        bottom: "CHANGI AIRPORT",
                        bottomFont: "LECIP-7:5",
            
                        serviceNumber: "858B"
                    },
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
                scrolls: [                    
                    "CANBERRA RD",
                    "ADMIRALTY LINK",
                    "SEMBAWANG CRES",
                    "SEMBAWANG RD",
                    "YISHUN AVE 5",
            {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "859"
            },
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
                scrolls: [                    
                    "YISHUN AVE 5",
                    "SEMBAWANG RD",
                    "SEMBAWANG CRES",
                    "ADMIRALTY LINK",
                    "CANBERRA RD",
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "859"
                },
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
                scrolls: [                    
                    "CANBERRA RD",
                    "ADMIRALTY LINK",
                    "ADMIRALTY DR",
                    "SEMBWAWANG CRES",
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "859A"
                },
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
                scrolls: [                    
                    "SEMBAWANG CRES",
                    "ADMIRALTY DR",
                    "ADMIRALTY LINK",
                    "CANBERRA RD",
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "859B"
                },
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
                scrolls: [                    
                    "BUKIT BATOK AVE 1",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 3",
                    "PLANTATION CRESCENT",
            {
                    renderType: "destScroll",
                    top: "TENGAH",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "870"
            },
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
                scrolls: [                    
                    "BUKIT BATOK RD",
                    "BUKIT BATOK WEST AVE 3",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK AVE 1",
                    "JURONG EAST CENTRAL",
                {
                    renderType: "destScroll",
                    top: "JURONG TOWN HALL",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "870"
                },
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
                    "TENGAH BOULEVARD",
                    "BLK 231B"
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
                scrolls: [                    
                    "WELLINGTON CIRCLE",
                    "MONTREAL DR",
                    "MONTREAL LINK",
                    "SEMBAWANG RD",
                    "SEMBAWANG PARK",
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "882"
                },
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
                scrolls: [                    
                    "CANBERRA WAY",
                    "CANBERRA ST",
                    "CANBERRA MRT",
                    "YISHUN AVE 2",
                    "YISHUN MRT",
            {
                    renderType: "destScroll",
                    top: "YISHUN CTRL 2",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "883"
            },
            ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twolinerear",
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
                scrolls: [                    
                    "YISHUN MRT",
                    "YISHUN AVE 2",
                    "CANBERRA MRT",
                    "CANBERRA ST",
                    "CANBERRA WAY",
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "883"
                },
                ],
                    scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twolinerear",
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
                scrolls: [                    
                    "CANBERRA WAY",
                    "CANBERRA ST",
                    "CANBERRA MRT",
                    "YISHUN AVE 7",
                    "YISHUN AVE 5",
                {
                    renderType: "destScroll",
                    top: "YISHUN AVE 5",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "883M"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twolinerear",
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
                scrolls: [                    
                    "YISHUN MRT",
                    "YISHUN AVE 2",
                    "CANBERRA MRT",
                    "CANBERRA ST",
                    "CANBERRA WAY",
                    {
                        renderType: "destScroll",
                        top: "SEMBAWANG",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "883M"
                    },
                    ],
                    scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twolinerear",
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
                scrolls: [                    
                    "BUKIT BATOK AVE 1",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK WEST AVE 9",,
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "941"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9$1",
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
                scrolls: [                    
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK RD",
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "944"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9$$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
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
                scrolls: [                    
                    "BUKIT BATOK EAST AVE 5",
                   "BUKIT BATOK ST 52",
                   "BUKIT GOMBAK MRT",
                   "BUKIT BATOK WEST AVE 7",
                   "BUKIT BATOK ST 34",
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "945"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9$5",
                font: "LECIP-TowerRear17:10",
                spacing: 1
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
                scrolls: [                    
                    "BUKIT BATOK WEST AVE 2",
                    "BUKIT BATOK WEST AVE 4",
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "947"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9$7",
                font: "LECIP-TowerRear17:10",
                spacing: 1
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
                scrolls: [                    
                    "BUKIT PANJANG RD",
                    "HILLVIEW AVE",
                    "BUKIT BATOK EAST AVE 3",
                    "A Y E",
                    "ALEXANDRA RD",
                {
                    renderType: "destScroll",
                    top: "HARBOURFRONT",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "963"
                },
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
                scrolls: [                    
                    "ALEXANDRA RD",
                    "A Y E",
                    "BUKIT BATOK EAST AVE 3",
                    "HILLVIEW AVE",
                    "BUKIT PANJANG RD",
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "963"
                    },
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
                scrolls: [                    
                    "WOODLANDS AVE 3",
                    "BUKIT PANJANG RD",
                    "HILLVIEW AVE",
                    "BT BATOK EAST AVE 3",
                    " A Y E",
                {
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
                scrolls: [                    
                    "A Y E",
                    "BT BATOK EAST AVE 3",
                    "HILLVIEW AVE",
                    "BUKIT PANJANG RD",
                    "WOODLANDS AVE 3",
                {
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
                destinationFont: "Mobitec-Tower11:4",
                scrolls: [                    
                    "WOODLANDS AVE 3",
                    "BUKIT PANJANG RD",
                    "HILLVIEW AVE",
                    "BT BATOK EAST AVE 3",
                    " A Y E",
                {
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
                    topFont: "Mobitec-9:6",
                    bottom: "SENTOSA",
                    bottomFont: "Mobitec-9:6",
        
                    serviceNumber: "963R"
                },
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
                scrolls: [                    
                    "A Y E",
                    "BT BATOK EAST AVE 3",
                    "HILLVIEW AVE",
                    "BUKIT PANJANG RD",
                    "WOODLANDS AVE 3",
                {
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
                scrolls: [                    
                    "WOODLANDS AVE 7",
                    "GAMBAS AVE",
                    "YISHUN MRT",
                    "YISHUN MRT",
                    "COMPASSVALE RD",
                {
                    renderType: "destScroll",
                    top: "SENGKANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "965"
                },
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
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "COMPASSVALE RD",
                    "YISHUN MRT",
                    "YISHUN AVE 7",
                    "GAMBAS AVE",
                    "WOODLANDS AVE 7",
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "965"
                    },
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
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "963",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "963",
                    top: "HELLO UNCLE",
                    topFont: "Hanover-Tower11:7",

                    bottom: "IS THIS BUS GOING TO HILLVIEW",
                    bottomFont: "LECIP-6:3"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "963",
                    top: "HELLO UNCLE",
                    topFont: "Hanover-Tower11:7",

                    bottom: "IS THIS BUS GOING TO HILLVIEW",
                    bottomFont: "LECIP-6:3"
                },

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
    966: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "966",
                destination: "MARINE PARADE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WOODLANDS AVE 3",
                    "PENDING RD",
                    "JALAN KOLAM AYER",
                    "JALAN TOA PAYOH",
                    "JALAN EUNOS",
                {
                    renderType: "destScroll",
                    top: "MARINE PARADE",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "966"
                },
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
                scrolls: [                    
                    "MARINE PARADE RD",
                    "JALAN EUNOS",
                    "JALAN KOLAM AYER",
                    "JALAN TOA PAYOH",
                    "PENDING RD",
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "966"
                    },
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
                scrolls: [                    
                    "WOODLANDS AVE 7",
                    "GAMBAS AVE",
                    "YISHUN MRT",
                    "T P E",
                    "TAMPINES CONCOURSE",
                {
                    renderType: "destScroll",
                    top: "TAMPINES",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "969"
                },
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
                scrolls: [                    
                    "TAMPINES CONCOURSE",
                    "T P E",
                    "YISHUN MRT",
                    "GAMBAS AVE",
                    "WOODLANDS AVE 7",
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "969"
                    },
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
                scrolls: [                    
                    "UPPER JURONG RD",
                    "JURONG WEST ST 63",
                    "JALAN BOON LAY",
                    "CHOA CHU KANG MRT",
                    "CHOA CHU KANG WAY",
                {
                    renderType: "destScroll",
                    top: "BUKIT PANJANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "974"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "JOO KOON",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CHOA CHU KANG WAY",
                    "CHOA CHU KANG MRT",
                    "JALAN BOON LAY",
                    "JURONG WEST ST 63",
                    "UPPER JURONG RD",
                    {
                        renderType: "destScroll",
                        top: "JOO KOON",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "974"
                    },
                    ],
                    scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "974A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974A",
                destination: "ENDS AT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "LOT 1 SHOPPERS MALL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
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
                scrolls: [                    
                    "SEMBAWANG RD",
                    "UPPER THOMSON RD",
                    "THOMSON RD",
                    "LITTLE INDIA",
                    "BEACH RD",
                {
                    renderType: "destScroll",
                    top: "LOR 1 GEYLANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "980"
                },
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
                scrolls: [                    
                    "BEACH RD",
                    "LITTLE INDIA",
                    "THOMSON RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD",
                    {
                        renderType: "destScroll",
                        top: "SEMBAWANG",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "980"
                    },
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
                scrolls: [                    
                    "CANBERRA RD",
                    "ADMIRALTY RD WEST",
                    "SENOKO DR",
                    "SENOKO RD",
                {
                    renderType: "destScroll",
                    top: "SENOKO LOOP",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "981"
                },
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
                scrolls: [                    
                    "SENOKO RD",
                    "SENOKO LOOP",
                    "SENOKO DR",
                    "ADMIRALTY RD WEST",
                    "CANBERRA RD",
                    {
                        renderType: "destScroll",
                        top: "SEMBAWANG",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "981"
                    },
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
                scrolls: [                    
                    "BUKIT BATOK EAST AVE 3",
                    "BUKIT BATOK EAST AVE 6",
                    "TOH GUAN RD",
                {
                    renderType: "destScroll",
                    top: "JURONG  EAST  MRT",
                    topFont: "Hanover-14:6",
        
                    serviceNumber: "990"
                },
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
                scrolls: [                    
                    "TOH GUAN RD",
                    "BUKIT BATOK EAST AVE 6",
                    "BUKIT BATOK EAST AVE 3",
                    {
                        renderType: "destScroll",
                        top: "BUKIT BATOK",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "990"
                    },
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
                scrolls: [                    
                "BUKIT BATOK WEST AVE 6",
                "BUKIT BATOK WEST AVE 8",
                "BUKIT BATOK RD",
                "PLANTATION CRESCENT",
                "TENGAH BOULEVARD",
                {
                    renderType: "destScroll",
                    top: "TENGAH",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "992"
                },
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
                scrolls: [                    
                    "PLANTATION CRESCENT",
                    "BUKIT BATOK RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK WEST AVE 6",
                    {
                        renderType: "destScroll",
                        top: "BUKIT BATOK",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "992"
                    },
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
                    "TENGAH BOULEVARD",
                    "BLK 132B"
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
                text: "~ Off Service",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "~",
                font: "Hanover-Tower19:11",
                spacing: 1
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
                top: "~",
                topFont: "LECIP-7:4",

                bottom: "~",
                bottomFont: "LECIP-7:4"
            }
        }
    },
    2222: {
        1: {
            front: {
                renderType: "message",
                text: "Spare  Bus",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
                top: "Spare",
                topFont: "Hanover-7:5", 

                bottom: "Bus",
                bottomFont: "Hanover-7:5"
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
    4444: {
        1: {
            front: {
                renderType: "message",
                text: "On Test",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
                top: "On",
                topFont: "Hanover-7:5", // check font

                bottom: "Test",
                bottomFont: "Hanover-7:5"
            }
        }
    },
    5000: {
        1: {
            front: {
                renderType: "twolinefront",
                top: "ROUTE FAMILIARISATION",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "TRAINING",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twolinerear",
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
                text: "NSL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinefront',
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
                text: "EWL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinefront',
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
                text: "NEL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinefront',
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
                text: "CCL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinefront',
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
                text: "DTL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinefront',
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
                text: "TEL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinefront',
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
                text: "LRT Bridging A",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinefront',
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
                text: "LRT Bridging B",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinefront',
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
                text: "LRT Bridging East",
                font: "Hanover-Tower17:11",
                spacing: 1
            },
            rear: {
                renderType: 'twolinefront',
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
                text: "LRT Bridging West",
                font: "Hanover-Tower17:11",
                spacing: 1
            },
            rear: {
                renderType: 'twolinefront',
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
                text: "~ TT Black 01",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
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
                text: "~ TT Black 02",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
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
                text: "~ TT Black 03",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
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
                text: "~ TT Black 04",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
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
                text: "~ TT Blue 01",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
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
                text: "~ TT Blue 02",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
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
                text: "~ TT Blue 03",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
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
                text: "~ TT Blue 04",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
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
                text: "~ TT Brown 01",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
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
                text: "~ TT Brown 02",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
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
                text: "~ TT Brown 03",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
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
                text: "~ TT Brown 0$",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
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
                text: "~ TT Green 01",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
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
                text: "~ TT Green 02",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
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
                text: "~ TT Green 03",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
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
                text: "~ TT Green 0$",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
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
                text: "~  T T 0 1",
                font: "Hanover-Tower19:11",
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
                text: "~  T T 0 2",
                font: "Hanover-Tower19:11",
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
    5202: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 0 3",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT03",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5203: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 0 4",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT04",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5204: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 0 5",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT05",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5205: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 0 6",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT06",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5206: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 0 7",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT07",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5207: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 0 8",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT08",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5208: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 0 9",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT09",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5209: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 1 0",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT10",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5210: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 1 1",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT11",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5211: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 1 2",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT12",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5212: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 1 3",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT13",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5213: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 1 4",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT14",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5214: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 1 5",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT15",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5215: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 1 6",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT16",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5216: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 1 7",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT17",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5217: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 1 8",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT18",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5218: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 1 9",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT19",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5219: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 2 0",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT20",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5220: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 2 1",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT21",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5221: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 2 2",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT22",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5222: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 2 3",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT23",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5223: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 2 4",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT24",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5224: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 2 5",
                font: "Hanover-Tower19:11",
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
    5225: {
        1: {
            front: {
                renderType: "message",
                text: "~  T T 2 6",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "TT26",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5300: {
        1: {
            front: {
                renderType: "centreMessageServiceScroll2",
                serviceNumber: "b1",
                top: "~ Crew  Bus ",
                topFont: "Hanover-Tower19:11",
            },
            rear: {
                renderType: "message",
                text: "b1",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5301: {
        1: {
            front: {
                renderType: "centreMessageServiceScroll2",
                serviceNumber: "b2",
                top: "~ Crew  Bus ",
                topFont: "Hanover-Tower19:11",
            },
            rear: {
                renderType: "message",
                text: "b2",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5302: {
        1: {
            front: {
                renderType: "centreMessageServiceScroll2",
                serviceNumber: "b3",
                top: "~ Crew  Bus ",
                topFont: "Hanover-Tower19:11",
            },
            rear: {
                renderType: "message",
                text: "b3",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5303: {
        1: {
            front: {
                renderType: "centreMessageServiceScroll2",
                serviceNumber: "b4",
                top: "~ Crew  Bus ",
                topFont: "Hanover-Tower19:11",
            },
            rear: {
                renderType: "message",
                text: "b4",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5304: {
        1: {
            front: {
                renderType: "centreMessageServiceScroll2",
                serviceNumber: "b5",
                top: "~ Crew  Bus ",
                topFont: "Hanover-Tower19:11",
            },
            rear: {
                renderType: "message",
                text: "b5",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5305: {
        1: {
            front: {
                renderType: "centreMessageServiceScroll2",
                serviceNumber: "b6",
                top: "~ Crew  Bus ",
                topFont: "Hanover-Tower19:11",
            },
            rear: {
                renderType: "message",
                text: "b6",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5306: {
        1: {
            front: {
                renderType: "centreMessageServiceScroll2",
                serviceNumber: "b7",
                top: "~ Crew  Bus ",
                topFont: "Hanover-Tower19:11",
            },
            rear: {
                renderType: "message",
                text: "b7",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5307: {
        1: {
            front: {
                renderType: "centreMessageServiceScroll2",
                serviceNumber: "b8",
                top: "~ Crew  Bus ",
                topFont: "Hanover-Tower19:11",
            },
            rear: {
                renderType: "message",
                text: "b8",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5308: {
        1: {
            front: {
                renderType: "centreMessageServiceScroll2",
                serviceNumber: "b9",
                top: "~ Crew  Bus ",
                topFont: "Hanover-Tower19:11",
            },
            rear: {
                renderType: "message",
                text: "b9",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5400: {
        1: {
            front: {
                renderType: "twolinefront",
                top: "BULIM - TTS",
                topFont: "Hanover-Tower11:7",
                topSpacing: 1,

                bottom: "HOTEL FERRY",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twolinerear",
                top: "Bulim -",
                topFont: "Hanover-7:5",
                topSpacing: 1,

                bottom: "Hotel",
                bottomFont: "Hanover-7:5",
                bottomSpacing: 1,
            }
        }
    },
    5401: {
        1: {
            front: {
                renderType: "twolinefront",
                top: "MANDAI - TTS",
                topFont: "Hanover-Tower11:7",
                topSpacing: 1,

                bottom: "HOTEL FERRY",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twolinerear",
                top: "Mandai -",
                topFont: "Hanover-7:3",
                topSpacing: 1,

                bottom: "Hotel",
                bottomFont: "Hanover-7:3",
                bottomSpacing: 1,
            }
        }
    },
    5402: {
        1: {
            front: {
                renderType: "twolinefront",
                top: "TTS HOTEL FERRY",
                topFont: "Hanover-Tower11:7",
                topSpacing: 1,

                bottom: "EMPLOYEE SHUTTLE",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twolinerear",
                top: "Hotel",
                topFont: "Hanover-7:5",
                topSpacing: 1,

                bottom: "Ferry",
                bottomFont: "Hanover-7:5",
                bottomSpacing: 1,
            }
        }
    },
    5555: {
        1: {
            front: {
                renderType: "message",
                text: "Training  Bus",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
                top: "Training",
                topFont: "Hanover-7:3",

                bottom: "Bus",
                bottomFont: "Hanover-7:3"
            }
        }
    },
    5998: {
        1: {
            front: {
                renderType: "twolinefront",
                top: "BULIM DEPOT",
                topFont: "Hanover-Tower11:7",
                topSpacing: 1,

                bottom: "CREW BUS",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twolinerear",
                top: "Bulim",
                topFont: "Hanover-7:5",
                topSpacing: 1,

                bottom: "Depot",
                bottomFont: "Hanover-7:5",
                bottomSpacing: 1,
            }
        }
    },
    5999: {
        1: {
            front: {
                renderType: "twolinefront",
                top: "MANDAI DEPOT",
                topFont: "Hanover-Tower11:7",
                topSpacing: 1,

                bottom: "CREW BUS",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twolinerear",
                top: "Mandai",
                topFont: "Hanover-7:5",
                topSpacing: 1,

                bottom: "Depot",
                bottomFont: "Hanover-7:5",
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
                renderType: "message",
                text: "`",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: { 
                renderType: "message",
                text: "~",
                font: "Hanover-Tower19:11",
                spacing: 1
            }
        }
    },
    6667: {
        1: {
            front: {
                renderType: "twolinefront",
                top: "TOWER TRANSIT SG",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "(FONTS ARE STILL WIP)",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "message",
                text: "~",
                font: "Hanover-Tower19:11",
                spacing: 1
            }
        }
    },
    7971: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97e",
                destination: "CENTRAL BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "A Y E",
                    "ALEXANDRA RD",
                    "HARBOURFRONT",
                    "ROBINSON RD",
                    {
                        renderType: "centreMessageServiceScroll",
                        serviceNumber: "97e",
                        top: "LIMITED STOPS",
                        topFont: "Hanover-Tower11:7",

                        bottom: "EXPRESS SERVICE",
                        bottomFont: "LECIP-7:5"
                    },
                    {
                        renderType: "centreMessageServiceScroll",
                        serviceNumber: "97e",
                        top: "SKIPS",
                        topFont: "Hanover-Tower11:7",

                        bottom: "MBS / SUNTEC",
                        bottomFont: "LECIP-7:5"
                    },                    
                    {
                        renderType: "destScroll",
                        top: "CENTRAL  BOULEVARD",
                        topFont: "Hanover-14:6",
            
                        serviceNumber: "97e"
                    },
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
                scrolls: [
                    "SHENTON WAY",
                    "HARBOURFRONT",
                    "ALEXANDRA RD",
                    "A Y E",
                    {
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
                text: "Bus Under Repair",
                font: "Hanover-Tower17:11",
                spacing: 1
            },
            rear: {
                renderType: 'twolinerear',
                top: "Under",
                topFont: "Hanover-7:5", 

                bottom: "Repair",
                bottomFont: "Hanover-7:5"
            }
        }
    }
}

EDSImages.TTSG = {
    blank: [[]
     ],
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
    TTSRoundel: [ //TTS Roundel
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],  
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],  
        [0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
        [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], 
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],  
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],  
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],   
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],  
    ],
}
