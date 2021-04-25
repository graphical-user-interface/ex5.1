import React, { useEffect, useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}))

export default function App() {
	const classes = useStyles()
	const canvasRef = useRef(null)
	const drawHouse = (ctx, left, width, height, wallColor, roofColor) => {
		const canvasHeight = ctx.canvas.height
		ctx.beginPath()
		ctx.fillStyle = wallColor
		ctx.fillRect(left, canvasHeight - height - 100, width, height)
		ctx.fillStyle = roofColor
		ctx.moveTo(left - width / 2, canvasHeight - height - 100)
		ctx.lineTo(left + width / 2, canvasHeight - height - 100 - width / 2)
		ctx.lineTo(left + width + width / 2, canvasHeight - height - 100)
		ctx.fill()
	}
	const drawCanvas = (ctx) => {
		const canvasWidth = ctx.canvas.width
		const canvasHeight = ctx.canvas.height
		//Draw background
		ctx.beginPath()
		ctx.fillStyle = "cyan"
		ctx.fillRect(0, 0, canvasWidth, canvasHeight)

		//Draw the ground
		ctx.fillStyle = "brown"
		ctx.fillRect(0, canvasHeight - 100, canvasWidth, canvasHeight)

		//Draw houses
		drawHouse(ctx, 50, 100, 200, "orange", "red")
		drawHouse(ctx, 300, 200, 300, "blue", "yellow")
		drawHouse(ctx, 700, 50, 100, "grey", "green")
	}
	useEffect(() => {
		let ctx = canvasRef.current.getContext("2d")
		ctx.save()
		drawCanvas(ctx)
		ctx.restore()
	})
	return (
		<div className={classes.root}>
			<Box>
				<canvas width={1000} height={600} ref={canvasRef} />
			</Box>
		</div>
	)
}
