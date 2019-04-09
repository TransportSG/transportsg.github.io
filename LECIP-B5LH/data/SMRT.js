EDSFormats.SMRT = {
    standardService: {
        serviceNumber: {
            align: "right,centre-y",
            margin: {
                right: 7
            },
            text: "$serviceNumber",
            font: "Arial-20",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                top: 2,
                right: 'width(serviceNumber) + len(7)'
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "centre-x,top",
            margin: {
                top: 14,
                right: 'width(serviceNumber) + len(7)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },

    pids: {
        __dynamic__: (matrix, data) => {
            let hold = false;
            function paint() {
                if (hold) return;

                matrix.clearRectangle(0, 0, matrix.width, matrix.height);

                matrixPrimitives.setStrokeColour(0x84e76e);
                matrixPrimitives.strokeRectangle(matrix, 0, 0, 32, 16);

                let font = 'LECIP-PIDS-7:13';
                let textWidth;
                try {textWidth = matrix.measureText(data.serviceNumber, font, 1).width;} catch (e) {textWidth = Infinity;}
                if (textWidth >= 32) {
                    font = 'LECIP-PIDS-5:13';
                    textWidth = matrix.measureText(data.serviceNumber, font, 1).width;
                }

                let textPosition = Math.round(32 / 2 - textWidth / 2);

                matrix.drawText(data.serviceNumber, font, 1, textPosition, 1, 0xffffff);

                function drawNextStop() {
                    let bottomRowNum = scrollNum % 3;

                    if (bottomRowNum == 0)
                        matrix.drawText('NEXT>>', 'LECIP-PIDS-5:13', 1, 1, 17, 0xffffff);
                    else if (bottomRowNum == 1)
                        matrix.drawText('STOP>>', 'LECIP-PIDS-5:13', 1, 1, 17, 0xe35f57);
                    else if (bottomRowNum == 2)
                        matrix.drawText('Arr>>', 'LECIP-PIDS-5:13', 2, 4, 17, 0xeae44a);
                }

                drawNextStop();


                let {destination} = data;
                let currentScroll = Math.floor(scrollNum / 3);

                if (data.secondDestination) {
                    if (currentScroll > data.secondDestination.changeIndex)
                        destination = data.secondDestination.name;
                }
                matrix.drawText(destination, 'LECIP-PIDS-5:13', 1, 33, 1, 0xffffff);

                let scrollWidth = matrix.measureText(data.scrolls[currentScroll], 'LECIP-PIDS-5:13', 1).width;

                if (scrollWidth > matrix.width - 34) { // scrolling text
                    hold = true;

                    let frameCount = scrollWidth + matrix.width - 32;
                    let timeBetweenFrames = 100;

                    let frameNum = 0;
                    let intervalID = setInterval(() => {
                        if (frameNum == frameCount) {
                            clearInterval(intervalID);
                            hold = false;
                            return;
                        }
                        matrix.clearRectangle(0, 17, matrix.width, matrix.height - 17);

                        matrix.drawText(data.scrolls[currentScroll], 'LECIP-PIDS-5:13', 1, matrix.width - frameNum, 17, 0xffffff);
                        matrix.clearRectangle(0, 17, 33, matrix.height - 17);
                        drawNextStop();

                        frameNum++;
                    }, timeBetweenFrames);
                } else
                    matrix.drawText(data.scrolls[currentScroll], 'LECIP-PIDS-5:13', 1, 33, 17, 0xffffff);

                scrollNum++;
                if (scrollNum >= data.scrolls.length * 3)
                    scrollNum = 0;
            }

            let scrollNum = 0;
            setInterval(paint, 5000);

            paint();
        }
    }
}

EDSData.SMRT = {
    9201: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "920",
                destination: {
                    text: "BT PANJANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'PETIR / JELUBU RD',
                    'SENJA RD / LINK',
                    'JELAPANG RD',
                    'SAUJANA RD',
                    'FAJAR RD',
                    'BT PANJANG RING RD',
                    'BANGKIT RD',
                ],
                scrollFont: 'Arial-8'
            },

            pids: {
                renderType: "pids",
                serviceNumber: "920",
                destination: "BANGKIT RD",
                secondDestination: {
                    name: "BT PANJANG INT",
                    changeIndex: 14
                },
                scrolls: [
                    "BT PANJANG INT",
                    "OPP BT PANJANG PLAZA",
                    "BLK 602",
                    "WEST VIEW PRI SCH",
                    "OPP BLK 628",
                    "BLK 636A",
                    "WEST SPRING SEC SCH",
                    "BLK 651",
                    "BLK 532",
                    "BET BLKS 502/503",
                    "BLK 413",
                    "BET BLKS 443A/443B",
                    "BLK 442D",
                    "BANGKIT STN",
                    "OPP BLK 271", // where dest switch from BANGKIT RD to BT PANJANG INT
                    "OPP BLK 253",
                    "OPP BANGKIT STN",
                    "BLK 239",
                    "BLK 401A CP",
                    "BLK 408",
                    "OPP BLK 502",
                    "OPP BLK 532",
                    "OPP BLK 650",
                    "OPP WEST SPRING SEC SCH",
                    "BEF BLK 629A CP",
                    "BLK 628",
                    "BLK 610",
                    "BLK 541A CP",
                    "BT PANJANG PLAZA",
                    "BT PANJANG INT"
                ]
            }
        }
    }
};
