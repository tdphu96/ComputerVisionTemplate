export const drawRect = (detections, ctx) => {

    const trans = {
        person: 'Người',
        motorcycle: 'xe máy',
        bicycle: 'xe đạp',
    }

    detections.forEach( prediction => {
        const [ x, y, width, height ] = prediction['bbox'];
        const test = prediction['class'];
        const color = 'green'

        ctx.strokeStyle = color
        ctx.font = '28px Arial'
        ctx.fillStyle = 'red'

        ctx.lineWidth = 3;
        ctx.beginPath()
        ctx.fillText( trans[test] || test, x, y-20)
        ctx.rect(x, y, width, height)
        ctx.stroke()
    })
}

export const drawText = (detections, ctx) => {

    // const n

    const NumberOfPersons = detections.filter((e) => {if(e.class === 'person') return e})

    console.log('drawText', NumberOfPersons)
    ctx.font = '34px Arial'
    ctx.fontWeight = 'bold'
    ctx.fillStyle = '#FFF'

    ctx.fillText( `Number Of Persons: ${NumberOfPersons.length}`, 150, 120)
    // detections.forEach( prediction => {
    //     const [ x, y, width, height ] = prediction['bbox'];
    //
    //     ctx.font = '28px Arial'
    //     ctx.fillStyle = 'red'
    //
    //     ctx.fillText( `NumberOfPersons: ${NumberOfPersons.length}`, 200, 200)
    //     ctx.rect(x, y, width, height)
    // })
}
