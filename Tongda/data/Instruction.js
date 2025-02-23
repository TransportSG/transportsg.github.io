EDSFormats.Instruction = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Tongda-16:7",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            font: {
                $$cond: {
                    "$destFont === null": "Mobitec-7:4",
                    "else": "$destFont"
                }
            },
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

            font: "Mobitec-Tower6:4",
            spacing: 1
        },

        text: "$destination+' '+$serviceNumber"
        
    },
    destScroll: {
        serviceNumber: {
            align: "left",
            margin: {
                left: 1
            },
            text: "$serviceNumber",
            font: "Tongda-16:7",
            spacing: 1
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: {
                $$cond: {
                    "$topFont === null": "Tongda-16:7",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                left: 'width(serviceNumber) - width(image)'
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
                    "$bottomFont === null": "Mobitec-7:4",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                left: 'width(serviceNumber) - width(image)'
            }
        },
        image: {
            align: "right",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
        
    },
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
        },
        text: "All LED Lit"
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
    scrollingDest: {
        __dynamic__: (matrix, data) => {
            let serviceNum = new TextObject(data.serviceNumber, Font.fromNameString("Tongda-16:7"), new Position(0, 0), 1)
            let destination = new TextObject(data.destination, Font.fromNameString("Tongda-16:7"), new Position(matrix.width, 0), 1)

            let serviceWidth = serviceNum.takeMeasure().width + 3
            let destinationWidth = destination.takeMeasure().width

            let framesNeeded = matrix.width + destinationWidth - serviceWidth
            let currentFrame = 0

            function drawFrame(frame) {
                matrix.onBeginDraw()
                destination.position.x = matrix.width - frame
                matrix.clearRectangle(0, 0, matrix.width, matrix.height)

                matrix.drawText(destination)
                
                matrix.clearRectangle(0, 0, serviceWidth, matrix.height)

                matrix.drawText(serviceNum)
                matrix.onEndDraw()
            }
            
            matrix.__scrollingInterval__ = setInterval(() => {
                drawFrame(currentFrame++)
                if (currentFrame === framesNeeded) currentFrame = 0
            }, 50)
        },
        text: "$serviceNumber+' '+$destination"
    }
}

EDSData.Instruction = {
    0: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "TEST",
            destination: "ON TEST"
        }
    },
    1: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Welcome paga",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Selamat datang! Tekan butang `",
                    topFont: "Hanover-7:3:3",
                    bottom: "diikuti oleh { dan } untuk memulakan",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Selamat datang! Tekan butang `",
                    topFont: "Hanover-7:3:3",
                    bottom: "diikuti oleh { dan } untuk memulakan",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Welcome! To start, press the `",
                    topFont: "Hanover-7:3:3",
                    bottom: "button, followed by { twice and }",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Welcome! To start, press the `",
                    topFont: "Hanover-7:3:3",
                    bottom: "button, followed by { twice and }",
                    bottomFont: "Hanover-7:3:3",
                },
            ]
        }
    },
    2: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Arahan dalam Bahasa Melayu (1/2)",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Bagusla! Anda telah menukar mesej",
                    topFont: "Hanover-7:3:3",
                    bottom: "yang dipaparkan melalui code list",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Bagusla! Anda telah menukar mesej",
                    topFont: "Hanover-7:3:3",
                    bottom: "yang dipaparkan melalui code list",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Tekan butang ` lagi, masukkan kod 10",
                    topFont: "Hanover-7:3:3",
                    bottom: "dan kemudian tekan butang }",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Tekan butang ` lagi, masukkan kod 10",
                    topFont: "Hanover-7:3:3",
                    bottom: "dan kemudian tekan butang }",
                    bottomFont: "Hanover-7:3:3",
                },
            ]
        }
    },
    3: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Instructions in English (1/2)",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Good job! You've changed the display by",
                    topFont: "Hanover-7:3:3",
                    bottom: "using the code list method. ",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Good job! You've changed the display by",
                    topFont: "Hanover-7:3:3",
                    bottom: "using the code list method. ",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Press ` again, followed by",
                    topFont: "Hanover-7:3:3",
                    bottom: "keying out code 20, and then press }",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Press ` again, followed by",
                    topFont: "Hanover-7:3:3",
                    bottom: "keying out code 20, and then press }",
                    bottomFont: "Hanover-7:3:3",
                },
            ]
        }
    },
    4: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "",
            scrolls: [
                {
                    renderType: "message",
                    text: "",
                    font: "Tongda-16:7",
                    spacing: 1
                }
            ]
        }
    },
    10: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Arahan dalam Bahasa Melayu (2/2)",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Bagusla! Anda telah menukar mesej yang",
                    topFont: "Hanover-7:3:3",
                    bottom: "dipaparkan dengan memasukkan kod",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Bagusla! Anda telah menukar mesej yang",
                    topFont: "Hanover-7:3:3",
                    bottom: "dipaparkan dengan memasukkan kod",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Terdapat 2 cara untuk memilih perkara",
                    topFont: "Hanover-7:3:3",
                    bottom: "perkara yang anda ingin paparkan",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Terdapat 2 cara untuk memilih perkara",
                    topFont: "Hanover-7:3:3",
                    bottom: "perkara yang anda ingin paparkan",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Sekarang, sila tekan butang ~",
                    topFont: "Hanover-7:3:3",
                    bottom: "tekan { sekali dan kemudian }",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Sekarang, sila tekan butang ~",
                    topFont: "Hanover-7:3:3",
                    bottom: "tekan { sekali dan kemudian }",
                    bottomFont: "Hanover-7:3:3",
                },
            ]
        }
    },
    20: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Instructions in English (2/2)",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Good job! You've changed the display by",
                    topFont: "Hanover-7:3:3",
                    bottom: "keying in the code of the desired display",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Good job! You've changed the display by",
                    topFont: "Hanover-7:3:3",
                    bottom: "keying in the code of the desired display",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "These are the two main ways to",
                    topFont: "Hanover-7:3:3",
                    bottom: "navigate your way in the simulator",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "These are the two main ways to",
                    topFont: "Hanover-7:3:3",
                    bottom: "navigate your way in the simulator",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Now, let's press ~ then { and } to",
                    topFont: "Hanover-7:3:3",
                    bottom: "go to another operator's display list",
                    bottomFont: "Hanover-7:3:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Now, let's press ~ then { and } to",
                    topFont: "Hanover-7:3:3",
                    bottom: "go to another operator's display list",
                    bottomFont: "Hanover-7:3:3",
                },
            ]
        }
    },
    30: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "",
            scrolls: [
                {
                    renderType: "message",
                    text: "",
                    font: "Tongda-16:7",
                    spacing: 1
                }
            ]
        }
    },
    9999: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "",
                    topFont: "Hanover-7:3:3",
                    bottom: "",
                    bottomFont: "Hanover-7:3:3",
                },

            ]
        }
    }
}

EDSExtras.Instruction = {
}

EDSImages.Instruction = {
"blank": [
    [0]
]
}
