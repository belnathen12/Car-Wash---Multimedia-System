(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Project_atlas_", frames: [[0,0,1920,1920],[2924,0,512,512],[3438,0,512,512],[2924,514,512,512],[1922,1516,500,500],[2436,1028,500,500],[3440,1028,500,500],[2938,1028,500,500],[3438,514,512,512],[2424,1530,500,500],[2926,1530,500,500],[1922,0,1000,1000],[3428,1530,500,500],[301,1922,251,274],[1922,1002,512,512],[0,1922,299,251]]}
];


// symbols:



(lib._33ca5738c2f2933f78ebe15b04a9ec9d = function() {
	this.spriteSheet = ss["Project_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._375 = function() {
	this.spriteSheet = ss["Project_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._61039 = function() {
	this.spriteSheet = ss["Project_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.about_us__424426 = function() {
	this.spriteSheet = ss["Project_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.automaticwash = function() {
	this.spriteSheet = ss["Project_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.felixcarwash2 = function() {
	this.spriteSheet = ss["Project_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.FOLLOWYOUUU = function() {
	this.spriteSheet = ss["Project_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.heeehehhehe = function() {
	this.spriteSheet = ss["Project_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hiaaa = function() {
	this.spriteSheet = ss["Project_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Hydraulic = function() {
	this.spriteSheet = ss["Project_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.link = function() {
	this.spriteSheet = ss["Project_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.logo_booking = function() {
	this.spriteSheet = ss["Project_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.logo_services = function() {
	this.spriteSheet = ss["Project_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Snow = function() {
	this.spriteSheet = ss["Project_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.stopbuttonpngrepocom = function() {
	this.spriteSheet = ss["Project_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Wax = function() {
	this.spriteSheet = ss["Project_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_Video = function(options) {
	this._element = new $.an.Video(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Tween31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.link();
	this.instance.parent = this;
	this.instance.setTransform(-22.9,-22.9,0.092,0.092);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-22.9,45.9,45.9);


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.link();
	this.instance.parent = this;
	this.instance.setTransform(-14.1,-14.1,0.057,0.057);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-14.1,28.3,28.3);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.648,0,0,0.648,-162,-162)).s().p("A5TZUMAAAgynMAynAAAMAAAAyng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162,-162,324,324);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Felix Carwash's waxing service uses imported wax that will provide maximum shine for your car.\n\nPrice: 75.000\nEstimated service time: 25 minutes", "20px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 395;
	this.text.parent = this;
	this.text.setTransform(0,-140);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.4,-142,399,284);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Felix Carwash's waxing service uses imported wax that will provide maximum shine for your car.\n\nPrice: 75.000\nEstimated service time: 25 minutes", "20px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 395;
	this.text.parent = this;
	this.text.setTransform(0,-140);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.4,-142,399,284);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("WAX", "30px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 197;
	this.text.parent = this;
	this.text.setTransform(0,-43.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.5,-45.8,201,91.8);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("WAX", "30px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 197;
	this.text.parent = this;
	this.text.setTransform(0,-43.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.5,-45.8,201,91.8);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Wax();
	this.instance.parent = this;
	this.instance.setTransform(-72.7,-66.1,0.486,0.527);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.7,-66.1,145.4,132.2);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Wax();
	this.instance.parent = this;
	this.instance.setTransform(-72.7,-66.1,0.486,0.527);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.7,-66.1,145.4,132.2);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("SNOW WASH", "40px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 260;
	this.text.parent = this;
	this.text.setTransform(0,-37.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.9,-39.9,264,79.8);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Snow();
	this.instance.parent = this;
	this.instance.setTransform(-75,-81.9,0.598,0.598);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-81.9,150.1,163.9);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],9), null, new cjs.Matrix2D(0.355,0,0,0.355,-88.8,-88.8)).s().p("At3N4IAA7vIbvAAIAAbvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.8,-88.8,177.6,177.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],9), null, new cjs.Matrix2D(0.355,0,0,0.355,-88.8,-88.8)).s().p("At3N4IAA7vIbvAAIAAbvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.8,-88.8,177.6,177.6);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.heeehehhehe();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol69, new cjs.Rectangle(0,0,102,102), null);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("GUARANTEE\n\n-24 hours guarantee-\n if it rains within 24 hours after we wash your car, we will rewash it, free of charge. Terms and conditions apply.\n-1 hour service -\n if we spend more than an hour to wash or wax your car, we will give you a free voucher to use on your next visit. Terms and conditions apply.", "13px 'Times New Roman'", "#FF3300");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 175;
	this.text.parent = this;
	this.text.setTransform(89.5,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol68, new cjs.Rectangle(0,0,179,224), null);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("AMENITIES.\n\nWe provide a comfortable and productive waiting room for our customers to resume their work. Our waiting room is equipped with free Wi-Fi access, as well as free tea and coffee. Moreover, we provide vending machines with various snacks and drinks.", "13px 'Times New Roman'", "#FF3300");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 164;
	this.text.parent = this;
	this.text.setTransform(84,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol67, new cjs.Rectangle(0,0,168,222), null);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("OUR SERVICES\n\nFrom a quick and automated wash to detailed and thorough wash, we provide a range of services to suit our customers’ needs.", "13px 'Times New Roman'", "#FF3333");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 149;
	this.text.parent = this;
	this.text.setTransform(76.5,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol66, new cjs.Rectangle(0,0,153,220.4), null);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiPFYIAAqvIEfAAIAAKvg");
	var mask_graphics_1 = new cjs.Graphics().p("AjAFYIAAqvIGBAAIAAKvg");
	var mask_graphics_2 = new cjs.Graphics().p("AjxFYIAAqvIHjAAIAAKvg");
	var mask_graphics_3 = new cjs.Graphics().p("AkiFYIAAqvIJFAAIAAKvg");
	var mask_graphics_4 = new cjs.Graphics().p("AlTFYIAAqvIKnAAIAAKvg");
	var mask_graphics_5 = new cjs.Graphics().p("AmDFYIAAqvIMHAAIAAKvg");
	var mask_graphics_6 = new cjs.Graphics().p("Am0FYIAAqvINpAAIAAKvg");
	var mask_graphics_7 = new cjs.Graphics().p("AnlFYIAAqvIPLAAIAAKvg");
	var mask_graphics_8 = new cjs.Graphics().p("AoWFYIAAqvIQtAAIAAKvg");
	var mask_graphics_9 = new cjs.Graphics().p("ApHFYIAAqvISPAAIAAKvg");
	var mask_graphics_10 = new cjs.Graphics().p("Ap4FYIAAqvITxAAIAAKvg");
	var mask_graphics_11 = new cjs.Graphics().p("AqpFYIAAqvIVTAAIAAKvg");
	var mask_graphics_12 = new cjs.Graphics().p("ArZFYIAAqvIW0AAIAAKvg");
	var mask_graphics_13 = new cjs.Graphics().p("AsKFYIAAqvIYVAAIAAKvg");
	var mask_graphics_14 = new cjs.Graphics().p("As8FYIAAqvIZ4AAIAAKvg");
	var mask_graphics_15 = new cjs.Graphics().p("AtsFYIAAqvIbZAAIAAKvg");
	var mask_graphics_16 = new cjs.Graphics().p("AudFYIAAqvIc7AAIAAKvg");
	var mask_graphics_17 = new cjs.Graphics().p("AvOFYIAAqvIedAAIAAKvg");
	var mask_graphics_18 = new cjs.Graphics().p("Av/FYIAAqvIf/AAIAAKvg");
	var mask_graphics_19 = new cjs.Graphics().p("AwwFYIAAqvMAhhAAAIAAKvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-2.4,y:24.8}).wait(1).to({graphics:mask_graphics_1,x:2.8,y:24.8}).wait(1).to({graphics:mask_graphics_2,x:8,y:24.8}).wait(1).to({graphics:mask_graphics_3,x:13.2,y:24.8}).wait(1).to({graphics:mask_graphics_4,x:18.4,y:24.8}).wait(1).to({graphics:mask_graphics_5,x:23.6,y:24.8}).wait(1).to({graphics:mask_graphics_6,x:28.8,y:24.8}).wait(1).to({graphics:mask_graphics_7,x:34,y:24.8}).wait(1).to({graphics:mask_graphics_8,x:39.3,y:24.8}).wait(1).to({graphics:mask_graphics_9,x:44.5,y:24.8}).wait(1).to({graphics:mask_graphics_10,x:49.6,y:24.8}).wait(1).to({graphics:mask_graphics_11,x:54.8,y:24.8}).wait(1).to({graphics:mask_graphics_12,x:60.1,y:24.8}).wait(1).to({graphics:mask_graphics_13,x:65.3,y:24.8}).wait(1).to({graphics:mask_graphics_14,x:70.5,y:24.8}).wait(1).to({graphics:mask_graphics_15,x:75.7,y:24.8}).wait(1).to({graphics:mask_graphics_16,x:80.9,y:24.8}).wait(1).to({graphics:mask_graphics_17,x:86.1,y:24.8}).wait(1).to({graphics:mask_graphics_18,x:91.3,y:24.8}).wait(1).to({graphics:mask_graphics_19,x:96.5,y:24.8}).wait(1));

	// Layer_1
	this.text = new cjs.Text("BOOKING", "35px 'Impact'");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 177;
	this.text.parent = this;
	this.text.setTransform(90.5,2);

	var maskedShapeInstanceList = [this.text];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,52.8);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ai/FkIAArHIF/AAIAALHg");
	var mask_graphics_1 = new cjs.Graphics().p("Aj0FkIAArHIHpAAIAALHg");
	var mask_graphics_2 = new cjs.Graphics().p("AkoFkIAArHIJRAAIAALHg");
	var mask_graphics_3 = new cjs.Graphics().p("AldFkIAArHIK7AAIAALHg");
	var mask_graphics_4 = new cjs.Graphics().p("AmSFkIAArHIMlAAIAALHg");
	var mask_graphics_5 = new cjs.Graphics().p("AnGFkIAArHIONAAIAALHg");
	var mask_graphics_6 = new cjs.Graphics().p("An7FkIAArHIP3AAIAALHg");
	var mask_graphics_7 = new cjs.Graphics().p("AowFkIAArHIRhAAIAALHg");
	var mask_graphics_8 = new cjs.Graphics().p("ApkFkIAArHITJAAIAALHg");
	var mask_graphics_9 = new cjs.Graphics().p("AqZFkIAArHIUzAAIAALHg");
	var mask_graphics_10 = new cjs.Graphics().p("ArOFkIAArHIWdAAIAALHg");
	var mask_graphics_11 = new cjs.Graphics().p("AsDFkIAArHIYHAAIAALHg");
	var mask_graphics_12 = new cjs.Graphics().p("As3FkIAArHIZvAAIAALHg");
	var mask_graphics_13 = new cjs.Graphics().p("AtsFkIAArHIbZAAIAALHg");
	var mask_graphics_14 = new cjs.Graphics().p("AuhFkIAArHIdDAAIAALHg");
	var mask_graphics_15 = new cjs.Graphics().p("AvVFkIAArHIerAAIAALHg");
	var mask_graphics_16 = new cjs.Graphics().p("AwKFkIAArHMAgVAAAIAALHg");
	var mask_graphics_17 = new cjs.Graphics().p("Aw/FkIAArHMAh/AAAIAALHg");
	var mask_graphics_18 = new cjs.Graphics().p("AxzFkIAArHMAjnAAAIAALHg");
	var mask_graphics_19 = new cjs.Graphics().p("AyoFkIAArHMAlRAAAIAALHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-32,y:26.8}).wait(1).to({graphics:mask_graphics_1,x:-25.1,y:26.8}).wait(1).to({graphics:mask_graphics_2,x:-18.1,y:26.8}).wait(1).to({graphics:mask_graphics_3,x:-11.2,y:26.7}).wait(1).to({graphics:mask_graphics_4,x:-4.3,y:26.7}).wait(1).to({graphics:mask_graphics_5,x:2.7,y:26.6}).wait(1).to({graphics:mask_graphics_6,x:9.6,y:26.6}).wait(1).to({graphics:mask_graphics_7,x:16.5,y:26.6}).wait(1).to({graphics:mask_graphics_8,x:23.5,y:26.5}).wait(1).to({graphics:mask_graphics_9,x:30.4,y:26.5}).wait(1).to({graphics:mask_graphics_10,x:37.4,y:26.5}).wait(1).to({graphics:mask_graphics_11,x:44.3,y:26.4}).wait(1).to({graphics:mask_graphics_12,x:51.2,y:26.4}).wait(1).to({graphics:mask_graphics_13,x:58.2,y:26.3}).wait(1).to({graphics:mask_graphics_14,x:65.1,y:26.3}).wait(1).to({graphics:mask_graphics_15,x:72,y:26.3}).wait(1).to({graphics:mask_graphics_16,x:79,y:26.2}).wait(1).to({graphics:mask_graphics_17,x:85.9,y:26.2}).wait(1).to({graphics:mask_graphics_18,x:92.8,y:26.2}).wait(1).to({graphics:mask_graphics_19,x:99.8,y:26.1}).wait(1));

	// Layer_1
	this.text = new cjs.Text("OUR SERVICES", "35px 'Impact'");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 202;
	this.text.parent = this;
	this.text.setTransform(103,2);

	var maskedShapeInstanceList = [this.text];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.stopbuttonpngrepocom();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.051,0.051);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.06,scaleY:0.06},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,26);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._61039();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.051,0.051);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.06,scaleY:0.06},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,26);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._375();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.051,0.051);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.06,scaleY:0.06},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,26);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.stopbuttonpngrepocom();
	this.instance.parent = this;
	this.instance.setTransform(73,0,0.051,0.051);

	this.instance_1 = new lib._61039();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36,0,0.051,0.051);

	this.instance_2 = new lib._375();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.051,0.051);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol56, new cjs.Rectangle(0,0,99,26), null);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.stopbuttonpngrepocom();
	this.instance.parent = this;
	this.instance.setTransform(73,0,0.051,0.051);

	this.instance_1 = new lib._61039();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36,0,0.051,0.051);

	this.instance_2 = new lib._375();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.051,0.051);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol55, new cjs.Rectangle(0,0,99,26), null);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Felix Carwash was established in early 2019. We believe in the collaboration between the best technologies and human touch to provide our customers with the best car wash experience.", "16px 'Times New Roman'", "#FF0033");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 150;
	this.text.parent = this;
	this.text.setTransform(77,40.7);

	this.text_1 = new cjs.Text("PROFILE", "20px 'Impact'", "#FF6600");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(78,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol52, new cjs.Rectangle(0,0,154,413.8), null);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.heeehehhehe();
	this.instance.parent = this;
	this.instance.setTransform(100,0,0.2,0.2,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiHFgIAAq/IEPAAIAAK/g");
	var mask_graphics_1 = new cjs.Graphics().p("Ai4FgIAAq/IFxAAIAAK/g");
	var mask_graphics_2 = new cjs.Graphics().p("AjpFgIAAq/IHSAAIAAK/g");
	var mask_graphics_3 = new cjs.Graphics().p("AkZFgIAAq/IIzAAIAAK/g");
	var mask_graphics_4 = new cjs.Graphics().p("AlKFgIAAq/IKVAAIAAK/g");
	var mask_graphics_5 = new cjs.Graphics().p("Al7FgIAAq/IL3AAIAAK/g");
	var mask_graphics_6 = new cjs.Graphics().p("AmsFgIAAq/INYAAIAAK/g");
	var mask_graphics_7 = new cjs.Graphics().p("AncFgIAAq/IO5AAIAAK/g");
	var mask_graphics_8 = new cjs.Graphics().p("AoNFgIAAq/IQbAAIAAK/g");
	var mask_graphics_9 = new cjs.Graphics().p("Ao+FgIAAq/IR9AAIAAK/g");
	var mask_graphics_10 = new cjs.Graphics().p("ApuFgIAAq/ITdAAIAAK/g");
	var mask_graphics_11 = new cjs.Graphics().p("AqfFgIAAq/IU/AAIAAK/g");
	var mask_graphics_12 = new cjs.Graphics().p("ArQFgIAAq/IWhAAIAAK/g");
	var mask_graphics_13 = new cjs.Graphics().p("AsAFgIAAq/IYCAAIAAK/g");
	var mask_graphics_14 = new cjs.Graphics().p("AsxFgIAAq/IZjAAIAAK/g");
	var mask_graphics_15 = new cjs.Graphics().p("AtiFgIAAq/IbFAAIAAK/g");
	var mask_graphics_16 = new cjs.Graphics().p("AuTFgIAAq/IcnAAIAAK/g");
	var mask_graphics_17 = new cjs.Graphics().p("AvEFgIAAq/IeJAAIAAK/g");
	var mask_graphics_18 = new cjs.Graphics().p("Av0FgIAAq/IfpAAIAAK/g");
	var mask_graphics_19 = new cjs.Graphics().p("AwlFgIAAq/MAhLAAAIAAK/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-14.4,y:25.6}).wait(1).to({graphics:mask_graphics_1,x:-10.4,y:25.5}).wait(1).to({graphics:mask_graphics_2,x:-6.4,y:25.4}).wait(1).to({graphics:mask_graphics_3,x:-2.4,y:25.3}).wait(1).to({graphics:mask_graphics_4,x:1.6,y:25.2}).wait(1).to({graphics:mask_graphics_5,x:5.6,y:25}).wait(1).to({graphics:mask_graphics_6,x:9.6,y:24.9}).wait(1).to({graphics:mask_graphics_7,x:13.6,y:24.8}).wait(1).to({graphics:mask_graphics_8,x:17.6,y:24.7}).wait(1).to({graphics:mask_graphics_9,x:21.5,y:24.6}).wait(1).to({graphics:mask_graphics_10,x:25.5,y:24.4}).wait(1).to({graphics:mask_graphics_11,x:29.5,y:24.3}).wait(1).to({graphics:mask_graphics_12,x:33.5,y:24.2}).wait(1).to({graphics:mask_graphics_13,x:37.5,y:24.1}).wait(1).to({graphics:mask_graphics_14,x:41.5,y:24}).wait(1).to({graphics:mask_graphics_15,x:45.5,y:23.8}).wait(1).to({graphics:mask_graphics_16,x:49.5,y:23.7}).wait(1).to({graphics:mask_graphics_17,x:53.5,y:23.6}).wait(1).to({graphics:mask_graphics_18,x:57.5,y:23.5}).wait(1).to({graphics:mask_graphics_19,x:61.5,y:23.4}).wait(1));

	// Layer_1
	this.text = new cjs.Text("ABOUT US", "35px 'Impact'");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 164;
	this.text.parent = this;
	this.text.setTransform(83.8,2);

	var maskedShapeInstanceList = [this.text];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.link();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.102,0.102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(0,0,51,51), null);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.link();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.102,0.102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,51.2);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.link();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.102,0.102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,51.2);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.link();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.102,0.102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,51.2);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.link();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.102,0.102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,51.2);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Dear Customers,\n\nPlease fill in the form correctly.\nWe will send you a reminder 30 minutes before your appointment.\nIf you do not come after 20 minutes from the selected time, we will send a rescheduling email.", "20px 'Times New Roman'", "#FF6600");
	this.text.lineHeight = 24;
	this.text.lineWidth = 255;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,0,259,291.8), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_1 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_2 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_3 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_4 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_5 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_6 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_7 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_8 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_9 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_10 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_11 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_12 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_13 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_14 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_15 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_16 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_17 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_18 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_19 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_20 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_21 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_22 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_23 = new cjs.Graphics().p("AsjCwIAAlfIZHAAIAAFfg");
	var mask_graphics_24 = new cjs.Graphics().p("AsjHLIAAuVIZHAAIAAOVg");
	var mask_graphics_34 = new cjs.Graphics().p("AsjHLIAAuVIZHAAIAAOVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:83.6,y:-17.6}).wait(1).to({graphics:mask_graphics_1,x:83.6,y:-16.8}).wait(1).to({graphics:mask_graphics_2,x:83.6,y:-15.9}).wait(1).to({graphics:mask_graphics_3,x:83.6,y:-15.1}).wait(1).to({graphics:mask_graphics_4,x:83.6,y:-14.3}).wait(1).to({graphics:mask_graphics_5,x:83.6,y:-13.4}).wait(1).to({graphics:mask_graphics_6,x:83.6,y:-12.6}).wait(1).to({graphics:mask_graphics_7,x:83.6,y:-11.8}).wait(1).to({graphics:mask_graphics_8,x:83.6,y:-10.9}).wait(1).to({graphics:mask_graphics_9,x:83.6,y:-10.1}).wait(1).to({graphics:mask_graphics_10,x:83.6,y:-9.3}).wait(1).to({graphics:mask_graphics_11,x:83.6,y:-8.5}).wait(1).to({graphics:mask_graphics_12,x:83.6,y:-7.6}).wait(1).to({graphics:mask_graphics_13,x:83.6,y:-6.8}).wait(1).to({graphics:mask_graphics_14,x:83.6,y:-6}).wait(1).to({graphics:mask_graphics_15,x:83.6,y:-5.1}).wait(1).to({graphics:mask_graphics_16,x:83.6,y:-4.3}).wait(1).to({graphics:mask_graphics_17,x:83.6,y:-3.5}).wait(1).to({graphics:mask_graphics_18,x:83.6,y:-2.6}).wait(1).to({graphics:mask_graphics_19,x:83.6,y:-1.8}).wait(1).to({graphics:mask_graphics_20,x:83.6,y:-1}).wait(1).to({graphics:mask_graphics_21,x:83.6,y:-0.1}).wait(1).to({graphics:mask_graphics_22,x:83.6,y:0.7}).wait(1).to({graphics:mask_graphics_23,x:83.6,y:1.5}).wait(1).to({graphics:mask_graphics_24,x:83.6,y:2.3}).wait(10).to({graphics:mask_graphics_34,x:83.6,y:2.3}).wait(1));

	// Layer_1
	this.text = new cjs.Text("ATTENTION", "24px 'Times New Roman'", "#FF3300");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 160;
	this.text.parent = this;
	this.text.setTransform(82,2);

	var maskedShapeInstanceList = [this.text];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.2,0,160.8,0);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.heeehehhehe();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,102,102), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.heeehehhehe();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,102);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.heeehehhehe();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,102);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.heeehehhehe();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,102);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.heeehehhehe();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,102);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Felix Carwash's hydraulic wash allows\n a detailed clean for your car.\nWith this service, we ensure every dirt on your car's body and under your car will be gone.\n\nPrice: IDR 50.000\nEstimated service time: 55 minutes", "20px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 479;
	this.text.parent = this;
	this.text.setTransform(241.5,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,483,176.2), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("HYDRAULIC WASH", "25px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 232;
	this.text.parent = this;
	this.text.setTransform(118,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,236,45.8), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Hydraulic();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.348,0.348);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,174.2,174.2), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Felix Carwash's snow wash creates an abundance of snow foam to clean your car.\nWith this service, your car will be clean and shiny.\n\nPrice: IDR 100.000\nEstimated service time: 45 minutes", "20px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 449;
	this.text.parent = this;
	this.text.setTransform(226.5,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,453,166.6), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Felix Carwash's automatic wash allows \nfast cleaning for your car.\nWithout having to leave your car, our imported machines will clean every speck of dirt off your car.\n\nPrice: IDR 40.000 \nEstimated service time: 15 minutes", "20px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 444;
	this.text.parent = this;
	this.text.setTransform(224,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,448,177.6), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("AUTOMATIC WASH", "30px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 288;
	this.text.parent = this;
	this.text.setTransform(146,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,292,42.1), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.automaticwash();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.46,0.46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,230.1,230.1), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAGBHIAAg8IgKAAIAAA8IglAAIAAiNIAlAAIAAAzIAKAAIAAgzIAkAAIAACNg");
	this.shape.setTransform(122.2,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXBFQgLgGgDgJQgDgIAAgQIAAgKIAiAAIAAASQAAAIACACQABACADAAQADAAACgDQACgDAAgFQAAgNgDgEQgEgEgNgJIgSgMQgFgEgCgHQgDgIAAgLQAAgQAEgIQAEgIAJgEQAKgEANAAQANAAAKAFQAKAEAEAHQADAHAAARIAAAGIgiAAIAAgLQAAgHgCgCQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAAAAAQgDAAgCADQgCACAAAGQAAAHACAEQACADAIAFQAYAPAHAJQAGAJAAAVQAAAPgDAHQgEAHgKAFQgKAFgOAAQgOAAgKgFg");
	this.shape_1.setTransform(112.6,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAJBHIgCgZIgMAAIgCAZIgnAAIATiNIA1AAIAVCNgAgGAUIAMAAIgGg6IgGA6g");
	this.shape_2.setTransform(103.3,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AALBHQgHghgEgoIgKBJIguAAIgQiNIAkAAIAEAyIADAvQACglAJg8IAlAAIAEAvIAEA1QADgzAHgxIAkAAIgQCNg");
	this.shape_3.setTransform(91.6,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaBEQgKgGgDgKQgEgKAAgVIAAgpIABgXQABgIAFgHQAGgHAJgEQAJgEAMAAQAQAAAKAGQALAHADAJQAEAKAAATIAAAOIglAAIAAgZQAAgLgCgCQgBgDgEAAQgDAAgCADQgBAEAAAKIAABBQAAALABADQACADADAAQAEAAABgDQACgDAAgMIAAgSIAlAAIAAAGQAAAWgEAJQgDAJgKAHQgLAHgQAAQgPAAgLgGg");
	this.shape_4.setTransform(76.2,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRBHIAAiNIAkAAIAACNg");
	this.shape_5.setTransform(68.6,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdBHIAAiNIAkAAIAABxIAXAAIAAAcg");
	this.shape_6.setTransform(62.9,13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUBFQgKgFgFgGQgFgHgBgIIAAgfIAAhUIAlAAIAABqIABAMQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQADAAABgDQABgDAAgLIAAhoIAlAAIAABfIgBAWQgBAHgFAHQgFAHgJADQgIAEgMAAQgLAAgKgEg");
	this.shape_7.setTransform(54.3,13.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAJBHIgCgZIgMAAIgCAZIgnAAIATiNIA1AAIAVCNgAgGAUIAMAAIgGg6IgGA6g");
	this.shape_8.setTransform(44.8,13);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAHBHIAAgvQAAgLgCgDQgCgDgGAAIAABAIglAAIAAiNIAaAAQAZAAAJACQAKACAFAIQAGAJAAASQAAAQgEAGQgEAGgMABQALACAEAEQADAFABAEQABADAAASIAAAlgAgDgOQAFAAACgCQADgBAAgKIAAgIQAAgGgCgDQgDgCgFAAg");
	this.shape_9.setTransform(35.4,13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgqBHIAAiNIAcAAQAaAAAJACQAKADAEAGQAFAFACAHQABAHAAAUIAAAxQAAATgCAHQgCAGgEAEQgFADgGACQgHABgNAAgAgFAvQAHAAACgDQACgEAAgOIAAg2IgBgMQAAgDgDgBQgCgCgFAAg");
	this.shape_10.setTransform(25.6,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQBHIAAgzIgahaIAiAAQAHAqABAOQACgXAIghIAhAAIgbBaIAAAzg");
	this.shape_11.setTransform(16.3,13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAFBHIAAg8IgKAAIAAA8IglAAIAAiNIAlAAIAAAzIAKAAIAAgzIAmAAIAACNg");
	this.shape_12.setTransform(7.1,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,129.3,26), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKBHQgGgVgEgfIgEAdIgEAXIgjAAIANhOIgNg/IAjAAIAEAUIAEATIAHgnIAfAAIgNA/IAUBOg");
	this.shape.setTransform(30.6,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAJBHIgCgZIgMAAIgCAZIgnAAIATiNIA1AAIAVCNgAgGAUIAMAAIgGg6IgGA6g");
	this.shape_1.setTransform(21.1,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AALBHQgHghgEgoIgKBJIguAAIgQiNIAkAAIAEAyIADAvQACglAJg8IAlAAIAEAvIAEA1QADgzAHgxIAkAAIgQCNg");
	this.shape_2.setTransform(9.4,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,36.9,26), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAGBHIAAg8IgKAAIAAA8IglAAIAAiNIAlAAIAAAzIAKAAIAAgzIAlAAIAACNg");
	this.shape.setTransform(108.3,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXBFQgLgGgDgJQgDgIAAgQIAAgKIAiAAIAAASQAAAIACACQABACADAAQADAAACgDQACgDAAgFQAAgNgDgEQgEgEgNgJIgSgMQgFgEgCgHQgDgIAAgLQAAgQAEgIQAEgIAJgEQAKgEANAAQANAAAKAFQAKAEAEAHQADAHAAARIAAAGIgiAAIAAgLQAAgHgCgCQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAAAAAQgDAAgCADQgCACAAAGQAAAHACAEQACADAIAFQAYAPAHAJQAGAJAAAVQAAAPgDAHQgEAHgKAFQgKAFgOAAQgOAAgKgFg");
	this.shape_1.setTransform(98.6,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAJBHIgCgZIgMAAIgCAZIgnAAIATiNIA1AAIAVCNgAgGAUIAMAAIgGg6IgGA6g");
	this.shape_2.setTransform(89.4,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AALBHQgHghgEgoIgKBJIguAAIgQiNIAkAAIAEAyIADAvQACglAJg8IAlAAIAEAvIAEA1QADgzAHgxIAkAAIgQCNg");
	this.shape_3.setTransform(77.7,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALBHQgHghgEgoIgKBJIguAAIgQiNIAkAAIAEAyIADAvQACglAJg8IAlAAIAEAvIAEA1QADgzAHgxIAkAAIgQCNg");
	this.shape_4.setTransform(59.9,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUBHQgJgEgFgIQgGgHgBgJIgBgfIAAgXIABgeQABgJAFgIQAGgHAJgEQAJgEALAAQALAAAJAEQAKADAFAIQAGAHABAJIABAfIAAAXIgBAfQgBAJgGAHQgFAHgJAEQgJAEgMAAQgLAAgJgDgAgDgvQgCADAAALIAABBQAAAMABADQABADADAAQAEAAABgDQABgEAAgMIAAhAQAAgKgBgDQgCgDgDAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAg");
	this.shape_5.setTransform(47.7,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAJBHIgShAIAABAIgfAAIAAiNIAfAAIATBAIAAhAIAfAAIAACNg");
	this.shape_6.setTransform(37.9,13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXBFQgLgGgDgJQgDgIAAgQIAAgKIAiAAIAAASQAAAIACACQABACADAAQADAAACgDQACgDAAgFQAAgNgDgEQgEgEgNgJIgSgMQgFgEgCgHQgDgIAAgLQAAgQAEgIQAEgIAJgEQAKgEANAAQANAAAKAFQAKAEAEAHQADAHAAARIAAAGIgiAAIAAgLQAAgHgCgCQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAAAAAQgDAAgCADQgCACAAAGQAAAHACAEQACADAIAFQAYAPAHAJQAGAJAAAVQAAAPgDAHQgEAHgKAFQgKAFgOAAQgOAAgKgFg");
	this.shape_7.setTransform(28.4,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,137,26), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAGBHIAAg8IgLAAIAAA8IglAAIAAiNIAlAAIAAAzIALAAIAAgzIAlAAIAACNg");
	this.shape.setTransform(124.7,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXBFQgLgGgDgJQgDgIAAgQIAAgKIAiAAIAAASQAAAIACACQABACADAAQADAAACgDQACgDAAgFQAAgNgDgEQgEgEgNgJIgSgMQgFgEgCgHQgDgIAAgLQAAgQAEgIQAEgIAJgEQAKgEANAAQANAAAKAFQAKAEAEAHQADAHAAARIAAAGIgiAAIAAgLQAAgHgCgCQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAAAAAQgDAAgCADQgCACAAAGQAAAHACAEQACADAIAFQAYAPAHAJQAGAJAAAVQAAAPgDAHQgEAHgKAFQgKAFgOAAQgOAAgKgFg");
	this.shape_1.setTransform(115.1,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAJBHIgCgZIgMAAIgCAZIgnAAIATiNIA1AAIAVCNgAgGAUIAMAAIgGg6IgGA6g");
	this.shape_2.setTransform(105.8,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AALBHQgHghgEgoIgKBJIguAAIgQiNIAkAAIAEAyIADAvQACglAJg8IAlAAIAEAvIAEA1QADgzAHgxIAkAAIgQCNg");
	this.shape_3.setTransform(94.1,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaBEQgKgGgDgKQgEgKAAgVIAAgpIABgXQABgIAFgHQAGgHAJgEQAJgEAMAAQAQAAAKAGQALAHADAJQAEAKAAATIAAAOIglAAIAAgZQAAgLgCgCQgBgDgEAAQgDAAgCADIgBAOIAABBQAAALABADQACADADAAQAEAAABgDQACgDAAgMIAAgSIAlAAIAAAGQAAAWgEAJQgDAJgKAHQgLAHgQAAQgPAAgLgGg");
	this.shape_4.setTransform(78.7,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSBHIAAiNIAlAAIAACNg");
	this.shape_5.setTransform(71.1,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSBHIAAhxIgWAAIAAgcIBRAAIAAAcIgWAAIAABxg");
	this.shape_6.setTransform(64.4,13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAJBHIgCgZIgMAAIgCAZIgnAAIATiNIA1AAIAVCNgAgGAUIAMAAIgGg6IgGA6g");
	this.shape_7.setTransform(56.6,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAZBHIAAhfIgNBfIgWAAIgOhdIAABdIggAAIAAiNIAwAAIAEAeIAEAkIAJhCIAwAAIAACNg");
	this.shape_8.setTransform(45.6,13);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUBHQgJgEgFgIQgGgHgBgJIgBgfIAAgXIABgeQABgJAFgIQAGgHAJgEQAJgEALAAQALAAAJAEQAKADAFAIQAGAHABAJIABAfIAAAXIgBAfQgBAJgGAHQgFAHgJAEQgJAEgMAAQgLAAgJgDgAgDgvQgCADAAALIAABBQAAAMABADQABADADAAQAEAAABgDQABgEAAgMIAAhAQAAgKgBgDQgCgDgDAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAg");
	this.shape_9.setTransform(34.3,13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSBHIAAhxIgWAAIAAgcIBRAAIAAAcIgWAAIAABxg");
	this.shape_10.setTransform(25.2,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUBFQgKgFgFgGQgFgHgBgIIAAgfIAAhUIAlAAIAABqIABAMQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQADAAABgDQABgDAAgLIAAhoIAlAAIAABfIgBAWQgBAHgFAHQgFAHgJADQgIAEgMAAQgLAAgKgEg");
	this.shape_11.setTransform(16.2,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAJBHIgCgZIgMAAIgCAZIgnAAIATiNIA1AAIAVCNgAgGAUIAMAAIgGg6IgGA6g");
	this.shape_12.setTransform(6.7,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,131.8,26), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.automaticwash();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.46,0.46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,230.1,230.1), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],15), null, new cjs.Matrix2D(0.485,0,0,0.527,-72.4,-66.1)).s().p("ArUKVIAA0pIWoAAIAAUpg");
	this.shape.setTransform(72.5,66.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,144.9,132.2), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],13), null, new cjs.Matrix2D(0.598,0,0,0.598,-75.3,-81.9)).s().p("ArsMzIAA5mIXZAAIAAZmg");
	this.shape.setTransform(74.9,82);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,149.9,163.9), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],4), null, new cjs.Matrix2D(0.459,0,0,0.459,-114.7,-114.7)).s().p("Ax6R7MAAAgj1MAj1AAAMAAAAj1g");
	this.shape.setTransform(114.7,114.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,229.5,229.5), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjNE0IAApnIGbAAIAAJng");
	var mask_graphics_1 = new cjs.Graphics().p("ACkE0IAApnIBEAAIAAJngAitE0Ig6gCIAAplIGLAAIAAJngAjnE0IAAgCIA6ACgAjnEygACkkzg");
	var mask_graphics_2 = new cjs.Graphics().p("AB6E0IAApnICHAAIAAJngAjJE0Ig3gFIAApiIF6AAIAAJngAkAE0IAAgFIA3AFgAkAEvgAB6kzg");
	var mask_graphics_3 = new cjs.Graphics().p("ABQE0IAApnIDLAAIAAJngAjlE0Ig1gHIAApgIFqAAIAAJngAkaE0IAAgHIA1AHgAkaEtgABQkzg");
	var mask_graphics_4 = new cjs.Graphics().p("AAmE0IAApnIEOAAIAAJngAkBE0IgygIIAApfIFZAAIAAJngAkzE0IAAgIIAyAIgAkzEsgAAmkzg");
	var mask_graphics_5 = new cjs.Graphics().p("AgDE0IAApnIFQAAIAAJngAkcE0IgxgLIAApcIFKAAIAAJngAlNE0IAAgLIAxALgAlNEpgAgDkzg");
	var mask_graphics_6 = new cjs.Graphics().p("AgtE0IAApnIGUAAIAAJngAk4E0IgugNIAApaIE5AAIAAJngAlmE0IAAgNIAuANgAlmEngAgtkzg");
	var mask_graphics_7 = new cjs.Graphics().p("AhXE0IAApnIHYAAIAAJngAlUE0IgsgPIAApYIEpAAIAAJngAmAE0IAAgPIAsAPgAmAElgAhXkzg");
	var mask_graphics_8 = new cjs.Graphics().p("AiBE0IAApnIIbAAIAAJngAlwE0IgpgRIAApWIEYAAIAAJngAmZE0IAAgRIApARgAmZEjgAiBkzg");
	var mask_graphics_9 = new cjs.Graphics().p("AirE0IAApnIJfAAIAAJngAmME0IgngTIAApUIEIAAIAAJngAmzE0IAAgTIAnATgAmzEhgAirkzg");
	var mask_graphics_10 = new cjs.Graphics().p("AjVE0IAApnIKiAAIAAJngAmoE0IgkgWIAApRID3AAIAAJngAnME0IAAgWIAkAWgAnMEegAjVkzg");
	var mask_graphics_11 = new cjs.Graphics().p("Aj/E0IAApnILmAAIAAJngAnEE0IgigYIAApPIDnAAIAAJngAnmE0IAAgYIAiAYgAnmEcgAj/kzg");
	var mask_graphics_12 = new cjs.Graphics().p("AkpE0IAApnIMpAAIAAJngAngE0IgfgaIAApNIDWAAIAAJngAn/E0IAAgaIAfAagAn/EagAkpkzg");
	var mask_graphics_13 = new cjs.Graphics().p("AlTE0IAApnINtAAIAAJngAn8E0IgdgcIAApLIDGAAIAAJngAoZE0IAAgcIAdAcgAoZEYgAlTkzg");
	var mask_graphics_14 = new cjs.Graphics().p("Al9E0IAApnIOwAAIAAJngAoYE0IgageIAApJIC1AAIAAJngAoyE0IAAgeIAaAegAoyEWgAl9kzg");
	var mask_graphics_15 = new cjs.Graphics().p("AmnE0IAApnIP0AAIAAJngAo0E0IgYghIAApGIClAAIAAJngApME0IAAghIAYAhgApMETgAmnkzg");
	var mask_graphics_16 = new cjs.Graphics().p("AnRE0IAApnIQ3AAIAAJngApQE0IgVgjIAApEICUAAIAAJngAplE0IAAgjIAVAjgAplERgAnRkzg");
	var mask_graphics_17 = new cjs.Graphics().p("An7E0IAApnIR7AAIAAJngApsE0IgTgkIAApDICEAAIAAJngAp/E0IAAgkIATAkgAp/EQgAn7kzg");
	var mask_graphics_18 = new cjs.Graphics().p("AolE0IAApnIS+AAIAAJngAqIE0IgQgnIAApAIBzAAIAAJngAqYE0IAAgnIAQAngAqYENgAolkzg");
	var mask_graphics_19 = new cjs.Graphics().p("ApPE0IAApnIUCAAIAAJngAqkE0IgOgpIAAo+IBjAAIAAJngAqyE0IAAgpIAOApgAqyELgApPkzg");
	var mask_graphics_20 = new cjs.Graphics().p("Ap5E0IAApnIVFAAIAAJngArAE0IgMgrIAAo8IBTAAIAAJngArME0IAAgrIAMArgArMEJgAp5kzg");
	var mask_graphics_21 = new cjs.Graphics().p("AqjE0IAApnIWJAAIAAJngArbE0IgKgtIAAo6IBCAAIAAJngArlE0IAAgtIAKAtgArlEHgAqjkzg");
	var mask_graphics_22 = new cjs.Graphics().p("ArNE0IAApnIXNAAIAAJngAr3E0IgIgvIAAo4IAyAAIAAJngAr/E0IAAgvIAIAvgAr/EFgArNkzg");
	var mask_graphics_23 = new cjs.Graphics().p("Ar3E0IAApnIYQAAIAAJngAsTE0IgFgyIAAo1IAhAAIAAJngAsYE0IAAgyIAFAygAsYECgAr3kzg");
	var mask_graphics_24 = new cjs.Graphics().p("AshE0IAApnIZUAAIAAJngAsvE0IgDg0IAAozIARAAIAAJngAsyE0IAAg0IADA0gAsyEAgAshkzg");
	var mask_graphics_25 = new cjs.Graphics().p("AtLE0IAApnIaXAAIAAJng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-20.6,y:17.2}).wait(1).to({graphics:mask_graphics_1,x:-17.1,y:17.2}).wait(1).to({graphics:mask_graphics_2,x:-13.7,y:17.2}).wait(1).to({graphics:mask_graphics_3,x:-10.2,y:17.2}).wait(1).to({graphics:mask_graphics_4,x:-6.8,y:17.2}).wait(1).to({graphics:mask_graphics_5,x:-3.3,y:17.2}).wait(1).to({graphics:mask_graphics_6,x:0.1,y:17.2}).wait(1).to({graphics:mask_graphics_7,x:3.5,y:17.2}).wait(1).to({graphics:mask_graphics_8,x:7,y:17.2}).wait(1).to({graphics:mask_graphics_9,x:10.4,y:17.2}).wait(1).to({graphics:mask_graphics_10,x:13.9,y:17.2}).wait(1).to({graphics:mask_graphics_11,x:17.3,y:17.2}).wait(1).to({graphics:mask_graphics_12,x:20.8,y:17.2}).wait(1).to({graphics:mask_graphics_13,x:24.2,y:17.2}).wait(1).to({graphics:mask_graphics_14,x:27.7,y:17.2}).wait(1).to({graphics:mask_graphics_15,x:31.1,y:17.2}).wait(1).to({graphics:mask_graphics_16,x:34.6,y:17.2}).wait(1).to({graphics:mask_graphics_17,x:38,y:17.2}).wait(1).to({graphics:mask_graphics_18,x:41.5,y:17.2}).wait(1).to({graphics:mask_graphics_19,x:44.9,y:17.2}).wait(1).to({graphics:mask_graphics_20,x:48.4,y:17.2}).wait(1).to({graphics:mask_graphics_21,x:51.8,y:17.2}).wait(1).to({graphics:mask_graphics_22,x:55.3,y:17.2}).wait(1).to({graphics:mask_graphics_23,x:58.7,y:17.2}).wait(1).to({graphics:mask_graphics_24,x:62.2,y:17.2}).wait(1).to({graphics:mask_graphics_25,x:65.6,y:17.2}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZBvIAAgtIAzAAIAAAtgAgUA4IgJimIA7AAIgJCmg");
	this.shape.setTransform(113.3,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgxBvIAAjdIBfAAIAAAtIgnAAIAAAqIAkAAIAAApIgkAAIAAAwIArAAIAAAtg");
	this.shape_1.setTransform(103.8,19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAnBvIAAiVIgVCVIgiAAIgViRIAACRIgzAAIAAjdIBLAAIAHAvIAHA5IANhoIBLAAIAADdg");
	this.shape_2.setTransform(87.6,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfBuQgOgGgJgMQgIgLgCgOQgCgOABgiIAAglQgBghACgOQACgOAIgLQAIgMAOgGQAOgGASAAQARAAAPAGQAOAFAIAMQAJAMACANQACAOAAAiIAAAlQAAAhgCAOQgCAOgIAMQgIALgOAGQgOAGgTAAQgRAAgOgFgAgGhJQgCADAAARIAABnQAAATABAEQACAFAFAAQAFAAADgFQABgFAAgUIAAhlQAAgPgBgEQgDgFgFAAQgDAAgDAEg");
	this.shape_3.setTransform(69.9,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgoBqQgQgJgGgQQgFgQAAghIAAhAQAAgXABgMQACgMAIgLQAJgMAOgGQAOgGATAAQAYAAARAKQAQAJAGAPQAFAPAAAfIAAAVIg5AAIAAgnQAAgQgCgFQgDgEgFAAQgHAAgBAFQgCAFgBARIAABmQABAQACAFQABAFAGAAQAGAAADgFQACgFAAgSIAAgcIA5AAIAAAJQAAAigFAOQgFAPgRALQgQAKgYAAQgYAAgRgJg");
	this.shape_4.setTransform(54.6,19.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgtBvIAAjdIA4AAIAACwIAjAAIAAAtg");
	this.shape_5.setTransform(42.3,19.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgxBvIAAjdIBfAAIAAAtIgmAAIAAAqIAkAAIAAApIgkAAIAAAwIAqAAIAAAtg");
	this.shape_6.setTransform(31,19.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AARBvQgKgzgHhAIgQBzIhIAAIgZjdIA4AAIAGBOIAGBJQADg5ANheIA6AAIAHBJIAHBUQAEhQALhNIA4AAIgZDdg");
	this.shape_7.setTransform(13.5,19.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.9,38.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSA1QgIgEgCgHQgDgHAAgMIAAgHIAbAAIAAANIABAIQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQACgDAAgEQAAgKgDgDQgDgDgKgHIgOgJQgDgDgDgGQgCgGAAgJQAAgMADgGQAEgGAHgDQAHgEAKAAQALAAAHAEQAIADADAGQACAGAAANIAAAEIgaAAIAAgIQAAgGgBgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAQgBABAAAAQAAABgBAAIgBAHQAAAFACADQABADAGAEQATALAFAGQAFAIAAAQQAAAMgDAFQgDAGgIAEQgIAEgKAAQgLAAgIgFg");
	this.shape.setTransform(89.3,132.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPA1QgIgDgEgGQgEgFAAgGIgBgYIAAhBIAdAAIAABSQAAAIABABQAAABAAAAQAAABABAAQAAAAABAAQAAABAAAAQAAAAABgBQABAAAAAAQABAAAAgBQAAAAAAgBQABgCAAgIIAAhRIAdAAIAABJIgBASQgBAFgEAFQgEAGgGACQgHAEgJAAQgJAAgHgEg");
	this.shape_1.setTransform(81.9,132.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNA3IAAhXIgRAAIAAgWIA9AAIAAAWIgRAAIAABXg");
	this.shape_2.setTransform(72.4,132.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPA1QgIgDgEgGQgEgFAAgGIgBgYIAAhBIAdAAIAABSQAAAIABABQAAABAAAAQAAABABAAQAAAAABAAQAAABAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAAAgBQABgCAAgIIAAhRIAdAAIAABJIgBASQgBAFgEAFQgEAGgGACQgHAEgJAAQgJAAgHgEg");
	this.shape_3.setTransform(65.3,132.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPA3QgHgDgEgGQgFgGgBgHIAAgYIAAgSIAAgXQABgHAEgGQAFgGAHgDQAHgDAIAAQAJAAAHADQAHADAEAGQAFAGAAAHIABAXIAAASIAAAYQgBAHgEAGQgFAFgHADQgHAEgJAAQgIAAgHgDgAgCgkQgCABAAAJIAAAzQAAAJABADQABAAAAABQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBIAAgMIAAgyIAAgKQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABg");
	this.shape_4.setTransform(57.7,132.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghA3IAAhtIAeAAQAMAAAHACQAHACAEAGQAEAHABAOQgBAKgDAEQgCADgJADQAKACADAEQADAFABALIAAAKQgBALgCAGQgCAFgGACQgFACgSAAgAgDAkQAEAAACgCQACgBAAgHIAAgKQAAgHgCgCQgBgBgFgBgAgDgLIADAAQACAAACgCQABgCAAgKIgBgHIgDgDIgEAAg");
	this.shape_5.setTransform(50,132.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAHA3IgBgUIgKAAIgBAUIgfAAIAQhtIAoAAIAQBtgAgEAQIAJAAIgFguIgEAug");
	this.shape_6.setTransform(42.6,132.1);

	this.instance = new lib.about_us__424426();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.258,0.258);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVA+QgJgFgDgIQgDgIAAgOIAAgJIAfAAIAAAQQAAAHABADQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQADAAACgDQACgDAAgFQAAgLgEgEQgDgDgLgJQgNgIgEgDQgEgDgDgHQgCgHAAgKQAAgPADgHQAEgHAJgDQAIgEAMAAQAMAAAKAEQAJAEADAHQADAGAAAPIAAAGIggAAIAAgKQAAgHgBgCQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgDAAgBACQgCADAAAFQAAAGACADQACAEAGAEQAXAOAGAHQAFAJAAATQAAAOgDAGQgDAHgJAEQgKAEgMAAQgMAAgKgFg");
	this.shape_7.setTransform(93.3,142.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgSA/QgJgFgFgFQgDgHgBgHQgBgGAAgWIAAhMIAhAAIAABgQAAAIACADQAAABAAAAQAAABABAAQAAAAABAAQAAABAAAAQABAAAAgBQABAAABAAQAAAAAAgBQABAAAAgBQABgDAAgKIAAheIAhAAIAABVIgBAVQgBAGgEAHQgEAFgJAEQgHADgLAAQgKAAgJgDg");
	this.shape_8.setTransform(84.6,142.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQBBIAAhnIgUAAIAAgaIBJAAIAAAaIgUAAIAABng");
	this.shape_9.setTransform(73.5,142.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSA/QgJgFgFgFQgDgHgBgHQgBgGAAgWIAAhMIAhAAIAABgQAAAIACADQAAABAAAAQAAABABAAQAAAAABAAQAAABAAAAQABAAAAgBQABAAABAAQAAAAAAgBQABAAAAgBQABgDAAgKIAAheIAhAAIAABVIgBAVQgBAGgEAHQgEAFgJAEQgHADgLAAQgKAAgJgDg");
	this.shape_10.setTransform(65.2,142.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSBAQgIgDgFgHQgFgHgBgIIgBgcIAAgVIABgcQABgIAFgGQAFgHAIgEQAIgDAKAAQAKAAAJADQAIAEAFAGQAFAHABAIIABAcIAAAVIgBAcQgBAIgFAHQgFAGgIAEQgIADgLAAQgJAAgJgDgAgDgqQgBACAAAKIAAA7QAAALABADQAAADADAAQADAAABgDQABgDAAgMIAAg6QAAgJgBgDQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABg");
	this.shape_11.setTransform(56.3,142.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgmBBIAAiBIAiAAQAOAAAJADQAIACAFAIQAFAHAAARQAAAMgEAEQgDAFgLACQAMADAEAFQAEAGAAAMIAAAMQAAANgDAHQgDAGgGACQgHADgUAAgAgEArQAGgBACgCQACgCAAgHIAAgMQAAgJgCgCQgCgBgGgBgAgEgNIADAAQAEAAABgCQACgDAAgLQAAgGgCgDQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAIgGAAg");
	this.shape_12.setTransform(47.3,142.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAIBBIgCgXIgKAAIgCAXIgjAAIARiBIAwAAIASCBgAgFATIAKAAIgFg2QgEAkgBASg");
	this.shape_13.setTransform(38.6,142.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSA4QgKgFgCgHQgDgHAAgNIAAgIIAcAAIAAAPQAAAGACACQAAAAAAABQABAAAAAAQABABABAAQAAAAAAAAQADAAACgCIABgHQAAgLgDgDIgNgLQgMgHgDgCQgEgEgCgGQgCgFgBgKQABgNADgGQADgHAIgDQAIgEAKABQALAAAIADQAJAEACAGQADAGAAANIAAAFIgcAAIAAgIQAAgHgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgCACAAAFQAAAGADADQABADAGAEQAUAMAFAHQAFAHABASQAAAMgDAGQgEAFgIAFQgIADgLAAQgLAAgIgEg");
	this.shape_14.setTransform(90.5,134.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQA4QgIgEgEgFQgEgGAAgGQgBgGAAgUIAAhDIAeAAIAABWQAAAHAAACQABABAAAAQAAABABAAQAAAAABABQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQABgCAAgJIAAhUIAdAAIAABMIgBATQAAAFgEAGQgFAFgHADQgGADgKAAQgJAAgIgDg");
	this.shape_15.setTransform(82.7,135);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOA6IAAhbIgSAAIAAgYIBBAAIAAAYIgSAAIAABbg");
	this.shape_16.setTransform(72.8,134.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQA4QgIgEgEgFQgEgGgBgGQgBgGAAgUIAAhDIAfAAIAABWQAAAHABACQAAABAAAAQAAABABAAQAAAAABABQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQABgCAAgJIAAhUIAdAAIAABMIAAATQgBAFgFAGQgDAFgIADQgHADgJAAQgJAAgIgDg");
	this.shape_17.setTransform(65.4,135);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgPA6QgIgDgEgGQgFgHgBgHIgBgZIAAgTIABgYQABgIAEgGQAEgGAIgDQAHgEAJABQAKgBAHAEQAHADAFAGQAEAGABAHIABAZIAAATIgBAYQgBAIgEAGQgEAGgIADQgHADgKAAQgIAAgHgCgAgDgmQgBACAAAJIAAA1IABANQAAAAABABQAAAAABAAQAAABABAAQAAAAAAAAQADAAABgDIAAgNIAAg0IAAgLQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_18.setTransform(57.4,134.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgiA6IAAhzIAeAAQANAAAIACQAHADAFAGQAEAHAAAPQAAALgDADQgEAFgIACQAKACADAEQAEAGAAALIAAALQAAAMgDAFQgCAGgGACQgGACgSAAgAgEAmQAFAAACgCQACgBAAgIIAAgLQAAgHgCgCQgBgBgGAAgAgEgMIADAAQADAAACgBQABgCAAgLIgBgHQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBIgFAAg");
	this.shape_19.setTransform(49.4,134.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAHA6IgBgVIgKAAIgCAVIgfAAIAPhzIArAAIARBzgAgEAQIAJAAIgFgvQgDAggBAPg");
	this.shape_20.setTransform(41.5,134.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgVA+QgJgFgDgIQgDgIAAgOIAAgJIAfAAIAAAQQAAAHABACQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAQADAAACgCQABgDAAgFQAAgLgDgEIgPgMIgQgLQgEgDgCgHQgDgGAAgLQAAgOAEgHQADgHAJgEQAIgEAMAAQAMAAAKAEQAJAFACAGQADAGABAQIAAAFIggAAIAAgKQABgGgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDAAgCACQgBADAAAFQAAAGACAEQACADAGAEQAXAOAFAHQAGAJAAASQAAAOgDAHQgDAGgKAFQgJAEgMAAQgMAAgKgFg");
	this.shape_21.setTransform(93.3,141.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSA+QgJgEgEgGQgEgGgBgHQgBgHAAgVIAAhMIAhAAIAABgQAAAIABACQABABAAABQAAAAABAAQAAABABAAQAAAAAAAAQADAAABgDIABgMIAAheIAhAAIAABWIgBAUQgBAGgEAGQgFAGgIAEQgHADgLAAQgKgBgJgDg");
	this.shape_22.setTransform(84.6,141.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgQBAIAAhlIgUAAIAAgaIBIAAIAAAaIgUAAIAABlg");
	this.shape_23.setTransform(73.6,141.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgSA+QgJgEgEgGQgEgGgBgHQgBgHAAgVIAAhMIAhAAIAABgQAAAIABACQAAABABABQAAAAABAAQAAABABAAQAAAAAAAAQADAAABgDIABgMIAAheIAhAAIAABWIgBAUQgBAGgEAGQgFAGgIAEQgHADgLAAQgKgBgJgDg");
	this.shape_24.setTransform(65.4,141.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgRBAQgJgEgFgHQgFgGgBgIIgBgcIAAgVIABgbQABgIAFgHQAFgHAIgDQAIgEAKAAQAKAAAJAEQAIADAFAHQAFAGABAIIABAcIAAAVIgBAbQgBAIgFAHQgFAHgIADQgIAEgLAAQgJAAgIgDgAgDgqQgBACAAAKIAAA7QAAALABADQAAAAAAABQABAAAAABQABAAAAAAQABAAAAAAQADAAABgDQABgDAAgLIAAg6QAAgJgBgDQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQAAABgBAAg");
	this.shape_25.setTransform(56.5,141.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgmBAIAAh/IAhAAQAPAAAJACQAIADAEAHQAGAIgBAQQAAAMgDAEQgEAFgKACQALADAFAFQAEAGAAAMIAAAMQAAANgDAGQgDAHgGACQgHACgUAAgAgFAqQAHAAABgCQACgCABgIIAAgMQgBgIgCgCQgBgBgHgBgAgFgNIAEAAQAEAAABgCQACgCAAgMIgCgIIgDgDIgGgBg");
	this.shape_26.setTransform(47.7,141.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAIBAIgCgXIgLAAIgCAXIgiAAIARh/IAvAAIATB/gAgFASIAKAAIgFg0IgFA0g");
	this.shape_27.setTransform(39,141.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.258,scaleY:0.258,x:0,y:0}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance,p:{scaleX:0.301,scaleY:0.301,x:-11,y:-12}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.instance,p:{scaleX:0.27,scaleY:0.27,x:-3,y:-3}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.instance,p:{scaleX:0.299,scaleY:0.299,x:-10,y:-11}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,142.6);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSA2QgHgDgDgGQgDgFgBgGIAAgRIAAggQAAgPABgIQACgHAIgGQAIgGANAAQALAAAJAFQAIAGADAHQACAHAAAOIAAAEIgcAAIAAgKQAAgJgBgDQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAABAAAAQgBABAAAAQgBACAAAJIAAA0IABAKQAAAAABABQAAAAAAAAQABABABAAQAAAAAAAAQADAAACgDQABgCAAgIIAAgNIgGAAIAAgQIAhAAIAAA6IgSAAIgCgIQgEAFgEADQgFADgEAAQgIAAgGgEg");
	this.shape.setTransform(104.2,141.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAHA3IgOgyIAAAyIgYAAIAAhtIAYAAIAPAxIAAgxIAYAAIAABtg");
	this.shape_1.setTransform(96.5,141.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNA3IAAhtIAcAAIAABtg");
	this.shape_2.setTransform(90.7,141.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAFA3IgKgvIAAAvIgdAAIAAhtIAdAAIAAArIAMgrIAbAAIgRAyIASA7g");
	this.shape_3.setTransform(85.3,141.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPA3QgHgDgEgGQgFgGgBgHIAAgYIAAgSIAAgXQABgHAEgGQAFgGAHgDQAHgDAIAAQAJAAAHADQAHADAEAGQAFAGAAAHIABAXIAAASIAAAYQgBAHgEAGQgFAFgHADQgHAEgJAAQgIAAgHgDgAgCgkQgCABAAAJIAAAzQAAAJABADQABAAAAABQAAAAABAAQAAABABAAQAAAAAAAAQAAAAABAAQABgBAAAAQABAAAAgBQABAAAAgBIAAgMIAAgyIAAgKQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABg");
	this.shape_4.setTransform(77.4,141.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPA3QgHgDgEgGQgFgGgBgHIAAgYIAAgSIAAgXQABgHAEgGQAFgGAHgDQAHgDAIAAQAJAAAHADQAHADAEAGQAFAGAAAHIABAXIAAASIAAAYQgBAHgEAGQgFAFgHADQgHAEgJAAQgIAAgHgDgAgCgkQgCABAAAJIAAAzQAAAJABADQABAAAAABQAAAAABAAQAAABABAAQAAAAAAAAQAAAAABAAQABgBAAAAQABAAAAgBQABAAAAgBIAAgMIAAgyIAAgKQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABg");
	this.shape_5.setTransform(69.7,141.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghA3IAAhtIAdAAQANAAAHACQAHACAEAGQAEAHAAAOQAAAKgDAEQgDADgIADQAKACADAEQAEAFAAALIAAAKQAAALgDAGQgDAFgFACQgFACgSAAgAgEAkQAGAAABgCQACgBAAgHIAAgKQAAgHgCgCQgBgBgGgBgAgEgLIAEAAQADAAABgCQABgCAAgKIgBgHIgDgDIgFAAg");
	this.shape_6.setTransform(62.1,141.5);

	this.instance = new lib.logo_booking();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.166,0.166);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWBCQgIgFgEgGQgEgGgBgHIgBgVIAAgnQAAgTACgJQACgIAKgIQAKgHAQgBQAOABAKAGQALAGADAJQADAJAAAQIAAAGIgjAAIAAgMQAAgMgBgDQgBgCgEAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABQgCADAAAKIAABAQAAAIACAEQABACACAAQAEABABgEQACgDAAgKIAAgPIgHAAIAAgUIApAAIAABHIgWAAIgDgJQgEAGgGADQgFADgGABQgJgBgIgEg");
	this.shape_7.setTransform(108.9,154.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAIBDIgRg9IAAA9IgdAAIAAiGIAdAAIATA9IAAg9IAdAAIAACGg");
	this.shape_8.setTransform(99.6,154.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQBDIAAiGIAiAAIAACGg");
	this.shape_9.setTransform(92.5,154.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAHBDIgOg6IAAA6IgjAAIAAiGIAjAAIAAA1IAPg1IAhAAIgUA9IAWBJg");
	this.shape_10.setTransform(85.8,154.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTBDQgIgEgFgHQgGgHgBgJIgBgdIAAgVIABgeQACgIAFgHQAEgHAJgDQAJgFAKAAQALAAAJAFQAIADAFAHQAGAHAAAIIABAeIAAAVIAAAdQgBAJgFAHQgGAHgIADQgIAFgMAAQgKgBgJgDgAgDgsQgBACgBAKIAAA+QABAMAAADQACACACAAQADAAABgCQABgEAAgMIAAg9IgBgMQAAgBAAAAQgBgBAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABg");
	this.shape_11.setTransform(76.2,154.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTBDQgIgEgFgHQgFgHgBgJIgBgdIAAgVIABgeQAAgIAGgHQAEgHAJgDQAIgFALAAQALAAAIAFQAJADAFAHQAFAHACAIIABAeIAAAVIgBAdQgBAJgFAHQgFAHgJADQgJAFgLAAQgJgBgKgDgAgDgsQgBACAAAKIAAA+QAAAMABADQABACACAAQAEAAABgCQABgEAAgMIAAg9IgBgMQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABg");
	this.shape_12.setTransform(66.9,154.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgoBDIAAiGIAjAAQAQAAAIADQAJACAFAJQAFAHAAASQAAAMgDAFQgEAEgLACQAMAEAFAEQAEAHAAAOIAAAMQAAANgDAHQgDAGgHADQgHACgVAAgAgFAtQAHgBACgCQACgCAAgIIAAgNQAAgJgCgBQgCgCgHAAgAgFgOIAEAAQAEAAABgCQACgDAAgMIgBgJQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBIgHgBg");
	this.shape_13.setTransform(57.5,154.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVA9QgHgEgEgFQgDgGgBgGIgBgUIAAglQAAgRACgJQACgIAJgHQAJgGAPgBQANABAKAFQAJAGADAIQADAJAAAPIAAAFIghAAIAAgLQAAgLgBgCQgBgEgDAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABQgBADAAAJIAAA8QAAAIABADQABACACAAQAEAAABgCQABgEAAgIIAAgPIgGAAIAAgSIAmAAIAABCIgVAAIgDgJQgDAGgFADQgFADgGAAQgIgBgIgEg");
	this.shape_14.setTransform(107.1,149.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAIA/IgQg5IAAA5IgbAAIAAh9IAbAAIASA5IAAg5IAbAAIAAB9g");
	this.shape_15.setTransform(98.4,149.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgPA/IAAh9IAfAAIAAB9g");
	this.shape_16.setTransform(91.8,149.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAGA/IgMg2IAAA2IghAAIAAh9IAhAAIAAAxIANgxIAfAAIgSA5IAUBEg");
	this.shape_17.setTransform(85.6,149.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRA+QgIgDgFgHQgFgGgBgIIgBgcIAAgUIABgbQABgHAEgHQAFgGAJgEQAHgDAKgBQAKAAAJADQAHAEAFAGQAFAHABAIIABAbIAAAUIgBAbQgBAIgFAHQgFAGgHAEQgJAEgKAAQgJgBgIgDgAgDgpQgBABAAALIAAA5QAAALABADQAAAAAAABQABAAAAABQABAAAAAAQABAAAAAAQADAAABgCQABgDAAgMIAAg4QAAgKgBgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABg");
	this.shape_18.setTransform(76.6,149.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRA+QgIgDgFgHQgFgGgBgIIgBgcIAAgUIABgbQABgHAEgHQAFgGAJgEQAHgDAKgBQAKAAAIADQAJAEAEAGQAFAHABAIIABAbIAAAUIgBAbQgBAIgFAHQgEAGgJAEQgIAEgKAAQgJgBgIgDgAgCgpQgCABAAALIAAA5QAAALABADQAAAAAAABQABAAAAABQABAAAAAAQABAAAAAAQAEAAAAgCQABgDAAgMIAAg4QAAgKgBgCQAAgBgBAAQAAgBAAAAQgBAAgBAAQAAgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAAAABg");
	this.shape_19.setTransform(67.9,149.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AglA/IAAh9IAgAAQAPAAAIADQAIACAFAHQAFAIAAAQQAAALgEAEQgDAFgKACQALACAEAGQAEAFAAANIAAAMQAAAMgDAGQgDAHgGABQgHADgTAAgAgEAqQAGgBABgCQACgCAAgHIAAgMQAAgIgBgCQgCgCgGAAgAgEgMIADAAQAEgBABgCQABgCAAgMIgBgIIgDgDIgFAAg");
	this.shape_20.setTransform(59.2,149.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYBJQgJgFgEgHQgEgHgCgIIgBgXIAAgrQAAgVADgKQACgJALgIQALgIARAAQAQAAALAHQALAHAEAJQADAKAAASIAAAHIgnAAIAAgOQAAgNgBgDQgBgDgEAAQgDAAgBADQgBACAAAMIAABGQAAAKABADQABADADAAQAFAAABgDQACgEAAgKIAAgSIgIAAIAAgVIAtAAIAABOIgYAAIgEgKQgEAGgGAEQgGADgHAAQgKAAgIgEg");
	this.shape_21.setTransform(111.4,161.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAJBKIgThDIAABDIggAAIAAiTIAgAAIAVBDIAAhDIAgAAIAACTg");
	this.shape_22.setTransform(101.2,161.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTBKIAAiTIAmAAIAACTg");
	this.shape_23.setTransform(93.4,161.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAHBKIgOg/IAAA/IgnAAIAAiTIAnAAIAAA6IAQg6IAkAAIgWBDIAYBQg");
	this.shape_24.setTransform(86.1,161.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUBKQgKgEgGgIQgFgIgCgJIgBggIAAgZIABgfQABgKAGgHQAGgIAJgEQAJgEAMAAQAMAAAJAEQAKAEAGAHQAFAIABAJQACAKAAAWIAAAZIgBAfQgCAKgFAHQgGAIgJAEQgJAEgNAAQgLAAgJgDgAgDgxQgCADAAALIAABEQAAANABADQABADADAAQAEAAABgDQABgEAAgNIAAhDQAAgKgBgDQgBgDgEAAQgCAAgBACg");
	this.shape_25.setTransform(75.5,161.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUBKQgKgEgGgIQgFgIgCgJIgBggIAAgZIABgfQABgKAGgHQAGgIAJgEQAJgEAMAAQAMAAAJAEQAKAEAGAHQAFAIABAJQACAKAAAWIAAAZIgBAfQgCAKgFAHQgGAIgJAEQgJAEgNAAQgLAAgJgDgAgDgxQgCADAAALIAABEQAAANABADQABADADAAQAEAAABgDQABgEAAgNIAAhDQAAgKgBgDQgBgDgEAAQgCAAgBACg");
	this.shape_26.setTransform(65.3,161.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgsBKIAAiTIAnAAQARAAAJADQAKADAGAIQAFAJAAATQAAANgEAFQgEAFgMADQANADAFAGQAFAHAAAPIAAANQAAAPgEAIQgDAHgIADQgHACgXAAgAgFAxQAHAAACgDQACgCAAgJIAAgOQAAgJgCgCQgBgCgIgBgAgFgPIADAAQAGAAABgDQABgCAAgOQAAgHgBgCQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgHgBg");
	this.shape_27.setTransform(55,161.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.166,scaleY:0.166,x:0,y:0}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance,p:{scaleX:0.182,scaleY:0.182,x:-8,y:-8}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.instance,p:{scaleX:0.17,scaleY:0.17,x:-2,y:-2}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.instance,p:{scaleX:0.2,scaleY:0.2,x:-17,y:-17}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166.1,166.1);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSA1QgIgEgCgHQgDgHAAgMIAAgHIAbAAIAAANIABAIQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAAAABAAQABgBAAAAQABAAAAAAQABgBAAAAQACgDAAgEQAAgKgDgDQgDgDgKgHIgOgJQgDgDgDgGQgCgGAAgJQAAgMADgGQAEgGAHgDQAHgEAKAAQALAAAHAEQAIADADAGQACAGAAANIAAAEIgaAAIAAgIQAAgGgBgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABgBAAIgBAHQAAAFACADQABADAGAEQATALAFAGQAFAIAAAQQAAAMgDAFQgDAGgIAEQgIAEgKAAQgLAAgIgFg");
	this.shape.setTransform(180.9,206.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYA3IAAhtIAvAAIAAAWIgTAAIAAAVIASAAIAAAUIgSAAIAAAYIAVAAIAAAWg");
	this.shape_1.setTransform(174.5,206.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUA1QgIgFgDgIQgCgIAAgQIAAgfIABgSQAAgGAFgGQAEgFAHgEQAHgDAJAAQAMAAAIAFQAJAFACAHQADAIAAAPIAAALIgdAAIAAgTIgBgLQgBgCgDAAQgDAAgBADQgBACAAAIIAAAzQAAAIABACQABADADAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQABgCAAgJIAAgOIAdAAIAAAEQAAARgDAIQgCAHgIAFQgIAGgMAAQgMAAgJgFg");
	this.shape_2.setTransform(167.6,206.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOA3IAAhtIAcAAIAABtg");
	this.shape_3.setTransform(161.7,206.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUA3IgRhtIAfAAQAFAtABAfIAGg4IABgUIAeAAIgOBtg");
	this.shape_4.setTransform(156,206.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAGA3IAAglQAAgIgCgDQgBgCgFAAIAAAyIgdAAIAAhtIAUAAQAUAAAHABQAHACAFAGQAEAHAAAOQAAANgDAEQgDAFgKAAQAJACADADIAEAHIAAAQIAAAdgAgCgLQAEAAACgBQACgCAAgHIAAgGQAAgFgCgCQgCgBgEAAg");
	this.shape_5.setTransform(148.5,206.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYA3IAAhtIAvAAIAAAWIgTAAIAAAVIASAAIAAAUIgSAAIAAAYIAVAAIAAAWg");
	this.shape_6.setTransform(142,206.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSA1QgIgEgCgHQgDgHAAgMIAAgHIAbAAIAAANIABAIQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAAAABAAQABgBAAAAQABAAAAAAQABgBAAAAQACgDAAgEQAAgKgDgDQgDgDgKgHIgOgJQgDgDgDgGQgCgGAAgJQAAgMADgGQAEgGAHgDQAHgEAKAAQALAAAHAEQAIADADAGQACAGAAANIAAAEIgaAAIAAgIQAAgGgBgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQgBABAAAAQAAABgBAAIgBAHQAAAFACADQABADAGAEQATALAFAGQAFAIAAAQQAAAMgDAFQgDAGgIAEQgIAEgKAAQgLAAgIgFg");
	this.shape_7.setTransform(135.3,206.1);

	this.instance = new lib.logo_services();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.596,0.608);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUA6QgJgEgCgIQgDgHAAgOIAAgIIAdAAIAAAPQAAAHACACQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAQADAAACgDQABgCAAgFQAAgLgDgDIgOgLIgPgLQgEgDgDgGQgCgHAAgJQAAgOAEgHQADgGAIgEQAIgDALAAQAMAAAIAEQAJAEADAGQADAGAAAOIAAAFIgeAAIAAgJIgBgIQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBABAAAAQgBAAAAABQgBAAAAABQgBACAAAFQAAAGABADQACADAGAEQAVANAGAHQAFAIAAASQAAANgDAGQgDAGgJAEQgIAEgMAAQgMAAgJgFg");
	this.shape_8.setTransform(184,211.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgaA9IAAh5IAzAAIAAAYIgVAAIAAAYIAUAAIAAAWIgUAAIAAAaIAXAAIAAAZg");
	this.shape_9.setTransform(177.1,211.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVA6QgJgFgDgJQgDgJAAgRIAAgjIABgUQAAgGAFgGQAEgGAIgEQAIgDAKAAQAOAAAJAFQAJAFADAIQACAJAAARIAAALIgfAAIAAgVQAAgJgBgDQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAgBAAQgDAAgBADIgBAMIAAA3IABAMQABADADAAQAEAAABgDQABgDAAgKIAAgPIAfAAIAAAFQAAATgCAIQgDAHgJAGQgJAGgOAAQgMAAgJgFg");
	this.shape_10.setTransform(169.4,211.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPA9IAAh5IAfAAIAAB5g");
	this.shape_11.setTransform(162.9,211.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWA9IgSh5IAhAAIAIBUQACgiADgbIACgXIAhAAIgQB5g");
	this.shape_12.setTransform(156.7,211.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAGA9IAAgpQAAgJgCgDQgBgCgGAAIAAA3IgfAAIAAh5IAWAAQAVAAAIACQAIACAFAHQAFAHAAAPQAAAPgDAEQgEAFgKABQAJACADAEQAEADAAAEQABADAAAPIAAAggAgDgMIAHgBQACgCAAgIIAAgHQAAgFgCgCQgCgCgFAAg");
	this.shape_13.setTransform(148.5,211.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaA9IAAh5IAzAAIAAAYIgVAAIAAAYIAUAAIAAAWIgUAAIAAAaIAXAAIAAAZg");
	this.shape_14.setTransform(141.4,211.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUA6QgJgEgCgIQgDgHAAgOIAAgIIAdAAIAAAPQAAAHACACQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAQADAAACgDQABgCAAgFQAAgLgDgDIgOgLIgPgLQgEgDgDgGQgCgHAAgJQAAgOAEgHQADgGAIgEQAIgDALAAQAMAAAIAEQAJAEADAGQADAGAAAOIAAAFIgeAAIAAgJIgBgIQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBABAAAAQgBAAAAABQgBAAAAABQgBACAAAFQAAAGABADQACADAGAEQAVANAGAHQAFAIAAASQAAANgDAGQgDAGgJAEQgIAEgMAAQgMAAgJgFg");
	this.shape_15.setTransform(134,211.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgSA2QgIgEgDgIQgCgGAAgNIAAgHIAbAAIAAANQAAAHABACQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQADABABgDIABgHQAAgKgCgCQgDgEgKgGIgOgKQgEgEgCgFQgCgGAAgJQAAgNADgFQADgHAIgDQAHgDAKgBQALAAAIAFQAIADACAGQADAFAAAOIAAAEIgbAAIAAgJIgBgHQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAgBABQAAAAgBAAQgBAAAAABQAAAAgBABQgBACAAAEQAAAGABACQACADAGAEQATAMAFAGQAFAIAAARQAAAMgDAFQgCAFgIAFQgIADgLAAQgLABgIgFg");
	this.shape_16.setTransform(181.2,206.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYA4IAAhvIAvAAIAAAWIgTAAIAAAVIASAAIAAAVIgSAAIAAAYIAVAAIAAAXg");
	this.shape_17.setTransform(174.8,206.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUA2QgIgFgDgIQgCgJgBgQIAAgfIABgSQABgHAFgFQADgGAIgDQAHgDAJgBQANAAAHAGQAJAEACAIQAEAHAAAQIAAALIgeAAIAAgTIgBgLQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAQgCAAgCADIgBAMIAAAzQAAAHABADQACADACgBQABAAAAAAQABAAABAAQAAAAAAgBQABAAAAgBQABgCAAgKIAAgOIAeAAIAAAEQgBASgCAHQgDAIgIAFQgJAGgMgBQgLAAgJgEg");
	this.shape_18.setTransform(167.8,206.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgNA4IAAhvIAcAAIAABvg");
	this.shape_19.setTransform(161.8,206.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUA4IgRhvIAfAAIAGBNIAFg4IACgVIAfAAIgPBvg");
	this.shape_20.setTransform(156.1,206.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAGA4IAAglQAAgJgCgCQgCgDgEAAIAAAzIgeAAIAAhvIAVAAQAUAAAHACQAHABAEAHQAFAHABAOQAAANgEAEQgDAFgJAAQAIACADADQADAEABADQABADAAAOIAAAdgAgCgLIAFgBQADgCAAgHIAAgGQAAgFgDgCQgCgCgDAAg");
	this.shape_21.setTransform(148.6,206.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYA4IAAhvIAvAAIAAAWIgTAAIAAAVIASAAIAAAVIgSAAIAAAYIAVAAIAAAXg");
	this.shape_22.setTransform(142,206.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgSA2QgIgEgDgIQgCgGAAgNIAAgHIAbAAIAAANQAAAHABACQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQADABABgDIABgHQAAgKgCgCQgDgEgKgGIgOgKQgEgEgCgFQgCgGAAgJQAAgNADgFQADgHAIgDQAHgDAKgBQALAAAIAFQAIADACAGQADAFAAAOIAAAEIgbAAIAAgJIgBgHQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBABQgBACAAAEQAAAGABACQACADAGAEQATAMAFAGQAFAIAAARQAAAMgDAFQgCAFgIAFQgIADgLAAQgLABgIgFg");
	this.shape_23.setTransform(135.2,206.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgUA8QgJgFgDgIQgDgHAAgOIAAgIIAeAAIAAAPQAAAHABACQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQADAAACgDQABgCAAgFQAAgLgDgEIgOgLQgMgIgEgCQgEgEgCgGQgDgHAAgKQAAgOAEgHQADgGAIgEQAJgEALAAQAMAAAJAEQAIAEADAHQADAGAAAPIAAAFIgeAAIAAgKQAAgGgBgCQAAAAgBgBQAAAAAAAAQgBgBgBAAQAAAAAAAAQgDAAgBADQgCACAAAFQAAAGACADQACADAGAFQAWANAFAHQAGAIAAASQAAAOgDAGQgDAGgJAFQgJAEgMAAQgMAAgJgFg");
	this.shape_24.setTransform(184.9,212.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgbA+IAAh7IA1AAIAAAZIgWAAIAAAXIAVAAIAAAXIgVAAIAAAbIAYAAIAAAZg");
	this.shape_25.setTransform(177.7,212.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgWA8QgJgFgDgJQgDgKAAgSIAAgjIABgUQABgHAEgGQAFgHAIgDQAIgEAKAAQAOAAAJAGQAJAFADAJQADAIAAARIAAAMIggAAIAAgWQAAgJgBgCQgBgDgEAAQgDAAgBADIgBAMIAAA5IABAMQABADADAAQAEAAABgDQABgDAAgKIAAgQIAgAAIAAAFQAAAUgDAIQgCAIgKAGQgJAGgOAAQgNAAgJgFg");
	this.shape_26.setTransform(169.9,212.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgPA+IAAh7IAfAAIAAB7g");
	this.shape_27.setTransform(163.3,212.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgXA+IgSh7IAiAAQAGAzABAjIAGg/IACgXIAiAAIgQB7g");
	this.shape_28.setTransform(156.9,212.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAGA+IAAgpQAAgKgBgCQgCgDgFAAIAAA4IghAAIAAh7IAXAAQAWAAAIACQAIABAFAIQAFAHAAAQQAAAOgDAFQgEAFgLABQAKACADAEQADAEABADIABASIAAAhgAgCgMQAEAAACgCQACgBAAgIIAAgHQAAgGgCgCQgCgCgEAAg");
	this.shape_29.setTransform(148.6,212.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgbA+IAAh7IA1AAIAAAZIgVAAIAAAXIATAAIAAAXIgTAAIAAAbIAXAAIAAAZg");
	this.shape_30.setTransform(141.2,212.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUA8QgJgFgDgIQgDgHAAgOIAAgIIAeAAIAAAPQAAAHABACQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQADAAACgDQABgCAAgFQAAgLgDgEIgOgLQgMgIgEgCQgEgEgCgGQgDgHAAgKQAAgOAEgHQADgGAIgEQAJgEALAAQAMAAAJAEQAIAEADAHQADAGAAAPIAAAFIgeAAIAAgKQAAgGgBgCQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgDAAgBADQgCACAAAFQAAAGACADQACADAGAFQAWANAFAHQAGAIAAASQAAAOgDAGQgDAGgJAFQgJAEgMAAQgMAAgJgFg");
	this.shape_31.setTransform(133.7,212.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.596,scaleY:0.608,x:0,y:0}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance,p:{scaleX:0.655,scaleY:0.668,x:-15,y:-15}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.instance,p:{scaleX:0.603,scaleY:0.615,x:-2,y:-2}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.instance,p:{scaleX:0.669,scaleY:0.683,x:-19,y:-19}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,298,304);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_1 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_2 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_3 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_4 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_5 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_6 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_7 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_8 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_9 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_10 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_11 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_12 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_13 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_14 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_15 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_16 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");
	var mask_graphics_17 = new cjs.Graphics().p("Ar6BhIAAjBIX1AAIAADBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:65.4,y:29.3}).wait(1).to({graphics:mask_graphics_1,x:65,y:28.1}).wait(1).to({graphics:mask_graphics_2,x:64.5,y:27}).wait(1).to({graphics:mask_graphics_3,x:64.1,y:25.8}).wait(1).to({graphics:mask_graphics_4,x:63.7,y:24.7}).wait(1).to({graphics:mask_graphics_5,x:63.2,y:23.5}).wait(1).to({graphics:mask_graphics_6,x:62.8,y:22.4}).wait(1).to({graphics:mask_graphics_7,x:62.4,y:21.2}).wait(1).to({graphics:mask_graphics_8,x:61.9,y:20.1}).wait(1).to({graphics:mask_graphics_9,x:61.5,y:18.9}).wait(1).to({graphics:mask_graphics_10,x:61.1,y:17.8}).wait(1).to({graphics:mask_graphics_11,x:60.7,y:16.6}).wait(1).to({graphics:mask_graphics_12,x:60.2,y:15.5}).wait(1).to({graphics:mask_graphics_13,x:59.8,y:14.3}).wait(1).to({graphics:mask_graphics_14,x:59.4,y:13.2}).wait(1).to({graphics:mask_graphics_15,x:58.9,y:12}).wait(1).to({graphics:mask_graphics_16,x:58.5,y:10.9}).wait(1).to({graphics:mask_graphics_17,x:58.1,y:9.7}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAYQgJgIABgPQgBgPAJgJQAIgJAMAAQAKAAAHAHQAHAHAAALIgqAAQAAANAGAIQAHAIAIAAQAHAAAEgDQAEgEADgIIADABQgCAKgGAIQgIAHgKAAQgKAAgIgJgAgLgXQgEAEAAAIIAbAAIgBgIQgCgEgDgCQgDgCgDAAQgGAAgFAEg");
	this.shape.setTransform(119.8,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAgIAAgNQgIAJgEACQgEACgEAAQgGAAgDgDQgFgDgBgFQgBgEgBgJIAAgbIAAgGQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgHgBIAAgCIAWAAIAAApQAAAIADADQADADAEAAQACAAAEgCQAEgCAFgFIAAgjQAAgFgCgCQgCgCgGAAIAAgCIAVAAIAAAlIABANIACADIACABIAFgBIABACIgTAIg");
	this.shape_1.setTransform(113.2,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADAgIAAgCIABAAQAFAAACgCIACgDIAAgHIAAgZQAAgIgCgEQgCgEgFAAQgIAAgIAJIAAAgQAAAGABACIADADQABABAGAAIAAACIgfAAIAAgCIABAAQAFAAABgDQACgCAAgHIAAgWIAAgOIgCgDIgDgBIgEABIgBgDIASgHIADAAIAAANQALgNAJAAQAFAAAEACQAEADACAGQACAEAAAIIAAAaIABAIIACADIAGABIAAACg");
	this.shape_2.setTransform(106.2,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAwIAAgCIAGgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIABgHIAAgZIgBgMIgBgDIgDgBIgFABIgBgCIASgIIADAAIAAAyIABAHQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAGABIAAACgAgDgkQgCgCAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgDACAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgCgCg");
	this.shape_3.setTransform(100.7,9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCApQgDgDgCgDIgBgJIAAgqIgKAAIAAgCIAIgFIAHgJIADgJIACAAIAAAVIAPAAIAAAEIgPAAIAAAoQAAAGACACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAEgBQACgCABgDIADAAQgDAIgEACQgEAEgFAAQgDAAgCgBg");
	this.shape_4.setTransform(96.9,10.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AADAgIAAgCIABAAQAFAAACgCIACgDIAAgHIAAgZQAAgIgCgEQgCgEgFAAQgIAAgIAJIAAAgQAAAGABACIADADQABABAGAAIAAACIgfAAIAAgCIABAAQAFAAABgDQACgCAAgHIAAgWIAAgOIgCgDIgDgBIgEABIgBgDIASgHIADAAIAAANQALgNAJAAQAFAAAEACQAEADACAGQACAEAAAIIAAAaIABAIIACADIAGABIAAACg");
	this.shape_5.setTransform(91.4,11.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAWQgHgKAAgLQAAgIAEgJQAFgIAGgEQAHgEAHAAQAOAAAJALQAHAJAAAMQAAAHgEAJQgEAIgHAFQgHAEgIAAQgOAAgIgLgAgIgaQgEADgCAFQgCAFAAAJQAAAMAFAKQAGAKAHAAQAHAAAEgFQAFgGAAgNQAAgQgHgJQgFgHgHAAQgDAAgEACg");
	this.shape_6.setTransform(84.3,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAYQgHgJAAgPQAAgOAIgJQAJgJALAAQAKAAAGAFQAGAFAAAFQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgEAAgCgDQgBgBAAgEQgBgEgCgDQgDgCgEAAQgGAAgEAFQgFAHAAALQAAAKAFAJQAGAJAIAAQAHAAAFgFQAEgDADgIIACAAQgCANgIAHQgHAGgJAAQgKAAgIgJg");
	this.shape_7.setTransform(77.8,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAWQgHgKAAgLQAAgIAEgJQAFgIAGgEQAHgEAHAAQAOAAAJALQAHAJAAAMQAAAHgEAJQgEAIgHAFQgHAEgIAAQgOAAgIgLgAgIgaQgEADgCAFQgCAFAAAJQAAAMAFAKQAGAKAHAAQAHAAAEgFQAFgGAAgNQAAgQgHgJQgFgHgHAAQgDAAgEACg");
	this.shape_8.setTransform(67.6,11.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCApQgDgDgCgDIgBgJIAAgqIgKAAIAAgCIAIgFIAHgJIADgJIACAAIAAAVIAPAAIAAAEIgPAAIAAAoQAAAGACACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAEgBQACgCABgDIADAAQgDAIgEACQgEAEgFAAQgDAAgCgBg");
	this.shape_9.setTransform(62.3,10.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAYQgJgIAAgPQAAgPAJgJQAIgJALAAQALAAAHAHQAGAHAAALIgqAAQAAANAHAIQAHAIAIAAQAGAAAFgDQAFgEADgIIABABQgBAKgHAIQgGAHgLAAQgKAAgIgJgAgKgXQgFAEgBAIIAdAAIgCgIQgCgEgDgCQgDgCgDAAQgGAAgEAEg");
	this.shape_10.setTransform(53.7,11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWAgIAAgCQAFAAACgCQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIAAgHIAAgXIAAgNIgCgDIgDgBIgFABIAAgDIATgHIACAAIAAAOQAHgOAJAAQADAAADACQACACAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgDgDIgFgCIgCABQgDADgDAHIAAAdQAAAFABACIADAEIAGABIAAACg");
	this.shape_11.setTransform(48.3,11.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAYQgJgIABgPQgBgPAJgJQAIgJAMAAQAKAAAHAHQAHAHAAALIgqAAQAAANAGAIQAHAIAIAAQAGAAAFgDQAEgEADgIIADABQgCAKgGAIQgIAHgKAAQgKAAgIgJgAgLgXQgEAEAAAIIAbAAIgBgIQgCgEgDgCQgDgCgDAAQgGAAgFAEg");
	this.shape_12.setTransform(42.9,11.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AADAwIAAgCIACAAQAEAAACgBIACgEIAAgGIAAgXIgBgMQgBgEgCgBQgDgCgDABIgGABQgDACgFAFIAAAhIAAAHIADADIAHABIAAACIgfAAIAAgCQAEAAADgBQAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIABgHIAAg5IAAgMIgBgEIgDgBIgFABIgBgCIASgIIAEAAIAAAuQAHgIAEgDQAEgCAFAAQAFAAAEADQADADACAGQACADAAAMIAAAXIABAHIACADIAGABIAAACg");
	this.shape_13.setTransform(36.2,9.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAFAwIAAgCIADAAIABgDQAAgBgDgEIgSgZIAPgNIAFgGIABgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgDgBIAAgCIAbAAIAAACQgGAAgDACQgEABgFAEIgPAOIAPAUIAJALIAGAFIAGAAIAAACgAgiAwIAAgCIAHgBIACgDIABgHIAAg5IAAgMIgCgEIgCgBIgFABIgBgCIATgIIADAAIAAA9IAAAWIABAHQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAHABIAAACg");
	this.shape_14.setTransform(25.8,9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAYQgHgJAAgPQAAgOAIgJQAJgJALAAQAKAAAGAFQAGAFAAAFQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgEAAgCgDQgBgBAAgEQgBgEgCgDQgDgCgEAAQgGAAgEAFQgFAHAAALQAAAKAFAJQAGAJAIAAQAHAAAFgFQAEgDADgIIACAAQgCANgIAHQgHAGgJAAQgKAAgIgJg");
	this.shape_15.setTransform(19.1,11.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAwIAAgCIAGgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIABgHIAAgZIgBgMIgBgDIgDgBIgFABIgBgCIASgIIADAAIAAAyIABAHQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAGABIAAACgAgDgkQgCgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQACgDACAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgCgCg");
	this.shape_16.setTransform(14.1,9.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOAwIAAgCIAGgBQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgHIAAg5IAAgMIgCgEIgCgBIgFABIgBgCIASgIIADAAIAABTIABAHQAAABAAAAQABAAAAABQAAAAABAAQAAABABAAQABABAFAAIAAACg");
	this.shape_17.setTransform(10.2,9.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSAYQgHgJAAgPQAAgOAIgJQAJgJALAAQAKAAAGAFQAGAFAAAFQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgEAAgCgDQgBgBAAgEQgBgEgCgDQgDgCgEAAQgGAAgEAFQgFAHAAALQAAAKAFAJQAGAJAIAAQAHAAAFgFQAEgDADgIIACAAQgCANgIAHQgHAGgJAAQgKAAgIgJg");
	this.shape_18.setTransform(5.1,11.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6633").s().p("AgRAYQgJgIABgPQgBgPAJgJQAIgJAMAAQAKAAAHAHQAHAHAAALIgqAAQAAANAGAIQAHAIAIAAQAHAAAEgDQAEgEADgIIADABQgCAKgGAIQgIAHgKAAQgKAAgIgJgAgLgXQgEAEAAAIIAbAAIgBgIQgCgEgDgCQgDgCgDAAQgGAAgFAEg");
	this.shape_19.setTransform(119.8,11.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6633").s().p("AANAgIAAgNQgIAJgEACQgEACgEAAQgGAAgDgDQgFgDgBgFQgBgEgBgJIAAgbIAAgGQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgHgBIAAgCIAWAAIAAApQAAAIADADQADADAEAAQACAAAEgCQAEgCAFgFIAAgjQAAgFgCgCQgCgCgGAAIAAgCIAVAAIAAAlIABANIACADIACABIAFgBIABACIgTAIg");
	this.shape_20.setTransform(113.2,11.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF6633").s().p("AADAgIAAgCIABAAQAFAAACgCIACgDIAAgHIAAgZQAAgIgCgEQgCgEgFAAQgIAAgIAJIAAAgQAAAGABACIADADQABABAGAAIAAACIgfAAIAAgCIABAAQAFAAABgDQACgCAAgHIAAgWIAAgOIgCgDIgDgBIgEABIgBgDIASgHIADAAIAAANQALgNAJAAQAFAAAEACQAEADACAGQACAEAAAIIAAAaIABAIIACADIAGABIAAACg");
	this.shape_21.setTransform(106.2,11.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF6633").s().p("AgOAwIAAgCIAGgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIABgHIAAgZIgBgMIgBgDIgDgBIgFABIgBgCIASgIIADAAIAAAyIABAHQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAGABIAAACgAgDgkQgCgCAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgDACAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgCgCg");
	this.shape_22.setTransform(100.7,9.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF6633").s().p("AgCApQgDgDgCgDIgBgJIAAgqIgKAAIAAgCIAIgFIAHgJIADgJIACAAIAAAVIAPAAIAAAEIgPAAIAAAoQAAAGACACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAEgBQACgCABgDIADAAQgDAIgEACQgEAEgFAAQgDAAgCgBg");
	this.shape_23.setTransform(96.9,10.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF6633").s().p("AADAgIAAgCIABAAQAFAAACgCIACgDIAAgHIAAgZQAAgIgCgEQgCgEgFAAQgIAAgIAJIAAAgQAAAGABACIADADQABABAGAAIAAACIgfAAIAAgCIABAAQAFAAABgDQACgCAAgHIAAgWIAAgOIgCgDIgDgBIgEABIgBgDIASgHIADAAIAAANQALgNAJAAQAFAAAEACQAEADACAGQACAEAAAIIAAAaIABAIIACADIAGABIAAACg");
	this.shape_24.setTransform(91.4,11.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF6633").s().p("AgWAWQgHgKAAgLQAAgIAEgJQAFgIAGgEQAHgEAHAAQAOAAAJALQAHAJAAAMQAAAHgEAJQgEAIgHAFQgHAEgIAAQgOAAgIgLgAgIgaQgEADgCAFQgCAFAAAJQAAAMAFAKQAGAKAHAAQAHAAAEgFQAFgGAAgNQAAgQgHgJQgFgHgHAAQgDAAgEACg");
	this.shape_25.setTransform(84.3,11.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF6633").s().p("AgSAYQgHgJAAgPQAAgOAIgJQAJgJALAAQAKAAAGAFQAGAFAAAFQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgEAAgCgDQgBgBAAgEQgBgEgCgDQgDgCgEAAQgGAAgEAFQgFAHAAALQAAAKAFAJQAGAJAIAAQAHAAAFgFQAEgDADgIIACAAQgCANgIAHQgHAGgJAAQgKAAgIgJg");
	this.shape_26.setTransform(77.8,11.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF6633").s().p("AgWAWQgHgKAAgLQAAgIAEgJQAFgIAGgEQAHgEAHAAQAOAAAJALQAHAJAAAMQAAAHgEAJQgEAIgHAFQgHAEgIAAQgOAAgIgLgAgIgaQgEADgCAFQgCAFAAAJQAAAMAFAKQAGAKAHAAQAHAAAEgFQAFgGAAgNQAAgQgHgJQgFgHgHAAQgDAAgEACg");
	this.shape_27.setTransform(67.6,11.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF6633").s().p("AgCApQgDgDgCgDIgBgJIAAgqIgKAAIAAgCIAIgFIAHgJIADgJIACAAIAAAVIAPAAIAAAEIgPAAIAAAoQAAAGACACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAEgBQACgCABgDIADAAQgDAIgEACQgEAEgFAAQgDAAgCgBg");
	this.shape_28.setTransform(62.3,10.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF6633").s().p("AgRAYQgJgIAAgPQAAgPAJgJQAIgJALAAQALAAAHAHQAGAHAAALIgqAAQAAANAHAIQAHAIAIAAQAGAAAFgDQAFgEADgIIABABQgBAKgHAIQgGAHgLAAQgKAAgIgJgAgKgXQgFAEgBAIIAdAAIgCgIQgCgEgDgCQgDgCgDAAQgGAAgEAEg");
	this.shape_29.setTransform(53.7,11.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF6633").s().p("AgWAgIAAgCQAFAAACgCQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIAAgHIAAgXIAAgNIgCgDIgDgBIgFABIAAgDIATgHIACAAIAAAOQAHgOAJAAQADAAADACQACACAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgDgDIgFgCIgCABQgDADgDAHIAAAdQAAAFABACIADAEIAGABIAAACg");
	this.shape_30.setTransform(48.3,11.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF6633").s().p("AgRAYQgJgIABgPQgBgPAJgJQAIgJAMAAQAKAAAHAHQAHAHAAALIgqAAQAAANAGAIQAHAIAIAAQAGAAAFgDQAEgEADgIIADABQgCAKgGAIQgIAHgKAAQgKAAgIgJgAgLgXQgEAEAAAIIAbAAIgBgIQgCgEgDgCQgDgCgDAAQgGAAgFAEg");
	this.shape_31.setTransform(42.9,11.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF6633").s().p("AADAwIAAgCIACAAQAEAAACgBIACgEIAAgGIAAgXIgBgMQgBgEgCgBQgDgCgDABIgGABQgDACgFAFIAAAhIAAAHIADADIAHABIAAACIgfAAIAAgCQAEAAADgBQAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIABgHIAAg5IAAgMIgBgEIgDgBIgFABIgBgCIASgIIAEAAIAAAuQAHgIAEgDQAEgCAFAAQAFAAAEADQADADACAGQACADAAAMIAAAXIABAHIACADIAGABIAAACg");
	this.shape_32.setTransform(36.2,9.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6633").s().p("AAFAwIAAgCIADAAIABgDQAAgBgDgEIgSgZIAPgNIAFgGIABgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgDgBIAAgCIAbAAIAAACQgGAAgDACQgEABgFAEIgPAOIAPAUIAJALIAGAFIAGAAIAAACgAgiAwIAAgCIAHgBIACgDIABgHIAAg5IAAgMIgCgEIgCgBIgFABIgBgCIATgIIADAAIAAA9IAAAWIABAHQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAHABIAAACg");
	this.shape_33.setTransform(25.8,9.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF6633").s().p("AgSAYQgHgJAAgPQAAgOAIgJQAJgJALAAQAKAAAGAFQAGAFAAAFQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgEAAgCgDQgBgBAAgEQgBgEgCgDQgDgCgEAAQgGAAgEAFQgFAHAAALQAAAKAFAJQAGAJAIAAQAHAAAFgFQAEgDADgIIACAAQgCANgIAHQgHAGgJAAQgKAAgIgJg");
	this.shape_34.setTransform(19.1,11.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF6633").s().p("AgOAwIAAgCIAGgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIABgHIAAgZIgBgMIgBgDIgDgBIgFABIgBgCIASgIIADAAIAAAyIABAHQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAGABIAAACgAgDgkQgCgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQACgDACAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgCgCg");
	this.shape_35.setTransform(14.1,9.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF6633").s().p("AgOAwIAAgCIAGgBQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgHIAAg5IAAgMIgCgEIgCgBIgFABIgBgCIASgIIADAAIAABTIABAHQAAABAAAAQABAAAAABQAAAAABAAQAAABABAAQABABAFAAIAAACg");
	this.shape_36.setTransform(10.2,9.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF6633").s().p("AgSAYQgHgJAAgPQAAgOAIgJQAJgJALAAQAKAAAGAFQAGAFAAAFQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgEAAgCgDQgBgBAAgEQgBgEgCgDQgDgCgEAAQgGAAgEAFQgFAHAAALQAAAKAFAJQAGAJAIAAQAHAAAFgFQAEgDADgIIACAAQgCANgIAHQgHAGgJAAQgKAAgIgJg");
	this.shape_37.setTransform(5.1,11.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,19.6,125.1,0);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol69();
	this.instance.parent = this;
	this.instance.setTransform(43,51,1,1,0,0,0,43,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,102);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ag+A+QgZgZAAglQAAgjAZgbQAagZAkAAQAlAAAZAZQAaAbAAAjQAAAlgaAZQgZAaglAAQgkAAgagag");
	var mask_graphics_1 = new cjs.Graphics().p("AhRBRQgighABgwQgBgvAigiQAighAvgBQAwABAhAhQAjAigBAvQABAwgjAhQghAjgwAAQgvAAgigjg");
	var mask_graphics_2 = new cjs.Graphics().p("AhlBkQgogpAAg7QAAg6AogqQArgpA6gBQA7ABAqApQAqAqgBA6QABA7gqApQgqAqg7ABQg6gBgrgqg");
	var mask_graphics_3 = new cjs.Graphics().p("Ah4B4QgxgyAAhGQAAhGAxgyQAzgxBFAAQBHAAAxAxQAyAyAABGQAABGgyAyQgxAyhHAAQhFAAgzgyg");
	var mask_graphics_4 = new cjs.Graphics().p("AiLCLQg6g5AAhSQAAhRA6g7QA6g5BRAAQBSAAA5A5QA7A7gBBRQABBSg7A5Qg5A6hSAAQhRAAg6g6g");
	var mask_graphics_5 = new cjs.Graphics().p("AieCfQhChCAAhdQAAhcBChDQBChBBcAAQBdAABBBBQBDBDAABcQAABdhDBCQhBBChdAAQhcAAhChCg");
	var mask_graphics_6 = new cjs.Graphics().p("AiyCyQhJhKAAhoQAAhoBJhKQBLhJBnAAQBpAABIBJQBLBKAABoQAABohLBKQhIBKhpAAQhnAAhLhKg");
	var mask_graphics_7 = new cjs.Graphics().p("AjGDFQhRhRAAh0QAAhzBRhSQBThSBzAAQB0AABRBSQBSBSAABzQAAB0hSBRQhRBTh0gBQhzABhThTg");
	var mask_graphics_8 = new cjs.Graphics().p("AjZDYQhZhZAAh/QAAh+BZhbQBbhZB+AAQB/AABZBZQBbBbAAB+QAAB/hbBZQhZBbh/AAQh+AAhbhbg");
	var mask_graphics_9 = new cjs.Graphics().p("AjsDrQhhhggBiLQABiKBhhiQBihiCKABQCLgBBhBiQBjBiAACKQAACLhjBgQhhBkiLgBQiKABhihkg");
	var mask_graphics_10 = new cjs.Graphics().p("Aj/D/QhqhpAAiWQAAiVBqhrQBqhpCVABQCWgBBpBpQBrBrAACVQAACWhrBpQhpBriWgBQiVABhqhrg");
	var mask_graphics_11 = new cjs.Graphics().p("AkTESQhxhwAAiiQAAigBxh0QBzhwCgAAQCiAABwBwQBzB0AACgQAACihzBwQhwBziiAAQigAAhzhzg");
	var mask_graphics_12 = new cjs.Graphics().p("AkmEmQh5h6gBisQABirB5h8QB7h4CrAAQCtAAB4B4QB8B8AACrQAACsh8B6Qh4B6itAAQirAAh7h6g");
	var mask_graphics_13 = new cjs.Graphics().p("Ak6E5QiBiBAAi4QAAi3CBiEQCDiAC3AAQC5AACACAQCDCEAAC3QAAC4iDCBQiACDi5AAQi3AAiDiDg");
	var mask_graphics_14 = new cjs.Graphics().p("AlOFMQiIiJAAjDQAAjCCIiMQCMiIDCAAQDDAACJCIQCLCMAADCQAADDiLCJQiJCLjDAAQjCAAiMiLg");
	var mask_graphics_15 = new cjs.Graphics().p("AlhFfQiRiRAAjOQAAjOCRiTQCTiQDOAAQDPAACQCQQCTCTABDOQgBDOiTCRQiQCTjPAAQjOAAiTiTg");
	var mask_graphics_16 = new cjs.Graphics().p("Al0FyQiZiYAAjaQAAjZCZibQCbiZDZAAQDaAACZCZQCbCbAADZQAADaibCYQiZCcjaAAQjZAAibicg");
	var mask_graphics_17 = new cjs.Graphics().p("AmHGGQihigAAjmQAAjkChikQCjigDkAAQDmAACgCgQCjCkABDkQgBDmijCgQigCkjmAAQjkAAijikg");
	var mask_graphics_18 = new cjs.Graphics().p("AmbGZQioipAAjwQAAjvCoitQCsinDvAAQDxAACoCnQCsCtAADvQAADwisCpQioCsjxAAQjvAAisisg");
	var mask_graphics_19 = new cjs.Graphics().p("AmvGtQiwixAAj8QAAj7Cwi0QC0iwD7AAQD9AACwCwQCzC0AAD7QAAD8izCxQiwCzj9AAQj7AAi0izg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_1,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_2,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_3,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_4,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_5,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_6,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_7,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_8,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_9,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_10,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_11,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_12,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_13,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_14,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_15,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_16,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_17,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_18,x:87.2,y:89.6}).wait(1).to({graphics:mask_graphics_19,x:87.2,y:89.6}).wait(1));

	// Layer_1
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(87.1,87.1,1,1,0,0,0,87.1,87.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78.4,80.8,17.6,17.6);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ag4A4QgXgXAAghQAAggAXgXQAYgYAgAAQAhAAAYAYQAXAXAAAgQAAAhgXAXQgYAYghAAQggAAgYgYg");
	var mask_graphics_1 = new cjs.Graphics().p("AhKBKQgfgeAAgsQAAgrAfgeQAgggAqAAQArAAAgAgQAfAeAAArQAAAsgfAeQggAggrAAQgqAAggggg");
	var mask_graphics_2 = new cjs.Graphics().p("AhcBdQgmgnAAg2QAAg2AmgmQAngnA1AAQA2AAAnAnQAnAmAAA2QAAA2gnAnQgnAng2AAQg1AAgngng");
	var mask_graphics_3 = new cjs.Graphics().p("AhuBvQguguAAhBQAAhAAuguQAuguBAgBQBBABAuAuQAvAuAABAQAABBgvAuQguAuhBAAQhAAAgugug");
	var mask_graphics_4 = new cjs.Graphics().p("AiACBQg2g2AAhLQAAhKA2g2QA1g2BLAAQBLAAA2A2QA2A2AABKQAABLg2A2Qg2A2hLAAQhLAAg1g2g");
	var mask_graphics_5 = new cjs.Graphics().p("AiSCTQg+g8AAhXQAAhVA+g9QA9g+BVAAQBWAAA+A+QA9A9AABVQAABXg9A8Qg+A+hWAAQhVAAg9g+g");
	var mask_graphics_6 = new cjs.Graphics().p("AilCmQhFhFAAhhQAAhgBFhFQBFhEBgAAQBhAABFBEQBFBFAABgQAABhhFBFQhFBEhhAAQhgAAhFhEg");
	var mask_graphics_7 = new cjs.Graphics().p("Ai3C4QhMhNgBhrQABhqBMhNQBNhNBqAAQBsAABMBNQBNBNgBBqQABBrhNBNQhMBNhsAAQhqAAhNhNg");
	var mask_graphics_8 = new cjs.Graphics().p("AjJDKQhUhTAAh3QAAh1BUhUQBUhUB1gBQB2ABBUBUQBUBUAAB1QAAB3hUBTQhUBUh2ABQh1gBhUhUg");
	var mask_graphics_9 = new cjs.Graphics().p("AjbDcQhchbAAiBQAAh/BchdQBbhbCAAAQCBAABbBbQBcBdAAB/QAACBhcBbQhbBciBAAQiAAAhbhcg");
	var mask_graphics_10 = new cjs.Graphics().p("AjuDuQhjhiAAiMQAAiKBjhkQBkhjCKAAQCLAABkBjQBjBkAACKQAACMhjBiQhkBkiLAAQiKAAhkhkg");
	var mask_graphics_11 = new cjs.Graphics().p("AkAEBQhrhrAAiWQAAiVBrhrQBrhqCVAAQCWAABrBqQBrBrAACVQAACWhrBrQhrBqiWAAQiVAAhrhqg");
	var mask_graphics_12 = new cjs.Graphics().p("AkSETQhzhyABihQgBifBzhzQByhzCgABQCggBBzBzQByBzAACfQAAChhyByQhzByigAAQigAAhyhyg");
	var mask_graphics_13 = new cjs.Graphics().p("AkkElQh6h6AAirQAAiqB6h6QB6h6CqAAQCrAAB6B6QB6B6AACqQAACrh6B6Qh6B6irAAQiqAAh6h6g");
	var mask_graphics_14 = new cjs.Graphics().p("Ak3E4QiBiCAAi2QAAi1CBiCQCCiBC1AAQC2AACBCBQCCCCAAC1QAAC2iCCCQiBCBi2AAQi1AAiCiBg");
	var mask_graphics_15 = new cjs.Graphics().p("AlJFKQiJiJAAjBQAAjACJiJQCKiJC/AAQDBAACJCJQCJCJAADAQAADBiJCJQiJCJjBAAQi/AAiKiJg");
	var mask_graphics_16 = new cjs.Graphics().p("AlbFcQiRiQAAjMQAAjKCRiRQCRiRDKAAQDLAACRCRQCRCRAADKQAADMiRCQQiRCRjLAAQjKAAiRiRg");
	var mask_graphics_17 = new cjs.Graphics().p("AltFuQiZiYAAjWQAAjUCZiZQCYiZDVAAQDWAACYCZQCYCZAADUQAADWiYCYQiYCYjWABQjVgBiYiYg");
	var mask_graphics_18 = new cjs.Graphics().p("AmAGBQifigAAjhQAAjfCfihQChifDfAAQDhAACgCfQCfChAADfQAADhifCgQigCfjhAAQjfAAihifg");
	var mask_graphics_19 = new cjs.Graphics().p("AmSGTQinioAAjrQAAjqCnioQCoinDqAAQDrAACoCnQCnCoAADqQAADrinCoQioCnjrAAQjqAAioing");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:72.7,y:66.1}).wait(1).to({graphics:mask_graphics_1,x:72.7,y:66.1}).wait(1).to({graphics:mask_graphics_2,x:72.7,y:66.1}).wait(1).to({graphics:mask_graphics_3,x:72.7,y:66.1}).wait(1).to({graphics:mask_graphics_4,x:72.7,y:66.1}).wait(1).to({graphics:mask_graphics_5,x:72.7,y:66.1}).wait(1).to({graphics:mask_graphics_6,x:72.7,y:66.1}).wait(1).to({graphics:mask_graphics_7,x:72.7,y:66.1}).wait(1).to({graphics:mask_graphics_8,x:72.7,y:66.1}).wait(1).to({graphics:mask_graphics_9,x:72.7,y:66.1}).wait(1).to({graphics:mask_graphics_10,x:72.7,y:66.1}).wait(1).to({graphics:mask_graphics_11,x:72.7,y:66.1}).wait(1).to({graphics:mask_graphics_12,x:72.8,y:66.1}).wait(1).to({graphics:mask_graphics_13,x:72.7,y:66.1}).wait(1).to({graphics:mask_graphics_14,x:72.8,y:66.1}).wait(1).to({graphics:mask_graphics_15,x:72.7,y:66.1}).wait(1).to({graphics:mask_graphics_16,x:72.8,y:66.1}).wait(1).to({graphics:mask_graphics_17,x:72.8,y:66.1}).wait(1).to({graphics:mask_graphics_18,x:72.8,y:66.1}).wait(1).to({graphics:mask_graphics_19,x:72.8,y:66.1}).wait(1));

	// Layer_1
	this.instance = new lib.Tween8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(72.7,66.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.7,58.1,16,16);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhGBHQgdgdAAgqQAAgoAdgeQAegdAoAAQAqAAAdAdQAdAeAAAoQAAAqgdAdQgdAdgqAAQgoAAgegdg");
	var mask_graphics_1 = new cjs.Graphics().p("AhcBcQgmgmAAg2QAAg2AmgmQAmgmA2AAQA2AAAmAmQAnAmAAA2QAAA2gnAmQgmAng2AAQg2AAgmgng");
	var mask_graphics_2 = new cjs.Graphics().p("AhyBzQgvgwAAhDQAAhCAvgwQAwgvBCAAQBDAAAwAvQAvAwAABCQAABDgvAwQgwAvhDAAQhCAAgwgvg");
	var mask_graphics_3 = new cjs.Graphics().p("AiICIQg4g4AAhQQAAhPA4g5QA5g4BPAAQBQAAA4A4QA5A5AABPQAABQg5A4Qg4A5hQAAQhPAAg5g5g");
	var mask_graphics_4 = new cjs.Graphics().p("AieCeQhBhBAAhdQAAhcBBhCQBChBBcAAQBdAABBBBQBCBCAABcQAABdhCBBQhBBChdAAQhcAAhChCg");
	var mask_graphics_5 = new cjs.Graphics().p("Ai0C0QhKhKAAhqQAAhpBKhLQBLhKBpAAQBqAABKBKQBLBLAABpQAABqhLBKQhKBLhqAAQhpAAhLhLg");
	var mask_graphics_6 = new cjs.Graphics().p("AjKDKQhThTAAh3QAAh2BThUQBUhTB2AAQB3AABTBTQBUBUAAB2QAAB3hUBTQhTBUh3AAQh2AAhUhUg");
	var mask_graphics_7 = new cjs.Graphics().p("AjgDgQhchcAAiEQAAiDBchdQBdhcCDAAQCEAABcBcQBdBdAACDQAACEhdBcQhcBdiEAAQiDAAhdhdg");
	var mask_graphics_8 = new cjs.Graphics().p("Aj2D2QhlhlAAiRQAAiQBlhmQBmhlCQAAQCRAABlBlQBmBmAACQQAACRhmBlQhlBmiRAAQiQAAhmhmg");
	var mask_graphics_9 = new cjs.Graphics().p("AkMEMQhuhuAAieQAAidBuhvQBvhuCdAAQCeAABuBuQBvBvAACdQAACehvBuQhuBvieAAQidAAhvhvg");
	var mask_graphics_10 = new cjs.Graphics().p("AkjEhQh3h3AAiqQAAipB3h6QB6h3CpAAQCqAAB3B3QB6B6AACpQAACqh6B3Qh3B6iqAAQipAAh6h6g");
	var mask_graphics_11 = new cjs.Graphics().p("Ak5E3QiAiAAAi3QAAi2CAiDQCDiAC2AAQC3AACACAQCDCDAAC2QAAC3iDCAQiACDi3AAQi2AAiDiDg");
	var mask_graphics_12 = new cjs.Graphics().p("AlPFNQiJiJAAjEQAAjDCJiMQCMiJDDAAQDEAACJCJQCMCMAADDQAADEiMCJQiJCMjEAAQjDAAiMiMg");
	var mask_graphics_13 = new cjs.Graphics().p("AllFjQiSiSAAjRQAAjQCSiVQCViSDQAAQDRAACSCSQCVCVAADQQAADRiVCSQiSCVjRAAQjQAAiViVg");
	var mask_graphics_14 = new cjs.Graphics().p("Al7F5QibibAAjeQAAjdCbieQCeibDdAAQDeAACbCbQCeCeAADdQAADeieCbQibCejeAAQjdAAieieg");
	var mask_graphics_15 = new cjs.Graphics().p("AmRGPQikikAAjrQAAjqCkinQCnikDqAAQDrAACkCkQCnCnAADqQAADrinCkQikCnjrAAQjqAAining");
	var mask_graphics_16 = new cjs.Graphics().p("AmnGkQititAAj3QAAj3CtiwQCwitD3AAQD3AACtCtQCxCwAAD3QAAD3ixCtQitCxj3AAQj3AAiwixg");
	var mask_graphics_17 = new cjs.Graphics().p("Am9G7Qi2i3AAkEQAAkEC2i5QC5i2EEAAQEEAAC3C2QC5C5AAEEQAAEEi5C3Qi3C5kEAAQkEAAi5i5g");
	var mask_graphics_18 = new cjs.Graphics().p("AnTHRQi/jAAAkRQAAkRC/jCQDCi/ERAAQERAADAC/QDCDCAAERQAAERjCDAQjADCkRAAQkRAAjCjCg");
	var mask_graphics_19 = new cjs.Graphics().p("AnpHmQjIjHAAkfQAAkdDIjMQDMjIEdAAQEfAADHDIQDMDMAAEdQAAEfjMDHQjHDMkfAAQkdAAjMjMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_1,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_2,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_3,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_4,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_5,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_6,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_7,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_8,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_9,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_10,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_11,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_12,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_13,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_14,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_15,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_16,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_17,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_18,x:115.1,y:115.1}).wait(1).to({graphics:mask_graphics_19,x:115.1,y:115.1}).wait(1));

	// Layer_1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(115,115,1,1,0,0,0,115,115);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(105.1,105.1,20,20);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgqArQgTgRABgaQgBgZATgRQARgTAZABQAagBARATQATARgBAZQABAagTARQgRATgagBQgZABgRgTg");
	var mask_graphics_1 = new cjs.Graphics().p("AhCBCQgbgbAAgnQAAgmAbgcQAcgbAmAAQAnAAAbAbQAcAcAAAmQAAAngcAbQgbAcgnAAQgmAAgcgcg");
	var mask_graphics_2 = new cjs.Graphics().p("AhYBZQglglAAg0QAAgzAlglQAlglAzAAQA1AAAkAlQAlAlAAAzQAAA0glAlQgkAlg1AAQgzAAglglg");
	var mask_graphics_3 = new cjs.Graphics().p("AhvBwQgugvAAhBQAAhBAuguQAuguBBAAQBBAAAvAuQAuAuAABBQAABBguAvQgvAuhBAAQhBAAgugug");
	var mask_graphics_4 = new cjs.Graphics().p("AiGCGQg4g3AAhPQAAhOA4g3QA4g5BOAAQBPAAA3A5QA4A3ABBOQgBBPg4A3Qg3A5hPAAQhOAAg4g5g");
	var mask_graphics_5 = new cjs.Graphics().p("AicCeQhBhCAAhcQAAhbBBhBQBBhCBbABQBdgBBBBCQBBBBgBBbQABBchBBCQhBBBhdgBQhbABhBhBg");
	var mask_graphics_6 = new cjs.Graphics().p("AizC0QhLhKAAhqQAAhpBLhKQBKhLBpAAQBqAABKBLQBLBKAABpQAABqhLBKQhKBLhqAAQhpAAhKhLg");
	var mask_graphics_7 = new cjs.Graphics().p("AjKDLQhUhUAAh3QAAh2BUhUQBUhUB2AAQB3AABUBUQBUBUAAB2QAAB3hUBUQhUBUh3AAQh2AAhUhUg");
	var mask_graphics_8 = new cjs.Graphics().p("AjhDiQhdheAAiEQAAiDBdheQBehdCDAAQCEAABeBdQBdBeAACDQAACEhdBeQheBdiEAAQiDAAhehdg");
	var mask_graphics_9 = new cjs.Graphics().p("Aj4D5QhnhoABiRQgBiRBnhnQBnhnCRAAQCRAABoBnQBmBnABCRQgBCRhmBoQhoBmiRAAQiRAAhnhmg");
	var mask_graphics_10 = new cjs.Graphics().p("AkPEPQhwhwAAifQAAieBwhxQBxhwCeAAQCfAABwBwQBxBxAACeQAACfhxBwQhwBxifAAQieAAhxhxg");
	var mask_graphics_11 = new cjs.Graphics().p("AkmEmQh5h6AAisQAAisB5h6QB7h5CrAAQCsAAB6B5QB6B6AACsQAACsh6B6Qh6B6isAAQirAAh7h6g");
	var mask_graphics_12 = new cjs.Graphics().p("Ak8E9QiDiDAAi6QAAi5CDiDQCDiDC5AAQC6AACDCDQCDCDAAC5QAAC6iDCDQiDCDi6AAQi5AAiDiDg");
	var mask_graphics_13 = new cjs.Graphics().p("AlTFUQiNiNABjHQgBjHCNiMQCNiNDGABQDHgBCNCNQCMCMAADHQAADHiMCNQiNCMjHAAQjGAAiNiMg");
	var mask_graphics_14 = new cjs.Graphics().p("AlqFqQiWiWABjUQgBjUCWiWQCXiWDTAAQDUAACWCWQCWCWABDUQgBDUiWCWQiWCWjUAAQjTAAiXiWg");
	var mask_graphics_15 = new cjs.Graphics().p("AmAGBQigifAAjiQAAjhCgifQCfigDhAAQDiAACfCgQCgCfAADhQAADiigCfQifCgjiAAQjhAAifigg");
	var mask_graphics_16 = new cjs.Graphics().p("AmXGYQipipAAjvQAAjvCpioQCpipDuAAQDvAACpCpQCpCoAADvQAADvipCpQipCpjvAAQjuAAipipg");
	var mask_graphics_17 = new cjs.Graphics().p("AmuGvQiyiyAAj9QAAj7CyizQCziyD7AAQD9AACyCyQCyCzAAD7QAAD9iyCyQiyCyj9AAQj7AAiziyg");
	var mask_graphics_18 = new cjs.Graphics().p("AnFHFQi7i7AAkKQAAkJC7i8QC8i8EJABQEKgBC7C8QC8C8AAEJQAAEKi8C7Qi7C8kKAAQkJAAi8i8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:75.1,y:81.9}).wait(1).to({graphics:mask_graphics_1,x:75.1,y:81.9}).wait(1).to({graphics:mask_graphics_2,x:75.1,y:81.9}).wait(1).to({graphics:mask_graphics_3,x:75.1,y:81.9}).wait(1).to({graphics:mask_graphics_4,x:75.1,y:81.9}).wait(1).to({graphics:mask_graphics_5,x:75.1,y:81.9}).wait(1).to({graphics:mask_graphics_6,x:75.1,y:81.9}).wait(1).to({graphics:mask_graphics_7,x:75.1,y:81.9}).wait(1).to({graphics:mask_graphics_8,x:75.1,y:81.9}).wait(1).to({graphics:mask_graphics_9,x:75.1,y:82}).wait(1).to({graphics:mask_graphics_10,x:75.1,y:81.9}).wait(1).to({graphics:mask_graphics_11,x:75.1,y:82}).wait(1).to({graphics:mask_graphics_12,x:75.1,y:81.9}).wait(1).to({graphics:mask_graphics_13,x:75.1,y:82}).wait(1).to({graphics:mask_graphics_14,x:75.1,y:82}).wait(1).to({graphics:mask_graphics_15,x:75.1,y:81.9}).wait(1).to({graphics:mask_graphics_16,x:75.1,y:82}).wait(1).to({graphics:mask_graphics_17,x:75.1,y:81.9}).wait(1).to({graphics:mask_graphics_18,x:75.1,y:82}).wait(1));

	// Layer_1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(75.1,81.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.9,75.8,12.3,12.3);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween20("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(59,59,0.364,0.364);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,118,118);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween31("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(96.2,96.6,4.171,4.171,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191.4,191.4);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(88.8,88.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177.6,177.6);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(72.5,66.1,1,1,0,0,0,72.5,66.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.9,132.2);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(74.9,82,1,1,0,0,0,74.9,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149.9,163.9);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(115,115.1,1.002,1.002,0,0,0,114.7,114.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,230);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(68.4,10.2,1,1,0,0,0,62.5,9.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#336633").ss(0.1,1,1).p("Aq1iSIVrAAIAAElI1rAAg");
	this.shape.setTransform(69.5,11.9,1,0.811);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006633").s().p("Aq2CTIAAklIVtAAIAAElg");
	this.shape_1.setTransform(69.5,11.9,1,0.811);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-1,152.7,40.4);


// stage content:
(lib.Project = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		this.stop();
		this.btnContinue.addEventListener("click",goNext.bind(this));
		
		function goNext(){
			this.gotoAndPlay(52);
		}
	}
	this.frame_104 = function() {
		this.btnFj.addEventListener("click",goNext100.bind(this));
		
		function goNext100(e){
			this.gotoAndPlay(105);
		}
	}
	this.frame_105 = function() {
		this.stop();
		
		this.btnServices.addEventListener("click",goNextA.bind(this));
		
		function goNextA(e){
			this.gotoAndPlay(105);
		}
		
		this.btnBooking.addEventListener("click",goNextV.bind(this));
		
		function goNextV(e){
			this.gotoAndPlay(364);
		}
		
		this.btnAbout.addEventListener("click",goNextZZ.bind(this));
		
		function goNextZZ(){
			this.gotoAndPlay(409);
		}
		
		
		//this.btnPlay.addEventListener("click",playMusic.bind(this));
		
		//createjs.Sound.registerSound("dreams.mp3","soundID");
		
		//var isPause = null;
		//var music; 
		
		//function playMusic(e){
		//	if(this.isPause==null){
		//		this.music = createjs.Sound.play("soundID");
		//		this.isPause = false;
		//	}
		//	else if(this.isPause == true)
		//	{
		//		this.music.paused = false; 
		//		this.isPause = false;
		//	}
		//}
		this.btnPlay.addEventListener("click",playMusic.bind(this));
		
		createjs.Sound.registerSound("dreamWG.mp3","audioDreams");
		
		var isPause = null;
		var music; 
		
		function playMusic(e){
			if(this.isPause==null){
				this.music = createjs.Sound.play("audioDreams");
				this.isPause = false;
			}
			else if(this.isPause == true) //berhenti musiknya
			{
				this.music.paused = false; //jangan dimainin dlu
				this.isPause = false;
			}
		}
		
		this.btnPause.addEventListener("click", pauseMusic.bind(this));
		
		function pauseMusic(e){ 
			if(this.isPause == false)
			{
				this.music.paused = true;
				this.isPause = true;
			}
		}
		
		this.btnStop.addEventListener("click",stopMusic.bind(this));
		
		function stopMusic(e){
			this.music.paused = true; 
			this.isPause = null; 
		}
	}
	this.frame_239 = function() {
		this.stop();
		
		this.btnHydraulic.addEventListener("click",goNextT.bind(this));
		
		function goNextT(e){
			this.gotoAndPlay(332);
		}
		this.stop();
		
		this.btnWax.addEventListener("click",goNext3.bind(this));
		
		function goNext3(e){
			this.gotoAndPlay(301);
		}
		this.stop();
		
		this.btnSnow.addEventListener("click",goNext2.bind(this));
		
		function goNext2(e){
			this.gotoAndPlay(270);
		}
		this.stop();
		
		this.btnAutomatic.addEventListener("click",goNext1.bind(this));
		
		function goNext1(e){
			this.gotoAndPlay(240);
		}
	}
	this.frame_269 = function() {
		this.stop();
		this.stop();
		this.stop();
		
		
		this.btnBack1.addEventListener("click",goNextP.bind(this));
		
		function goNextP(e){
			this.gotoAndPlay(239);
		}
		
		
		this.btnBook1.addEventListener("click",goNext10.bind(this));
		
		function goNext10(e){
			this.gotoAndPlay(364);
		}
	}
	this.frame_300 = function() {
		this.stop();
		this.stop();
		this.stop();
		
		this.btnBack2.addEventListener("click",goNextQ.bind(this));
		
		function goNextQ(e){
			this.gotoAndPlay(239);
		}
		
		this.btnBook2.addEventListener("click",goNext11.bind(this));
		
		function goNext11(e){
			this.gotoAndPlay(364);
		}
	}
	this.frame_331 = function() {
		this.stop();
		this.stop();
		this.stop();
		
		this.btnBack3.addEventListener("click",goNextR.bind(this));
		
		function goNextR(e){
			this.gotoAndPlay(239);
		}
		
		this.btnBook3.addEventListener("click",goNext12.bind(this));
		
		function goNext12(e){
			this.gotoAndPlay(364);
		}
	}
	this.frame_363 = function() {
		this.stop();
		this.stop();
		this.stop();
		
		this.btnBack4.addEventListener("click",goNextS.bind(this));
		
		function goNextS(e){
			this.gotoAndPlay(239);
		}
		
		this.btnBook4.addEventListener("click",goNext13.bind(this));
		
		function goNext13(e){
			this.gotoAndPlay(364);
		}
	}
	this.frame_408 = function() {
		this.stop();
		
		this.btnLink.addEventListener("dblclick",checkweb.bind(this));
		
		function checkweb(e){
			window.open("https://forms.gle/22a8AFLVaStmuXCz6","_blank");
		}
	}
	this.frame_434 = function() {
		this.stop();
		
		this.btnNextA.addEventListener("click",goNextXY.bind(this));
		
		function goNextXY(e){
			this.gotoAndPlay(436);
		}
		this.stop();
	}
	this.frame_562 = function() {
		this.stop();
		
		this.btnBack998.addEventListener("click",goNextWW.bind(this));
		
		function goNextWW(e){
			this.gotoAndPlay(409);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(53).call(this.frame_104).wait(1).call(this.frame_105).wait(134).call(this.frame_239).wait(30).call(this.frame_269).wait(31).call(this.frame_300).wait(31).call(this.frame_331).wait(32).call(this.frame_363).wait(45).call(this.frame_408).wait(26).call(this.frame_434).wait(128).call(this.frame_562).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(275,200);
	this.___camera___instance.depth = 0;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(52).to({scaleX:0.76,scaleY:0.76},11).to({regX:0.1,regY:0.1,scaleX:0.97,scaleY:0.97,x:275.1,y:200.1},11).to({_off:true},1).wait(488));

	// buttonBack
	this.btnBack998 = new lib.Symbol71();
	this.btnBack998.name = "btnBack998";
	this.btnBack998.parent = this;
	this.btnBack998.setTransform(51,353,1,1,0,0,0,51,51);
	this.btnBack998._off = true;
	new cjs.ButtonHelper(this.btnBack998, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnBack998).wait(562).to({_off:false},0).wait(1));

	// back
	this.instance = new lib.Symbol69();
	this.instance.parent = this;
	this.instance.setTransform(601,353,1,1,0,0,0,51,51);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(550).to({_off:false},0).to({x:51,alpha:1},11).to({_off:true},1).wait(1));

	// text3
	this.instance_1 = new lib.Symbol68();
	this.instance_1.parent = this;
	this.instance_1.setTransform(442.5,472.8,1,1,0,0,0,89.5,112);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(532).to({_off:false},0).to({y:272,alpha:1},18).wait(13));

	// logo3
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.016,0,0,0.016,-4.1,-4.1)).s().p("AgoApIAAhQIBQAAIAABQg");
	this.shape.setTransform(276.3,200.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.022,0,0,0.022,-5.8,-5.8)).s().p("Ag4A5IAAhxIBxAAIAABxg");
	this.shape_1.setTransform(284.5,195.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.029,0,0,0.029,-7.5,-7.5)).s().p("AhJBKIAAiTICTAAIAACTg");
	this.shape_2.setTransform(292.8,191.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.035,0,0,0.035,-9.1,-9.1)).s().p("AhaBbIAAi0IC0AAIAAC0g");
	this.shape_3.setTransform(301.1,187.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.042,0,0,0.042,-10.9,-10.9)).s().p("AhqBrIAAjVIDVAAIAADVg");
	this.shape_4.setTransform(309.4,183);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.048,0,0,0.048,-12.5,-12.5)).s().p("Ah7B8IAAj3ID3AAIAAD3g");
	this.shape_5.setTransform(317.7,178.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.055,0,0,0.055,-14.2,-14.2)).s().p("AiMCMIAAkYIEYAAIAAEYg");
	this.shape_6.setTransform(326,174.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.061,0,0,0.061,-15.9,-15.9)).s().p("AicCdIAAk5IE5AAIAAE5g");
	this.shape_7.setTransform(334.3,170.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.068,0,0,0.068,-17.6,-17.6)).s().p("AitCuIAAlbIFbAAIAAFbg");
	this.shape_8.setTransform(342.6,165.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.075,0,0,0.075,-19.3,-19.3)).s().p("Ai9C+IAAl7IF7AAIAAF7g");
	this.shape_9.setTransform(350.9,161.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.081,0,0,0.081,-21,-21)).s().p("AjPDPIAAmeIGeAAIAAGeg");
	this.shape_10.setTransform(359.2,157.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.088,0,0,0.088,-22.7,-22.7)).s().p("AjfDgIAAm/IG/AAIAAG/g");
	this.shape_11.setTransform(367.5,153);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.094,0,0,0.094,-24.4,-24.4)).s().p("AjwDxIAAnhIHhAAIAAHhg");
	this.shape_12.setTransform(375.7,148.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.101,0,0,0.101,-26,-26)).s().p("AkAEBIAAoBIICAAIAAIBg");
	this.shape_13.setTransform(384,144.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.107,0,0,0.107,-27.7,-27.8)).s().p("AkRESIAAojIIjAAIAAIjg");
	this.shape_14.setTransform(392.3,140.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.114,0,0,0.114,-29.4,-29.4)).s().p("AkiEjIAApFIJFAAIAAJFg");
	this.shape_15.setTransform(400.6,135.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.12,0,0,0.12,-31.1,-31.1)).s().p("AkyE0IAApmIJlAAIAAJmg");
	this.shape_16.setTransform(408.9,131.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.127,0,0,0.127,-32.8,-32.8)).s().p("AlDFEIAAqHIKHAAIAAKHg");
	this.shape_17.setTransform(417.2,127.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.133,0,0,0.133,-34.5,-34.5)).s().p("AlUFVIAAqpIKpAAIAAKpg");
	this.shape_18.setTransform(425.5,123);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],8), null, new cjs.Matrix2D(0.14,0,0,0.14,-36.2,-36.2)).s().p("AllFmIAArLILLAAIAALLg");
	this.shape_19.setTransform(433.8,118.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},513).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},30).wait(1));

	// text2
	this.instance_2 = new lib.Symbol67();
	this.instance_2.parent = this;
	this.instance_2.setTransform(269,449.7,1,1,0,0,0,84,111);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(495).to({_off:false},0).to({y:271,alpha:1},17).wait(51));

	// logo2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.004,0,0,0.004,-3.7,-3.7)).s().p("AgkAlIAAhJIBJAAIAABJg");
	this.shape_20.setTransform(276.2,199.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.006,0,0,0.006,-5.4,-5.4)).s().p("Ag0A1IAAhpIBpAAIAABpg");
	this.shape_21.setTransform(275.5,195.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.007,0,0,0.007,-7,-7)).s().p("AhEBFIAAiJICJAAIAACJg");
	this.shape_22.setTransform(274.8,191.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.009,0,0,0.009,-8.6,-8.6)).s().p("AhUBVIAAipICpAAIAACpg");
	this.shape_23.setTransform(274.1,187.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.011,0,0,0.011,-10.2,-10.3)).s().p("AhkBlIAAjJIDJAAIAADJg");
	this.shape_24.setTransform(273.3,183.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.012,0,0,0.012,-11.9,-11.9)).s().p("Ah0B1IAAjpIDpAAIAADpg");
	this.shape_25.setTransform(272.6,179.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.014,0,0,0.014,-13.5,-13.5)).s().p("AiECFIAAkJIEJAAIAAEJg");
	this.shape_26.setTransform(271.9,175.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.016,0,0,0.016,-15.1,-15.1)).s().p("AiUCVIAAkpIEpAAIAAEpg");
	this.shape_27.setTransform(271.1,171.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.017,0,0,0.017,-16.8,-16.7)).s().p("AikClIAAlJIFJAAIAAFJg");
	this.shape_28.setTransform(270.4,167.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.019,0,0,0.019,-18.4,-18.4)).s().p("Ai0C1IAAlpIFpAAIAAFpg");
	this.shape_29.setTransform(269.7,163.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.021,0,0,0.021,-20,-20)).s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape_30.setTransform(269,159.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.022,0,0,0.022,-21.6,-21.6)).s().p("AjVDVIAAmpIGrAAIAAGpg");
	this.shape_31.setTransform(268.3,155.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.024,0,0,0.024,-23.2,-23.3)).s().p("AjkDlIAAnJIHJAAIAAHJg");
	this.shape_32.setTransform(267.5,151.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.026,0,0,0.026,-24.9,-24.8)).s().p("Aj0D2IAAnrIHpAAIAAHrg");
	this.shape_33.setTransform(266.8,147.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.027,0,0,0.027,-26.5,-26.5)).s().p("AkEEGIAAoLIIJAAIAAILg");
	this.shape_34.setTransform(266.1,143.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.029,0,0,0.029,-28.1,-28.1)).s().p("AkUEVIAAopIIpAAIAAIpg");
	this.shape_35.setTransform(265.4,139.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.031,0,0,0.031,-29.7,-29.7)).s().p("AklElIAApJIJLAAIAAJJg");
	this.shape_36.setTransform(264.7,135);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.032,0,0,0.032,-31.3,-31.4)).s().p("Ak1E1IAAppIJqAAIAAJpg");
	this.shape_37.setTransform(263.9,130.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.034,0,0,0.034,-33,-33)).s().p("AlEFFIAAqJIKJAAIAAKJg");
	this.shape_38.setTransform(263.2,126.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.036,0,0,0.036,-34.6,-34.6)).s().p("AlUFWIAAqqIKpAAIAAKqg");
	this.shape_39.setTransform(262.5,122.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],0), null, new cjs.Matrix2D(0.037,0,0,0.037,-36.2,-36.2)).s().p("AllFmIAArLILLAAIAALLg");
	this.shape_40.setTransform(261.8,118.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20}]},474).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},68).wait(1));

	// text1
	this.instance_3 = new lib.Symbol66();
	this.instance_3.parent = this;
	this.instance_3.setTransform(106.5,446.9,1,1,0,0,0,76.5,110.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(457).to({_off:false},0).to({y:270.2,alpha:1},17).wait(88).to({x:108.6},0).wait(1));

	// logo1
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.04,0,0,0.041,-10.1,-10.2)).s().p("AhkBmIAAjLIDJAAIAADLg");
	this.shape_41.setTransform(275.6,200.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.058,0,0,0.058,-14.4,-14.6)).s().p("AiPCSIAAkjIEfAAIAAEjg");
	this.shape_42.setTransform(266.6,196.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.075,0,0,0.076,-18.8,-19)).s().p("Ai7C+IAAl7IF3AAIAAF7g");
	this.shape_43.setTransform(257.7,193.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.092,0,0,0.093,-23.1,-23.4)).s().p("AjmDqIAAnTIHNAAIAAHTg");
	this.shape_44.setTransform(248.8,189.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.11,0,0,0.111,-27.5,-27.7)).s().p("AkSEWIAAorIIlAAIAAIrg");
	this.shape_45.setTransform(239.8,185.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.127,0,0,0.129,-31.8,-32.2)).s().p("Ak9FBIAAqBIJ7AAIAAKBg");
	this.shape_46.setTransform(230.9,182.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.145,0,0,0.146,-36.2,-36.5)).s().p("AlpFuIAAraILTAAIAALag");
	this.shape_47.setTransform(222,178.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.162,0,0,0.164,-40.5,-40.9)).s().p("AmUGZIAAsxIMpAAIAAMxg");
	this.shape_48.setTransform(213.1,174.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.179,0,0,0.181,-44.9,-45.3)).s().p("AnAHFIAAuJIOBAAIAAOJg");
	this.shape_49.setTransform(204.1,171.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.197,0,0,0.199,-49.2,-49.7)).s().p("AnrHxIAAvhIPXAAIAAPhg");
	this.shape_50.setTransform(195.2,167.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.214,0,0,0.216,-53.5,-54.1)).s().p("AoXIdIAAw5IQuAAIAAQ5g");
	this.shape_51.setTransform(186.3,163.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.231,0,0,0.234,-57.9,-58.5)).s().p("ApCJJIAAyRISFAAIAASRg");
	this.shape_52.setTransform(177.4,160.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.249,0,0,0.251,-62.2,-62.9)).s().p("AptJ1IAAzpITbAAIAATpg");
	this.shape_53.setTransform(168.4,156.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.266,0,0,0.269,-66.6,-67.3)).s().p("AqZKhIAA1BIUzAAIAAVBg");
	this.shape_54.setTransform(159.5,152.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.284,0,0,0.287,-70.9,-71.7)).s().p("ArELMIAA2XIWJAAIAAWXg");
	this.shape_55.setTransform(150.6,149.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.301,0,0,0.304,-75.3,-76.1)).s().p("ArwL5IAA3wIXhAAIAAXwg");
	this.shape_56.setTransform(141.6,145.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.318,0,0,0.322,-79.6,-80.5)).s().p("AsbMkIAA5HIY3AAIAAZHg");
	this.shape_57.setTransform(132.7,141.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.336,0,0,0.339,-84,-84.9)).s().p("AtHNQIAA6fIaPAAIAAafg");
	this.shape_58.setTransform(123.8,138);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.353,0,0,0.357,-88.3,-89.2)).s().p("AtyN8IAA73IblAAIAAb3g");
	this.shape_59.setTransform(114.9,134.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.37,0,0,0.374,-92.7,-93.7)).s().p("AueOoIAA9PIc9AAIAAdPg");
	this.shape_60.setTransform(105.9,130.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],12), null, new cjs.Matrix2D(0.388,0,0,0.392,-97,-98)).s().p("AvJPUIAA+nIeTAAIAAeng");
	this.shape_61.setTransform(97,127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_41}]},435).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},19).to({state:[{t:this.shape_61}]},88).wait(1));

	// about us
	this.instance_4 = new lib.Symbol50();
	this.instance_4.parent = this;
	this.instance_4.setTransform(177.8,40.5,1,1,0,0,0,83.8,23.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(435).to({_off:false},0).wait(127).to({x:171.8},0).wait(1));

	// Video
	this.instance_5 = new lib.Symbol50();
	this.instance_5.parent = this;
	this.instance_5.setTransform(115.2,20.6,1,1,0,0,0,21.5,3.5);

	this.instance_6 = new lib.an_Video({'id': 'instance_6', 'src':'videos/MALIKA.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'images/', 'preload':true, 'class':'video'});

	this.instance_6.setTransform(189.2,214.9,0.791,0.594,0,0,0,200,150.2);

	this.btnNextA = new lib.Symbol51();
	this.btnNextA.name = "btnNextA";
	this.btnNextA.parent = this;
	this.btnNextA.setTransform(514.5,365.9,1,1,0,0,0,50,50);
	new cjs.ButtonHelper(this.btnNextA, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnNextA},{t:this.instance_6},{t:this.instance_5}]},434).to({state:[]},1).wait(128));

	// Text
	this.instance_7 = new lib.Symbol52();
	this.instance_7.parent = this;
	this.instance_7.setTransform(453,303.1,1,1,0,0,0,77,206.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.text = new cjs.Text("", "35px 'Impact'");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(643.4,62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},409).to({state:[{t:this.instance_7},{t:this.text}]},25).to({state:[]},1).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(409).to({_off:false},0).to({alpha:1},25).to({_off:true},1).wait(128));

	// Layer_30
	this.instance_8 = new lib.Tween30("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(144.2,73.2);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween31("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(405.4,252.6,4.171,4.171,0,0,0,0.1,0.2);

	this.btnLink = new lib.Symbol42();
	this.btnLink.name = "btnLink";
	this.btnLink.parent = this;
	this.btnLink.setTransform(405,251.8,1,1,0,0,0,95.8,95.8);
	new cjs.ButtonHelper(this.btnLink, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},382).to({state:[{t:this.instance_9}]},25).to({state:[{t:this.btnLink}]},1).to({state:[]},1).wait(154));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(382).to({_off:false},0).to({_off:true,regX:0.1,regY:0.2,scaleX:4.17,scaleY:4.17,guide:{path:[144.3,73.2,176.5,68.9,213.2,73.6,245.1,77.7,277.3,80.5,314.8,83.7,341.1,108.3,360.1,126,378.7,144.5,402.8,168.4,420.9,196.1,438.1,222.6,444.9,252.7,446.4,259.6,445.5,266.3,441.5,270.7,441.1,271.4,403.4,282,365.7,292.6,365.7,266.7,365.7,240.7,374.5,240.7,383.3,240.7,383.3,246.2,383.5,246.4,394.3,249.4,405.2,252.4]}},25).wait(156));

	// Attention
	this.instance_10 = new lib.Symbol40();
	this.instance_10.parent = this;
	this.instance_10.setTransform(149.1,135.8,1,1,0,0,0,82,29.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(364).to({_off:false},0).wait(44).to({_off:true},1).wait(154));

	// Booking
	this.instance_11 = new lib.Symbol41();
	this.instance_11.parent = this;
	this.instance_11.setTransform(424.4,288.9,1,1,0,0,0,129.4,145.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.Symbol65();
	this.instance_12.parent = this;
	this.instance_12.setTransform(174.5,39.8,1,1,0,0,0,90.5,26.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},364).to({state:[{t:this.instance_11}]},18).to({state:[{t:this.instance_11}]},25).to({state:[{t:this.instance_11},{t:this.instance_12}]},1).to({state:[]},1).wait(154));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(364).to({_off:false},0).to({x:154.5,alpha:1},18).wait(26).to({_off:true},1).wait(154));

	// back4
	this.instance_13 = new lib.Symbol47();
	this.instance_13.parent = this;
	this.instance_13.setTransform(519.5,368.5,1,1,0,0,0,25.5,25.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(349).to({_off:false},0).to({alpha:1},13).to({_off:true},1).wait(200));

	// butt4
	this.instance_14 = new lib.Symbol36();
	this.instance_14.parent = this;
	this.instance_14.setTransform(464,369,1,1,0,0,0,51,51);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(349).to({_off:false},0).to({alpha:1},13).to({_off:true},1).wait(200));

	// detail_hydraulic
	this.instance_15 = new lib.Symbol31();
	this.instance_15.parent = this;
	this.instance_15.setTransform(268.6,259.9,1,1,0,0,0,241.5,88.1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(349).to({_off:false},0).to({alpha:1},14).to({_off:true},1).wait(199));

	// text_hydraulic
	this.instance_16 = new lib.Symbol30();
	this.instance_16.parent = this;
	this.instance_16.setTransform(4.6,132.2,1,1,0,0,0,118,22.9);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(332).to({_off:false},0).to({x:218.6,alpha:1},17).wait(14).to({_off:true},1).wait(199));

	// logo_hydraulic
	this.instance_17 = new lib.Symbol29();
	this.instance_17.parent = this;
	this.instance_17.setTransform(390.1,297.1,1,1,0,0,0,87.1,87.1);
	this.instance_17._off = true;
	this.instance_17.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 127.5, 127.5, 0)];
	this.instance_17.cache(-2,-2,178,178);

	this.instance_18 = new lib.Symbol63();
	this.instance_18.parent = this;
	this.instance_18.setTransform(390.1,126.1,1,1,0,0,0,87.1,87.1);

	this.btnBook4 = new lib.Symbol46();
	this.btnBook4.name = "btnBook4";
	this.btnBook4.parent = this;
	this.btnBook4.setTransform(518.5,369.5,0.996,0.996,0,0,0,25.6,25.6);
	new cjs.ButtonHelper(this.btnBook4, 0, 1, 1);

	this.btnBack4 = new lib.Symbol35();
	this.btnBack4.name = "btnBack4";
	this.btnBack4.parent = this;
	this.btnBack4.setTransform(464,369,1,1,0,0,0,51,51);
	new cjs.ButtonHelper(this.btnBack4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},332).to({state:[{t:this.instance_17}]},17).to({state:[{t:this.btnBack4},{t:this.btnBook4},{t:this.instance_18}]},14).to({state:[]},1).wait(199));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(332).to({_off:false},0).to({y:126.1},17).to({_off:true},14).wait(200));

	// back3
	this.instance_19 = new lib.Symbol47();
	this.instance_19.parent = this;
	this.instance_19.setTransform(519.5,368.5,1,1,0,0,0,25.5,25.5);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(318).to({_off:false},0).to({alpha:1},12).to({_off:true},1).wait(232));

	// butt3
	this.instance_20 = new lib.Symbol36();
	this.instance_20.parent = this;
	this.instance_20.setTransform(464,369,1,1,0,0,0,51,51);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(318).to({_off:false},0).to({alpha:1},12).to({_off:true},1).wait(232));

	// details_wax
	this.instance_21 = new lib.Tween11("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(287.5,307.2);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.instance_22 = new lib.Tween13("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(261.5,307.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21}]},318).to({state:[{t:this.instance_22}]},13).to({state:[]},1).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(318).to({_off:false},0).to({_off:true,x:261.5,alpha:1},13).wait(232));

	// text_wax
	this.instance_23 = new lib.Tween9("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(409.5,142.1);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.instance_24 = new lib.Tween10("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(243.5,142.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23}]},301).to({state:[{t:this.instance_24}]},17).to({state:[{t:this.instance_24}]},13).to({state:[]},1).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(301).to({_off:false},0).to({_off:true,x:243.5,alpha:1},17).wait(245));

	// logo_wax
	this.instance_25 = new lib.Tween7("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(130.7,295.1);
	this.instance_25._off = true;
	this.instance_25.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 127.5, 127.5, 0)];
	this.instance_25.cache(-75,-68,149,136);

	this.instance_26 = new lib.Tween8("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(130.7,111.1);

	this.instance_27 = new lib.Symbol62();
	this.instance_27.parent = this;
	this.instance_27.setTransform(130.7,111.1,1,1,0,0,0,72.7,66.1);

	this.btnBook3 = new lib.Symbol45();
	this.btnBook3.name = "btnBook3";
	this.btnBook3.parent = this;
	this.btnBook3.setTransform(518.5,369.5,0.996,0.996,0,0,0,25.6,25.6);
	new cjs.ButtonHelper(this.btnBook3, 0, 1, 1);

	this.btnBack3 = new lib.Symbol34();
	this.btnBack3.name = "btnBack3";
	this.btnBack3.parent = this;
	this.btnBack3.setTransform(464,369,1,1,0,0,0,51,51);
	new cjs.ButtonHelper(this.btnBack3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25}]},301).to({state:[{t:this.instance_26}]},17).to({state:[{t:this.btnBack3},{t:this.btnBook3},{t:this.instance_27}]},13).to({state:[]},1).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(301).to({_off:false},0).to({_off:true,y:111.1},17).wait(245));

	// back2
	this.instance_28 = new lib.Symbol47();
	this.instance_28.parent = this;
	this.instance_28.setTransform(519.5,368.5,1,1,0,0,0,25.5,25.5);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(287).to({_off:false},0).to({alpha:1},12).to({_off:true},1).wait(263));

	// butt2
	this.instance_29 = new lib.Symbol36();
	this.instance_29.parent = this;
	this.instance_29.setTransform(464,369,1,1,0,0,0,51,51);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(287).to({_off:false},0).to({alpha:1},12).to({_off:true},1).wait(263));

	// details_auto
	this.instance_30 = new lib.Symbol23();
	this.instance_30.parent = this;
	this.instance_30.setTransform(280.6,268.7,1,1,0,0,0,226.5,83.3);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(287).to({_off:false},0).to({alpha:1},13).to({_off:true},1).wait(262));

	// text_auto
	this.instance_31 = new lib.Tween5("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(202,136.1);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(270).to({_off:false},0).to({x:307,alpha:1},17).wait(13).to({startPosition:0},0).to({_off:true},1).wait(262));

	// logo_snow
	this.instance_32 = new lib.Tween3("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(395.1,112.9);
	this.instance_32._off = true;
	this.instance_32.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 127.5, 127.5, 0)];
	this.instance_32.cache(-77,-84,154,168);

	this.instance_33 = new lib.Symbol60();
	this.instance_33.parent = this;
	this.instance_33.setTransform(50,32);

	this.btnBook2 = new lib.Symbol43();
	this.btnBook2.name = "btnBook2";
	this.btnBook2.parent = this;
	this.btnBook2.setTransform(519.5,368.5,0.996,0.996,0,0,0,25.6,25.6);
	new cjs.ButtonHelper(this.btnBook2, 0, 1, 1);

	this.btnBack2 = new lib.Symbol33();
	this.btnBack2.name = "btnBack2";
	this.btnBack2.parent = this;
	this.btnBack2.setTransform(464,369,1,1,0,0,0,51,51);
	new cjs.ButtonHelper(this.btnBack2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_32}]},270).to({state:[{t:this.instance_32}]},17).to({state:[{t:this.btnBack2},{t:this.btnBook2},{t:this.instance_33}]},13).to({state:[]},1).wait(262));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(270).to({_off:false},0).to({x:125.1,y:113.9},17).to({_off:true},13).wait(263));

	// back1
	this.instance_34 = new lib.Symbol47();
	this.instance_34.parent = this;
	this.instance_34.setTransform(519.5,368.5,1,1,0,0,0,25.5,25.5);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(257).to({_off:false},0).to({alpha:1},11).to({_off:true},1).wait(294));

	// butt1
	this.instance_35 = new lib.Symbol36();
	this.instance_35.parent = this;
	this.instance_35.setTransform(464,369,1,1,0,0,0,51,51);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(257).to({_off:false},0).to({alpha:1},11).to({_off:true},1).wait(294));

	// details_auto
	this.instance_36 = new lib.Symbol22();
	this.instance_36.parent = this;
	this.instance_36.setTransform(264.1,282.3,1,1,0,0,0,224,88.8);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(257).to({_off:false},0).to({alpha:1},12).to({_off:true},1).wait(293));

	// text_auto
	this.instance_37 = new lib.Symbol21();
	this.instance_37.parent = this;
	this.instance_37.setTransform(385.1,130,1,1,0,0,0,146,21);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(240).to({_off:false},0).to({x:190.1,y:131,alpha:1},17).wait(12).to({_off:true},1).wait(293));

	// logo_auto
	this.instance_38 = new lib.Symbol15();
	this.instance_38.parent = this;
	this.instance_38.setTransform(133,122,1,1,0,0,0,115,115);
	this.instance_38._off = true;
	this.instance_38.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 127.5, 127.5, 0)];
	this.instance_38.cache(-2,-2,234,234);

	this.instance_39 = new lib.Symbol20();
	this.instance_39.parent = this;
	this.instance_39.setTransform(435,122,1,1,0,0,0,115,115);

	this.instance_40 = new lib.Symbol61();
	this.instance_40.parent = this;
	this.instance_40.setTransform(435,122,1,1,0,0,0,115,115);

	this.btnBook1 = new lib.Symbol44();
	this.btnBook1.name = "btnBook1";
	this.btnBook1.parent = this;
	this.btnBook1.setTransform(519.6,368.5,0.996,0.996,0,0,0,25.8,25.7);
	new cjs.ButtonHelper(this.btnBook1, 0, 1, 1);

	this.btnBack1 = new lib.Symbol32();
	this.btnBack1.name = "btnBack1";
	this.btnBack1.parent = this;
	this.btnBack1.setTransform(464,369,1,1,0,0,0,51,51);
	new cjs.ButtonHelper(this.btnBack1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_38}]},240).to({state:[{t:this.instance_39}]},17).to({state:[{t:this.btnBack1},{t:this.btnBook1},{t:this.instance_40}]},12).to({state:[]},1).wait(293));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(240).to({_off:false},0).to({_off:true,x:435},17).wait(306));

	// hydraulic
	this.instance_41 = new lib.Symbol19();
	this.instance_41.parent = this;
	this.instance_41.setTransform(394.6,353.8,1,1,0,0,0,64.7,13);
	this.instance_41.alpha = 0;
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(224).to({_off:false},0).to({alpha:1},14).wait(1).to({_off:true},1).wait(323));

	// wax
	this.instance_42 = new lib.Symbol18();
	this.instance_42.parent = this;
	this.instance_42.setTransform(138.1,348.7,1,1,0,0,0,18.4,13);
	this.instance_42.alpha = 0;
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(224).to({_off:false},0).to({alpha:1},14).wait(1).to({_off:true},1).wait(323));

	// snow wash
	this.instance_43 = new lib.Symbol17();
	this.instance_43.parent = this;
	this.instance_43.setTransform(395.7,197,1,1,0,0,0,68.5,13);
	this.instance_43.alpha = 0;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(224).to({_off:false},0).to({alpha:1},14).wait(1).to({_off:true},1).wait(323));

	// automaticwash
	this.instance_44 = new lib.Symbol16();
	this.instance_44.parent = this;
	this.instance_44.setTransform(133.2,197,1,1,0,0,0,65.9,13);
	this.instance_44.alpha = 0;
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(224).to({_off:false},0).to({alpha:1},14).wait(1).to({_off:true},1).wait(323));

	// Hydraulic
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],9), null, new cjs.Matrix2D(0.032,0,0,0.032,-8,-8)).s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_62.setTransform(287,218);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],9), null, new cjs.Matrix2D(0.057,0,0,0.057,-14.2,-14.2)).s().p("AiNCOIAAkbIEbAAIAAEbg");
	this.shape_63.setTransform(286.7,217.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],9), null, new cjs.Matrix2D(0.082,0,0,0.082,-20.4,-20.4)).s().p("AjMDNIAAmZIGYAAIAAGZg");
	this.shape_64.setTransform(286.4,217.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],9), null, new cjs.Matrix2D(0.107,0,0,0.107,-26.6,-26.6)).s().p("AkJEKIAAoTIITAAIAAITg");
	this.shape_65.setTransform(286.1,217.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],9), null, new cjs.Matrix2D(0.131,0,0,0.131,-32.9,-32.9)).s().p("AlHFIIAAqQIKQAAIAAKQg");
	this.shape_66.setTransform(285.8,217.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],9), null, new cjs.Matrix2D(0.156,0,0,0.156,-39.1,-39.1)).s().p("AmGGHIAAsNIMNAAIAAMNg");
	this.shape_67.setTransform(285.5,217.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],9), null, new cjs.Matrix2D(0.181,0,0,0.181,-45.3,-45.3)).s().p("AnEHFIAAuJIOJAAIAAOJg");
	this.shape_68.setTransform(285.2,217);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],9), null, new cjs.Matrix2D(0.206,0,0,0.206,-51.5,-51.5)).s().p("AoCIDIAAwFIQFAAIAAQFg");
	this.shape_69.setTransform(284.9,216.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],9), null, new cjs.Matrix2D(0.231,0,0,0.231,-57.7,-57.7)).s().p("ApAJBIAAyBISBAAIAASBg");
	this.shape_70.setTransform(284.6,216.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],9), null, new cjs.Matrix2D(0.256,0,0,0.256,-63.9,-63.9)).s().p("Ap/KAIAAz+IT+AAIAAT+g");
	this.shape_71.setTransform(284.3,216.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],9), null, new cjs.Matrix2D(0.281,0,0,0.281,-70.2,-70.2)).s().p("Aq9K9IAA16IV6AAIAAV6g");
	this.shape_72.setTransform(284,216.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],9), null, new cjs.Matrix2D(0.305,0,0,0.305,-76.4,-76.4)).s().p("Ar6L8IAA33IX2AAIAAX3g");
	this.shape_73.setTransform(283.7,216.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],9), null, new cjs.Matrix2D(0.33,0,0,0.33,-82.6,-82.6)).s().p("As5M6IAA5zIZzAAIAAZzg");
	this.shape_74.setTransform(283.4,215.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],9), null, new cjs.Matrix2D(0.355,0,0,0.355,-88.8,-88.8)).s().p("At3N4IAA7vIbvAAIAAbvg");
	this.shape_75.setTransform(283.1,215.7);

	this.instance_45 = new lib.Tween1("synched",0);
	this.instance_45.parent = this;
	this.instance_45.setTransform(283.1,215.7);
	this.instance_45._off = true;

	this.instance_46 = new lib.Tween2("synched",0);
	this.instance_46.parent = this;
	this.instance_46.setTransform(393.1,298.7);

	this.btnHydraulic = new lib.Symbol37();
	this.btnHydraulic.name = "btnHydraulic";
	this.btnHydraulic.parent = this;
	this.btnHydraulic.setTransform(393.1,298.7,1,1,0,0,0,88.8,88.8);
	new cjs.ButtonHelper(this.btnHydraulic, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_62}]},196).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},14).to({state:[{t:this.instance_46}]},14).to({state:[{t:this.btnHydraulic}]},1).to({state:[]},1).wait(323));
	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(210).to({_off:false},0).to({_off:true,x:393.1,y:298.7},14).wait(339));

	// Wax
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],15), null, new cjs.Matrix2D(0.077,0,0,0.077,-11.4,-9.6)).s().p("AhxBgIAAi/IDjAAIAAC/g");
	this.shape_76.setTransform(278.5,196.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],15), null, new cjs.Matrix2D(0.106,0,0,0.109,-15.8,-13.6)).s().p("AidCIIAAkPIE7AAIAAEPg");
	this.shape_77.setTransform(278.8,196.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],15), null, new cjs.Matrix2D(0.135,0,0,0.141,-20.2,-17.7)).s().p("AjJCxIAAlhIGTAAIAAFhg");
	this.shape_78.setTransform(279,196.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],15), null, new cjs.Matrix2D(0.164,0,0,0.173,-24.5,-21.7)).s().p("Aj0DZIAAmxIHpAAIAAGxg");
	this.shape_79.setTransform(279.3,196.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],15), null, new cjs.Matrix2D(0.193,0,0,0.205,-28.9,-25.7)).s().p("AkgECIAAoCIJBAAIAAICg");
	this.shape_80.setTransform(279.6,196.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],15), null, new cjs.Matrix2D(0.222,0,0,0.238,-33.2,-29.8)).s().p("AlLEqIAApTIKXAAIAAJTg");
	this.shape_81.setTransform(279.9,196.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],15), null, new cjs.Matrix2D(0.251,0,0,0.27,-37.6,-33.8)).s().p("Al3FSIAAqjILvAAIAAKjg");
	this.shape_82.setTransform(280.2,196.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],15), null, new cjs.Matrix2D(0.281,0,0,0.302,-41.9,-37.9)).s().p("AmiF6IAAr0INFAAIAAL0g");
	this.shape_83.setTransform(280.5,196.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],15), null, new cjs.Matrix2D(0.31,0,0,0.334,-46.3,-41.9)).s().p("AnOGjIAAtFIOdAAIAANFg");
	this.shape_84.setTransform(280.8,196.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],15), null, new cjs.Matrix2D(0.339,0,0,0.366,-50.7,-45.9)).s().p("An6HLIAAuVIP1AAIAAOVg");
	this.shape_85.setTransform(281,196.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],15), null, new cjs.Matrix2D(0.368,0,0,0.399,-55,-50)).s().p("AolHzIAAvmIRLAAIAAPmg");
	this.shape_86.setTransform(281.3,196.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],15), null, new cjs.Matrix2D(0.397,0,0,0.431,-59.4,-54)).s().p("ApRIcIAAw3ISjAAIAAQ3g");
	this.shape_87.setTransform(281.6,196.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],15), null, new cjs.Matrix2D(0.426,0,0,0.463,-63.7,-58.1)).s().p("Ap8JEIAAyHIT5AAIAASHg");
	this.shape_88.setTransform(281.9,196.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],15), null, new cjs.Matrix2D(0.455,0,0,0.495,-68.1,-62.1)).s().p("AqoJtIAAzZIVRAAIAATZg");
	this.shape_89.setTransform(282.2,196.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],15), null, new cjs.Matrix2D(0.485,0,0,0.527,-72.4,-66.1)).s().p("ArUKVIAA0pIWoAAIAAUpg");
	this.shape_90.setTransform(282.5,196.5);

	this.instance_47 = new lib.Symbol10();
	this.instance_47.parent = this;
	this.instance_47.setTransform(282.5,196.5,1,1,0,0,0,72.5,66.1);
	this.instance_47._off = true;

	this.btnWax = new lib.Symbol28();
	this.btnWax.name = "btnWax";
	this.btnWax.parent = this;
	this.btnWax.setTransform(131.5,295.5,1,1,0,0,0,72.5,66.1);
	new cjs.ButtonHelper(this.btnWax, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_76}]},165).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},15).to({state:[{t:this.instance_47}]},29).to({state:[{t:this.instance_47}]},14).to({state:[{t:this.btnWax}]},1).to({state:[]},1).wait(323));
	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(180).to({_off:false},0).to({x:131.5,y:295.5},15).wait(43).to({_off:true},1).wait(324));

	// SnowWash
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],13), null, new cjs.Matrix2D(0.087,0,0,0.087,-11,-11.9)).s().p("AhsB3IAAjtIDZAAIAADtg");
	this.shape_91.setTransform(278.8,217);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],13), null, new cjs.Matrix2D(0.124,0,0,0.124,-15.5,-16.9)).s().p("AiaCqIAAlTIE1AAIAAFTg");
	this.shape_92.setTransform(279.4,217);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],13), null, new cjs.Matrix2D(0.16,0,0,0.16,-20.1,-21.9)).s().p("AjHDbIAAm1IGPAAIAAG1g");
	this.shape_93.setTransform(280,217);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],13), null, new cjs.Matrix2D(0.197,0,0,0.197,-24.8,-26.9)).s().p("Aj1ENIAAoaIHrAAIAAIag");
	this.shape_94.setTransform(280.5,217);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],13), null, new cjs.Matrix2D(0.233,0,0,0.233,-29.4,-31.9)).s().p("AkjFAIAAp+IJHAAIAAJ+g");
	this.shape_95.setTransform(281.1,217);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],13), null, new cjs.Matrix2D(0.27,0,0,0.27,-33.9,-36.9)).s().p("AlRFxIAArhIKjAAIAALhg");
	this.shape_96.setTransform(281.7,217);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],13), null, new cjs.Matrix2D(0.306,0,0,0.306,-38.5,-41.9)).s().p("Al+GkIAAtHIL+AAIAANHg");
	this.shape_97.setTransform(282.3,217);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],13), null, new cjs.Matrix2D(0.343,0,0,0.343,-43.1,-46.9)).s().p("AmsHVIAAupINZAAIAAOpg");
	this.shape_98.setTransform(282.9,217);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],13), null, new cjs.Matrix2D(0.379,0,0,0.379,-47.7,-51.9)).s().p("AnaIIIAAwPIO1AAIAAQPg");
	this.shape_99.setTransform(283.5,217);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],13), null, new cjs.Matrix2D(0.416,0,0,0.416,-52.3,-56.9)).s().p("AoHI5IAAxxIQPAAIAARxg");
	this.shape_100.setTransform(284.1,217);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],13), null, new cjs.Matrix2D(0.452,0,0,0.452,-56.9,-61.9)).s().p("Ao1JsIAAzXIRrAAIAATXg");
	this.shape_101.setTransform(284.6,217);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],13), null, new cjs.Matrix2D(0.489,0,0,0.489,-61.5,-66.9)).s().p("ApjKdIAA05ITHAAIAAU5g");
	this.shape_102.setTransform(285.2,217);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],13), null, new cjs.Matrix2D(0.525,0,0,0.525,-66.1,-71.9)).s().p("AqRLPIAA2eIUjAAIAAWeg");
	this.shape_103.setTransform(285.8,217);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],13), null, new cjs.Matrix2D(0.562,0,0,0.562,-70.7,-76.9)).s().p("Aq+MCIAA4CIV+AAIAAYCg");
	this.shape_104.setTransform(286.4,217);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],13), null, new cjs.Matrix2D(0.598,0,0,0.598,-75.3,-81.9)).s().p("ArsMzIAA5lIXZAAIAAZlg");
	this.shape_105.setTransform(287,217);

	this.instance_48 = new lib.Symbol9();
	this.instance_48.parent = this;
	this.instance_48.setTransform(287,217,1,1,0,0,0,74.9,82);
	this.instance_48._off = true;

	this.btnSnow = new lib.Symbol26();
	this.btnSnow.name = "btnSnow";
	this.btnSnow.parent = this;
	this.btnSnow.setTransform(395.1,134,1,1,0,0,0,74.9,82);
	new cjs.ButtonHelper(this.btnSnow, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_91}]},135).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},14).to({state:[{t:this.instance_48}]},60).to({state:[{t:this.instance_48}]},14).to({state:[{t:this.btnSnow}]},1).to({state:[]},1).wait(323));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(150).to({_off:false},0).to({x:395.1,y:134},14).wait(74).to({_off:true},1).wait(324));

	// AutomaticWash
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],4), null, new cjs.Matrix2D(0.028,0,0,0.028,-6.9,-6.9)).s().p("AhFBFIAAiJICLAAIAACJg");
	this.shape_106.setTransform(290,202);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],4), null, new cjs.Matrix2D(0.061,0,0,0.061,-15.2,-15.2)).s().p("AiYCYIAAkwIExAAIAAEwg");
	this.shape_107.setTransform(289.9,201.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],4), null, new cjs.Matrix2D(0.094,0,0,0.094,-23.5,-23.5)).s().p("AjqDrIAAnVIHVAAIAAHVg");
	this.shape_108.setTransform(289.8,201.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],4), null, new cjs.Matrix2D(0.127,0,0,0.127,-31.8,-31.8)).s().p("Ak9E+IAAp7IJ7AAIAAJ7g");
	this.shape_109.setTransform(289.7,201.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],4), null, new cjs.Matrix2D(0.16,0,0,0.16,-40.1,-40.1)).s().p("AmQGRIAAshIMhAAIAAMhg");
	this.shape_110.setTransform(289.6,201.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],4), null, new cjs.Matrix2D(0.194,0,0,0.194,-48.4,-48.4)).s().p("AnjHkIAAvHIPHAAIAAPHg");
	this.shape_111.setTransform(289.5,201.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],4), null, new cjs.Matrix2D(0.227,0,0,0.227,-56.7,-56.7)).s().p("Ao2I3IAAxtIRtAAIAARtg");
	this.shape_112.setTransform(289.4,201.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],4), null, new cjs.Matrix2D(0.26,0,0,0.26,-65,-65)).s().p("AqJKKIAA0TIUTAAIAAUTg");
	this.shape_113.setTransform(289.3,201.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],4), null, new cjs.Matrix2D(0.293,0,0,0.293,-73.3,-73.3)).s().p("ArcLdIAA25IW5AAIAAW5g");
	this.shape_114.setTransform(289.2,201.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],4), null, new cjs.Matrix2D(0.326,0,0,0.326,-81.5,-81.5)).s().p("AsvMwIAA5fIZeAAIAAZfg");
	this.shape_115.setTransform(289.1,201.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],4), null, new cjs.Matrix2D(0.359,0,0,0.359,-89.8,-89.8)).s().p("AuBODIAA8EIcDAAIAAcEg");
	this.shape_116.setTransform(289,201);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],4), null, new cjs.Matrix2D(0.393,0,0,0.393,-98.1,-98.1)).s().p("AvVPWIAA+qIerAAIAAeqg");
	this.shape_117.setTransform(288.9,200.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],4), null, new cjs.Matrix2D(0.426,0,0,0.426,-106.4,-106.4)).s().p("AwnQoMAAAghPMAhPAAAMAAAAhPg");
	this.shape_118.setTransform(288.8,200.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],4), null, new cjs.Matrix2D(0.459,0,0,0.459,-114.7,-114.7)).s().p("Ax6R7MAAAgj1MAj1AAAMAAAAj1g");
	this.shape_119.setTransform(288.7,200.7);

	this.instance_49 = new lib.Symbol8();
	this.instance_49.parent = this;
	this.instance_49.setTransform(288.7,200.7,1,1,0,0,0,114.7,114.7);
	this.instance_49._off = true;

	this.instance_50 = new lib.Symbol64();
	this.instance_50.parent = this;
	this.instance_50.setTransform(97,16);

	this.btnAutomatic = new lib.Symbol24();
	this.btnAutomatic.name = "btnAutomatic";
	this.btnAutomatic.parent = this;
	this.btnAutomatic.setTransform(133.1,132,1,1,0,0,0,115,115);
	new cjs.ButtonHelper(this.btnAutomatic, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_106}]},106).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_49}]},14).to({state:[{t:this.instance_49}]},90).to({state:[{t:this.instance_49}]},14).to({state:[{t:this.btnAutomatic},{t:this.instance_50}]},1).to({state:[]},1).wait(323));
	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(120).to({_off:false},0).to({regY:114.8,scaleX:1,scaleY:1,x:133,y:132},14).wait(104).to({_off:true},1).wait(324));

	// Menu_3
	this.instance_51 = new lib.Symbol6();
	this.instance_51.parent = this;
	this.instance_51.setTransform(156.2,38.1,1,1,0,0,0,59.5,19.1);

	this.btnAbout = new lib.Symbol5();
	this.btnAbout.name = "btnAbout";
	this.btnAbout.parent = this;
	this.btnAbout.setTransform(425,221.3,1,1,0,0,0,66,71.3);
	new cjs.ButtonHelper(this.btnAbout, 0, 1, 2, false, new lib.Symbol5(), 3);

	this.btnBooking = new lib.Symbol4();
	this.btnBooking.name = "btnBooking";
	this.btnBooking.parent = this;
	this.btnBooking.setTransform(276,221,1,1,0,0,0,83,83);
	new cjs.ButtonHelper(this.btnBooking, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.btnServices = new lib.Symbol3();
	this.btnServices.name = "btnServices";
	this.btnServices.parent = this;
	this.btnServices.setTransform(112,225,1,1,0,0,0,149,152);
	new cjs.ButtonHelper(this.btnServices, 0, 1, 2, false, new lib.Symbol3(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnServices},{t:this.btnBooking},{t:this.btnAbout},{t:this.instance_51}]},105).to({state:[]},1).wait(457));

	// Menu
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.648,0,0,0.648,-162,-162)).s().p("A5TZUMAAAgynMAynAAAMAAAAyng");
	this.shape_120.setTransform(275,208);

	this.instance_52 = new lib.Tween20("synched",0);
	this.instance_52.parent = this;
	this.instance_52.setTransform(326,236);
	this.instance_52._off = true;

	this.btnFj = new lib.Symbol48();
	this.btnFj.name = "btnFj";
	this.btnFj.parent = this;
	this.btnFj.setTransform(52.7,37.2,1,1,0,0,0,59,59);
	new cjs.ButtonHelper(this.btnFj, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_120}]},52).to({state:[{t:this.shape_120}]},11).to({state:[{t:this.instance_52}]},11).to({state:[{t:this.instance_52}]},29).to({state:[{t:this.btnFj}]},1).wait(459));
	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(74).to({_off:false},0).to({scaleX:0.36,scaleY:0.36,x:52.7,y:37.2},29).to({_off:true},1).wait(459));

	// clickHeretoContinue
	this.btnContinue = new lib.Symbol2();
	this.btnContinue.name = "btnContinue";
	this.btnContinue.parent = this;
	this.btnContinue.setTransform(275.4,284.3,1,1,0,0,0,71.3,19.7);
	this.btnContinue._off = true;
	new cjs.ButtonHelper(this.btnContinue, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnContinue).wait(51).to({_off:false},0).to({_off:true},1).wait(511));

	// Intro1
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FF9933").ss(0.1,1,1).p("AM5AAQAAFWjxDxQjyDzlWAAQlVAAjyjzQjxjxAAlWQAAlVDxjyQDyjyFVAAQFWAADyDyQDxDyAAFVg");
	this.shape_121.setTransform(269.7,210.3,0.793,0.793);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FF9900").s().p("ApHJHQjxjxgBlWQABlVDxjyQDyjxFVAAQFWAADyDxQDyDyAAFVQAAFWjyDxQjyDylWAAQlVAAjyjyg");
	this.shape_122.setTransform(269.7,210.3,0.793,0.793);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("rgba(242,145,48,0.949)").ss(0.1,1,1).p("AInkiQAAAAABABQAHALAGAMQACADACADQAAABABABQAJAQAIASQAAABABABQACAEABAFIAKAsQAJAeAGAfIAKAsQABAKABALQACAYAAAYQAAAPgBAPQAAADAAADIgOBoQgBAGgBAFQAAABgBAAQAAAEgBADIgFATQgBADgBADQgLAmgRAkQgBABAAABQgCADgCADIgMAUQgDAFgDAFQgrBNhDBEQgDACgCADQgBAAAAABQgCACgBABQgBABAAAAQgBABAAAAQgKAKgLAJQAAAAAAAAQgCACgCACQgDACgDACQgCACgBABQgCABgBACQggAagjAVQgGAEgHADAIikrQACAEADAFQADAFADAGIAUApQABACAAACIAFAWIAFAZQATA6AHA+IAFAZQABABAAACQAAAEAAAFQAAAMAAAMQABAVgCAVQAAADAAADQAAAFgBAGQAAAGAAAFQgEAjgHAhQgBAGgCAFQgBAGgCAGQAAACgBACQAAAAAAABQAAAAAAABQgCAIgDAIQAAABAAAAIgBADQAAABAAABQgBADgBADQgCAGgCAFQgBAGgCAFQgIAVgJAUQgDAGgCAFQgEAHgDAIQgDAFgDAFQgDAGgDAFQAAABAAAAQAAAAgBABQAAAAAAAAQgHAMgJALQgBADgCACIgBADQgBACgCACQgBABgBACIghAtQgCAEgDADQgBABAAABQgBABAAAAQgDAEgDAEQgPARgQARQgBABgBABQgIAIgJAIIgJAJQgBABgBABQgBABgCACQgBABgCABQgBABgBABQgBABgCACQgBABgBAAQgTARgUAOQgCABgCACQAAAAAAAAQgBAAgBABQAAAAgBAAIAAAAQgGAEgHAEQgnAbgqAVQgCABgCABQgEACgDABQgBABAAAAQgBAAAAAAQgBAAAAAAQgNAFgOAEQgCAAgBABQgXAGgYAFQAAAAgBAAQg8ALhBAAQhVAAhNgTQgsgMgpgRQhqguhZhYQhlhlguh7QgehMgJhVQgEghAAgiQAAgCAAgCQAAgFAAgEQAAgJABgJQAAgDAAgDIAHgiQABgEAAgEIATheQABgBAAgBQACgHACgGIAKgvQABgDABgDQAAAAABgBQABgDABgCIAIgSQAEgIAEgJQAHgNAHgNQAJgQAKgPQACgCABgCQADgEADgDQAOgQAPgPQACgCADgDQAIgIAIgIQAOgPAQgNQAJgIAJgIQADgCADgDQADgDAEgDQAJgHAJgGIALgJQAFgEAGgEQAAgBABAAQAagRAbgOQABgBACAAIAcgMQAEgCAFgCQACgBACgBIAGgCQABgBABAAIAYgIQAEgCAEgBQAIgDAIgCQAAAAABAAQAIgCAIgCQABAAAAAAQABAAAAAAIABAAQA8gMA/ABQAqAAAoAGQACAAACABIA+AHQACAAACAAQABAAAAABQCcAoB7B5QAoAoAgAsQA1BQAbBWQACAGACAFIAPA3QACAJABAIQADALABALQADASACASQADAcABAdQAAAHAAAHQAAAggCAeQgKB6g1BpQgEAJgFAJQgFAIgEAJIgBAAQAAABgBABQgCADgDAEIgjArQgBACgCACQAAABgBABQgGAGgFAGQgCABgBACQgCABgBACQgCACgBABQgDADgDADQgBABgCACQgBABgBABQgBABgBABQgBABgBABQgBABgBABQgBABgBABQgCABgCACQgBACgCABQgBABgBABQgBABgBABQgZAXgaATQgSAOgUAMQgBABgCABQgFAEgGADQgQAJgQAJIgEACQgCABgCABQAAAAgBAAQAAAAAAAAQgIAEgHADIgcAMQgGACgGADIgCAAQgDABgDABQgTAHgVAFQgBABgCAAQgBAAgBABIAAAAQgBAAgBAAIgHACIgGABQgDABgDAAIgYAFQgDABgDABQgEAAgEABQAAAAgBAAQgBAAgCAAQgBAAgBABQgCAAgCAAQgCABgCAAQgCAAgCAAQgBABgCAAQgDAAgDABIgBAAQgCAAgCAAQgDABgDAAQgBAAgCAAIAAAAQgCAAgCAAQgBAAgBABQgCAAgCAAIgCAAQgCAAgCAAIgCAAQgJABgJAAQgCAAgCAAQgBAAgCAAQgBAAgBAAQgBAAgBAAQgDAAgBAAQgEAAgEAAQgBAAgBAAQgIAAgIAAIgCAAQgCAAgCAAQgCAAgBAAQgBAAgBAAIgBAAQgCAAgCAAIgvgFQgVgCgUgEIgUgEQgDgBgCAAIgUgFQgJgCgIgDQgDgBgCgBIgLgDQgOgFgOgFIgXgKQgEgCgEgCQgDgBgDgBIgRgJQg6geg0grQgBgBgBgBQgCgCgCgBIAAgBQgBAAgBgBIgRgQQgDgCgCgCIgOgNQgBgBgBgBQgBgBAAgBIgZgeQgDgDgCgCQgQgUgPgUIgbghQgCgDgCgEQgBgBgBgBIgZgsIgMgdIgPgiQgEgMgEgNQgEgKgEgKQAAgBgBgBQgShFgChLQgBgMAAgMIAAAAQAAgDAAgCQAAgUACgUQAAgEAAgEIADgOIAAgBIACgIIAGgYQABgGAAgGQAFgbAGgaIADgLIADgQQADgJADgIQALgdANgdQABgBABgBQAAgBAAgBQACgCABgDAIikrQADAFADAFQACAFADAFAIxkTIACAEQADAFADAGQAEAIADAIIACAHIAAADQABACABABQACAFACAFQAKAZAHAbAIxkTQAAABABABQACADABAEQAHAOAGAPQADAIADAIQAUA6AJA+QADASACASQAAAFABAGQAAAGABAGIAAABQAAABAAABQABAXAAAYQAABFgNBAQgEAVgGAUQgBADgBAEIgVA4QAAACgBACQAAABgBAAQgIAPgIAPQAAAAgBAAQgCAFgDAFIgnBCIg3BEQgEAFgFAFQAAAAAAAAQgDADgDADIgFAFQgSATgUARQAAABgBAAIgWAPQgFADgEADQgKAHgKAHQgMAKgOAIQgWAPgXAMQgIADgIADQgCABgDABIgHACQAAAAgBAAQgdANgeAJQgNAFgNAFQgBAAgBABQgCAAgCABIgFACAIykRIABACQADAGAEAHQADAHADAHAIgkxQAJAPAIAPAIgkxIASAgAHxm9QBmBqApCDQAAACABADQACAEABAFQACAIACAHQAAACABACQAAABAAACQACAIACAIQABACAAABQAEATACASQABACAAABQAGAuAAAxQAAB+gtBtQgMAagOAZQgCAEgDAEQAAAAgBABQgHANgIAMQgJANgKANQgcAmgjAkQgCABgBACQgKAJgKAJQgKAMgKAKQggAggjAaQgCACgDADQgCABgDACIgEADQgKAGgLAGQgEACgDADQgmAZgpASQgFACgFADQgCAAgBABQgBAAgBABQgBAAgBABQgCAAgCABQgBABgCAAQgPAHgQAFIgTAFQgPAFgQADIgDABQgDABgCABQgBAAgCAAQgCABgDAAIgGACIgCAAQgDABgEAAQgEABgEABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEABQgLACgLABQgCAAgBAAIgDABQgCAAgCAAQgJABgKABQgDAAgDABQgBAAAAAAQgBAAgCAAIAAAAQgDAAgDAAIgFABIgDAAQgEAAgEAAQgKABgJAAIgKAAQAAAAAAAAIgBAAQgCAAgCAAQgBAAgBAAQgBAAgCAAQgBAAgBAAQgBAAgBAAQgDAAgDAAIgIgBQgDAAgEAAAJFjvQADAIAEAJQAIASAHATQAAAAAAAAQAdBbAABlQAAAIAAAJQAAADAAACIgJBZQAAADgBADQgBAFgBAGIgSBDQgBAEgBAEQgFANgFANQAAABgBAAQAAABgBABQAAABAAAAIgJARQgCADgBADQgDAEgCAEAJFjvQADAHADAIQACAFACAGAIkirQACAEABADAIjivQABACAAACQAdBbgBBfQAAAMAAAMQAAACgBACQgLCghNB/QgDAEgCAEQgDAEgDAFQgGAJgGAIQgGAKgIAJQgZAiggAfQgmAmgqAeQgGAFgGAEQgBAAgBABQgCABgDACIggANIgKAEQhmAnh2ABQgCAAgCAAQgDAAgEAAQgCAAgCAAQgCAAgCAAQgDAAgEAAQgBAAgCAAIk+hnQgBgBgCgBIgJgHQgDgCgDgCIglgeQgPgNgOgOQhchZgwhsQgJgUgIgVQAAgBgBgBQgghdAChrQAAgBAAgCIAEhCQAAgCAAgCIABgCQAAgDAAgDAIgi3QACAEABAEAIgi3QACAGACAGAIJlMQAWAhASAjQAMAaAKAaQAeBQAGBaIABABIAFAZIACAHQAAADAAACQAAAEAAAFQAABkgcBZQgDAIgDAHQgJAUgKAUAIzkPIASAgAHxm9QApAvAeAzQBBBtAOCDQAEAhAAAjQAAABAAACQAAABAAACIgKBYQgCAZgDAZQAAABgBABQgSB4g9BlQgSAegWAdQgQASgRARQgBACgCABQgBABgBABQgCACgCACIhWBGQgFAEgFADQgCACgDABAG2moIANANQABABABABQAyA2AiA9QBABvALCFQAAAIAAAIQACAUAAATQAAAlgEAjQgCAQgCAQQgRBpgyBaIgJAPQgBADgCACQAAABgBAAQgFAIgGAIQAAAAgBABQgCADgDAEQgCABgBACQgDAEgDADQgBABAAABAJohsQAHApACArQAAAEAAAEQAAAIAAAHQAAADAAADQAABtggBfQgQAwgYAsQgMASgOASQgEAGgFAHQgMARgMAQQgaAhgdAeQgCABgBABQgHAJgIAIQgFAFgFAGAI5hcQAIAxAAAzQAAABAAABIgBAZQAAACAAACAJmhDQAEAkAAAkQAAAcgCAbQgEAxgLAuABFqAQDaAVCiCcQC7C1AHD/QgBANAAANQgEBBgQA8QAAAAAAABQgBAFgBAFAJbi5QAeBOAHBYQABAJABAJQAAAKABAMQgBARgBARAFxnhQAcAWAbAbQCGCGAkCuQANA/gBBEQAAB6gpBqQgIAVgKAUQgRAjgWAhQgLAQgMAQQgRATgTATQgBABgBABQgqAoguAgQAAAAgBAAQgJAIgJAIQgBAAgBABQgbAWgdATIAAAAQgUAIgUAGAGWnFQAMALALALQCUCUAcDGQAGAtAAAwQAAC3hcCQQgCADgCADAjAppQAfgNAggJQBQgYBZgCQDMgECfBvQASANARAOQAPAMAGAFQANAMANANQC7C2ADEGQABA/gLA8QgNBJgeBCQgmBbhEBPQgeAnglAjQhPBMhbAtQh/A9iYAAQgEAAgDAAQgCAAgBAAQgQAAgPgBQgGAAgGAAIgdgDQgFgBgGAAQgEgBgEgBIhygbQgLgEgKgEQh2gthhhfQi8i1gGkAQAAgBAAAAQAAgMABgLQAAAAAAAAQgBgLAAgKQAAgBAAgBIAAgBQAEigBKiDQAIgLAHgLQAFgFAEgGQAbgiAgghQA0g0A5glQABgBABAAQAJgGAKgGQADgDADgCIAigbQARgMASgLIAAAAQABAAAAgBQARgKARgJQAGgEAHgDQATgKATgIQAAAAABAAQAMgDAMgEQAGgCAGgBIAPgDQAdgGAegDIBggPQAHgBAHAAQEBgBC2C0QAPAOANAQQABAAABABAJlCcQgBAEgBAEAJTCxQAAACgBACQgBAEgBAEQgEANgEAOQgIAVgJAUIgIARQgBADgBADQgDAFgDAFAJuB9QgEAQgFAPAJnCRQgBAGgCAGQgGATgHASQgPAygZAvQgrBShHBHQgDADgEAEAJ3B8IgdBOIgMAiAJDEBQgCAEgCAEQguBhhSBSQgBABAAAAQgNAOgOAMQgKAIgKAJQgHAHgJAIQgHAGgHAFQg2Amg7AaQgPAHgPAFQgCABgBABIgLACIgFACIgrAMQgGABgGACQgCAAgBABAI/D1QgBADgBACQgTAtgbAqQgHAJgIAKIgRATQgDADgDADQAAABgBAAQgBACgBABIgFAGQgBAAAAAAQgBABAAAAIAAABQgDAEgDADIgPASQgCABgBACQgLAMgNAMQgEAFgFAEAIsEYQgGAKgGAJAIvESQgBADgCADAJvB2QAAAEgBADAJ7BrQgBAJgDAIAJ8BpQgCAKgDAJADEo3QBsAtBaBaQBmBnAtB9QAUA2AIA6AGOnLIAeAcQArArAhAvQAHALAHALQAyBPAXBaQATBMAABSQAAC/hlCWQgJAMgJAMQgCAEgDAEQgDAGgEAFQgEAFgEAEQgBAAAAABQgBAAAAABQgFAFgFAFQgDADgDADQgKAJgLAKQgtAmgxAdQgTALgUAKQgbATgdAPQAAAAgBAAIAAAAQgkAUgnAOAJMi7IAaB4AlGofQATgNATgMQABgBABAAQADgCAEgBQAAAAABAAQAAgBAAAAQAugSAxgKQABAAAAAAQBognB3gBQAOAAAOABQBOACBHAVQCUApB1B1QAGAGAGAHAkXo8IABAAAlioFQABAAAAgBQACgCADgCAlwn5IAFgEQABgBAAAAQABgBABgBQADgDAEgDQAHgEAHgEQALgGAMgGQAJgEAIgEQABgBABAAQAFgDAGgDQAMgFALgFQABgBAAAAIAOgFQAYgKAYgHIAPgFQAFgCAGgBQABAAAAAAQADgBACgBIACAAQBCgPA5gCQAKgBAKAAQAEAAAFAAQADAAACAAQABAAABAAQAEAAADAAQABAAACAAIAEAAQACAAADAAQABAAACAAQAIAAAJABQABAAACAAQALAAALABQAMABAMABQAOACANACIAMACQAFABAFABQADABADAAIASAEQClAlCAB/QADAEADADQAqArAgAvQABABAAAAQASAdAPAfAlooAQADgCADgDAlqn+QAJgHAJgGQADgBACgCQASgMALgGQAdgRAVgJQACgBACgBQADgCADgBQAIgDAJgEQAFgCAFgCQAJgDAKgDQAMgFAMgDQAGgCAFgBQADgBACgBQAGgBAGgCQAGgBAFgCQAXgEAXgEQAFgBAGAAQAJgBAIgBQAXgCARgBQAGAAAFAAQAHAAAHAAQAFAAAFAAQAsAAAoAFQAGABAGABQAIACAJABQAGABAFABQCtAjCECCQAJAJAIAJQACACACACQACACACACQARASAOATQABACABABQARAXAPAXAlqoDIAkgcQAGgDAGgDQAcgNAegKQAMgEANgEIAAAAQADgBACgCIAPgGQADgCAEgBQALgFAKgEAlZn8QAGgFAGgEQALgJAMgIQALgGALgGQAbgOAcgLQAFgCAFgCQADgBAEgBIAKgDQAFgBAGgCQABAAABAAIAAAAIABAAIAAAAQAAgBABAAQADgBADgBIBAgQQANgDANgCIATgCQADgBADAAIACAAQADgBAEAAQAFAAAGgBIAFAAIAFAAQADAAADAAIAFAAQAAAAABAAQAJgBAJAAQABAAABAAQABAAABAAIACAAQACAAACAAQACAAAEAAQABAAABAAIAGAAQABAAABAAQABAAAAAAIABAAQACAAACABQACAAACAAIASABQAFABAFAAQADAAACAAQAaADAZAFQAJACAJACQADAAADABIAMADQABAAABAAIAOAEQAHACAHACIAjANQAEABAFACQAEACAEABIADACQA6AZA1AmQAJAGAJAHQAFAEAEAEQAHAFAGAEQADACACACQAUARAUAUQC1C2AAEAQAADGhsCaIgBACQgBABgBABQgDAFgDAFQgOATgPASQgCABgBACQgPARgRAQQgjAkgmAcQgBABgBAAQgLAJgMAIIgIAFIgBABQgDACgDABAkSotQACgBACgBQADgCAEgCAkYorQAFgCAFgCQALgFALgFAkYopQADgCADgCQAFgCAFgCQAGgCAFgCQADgBADgBQACgBACgBQABAAACgBIAcgKQAIgDAGgCQAEgCAEgBIAIgCIABAAQACgBABAAQADgBADgBIAFgCQAHgBAHgCQABAAAAAAQABAAACAAQADgBADAAQAFgBAEgBQAFgBAFgBIAdgEQAFgBAGgBIAMgBQABAAABAAAkYorQADgBADgBAkfolQABgBAAAAQARgIAQgHQAZgLAZgIQADAAACgBQAbgJAcgFQAdgGAegEAklohQAAAAABgBQADgCADgCQADgCADgBQAIgEAIgEQAogSAqgLAklohQADgCADgCAk3oVQAAgBABAAQAJgGAJgGQAWgLAXgKQAMgEAMgEAk3oVQAJgGAJgGAkroiQAKgFAJgEAminHQAmgiAogaQAOgKAPgIAlOoEQALgJAMgIAmTnXQAIgHAIgGQAMgKANgJQAhgYAkgSAl4neQASgPASgNQATgMATgLIAlgUIBDgeQABAAAAAAQACgBACAAIACgBIAAA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gIAEgIApvhKQAFgqALgoQACgHACgIQACgHADgIQAAgCABgBApYi7QADgJADgJQALgcANgbApeigQAEgPAFgOApdBSQgEgfAAggIAAgOQAAhqAgheQAFgOAGgPQAJgXALgXAphBEQgDgeAAgfQAAgmAFgmQAIhLAZhEQAQgqAXgoAplA2IgEgPQgBgRAAgRQABhOARhHQAehrA5hWQAYgkAeghApVjAQAMglARgjApVjAQARgxAZguAoujZIAxhxApSjVQAlhiBIhTAoPk3QAVgiAaggAnrl0QABgCABgBQALgQAMgQAoolRIA4hOAinpwQAGgCAFgBAhSp/QAogFAqAAQAjAAAiAEAB8pZIAHABQAHABAGACIANADQACAAABAAIA/AUQABABABAAQAFACAEABQATAJATAJQBXArBLBJQARAQAKAMQABABABABQAJAKAJALQAGAHAHAIQAJANAJAMQAOASANATQAGAJAGAJABapfQACABABAAQACAAABAAIALACIAFABQA5ALA1AUIANAGQBiApBUBNQAIAHAHAIQABABABABQAQAQANAPQAUAUARAVQAGAHAGAHQAFAGAEAHIASAYIAHAJAAvpkQAGABAFAAQAUABATADQAGABAFAAABvpLQADAAACABQApAHAnAMABdpeQAQACAPADQAHABAHABIADABQACAAABABABrpcIARADABEphIANABIAJABAA9piIAHABQALABALABABHphIAKABIAaAEAA+phQAFAAAEAAABAphQAEAAADAAAA+phQABAAABAAQAkAEAiAIAAqpkIAMABQABAAABAAQAGABAGABAA0pjIAGAAQACAAABABQAQABAQADAAmpkQABAAAAAAIAAAAIABAAQAAAAABAAIAAAAIAAAAQABAAAAAAIAAAAIACAAQAAAAABAAQABAAABAAQADABACAAAAqpjQACAAACABQAEAAAEAAQAIABAGABIAqAGAAnpkQABAAABAAAAppkQAAAAABAAAAjplQAIAAAIAAQB4AGBmAwQAPAHAOAIQBQArBEBFQABABABABQAWAWATAXAAtpkQAEABADAAAAspjQAIABAHAAQACAAABABAAupiQALAAALACAAYpkIACAAQADAAACAAQAEAAADAAAAZplIAHABQADAAADAAAAcpkIADAAQAQABAPACAAZplQABAAACABAAWpkQABAAABAAAALpkQAEAAADAAQABAAAAAAQAHABAGAAQAFAAAFAAAALpkQALAAAKABQBLAFBFAUAASplQADAAADABAATplQADAAADAAAATplQAFAAAEABAAQplQADABADAAAAAplQABAAABAAIAAAAIAEAAQAGAAAFAAAAAplQABAAABAAAAAplQACAAABAAQABAAACAAQABAAABABQACAAABAAAAAplQAEAAAEABQARAAARABAgCplQABgBABAAAgCplQACgBADAAQAIABAIAAAgLplQABAAAAAAIACAAQACAAABAAQADAAACAAAgOplQACAAABAAQADAAADAAQADAAACAAAgJpmQACAAACABIADAAAgSpmIAGAAQACAAABAAAgnpiIAZgCQAEgBAEAAAgOpmQAJAAAJAAQAOAAAOABAgFplQAFAAADAAQAFAAAGAAAgEplQAHAAAIABAgnpiQAYgCAWAAQAGAAAFAAAAHpmQAIABAIAAQAMAAAMABAAGplIANAAAgoplIAIAAQAHAAAHgBAggplQAFAAAEgBQADAAACAAAhCpiQADgBADAAIAEAAQADAAADgBAhCpiQABgBABAAIADAAQAKgBALgBQANAAANAAAg4pjQAGgBAFAAAikpdQA5gKA+AAQAPAAAQABAgcpkQAHgBAHAAAgipkQAKgBAKAAAhXpeIAQgBQAQgCAQgBAhLpiQACgBABAAQAQgBAQgBAhmpcQACAAABAAQAGgBAGgBAhspbQADgBADAAQASgDASgCIAlgDAhipcQADAAADgBQALgBAKgBAhtpaQAGgBAFgBAhtpaQAFgBAFgBQABAAAAAAQAGgBAFgBAhspbQAVgEAVgCAhipfQAMgCALgBAhipfQAPgCAPgBQABAAABAAAiVpWIAJgCQACgBACAAIAmgGAiFpZQAFgBAEgBAiFpZQAGAAAGgBQAHgBAGAAAiGpZQABAAAAAAAijpUQABAAABAAQAEgBAEgBAihpOIACgBQADgBADAAQABgBACAAIAGgCQACAAACgBIAfgGAifpPQAEgBADgBAinpNQADgBADAAAiipOQAEgBAFgBAiRpWQAFgCAGgBAiRpWQAGgBAGgCAihpUQAqgKAsgEAiMpUQATgFATgDAiupSQADgBADgBAi5pPQAGgCAGgBQAGgBAEgBAjMpDQAGgCAFgCQABAAABgBQAFgBAGgBAjMpDQAFgCAGgCQAAAAABAAAjUpEQAFgCAEgCQAHgCAGgCAjApHQAEgCADgBAi/pFQAEgCAEgBAjvpAQAEgCAEgCQAcgJAdgFAjvpAQAEgCAEgCQACgBADgCAj5oxQAGgDAHgDAkGo0IAXgMAjko6IAYgJAiypPQAMgEANgDAizpKQAkgLAjgGAi2pZQAJgCAJgCAispLQAFgCAEgBAjOpEIA9gSAjIpKQATgGASgEAhEpiQACgBACAAAhMphQAFgBAFAAAGJnPQADACACACAGKnOQACABACACAGKnOQABABACABQAFADAEAEQANALANAMQADADADADAGJnPQABAAAAABAF9nZQACABABACQACABABABQADADADACAF9nZIAHAGQADACACACAFWn2IAKAGQAPALAOAMAE+oRQAbARAaATQAFAEAFAEQAgAYAeAeQABABABABQADADACADQACABABABQABABABABQABABABABQABABABACIAWAdIATAaIAVAbAGymtQACADACACAGwmuQABAAABABIAAAAQAHAHAIAHQAHAHAHAIQAHAHAGAHQAdAiAXAkQAmA9AWBEAGvmvQABAAAAABAGvmvQABABACABADro2QACABADABQAOAGAOAHQAdAOAbASQAHAEAHAFQAwAhAsAsIABACAGEnTQADACADADADOpFIA4AWIA4AeQBEAnA8A8QA7A7AnBCADCo4QAFACAFABADTo9QAKADAKAFIBvA/ACNpWQAJACAKACACipOQAiAKAgANACapVQAbAHAZAJACdpSQAZAFAYAIACSpSQCQAjB0BqAATpkQBdAJBSAjAiypsQAGgCAFgCACDpYQAEAAADABAISE/QgCADgCADQgBACgBACAHzFpQgBABgBABQAAAAAAAAQgCAEgDADABhJNQgYACgZAAQjOADighxACAJnQAAAAgBAAQgFABgFABQgCAAgCABIgaADQgBAAgBAAIgFABQgBAAgBAAQgDAAgEABQgDAAgDAAIgCABQgMABgMABACCJmQgBABgBAAQgDAAgEABQgCAAgCABQgMACgOACIgJACQgLABgKABACDJmQgBAAAAAAQgFABgEABQgEABgEABABoJkIgJACQgHACgIABQggAEgiABQgGAAgFAAQgDA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hUJuQhEgJg+gWQhSgehIg4QgFgDgFgEQgKgJgLgJIgYgWQgHgGgGgGQgHgHgHgHQgBgCgBgBIgKgOIg1hIAhZJuQhIgJhCgZQhZgjhNg/QgZgVgXgXQgQgQgPgQACHJnIgFABACFJnQgFABgGABAgmJzQglgCgigFAHlGAQgCADgCAEQgCABgBACQgDADgCADAHmF9QgDAEgDAEQgFAGgFAHQgEAEgEAEQgEADgEAEQgJAJgKAIQgtAogyAeQgTALgUAKQgEACgDACAHpF9QgBACgCACAJMDwQglBdhHBPQgFAGgFAFQgMAMgMAKQgGAFgGAFQgIAIgIAIQgHAGgGAFQgBABgBABQgCACgCACQgZAVgaARQhAAshIAYQgnAOgrAIAHoF+QgHAKgJAKQgLAQgNAQQgCADgEADAHJGoQgEAFgFAFQgGAHgGAHQgOAOgPAOQgBAAAAABQgDACgEACAHvF3QgDAEgEADAGwG2QgEAEgEAEQgUAUgVASQgDACgDADQgBABgBABQgCABgCACQAAABgBAAQgQANgPALIgyAYQgDABgEACQgTAHgUAHQgEABgEABIhKAPQgfAHghAFAGzGyQgBACgCACAG1HEQgCACgCACQgDADgEACIgFAEQgHAFgHAGQgrAmguAcQgBABgCABQAAAAgBABQgDABgDABQgBABAAAAQgFACgFADIgRAHQgCABgCABQgzAag3AQQgTAGgUAEAGbHcQgDADgDADQgfAbghAWQgHADgGADQgmAYgoARQgBAAgBABIgDABQgBABgCAAIgHADIgJAEQgGACgHACIgEACIgGACQgDABgDABIgCAAQgDACgEABIgJACIgFACQgEAAgDABIgHACIgUAFIgFACAGwHJQgDACgDACAI/ArQgJDxiuCsQgQARgRAPAF4HxQgEACgEADQgBAAAAABQgDABgCACQgCABgBAAIgLAIQgGAEgFAEQgEACgEADAF6H8QAAAAAAAAQgvArg0AfAGEH1QgFADgFAEAFiH+QAAABgBAAAFjH+QgBAAAAAAAFwH2QgDACgDACAHVGTQgTAWgVAVQgkAjgmAdQgJAGgJAHQgCABgDACIgCACQgEACgFADAHlF4QgXAegbAcAGdHPQgWAVgXASACSJkQgBAAgCABIgDAAIgEABQgFABgFABACaJiQgBABgBAAACdJhQgHACgHACACgJdQgMADgMADIgoAIACZJfQgFACgGABQgGABgGABADRJSQgDABgEABIgXAHQgZAHgaAFADGJSIgCAAAC9JSQAAAAgBAAQgDABgDABIhOAQADKJQQgCABgCABADLJUQgEABgEABADYJLQgDABgDABQgGADgGACADYJPQgBABgCAAADeJNIgGACQgHADgHACADZJGQgOAGgOAGQgDABgEABADiJMQgLAEgMAEADrJIQgHADgGACAFmHoQgSANgUALQgCACgDABQgBABgBAAQgZAOgaAMAE0IjQgGADgFADAEzIeIgHAEAE6IhQgEABgDACQgSALgSAJQgIAEgIADQgBABgCABQgCAAgCABQgBABgCABQgBAAgBABQgKAEgLAEAFKIQQgLAHgMAHAFAIWQgGAEgHAEAECI3QgHADgGADAD+I5QgDACgDABQgpATgtANAEDI4QgCABgCABAEPIxQgGADgHADAEPIxQgIAEgJAEAE6IhQgQAJgRAJIgfAPAEMI0QgEACgEACAEhIfQgEABgDACQggAUghAQAE3IbIgoAWAD0I9QgbAMgcAJADyIwQgEABgDABAD8IiQgsATgvAMAGOHiQgrAlgvAcAFcIDQgIAGgIAFAHyFpQgGAIgHAHAICFWQgNATgPAUACVJgQgYAGgZAFACVJgQgJADgJADACmJSQgeALggAHACIJmQgJACgIABACgJgQgQAEgRADACkJgQgOAEgPADApwhHQABgCAAgBAp0AUIgBgPQAAgGAAgGQAAgCAAgCQABgXACgWQAAgCAAgCQAAgBAAgBAowCjIgZijQAAgDgBgDQAAgFAAgGIAAgBQACj0CkixAp0ARIAAgKQAAgOAAgQQABgYADgYApyg/IADgLIAGghAp0AZIAAgFQAAgCAAgBAp0AZQAAgEAAgEApzA1QAAgCAAgCIgBgEIAAgCIAAgSApzA1QAAgFgBgFAp0AtQAAgNAAgMApvA7QAAgCAAgDQgBgTgBgVApdC1IgUhnIgCgZAokDHIgEgMQgCgHgDgHQgBgFgCgFAooC7QgCgGgCgGQgCgGgCgGApiCtQgEgMgDgMQgQhFAAhLQABh1AmhlApGDuQgKgUgIgUQAAAAgBgBQAAgBAAgBQgCgHgCgHApRDcQgEgLgDgLApGDuQgDgIgDgHQgFgPgFgQQgKgggGggQgEgVgCgVApSDmQgTgvgKg0QgRg/gEhEApLDxQgNghgJghApZDFQgCgIgCgIAo5EMQgBgCgBgCQgGgNgFgNAo3ELQgBgDgCgDAo2EMQAAgBgBAAQgIgPgHgOAotEfIgFgKQgCgEgCgFAoiEwIgLgRIgMgTIgJgOIgJgNAoyEVQgCgFgDgFAobE3QgCgCgBgDQgGgIgGgJQhCiAAAicQABjWCAijAoXFQQgDgFgDgEAoVFAQgEgHgFgGQgBgCgBgCAoqEMIgzi6Ak7HjQgJgHgJgGAl4GzIgbgYQgCgCgCgDQhfhdguhyAmnHKQgIgHgIgIQgDgDgDgCQgBgCgBgBQgBgBgCgBQgCgDgDgCQgCgDgCgCQgCgDgCgCQgCgBgBgCAh5JqQi7gfiNiOQgDgDgCgCQgBgBgCgBQgBgCgCgCIgRgZIgRgbQgDgDgDgEQgggqgZguAlyG4QgDgCgDgDAmYHhQgLgKgLgKAkZIvQgDgCgEgCAlHHaQgZgSgYgVAlIITQglgWgigdAnZGXQgDgDgCgDAngGPQgIgKgIgKAjmJFQhsgthahbQgjgjgdgmQgkgygag2An8FxQgkgwgZg1AkDJAQgHgDgHgDAqEAAQAFhdAehSApGhmIAYhzAHvl+QBKBaAiBrAIfEtQgXAqgfAmAIQlPIAQAe");
	this.shape_123.setTransform(269.9,210.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF9904").s().p("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");
	this.shape_124.setTransform(269.9,210.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF9900").s().p("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yAZguIAXgiIgXAiQAQgdATgbIATgaIAfglIAUgUIgQAUIAQgUIADgEQAWgVAVgTIgOAQIABgBIgXAZIAXgZQAlgiAogaIAdgSIgXARQg2AjgxAxIgDACIADgCQAxgxA2gjIgLAIIALgIIABgBIgBABIAXgRIgdASQgoAaglAiIAOgQIgOAQIgBABIAOgQIADgDIgCACIgBABIABgBIACgCIABAAIAEgFQA0gqA5gdIABgBIgBABQg5Adg0AqIAIgIQAzgoA5gbIgGADIgGAFIgBAAIAGgEIgGAEIABAAIgSALIASgLQAWgMAXgKIAEgBIADgCIAdgKIgdAKIgDACIgEABIgFACQAYgKAagIIgJADIAOgFQAagIAcgGIAJgBIAKgCIAdgFIALgBQgeADgdAGIgGABIAJgCIAEgBIAmgGIgmAGIgEABIgJACIgDAAIgBABIgIABQAqgKAtgEIgYADIAegDIgCAAIgCAAIgMACIAMgCIACAAIgGABIgTADIgZAEIAZgEIATgDIALgBIAFgBIAEAAIALgBIgLABIAGAAIAFgBIgFABIgLAAIAVgBIggACIgCAAIACAAIAggCIgVABIgHABIABAAIACAAIgLABIAGgBIACAAIgeADIAYgDQgtAEgqAKIgBAAIglAKIAOgFIANgDIAKgCIgKACIAEgBIgGABQgdAGgcAIQAcgIAdgGIgLADIgOAFIAlgKIABAAIAIgBIgOADIgFABIgGACIAZgGIABgBIADAAIAGgBQgcAGgaAIIAIgDIgIADIgFACIANgFIAHgCIABAAIADgBIgDABIgBAAQgqAMgoARIgKAEIAEgCIAHgEIABgBIAXgMIAIgEIAFgCIAPgHIAHgDIAYgIIALgDIAFgBIAMgDIALgDIAugIIALgCIARgCIAogCIALAAIANgBIALAAQAsABAoAFIAMACIARACIALACQCtAjCECCIARASIAEAEIAFAFQAQASAOATQgOgTgQgSIgFgFIgEgEIgRgSQiEiCitgjIgLgCIgRgCIgMgCQgogFgsgBIgLAAIgNABIgLAAIgoACIgRACIgLACIguAIIgLADIgMADIgSADQBognB3AAIAdAAQDZAVCiCdQC7C1AHD/IgBAZIgCgSQgHhXgdhOQAcBaAABmIAAAQIAAAGIgJBZIAJhZIAAgGIAAgQQAAhmgchaQ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CgBIACgBIADgBIAKgFQApgSAmgZIgNAHIANgHQgmAZgpASIgKAFIgDABIgCABIgCABIgDABIgDACIggALIgTAFIAIgCIgIACIgIACIAWgHIgWAHIgGACIgHACIgHABIghAHIgIADIAIgDIAhgHIgUAGIgEABIAEgBIADgBIADgBIgFACIgFABIAEgBIgEABIgDAAIADAAIgFABIgIACIAKgDIgHACIAKgCIgRADIARgDIgKACIAHgCIgKADIgIABIABAAIABgBIAFgBIAEAAIgEAAIgEABIgBAAIgBABIgEAAIgWADIAWgDIAEAAIgBAAIgEAAIgEABIgJABIAJgBIAEgBIAEAAIAIgBIAIgCIgNADIgPADIAMgDIgMADIAAAAgABpJtIASgDIAJgBIAAAAIAAAAIAIgBIgIABIABAAIgKABIgSADIAbgFIAJgCIgJACIgbAFIAAAAgABlJsIgBAAIABAAIAEgBIABAAIADAAIABgBIAEAAIgIABIAIgBIgEAAIAKgBIgGABQAZgEAZgGIgTAFIAngJQA3gRAzgaIgQAGIAFgCIADgCIgIAEIgFACIgHACIAHgCIAEgCIAAABIgPAHIgbALIAbgLIAPgHIAAgBIABAAIAQgGQgzAag3ARIgnAJIATgFIABgBIABAAIgBAAIgBABIgIABIALgDIgBABIAFgCIgEABIgLADIgGABIAYgGIgDABIADgBIADgBIgDABIgYAGIAGgBIAIgBQgZAGgZAEIAGgBIAZgFIgZAFIgKABIAogIIgFACIALgDIgLADIAFgCIgoAIIgBABIgEAAIgCABIgCAAIACAAIACgBgABlJsIAagDgAB/JpIAFgBIADgBIAHgBIgBAAIABAAQAagFAagHQgaAHgaAFIACAAIgJABIgIACIAAAAgABtJmIgPADIAPgDIAJgCgACRJnQAqgIAngNQgnANgqAIgACWJmIAcgHIgcAHgACQJmIABgBIgBABgACgJjIADAAIgDAAgACjJjIADgBIgDABgADSJRQgTAHgUAFQAUgFATgHIACAAIgCAAIAGgCIACAAIANgFIgNAFIgCAAIgGACgAigJdIgSgFIAGACIAMADIAAAAgAj1I/IAYAKIAbAKIALAEIAFABIgFgBIgLgEIgbgKIgYgKIgOgGIAGADIAIADIAAAAgADSJWIACgBIAFgCIAYgIIgOAFIAOgFIgYAIIgFACIgCABIAHgDIgHADgADZJTIAGgCIgHACIAOgFIgDACIADgCIAGgCIgGACIgOAFIAHgCgADfJRIAEgBgADUJRIAMgEIAHgDIgHADIgMAEIAEgCIgEACgADsJMIANgEIgIADIAIgDIAIgDIACgCIADgBIACgBQAogRAmgXQAjgWAggaIADgCIADgDIAGgFIAEgEIAAAAIAAAAIgEAEIgGAFIgDADIgDACQggAagjAWIgMAGIACgBQAugdArgmIgBABIgHAFIAHgFIABgBQgrAmguAdIgCABIgCABIACgBIAMgGQgmAXgoARIAfgPIAhgSIgGADIAGgDIgHADIAHgDIghASIgfAPIgCABIgDABIgCACIgIADIgNAEIAVgIIACgBIAEgCIADgBIADgCIAQgHIAkgUIgkAUIgQAHIgDACIgDABIgEACIgCABIgVAIIAAAAgAmIHiIABAAIADADIACACQA0AsA6AeIARAIIgRgIQg6geg0gsIgCgCIgDgDIgBAAIgCgCIACACgAEMI5IASgJIgOAGIAOgGIgSAJgAEaIzIAhgSIAGgEIgGAEIAKgGIgnAVIAngVIgKAGIghASgAFpIFIgaASQgWAOgXAMIAEgCIARgHIAKgFIABAAQAvgcArgmIABAAIgBAAIgWAPIgIAFQAXgSAXgVQgXAVgXASIgGAEIgDACQAUgPATgQIACgCIADgDIADgCIACgCIADgDIADgCIgDACIgDADIgCACIgDACIgDADIgCACQgTAQgUAPIgEACQAmgdAkgjQAVgVATgWIgKAKIAKgKQgTAWgVAVQgkAjgmAdIAAAAIAAAAIgSANIASgNIAEgCIgLAIIALgIIADgCIAFgDIgUAPgAFBIdIAXgOIgXAOIANgIIgNAIIAAAAgAFIIZIgDACIADgCIAGgEIACgBIAIgFIgIAFIAHgFIAIgFIgEADIgDACIADgCIAEgDIALgHIgLAHIgIAFIAXgQIgXAQIgHAFIgCABIgGAEQAUgNASgNQgSANgUANIAAAAgAmjG+IACABIAYAWIABACQAXAUAYASIAfAWIgfgWQgYgSgXgUIgBgCIgYgWIgCgBIgdggIAKAOIADADIANAOIANAMIgQgPIgFgFIgDgDIgCgCIgFgFIgFgFIgEgEIgDgEIgEgEIgCgDIgBgBI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");
	this.shape_125.setTransform(268.5,210.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("rgba(228,137,46,0.894)").ss(0.1,1,1).p("AIejtQABAAAAAAQAFAIAEAIQAAAAAAAAQALASAIASQABAAAAAAQAHAQAHARQAXBPAABZQAAAHAAAIQgBAlgFAkQgFAPgGAPQgFAagHAZQgIAYgJAXQgBABAAABIgIAMQgEAFgEAGQgDAFgEAFQAAAAAAABQgMAQgNAQQgLATgNATQgMARgMAPQgYAfgcAcQgBABgCABQgCACgCADQgFADgEADQgLAGgLAHIgFACQgDACgDABQgBABgCABIAAAAIgBAAQgBABgCABIgDABQgCABgCACQgCABgDABQgeAZghAVQgBABgCABQgKAGgLAGIAAAAQgBABgBAAIgEABQAAAAgBAAQgCABgDABQgXAGgYAFQgXAOgYALQgDABgEABIhiAQQgTACgVABQgCgBgCABQgCAAgCAAQgFAAgGAAQgbAAgagDQgDAAgDAAQgYgDgXgEQgagFgagHQgCgBgDgBQgUgGgVgHQAAAAgBgBQgCgBgDgBQAAAAgBAAQgVgKgUgLQgEgCgDgCQgYgOgYgQQgpgdglglQgBgBgCgBQgBgBgBgCQgHgHgHgHIhBhTQgCgDgCgDQgBgDgCgCIgPgiQgTglgNgmQgEgNgEgNQgDgJgCgKQgBgEgCgFQgCgIgBgJQgBgCAAgCQgLg1gBg4IAAgNQABhkAfhZQAFgOAFgNQAOgiASggQABgEABgDQACgEABgDQAAgBABgBQABgCAAgCQADgIAEgHQAEgKAFgKIAGgLQABgCABgCIAAAAQABgDACgCIACgEQACgDABgDQAGgGAGgFQAEgEADgDQABAAAAAAQAHgHAHgGIADgFQACgCABgCQAHgKAHgKQABAAAAgBQAKgNAKgMQAagVAbgRQAYgQAYgMQABgBAAAAIAAAAQAWgMAXgJQABAAAAAAQABgBABAAQAMgDANgDIAAAAQABAAABAAQAOgDAOgCIAAAAQABAAABAAIAAAAQACAAABAAIABAAQAEgCADgBAIpjQQABADABAEIAZBsQACAMABANQAAACAAACQACALAAALIADA1QAAACAAADQgBBCgNA8QgEATgFATQgGAVgIAVQgJAOgJAOQgEAJgEAJIgcAyQAAABAAAAQgJAKgKALQgBAAgBABQgIAIgIAIQgEAEgFAEIAAABQgEAFgEAFIgHAJQgDACgCADIAAABQgDAFgEAGQgBAAAA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BAEAAIAwAJQADAAAEABIADABQAdAIAbAKQAFACAGADQASAHASAJQBSApBHBFQAPAQAKALQACABACACQAOAQAMAQIANAQQABABAAABQABACABABIAuA8QACAFADAFQAAAAAAAAQAFAHAEAHAGGmUIAFAFQCMCMAaC7QAGArAAAtQAACihNCCQgFAIgGAJQgNAUgPAUAigpoQAmgTApgMQBMgZBVgDQDBgICaBmQASAMARAOQANALAGAFQAOALAMAMQC3CuAFD7QABA+gJA6QgNBNgiBFQgJATgKASQgaAtgiApQgRAfgVAfQgKALgLALQg4A4hAAmIgeAWQgDACgCABQgCACgDACIhJAqQgIADgIAEQgOAGgPAGQhFAahOAHQhSAZheAAQgJgBgJAAQjqgGipinQgrgrghguIhTi5IgDgIQgCgLgBgKQAAgCAAgBQgBgKgBgJIgBg8QAAgCAAgCQAAgVACgVQAAgBAAAAQAAgEAAgEIgBAAQAAhJAQhCQAMgtAUgpQAshdBPhOQAKgKAKgJQAZgeAegbQAIgJAJgHQBFgvBOgYQAIgDAHgCQAogLAqgFQADgBACgBQACAAACgBQADgBAEAAQAIgDAIgBQAFgCAFgBQAWgFAVgDQAGgBAFgBQAIgBAIgBQAWgCAQgBQAGAAAFAAQAHAAAGAAQAFgBAFAAQApAAAnAFQAFABAGABQAIABAIABQAFABAGABQCjAfB9B6QAJAIAIAIQACACACACQABAAAAABQAVAXASAZQABAAAAABQAOATALATQABAAAAABIAAAAIAYAqQAEAHADAHQAAABABAAQAAABABABQABADACADIASAmAIxCpQgBAFgBAEAI1CcQgCAGgBAGAIiEBQAAAAAAABQgDAFgEAFQgbA4goAzIgcAhQgCABgBABQgDADgDAEQgOAKgOAJQgIAIgJAIAIqD2QgEAGgEAGQgdA9gtA4AJDCnQgMAugVAsAIojdQAvBrAAB9QAABSgUBKAH3nIQCxCtgBD2QAABxgnBjQgnBkhOBVQgmA1gzAwIiuB1QgGADgHADQgJAEgKAEAJKiYQAeBGAKBQAlAn4QABgBAAAAQAMgLALgKQARgOARgOQAmgcAogVQAAgBABAAQADgCADgBQAIgFAJgEQAGgCAHgBQBFgPBMAAQAwAAAvAHQBSABBLAUQCNAoBwBuAkmn9QAKgEAKgEQAAAAABAAQADgBADgBQAAAAABAAQAEgCAEgBQACgCACgBQABgBAAAAQACgBABAAQABgBAAAAQAFgDAEgDQADgCADgCQAUgHAVgGAkcoAQAFgDAFgCQAMgGAMgFQABAAAAAAQAJgEAKgDIAfgLQAKgDAJgCAkcoAQAGgDAFgCQALgFALgFQAAAAABgBQAEgDAFgCQAAgBABAAQAcgLAdgIQAIgBAIgBQAOgDAPgDQACgBABAAIAkgGQADgBACAAQADAAACAAQACgBACAAQADAAADgBQAAAAABAAQAPgBAQAAQAEgBAEAAAk8oGQATgRAUgOQAtggAwgWAmHm7IAEgFQACgCACgCQAEgFAEgEAmKm4QACgCABgBAmJm4QABgCABgBAmKm4QABAAAAAAQAUgRAVgPQAAAAAAAAIABAAQACgDACgCIACgCQADgDADgDQABgCABAAQADgEADgCQAJgFAIgDQAKgEAKgEQAagOAbgKQADgDAEgCIAAAAQAHgEAGgEQAXgOAXgLQAogFAqABQAaAAAYACAnLl+IAfghQACgCABgBQAJgJAJgJQAUgTAVgQQAKgIAJgGQABgBACgBQAGgDAHgDQAGgGAFgFAoakGQAOgZAQgXQARgaAUgYQASgVAVgVQAAgBABAAQABgBAAgBQACgBABgBQACgCABgBQABgBABgBQACgCABgBQABgBACgBQABgBABgBQACgCABgBQABgBABgBQAEgDADgDQABgBAAAAQAEgFADgEAoAk0QAkg2AogoQADgDACgCQATgRASgQAmpmPQAAAAAAgBQACgBACgCQAVgVAWgSQAHgIAGgIQABAAAAAAQADgEAEgEQAAAAAAAAIAAgBIACgBQABgCACgCQAAAAABAAIBDgoAmbmiQAAAAAAgBQAFgGAFgGQAUgSAWgPQABgBABgBAmbmiQAFgGAEgGQAEgFAEgFAmcmMQABgBAAgBQABgBABgBQAOgOAPgMQAIgIAJgHQAYgUAagRQABgBAAAAQAKgJAKgIQAIgHAIgGAmql+IAMgNQABgBAAAAIABAAQAHgLAHgKQAxguA3ggQAJgHAIgGQAFgEAFgDIAJgHAmgmIQACgCACgCAmwluQAOgQAQgQQAHgHAHgHQAQgPARgOQAHgGAIgGQAAAAAAAAQABgCABgBIAMgLQAHgGAGgFQAJgJAKgIQABgBABAAQAOgJAPgHQACgBACgBIAxgUQADgBAEgCQADgBACAAIAFgCQACgBACAAQAEgCAFgBIAmgLQAHgCAGgBQAKgBAKAAQAAAAAAAAIABAAQABAAABAAQAJgBAIgCQAVgDAVgCQAVgCAUAAIABAAQAIgBAKABIAGAAQADAAACAAQABAAABAAQAKAAAKABQABAAABAAQAEAAADABQAKABAJABIAEABQALABALADQAKABAJADIACABIAAAAIADACIBlA2QA/AYA5AmQAGAEAFAFIAKAGIADABQABABAAAAQABAAAAABQAHAFAGAFQADACADADAmjmDQAPgNAQgMQAMgJANgJQABgBAAAAQAHgFAHgEQAAAAAAAAQAEgDACgCIAsggIAAAAQABgBAAAAQAFgDAFgDQAEgDADgCIAqgXQADgCACgBQABgBABAAQADgBADgCQABAAABgBQAHgDAGgDQAEgBADgCQADgBACgBQAFgCAFgCIAKgFQACgBADgBQADgBACAAIAFgCQABAAABAAIAIgDQAFgBAFgBIAIgCQAGgCAGgBQACgBACAAQABgBAAAAQAFgBAFgBQAEgBAEAAIALgCAmbmjQASgQATgPQAEgEAFgEQAEgEAEgEAmpmQQAHgJAHgKAnUlyQAOgQAQgQQAZgZAagVQAVgRAVgOQAZgRAagNAobj8QARghAWggQAJgMAJgMQAOgSAPgRQALgMALgLQAKgKAKgJAmpmPQAHgKAHgJAknnfQAFgDAEgDQADgCADgCAk5nVIAQgJIACgBIBBgiAkqndQACgBABgBAlRnnQACgBABgBQAKgGAKgGQAngWApgPAllnTQABAAAAAAIBNgvQAGgDAGgCQAHgDAHgDQAAgBAAAAQAYgKAYgIQAAAAABAAQAIgDAJgCQACgBACAAAlgnYQADgDACgCAljnUQACgCABgCAlcm4QADgDADgCAlrmuQABgBACgBQAAgBAAAAQAXgTAYgRAlzmkIARgPQADgDADgCAlpmvQABgBAAgBQAEgEADgDAlGnTQAHgGAHgGQA1gkA6gWQAEgCAEgBQAGgCAHgCAlimzQADgDADgCQCZhiDBAAQAJAAAKAAQACAAABAAIA1AEQAGAAAFABQAGAAAFABAm6ldQAVgaAYgYQARgQARgPAl3nOQATgOATgLAm/lTQAUgaAXgZQAQgQARgOAoakGQABgBABgCQABgBAAgCQABgCABgBQABgBAAgBIAPgaQACgFADgEQATggAZgeQAFgGAEgGAn/kkIAFgIQABgCABgBQAlg2AqgqAoFkrQABgEACgCQABgCABgBAoKkSQADgFADgFQACgEADgEAoFkbQADgFADgEApSiVQACgEABgEQAGgOAHgNQAEgJAFgJQAAgBAAAAQADgGACgFIAPghQABgCABgBQAQgeARgZQAUggAYgeQABgCABgBApHiLIAFgbQAKggANgeQABAAAAAAQACgEACgEQAGgNAGgNAo5jKQACgHADgFAo0jHIAOglQAFgIAGgIQAKgQAMgPAo5jLQAHgNAHgMApHiLQAEgOAEgPQAEgLADgKQABgBAAgBQAMgfAQgeApFA6QgBgYAAgXQAAhJARhEQABgDABgCQACgJADgJQABgDABgCQAhhnA+hQQABgCACgDAo5i3QABgDAAgDQACgFACgFAo5i3QABgEABgEQACgEABgEAo/iTIAGgkAo9i/QACgGACgFAo9i/QACgGACgGAoqjkQAIgSAIgQAoWDQIgPgjQgBgCAAgCQgCgIgCgJQgBgFgCgFQgHghgDgjQAAgCAAgCQAAgCgBgBQAAgCAAgBQAAgCAAgCQAAgCAAgCQAAgCgBgBQAAgLgBgLQABgCgBgCQAAgGAAgGQAAgkAEgkQAJhGAXhBQATgxAdguQAUggAYgeQAFgIAFgJQAGgLAHgKApCimIAFgZAm8lqQAFgGAGgGQAEgEADgEAm8lqQAFgGAFgGQAEgEAEgEAnPlRQABgCABgCIARgVAm/lTQACgFADgFAnRlXQAIgLAJgLQALgRAMgRAnCloQABgDACgCQAKgSAMgRAqfiBQAOg7Aag1QArhZBMhLQAqgqAugfQB2hnCSgjAo+khQAfg9Avg3QBShLBigmApCi4QAjhkBJhTQAFgIAGgHAnskPQATgkAaggAnekyQAVgfAZgdAAho+QAMABAMABQALABAMACQABAAABAAQABAAABAAIATADQAIABAIACQAFAAAEABIAYAIQAUAFAUAGQAaAIAYALIAFABQABABABAAQAGADAFADABYo1QABAAABAAQAZAFAYAGIA1ARQAFACAFACIACABQBlAnBVBOQAHAHAHAHQAXAXASAWABYo1QAFABAEAAAByo0QADAAACABQAJABAJACQClAfCAB+QADAEAEADQAhAiAbAlABwo1IACABQAHABAHABABno2QAEAAAFABAApo7QAMAAAKABQASABATADQAGAAAGABAAio8QADAAADABQABAAAAAAQA2ADAyANQAFABAFABAAno7QABAAAAAAAAio8QABAAABABQACAAABAAQAZACAYAEAAko7QACAAACAAAAfo+QABAAABAAQANAAAOABQBxAGBhAuQAOAGANAHQBLAqBBBBQASASAQATAAto5QAAAAABABAAto5QABABACAAQAGAAAHABQAKAAAJABQAeAFAdAHAAbo6IAPABQABAAACAAQAGABAGAAQACAAACABQAUACATAFQAHABAHACIAHACIAHABQALADALAEIAEABIAHADQAIACAHADIAQAGQACABACABQANAFANAGIAIAEIAFACQAKAFAKAFAA5o4QAKABAKABQAGAAAFABABOo0QASADASAEABKo1QAYAEAXAGQAHABAGACIAGACQAFABAFACABJoWQAGAAAGABQCGApBrBpQAnAmAeApQA/BhAZBqQAGATAEAVQABAFAAAFIAFA+QAAADAAAEQAAABAAACQAAABAAACIgBALQAAAFgBAGQAAANgCANIhoEcQgEAGgEAFQgKAOgMAOQgSAWgUAUQgXAWgYAUQgCACgCABQgXATgYAPQg4ANg8ADQgHAAgHAAQjTAFikh5IgHgFQgBgCgCgBQgDgDgEgCIgJgHQgLgKgLgKIgFgEIgOgMQgDgDgDgDQgdgdgZgeQgogzgbg4QgFgKgEgKQgBgBAAgBQgfhKgKhTQgDgfAAghQgBhyAlhiAgRo8QACAAABAAQACAAABAAQABAAACAAQAIAAAIABQACAAACAAQACAAACAAQAEAAADAAQARABARACAgOo8QABAAAAAAAgRo8QADAAAEAAQAFgBAFAAQAFAAAFABAgQo7QADAAADAAQAIAAAHAAQABAAACAAQAKAAAJABAgQo7QAFABAFABAAIo9QACAAACAAQALAAALABAAUo8QACAAABABQACAAACAAQAGAAAGAAAAIo9QAHAAAHAAQAFgBAEAAAAMo7QAIAAAHABAALo8IARAAQADAAADAAAATo5QADAAAEAAQAzAEAvAMQATAEASAGIA9AYQA1AaAxAmQALAIAKAKQAJAGAJAGQACABABACAgKo7QARAAARACQALAAAKAAAgRo+QAMAAAMAAQAMAAAMAAAgKo8QALAAALABAgRo+QANAAAMABAAAo9QAEAAAEAAAgBo8QAKAAALAAAg9o7QACAAADAAQAFgBAFAAQAHAAAGAAQAEgBAEABAgwo8QABAAABAAQADAAACgBIACAAIAAAAQABAAAAAAQABAAAAAAQACAAACAAIAFAAQABAAABAAQANAAANAAAg4o7QAEgBAEAAQAEgBADAAAglo9QACAAACABQABAAABAAQACAAABAAQABAAAAAAIAAAAQACAAACABQACAAACAAQAFAAAEAAAgeo7QAFAAAEAAQABAAABAAQACAAABAAAgeo7QADAAAEAAQADgBADAAAgqo9QAHAAAHAAQAFgBAGAAAgxo6QALgBAKgBAgxo6QAKgBAJAAAgvo7QAKgBAJAAAgbo8QAFAAAFAAAgbo8QAHAAAGAAAgvo3IAfgEAARoaQAPADAOAEQCjAnB+CGQBqBwAqCNQAPBDAABFQAAAFgBAGQAAACAAACQAAALgCALAAco8QAEAAAEABAheo5QAFgBAEAAAhXo4QAIgBAIgBAhXo4QAFAAAEgBQAOgBAPAAAiVotQAbgGAcgEQAEgBADAAAhjo4QAFgBAFAAQAUgDAVAAAiHooQADgBAEgBQADgBACAAQAFgCAEgBIAFgBQAmgIApgEAiHouQADAAADAAQAogJAogDAinorQABAAABAAIAngIQATgDAUgCAioofIADgBQABAAABgBAh2otQACAAACgBAh2otQAFgBAEgBQAFgBAEAAAinoeQAtgHAuABQAxABAsAJAj7oPQAAAAABAAQAKgFAKgDAj+oNIABAAQABgBABgBAkCoKQABgBAAAAQADgBACgBAkCoKQABgBABAAQANgEAMgDAkCoKQABAAAAgBQACgBACgCAkKoHQAGgDAGgDAjmoSQABgBABAAIAEgCQAlgOAmgKAiwooQADgBACgBIAEgBAiyooQAEgBADgBAizobQAEgCAEgBQACgBABAAAizobQAEgCAEgBQACgBABAAAiyocQACgBADgBQADgBACAAAjAonQAFgBAEgBQArgLAugFAi5oYIAGgDAjAojQAJgDAHgCAjSoWQAEgBADgCQADgBACAAAjOoNIAVgLAi9odQAagKAcgHAi3pcQASgIASgHQBegkBsgBQDzgCCtCoQARAQAPASAisodQADgBACAAAh+ozQAegFAggCAEIoCQAeAOAcATQADACADACQAMAIAMAJQABABACABQAEAEAFAEQAeAWAcAcQABABABABIAqA4AF5mgQAEADAEAEQAQAMAPAOQAJAIAJAIQAFAEAEAFQABABABABQACABACADQAHAGAHAHQACACABACQACACACACQACACACACQABABABACQADADADADQAHAHAGAIQAAAAAAABQABABACACIAdAzQACAEACAEIAyCgAF5mgQAEADADAEQABAAAAAAQADACACADAFrmpQADACADACAFymkIAHAEADFoXQAKAEAKAEQAOAGAOAHQAbAOAaAQQAGAEAGAFQAuAgAqApQAJAJAJAKADyoMQAJADAJAFQACAAACACQBZAqBMBKQA9A9AnBFQABACABABQAGAOAGAOACMomQAHACAHACQALAEALAEADAoZQACABADABQADABACABADEoSQARAGARAJQANAGAMAGIAXAOQAFADAEACQACABABACQAGADAFAEQAgAWAeAbAChoHQAhAIAfAMICDBHADToXIAfALAHskzQACACABADQACABABACAHskzQACACABADIAAAAQAEAEADAEQACACACADQABABABACQAEAFAFAGQABACABACQABABABABQABACACACQAEAHAFAHQADAFACAFAISkLQACAEACAEAIKkaQAEAIAEAHAHilBIAKAOAIQkFQADAFACAFQADAFACAFAEWnpQAxAdArAoAgFo5QBXAMBPAmACAoqQADABADABAkXoCQAHgDAGgCAkUn9QAFgDAEgDAHrhQQABAIABAIQABAEAAAFAHyAfQAAAHgBAIQgHDtipCnQgWAOgXALQgIAEgJAEQAAAAgBAAQgFACgFACIiaAdQgPABgPAAQgDAAgEAAQgBAAgCAAQgDAAgCAAQgCAAgDAAQgDAAgDAAQgCAAgDAAQgCgBgCAAIkwhlQgHgFgIgGQgIgGgIgGAIVD5QAAAAAAABQAAAAAAABQgFAGgFAHQgKAPgNAQQgBADgCADAHjE7QgCAEgCADAHjE7QgFAFgFAGQgHAIgIAIIgHAKQgBACgCACQgOATgPASQgBAAAAABIAAAAQgEAEgEAFIgOAP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");
	this.shape_126.setTransform(270.2,211.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF9808").s().p("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");
	this.shape_127.setTransform(270.2,211.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF9900").s().p("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hEg2IgJgGIgDgDIAIAEQAjAaAmAUQAzAcA4ASIgRgHIAdAKIgMgDIAMADIAAAAIACAAIAFACIgFgBIgCgBIACABIgEgBIgKgDIAKADIAEABIAFABQAcAIAdAFQgdgFgcgIIgFgCIAEACIAAAAIADAAIACABIABAAIABAAIABAAQBGASBOABIAAAAIABAAIgTACIAEABIgFAAIABgBIAAAAIAAAAQgpgCgngHIASAFIAHABIgHgBIAKABIgDAAIAIABIgVgDIANACIgNgCIg/gNIALAGIARAEIgRgEIArAIIgEgBIABAAIAKACIADAAIAIABIgIgBIgDAAIARACIAbABIgVgCQAWACAXABIABAAIAFAAIAQAAIgKAAIgPABIAAAAIgBAAIgDgBIAHAAIgDAAIgVgBIARABIgCABIgCAAIgPgBIAPABIgFAAIgGgBIAEABIgEgBIAGABIgCAAIACAAIAFAAIACAAIgCAAIgFAAIAFAAIgCAAIgPAAIgDAAIgfgDIAfADIADAAIAPAAIgDAAIgMAAIAMAAIgCABIgHgBQgZAAgYgDIAuADIgugDQAYADAZAAIAHABIAAAAgAgeJXQgagBgagDIAIABIgQgBIAFAAIADAAIgDAAIgFAAIgBgBIgCAAIgCAAIACAAIACAAIABABIAQABIgIgBQAaADAaABgAgiJWIgMgBIAIABIgZgCIAZACIgIgBIgTgBIgCgBIAEABIgEgBIACABIATABgAAYJWIAMgBIgIAAIAIAAIgMABgAERIhIgRAHIgcAMQhGAahNAHQBNgHBGgaIAcgMIARgHIBJgqgABRJVIAIgCIAKgCIgKABIACAAIAEgBIgEABIgJABIAJgBIgCAAIgMACIAMgBIgIACgAhlJRIAPADIgPgDIAGABIgYgFIgNgDQAfAGAgADIACAAIgCAAQgggDgfgGIgVgEIAVAEIANADIgegFIgCgBIgTgFIARAEQgigIgfgLIgxgVIAxAVQATAHATAGIAKACIgTgEQgxgPgugXQgTgKgTgMIgqgYIgDgBIADABIAqAYQATAMATAKIAjAUIgjgUQAuAXAxAPIgbgGIgggMIgBAAIABAAIAgAMIAbAGIATAEIATAFIACABIAeAFIASAEQgugGgqgNQAqANAuAGgAAQJTIAlgBIglABIgEAAIgDAAQAWgEAVgFIgo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IACAJIgIgUIAAgBQgLg5AAg9QABhoAhhbQghBbgBBoQAAA9ALA5IgIgWIgCgNIACANIAAAAIACAMIgCgMIAIAWIAAABIAAgBIAAABIAAAAIgGgLIAGALIAAAAIAIAUIAAAAgAI2CmIAFgVIABgGIADgLIADgKQAGggADghIABgLIAAgLIAAgFIABgoIgBgXIAAgLIgBgLIAAgDIAAgDIAAAAIAAgBIACAWIgCgSIACASIgCgWIgBgEIgCgZIgZhsIAZBsIACAZIgBgMIgzigIgDgIIgdgzIgDgDIADADIAdAzIADAIIAzCgIACARIgCgRIABAMIABAEIAAABIAAAAIAAADIAAADIABALIAAALIABAXIgBAoIAAAFIAAALIgBALQgDAhgGAgIgDAKIgDALIgBAGIgFAVIACgMIgCAMIAAAAgAJfAlQgBAxgKAuQAKguABgxIABgcQAAgWgCgXQgFhQgZhHQAZBHAFBQQACAXAAAWIgBAcgApbB1IgCgMIACAMgApdBpQgRg0gGg3QAGA3ARA0gAJeBmQARg0AHg2QgHA2gRA0gApjAmIAEA2IgEg2IAAgKIAAgTQAAgfACgfQAFgxANguIABgDIADgIIANgbIAJgSIAAgBIAFgLIAPghIABgDQARgeARgZQgRAZgRAeIgBADIgPAhIgFAMIgJASQAjhkBJhTQgYAegUAgQAUggAYgeQhJBTgjBkIgNAbIgDAIQAniPBwhvIANgNIACgBIAVgTIgSASIgDADIgfAhIAfghIADgDIASgSIgVATIgCABIgNANQhwBvgnCPQgdBHgJBOQAJhOAdhHIgBADQgNAugFAxQgCAfAAAfIAAATIAAAKIAAAAgApQACIAAgLIAAALgAoWkIIgQAiIAEgIIgEAIIAQgiIgMAaIAMgaQAOgZAQgXQARgaAUgYQASgVAUgVIACgBIABgCIADgCIACgDIADgCIADgDIADgCIACgCIADgDIACgCIAHgGIgKAMIABgBIAKgMIgBABIAIgKIgHAJQAUgSAVgPIACgCIgHAIIABAAIAGgIIABAAIAAgBIABAAIBNgvIhNAvIgBAAIACgBIgCABIAAABIgBAAIgCACQgVAPgUASIAHgJIgIAKIgHAGIgCACIgDADIgCACIgDACIgDADIgDACIgCADIgDACIgBACIgCABQgUAVgSAVQgUAYgRAaQgQAXgOAZIACgDIABgDIACgDIABgCIAPgaIgPAaIgBACIgCADIgBADIgCADIAAAAgAHjlIIABACIACADIgCgDIgBgCIgNgQgAnJlXIARgVgADioUIAkAQQBSApBHBFIAZAbIADADIAbAgIgbggIgDgDIgZgbQhHhFhSgpIgkgQIgLgFIAfALIgfgLQgbgKgdgIIgDgBQAUAFAUAGQAaAIAYALQgYgLgagIQgUgGgUgFIgZgIIAZAIIgIgBIALACQAdAIAbAKIALAFgAlmmxIAOgJIgOAJgAlmmxIAAAAIAAAAIACgCIgBABIAIgIIgIAIIgBABIAAAAgAlkmzQAXgTAYgRQgYARgXATIAHgHIgHAHIAAAAgAlRnHIgMANIAMgNIALgIIARgIIgRAIIgLAIIABAAIACgDIAMgLIgMALIgCADIgBAAIAAAAgAlCnVIAOgMIgOAMgAlfnWIADgEIgDAEIADgEIgDAEgAk0nhQA1gkA6gWQg6AWg1AkgAjCoVIgFACIgHADIgNAGIgCABIgGADIgCABIgFADIgqAXIAqgXIAFgDIACgBIAGgDIACgBIANgGIAHgDIAFgCIAJgEIgRAKIgYAMIAYgMIAVgLIgVALIARgKIAEgBIgEABIAKgFIAGgCIACAAIgIADIAIgDIADgBIADgBIACgBIgCABIgDABIgDABIgCAAIAFgBIgFABIAAAAIgGACIAGgCIgcAFIAIgDIgIADIgCAAIACAAIAcgFIgGACIgKAFIgJAEgAi3onIgSAFIgBAAQgYAIgXAKQAXgKAYgIIABAAIASgFIAEgBIgJADIAQgFIAEgBIAHgCIAQgCIAOgBQgcAHgbAKQAbgKAcgHIgOABIgQACIAngIIgnAIIgHACIgEABIAEgCIAFgBIgFABIgGACIgCABIgTAFIgfALIAfgLIATgFIgDABIgEABgAjioUIgBAAIABAAIACgBIAZgGIgZAGIgCABIACgBIAEgCQAkgOAngKQgnAKgkAOIgEACIgCABIAAAAgABYoXQhUgaheAAIgNAAIASgDQAVgDAVgCQgVACgVADIgLACIgJABIABAAIAIgBIALgCIgSADIANAAQBeAABUAagAjsoYQAcgLAdgIQgdAIgcALgAjOoYIAHgDIAFgBIAFgCIgFACIgFABIAAAAIgHADIAHgDIgHADIAAAAgAi6ofIgDABIAMgEIgJADgAiEoqIgHACIgKACIgIADIgCAAIgFACIAFgCIACAAIAIgDIAKgCIAHgCIAIgCIAFgBIgNADgAiKotIgnALIAngLIANgDIATgBIgEABIgJADIAEgBIABgBIAKgCIABAAIgBAAIgKACIgBABIgEABIAJgDIgEABIAJgCIgBAAQAngIApgEIgTABIAVgCIgVACIATgBQgpAEgnAIIgTABIgGAAQAXgGAZgDIAJgCIgJABIAJgBIgJACQgZADgXAGIAGAAIgNADgAiOonIgOAEIAOgEIASgFIgSAFgACJoqIAHACIgHgCIgGgCIAGACgAi8opIgBAAIABAAIAJgCIgJACgACJoqIgMgDIAAAAIAGABIgGgBIgCgBIgTgEIgogHIAoAHIgWgEIAkAHIAHACIAAAAIADACIgDgCIAMADgAhao7QguAFgrALIAQgCIACAAIgCAAIAdgGIADgBIAkgGIAKgBIgKABIgkAGIgDABIgdAGIgQACQArgLAugFIgFABIAFgBIAFAAIApgDIgpADIAEgBIgJABIAAAAgACAorQgwgMgygEIATABIgTgBQAyAEAwAMgACPosQgYgGgZgFQAZAFAYAGQgdgHgegFIAKABIgKgBQAeAFAdAHIAAAAgAh8osIAVgFIgVAFgAB9otQgXgGgYgEQAYAEAXAGgACUotIgvgJgACUotQgxgNg2gDQA2ADAxANgAhao5QgcAEgbAGQAbgGAcgEIAHgBIgnAFIAngFIgHABgAh9owQAngJApgDIgdABIAHgBIAHAAQggACgeAFQAegFAggCIgHAAIgQACIAQgCIgHABIAdgBQgpADgnAJgAgro5IApgCIgpACIAfgEIgfAEIAAAAgAgMo9IAKACIABAAIAIAAIAFAAIABgBIACABIACAAIAFAAIgFAAIgCAAIgCgBIgBABIgFAAIgIAAIgBAAIgKgCIAGAAIgJAAIADAAIAAAAgAg6o9IgCABIACgBIAPAAIATgBIgTABIAQgBIgCAAIgEgBIAEABIgNAAIAFgBIgHABIgIABIgGAAgAgRo9IACAAIgCAAIgJAAIAHAAIAEAAIgEAAIAFgBIgJAAIANAAIABAAIAAAAIgBAAIgHAAIgCAAIgCAAIACAAIACAAIAHAAIgNAAIAAAAIgBAAIgDAAIAGAAIgIAA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");
	this.shape_128.setTransform(269.9,211.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("rgba(215,129,43,0.843)").ss(0.1,1,1).p("AIpiaQAAAAAAABQAQAxAGA1QABAEAAAEQABAIABAJQABAVAAAWQAAANAAANQgCAjgFAhQgGAkgKAiQgDAKgDAJQggBXg+BMIAAAAQgCABgCACAIFnLQAcAhAVAjQA7BgAOB0QADAeABAfQABBggbBUQAAADABADQgJBpgpBbQgHAHgHAIQgBABgBABQgiAjglAdQgOATgRASQgNAPgOAOQgBABgBAAQgCACgBABQgCACgBABQgDACgCADQgKAJgLAJQgMAGgMAGQgHADgGADQgEACgEACIAAAAQgFACgFACQgCADgCADQgCABgDACIhBAmQgSAJgSAHQgFACgFACIgYAKQgNAEgNAEQgLAEgMADQgDAAgDABQgNADgOACQgGABgGABQgQADgQABQgCAAgCABQgBAAgCAAAIFnLQADADADADQCqCkgBDpQAAABAAACQAAADAAAEQAAACAAABIgfCpQgBADgBADQgiBehGBPQgMAPgPAPQgDADgDADQg+A9hHAnIhKA2QgCABgDACQgEACgDACIgyAaQgCABgCAAQgNAGgNAFQhOAehYAFQgFAAgEAAQgIAAgJAAQgOABgNgBQgBAAAAAAQgDAAgEAAQgDAAgCAAQgBAAgBAAQgDAAgDAAQgBAAgCAAQgNAAgOAAQgGAAgHgBIgBAAQgBAAgBAAQgnAFgoAAQhGgBhAgPQhTgnhHhBQizihgSjkIAAgBQACgkAHghQgGgigDgkQAAgBAAgBIAAgBIAqiyQADgGACgFIAAAAQAYgeAcgdQBIhIBUgrQALgGALgFIAAAAQAGgDAGgCQAEgGAFgFQAFgDAEgDQACgBABgBQAUgNALgHQAEgCAEgDQABAAAAAAQAVgMAPgHQAEgCAFgCQAHgDAIgEQAEgBAFgCQABgBABAAQAGgCAFgCQANgFANgEQAFgCAFgBQAHgCAIgCQACAAACgBIAAAAQADgBADgBQAUgEAVgEQAFgBAFAAQAIgBAHgBQAVgCAPgBQAFAAAFAAQAGgBAGAAQAGAAAEAAQAngBAkAEQAFABAGABQAHABAIABQAFABAFAAQCbAdB2BwQAIAIAIAHQACACACACQADAEADADQABACABABQAGAHAGAGQAEAGAEAFQAHAJAGAJQAPAUAMAUQAPAaANAcQAAAAABABQAAABABAAQASAgANAhQAAAAAAAAQAUAyAKA2QABAJABAJQACAMABANQACAPAAAPQABANAAANQAAAEAAADQgBA+gNA5QgDAHgEAIIgBAAQgKASgLASQgMAlgSAjQgBADgCADIgYAoQgCADgCAEQAAAAgBABQgCAEgDADQgLAQgLAOQgPATgQASQgJAKgJAJQgYAYgZAVQgDAFgEAFQgGACgGADQgEABgFACIgZAIQgEABgEABQAAABgBAAQgEADgEACQg/AqhHAVQgBAAgBAAQgLAEgMACQAAAAgBABQgCAAgBAAQgSADgSACQAAAAgBAAQgDAAgDAAQgDAAgDABQgCAAgBAAQgFAAgEAAIgdABQgSAAgTgBQgHACgHABQgDABgDAAQgBAAgBABIAAAAQgCAAgCAAQgBAAAAAAQgFAAgFAAQgCgBgDAAQgDAAgEAAIgCgBQgCAAgCAAQhGgIg/gXQhQgehGg5QgWgSgVgUQhMhKgqhZQgIgSgHgSQgFgOgFgOIAAgCQgBgBAAAAQgBgEgBgDIgKgrQAAgCgBgDQgJgwgBg0IAAgJQAAgBAAgCIAAgFQAAgDAAgDQgChdAahUQABgBAAAAQAIgWAKgVQAAgBAAAAQASgkAXgiQACgCABgCQAIgMAJgMQAOgQAOgQQAKgLAKgLQAVgVAWgSQAFgFAGgEQAKgJAMgIQABgBABgBQABgBACgBQABAAABgBQABgBABgBQABAAABgBQABgBABgBIACgBQABgBABAAIAAAAQADgEADgDQACgCABgDIABAAQACgDADgEIABAAQAAgBAAAAIABAAQABgBABAAQAIgDAJgCQABgBABgBIAvgVQAIgDAIgCQABgBAAAAQAAAAABAAQAOgFAPgEIABAAQABAAABAAQAAAAAAAAQADgBADgBQABAAAAgBQADgBADAAQABgBAAAAQABAAABAAQADgBADgBIAKgCQADAAACgBIAFgBQACAAACAAIAEgBQAEgBAEgBQAVgDAUgBQAEgBADAAQACAAACAAQACAAABAAQALgBALAAQABAAACAAQAEAAAEgBQAEAAADAAQABAAABAAQACAAADAAIAEAAQACAAACgBQABAAAAAAQAEAAADAAQABAAABAAQAHAAAGAAQABAAACAAQAKAAAKABQAGAAAGABQAQACAPACIAIABQAEAAAEABQAEAAAEABIArAHQAgAIAeALIAnAMQADACAEABQABABACAAQAAABAAAAQABAAAAAAQAGADAGAEQAoAVAlAcQADACADADIAmAZQAPANAPAOQA1A0AjA8IAOAgQACAGACAGQACAFABAGQABAAAAABQAAAAAAABQABACABACQAlBUAFBjQAAAKAAAKQAAADAAADQAAAHAAAGQAAADAAAEQAAABAAABIgNBoQgCAHgBAIQgKAogQAmIAAAAQAAAAgBAAQgMAPgNAPIAAAAQgCADgBADAISitIAQBOQAAABAAACQAAABAAABQAAACABABQAAACAAADQABAFAAAFQABAFAAAFQABAGABAFQAAACAAACQAAAEAAADQAAAKAAAMQABASgBAUQAAACAAADQAAAFgBAFQAAAFAAAFQgDAggGAeQgBAFgCAFQgBAFgBAFQAAADgBADQgCAKgDAKQgBADgBACQgBAGgCAFQgBAFgCAEQgGATgJATQgCAFgCAFQgBACgBADQgCAEgCAEQgCAFgDAEQgNAbgRAaIgBABQgJAIgJAIQgGAFgGAFQgDACgCACQgWAfgbAdQgKAMgLAKQgDAEgEADQgCABgCABQgBAAgBABQgHADgHACQgJAJgKAJQgeAaghAVQgBAAgBAAQgBAAgBABIguAHQgIABgIABIAAAAQgHABgGAAIgWABQgEABgEAAQgIAAgJAAQhoAAhaggQgPgGgOgGQhhgphQhPQhlhjgph8QgfhGgJhOQgEgeAAgfQgBhgAbhUQABgGACgFQAAgBABgBQAVgfAZgcQAMgNANgNQAIgIAJgIQAGgEAHgEIAAAAQADgCADgCIABAAQABgCACgCIABgBQAFgGAFgGQAHgJAJgJQAJgKAKgJQADgDADgEQAJgHAIgIQAHgGAHgGQABAAAAgBQAEgDAEgDIADgCQACgCABgBQACgCACgBIAAAAQABgBABgBQAPgFAQgEQAHgCAIgCQABgBAAAAQACAAACgBIADgBQANgDAOgDQAXgEAZgEQAEAAAEgBQAHAAAHgBQAHAAAIgBQADAAAEAAQALgBALAAQAAAAABAAQANAAANABQAFAAAFAAQAKAAAMAAQAEAAAEAAQAAAAAAAAQAIAAAIABQAKABALABQABABACAAQANACANACQACAAACABQABAAAAAAQAgAGAeAJIA9AYQAEACAFACQACABABABAI5h5QAJAkAEAmQADAXABAYQABALAAAMQAAAHAAAIQgBAXgCAVQgGAPgGAOQgHAQgIAPQgJArgQAoQgBABgBACIgDADQgCACgBACQAAAAgBAAQgDAIgDAHIg5BgQgBABgBACQgCADgDADQgIALgIAKQgNAPgPAPQgBABgBACIgCACQgBABgBABQgDACgCACQgCACgCACQgFAFgGAFQgBABgBAAQgBABgBABIgeAZQgDACgCACQgHAFgHAFIAAAAQgDADgCAEQgpAcgsATQgEACgFACQguATgyAKQgUAFgWADQgCABgCAAIgWADQgGAAgHABIAAAAQgDABgDABQhXAghmABQgEAAgDAAQjqgBinikQgwgvgig1Qg2hRgTheQgLg7ABg/IAAgBQAChSAWhLQAMgnASgkQAqhXBLhKQARgQARgPQAAAAABAAQAegoAngkQBPgxBcgUQAMgCALgCQAZgEAZgCQAOgBAOgBQAOAAAOAAQAhAAAgAEIABAAQADgBADAAQAKAAAKAAQAEAAADAAQAEAAAEAAQAEAAAEgBQARgBARAAQAQABAQABAJggCQADAQADARQACAQABAPQAAABgBABIguBoQgCAEgCADIAAAAQgEAPgFAOQgFANgGANQgYA9gpA2QgMAJgNAJQgCABgCACIgNAIQgBABgBABQgPAJgOAIQgBABgBAAQgEACgFADQgFAGgGAFQgBACgCACQgLALgMALQgGAGgHAFQgDAFgDAFQgJAHgKAIQgUAOgUANQgBABgBAAIgzAbQgCACgDABQgBAAgCABQgDACgEABAGsk4QATAXAPAYQBRB9ABCdQAAAYgCAYQgEA1gNAzQgFASgFARQgDAIgDAIQgEAGgEAFQgMAQgOAPQAAAAAAABIgBAAQgFAGgFAFQgDADgDADQgGAGgGAGQgIAIgJAIQgBACgBABQgBACAAABQgBABgBABQgMASgNASQAAABgBAAQgCACgDABQgBAEgBADIgBAAQgDAIgEAIQgBACgBACQgCAFgCAEQgBADgBADQgHAIgIAHQgBABgCACQgCACgCACIgBAAQgBABgCABQgCAAgCABAJggCQgJArgPApQgFAxgNAsQgCADgCADIgMATQgJANgJAMQghBQg8BFQgOARgQAPABvpmQCuAeCHB5QCzChATDjQgDAlgHAkAIngvQAEAjgBAkQAAA9gNA5QgDASgGASIgCAIQgBAEgCAEQgIANgKANQgEAKgEAKQgKAXgMAVIAAAAIgJAJQgEAEgEAEQgKAJgJAIIAAAAQgZAlgdAiQgKAKgLAMIAAAAQgCACgCACQgDABgCABIgGADQAAAAgBABQgBABgCACQgEAEgFAEQgDADgDADIgkAdQgDACgDACQgDADgDACIgTANQAAAAgBAAQgCABgCAAQAAAAgBAAIAAAAQgBAAAAABIAAAAQgCABgBABQgBAAgBABQgXAMgYAKQgFADgGACIhSAYQgSAKgSAIQAAAAgBAAIAAAAQgBABgBAAQgBAAgCABQgEAAgEABIgLACQgGAAgFABQgCAAgBAAQgDABgEAAQgCAAgDABQgFAAgFABQgEAAgFABQAAAAgBAAQgBAAgCAAQgBAAgBAAQgCAAgBAAIgUAAQgBAAgBAAQgBAAgCAAQgFAAgFgBQgCAAgCAAIgCAAAI5h5QAaA4ANA/AKVB+QgBADgBADQAAAAAAAAQgGAMgHAMQggA5guAzQgRAkgXAjQgrBChBA6QhbBThtAoQhoAnh4AAQhIAAhBgNQhHgPhAgeQiTgkhzhzQgCgDgDgCQiWiagJjWQASilBliEQACgCABgCQAcg+Arg3QAfgnAmgkQABAAAAgBQACgCACgCAIpCOQgCAIgCAHQgKAogQAmAI2CvQgCADgCADAI6CoQgCAEgCADAiCpkQAEgCADgCQAsgYAvgQQBHgaBRgEQC3gMCVBdQARAMAQANQAOAKAFAFQANALAMALQCyCkAIDyQACA8gIA4QgNBQglBJAIpiZQAIAPAIARAm4nGQADgCACgDIAFgEQCEh2CogfQACgBACAAIAAAAQA7gLA/AAQA7AAA4AKAnDlZQAUgaAZgZIAGgGQADgEAEgDQAVgUAWgSQAEgDAEgDAmBmEQADgFAEgFIAGgJQAEgGAEgGQADgEADgDQACgEADgEIABAAQAEgGAFgGIAAAAQADgDACgDQAHgDAHgDQAJgEAJgDQADgDADgEIABAAQAEgFAEgEIANgPIAAAAQABAAAAgBQAQgQAQgPQAzgvA5ghQABAAAAgBQAFgCAFgCQADgBADgBIC2gpQAKAAALgBQDlgECjCeQAXAVATAXAmAmEQADgFADgFAmKmYQAAgBABAAQAYgUAagRAmBmEQAAAAABAAQAYgWAagTQAMgJANgIQAXgPAXgMIANgGQAEgCAFgCQAAAAABgBIAAAAQAEgBADgCIANgFQADgBADgBQABgBACAAIAmgOQADgBACgBQADAAADgBIA2gMQAGgBAGgBQABAAACgBQACAAADAAQALgCAMgBQABAAAAAAIABAAQACAAABAAQABAAABAAIAAAAQABAAAAAAQADAAACABQAGgBAFAAQAJAAAIgBQAGAAAFAAQABAAABAAQACAAADgBQACAAACAAQAEAAAFABQAGAAAGABQACAAADAAQACAAABAAIAGAAQACAAADAAQABAAACAAQABAAAAAAQAGAAAGAAIAKABQACAAACAAQARABASACQAEABAFABAmQmSQADgDADgDQAVgVAXgSQAEgDAEgDIANgKQALgMALgMQABgBABgBQAOgEANgDQABAAAAAAQAdgHAegDQAEgBAEAAQACgCACgBQAAAAABAAQACgCACgCIAigWIAUgLQAEgCADgCQADgCAEgBIDag7QANgBANAAIAAAAQAGAAAFAAQBUgBBMAVQCDAkBoBjAkxnRQADgEADgDQAngVAqgNQAGgCAGgCQADgCACgCAkynQQAAgBABAAAkynQQABgBACgBQArgYAwgQQAAAAAAAAQABgBABAAQACgCADgBQAOgFAPgDQA2gMAwgCAlEnKQAMgHAMgHQAEgFAFgEAk8nEQATgMAUgKQAFgCAFgBQAAAAABAAQAEgCAEgDIAPgGQAFgCAEgCQAEgCAEgBQAWgJARgFQAKgBAJgBIABAAQACAAADgBAkenXQAEgCAFgBQAbgOAcgKQARgGASgFQADgBADgBAk4nJQANgIANgGAlCm9IAwgcQADgCAEgCQAFgCAEgDAlsmCQAFgEAEgDQAIgIAIgGQAhgbAigWQAfgTAhgOQAOgCAOgCQADAAADAAQABAAACAAQAKgEAKgEQANgFANgEQACAAACgBQACAAACgBQAAAAABAAQABAAABgBQAjgKAkgFIABAAQADABACAAIABAAQADABADABIAAAAQAZgCAZAAQABAAAAAAQAIAAAIAAQABAAABAAQAEAAAFABQAOACANADQAHABAHACIAcAHQAUAGATAIQAIADAIADQACAAABABQAUAIATAKIA9AlQAkAZAgAfIABABQAEACADADIABAAQAEADAEADQADACADACQAEAEAEAEIAFAKQAaAcAVAeQAHAKAGAKQAtBGAUBRQADANACANIAGAKQACALABAKQAGApgBAqQAACKg7BwQgLAVgNATQgEAHgFAHQAAAAAAAAQgMASgNAQQgPATgQARQgDAGgEAHQAAAAAAABQgBABAAABIAAAAQgBAAgBABQgDACgDADQggAfghAYQgHAGgHAEQgHACgGACIAAAAIgBAAQgEADgEADIgYAMIgEACQgGADgGADIgHAEIgIAEQgCABgDABIAAAAQgCABgBABIgYAKQgBAAgBABQgCAAgBABQgCABgCAAQgNAFgOAFIgLADIgXAGQgLACgMACAlsmCQABAAAAgBQAEgGADgFQADgEADgEQAIgMAIgLQAGgIAGgIAk5mcQAOgLAPgLQA5gmA1gVQALgFALgDIAHgDQAEgBAFgBIAEgCIAGgCQACAAACgBIAAAAIABAAQACAAACgBAlmmqQAWgRAXgOAlsmjQAXgSAZgPAlgmyQAWgQAXgOAlXm+QAJgGAKgGAlbl/QAQgPASgOAlOmHQAFgEAFgEAlImLQACgCACgCAn5kSIASglQADgEAEgEQABgDACgCQAEgFAEgEQADgDADgEQADgEAEgFQAMgMAMgNQATgSATgQAnqkhQAEgFADgGQAdgoAgggQAegeAigYAnqkhQADgFADgEQABgBAAgBQAEgFAEgGIAYgiQAMgNAOgOQADgDAEgEQAggfAhgYAo3AMQAAgSACgSQAFhEAUg/QAIgYAKgWQAIgSAJgSQADgFADgGQAJgPALgQQAlg1ApgpQAIgHAIgIAoMjYQAMgQANgQQAXgcAcgaQAIgJAKgIQAGgGAHgGQAAAAAAAAQACgCABgBIAAAAQAAgBABAAQADgFAEgEIAYgZQAJgJAJgIAoDjzQABgBABgBIAXgsAoTjOQAGgPAHgPQACgDABgEQAMgWAPgVQAQgYATgWQARgVATgTQADgDACgCQAXgXAZgTAobjMQACgFACgEQADgIAFgJQABgDACgCQATgiAVgdQAEgHAFgGAoTjNQAAgBAAAAQAEgFADgEApBBBIAAgKQAAgBAAgCQgBgGAAgGQAAgIAAgIIABgBQAAgOAAgNQADg+AQg4QADgOAFgOQABgDABgDQABgCAAgDQACgFACgFAopiqQAHgMAIgMQAEgGADgFAoziYQAFgJAFgJQAGgRAIgRAoziYQACgGACgFIAUgpIAPgfIATgnQAYglAegiAnEEiIhEjqQAAgDgBgCQAAgLAAgLIAAgNQABheAdhTQAFgNAFgNQARgrAZgnQAUghAageQACgFACgEQABgBAAgBIAGgLQABgCABgCQABgCABgBIAAgBQADgCADgCIAAAAQAMgJANgIAoeisQAFgRAGgQAoajCQAKgZANgYApEkGQAcg+Asg3QBchOBvggQASgSATgRQA9g0BGggAqyhwQANg6Abg1QAphTBIhHQAugtAzggAovijQAUg7Aig0ApJj7QADgGACgFAl+liQABgCABgCQABgBABgCAl8lmIAAAAQAEgEAEgEAmTllQABAAAAgBQAHgHAIgIQASgSATgPQAtgmAygbQAEgCAEgCQABgBABAAIANgGQAHgDAGgCQABAAAAAAQAFgBAFgBQATgJAUgHIAEgBQAEgBAEgCQAEgBAEgBQAAAAABAAQADAAADAAQAKAAAKAAAmelPIABAAQAFgMAGgLQAIgPAKgPAmhlLQABgBABgBQABAAAAgBQAAgBAAAAQAGgLAFgLQAJgQAJgPAmflNIAAAAQABgBAAAAQAEgFAEgFAmilFQABgEACgEAmilFQABgEACgEQATgPASgOQAHgMAHgMAmhlLQACgCABgCAmzkaQADgKAEgJQAWgdAagcAnAkuQAVgdAYgaAmqlAQAEgFAFgGAmqlAQAFgGAEgFAmsktIAKgYAmJlMQAMgOANgOQARgQARgPAnMEgQgXgqgQgtQgOgpgHgsQAAgBAAgBQgBgCAAgCQgBgDAAgCQAAgBAAgBQAAgBAAgBQgBgFgBgFQAAgBAAgBQgEggAAgiQAAgiAEgiQAIhDAWg9QAXg5Akg0Al0luQAkgkAngcQA3gnA+gYIAcgIAnzD1QgvhpAAh8QABhFAQg/QABgFACgFQABgDABgDQABgDABgEIBgi1AlVl6QAHgIAGgJAlVl6QAHgIAHgJQCMhUCvgCQAGACAGACQCZApB2CCQBhBrApCDQAFAQAEAQQADAeAAAfQAAACAAABIgBAQQAAAIgBAHQAAACAAABQgHDKiDCVQgHADgHADQgLAEgMAEQhGAUhOABQgCAAgCAAQgBAAgCAAQgCAAgBAAQgCAAgBAAQgCAAgCAAQgBAAgCAAQgCAAgCAAQgDAAgCAAQgCAAgBAAIkrhlQgDgDgDgCQgCgBgCgCQgFgEgGgFIgDgCQgEgEgEgDQgCgCgCgCIgUgRQgCgCgDgCQgBgBgBgBQhRhPgqhfQgCgHgCgGQgTg/gFhEQgBgOAAgPIAAgBQAAgBAAgCQAAgKABgJQAAgDAAgDgAAqoSQABAAACAAQAVADAUAEQABAAAAAAQAEAAADABAAjoPQACAAACAAQABAAACABIARACQAIABAIACQCjAdB8B9IABABQACACACACQACABACACQAJAGAIAGQAEADADADQABABAAAAQAMAKAMALQAEADAEAEIAAAAQAZAXAVAYQABAAAAABQAVAXASAZQAEAIADAJQAFANAEANAAjoPQABAAABAAAAmoSQACAAACAAAApoSQAHAAAGAAAAhoSQAFAAAEAAAAwoOQALAAALABQA9AKA4AWIALAFQAGACAGADIADABQAEACAEACQAGADAGAEQAUAKASAMQAGAEAGAEQAMAJAMAJIAmAZQABABACABQACACACACQADACADADQACACADACQAHAHAHAHQAVAWASAUQAGAIAGAHAAqoVQAOgBANABQBrAFBbArQANAGANAHQBHAoA9A+QAKALAKALQBbBlAhB+ABOoMQAFAAAEABQA5ALA0AWQAGADAGADQAKAEAKAFIAFAEIBKAwQAeAXAdAcQALALAJAKQAFAFAEAFAA7oMQAPADAPADAhFoUQACAAACABIABAAQACAAACABQAGgBAFgBQACAAACAAQABAAABAAQABAAABAAQACAAACAAQAFAAAFAAQACAAABAAQADAAAEAAQAGAAAFAAQAGABAHAAQAQAAAPABAhBoSQABAAABAAQAAAAABAAQACAAACAAAhAoTQAHAAAIgBQAIAAAJgBQAPAAAPABQAGAAAIgBQAOABAPACAg5oSQAPgBAQAAQABAAABAAQADAAACAAQADAAADAAAgqoQQADAAAEgBIAIgBQAKAAAKABQAEAAAEgBQACAAABAAQADAAACAAQAFAAAFAAQAPABAOADAgroQQAEAAAEgBAg5oSQAPgBAPgBAgxoRQADABADAAAgHoRQANABAPABQBHAGBAAYQBHAcA+AwQATAPASAQQAKAJALALQAYAYAUAZQBIBZAdBsQAEAOADAPQALA4gBA8QAABtgmBeQgHATgJASQgMAYgOAXQgEAEgFAEQgJAIgJAIQgEAMgFAMIAAAAQgGAFgHAEIhmAyQgNAPgOAOQgFAFgFAFQgCAAgBAAIgTAEQgGABgGAAIgBABQghAagjAVQg5Ahg/ASQgGAAgFAAQgDABgCAAQgFAAgFAAQgZAAgZgCQgDAAgCgBQgXgCgWgEQgZgEgZgHQgVgFgUgHQgCgBgCgBQgFgCgFgCIgDgBQgIgDgHgEIgEgBIgNgGQgIgEgHgEQg6geg1guQgBgBgBgBQgCgCgCgCIgDgEQhMhMgohbAgJoTQAJAAAJABQANABANACAgSoTQAMABAKAAQAQABAPACAgkoPQAOgBAPgBAgYoUQAGABAHAAAgXoSQADAAACgBAgMnhQAEAAAEAAQAeAAAeADIA6AHQAHACAGABIABAAQBEAmA7A7QBcBdApBxQAWA9AIBEQAMAxAEA1QACAXABAWQAAAegCAcQgGBWgbBNQg5AwhAAhQgBABgCABQgFACgGACIgVAKQgEABgEACIAAAAQgDABgEACIhoAeIAAAAIgBAAQgEABgEABIgaAEQgMACgLABQgNABgNABQgYACgXAAQgkAAghgDQjLgUiaiLQgHgGgHgGQAAAAAAAAQgEgHgEgHABynXQAHACAHABQAGABAHACIC0BIQACABADACQAJAFAIAGAgeoNQBTAQBKApQAHABAHACAiIphQADgCADgBAiIphQAFgCAFgCQADgBADgBAiTojQAEgCADgCQADgCAEgBAiroCQABgBABAAAitoCQABAAABAAAidn9QAEgBAFgBQAxgNAygFAicoFQADgBADgBAinn/QAJAAAJAAQAigLAlgGQACAAACAAQAFgBAEgBAiJoJQACgBADAAIADgBIAhgDIAPgCIAQgCAicoFQAFgCAGgBAh6n/QACAAADgBAh5n/IAAAAQBfADBSAeQBvAoBbBYQAlAkAdAnQA/BjAWBsQALA5gBA6QAAAGAAAGQgBAOgCAOIiPE2QgJALgLAKQgEAEgFAFQgDACgDADQgDABgEACAiEn8QAGgBAFgCAjSn7QACgBADAAQABAAABgBQA2gQA6gFQANgBANAAAjSn7IAAAAAjUn6QADgBAEgBQAHgBAIAAQAJgDAIgCAjUn6QABgBABAAAi0oAQAEgBADgBQAEgBAEgBAjenyQABgBAAAAQABgBAAAAIABAAQADgDAEgDAjannQAHgDAIgDIAigMAjbnnQAIgEAIgCAjxnjIAAAAQAAAAABgBQAEgDAEgDAjxnjQAEgCAEgCAkKndQACgBADgBQAKgCAKgCAj6nfQAFgCAEgCQALgCALgCAjtnuQAJgDAIgDQAEgDAEgDAjoniQAHgDAHgCAirntQAcgDAdABQA2ACAwAMAi0oAIAYgFAitn9QADgBADgBAhJoUQACAAACAAAh0oAQAmgKApgFAh0oAQApgKAtgDAFYmiQABABACABQAdAVAaAaQBIBGAoBTQACADACADIAAAAQACAGACAGADQnkQABABABAAADVniQAIAEAHADADHnwQAFACAGACQARAIARAIQBNAnBDBBQAPAPAJAKQAAABABAAIA3BHQADAFAEAGQADAFADAFIASAgQABACABACQAnBRALBaADGnoQAFACAFACADsnlQAGADAGACQAFADAFACIADADIBTA2ADunkQAFADAFACAD5nfQAFACAEACAHUkTQADAFADAFQAEAGADAFABxoMQAMABAMADQCcAcB5B3QADADADADQAdAdAXAeQA2BIAbBSAGAlQIAHAPIBlDFIAGAMIALAWQAMA3AAA7QgBCNg+BzQgOAbgSAZQgFAEgGAEIgIAHQgEACgEADQgDACgDACQgGAFgHAEAFvlqQAEADADAEAFrluQACACABABQABABAAAAAFYl6QAEAEAEAEQABABABAAQAPAQAPARQBWBkAcB8QAPBAAABFQABCWhEB5QgOAZgRAXQgPAWgTAVQgNAQgOAOQgGAGgFAFQgoAmgrAdQgGABgHACQgSALgSAKQgCABgBAAQg9AghEAPQgIABgJACQgCAAgBABQgBAAAAAAQgBAAgBAAQgfAEggABQgCAAgCAAQAAAAgBAAQgIAAgIAAQgDAAgDAAQgCAAgDAAAFgl1QADADADADQALALAKALIAFAJAICjeQACAGACAGQAIALAHAMAIKjFQAEAMAEAMAGMlUQAmArAcAvQA5BiALB4QAAAHAAAHQACASAAARQgBAggEAgQgBAOgCAOIgtCRQgCAEgDAFQgBADgBACIgJAQQgGAMgIANQgDAEgDAFQgGAFgGAFQgCACgDACIAAAAQgFAEgGAEAETmzQAoAbAkAjAAtoSQAwAEAsALAB1n/QAzAOAuAZAlDmQQBJg9BPggAkSnZQA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");
	this.shape_129.setTransform(270.5,211.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF9900").s().p("AhjJdQBlAABZggIgRAAIgEAAIgDAAIgBAAIAAAAIgMAAIgIAAIAIAAIAMAAIAAAAIABAAIADAAIAEAAIARAAQhZAghlAAQhGgOhBgfQBAAQBGAAIACAAIAAAAIACAAIAAAAIABAAQAmAAAkgEIgUgBIAXABIgDAAIARAAIgNAAIAPAAIAYAAIgTgBIAFAAIAHAAIgTgBIACAAIAJAAIAKABIADAAIAGAAIgGAAIANAAIACAAIgHABIgCgBIACABIgGAAIAGAAIgJAAIgJAAIAAAAIgBAAIgDAAIgEAAIgGAAIAaABIADAAIAFAAIADAAIAEAAIAIAAIABAAIADgBIAIAAIADAAIAXgBIgXABIgDAAIgIAAIAMAAIgMAAIgHAAIgJAAIAKAAIABAAIACAAIACAAIAAAAIABAAIALgBIACAAIADAAIgEABIAFgBIgBAAIADAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIABAAIgDAAIgDAAIgCAAIgLABIgBAAIAAAAIgCAAIgCAAIARgCIgRACIgBAAIgFgBIgDAAIAIAAIAIgBIgIABIgIAAIADAAIAFABIgKAAIAIAAIgNAAIAFAAIgFAAIAHgBIgCAAIgNAAIABAAIAUgBIAHAAIAEAAIgBAAIgCAAIAbgCIgFAAIAFAAIAHgBIACAAIgCAAIgHABIgbACIgHAAIgHAAQAhgBAfgFIgKABIALgBIgBAAIACAAIgQADIAQgDIAHAAIgHAAIAEgBIAPgCIgCABIgCAAIgIACIgLABIALgBIAFgBIgkAGIgPAAIgBAAIABAAIAPAAIgQABIAFAAIAFAAIAHAAIgHAAIgFAAIgFAAIAQgBIAHgBIAJAAIgJAAIgHABIAkgGIgFABIAIgCIACAAIAagGIAXgGIANgDIgNADIALgDIgLADIgXAGIgXAFIABgBIgRADIgFABIABAAIgCAAIABAAIgLABIAKgBQgfAFghABIgbgCIAPgDQg+gDg5gPQAzAPA1AGIgFABIgMgBIgCAAIACAAIAMABIgCAAIgBAAIgJgBIAJABIgCABIgLgBIgOgBIACAAIAGABIgGgBIAHABIgBAAIAHABIgGgBIAFAAIAJABIgCAAIgGAAIAGAAIACAAIATABIgHAAIgFAAIgJgBIgDA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");
	this.shape_130.setTransform(266.2,211.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF980C").s().p("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");
	this.shape_131.setTransform(270.5,211.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("rgba(201,121,40,0.788)").ss(0.1,1,1).p("AhVpnQAIgFAIgFQAqgXArgRQBDgaBMgGQCugPCPBVQARAKAPAMQANAKAGAFQANAKALALQCtCaALDpQACA5gHA2QgNBWgpBNQgCAEgCAEQglBAg2A4QgFAFgEAEQgQApgWAmQgxBShPBFQhjBVh3AmQhcAchmAAQgCAAgBAAQgCAAgCAAQgBAAgBAAQhOgBhHgRQgRABgSAAQjcgBigicQgtgsghgxQgwhIgShSQgNg9AChDIAAAAQAChQAXhHQALgjAQghQAphTBHhFQAXgWAZgTQAdgpAlglQARgRATgRQCLh3CygZQAAAAAAAAQADgBAEgCQAFgDAGgCQBZgnBqgDQDXgGCaCSQAcAbAYAeQAAAAAAAAQATAXAPAZQA4BYANBtQAEAcAAAeQAAAHAAAHQAAACAAACIgkC+QgBADgCACQgTAvgeArIAAAAQgGAdgJAaQgFAMgFAMQgRAqgZAlQgMAJgNAIIgNAIQgCABgCABIgBAAIAAAAQgBABAAAAQgCABgBABQAAAAAAAAQgEACgDACIgUAKQgBAAgBABQgTAYgXAWQgUAVgWASIgDABQgEABgDABQgJAIgJAHQgCAEgCAEQgEAFgDAGIAAAAQgDAEgCAEIAAAAQgCADgCADIAAABQgDAEgDAEQgMAGgLAFQgMAFgNAFQhJAchTAFQgMABgMAAQgLABgLgBQgDAAgEAAQgDAAgEAAQAAAAgBAAQAAAAgBAAQgDgBgCAAQgCAAgCAAAIZnHIAFAFQCkCbgCDcQgBBYgbBPQgoBzhfBeQgDADgEAEQg/A8hJAkQgNAHgOAGIAAAAIAAAAQgFAEgEADIhHA0QgIAFgIAEQgKAFgJAFIgZAIQgBAAgBABQgEACgFACQgqARgtAJQgBAAAAAAQgBAAAAAAQgBAAgBAAQgQAEgRACQgEAAgEABQgPADgOABQgJAAgJAAQgBAAgBAAQgBAAgBAAQgEABgFgBQgCABgBABIgBAAIAAAAQgBAAgCAAQAAAAgBAAQgBAAAAAAIgBAAQgKAAgJAAQgCABgDAAIgBAAQgDAAgEAAIAAAAQgDAAgCAAQgEAAgEgBQAAAAgBAAQgEAAgEAAQgFAAgFAAQgUAAgTgCIAAAAQgCABgCAAQgCAAgCABQgCAAgCAAQgYgCgXgEIhMgSIhpgyQgxgggtgsQgFgFgEgFQhzh7gWijIgJgUQgBgJgBgJQAAAAAAAAQgBgGAAgHQAAgBAAgBQAAgFAAgFIAAgQQAAgbADgcQADgbAFgbQAgiSBwhvQATgSATgQQAEgEAEgEIAXgVQAJgDAJgEQAKgDAJgDIAAAAQABAAABgBQACgBACgBQAVgMAVgLIAAAAQACgDADgDQADgEACgDQAJgBAIgBQAdgLAegHQACAAABAAQACgBABAAQABAAACAAQACgBADgBQABAAACAAQABAAABAAQABgBABAAQAcgFAagCIAAAAQANgBAMgBQABAAACAAQAMgBANAAQAJAAAKAAQAIAAAIAAQAGAAAFAAQAJAAALABQAAAAAAAAQAPACAOABQATABAMAAQARABAQACQACAAADABQAOACAOACQCSAaByBvQACADADADQACACADACQAFAGAGAGIARATQAFAHAFAGQAHAIAGAJIBECDQADAJADAKQAPAyAEA2QACAUAAAVQAAAMgBANQgBAUgCAUQgHAOgIANIAAAAQgFAIgEAIIAAAAQgBACAAABQgHAjgMAhQgGAIgHAHQgHAHgGAGQgTAsgdApQgKAOgLAOQgCADgCADQgHADgGADQgQATgSATQgWAYgYAUQgFABgFACIgDAAQgDAGgDAGQgjAbglAUQgNAHgOAFQgrAPgvAHQAAAAgBAAQgBAAgBABQgGABgFAAIgMABQgBABgBAAQgFAAgEAAQgFABgEAAQgBAAAAAAQgEAAgDAAQgBAAAAAAQgEABgFAAQgJAAgKAAQgjABgigEQgFACgEABQgDABgDAAIgBAAQgCABgCAAQgEABgEABQAAAAgBAAIAAAAQgBAAAAAAQgFABgEABAIVh6QAJAPAHAPQAMAxACA0QAAALAAALQAAAHAAAHQAAAJgBAIQgGANgGANQgFApgLAoQgBAEgBAEQgZBNgxBDQgaAkghAhQgMAMgMALIgBABQgBABgCACQAAAAAAAAQgDABgDABIgJAEQgCABgBABIhFAzQgDABgCACQgDABgDACIgSAKQgLAFgMAFQAAABgBAAIgzAQQgXAJgYAGAIEiQIAaCNQAAACAAABQABADAAAFQAAAEAAAEQAAADAAADQAAACAAACQAAABAAACIgGBMQgBAFgBAFQgHAngMAlQAAAAAAAAIAAABQgCAFgCAFIgfBDIgdAvQgGAIgFAHIgBAAQgTAagYAYQgBACgCABQgBACgCABIAAABQgCACgCACIgFAFQgKALgLAKQgCACgBABQgBABgBABQgEABgDABIAAAAIAAABQgFABgFACIgQAFQgQAOgQAMQgNAJgNAIQgBABgCABIgoAWQgEACgEACAHui0QABADABADQAjBOAFBeQAAAJAAAKQAAACAAADQAAA5gKA0AJXA5QABAAAAAAQADARACARQgIBJgZBBQgqArgvAgQgVAhgbAdQgMAOgOAOQgFAFgGAFQg8A3hFAjQgVAdgaAbQgQARgSAPQgxApg6AZQh2A4iOgEQhkgDhYgiQh1gshbheQgCgCgDgDQiEiNgLi+QgCgfACgfQAAgCAAgCQABgfAEgeQAViYBeh7QAJgKAJgLQARgUASgUQBFhFBRgqQAXgMAYgKQAYgVAagSQAGgDAFgEIAAAAQABgBAAAAQAEgFAEgFIAagdQAAgBABgBQADgDAEgEQACgCACgCQABgBABgBQABgBABgBQAEgEAEgDIBwhRQAJgFAJgEQADgBAEgCAJKgBQAHAYAFAbQABADAAADIAAABQgTAvgeAqQgCADgCADAJaAzQgBADgCADAJKgBQgKAggOAfQgCAsgKAoQgCADgCADIgMARIgNAQQgDADgCADQAAAAAAAAQgDADgCADIgFAFIg7B0QgFAIgGAIQAAAAAAAAIAAAAQgUAagWAZQgBABgCABACCpYQCZAgB7BpQCuCXAZDVQgFAzgOAvAIlhcQAXArAOAwAIZBpQgBAFgBAFQgHAogMAkIAAABQgDACgCADAkjnGQAEgFAEgFAkknFQABgBACgBQAIgFAGgEQAXgNAQgIQADgEAEgEIACgDQAIAAAIAAIAAAAQABgBAAAAIABAAQAEgCAEgCQASgHATgGQAEgCAFgBQAHgCAIgCQAEgBAFgBQALgDAMgDIAAAAQAIgBAHgCQAFgBAFAAQAHgBAIgBQATgCAOgBQAFAAAFAAQAGgBAGAAQAEAAAFAAQAkgBAiADQAFAAAFABQAIABAHABQAFABAEAAQCSAZBwBoQAHAHAIAHQABABACACQABACAAAAQABABABABQAVAZASAZQAPAVAMAWQAHAJAHAJAkjnGQABAAABgBQAPgCAQgCIALgNQAFgHAGgGIAAAAQACgBACgBQAEgCAFgCIAHgDQADgBACgBQABgBAAAAAkjnGIAAAAAkknFQAAgBABAAAlMmLIAAAAQACgBACgCQAXgQAZgPQAAAAABgBQABAAABgBQANgCANgCQAAAAAAgBQAWgLAXgIQAAAAABgBQAJgEAKgDQAJAAAKAAIAAAAQACAAACAAQAOgFAOgEQACgBABAAQABAAABgBQAcgGAbgFAkdmlIAFgIQACgBABgBQAXgMAYgLIATgHQADgBADgBIAAAAQAEAAADAAQAEAAAFAAQABAAACAAIBOgVQAGgBAFgBQABAAABAAQABAAABgBIAAAAQADAAACAAQABAAABAAQACABADAAIABAAQACABADAAIAAAAQAPgCAQgBQAAAAABAAQAJAAAJAAQAIABAIAAQAHAAAHgBIAAAAQADAAACABQAEAAADAAIAGABIAFABQADAAADAAQABAAAAAAQABABABAAQADAAADAAQABABABAAIAAAAQACAAABAAIABABQALACAKADQAjAIAhAOQAFACAFACQAXAJAWAMIAFABQAOAIANAJQA0AgAuAtQADADADADQAAABABAAQAGAEAFADQABABAAAAQABAAABABQABABACABQABABABAAQAHAFAGAEQAEADAEADQACACACABIAAAAQAQANAQANQAMAQALARQBMB0ACCSQAAAXgCAWQAAAEgBAEQAAAEAAADIgMBIQgBADAAADQgBACAAABIgIAbQgBADgBAEQgGARgHARQgDAJgEAIQgEADgDADIgIAHQgLAJgMAJQgFAEgGAEIAAAAQgCACgBACIgHAMQgPAXgRAWQgKAMgKALQgDABgCABQgEABgEABQgGAIgHAHQgCAEgCAEQgBADgBADQAAABgBABQgBADgCAEIAAAAQAAACgBABIAAAAQgFAMgGALQgLADgMADIAAAAQgCACgCABIgDACQgCACgCABQgKAIgLAIQg8AnhBAUQgCAAgBABQgBAAgCAAQgBABgBAAQgDABgEABAkpmqQACAAABgBQADAAAEgBQAEgBAEgBQABgCACgCQABgCABgCIACgCQACgDACgDIAigOQADgBACgBQADgBADgBIAogMQACgBACgCQALgJAKgIQAaACAZAEAk8mjQAAgBAAAAQADgEADgFQAJgMAJgMAk9mjIABAAQABgBABgBQAJgCAIgDQAMgGALgGQAegOAfgLQACAAACAAIAAAAQACAAACAAQADgBADgBIAGgCQAJgDAJgDQABAAABgBQAEgBADgBQAMgDANgDQAVgEAXgDIABAAQACAAABgBQABAAAAAAQAVgBAVAAQAAAAAAAAQACAAABAAQAGgBAGAAQAAAAAAAAQADAAACgBIALAAQAQgBAQAAQAQAAAPABQAHAAAHABQAKABAKABQAQADAQADQBFANA+AgQAqAVAmAeQAEADAEADQAbAUAZAYQBHBFAmBSQABACABADQABABABABQAKANAJANIAAABQACAEABAFAk9mjQAAAAABgBQADgEADgFQAAAAAAAAQAXgNAYgKQALgFALgEQAGAAAGgBIABAAQAHAAAIgBQALgDAMgEQADgDAEgDQApgKArgDQABAAABAAQADABAEAAIAAAAQABABABAAQALgBAMgBQAEAAADgBQAEAAAEgBQAGAAAGABQABAAABAAQAHgBAHAAQAJAAAIABQAAAAABAAQABAAABAAQABAAABgBQAFAAAHgBAkvmKIAAAAQAGgKAHgKQACgDADgEAlHmUQACgDACgDIABAAQAMgIANgIAlHmUIABAAQACgDACgDQADgFADgEAkymFQACgCABgDQAGgKAHgKQACgDADgEAkymFQACgCABgDQAjgZAmgTIAAAAQADgCADgBQADgBACgBQACgBACgBIAqgQQADgBADgBQACgBACAAIAfgJQAFgCAGgBQAIgCAJgDQABAAACAAQAKgDAKgCAlWl5QAXgTAZgPQACgBACgCIAAAAQATgLAUgKQAKgCALgBQAEgBADAAQAEAAAEgBIAAAAQAHgDAGgDIAngRQANABAMABIABAAQABAAABAAIABAAQABAAABAAIAAAAQBTAIBJAfIAAAAQAjACAhAEQAxAgAsAsQBXBXAoBrQAXBCAGBLQAAAAAAAAQACAHACAHIARBuQAAADAAADQABAMAAAMQABAcgBAbQgEA5gMA0QgCAIgCAHIAAABQghAQgkALQAAAAgBAAQgOAFgPAEQgDAEgDADIAAABQgTAIgUAGQgHAIgIAHQAAABgBAAQgeAeghAYQgqgDgogJIhQgZQgDgBgDgBQgBAAgBgBIgBAAQhbgnhNhLQhjhhgnh7QgghEgKhNQgDgbgBgdIAAAAQgBhOAShHIACgFQAAgCABgDIAAAAQAVgbAagaQACgCADgDQABgBABgBQAEgDAFgCQAOgJAPgHQBxg4CGgIQATgBATAAQACAAABAAIAQABQAFAAAGAAQAiACAiAEIAAAAQBxARBhA2QAJAFAJAGQAEACAEADQAAAAABAAQAgAiAaAjQAGAJAGAKQAqBCATBMQAQA/gBBEQAAALAAAKQgBAEAAADQAAACAAACQAAAGgBAFQAAABAAAAAlDmaQADgFADgEAlGmUQATgNAUgLQAFgDAGgDIA6gaQAEgBAFgCQAJgDAJgDQAEgBAEgBIAIgCQAMgDAMgDIAHgBQAIgCAIgBIAmgFAlMmLQADgEACgFAlPmeQAMgIANgHQAIgMAKgMAlMmLQADgEADgFAn8i4IAMgfQACgFADgFQAAgCABgBQALgYAPgYQANgWAQgVQAAAAABgBQAVgbAZgaIABgBQACgCACgCQAXgUAZgQAoAitQABgFADgGAoAitQACgCABgDQANgQAOgQQABgDACgCQALgUANgUQAjgyAngmQATgSATgQQABAAAAAAQAFgJAFgJAoAitIAAAAQACgFACgGAoGicQABgBAAgCQACgHADgHAoKiLQACgJACgIQADgIADgJAoKiLQACgKADgKQAEgJAEgKQAUgsAdgqQAIgLAIgLQANgPANgPQAJgLAKgKQAZgZAZgUQAIgHAJgGAobATQAAgRACgQQAFhBAUg7QAHgWAKgVQAGgPAHgOQAXgaAbgYQAAAAAAgBQAGgFAGgFQAKgIAJgIQAQgVATgTQAAAAAAAAQAFgFAGgFQAMgMANgLQAHgHAIgGQAAAAABgBQADgDAEgDQABgBACgBQABgBABgBQACgBABgBIAzgjQAJgGAJgFQAHgEAIgEQAGgDAHgDAoLifQAFgHAGgHAoLifQANgiATggQAKgSAMgSQAPgWASgWQAQgTASgSQAkgjAngbAoZiJQAMglASgiQAUglAXgfQAagkAdgdQApgoAtgdAoZiJQAHgLAHgLArFhaQAMg8Abg2QAohOBEhDQAygvA4ghQBbg0BsgMQAPgCAPgBQAGgGAFgGQA4g7BAgpQArgGAvAAQBGAABCAOIAAAAQAQgBAQAAQBQgBBIATQACABACABQACAAACABQADABADAAQADABADABQACABACABQACAAABABQACABACAAQABABACAAQADABACABQACABACAAQADACADABQACABADABQACABACAAQABABACABICTBdQAEAEAFAEQADACADADApJjqQAXg+Aog3QBnhQCAgXAlEliIAKgUIAIgPAlulHQAFgLAFgLQAHgOAHgOAlkldQAAAAAAAAQAagYAbgVAlulHQAEgLAGgLQAGgOAHgOQAFgJAGgJAmpkOIAUgbQAEgFAFgFQAKgLALgMQAGgGAGgHQADgDAEgDAlIlcIAAAAQACgDACgDAlQlLQABgBABgCQACgBADgCQAdgdAggXQAGgEAGgFQAngaAlgSQABAAABgBIAmgQQADgBACgBQACgBADAAIAEgCQABAAACgBQACAAABgBQAIgCAHgCQABAAACgBQACAAABgBIACAAQAEgBADgBQAQgEAQgDQACABABAAIABAAQAigEAigBQAHAAAGAAQADAAADAAQAAABABgBQABABABAAQABAAAAAAQABAAAAAAQACAAADAAAlPlOIABAAQADgHADgHQAkghAngZQALgNALgMQAIgFAIgEQANgBANgBQAFAAAEAAQACAAACAAQAMAAALAAQA8ACAxASQCMArBvB9QAAABABABQABACABABQABABABABQACACACACQABACABABQABAAAAABIBwDIQABADABACQAAABAAAAQAIAvAAAxQAAAFgBAFQgRCthtB9IAAAAQgIACgHABIhDAGQgCAAgDAAQi+AEiQhzQgDgCgCgCQhUhJgxhaQgIgOgHgOIAAgBQgBgDgBgEIgShpQgBgFAAgFQgBgLAAgLIAAgBQAFigBWh+QAIgLAJgMQAkgbAlgVQAJgEAIgFQAEgCAEgCIAmgRQADgBADgBQABAAABAAIABgBQAMgEANgEQABAAABgBQAHgBAHgCIAhgGAlQlLQABgBAAgCQAEgHADgHQACgDACgDAlTlEIAAAAQACgDABgDAlTlEQABgDACgDQAAgBAAAAAlTlEQADgDADgDQABAAAAgBQAGgGAGgFQAXgVAXgSQADgEADgEQAHgJAIgIQAfgVAhgPQABAAACgBQABAAABAAQAKgFALgEIATgHQADgBADgBQASgGARgEQACAAACgBQATgFATgEQABAAACAAQAYgEAZgCQALABAMABQAbADAZAGQAlAIAjANQAVAJATAKIAPAGQARAIAPAKQAxAfArAsQABABACACQCTCXgCDUQACB9gzBpQgFAFgFAEQgEADgEADIAAAAQgZAVgaASQgjAYgmATIAAAAAljlBQAGgGAGgGQAIgIAHgHAl6knQADgGACgHIAAAAQAJgGAJgHQAKgGAKgHAl6knIABAAQAKgNAMgNAl5knQACgGACgHQAEgKADgJAl1k0QADgJAEgKAlXk5QACgFACgGAlXk5QACgGACgFAmDl2QABgCACgCQAAAAABAAQADgEAEgEAmtlFIAFgFQADgDADgEQACgCADgCQAtguAzggAmAkQQAAgCABgDQADgJADgJAmylAQACgCADgDAmzk/QADgDADgDAmjENQg4hqgCiBIAAgMQABhYAchOQAEgMAFgMQAUg0AhgvQAVgdAagcAm1j9QADgEACgDQADgFAEgFAm1j9QADgEACgEQADgEAEgFAnFjOIAQgvAmzD+QgyhlgBh6IAAAAQAAggAEggQAHg+AVg6QAahCAtg6QACgJADgJAmRkfQAOgLAOgKAloBJQgmhRAJhmQAAgEABgFQAAgFAAgFQABgCAAgDQAAgEABgFIAriqAnFjOQAWgrAegmAAFnoQAEAAADAAQABAAAAAAQACAAACAAQADAAADgBQAAAAABAAQAEAAAEAAQAEAAAFAAQATADATAEQABAAAAAAQAwALAtATQAFACAFACQAHAEAHADQAYAMAYAPQAFAEAGAEQAoAcAlAlQALAKAJAJQAAABABAAQAKAMAKALAgUnoQADgBADAAQABAAABAAQAEgBADAAIABAAIAAAAQABAAAAAAQACAAABAAQAMAAALABAgUnoQADgBADAAIAAAAQAKAAAJABAgUnqQAEAAADAAIAIAAAgSnqQACAAADAAAgSnqQADABADAAQAJAAAIABAgUnqQABAAABAAAgCnqQABAAABAAQACAAADAAQASAAASABQAuAEAqAKQACABABAAQAHACAHABIBbAeQABABABAAQABAAABABQA5AaA0AoQAGAFAGAFQAHAGAHAHQAKAIAJAJQAtAtAfAxQALAaAIAaQACAEACADAgEnqQABAAABAAAgFnqQABAAACAAAgDnqQAHABAIABAg7npQALgBAMAAQAFAAAFABQAAAAABAAQACAAADgBAgjnsQACAAADgBAgsnoQAJgBAJAAAhFnoQACAAACAAIAGgBQABAAAAgBQAKAAAKAAAhEnoQABAAACAAAhGnoQABAAABAAQALAAANAAAhGnoQABAAAAAAIABAAAhBnpQADAAADAAAhZnqIABAAQANgCANAAQAEAAAEgBQAJAAAKABAg9nhQASgEASgDIAFAAAANmmQAGAAAFAAQBaAmBLBIQAjAiAcAlQA/BjASBsQAEAOAEAPQACAHACAHAgjnsQAPAAAPACAgknqQAIAAAIAAAgZnpQAFAAAGAAAA8njQABAAABAAQAJABAJAAQAbADAZAFQAiAJAfANQAQAGAQAIQBIAlA/A9QAOAOAJAKQAnArAcAvQAUAVASAXQAQAzAFA4QABAFAAAFQABAFABAFQAAAFAAAEQAAABAAAAQAAAKABALQAAASgBASQAAACAAADQAAAEAAAFQAAAFgBAFQgCAegGAcQgBAFgBAFQgBAFgBAFQAAACgBADQgCAKgDAKQAAACgBACQgBAFgCAFQgBAEgBADQAAAAAAABQgBABAAAAQAAABAAABAAlnlQABABAAAAQAMAAAMABQA4AJA0AVQAGADAHACQBSAkBHA/QAHAGAGAGQAUAVARATQAKANAKAMQAaAWAWAYQAJAPAIAQQAiBHALBOQAFAngBAnQAAA6gMA1IgDAOQgBAEgBAEQgBADgBADIgCAFQgIAcgLAaIgNAMQgDADgEAEQgEADgDADAAjnlQABAAABAAQAMABALABQAKAAAJABQAaADAYAEQAJACAIACAAcnlQAEAAADAAAAtnjQACAAACABIADABIAOAFIBwAoQAnAVAkAcQAZATAXAXIABAAQADADADADQBxBvAeCTQAKA1gBA5QAABmgkBYQgHARgIARIgIAQQgCADgBACQgBADgCACIgSAfQAAAAAAABIgBAAQgQAKgRAIQgGAWgHAVQgBAEgCADQgCABgDABQgHAIgIAIQgRAQgRAPQgPANgPALIAAAAQgoAGgqAAQgBAAgBAAQAAAAgBAAQgTAAgTgBQhAAuhIAYIAAAAQgTAAgSgBQgCgBgDAAQgVgCgVgDQgYgEgXgGQgPgDgPgFIgVgLIgagMIgqgUIhFg0QgFgFgFgFQhLhKgmhbQgnhcAAhsQACi5B1iOAAknkQAFAAAEABAAYnpQADABAEAAQAPACAOADAAhnlQAKACAJACQAJACAJACQBEAPA8AhIAVAIQAHAEAGAEQANAIAMAIQAlAbAiAjQAHAHAHAIQBvB3AWCbQAFAngBAnQAAACAAACQAAAFAAAGQAAABAAACIgGAaQAAABAAAAIAAAAQAAABAAABIgCAJIgmCWQgCAFgCAEIgBABQgGAFgGAGQgKAVgMAUIgBAAQgYAoghAkQgEACgFABQgCAGgCAGQgDADgDADQgcAdgfAYIgBAAQgLAJgMAIQgBAAgBABQgWAPgXAMIgDABQgDABgDACQgTAJgVAIAAsntQARAAARAAQBkAEBWApQAMAGAMAHQBDAlA5A6QADAEADADQBlBqAeCHAg2ngQBNAUBFAsQBwAQBhA3AANnoQAMABAMACAAMnsQAQgBAQAAAAXnmQAFABAFAAAhnpfQADAAAEgBQAFgEAGgDAh5pWQAJgFAJgEAhzoNQADgCAEgCQADgCAEgCIDnhDAhzoNQAEgCADgCQADgCAEgCAjYnuQADgBACgBQAMgBAMAAQAPABAOAAIArgdAjTnNQADgBADgBQADgBADgBAjanMQAFgBAEgCQAJgDAIgCQAFgCAEgBAjGnPQADgCACgCQABgBAAAAIABgBQAAAAABgBQAMgDAMgDQAEgBAFgBIAGgBAjOnHQAEgEAEgEAjsnlQADgEAEgEAjqnMQADgBADgBQACgBADgBAj3nYQAFgHAGgGAj4mlQAIgFAJgFQABgBAAAAQAEgDADgEQACgCACgCQABgBABgBQAFgFAGgFAkQm4QACgDACgDQACgDADgDAhcnqQACAAABAAAhdnqQACAAACAAAhjnpQADAAADgBAhhnmQACAAACgBAhgnpQACAAACgBAhfnmQAEAAAFgBQAIAAAJgBAhpnWQABAAABgBIABAAAhhnYQAFgBAEgBAhrnqQAEAAAEABAhsnkQAGgBAHgBAiQngQACAAACgBQAGgBAGgBAitnNQADgBADgBQACgBACAAAiKnLQADAAADgCQABAAABAAAiMnLQADgBADgBQACgBACAAAiQnLQADgBAEgBQAQgFAQgEAitnaQAIgCAIgCAiMnhQAVgDAWgCAhanoQANgBAMAAAhQnmQAFgBAFgBAhLnlQAHACAHACAIKnUQAEAEAFAEQADADADACAG0kuQAFAGAEAGQABAAAAABQAOAZALAZIAmBKQACAGACAFQACAFABAFAH9ilQACAGACAGQALAPAJAQAF2kqQAcAiAWAlQA2BbAKBwQABAHAAA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LAKQgEADgDACQgFACgFACAF2GeQgCABgBACQgDABgDABAFdGpIAAABQgfAZgiAUQgEACgEADIg4AaIgEACQgBABgBAAQgBAAAAAAQgBABAAAAIgeAMQgBABgBAAAFkGkQgDADgEACQgfAagiAUQgEACgEADAFzGhQgEAEgFADAFBGYQgEADgEADQgFAEgEADIgiAYQgCACgCABQAAAAgBAAQAAABAAAAIgKAGQgFADgFACQgFAEgGADQgHADgGADIgiAQQgBAAgCABQgDABgDABIhmAcAFIGRIgHAHQgEADgEADQgFAEgEADAD3FxQgFACgEABQgTAIgUAHQgbAJgcAHQjFgFiaiBAD3FxQgFACgEACQgLAOgLANQgRAUgTATQgKAKgLAJQgnAkgsAaAEWG+QgGABgHABAEOG9QgCACgCABAEBHCQgHABgHABAD/HHQgGADgFADQgcATgdAPAFAGzQgDABgDABIgBAAQgEACgFABAEcHcQgDABgCACQgDACgDABAEbG6QgCACgDACACQGTQgGABgHACADVH5IgIADQgFACgEABQgBABgBAAIgBAAQgrAPgvAHADeH1QgBABgBAAAC5HpQAAABgBAAQg+AihHAOAC7HpQgBAAgBAAQgDACgEABADNH8QgGACgFACACRICQgDABgEABQgBABgCAAQgbAKgcAGAC2IGQgaAKgbAGQgTAFgUADAC4HwQgTAKgUAIQglAPgnAIAETHmQgKAFgJAEAEJHBQg4AphAAYADzHEQgcAVgeAQAEjHcQgIAFgIAFAFMGOQgCACgCABADBIAQguAUgzAIACDIWQgUAFgUADAERFkIgaANAlmBRQgBgEgBgEAoohqQACgHACgGIAAAAQAFgJAGgJAo2hXQAIgQAKgQQAghwBShZApWgGIAahFQADgFADgGQAAAAAAgBAoohqQACgHACgGQAghwBRhYApZAEQAAgDABgCQABgCABgDApYgBQABgCABgDApYgBIAAAAAo1BlQgBgJgBgJQgDgeAAgfIASiAAo+BRQgBgJgBgJQgOgggKggAnrDFQgBgFgCgFAn8C0QgBgEgCgEIAAAAQgBgEgCgFAnnDPQgCgFgCgFAoqB8IgLgXAlFHZQg2ghgvgwIgCgFIgOgdQhYhogYiCAkgIjQgEgCgEgCQgDgBgDgC");
	this.shape_132.setTransform(270.8,211.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF9900").s().p("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");
	this.shape_133.setTransform(265.1,211.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF9710").s().p("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");
	this.shape_134.setTransform(270.8,211.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("rgba(188,113,38,0.737)").ss(0.1,1,1).p("AgfpuQAIgGAIgEQAngYApgRQA+gaBIgIQCjgTCLBMQAQAKAPALQANAKAFAEQAMAKAMAJQCoCSANDfQADA3gGA0QgLBXgsBNQgBACgBACQgjA8gxA1QgSATgTAQQgOAtgVApQg0BihfBOQgCABgBABQgBABgBABQgBABgBABQg9AwhDAfQgxAXg1AOQhOAUhVAAQgCAAgBAAQgCAAgDAAQgCAAgBAAQgCAAgBAAQg+gCg6gLIgpgKQgEgBgCgBQgDgBgCAAIg/gXIgzgZQgEgCgEgCIAAAAQgFgCgFgEIhFguQgHgGgHgGQiriNgejHQAAAAAAgBQAJg+AYg3QAKgaANgYQACgEACgDQAaiTBwhuQAWgVAYgSQAAgBAAAAQAKgHAKgHQABgBABgBQAAAAABgBQABgBABAAQABgBAAAAQABgBABAAQABgBABAAQALgIALgGQABgBABAAQAKgGAKgFIALgGQAEgBADgCIAAAAQACgCABgCQAEAAAEgBIAAAAQAHAAAIAAIAAAAQAFAAAGAAQACAAACAAQAAAAAAgBQACgDADgEQACgDACgDQAEgCADgBQAKgDALgCQABAAABgBQADgBAEAAQATgEASgDQACgBABgBIABgBQADABAEABIAAAAQAEAAAEABIABAAQACABADAAQABAAABAAQACAAACgBQADAAACgBQAFAAAEgBQATgBASAAQABAAABAAQABAAACAAQAGAAAGAAQABAAAAAAQALgBAKAAQACAAABAAQALABAJAAQAGAAAEAAQABAAABAAQANAAAOABQACABADAAQABAAABAAQACAAACAAQArAEApALQAHACAHACIAlAMQADACAEABQAOAHAPAHQBDAiA7A6QAOANAIAJQAqAvAdA0QAEAHAEAIQAeA/AKBFQAAAFAAAEQABASgBAQQAAACAAADQAAAEAAAFQAAAFAAAEQgDAcgFAcQAAAEgBAFQgBAEgBAFQAAACgBADQgCAJgCAJQgBADgBACQgBAFgBAEQgBAFgCAEQAAAAAAABQgBADgBAEQgBAAAAABQAAAAAAAAQgBADgBACQgFAFgFAGQgMAMgMALQgHAHgHAGQgEADgDADIgBAAQgDADgDADQgDACgCABIAAABQgBAAgBABIAAAAIAAAAQgHAQgIAQQgIAEgIAEQgSAigYAeIAAABQgQADgR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ARgHARgGQAFgBAEgBQAHgCAHgCQAEgBAFgCQASgEASgEQAEgBAFAAQADgBADAAIAAAAQAEgBAEAAQASgDANgBQAFAAAEAAQAGgBAFAAQAFAAAEAAQAigBAgACQAFAAAEABQAHABAHABQAFAAAEABQCJAVBpBfQAHAGAHAHQABABACACQAAAAABABQABABABABQABABABABQAAABABABQABABABABQABACACACQAAABABAAQABABABABQAAABABABQADAEADAEQABABACACQAAABABAAQAAABABABQAAABABABQAKANAJAOQACABABACIABABQBoBrAcCLQAQAdANAfQALAZAHAagAJGArQgCADgCADACWpIQCFAgBtBaQCqCNAfDGQgKBAgXA5AITg+QAKAxAAA1QgHAMgGAMQgDAlgHAkQgEATgGASQgSA2gfAyIgBAAQgfAygsAtQgEADgEAEQgJADgJADQgBABgCAAQAAAAAAAAQgPAFgOADQgmAjgoAaQgEADgEACQgSALgSAIQgJAEgJADQgrAOgvAGQgVAGgXADQgEABgEAAQgJAAgJABQgFAAgEAAIgBAAQAAAAgBAAQgGAAgFgBIgBAAQAAAAgBAAQgBABAAAAQgBAAgBAAQgBAAAAAAIAAAAIAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQgGABgFAAArVhTIAfhZQADgGADgGQAlhKBAg+QA1gyA9ggQAdgfAjgdQCQh3C6gSQAIgBAJgBIAAAAQADgCADgCIASgNQAEgCADgCQBNggBbgDQDKgHCQCGQAjAgAaAjAlDl3QANgJAMgHQADgCADgBIAGgEQAEgBADgCIAAAAQAEgCADgBIADgCIAPgHQADgBADgBQACgBADgBIAPgGQAVgHAWgGIAUgEQAGgBAGgBIAAAAIAAgBQALgBALgCAkcmJQACgCABgDQABgBABgCIAAAAQAEgCADgBAkdmFQAAgCACgCQAYgNAagJIAAAAIAAgBQAbgKAdgHQABAAAAAAQACAAABgBIAHgCQAEgBAEgBQABgBABgBIABAAQABgBABgBIAAgBIAAAAQACgBACgCQABgBABgBAktmcQAGgEAFgDQASgLAKgGQAAgBABAAQAEgCAEgDIAAAAQAAAAABgBQACgCABgDIACgCQACgEADgDIAAAAQAEgFADgFIAYgcQAEgDADgEQA5g8BEglQAXgNAZgKAoXlCQABgCACgDIAvg9QAGgHAGgHQBog3B/AAQADgFAEgFAoXlCIAAAAQABgCACgDApRjEQABgFACgFQAUg9Ajg3QBphLCBgPQAPgBAPgBQAIgOAKgOQAPgJALgGQACgBABAAIABgBQAFgCAEgCQAGgCAHgDQADgCAEgCIAAAAQAFgFAEgGIAcghQACgBABgBQADgDACgDIBLhEQAGgFAGgEQADgCADgCApRjEQABgFACgFQAUg9Ajg3ArcBUQAXiLBXhwQAPgUARgTIAAAAQAJgKAKgKQBChCBNgpQAjgUAngNQAEgBAEgBQAJgEALgCQABgBACAAQAIgCAHgCQAMgHAMgHAnsiNQABgBAAAAQAUgxAfgtQAHgLAIgKQAMgOANgPQAIgJAKgKQAXgXAXgTQAKgIAKgHQANgKANgIIAAgBQAAAAABgBIAAAAQABAAABAAQAYgPAagMIAAAAQABgCACgCQAAgBABgBIAAAAQACAAACAAIAAAAQADAAADAAQAEgCADgBQAJgEAIgDQAIgDAIgDQACAAABgBQACAAABgBArXhGQAKgfAOgcQAnhNBEhBQAdgdAggWAkhl+QABgDACgDQAZgOAbgLIAAAAQACgBADgBQAYgKAZgHQAEgBAFgBIAJgCIAAAAQABAAACAAIAAgBQAAAAABgBQAIgCAIgBQAIgCAJgCQACABADABIAAAAQABAAABAAIABAAQABABACAAQAGgBAHgBQAEgBAFgBIAFAAQACgBADAAQABAAABAAQALgBAKAAQAHAAAHAAQAFAAAFAAIAAAAQAFAAAEAAQABAAAAAAQAFAAAFgBQAEAAAFAAQAEAAACABQACgBACAAQAGgBAFAAQAJABAJABQABAAACAAQAEABAEAAQAAAAABAAQATAAAOABQAPABAPABQACAAACABQANABANADQCJAXBqBoQADACADADQABABABABQAQAQAPASIAAAAQANAYAKAaQABABABABQAAABABABQABABAAABQABABAAAAQABABAAABQABABAAABQABABABABIAkBMQADAGACAGQACAHACAIIALAuQAGAiABAkQAAAIAAAJQAAAggEAeQgEAjgJAhQgTBFgnA8IAAABQgcArgnAmQgJAJgKAJQgOAEgPAEIAAAAQgGABgGACQgiAhgmAZQgBADgBACQgCADgBACQgQAIgRAGQgCABgCABQgBABgBAAQgjAQglAJQgSAFgUADQgjAGglABQgBAAgBAAQgBAAgBAAQgHAAgGAAQgFAAgEgBIAAAAQgBABAAAAQhSArhfAJIgBAAQgcADgeAAQjQgBiXiSQgrgqgggvQgpg8gRhEQgRhBADhIIAAgBQADhNAXhEQAAgBABAAQABgHABgGAkhl+QABgDACgDAkil9QABAAAAgBAkrl8QAFgBAFgBAk0lTIAAAAQACgGADgGAk8k9QAGgFAFgEQAHgHAHgGQAOgMAOgKQAEgJAFgJIAAAAQABgCABgCIADgEQACgEACgEIAEgHQACgEACgDQABgCACgCQAAgBABgBAk0lTQACgGADgGIAFgMQAKgHAKgGIAKgGQADgCAEgCQACgBADgCIAFgDQADgBADgCQADgCAEgBQACgCACgBIAagLQADgBADgCIAAAAQACAAABgBIADgBQANgGAOgEIABAAQACgDACgCAmiklQAWgeAbgbQABgCACgBAluliQADgDADgDQADgDADgDQAagZAbgVAmcjdQAfgwAsgrQADgDADgDQALgLAMgKAkdk3IAAAAQAEgDAEgDIAzgpQADgFADgEQAGgHAFgHQAAAAABAAIAAgBQAGgDAGgEIABAAQACABACAAQADAAADAAQACAAADAAQAFgCAFgDIAdgPQARgIASgGQALgEAMgEQADgBACAAAkdk3IAAAAQAEgDAEgDAkqkqIABgBQABgBACgCQABgBABgBQACgBACgCQABgCACgCAkykmIAEgFQABAAABgBQABgBABgBQAIgIAIgIQADgIAEgJIAJgUQABgDACgDIAAgBQAFgIAEgJIAAAAQACgBABgBIAGgDQADgCADgCQADgCADgBIATgKQAOgHAPgFQACgBADgBQAGgGAFgGQADgDACgCIAFgEQABgBACAAQAHgCAGgBIAXgDAkgktQABgFACgFAlEkgQAFgGAHgGQAAgBABgBQABgBABgBQARgQARgPIA+gsQACgBACgBIAAAAIABgBQACgDADgEQAEAAADAAQADgBADgCIAngRQADAAADABQACAAACAAQBGANBAAfQBEAiA8A5QAhAfAbAiQA9BjAPBsQAEAKADALQABALAAAMQAAABAAACIgCAaQAAAFgBAFQgOCBhEBjQgKAPgLAOIAAAAQAAABgBAAQhPAVhXAAQgGAAgGAAIAAAAQgEgCgEgCAlzkDIAkgnQADgEAEgDQAGgGAGgGIAAAAQAEgLAEgLQAagWAcgSIAAAAQACgBABgBAk3kiQACgCADgCAk3kiQACgCADgCAk3kiIAAAAQAFgCAFgDQABgBACgCAlGkZQABgDABgEQADgPAFgOAlFkgIABAAAlGkZQAAgDABgEQAEgOAFgPQADgLAFgLAlJkOQAAAAABgBQAAgDABgDIABgEQAHgFAIgEAlJkPIABAAQAIgJAJgKAlJkPQABgDABgDAlJkOIAAgBAlJkOQAJgKAJgKAktknQABgBACgCAkjklQABgEACgEAkjklQABgEACgFQASgJATgHQAAAAABAAQBSgjBegIQB4AuBhByQBNBbAlBtQAGAngBApQAAABAAABQAAABAAAAQgDB9g3BlQgGAMgHALQgDAEgDAFQgWAigbAfQgSgCgQgDQhFA/hPAgIgBAAQgCAAgCAAQgVgCgTgDQgXgDgWgFQgNgEgMgDQgFgCgFgCQgLgFgKgFQg3gfgxgwQhLhIglhZQgjhTgBhiIAAgBQAAgfADgcQAIg7ATg2QABgBAAgBIBHh3QAGgIAHgIAlPkUQAFgGAFgGAlPkUQAEgDAFgCAnTjQQAIgOAKgOQAOgVAQgTQAQgSAQgRQAqgpAugcAmiklQAJgJAJgIQAkgmApgbAmJjkQAFgJAGgIQAXgQAYgPAmJjkQAFgIAGgIQAFgIAGgHAmcjdQABgBACgBQANgLAOgKQAAgBAAAAQAGgHAFgHAnNjdIAVgmAnUjPQADgHAEgHAnTjQQADgHADgGAnUjPQAAgBABAAAnPitQABgDACgEAnTimQACgEACgDQAYgZAbgXAmGDrQgphagChqIAAgLQAChSAahJQAEgLAEgLQABgCAAgBQACgFACgEQAAgBABgBQAAgBABgBQAAgBABgBQAAgBABgBIAxhRQAEgGAFgFQANgSAQgQAnXjHQABgEACgEAnXjHQACgFACgEAknAmQgnhMALhiQAAgGABgGQABgHABgHIAdiDAlTj6QAEgGAFgGQAAgEABgEAm4kEQAKgRAMgQAlWj+QAGgJAHgIAnriOQANgQAPgPAnsiNIAVg6AhKpQQAGgFAGgEQAagCAcAAQBSAABMATQAagDAbAAQBLgBBEASQAGABAHACQACABACABQACAAACABICnBdAgVnFQABAAABAAQASABAQACQASgCASAAQAAAAAAAAQAEAAAEABQAJABAJABQARACASAEQA/ANA5AeQAAABABAAQAiASAfAXQADADAEADQAEACAEADQAZATAXAWQA/A8AkBIQADALADAKQAEAFAEAFQAcBDAFBRQAAAJAAAJQAAADAAADQAAABAAACQAAAlgFAjQgMAQgNAQIAAAAQgBAEgBAEQgDAQgFAPQgDAKgDAJIAAAAQgEAEgEADIgDACQgFAEgFAEQAAABgBAAQgFAEgFADQgZAzgnAvIgFABQgEABgEABQgDABgDABIgEABQgFAHgFAGQgSAXgWAWQgOANgNAMQgEACgDADQgBACAAACQgCAEgBAFQgCAFgCAFQgFALgEALQgRALgRAJQgLAGgLAFQgmARgqAIQgaADgcABQgHACgHABQgLAAgKgBAgVnFQATgBATAAQARAAARACAhEnDIAAAAQAMgBANgBQALAAALAAAgpnDQAGABAGAAQAHABAHAAQAEABAFABAgqnDIABAAQAKgBAKgBAhEnDQANAAANAAAg2m+QACAAACAAQAJAAAJABQAEAAADAAQABAAABAAQAFABAGAAIAAAAQAIgBAGAAQABAAABAAIAAAAQACAAABgBAhGm+QAEgBAFAAQABgBABAAQAEgBAFAAQAEgBAEgBAhMmwQACgBACAAQAbgHAdgDQACAAACgBAhJmxQAGgCAGgBAhGm+QAIAAAIAAQAJgBAKgBAhFnAIASgBAANm8QABAAACAAIADABIABAAIAEAAQABABACAAQADABADAAQAEABADABQAFABAGABIACABQAbAHAbALQAAAAABABQACAAACABAANm8QADAAAEABAACm9QABAAABAAQADAAADABQACAAABAAAACm9QAEAAAEABQADAAADAAAAEm9QAFAAAEABAAAnAQAMAAAKACAgMm+QAAgBABAAAgNm+IABAAQAIAAAGABAgZnAQAIAAAIABQAHABAGABAgMm8QAKABAJABQAJAAAKAAQAAAAABAAQADABADAAQAJACAJACAgFm/QADgBACAAAgynBQAMAAAMABAgjnAQALABALABAAznEQACAAADAAQAPgBAQABQBeADBRAnQALAGALAGQAEACAFADQABABABAAIBYBEQAGAGAHAGQABABABACAA6m5QADAAADAAQAFABAFAAQAbACAbAGQABAAABAAQAGACAGACAA5m5QABAAAAAAQAxAJAuATQAKAEAJAEQABABABAAQBJAgA+A4QAGAGAGAGQATAUAQARQAQATAOAUQAFAHAFAHQAAAAABABQBHBrACCIQAAAVgBAUQgDAqgJAqQgBAAAAABQAAACgBACIAAAAQAAABgBAAIAAAAQgBAEgCAEIgEAMQgCAEgCAEQgCAGgDAHQgCAEgCAEQgCAEgDAFQgNALgPAJQgGADgGAEQgDACgDACIgDACQgFACgEACIAAABIgBAAQgSAkgYAhQgIACgIABQgQAEgRACIAAAAQgFAXgGAWIAAABQgOAOgPANQgSABgTAAQgiAAgggEQgNAPgOANQgjAigmAaQgMABgNABQgCABgDAAQgEAAgEAAQgWABgWgCQgNAFgMAEQgCABgDABQgBgBgCAAQgBAAAAgBQgLgCgLgDQgBgBgBAAQgBAAgBgBQgCAAgBgBQgBAAgBAAQgBgBgBAAQgFgCgFgCQgEgBgDgBQgBgBgCAAQgBAAAAgBQgHgDgHgDIgNgGQhHgkg8g+Qg/hBgjhNQgJgHgJgHQgBgBAAAAQgMgKgKgJQgCgFgBgEIgXiKQAAgDAAgDQAAgCAAgDQAAgCAAgBQACizB4iJAAknAQAFABAEAAQAsAEApALQA1AKAxAWAAdm6QACAAACAAQAMAAAMABAAbm6QABAAABAAQCYAYByBzQANAOANAPQAQAJAPALQAEAFAEAGIAWAgQABABAAABQACACABADQAzBVALBpQAAAGAAAHQABAOAAAQQAAAdgEAbQgBANgCAMQgIAsgOApQgIAXgLAVQgGANgHANQgGALgHALQgLARgMAQIAAAAQgDABgDABAAYm7QACABADAAAAbm6QAAAAAAAAAAam6QAHABAHACQAHABAGACIAYALIAYAFQADABADABQACABADABIAMAFQAnAPAlAXQAuAeArApQAAABABABQABAAABABQAAABABAAQAAABABAAQAHAHAGAHIAAABQAHAEAHAEQBbBqATCIQAFAjAAAmQgBBagdBNQgIATgJATQgMAZgPAYQgKAOgKAOQgDABgCAAIAAAAQgEAFgDAEIgWAaQgDADgCACQgCA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");
	this.shape_135.setTransform(271,212.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FF9900").s().p("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gBBagdBNgACAn6IAJABIAOACIAJABQCJAVBpBfIAOANIADADIABACIACACIACACIACACIABACIADADIABACIACABIABADIAGAHIADADIABACIABABIABACIATAbIgTgbIgBgCIgBgBIgBgCIgDgDIgGgHIgBgDIgCgBIgBgCIgDgDIgBgCIgCgCIgCgCIgCgCIgBgCIgDgDIgOgNQhphfiJgVIgJgBIgOgCIgJgBIgGAAIgmgBIAAAAIAAAAIgTAAIgEAAIgJAAIgLABIgJABIgfADIgGABIALgIIgMAIIABAAIAGgBIAfgDIAJgBIALgBIAJAAIAEAAIATAAIAAAAIAAAAIAmABIAGAAIAAAAgAjulPIgIAWIAIgWIAAgBgACdnBQBeADBRAoIAWALIAJAFIACACIBZBDIhZhDIgCgCIgJgFIgWgLQhRgohegDIgfAAIgFAAIAAAAIgkACIgKABIgLAAIgVgBIgDAAIgVABIAJgBIgJABIAYABIgJABIAXABIgGABIgFABIAFgBIAGgBIAAAAIAAAAIABAAIgBAAIAQABIgQACIAQgCIAIABIgIgBIACAAIAGABIACAAIADABIAEAAIAAAAIgHgBIAHABIAAAAIgEAAIgDgBIgIgBIACAAIgNgCIAGgBIgGgBIALAAIgFABIAXACIgQABIAAAAIAAAAIAQgBIAAAAIAAAAIgXgCIAFgBIABAAIAbABIAGABIgQABIAQgBIAjAHIgjgHIABAAIAEAAIABAAIAHAAIAEAAIAAAAIABAAIAVABIAeADIAEAAIgjgGIgSgCIgIgBIAFAAIAPAAIAQAAgAiblkIAngZgAC3mcIALAEQAnAQAlAXQglgXgngQIgLgEIgGgDQgagKgcgHIgCgBIgSgEIgGgCIACAAIAEAAIAZABIAAAAIAGABIAKAAIgKAAIgGgBIAAAAIgjgFIAjAFIgZgBIgEAAIgFAAIADAAIAAAAIgHgBIAGABIgCAAIAAAAIgIABIgJAAIgUgCIAAAAIgLgBIALABIgDAAQgdAEgbAGQAbgGAdgEIADAAIAAAAIAUACIBGAQIhGgQIAJAAIAIgBIAAAAIACAAIAOADIANAEIAYAKIAYAFIAGACIgGgCIgYgFIgYgKQAcAHAaAKIABABIAFACIAAAAgAivmIIgGAEIgFADIAFgDIAGgEIAHgDI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");
	this.shape_136.setTransform(264,211.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FF9714").s().p("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");
	this.shape_137.setTransform(271,212.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("rgba(174,105,35,0.682)").ss(0.1,1,1).p("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CgDIAuhDQAEgFADgEQAFgGAFgFAnyltQAEgFAEgEQBfgtByACQAUAAAUACQAPgJAMgHQABAAABgBQAZgpAigkQABgCABAAQAWgXAXgTQABgBAAgBIAsggQADgCADgCQAOgBAOAAQAIAAAJAAQBfAABWAYQAjgFAlAAQBHgBBAAQQADAAADABIChBTArqBoQAZh8BOhmQAXgdAagbIAAAAQBAhABJgoQAugZAzgPQACAAABgBQABAAABgBQABAAAAAAQAEgDADgDArrgxQAKgaAMgZQAlhIBAg8QAlgjAngZQBqhECDgGQARgPARgMQARgKAJgGQAFgDAFgDQAJABAJABQAVADAUAEIAAAAQAFABAFACQAbgFAagCQAIAAAHAAQALAAALAAQADAAACAAQABAAAAAAQALgBAMgBQALAAAMAAQACAAADAAQAWgCAWABQAUAAASACIABAAQAEAAAEAAQAOgBAPABQBXACBMAlQALAFAKAGQAxAcArApQAIAHAHAIQABABABACQACABABACQADACACACIAYAvQAqA6AVBCQAGATAFAVIAAAAQAJAMAIAOIAAAAQABAGABAGIAEAkAkklrQADgCAEgCIAAAAQAIAAAHAAQAHAAAHABQABgBABAAQABgBABAAQABgBABAAQABgBAAAAQAEgBADgBQAZgLAagGQAIgDAHgBQAEgBADAAQAAgBABAAQABAAABAAQAGgCAGgBQAEgBAEgBQABAAAAAAQADgBADgBQAHgBAIgCQABgBABAAQABgCACgCQALgMANgMQAagZAbgUQABAAABAAQAEAAAFgBQAFAAAFAAQAEgBAEAAQAfgCAfACQAEAAAFABQAGABAGABQAFAAAEAAQB/ASBjBWQAGAGAHAGQABABACACQAGAGAFAHQABAAAAABQABACACABQATAZAQAZQAMATAKAVQAOAPANARIA/B8IAZAxQACAIABAJQABAGABAGAkklrQADgCAEgCQADgBADgCAlBlKIAAAAQAFgBAGAAQAHgBAGgBQAMgBAMAAQACgCADgBIAEgDQAGgEAGgDQANgHANgHQACgBADgBQALgGALgFIAAAAQADgGAEgHIAKgDQAFgCAEgBQABgBABAAQAAAAABAAIABAAAlBlKQAEgCAEgDIA5gfQADAAADAAQACAAADAAQABAAACABQALgGAKgEQACgBABAAQAEgCAEgCQAJgEAIgDQABgBAAAAQABgBAAAAQACgEACgDQABgDABgCQACgCABgDQAEgGADgHIAZgmQACAAACgBQAHgCAGgBQAEgCAEgBQARgFARgDQAEgBAFgBQAGAAAGgBQARgDALgBQBfhHB2gSAlBlKQAEgCAEgDAlOlHIAAAAQAGgCAHgBAlVlDQAEgCADgCQAEgDAEgDIA4giQAPgHAQgGIAAAAQACgEABgDQADgFACgFIAIgQQAFgKAGgJQADgBADgBQAGgDAGgCQAEgCAEgCQAQgHAQgGQACAAACgBQAZglAggjQAggjAigcQAXgUAYgQAlVlDQAEgCADgCQAEgDAEgDAlklDQAAAAAAAAQABgBAAAAQACgCABgBAlklDIAAAAIAAAAQABAAAAgBQAEgDAEgDIA3ghAlklDQALgCALgCAmkjtQASgXATgTQACgCACgCIAygpQAEgDAEgDAmQkMQAGgGAFgFQADgDADgDIAqgmAltk8QAEgDAFgEAmKizQAgg3AxgvQABgBABgBQABgBAAgBQABgBABAAQACgDACgCQABAAABgBQABgBAAAAQAHgGAGgGIASgOQAGgEAFgEIABAAQAFgEAFgEQAVgOAWgLIAAAAQABgBAAAAIABAAQABgBACgBIACgBQAdgNAcgIQAIgDAHgCQABABACAAQAKAEALAFQAOgEAPgEQALgDALgCQATgFATgCQAIAAAHACAnSh+QAKgZAOgYQAGgLAHgLQAEgGAEgGQAHgKAIgJQAKgOAMgNQAIgJAJgJQAVgWAXgSQAIgHAJgGQAFgEAEgDQAZgRAagNQABgCAAgBQABgBAAgCQABgCABgBIABgDQABgDABgCQACgEABgDQADgFACgFAm9i8QAHgMAIgLQANgTAPgSQAOgQAQgQQAdgdAhgWQAdgUAfgPQADgCADgBQAagLAagIQAKgDAJgCQACgBABAAAlJlEQAEgDAEgDAmljsQAKgQAKgPQABgBAAAAAmljsQABgBAAAAQAKgQAKgPQAUgcAYgbAn0hWIAQgsQADgJAFgJQAEgJAEgIQAXgoAYgfAnCiwQADgGACgGQALgZAOgYAnCiwQADgGACgGQAAAAAAAAAnlhjIAbhBQAGgMAHgMQALgZANgXAm9iHQAWgVAYgTQADgCACgCQAPgLAPgKQAXgQAYgOQAMgGANgGQAFgDAGgDQADgBAEgCQARgIASgHIAFgPQACgIACgIIAAAAIABAAQABgEABgEQANgKAOgKQAEgDADgCQADABADAAQAGgDAFgEIAAAAQADgEACgEQADgFAEgEQAAgCABgBQAFgGAEgGIAJgMQACgDACgCQADgEADgEQACgCACgCQACgCACgCQAAgBABAAQAAgBABAAQAAgBABgBQAHgBAHgBQARgBAQAAQAJAAAJAAQADAAACABQACgBACAAQADgBACAAQAEAAADABQADAAAEAAQAKAAAJABQABAAABAAQAJgBAHABQABAAABAAQADAAADAAQABAAABAAIAAAAQACAAAAAAQABAAABAAQAHABAHABQAHAAAGAAQABAAAAAAQADAAADABIA9AMIAHABQAAAAABAAQAZAHAZALQANAGAOAHQA+AgA4A2QAMAMAIAJQAtAxAcA5IAAAAIABAAQAAABAAAAQADAFACAGIAZBIQADAPACAPIAAAAQABAPgBAQQAAACAAABQAAAEAAAFQAAAEAAAFQgCAagEAaQgBAEgBAEQgBAEAAAFQgBACAAACQgCAJgCAJQgBACAAADQgBAEgBAEQgBACAAACIgBAAQgBACgCABIgCALQgBAFgBAFQgBAEgBAFIgEAOQgCAGgCAHQgFAQgGAPQgJAWgLAVQgFABgEABAmRkLQAUgdAZgbAk9jmQAQgTASgSQAHgHAGgGQADgOADgOIAagUQAFgDAEgDQAGgFAGgDAlsjIQAbgoAjghQALgLALgJQAGgGAHgGQACgBABgCQABgBAAgBQAAgCAAgBIACgHQABgDABgEIABAAIAAAAQABgEABgEQACgGACgGQADgIADgIQACgCACAAQAKAAALACQAIAAAIACIAAAAQABAAAAAAQACgBACgBAg9pLQADgCADgCIAAAAQAEgCADgCAhGmUQABAAABAAQABAAACAAQAEAAADAAQABAAAAAAQACAAADAAIAPgCQAMABAMABQACAAACABIABAAQAAgBAAAAQAGABAEABAg/mTQADAAADgBQATABASACIAAAAQAEAAADABQAHgBAGgBQABAAABAAIAAAAQACAAABAAQAHABAGACQACAAACAAIABAAQAIAAAIAAQAGAAAFAAQAIABAHAAQAaACAYAEAg/mTQADAAACgBQADAAADAAAhGmUQAGgBAFgBQADgBACAAQALAAAKABQAEgBAFAAIAAAAQAGAAAGAAAhPmWQAKgBAKgBQAFAAAEAAQACgBADAAIAAAAQADAAACgBIAPgCQAVABAUAEAgymYQAGAAAGAAQAHAAAHABAgtmZQACAAADgBAhMmaQAPAAAQABAgJmTQABgBAAAAAgUmRQAGgBAFgBAgYmXQAJABAJACAAOmXQABAAABAAAAOmXIAAAAQACAAACAAQAQAAAPACQACAAADABAAOmXQADAAADAAQAOABAOABQABAAAAAAQAUAAANABQANAAANABQABAAABABQAOACAOACQB/AVBjBfQADADADACQAMAMALANQAMAXAJAYQABABABABIAzBnQACAHADAJQALANALAPAAAmSQAJABAJACQACAAABABQBQAQBCAtQAlAWAhAeQAIAHAIAJQARAQAPASQAGADAGADIABABQAQAJAQAKQAKAOAIAOQAwBOAKBiQAAAFABAGQABAPgBAPQAAAbgEAZQgBAMgCALQgEAagHAZQgGAFgGAFQgCABgBABQgEADgEADQgCAHgDAGAAFmWQAFABAEAAQADAAAEABQAGAAAHgBQAQADAPAEQAhAIAfAOQAHADAHADQABABAAAAIADABIAAAAQBJAfA+A3QAFAFAGAGQARATAPAQQAVAXARAaIABABQABABAAABQACACABADIA8CdQABAKABAKQABACAAACQABAQAAASQABAUgCASQgBAcgFAcQgRAQgTAQQgFARgGAQQgMAfgRAeQgDAGgEAHQgCADgCAEQgWAigbAgQgHAJgJAJQAAAAAAAAQgBACgCABQgOALgOAKQgBABgBABIgQAKQgFADgFADQAAAAAAABQgDABgDACIgKAFQgCABgCABQAAAAgBABQggAXgkARIgDABQgBABgCAAQAAABgBAAQAAAAgBAAQgNAGgOAGQgEABgDABIgBAAQgBABgBAAQgBAAAAAAQgTAGgUAEQgPADgRACQgGACgGABQgBgBgCAAIgBAAQgJABgJABQgFgBgFgBQgGgCgHgBIgmgMQgFgCgGgCQgCgBgBgBQgEgBgDgBQgYgJgWgMQgBAAgBgBQgFgCgFgDQg0gcgugtQhShPgihlQgVhBgChJIAAAAQAAgdADgbQAIg2ASgyQAchGA2g8QAJgLAKgKQAEgEADgDQATgSAUgQQADgIACgIQABgBAAAAQAIgGAIgFQAGABAGABQALgHALgHQAHgEAHgEQACABADABQAbgQAdgMQA8AbA0AuQCBAEBuAzQAJAEAIAEQBkB7gCCkQACBOgWBFQgJAGgJAGQgBACgBADQgCAEgBAEQgSAGgSAFQgIACgJADIgzAIQgDAAgCABQgOABgOABQgQAAgRAAQgJAAgJgBQAAACgBACQgGAKgFALQgHAMgIAMIAAAAQgPAWgRAVQgDADgDAEQgEAEgDAEQgLAMgNANQg4A2hCAgQgJAEgJAEIgBAAQgBAAgCgBQgegHgbgMIgmgRQgHgEgGgEQgwgWgsgjQgOgLgNgLQgQgQgQgQQg9hQgUhhQgLgxAAg1QADh2A3hfAAFmWQAFgBAEAAAgKmXQAIAAAHABAgImTQAEAAAEABAgGmUQAGgBAFgBAgzmJQAPgFAQgDAA6mbQAAAAABAAQAIABAJACQAQACAQADQA7ANA1AcQAjATAhAaQADADAEADQAXAQAWAUQA4A1AhA/QAGALAFANQAHAOAGAPQAJAKAJALIABABQABAGACAGIALBaQAAAAAAABQAAADAAADQAAABAAABQABAEgBAEQAAAOAAAOQgCAggGAdQgFAFgGAGIAAAAQgCAHgCAIIgjBgIg7BYQgDAFgEAEQgBABgBABQgBABgBABQgCACgCACQhJBJhaAgQgEACgFACQgfAPghAIQgJACgKABQgbAEgcAAIgBAAQgFABgGABAAVmUQAPACAOADQAsAJApARQAEACAEABAAQmXQAIgCAIAAQANgCAMAAAACmSQAKgBAJgBAAFmSQAJABAIACAi8mMIABAAQAMgDAMgCQAUgEAVgBQAGgBAGAAQAFgBAFgBQAAAAABAAQALgBALAAAi8mMQACgDABgCQABgDACgCQADgGAEgHAiomLQADgBAEAAIACgBQAEAAADgBAirmKQAFgBAFgBAiMmKQADAAACABQAFACAEABQANgDAMgDIAmgHAifmNQAEAAAEgBQAMgCAMgBQANgCAMAAQAQgBAQAAAiYmOQANgCANgCQAXgDAYgBAhjl7QACgBACgBAhkl7IABAAQABABACAAQAGgCAGgCQAKgEALgEQABAAABAAQAFgCAFgBAhrl4QAEgCADgBAhrl4QAEgCAEgBAinliQABAAABABIABAAQADAAAEABIAygYAillhQABgCABgBQAEgGAFgGAiwlQIAAAAQADgCADgCIASgKQA6APA0AeQAxAcAtAqQAfAdAZAgQA8BiAMBrIAAAAQAEAdgBAfQAAADgBAFIgYBlQgIAWgLAVQiXgJh1hmAiwlQIAAAAQACgEADgEQADgFADgEAixlOIABgCQADgCADgCAi1lHQAZAFAVALQAOAFAOAHAi1lHIAAAAQACgEACgDAiRl8QALgFALgEQALgEALgDQAPgFAQgDAi1lHQACgEACgDAjBmDIABAAQAAgBAAAAAjNloQAAgBAAAAQADgGADgHQAGgCAGgCQAXgKAYgGAjNlpQADgHADgGQADgGADgHAjUlaIAAAAQADgHADgHIABAAQABgBABAAQAHABAGABQAWgMAXgJAjUlaIABAAQADgHADgHIAAAAAjZlNIABAAQACgHADgGAjllOQAHAAAFABQADgHACgGAjYlXQACgBACgCAjOloIABAAQAAgBAAAAAjYlNQAFAAAGABQATgMATgKAjxl3QABgDABgCQAZgKAagGAkXlKQADgDADgBQACgCADgBAkOk/QAGgEAGgEAkFlAQACgEABgDQAFgEAGgEQAUgOAVgLAkSkAQAGgGAFgGQABgBABAAQABgBABgBQAEgEAEgEQACgBABgBQABgBABgBQABgBABgBQACgBABgCIADgCQAEgDAEgEIABAAIAAAAQAEgEAFgDAjElCQAFgEAEgDQAGgDAFgEAjElCQAEgEAFgDIAAAAQADABADABAjjkwIAAgBQADgIADgIQACgGADgGAjmkpQACgEABgDAjPkVIATgmQADgGAEgGAjlkpQAEgEAFgDIAYgSAjelAQADgHACgGAkOkYQAYgXAYgRAjulIQAFgDAEgDAjukiQAEgEAEgDAjqkZQACgIADgIAkSkAQABgEAAgDQACgJABgIAkZj4QADgEAEgEAkSj7QAAgDAAgCAjmAGQghg+gLhIQgDgXgBgZQgBgnAFgkAi8k7QADgGAEgGAhqkrQBmAvBSBoQAFAFAEAFQASAYAQAZQAOAWAMAWIAeBCQACAFABAFQAEAJADAKIAAAAQAAABAAABIgDAiQAAACgBADQAAAAAAAAQABACgBADQgCBOgYBGQgFAOgFANQgDAIgEAHQgOAegSAcQgOgEgOgFQgKgDgKgEQgCgBgDgBQgCgBgBAAQgXgKgXgNQg2gfgxguQgBgBgBgBQgBgCgCgBQgBgBgCgCQAAAAgBgBQgCgCgBgBQgBgBgBgBQgDgEgEgDQgBgBgBgCQgCgCgCgCIhoi4QgBgDgBgEAACmOQArAGAoAPQAzAWAuAlQAYATAYAXQANAMAMAOQBNBXAXBwQAJAvgBAwQAAAEAAAEQAAABAAACQAAACAAABQAAACgBACQAAADAAAEQAAABAAADQAAABAAACQgBAJgBAIQAAACAAACQgBACAAACQAAADgBADQgHAzgTAuQgUANgVALQAAAAAAABQgIACgJACAi/mFQACgEABgDAi2mGQAGgCAFgCACTlwQACABABABQAVALAUANQAFADAFADQAjAaAhAgQAJAIAHAIQAZAaAUAbQASAMARANQACACABADAB7mHQAyAJAvAUQBMAhBBA+QAeAeAXAgQAJAWAGAYQAFASADATQACAJACAKQAAABAAABQABAJABAJQAAABAAACQABAEABAEQAAAEABAFQAAAFAAAEQABAJAAAKQAAAAAAACAAXmPQCHAYBmBpQAUAUARAVAFsi6QABABAAABIAAAAQAGAEAGAFQATAOAQAPIAAABQANALAMAMQAIAIAIAIQAUA3AEBAQAAAIAAAJQAAADAAACQAAACAAADIgBAXQAAAHgBAHIAAAAQgNAPgOAPQgJAKgKAKQgBACgBACQgDAKgDAKQgBAEgBAFAGciTQAAABAAABQADAFACAFAHThkQACAHACAIQACAHACAGAH8gvQACAIABAJQAJAOAIAPAEqjkQBJBdAQB1QAEAhAAAjQAABCgRA6QgEAOgGAOQgDABgEACIAAAAQgCAFgCAFIgNAdQgHAOgIAOIAAAAQgDAGgEAFIg7BKQgCACgBABQAAAAAAAAQgBABAAAAQgDADgEAEQgYAXgaATQgCACgCABQgFADgFADIgDABIgBAAQgVALgXAIQgxAdg3AOQgBAAAAAAQgLADgMACQgIABgHABAHug4QAGAbACAdQABASAAASQAAACAAABQgIAMgJAMQgFAHgGAHQgCAdgGAdIgBAAIAAAAQgBAHgCAIAIFASQAAAPAAAQQAAAGAAAGQAAAMgBANQgEAFgFAEQgEAFgFAFQgFAigKAgQgKAggRAfQgdA4gvAzQgKADgL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");
	this.shape_138.setTransform(271.4,212.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FF9900").s().p("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");
	this.shape_139.setTransform(263,212.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF9618").s().p("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");
	this.shape_140.setTransform(271.4,212.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("rgba(161,97,32,0.631)").ss(0.1,1,1).p("ABHp6QAKgHALgHQAigXAkgRQA1gcA/gLQCPgbCAA7QAPAJAPAKQALAIAFAEQAMAIAKAIQCfCAASDLQAFAygEAwQgIBRgoBIQgJAQgJAPQgdB4hkBhQgBAAgBABIglAhQgHAFgGAFQgFAEgGAEIggAUIhJAiQgJADgJACIAAAAQgLAPgNAPQgKALgLAKQg9A4hIAiQgKAEgKAEQgtASgxAHQgDALgEALQgNAugZAmIAAABQgKABgJABIg6ADQgGAAgGAAQh8AAhsgpQgyALg3gBQi2gBiHiAQgmglgdgoQgcgpgQgtQABgTACgUQAEgwALgtIAAAAQAbhuBGhaQAVgcAZgaQANgNANgMQgBgFgBgEQgBgBAAgBQAAgBAAAAIAAgBQABgCAAgBQAAgDABgCQALgsAUgoQAHgPAIgPQAEgFADgGQANgVAPgVQABgBABgBQAwg+BIg1QCch1DLgEQAJAAAIAAQALAAAJAAQAegdAggYIABAAQADgBAEgBIBygWQCtgJB+BvQAqAmAdArQACADACADQASAPASAQQCOB+gEC2QgBAxgKAuQgaAngiAlQgBABgBABQgeAhghAbQgWASgXAOQABABAAAAQAEAOAEAOQgIAggMAeQgFAEgGAEAI2nVQAqBCANBSQAEAXABAYQAIC0h3CAQAAABgBAAQgJALgKAKQAAAAAAABQAAAGAAAFQgDA+gSAyQgLAEgLAEQgLAEgMADQgFACgFABQgPAEgPADIgLADQgFABgGAAIAAABIAAAAQgWA2gkAvQgNABgOAAQgCAAgCAAQgTASgTAPQgaAbgbAWQgIAGgJAGQgTANgTAKQgCAIgCAJIAAAAQgBADgBADQAAABAAABIgGACQgDABgDABQAAAAgBAAIgHABQgFABgEAAQgQADgQACQgCAAgCABIAAAAQgNAAgNgBQgCAAgDAAQgEAAgEAAIgBAAQgHgBgIgBQgFABgFABIAAAAQgDABgCAAQgCAAgDgBQgBAAgCgBQgBABgCAAQgDAAgDAAIAAAAQgIABgIABQgBAAAAAAQgCAAgBAAQgBAAgBAAAIkDiIAAAAQg1CFiEBjQgHAEgGAFIj/BoQgJABgJABQgKACgJABAIxDYQgHAFgGAFAr9gdQAJg+Adg3QAhg/A5g0QA8g3BFgdQBTgiBhACQAlABAiAGQALgHAHgEQAVgNANgIQAEgCAEgCQAGgCAFgCQAEgCAEgCQAEgCAEgBQALgFAKgFQAEAAAEgBQAGgCAGgCQAEgBAEgBQAHgDAIgCIAAAAQAEgGAEgHIBDhYQAUgWATgTQBhADBXAcQALgCAKgBIBBgGQADAAADAAQBCgCA8APQBVAXBHA2Ar9gdQAIgVALgVQAjhCA9g5QAqgnAwgbQBmg6B9AAQAHAAAHAAQAGAAAGAAQAJABAIAAQAsgZAygNIAAAAQAGACAGACQAAAAABABQABAAAAAAQAEgBADgBQABAAAAgBQAGgBAGgBIAAAAQACgBABAAQAGgBAGgBIAAAAIAAAAIAAAAQABgBAAgBIAAAAQABAAABAAIATgFQADAAADgBQAAAAABAAQAEgBAFgBIADAAQABAAABAAQAIgBAIAAQAYggAegcQANgMANgLQAEgEAEgDICmhUQANgEAOgCQAKgCAKgCAlUkpIAAAAQAQgLARgKQAwgbA1gNQAEgBAEgBQACAAACgBQAbgFAYgCQAOgBANAAQAKAAAKAAQAEAAAEAAQABAAABAAQABAAAAAAIABAAQAAAAABAAQAKgBALgBQALAAAKAAQAIAAAIABQAXgEAZABQASABASACQACAAADAAIAAAAQAGABAFABQARADAQAEQA1AMAwAbAllkUIAAAAQAGgBAGgBIAAAAQAEgDADgDIAwghQAGABAGAAQAFgCAEgCIA6gYQABAAAAAAQABAAABgBQABAAABAAQAEgBAEgBQAHgCAHgCQAGgBAHgCIABAAQAEgBAEAAAlZkWQAEgDADgDAlgkPQAEgEADgDQAGgBAGAAQAGgBAGAAQAHgBAHAAQAMgBALABIABAAQADgDADgCIAVgOQACgBABgBQABgBAAAAQACgBACgBQAEgDAFgCQANgHAMgGQAGgDAFgDQAMgFANgFQABAAABgBIAFgCQACgBADgBIAAAAQAGADAFACQABABABAAQAEACAEACQAKAFAKAFQACABADACQAAAAABAAIAAAAQACACACABQAbgOAbgLIAKgEQAEgBAEgBQAAAAABgBIABAAQAEgBAEgCQAKgCAJgBIAGgBQACgBADAAIAAAAQABAAAAAAIABAAQABAAAAAAQACABABAAQADABAEABQADAAAEABIAMAFQAOAFANAGQAIACAIAEQACAAACABQAEACAEACIAWAIQAPAIAOAJQAWAPAUARQAIAHAHAGQAIAIAHAIQAWAWARAYQAIAEAIADIAAAAQAEAGAEAFQAGAIAFAHQAhA2APA9QAMAyAAA4QgBAtgJAqQgBAFgCAGIAAAAQgHAegNAdQgVAzgkAsQgFAAgFgBQgIAAgJgBQgogFgngLQgVgGgUgIQgCgBgCgBQgCgBgCgBQgLgEgLgGQgBgBgBAAQgIgEgJgFQggA6gxAwQgoAmgtAaQgCAAgBgBQgHgBgGgCIAAAAQgGgBgGgCQgBAAAAAAQgwgagrgpQhahWgbhyQgLgtgBgxIgBgBQAAgbADgZQAHgxARgvQAAgCABgBIAzhXQAEgGAFgGIAAAAQAEgFAFgGIAdgfQABgBABAAQAJgJAKgJQAGgFAHgGQAOgMAPgKQABgBAAAAIAAAAQABgBAAgCQABABABAAQADABACABQALAEALAFQAHgRAJgQQAFgCAFgDQAxAcAqArQABABABABQBHBHAhBYQAZBDACBQQgBAGAAAGIAAABQgBAIgBAIQAAAFgBAFQAAAGAAAGQgBAbgEAaQgBAKgCAKIAAAAQgFgCgFgCQgHgCgHgEIheg1QgBgBgBgBQgBAAgBgBQgrgggiglQgCgCgCgCQgGgHgGgHAllkUQAIgLAJgKQACgCADgDIACgCQAHgHAHgHQAbgbAdgVQADgCADgCQAaAEAZAIQAFABAFACAllkUQAIgLAJgKQACgCADgDAlgkPQADgEAEgDAlxkSQAOgMAPgLAlxkSQAGgBAGgBAm5huQARglAYgjQAGgJAHgIQAKgNALgMQAHgJAIgIQAUgUAVgRQABgCACgBQAGgFAHgFQAQgMASgLQAVgMAXgKQAJgEAIgDQAAgCABgBQAAgBAAAAQABgEABgEQABgDABgDQAKgdAOgbQAbg1AqgvQAiglAmgbIBWgwQAHgCAGgDQAEgBAEgBAmfi5IAHgNQABgBAAgCQADgEACgEQACgEACgDQAOgRAPgPQARgRATgOIAwghQAEgCAEgCQADABAEAAIAAAAQAEgCAEgCIAjgRQAOgFAPgFQAHgCAIgCQAEgBAEgBAmpifQACgGACgFQADgHADgIAmpifQACgFACgGQAAAAAAAAQAFgIAFgHQAMgSAPgRQANgPAOgOQASgRASgOIAtgfQADgCADgCQAFABAFAAQALACAKACQALACAKACQAGgEAGgDQAMgHANgGQANgGANgFIAAAAQABAAABgBQAbgKAbgGQADgEADgEQAAgBABgBIAAAAQABgBABgBQABgCABgBAmliqQADgHADgIApOibQAxgtA4geQAsgYAxgPQAMgDALgCAmnhoIAFgNQABAAAAgBQABgCABgBQAGgOAHgNQAJgRALgPQAegpAggeQABgBABgBQAEgDAEgEIAUgQQADgDADgCQAEgDADgCAmCjtQADgDACgEQACgCADgCQAAgBABgBIAXgVAmCjtQACgDACgDQABgBAAAAQALgQANgQAkpi3IAAAAQAUgaAYgZQATgUAUgQQABgBAAAAQABgGABgHIABgMQABgEABgDQADABADAAQALADALAEQAFACAFABQABgFACgGQAEgMAEgMIAAAAQAHgEAHgDQAWgKAXgIQAAgBABgBIAAAAQAJgCAIgCQAHgCAHgCQAFgBAFgBIAAAAQADgBACAAQADgBADAAQAAAAABgBQAAAAABAAQAKgCAKgBQASABASADAlZicQAXgOAZgNAoFgEQARiQBshpQAMgLALgKAl+jzQAMgRANgQAmOjYIAMgVAA5p1QAHgCAHgDAhqm3QAIgCAIgCQAEAAAEgBQAGgBAGgBQAQgCAMgCQAEAAAEAAQAFgBAEAAQAEAAAEgBQAFAAAEAAQAYgCAYABQAFAAAEABQAGABAGAAQAEAAADABQB3AOBcBNQAGAGAGAFQABABACABQACADACACQABACACACQACADACACQAXAdASAfQAFAFAEAEIAJAIQAEAEAEAEQABABAAABQBkBoASCKQAAACAAABQANARAKASQAdAwAQA0QgoAbgtASQgCAGgDAHQgDAKgEAJQgSArgeAmQgPAFgQADIAAAAQgFACgFAAIgLACQgBABgCAAQgLAOgNAOQgGAIgHAHQgJAJgIAJQgzAug5AWQgEACgEACQgBAAgBABIguANQgIABgIACIAAAAQAAACgBABQgEABgEABQgQACgQACQgKAAgJABQgCAAgCAAAhqm3QAEgGAEgHAh0mlQAFgJAFgJAh0mlQAFgJAFgJAhclsQABAAABAAQABAAABAAQAAAAABAAQAEAAAEAAQADAAACAAQAFAAAFAAQADAAADAAAh2luQAMAAANAAQABAAACAAIAAAAQADAAACAAQABAAABAAQABAAABAAQAHAAAHAAIAAAAQACAAACAAQAHAAAHgBQABAAAAAAQAAAAABABIAAAAQAAAAABgBQAFAAAGAAQAKABAJAAQAMAAALAAQACAAACAAQAAAAAAAAQAEABADAAQACAAACAAQANAAAMACQACAAABAAQACAAABAAQABAAABAAQATAAANAAQALABAKABQACAAADAAQANACANACQB1ASBcBYQADACACACQAHAHAHAHIAOAiQACAGACAGQAHAUAFAVIAAAAQADAEACAEIALAWQALAXAHAZQAJAJAJAJIAAAAQANANAKAOIAAAAQADAQACAQQAAADAAADQABAMAAAMQAAACAAACQAAAKgBAKQAAAFAAAEQgLAKgKAIQgGAEgGAFQgHA0gSAvQgWA6gmAyIgVADQgHABgGAAQgGABgGAAIgEAAQgMAQgOAQQgxA3g7AhQgFADgFADQgBAAgBAAQgRAFgSAEQgGABgGABIgmAFQgDABgEABQgQAFgRAEQgFAAgEAAQgEAAgDABAhclsQACAAACAAQADAAADgBIAPgBAh3luQAFgBAFgBAh9ltQADAAAEgBAiFloIAPgCQANgBANgBAhplZQACgEADgDQAAgBABgBAhplZQACgEADgDIAAAAQAJgDAJgDQAKgCAKgBQAJgCAIgBIACAAQABAAABAAIABAAQADAAADgBQAMACALADQACAAACAAQABAAAAAAIAAAAQAGgBAFgBQABgBACAAIAAAAQAGABAFABQABAAAAAAQAGAAAFgBIABAAQANADAMADQAAABABAAQAZAHAYAKQAKAEAKAFQAAAAAAABQABAAAAAAQASAKATALQAEADAFAEQAhAXAeAeQAIAIAHAHQAgAgAXAkQABADACADQAtBIAKBaQAAAFABAGQABANgBAOQAAAZgEAYQgBALgCAKQgBAIgCAIQgCALgDAJQgHADgIADIAAAAQgEACgEABQgIACgIACQgGAdgLAbQgIAAgJAAQgBAAAAAAQgpAAgngGIAAAAIgsgIQgHgCgIgCQACAOACAOQACASABASQAAAPAAAPQABAJAAAJQgBArgHAoQgNALgOAIQgQAFgRAEQgCABgDABQgEAAgDABQgLACgKACQgGABgGABQgJABgJABQgCAAgCAAQgEAAgEAAQgTACgUgBQgCAAgCAAQgCAAgBgBQgQgBgQgBQgSgCgSgEQgCABgCACQgCAAgBABQgCABgDACIAAAAQgCgBgDgBIhDggQghgUgegcQhdhdgWh6QgGglAAgoQADiFBPhsAhnlqQAFAAAFAAQAIAAAJAAQAEAAAEAAQADABADAAQAXABAWADQACAAACgBIADgBQABAAABAAQAAAAAAAAQADAAACABIABAAQAAAAABAAQABAAABgBQAIACAIABQANAAAOAAQABAAABAAQABAAAAAAIADAAQADAAAEAAQAIABAIAAIAsAGQALADAKAEQAKADAJAEQACABACABQAMAFANAHQA5AeA0AyQALALAHAIQAqAuAbA0QAEAJAEAKQAJAHAJAIIAAAAQAAADAAACIABACQAAAEABAEQABAEAAAEQAAAFAAADQABAJABAJQAAAHAAAGQAIApgCAtQAAAKgBAKQgCACgDADQgGAFgGAFQAAACAAABQgBACAAACQgBAEgBAEQgBAEgBAEQgCAHgDAIIAAAAQgCAHgDAHIAAAAQAAABAAABQgBADgCAEQgCAFgCAFQgCAEgBAEQgJAUgLATIAAAAQgUAkgcAhQgEAEgEAEQgLANgLALQgFAAgFAAQgFAIgGAHQgHAIgJAJQgBAAAAABIgvAgQgEACgDACQgCABgDABIgMAHQgHAEgIADQgIAEgJADQgBADAAADQAAABgBABQAAACAAABQgBAHgCAHQgaAOgcAKQgSABgTAAQAAAAAAAAQgEAAgDAAQgBAAgBAAQgGABgHAAQgNAEgNACIAAAAQgCABgBAAQgFABgFABIgBAAQgBgBgBAAQgGABgGAAQgRABgQAAQgBAAgCAAQgBAAgBAAIAAAAQgEAAgDgBAhnlqQAFgBAGgBAhvlQIAGgJAiQlsQABgCAAgCIAbg1AiqliQABAAACgBAirliQACAAACgBIABAAQAKgDAKgCQABgCABgCQAMgBANgBAirlWQACgBADgBQAEgBAEgCIAHgCQABgCABgCQABgDABgCIAAAAQAHgBAHgBAi2leQAIADAIADQAEgBAEgCAiulhQACAAABgBAiulhQACAAACgBAiXldIABAAQAAgCABgCQABgDABgCQAVgDAXgBAicllQAFAAAEgBQAHgBAHgBAicllQAFAAAEgBAiblTIABgCQACgEABgEAiblRQAAgBAAAAAiblRQAAgBAAAAIAAgBAialVQACgEACgEQAXgIAYgFAiflkIADgBAinkvQAFgDAGgDQAAAAABgBQANgHANgFQACgBACgBQAEgCAFgCIAAAAQACgEADgEAinkvIAAAAAirkhQACgBABgBIAjgWQAGgDAGgDIAAgBQABAAABgBQADgBADgCIAngRQADgBACAAQABgBAAAAQADgBADgBQADAAACgBQABAAAAgBQAGgBAGgBQABAAABgBAirkhQAAgBABgCIAAAAQABgFACgGQAEgMAEgMQACgFACgFAitkaQABgDABgEAitkaQAFgDAFgEQATgNATgLQACgDACgDIAAgBIAAAAQAAAAABgBIAAAAIABgCQABgCACgDQACgEADgEAitkaQABgDABgEAi0knQAHgEAGgEAh3lDQACgCABgDQAdgMAegGAh3lBQADgBADgCAh5k/QABgBABgBAiFk5QAGgDAGgEQAAAAABgBAiflHQACgFACgFAkdk4QAEgCADgCIABAAQAEgCAEgCAkOk7QAEgCAEgCAkUk3QADgCADgCAkbkZQAHAAAIAAQAGABAHAAQAKACAJACIAAAAQAMACAKAEIABAAQAAgBAAAAIAAAAQABgGABgHAjvkRQABgCACgBQAFgEAFgEIAKgIQADgCADgCQAEgDAEgDQAVgOAWgLAjvkRQACgCABgBQAFgEAFgEAlZicQAdgvApgmQAKgKAKgIQAGgGAGgFIAEgDAjOk5QABgIACgIQACgHACgHQAJgEAIgDAjQkvQABgFABgFAjakyQAFABAFACAj/kYQASgOATgMAjJkKQACABADABQAIAEAIAEQAAAAAAABQANAFAMAGQAHAEAIAEIAAABQAfgGAhgDQAKgBAJgBAj9jRIAagcQABgBACgCQACgCADgDQACgBACgCQAAgDABgEIAAgEQAAgFABgGIAAAAQAGACAGACAjWkDQAAgFABgGQAAAAAAgBQAQgNARgLAjYjYIAAAAQAPgFAPgEQADgPADgPQADgOAEgNAjnjTQAHgCAIgDQAPgFAPgEIAAAAQAOgEANgDQAJgCAKgCQAfgGAhgDIAAABQAfAUAeAbQAcAcAYAdQA6BhAIBpQACATAAATQgFAhgIAeQhegXhNhEQgBgBgBAAQgLgLgKgKQgGgGgGgGIgEgGQgRgUgPgVQgEgFgEgFQgEgGgDgFQgKgQgGgRQgWgugIg0QgDgVgBgXQAAgGgBgFAjnjTQAHgCAIgDQAAgQABgQQAKgIAJgIQALgJAMgJAkEjHQAAgBABAAQABAAABgBIAagKAkFjHIABAAQADgFAEgFAkFjHIABAAAkFjHIAAAAQAEgFAEgFAkRjCIAAAAQAGgDAGgCAkRjCIAAAAQAGgDAGgCAkai2QAEgGAFgGAkRjCQAEgFAFgGAi1g/QgWg4AMhHQACgSADgRQAOgDANgDQAJgCAKgCQBUAwBHBcQA4BJAgBUQADAGACAFAifjnIAAgBQACgGACgGQAGgSAIgSQAhAPAgAUQAJAAAKgBIAhgBQAGAAAHAAQCCAABvAtQAJAEAHADQBPBsgCCMQABA2gLAyQAAACgBACIAAAAQgFACgGABQgCABgBAAQgBABAAAAQgGAUgIATQgCAGgDAGQgDAIgEAHQgTApgcAkQgQAVgTATQgNAOgOAMQgLAKgNAJQAAAFgBAFQgNAFgNAEQgsAcgwAOQgpAAgmgHQgBAAgBAAIgIgCQgDAAgEgBQgBAAAAgBQgCAAgCAAIAAAAQgVgFgUgHQgCgBgDgBAjEljQAZgGAbgDAAylrQACAAACABQARACARADQAPAEAOAEQAqAHAnAPQAGACAFADQABAAAAAAQAgARAdAYQAEACADADQAWAPAUASQAwAtAdA0QAAAAAAAAIAAAAQADAEACAEABAlyQAHAAAGAAQAOgBANAAQBRACBGAjQAKAEAKAGQABAAABABQACABABABQABABACABQAKAGALAHQAAABABABQABAAABABQABAAAAABIAdAWQAFAFAFAEQALASAJAUQBWBbATB3AATlpQAGAAAGgBAAylkQAEAAAEABQAHAAAIAAAAUlpQAMACAMADQAmAJAkAPQAFACAEACAAglqQAJgBAJAAAASltQAGACAHABAAWltQAUgEAWgBAA4lSIAcALQAbALAYAOQAgATAdAZQABABACACQABABABABQAJAIAJAIQAYAYATAZAgRllQACAAACgBAgRllQACAAABABQAGABAFABIAAAAQADgBAEAAQADAAACAAQAAAAABAAIAAAAQAEAAADABAgRllIAAAAAgZlqQACAAACAAQAFABAFABQADAAACAAAgVlqQAGACAHABQACAAADABIAAAAQABAAAAAAQACAAAAAAQAFABAFACQAEgBADAAQB3AZBbBdQAaAbAVAdQAQAIARAKQATALASANQAKAHAJAHQAOAKANALQAQAlAHAoQAAAJAAAJQAAACAAACQAAAEABAEQgBAEAAAEQgBAZgEAYQgBAEgBAEQAAAEgBAEQAAACgBACQgBAHgCAHQgEADgEAEQgOAMgQAMQgCABgBABQgBABgBAAQgBABgBAAQAAABgBAAQgIAGgIAGQgEACgEADQgJAGgJAFQgGAEgGADIAAAAQgCABgCABQgwAcg0ARAgVlqQAHABAGACQABAAAAgBIAAAAQABAAAAAAQAEABACAAQAAAAABAAQAJgBAKgBAgHloQACABACABAgDlmQADAAADABQADABADABQAKADAKADAgClmQABgBABAAQAKgBAJgBAgQluQAMABAKACQABAAABAAAgIlnQABAAAAgBAgIllQADgBACAAAgwlvQABAAABAAAgrlsQABAAACAAQAHABAIABAg1ltQAGAAAGABAgvluQAGAAAHABQAJAAAJgBAgsldIABAAQATgEAVgBAg4lbQAMgDALgDQAIgCAIgCAgzlbQAEgBADgBAhDluQAHAAAHABAg6lsQAHAAAGAAQAKABAKABAgDliQAeAFAdALQAwAUAqAjQAXARAWAVQAWAVARAWQA7BKASBcQAJAqgBAuQgBA8gQA1QglAIgnADQguACgqgGQACANACAOIAAAAQgVgGgUgIQgFAbgIAaQgFAOgFANQgiBYhIBGQgFAFgGAFQgJAIgIAHQgBABgBABQgBAAAAABQgBAAgBgBIgBAAQgHgDgHgDQAAAAgBAAQgBAAAAAAQgBgBgCgBIAAAAQgBAAgBgBQgQgFgPgHQgLgFgKgGQgdgIgbgMQgsgUgogfQgNgKgNgLQgPgOgOgPQgtgvgeg3QgFgPgHgNQgGgSgGgRQgBgEgCgEQgDgMgEgMQAAgEgBgEQgCgJgBgJQgCgHgBgIQAAgCAAgCQgBgJgBgIQAAgGAAgGQABgEAAgDQAAgCAAgCQAFg1ARgwIABgFQABgCABgDQABgEACgEAAIlrQAFgBAFgBAALluQAGAAAFABAhTlxQARAAARACAhXlsQACAAADgBACmofQANgEANgDIABABQBbAeBPA7QCiB4ArCqQgWBbg3BMQgBABAAABQABABAAAAQAEAbAAAdQgJAIgJAIQgEAygNAuQgEAKgEAKQgYA8gtA1QgFABgFABACAlIQBEAcA7AzQAFAFAFAGQAQASAPAOQATAWAQAYQAHAKAGAKQAxBSADBlQAAASgBARQgBALgBALIgCAUQgBAGgBAGIAAAAIAAAAQgBAHgCAGQgBAFgBAEIgHAbQgEAPgGANQgGABgFABQgGABgGABIgMABQgCAAgCAAQgHARgJAPQgFAKgGAJQgPAYgSAXQAAAAgBAAQgFAAgFgBQgDAAgDAAQgRAWgVAUQgDACgCACQgBABAAAAQgTARgTAPQgQAMgSAKQgSALgTAJQgCAAgBABQgPAGgOAGQgLADgKADQgFACgGABQgSAFgRADQgDAAgDgBAEGi8QAGADAGADQA5BQANBiQAEAeAAAhQgBAqgIAoQgBAGgCAHQgEABgEACQgIACgIACQgFACgGABQgBAAgCABADSlCQAeANAdARQAVANAUAQQAHAGAHAFQAHAHAIAHQACACADACQAXAXASAYIAAAAQABACABABQACACACADIA2BwQACAIACAJQABAGABAFIAHBMQAAACAAACQAAAZgCAYQgGA4gVAxQgXA7gsAzQgMAPgNANQgBABgBAAQgBACgCACQgBABgBABQgBABgBABQgCACgCACQgBABgBABIh6BMQgKAFgKADQAAAAgBAAQgDACgDACIgvASQAAABgBABQgFABgGABAFRkYQAFAEAEAEIABABQAEAEAEAEAF9jHQACAGACAGQAHAUAFAVIAAAAAkpi3QAMgFAMgGAl2iJQAgg+A2g0QAQgPARgOAkikUQADgDAEgCAG9hDQACAJACAIQACAGAAAFAGYhaQAAADAAACAGNiSQAHAbAEAdQAMALALALQANApAEAwQAAAIAAAIQAAACAAADQAAADgBAEQAAAZgDAZIgTAMQgGAEgFADIAAABQgDAOgDANQgDAOgEANQgFARgHAPQgRApgaAkQgIAMgJALQgCACgCADIAAAAQgQATgRASQgmAngrAcQgOAKgQAHIAAABIAAAAQgBAAgBAAQgIADgIACQgSAJgTAGQgNAFgPADQgBAAAAAAQgDAAgCABIglACQgFAAgFAAQgEAAgDABQgEAAgEABQgLACgMACIAAAAQgCAAgCAAQgHAAgIAAQgHAAgIAAQAAAAAAAAQgKgBgJgBIAAAAQg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");
	this.shape_141.setTransform(271.6,212.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF9900").s().p("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AAIAJgBIgJABIAAAAgAgNHWIANABIAQAAIgQAAIgNgBIAQgCIgEgBIAEABIAAAAIAJABIgJgBIAFgBIgJAAIgDgBIAPgCIgGgBQAVgCAUgFQgUAFgVACIAbgHIgEAAIAAAAQgkAAgigFIgCgBIAAAAIAAAAIgDAAIADAAIAAAAIAAAAIACABQAiAFAkAAIAAAAIAEAAIgbAHIAAAAIAAAAIAGABIgPACIADABIgGAAIAGAAIAEABIgQACIgBAAIABAAIAAAAgAgeHUIAXgBIgXABgAAPHTIAJAAIAEAAIADgBIADAAIABAAIgBAAIgPgBQASgEASgFIAlgCIgIADIghAIIAhgIIAIgDIglACIAegLIgbAIIAVgHIAdgLIgXAKIAXgKIADgCQATgIASgLIAAADQgeARghALQAhgLAegRIgDAOQATgLATgNIARgMQAbgVAagbIgvAgIAvggQgaAbgbAVIgRAMQgTANgTALIADgOIAAgDIABgDIASgNIAPgHQAUgOASgRIABgBIAFgFQAVgUARgVQgRAVgVAUIgFAFIgBABQgSARgUAOIgPAHIAPgLIAEgDQAOgMANgNIAHgIQATgTAPgUQgPAUgTATIgHAIQgNANgOAMIgEADIgPALIgRAIIABgKIgbATIggAJIgGABIgHACIgVAEIgMABIgSACIgEABIgIAAIgHAAIgDAAIgCAAIgKABIgBAAIAAAAIgIAAIgIgBIgEAAIgDAAIADAAIAEAAIAIABIAIAAIAAAAIABAAIAKgBIACAAIADAAIAHAAIAIAAIAEgBIASgCIAMgBIAVgEIAHgCIAGgBIAggJQgsAbgwAOQAwgOAsgbIAagJIgBAFQgUANgVALIgdALIgVAHIAbgIIgeALIgBAAIgHAAIALgDIgMADIgJAAIgDAAIgBAAIgBAAIABAAIABAAIADAAIAJAAIABAAIAHAAIABAAQgSAFgSAEIgIgBQASgDASgFQgSAFgSADIAIABIgLACIAAAAIAAAAIADAAIACAAIAAAAIACAAgAB+HLIgdAHIAdgHIAMgBIAAADIAEgBQBzgTBXhTIATgSQASgSAQgTQgQATgSASIgTASQhXBThzATIgEABIAAgDIAQgEIgQADIAAABIgMABIABAAIALgCIABgBIgGACIAGgCIgBABIgLACIAGgBIgHABIAAAAgAhz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BgBIgCgBIgBgBIgVgOIgDgCIgCgBIgDgCIgUgKQhGgjhRgBIgbAAIgNABIAAAAIgFgBQgSgCgSAAIgDAAIgGAAIAAAAIgBAAQgSAAgRACIgDAAIgQgBIgVAAIgVACIAVgCIAVAAIAQABIgUAEIgBAAIgCAAIgBAAIABAAIABAAIgGABIgNAAIADgBIAOAAQgRgCgRgBQARABARACIgOAAIgDABIgBAAIABAAIANAAIgEACIgBAAIgGgBIgJAAIgGAAIgIABIAFgBIgGABIgEAAIACgDIAAAAIAGAAIACAAIABAAIAOABIgOgBIgBAAIgCAAIgGAAIAAAAIgDAAIgDAAIgCAAIAAAAIAAAAIgTABIgBAAIgHABIAGgBIgGABIAHgBIABAAIATgBIAAAAIAAAAIACAAIADAAIADAAIgCADIgaACIgPABIAPgBIAagCIAAAAIAAAAIAEAAIABAAIgBAAIAGgBIgFABIAIgBIAGAAIAJAAIAGABIgKACIAKgCIABAAIAMAAIgRACIARgCIAUACIgUgCIACAAIADAAIAPACIgPgCIgDAAIACAAIgCAAIgCAAIgMAAIAEgCIAMACIABAAIAGgBIgNgCIABAAIALAAIATABIgSABIAXAEIgKgBIgEAAIAEAAIAKABIADABIgBAAIgMgCIAMACIAAAAIAGABIgBAAIgFgBIAFABIgFABIAGgBIAAAAIAAAAIAAAAIABAAIgBAAIADAAIABAAIgBAAIATgCIgTACIgHgBIAHABIgDAAIAAAAIgFgBIAFABIgGgBIABAAIgBAAIABAAIAAAAIABAAIgBAAIAAAAIABAAIAAAAIAAAAIgEgBIgXgEIASgBIAWACIACABIgDAAIgMADIAMgDIADAAIAAAAIAAAAIgCgBIgWgCIABAAIAOAAIAAAAIABAAIADAAIAEAAIAEAAIAAAAIAAAAIgEAAIgEAAIgDAAIgBAAIAAAAIgOAAIgBAAIgTgBIgLAAIABAAIAUgEIAkAFIgkgFIADAAQARgCASAAIABAAIAAAAIAGAAIADAAQASAAASACIAFABQgVABgVADIAZACIAEABIADAAIAiAGIAdAHIgsgFIAsAFIgdgHIgigGIgDAAIACAAIACAAIAgAAIAVABIAFABIAaADQB1ASBcBYIAFAFIAOANIAOAjIgOgjQBWBbAUB3Ig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");
	this.shape_142.setTransform(270.3,212.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF961C").s().p("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");
	this.shape_143.setTransform(271.6,212.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("rgba(148,89,30,0.58)").ss(0.1,1,1).p("AB7p/QALgJALgHQAhgXAggSQAxgcA7gNQCEgfB8AzQAOAIAOAJQALAIAFADQALAIAKAIQCaB2AVDBQAFAwgDAuQgGBNgmBGQgMAXgPAWQgCAHgBAGIhZCqQgCACgCACQgGAIgHAHQgIAIgJAJQggAfgjAXQgxCZibBsQiMBiixAMQgTABgSAAQgEAAgEAAQiMAAh2gzQg8ARhDgBQiqgCh+h2QgkgigbgmQgWgggOgiQABgNABgOQAGg2AOgzQAchfA+hPQAUgaAYgZQAigjAlgbQgKgXgHgXQAAgBAAgBIAAAAIAHgXQACgGADgHIAAAAQACgGADgFIAqhMQA2hRBdhAQCfhvDNAAQAHAAAGAAIAAAAQADgDADgDIB2g/QAqgOAugEQAEAAAEAAQCfgLB1BkQAnAiAaAmQAJAMAHANQAYARAVAUQCHB1gECpQAAADAAAEIgGA5QgBAEgBAFQgBAGgBAGAJAnXQAeA0ALA/QADAWABAWQAJCmhsB5QgZAbgbAWQgCACgCABIgEADQgFAEgFAEIAAAAQgFAEgGADALqhUQAAAEgBAEIgBABQgUAegZAcQhOBWhhAsQANAYAJAaQAFANAEANQgBAEgCAEQg+AphJAQQgPADgQADQgLABgLABQgEAAgDABQgCAAgDAAQgPABgOAAQgDAEgDAEQgHAKgIAKQgQAUgTAUQgjAkgnAaQgMAHgMAHQgIADgJACIgBAAQAAAAAAAAQgnAKgqADQgBAAgCABQgGACgGACQgNAEgNADQgBAAgBAAQgBAAgCAAQgLgBgMgCQgEACgGABIAAAAQgDgBgDgBQgCAAgCgBQgBAAAAAAIgBAAQgBAAgCABQgFABgEABQAAAAgBAAQgJACgKABIAAAAQgBAAgBAAQgFgBgFAAQgHgBgGgBQgWAAgWgDQgCACgDADQgBAAgBAAIgBgBQgCAAgCAAQgBAAgBAAQgDgBgDgBIgGgBQgBgBgBAAQgKgDgJgCQgPgFgPgGIgLgGQgCgBgCgBQgBAAgBAAQgBgBgCgBIgNgHQgBgBgCAAQgngUgfgZQgIgGgHgGQgGgGgHgGQgjgggXgkIgTgcQgDgEgCgFIgHgNQgBgCgBgDIgCgEQgEgKgEgLIgFgNQgPgugDgzIgBgbQABgRABgRQgBgBgBgCQgBAAgBgBQAAgBgBAAQgBgBgCgCQgBgBgBgBQgBgBgCgCIAAAAQABAAAAgBQABgHABgHIAchXQABgDABgDQAEgGADgHQAYgqAbgfQABAAAAAAQAKgMALgKQAGgGAGgFQAWgUAZgQQAEABAEABQAkgZAogOQACABACABQATgIAPgGQABAAAAAAQABAAABgBQABAAABAAQALgCAKgBQABgBAAAAQAAgBAAgBQAAgCABgCQAAgCAAgCQAKgBAJAAQAJAAAJAAQAEAAAFAAQAAAAABAAQABAAAAAAIAAAAQAEAAADAAQABAAABAAQAJgBAKgBQAJAAAKAAQABAAABAAQAfgyAtgsQABAAAAgBQACAAADAAQADABAEAAQAGABAGAAQADABAEAAQBtALBVBEQAGAFAFAEQACACABABQAhAnAXArQAKASAIATIAAAAQAJAVAHAWQA5BFANBVQAHAIAHAHQAFAEAFAFQABAFAAAFQABAJAAAKQgGAEgFADIgLAIQgGADgHAEIgQAIQgIAEgIAEQgIAEgJADIAAAAQAAACAAABQgBAEAAAEQgCADgBAEQgDAOgGAPQgBADgBADQgBADgCAEQAAABgBACQgBAEgCADQAAABgBABQgVA1gnAvQgDADgDAEIAAAAQgJgBgJgBQgGAAgHgBQgCAEgDAEQgKAQgNAQQgOASgSARQgBAAgBABQAAABgBABQgBABgBAAQgBABgBABQAAABgBAAQgBABgBABQgIAIgJAHQgJAEgJAFQgIAEgIADQgCABgCABQgBAAgCABQgHACgIADQgJADgLADQgHACgHACQAAADAAADQgBAGgBAGIAAAAQAAABAAABIAAABQAAAGgBAHQgLAAgLAAQgIABgJAAQgBAAgCAAAo8jjQACgGADgFApBjWQADgGACgHQBXgqBogBQAcAAAaADQAGgHAGgHQABgBABAAQADgEAEgEQABgCABgBQACgBABgBQAOgOAPgNQAFgEAEgEQAFgDAFgEQACgBABgBQAPgJAIgFQATgMANgIQADgCAEgBQAFgDAFgCQADgCAEgBQAOgHANgGQAEgBAEAAQAFgCAFgCQAahBAzg4IAqgqQADgDADgCQADgDADgDAsPgIQAHgRAIgQQAig9A4g0QAygtA4gcAsOgWIAehdQABgBAAgBQACgEADgFQAfg5A1gxQA+g4BLgaQBGgZBQADQA2ABAxANQARAFARAGIAAAAQAFACAGADQAGACAFADQACAAABABIAcgJQAFgBAFgCQADAAACgBQAGgBAFgBIALgCQANgCAOgCQACAAAAAAQAJgBAJAAQABgBAAgBIAAAAQABgCAAgCQATABATACQADABAEAAQACABACAAIAAAAQAEgBAEgBQABAAABAAQAMABALABQALgBAKABQABAAACAAQABAAAAAAQALAAAKABIABAAQAFgBAGgBQAFgBAGgBQAGgBAGAAQABAAABAAQABgBACAAQACABADAAQASADARAFQADAAADAAQAMABAMACQBrAQBWBQQACACACACIABABQACABABACQAFAEAEAFIBXCSQABABAAACQABACAAACQAGAUAEAWQgEAEgEAEQgFAFgGAGQABASAAATQAAACAAADQgBAxgLAsIAAAAQgGABgHABQgEABgFABIgDAAQgCABgCAAQgCAAgCAAQgCABgCAAQgBAAgBAAQgDAAgDABQgLABgLABQgBAAgCAAQgBAAgCAAIgXABQgHAAgHAAIAAAAQgIAAgIAAQgEgBgDAAIgBAAQgIAAgIgBQgIgBgHgBQgFAUgIAUQgCAEgCAEQgFAOgGAMQgGANgHAMQgGgBgGgCIgjgLQgEgBgDgCQgBAAgCgBQgvgTgqgfQgFAAgGABIgBAAQgRABgRABQgGABgHAAQgKAAgLAAQiZAAiAg+QgGghgBgkIAAgJQADhAAWg5QADgJAEgIQANgfATgcQAOgVARgTQAQAKAQALQAPgEAQgDQgCgJgCgJQgBgGgBgHQgCgNgBgOQAAgCAAgCQAAgDAAgEQAAgHAAgGQAAgEAAgEQAAgHABgIQAAgBAAgBQAAgGABgFQABgHAAgGQABgEAAgFQAUgCAVgBQADAAADAAQABgBAAAAQAAgBAAgBIABAAQAAgBAAgBQAMAAALAAIAAAAQAHAAAIgBQAAAAABAAQAEAAAEAAQABgDACgCQANAAAMACQAZgFAaABQARABAQACQAFABAFAAQAJAAAKgBQAMgBAMAAQBMABBAAhQAJAEAJAFQAbAQAZAWQAUAQASAUQBPBTAXBqQgHAIgHAIQABAIABAJQAIAJAIAJQACADACACQACARAAASQAAAFAAAFQgCAegGAbQgLAEgLADIAAAAQgDAMgEAMQgRAxggAuQgXAfgdAeQgIAJgJAIQhQBNhpASQgFABgGABQgTADgVABQAAAAAAAAQgDAAgEABQgEAAgEAAQAAABgBABQgPACgQABIgIAAQgDgBgEAAIAAAAQgHAAgHAAQgEAAgCAAIgBAAQgGgBgGAAQgJAAgKgBQgJAAgJgBQgBAAgBAAAmOiXQABAAAAgBQABgCABgDIANgcQACgEACgFQADgFADgFQAEgGAEgHQAAgBABAAQAEgFAFgEQAFAAAFAAQAGgBAGAAQAIAAAIABQAFAAAEAAQAHABAGABQASgQATgNQAMgIAMgHQAQgJAQgIQAEgCAEgCQAMgFAMgEQAKgEAJgEQAUgHAWgFQADgBAEAAIAAAAQAAgBABgBQAFAAAFAAQADAAAEAAQAEAAAFAAQAJAAAJAAIAAAAQABAAAAAAIACAAQACgBABAAAmOiXQABgBABgCQABgBABgCQACgBABgCQALgQANgPQAMgOANgNQAFgFAFgFQAVgSAWgPQAGABAGABQAXgRAZgNQABAAABgBQAIgDAIgEQABAAABgBQAJAEAHAEQAIAEAGAEQAHAEAGAEQAFgEAFgDQABAAACgBQAAgBABAAQAFgDAGgDQARgJASgHQABgDABgCQABgEABgFIABAAQAHAAAGAAQAKAAAJABIAAAAQAHgCAGgCIABAAQAEABAEAAQADAAACAAIAAAAQAGABAFABQAHABAGACQAFABAFACQABAAAAAAIABAAQABAAAAAAQABAAABAAQABgBACAAAk1kJQAGABAGABQAmgZArgNQAVgHAWgEQACgBACgBIADgBQAJgCAJgCIAAAAQAMgDANgCQAGgCAHgBIAFAAQACgBACAAQABAAABAAIAhhPQADgFACgGIABAAQAEgIAFgJIBPhxQABgBABgBQAIgJAIgJQAlgoAogfAlHkLQABgBACgBQABgBABgBIBOgmQADgBADgBQACAAACgBIAbgHQACAAACgBQAdgFAbgCQAHgnAOgkIABAAQADgBAEgBQAPgFAOgEQAEAAADgBQAGgBAGgBQAFgBAEgBQAFgIAFgJAmWg4QACgGACgGQAGgRAHgQQAGgMAGgNQAJgPALgOQAbglAfgcQADgDACgCQAQACANAFQABgBABAAQAPgPAPgMQAKADAJAEQAXgUAZgPQAHAEAGAEQADACACACQASgKASgJQADgMADgMIAYgJQAEgBAEgCQAEAAADgBIAAAAQAFgBAFgBIABAAQAAgBABgBAk8jjQAJgIAJgIQAHgGAIgGQADgCADgCQAKACAKADQAMAEAMAEQAagVAcgPQAHgEAHgDQAHgDAHgCQAXgKAYgGQABgEACgFQAAgBAAAAQAGgCAFAAQAGgBAHgBAlHkLQAJABAJABQAngbArgOQAmgNAqgEQAMgBAMAAQAKgBAKABQACAAABAAQABgCAAgCAntgZQAYhxBXhUQABgBABgBQALgCALgBIAAAAQACAAABAAIABAAQAFgFAGgFIAigcAlrjaQAAgBABgBIABgBQACgDABgDQAEgFADgFIAYgeAlrjaQAEgFAEgEQAGgFAGgFAlmjjQAEgFADgFAlpjdQACgDABgDAnfgJQAZh8BahUQAAgBABAAAmfheQAPgfATgdQAGgIAGgIQAKgMAKgLQAHgIAHgIQAKgKAJgIAl5jCQACgFADgFAl+i5QACgFADgEAl8jgQAZgZAcgSAo3iPQAagTAcgQQAqgYAugOQAXgFAWgDAgHo1QADgDADgCQAYAAAXACQBZAIBQAeQA0gOA5gBQA+gBA4ANQBJATA9ArAg8miQAIgBAHgBQAEAAADAAQAFgBAEAAQAEgBAEAAQAYgCAYgBQBUhNBogcQBGAbA/AsQCfBuAwCcQgcBdhBBMQAFAYADAYQAAAEAAAEQAgAnAWAqIgsARQgIACgIADQgLADgLADQgMADgMACQgRA/glA1QgUAcgaAaQAAAAgBAAQgHAJgJAJQgHAIgIAIQgvAsg2ATQgDACgDABQgBABgCAAIg7APQgFAAgEABQgBAAAAAAQgBAAAAAAIgPAEQgFABgFABQgEABgEABIgIABQAAADAAACQgNAAgNgBQgDAAgCgBQgOABgPAAQgFAAgFAAQgFAAgFgBQgBAAgCAAIAAAAQgBAAgBAAQgEAAgEgBQgGAAgFgBIgBAAQgEAAgEgBQgDAAgDgBIgBAAIAAAAQAAAAgBAAQgDABgEAAQgNACgOAAQgFAAgFABQgLAAgLAAQgFgBgGAAQAAABgBAAQg/AzhLAWQg4gZgygjQgCgBgBgBQichugvibIAAgBQAVhHAtg9QAIgMAJgLQABgPACgOQAAgBAAgBQACgOADgPIAAAAQgvg3gbg/AhCmXQADgFADgGAitk4QACgBACgBAitk4QABgBAAAAQAHgBAGgBAitk4IAAAAAiuk4IABAAAiuk4QABAAAAAAAi5k1QAGgCAFgBAhklIQABAAAAAAAj0k1QADgBADgBQACAAACgBAj2jTQAIgHAIgHQAGgFAFgFQADgCACgCQALAEALAFQAGADAGADQADABADACQAKgJALgIQAJgHAKgHQAJgGAJgFQAAgEABgDQABgFACgGQAVgJAWgHQAFgKAGgKIAAAAQABgBABgCQAEAAAFgBQAIABAIABQAPACAOACQABABABAAIAAAAQADgBADAAQAHgBAGgBIABAAQAFgBAFAAQAKACAKAEQABAAABAAQAfAAAdAFQATAGASAIQALAFALAGQA1AcAvAvQALAKAGAHQAnAqAZAwQAAABABACQAHAQAGAQQAAABAAABQABABAAACQAEALADALIACAJQABAEABAEQABAFABAEIAGA4QAAACAAACQAAAKgBAKQAAAEAAAEIAAAAQgIAEgJADQgFACgGACQgJADgJADIgTAFQAAAHgBAGQgBABAAACQgDAVgHAVQgIAAgIgBQgEAAgDAAQgDAKgDAKIgWA3QgGAOgJANIAAABQgEAGgEAHQgBABAAAAQgBACgCACQAAABgBABQgSAZgWAXQgGAGgGAGQgQAPgSAOQgiAagmARQgBAAgBAAQgCABgCABQgBABgBAAQgKAEgKAEQAAAAgBABQgGACgGACQAAAAgBAAQgBAAgBAAQAAABgBAAIgBAAQAAAAAAAAQgJAAgJAAQgEAAgEAAIg3gHQgEAAgEgBQAAAAAAAAQgEgCgDgCIgUgJIgJgFQgFgDgFgDQgDgCgDgCIgRgMQgDACgCABQgDACgCACQgDACgCABQgPgHgPgJQgagQgZgWQhjhigLiIQgBgRAAgRQADhuA8hcQAMgFAMgFQASgYAWgYQAGgGAGgFQALgKAKgKQANgLAOgKQAEgDAFgDQADgCACgCQADACACABQAHAGAGAFQAMAKAMALQADADADADQANANAMAOQAagBAbAAQBzAABmAkIAAAAQAIACAIADQAJAEAJAEIAAAAQABABABACIABABQAfAyANA4QALAuAAAzQAAABAAABQgBARgCAQQAAAEAAAEIgBAAQgJAFgKAFQgCARgDAQQgLA1gbAwQgJgCgJgCIAAAAQgGgBgGgCAkJjaQAKADAJAEQAKAFAKAGQAAAAABABQABgBABgBQAPgQAQgNQATgQAUgMQADgCACgCQAFADAEAEQAMgIAMgHQAXgOAVgJIABAAQAKgEAKgEQAGgCAHgCQALgDALgDQAEgBAEgBIAAAAQAEABACABQACAAABAAIABAAQADAAAEgBQAOgBAPAAIAAAAQAGAAAFABQASAFARAHQAJAEAJAFQACABABABQARAIAPAKQAEADAEAEQAeAWAdAbQAHAHAHAHQAfAfAWAjQAGAIAEAJQAhA7AJBJQAAAFAAAFQABAMAAANQgBAXgDAWQAAAAAAAAQAAACgBACQgEABgEABQgGABgFABQAAACAAACQgEADgEACQgDAXgFAVAk+h8IA/hPQACgCABgBQACgBABgCQABgBACgBAjhjHQAGADAGADQADACADABQAHgIAIgHQAJgJAJgHQAMAGAMAIQALAGAKAIQACgMACgLQACgNACgMQACgLADgLQAVgOAWgKQABgDABgDQACgCAAgCIABAAQAPgFAQgDQAGgBAFgBIABAAQACgBABgBIABAAQADgBADgBQACAAACgBQACAAABgBIAAAAQABAAAAAAAhpi3QABgHABgHIAGgXQAJgjAPggQABgDACgDQABgCABgCQAFgKAFgKQAWACAVAEQADABADAAQAEAAAEgBQARAGAQAHQAKAEAKAEQACABADABQAOAGAOAHIASAKQAEACADACQAAAAABABQAgAWAcAdQABABABACQAQAQANASQAKANAIAMQAsBHAJBVQAAACAAACQADAXgBAaQABAWgBAWQgBAIgBAHQgHAEgHADIgBAAQgBAJgDAJIgBAGQgCAAgBAAQgOgCgOgCQgDgBgDgBQhfgShVg5QgDgCgDgCQABACAAACQgBAOgCANIAAAAQgBAGgBAFQABAKgBAKQAAAKgBAJQgBgBAAAAQgCgCgCgCQgFAXgIAVQgeBbhJBFQgSARgTAPQgegWgcgdQhThYgVhzQgKgFgKgFQgMgGgMgIQgOgIgNgJQgCgSAAgTQADgvANgrQABgEABgFIASgtQAEgHADgHQAYgNAYgLQAXghAdgfAhpi3QABgHABgHAhpi3IAAAAQATgCAUgCQAvA4AYBBQAVA5AEBCQAAAFAAAFQgDgDgEgDQACAQABAQIAAAAQAAAIAAAIQgCARgEARQhchZgch2IAAgCQgBgCAAgCIAAgBQgFgUgCgVIAAAAQAfAfAcAnQABACABABQACACABACIAoA+QADAFABAFQgMgKgNgKQgDgDgDgDQgBgBgBgBQgTgQgRgTIgHgIQgBgBgCgCQAAgBgBgBQgCgDgCgCQAAgBgBgBQgBgBgBAAQAAgBgBgBQAAAAgBgBQgGgHgFgHQgOgVgIgYQAAAAAAgBQgDgGgDgGIgFgNQADACADACQgBgFgBgGIgBglQABgHAAgHQAIAFAIAGIAAAAQAEADADACQAAgDABgDgAhsijQABgHABgHQAAgDABgDAhsijQABgHABgHIAAAAQALAJALAKQAcAZAWAbQAsBNAMBRQgEgDgEgDIgOgJIAAAAQADAFACAFQAAABAAAAQgFgFgFgFIgcgdAhxi2QAEAAAEgBAiCizQAJgBAIgCAiQiwQAHgCAHgBAjuiWQAfgLAggIQAWAPAUATQgHgUgEgVAA0lAQAFAAAGAAQARgBAMAAQAIABAJABQAwAMAsAZQALAGALAHQAOAKANAKQACACACACQADACAEACQAUAOASAQQApAlAaArQAJAPAIARQABABABACQAPAeAIAjQAJAIAJAIQACANABANQgGAFgGAGQAAADABAEQAAAHAAAIQAAACAAACQAAAGgBAGQgBAugLAqIAAAAQgPA9ghA2QgRAcgXAZQhCBBhSAbIguAUQgHADgIACQgBAAAAAAQgBAAAAAAQgIABgHABAA0lAIAAAAQAfAEAdAJQAuAIArARQBEAcA6A2QAQAPANAQQAGATAEATQAFAWADAYQAAADABAEQABAEABAEQAAAEAAAEIAAABQAAACAAADIAAAAQAQAMAPANQAGAaADAbQgJAIgKAJQgGAFgGAEQgHAFgGAFQgBACAAACQAAACAAADQgCAHgBAIQAAABgBAAQgFACgGACQgJADgJADAAUk9QAJACAKACAAVlAQAEgBAEgBAAVlAIAAAAQAEABAFABQALgBALgBAAelCQALABALABAAnk5QAfAJAeAMQADABADACQBCAaA4AwQAFAFAEAFQAPARAOANQASAUAOAVQANATAKAUQAOAIAOAKQABAAABABQAIAGAHAFQAGAFAFAEQABADAAAEIAAACQAAABAAAAQABAMgBANIAAABQAAACAAACQABABAAACQAAAEAAAEQAAAEAAACQgBAYgEAXQAAADgBAEQAAACAAABQgHAGgIAFQAAAGAAAGQAAADgBADIAAAAQgBAcgGAcQgBAGgBAGQgDALgDALQgDANgGANQgMAggRAdIgNgBQgGAAgGgBQgJgBgJgBQgGgBgGgBIgBABQgDgBgDAAQgGgBgGgCQgUAjgdAgQgFAGgFAGQgVAWgXASQgbAVgfAPQgCABgCABAgqlFQACAAADgBQAGgBAGgBQARABAPAEQAHABAHACAg5lAQABgBABgBIAAAAQAAgBABgBQAAAAABgBQAFAAAGAAAg3lCQAEABAEAAQAPACAOADQAGABAFACAgylDQAEABAEABAg6k9QABgBAAgCAhSk6QAEgBAEgCIAAAAQABAAAAAAQADAAADgBAhJk9QACgBACAAQABAAABAAAhKk9QACAAADgBQAGgCAHgCAhKk9QAAAAABAAAhNlEQALABALABAhDk+QAFAAAEABAhJkfQARgJARgGIAHgDQADgBADgBQACgBACgBAgIk5QABAAAAAAAgHk5QABAAABAAQAFABACABAgGk5QACgBACgBQAHgCAHgCQAEABADABAAAk6QAFABAFABQBoAZBPBSIAxA9QAEAFACAEQAFAIAEAHIAoBxQABACAAABQABAEAAAEQABADAAADQAEAcgBAeQAAARgCARQgEABgEAAQAAAEgBAEQgCAXgGAVQgCAKgDAKAgRlDQAIABAHABQAHABAHABQAFgBAEAAAggkxQADgBAEgBQAIgCAIgBQAUAFAVAHQAqATAlAfQAVAQAUATQABABABABIApAvQAFAGAEAGQAFAGAEAHIArBnQACAGABAGQAAACABABQAHAogBAqQAAADgBAEQAAABAAABIgBAXQgBAHgBAHQgBALgCAKQgCAKgDAIAgqlBQANgCAMAAABnkJQAEADAEACQAEACAEADIA5AtQAEADADAEQAbAaAVAdIADAEQACACACADQAFACAFACQAFAIAEAHAADk3QA5AQAyAiQAFADAEADAhok2QAPgEAPgDADDikQAFAGAEAGQAEAGAFAHAFRjXQACACABABQAFAEAEAFAF5g9QAAADAAACQABADAAAEAF6gUQABAEABAEAFmBFQgFAEgFADQgNAKgOAIQgFADgEADQgGADgFADQgDAagGAXIAAABQgNA3geAvQgDAAgEgBQgGgBgGgBIAAAA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");
	this.shape_144.setTransform(271.9,213);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FF9900").s().p("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AIgDABIABgBIgBABIADgBQAqgCAngLIABAAQgdAPgfAHIgBAAQAegHAdgOIABgBIgBABQgdAOgeAHIAAAAIAAAAIAPgBgAC7G3IANgDgAAZG1IgdgIgADJG0IAPgCIgBABIABgBIAKgBIgJABIAPgFIgQAFIgPACgACKGsIARgBIABAAIABAAIAHAAIANAAIgNAAIgHAAIgBAAIgBAAIgRABIANgFIAVgJIACgBIgCABIgUAIIgBABIgMAEIgBAAIgCABIgBAAIgBAAIAAAAIAEgBIgEABIAAAAIABAAIADAAIAAAAgAE/FJQgYAZgaAVIgQALQgjAagnAPQAngPAjgaIAQgLQAagVAYgZIABgCIAAAAQAlgbAfgkIgSgDIAAAAIASACIAAABIAMAAIgMgBIAGgHQAngvAVg1QgVA1gnAvIgGAHIgSgCIADgFIAKgRQAWgnAMgrQgMArgWAnIgKARIgDAFIgMgCIgBABIgGgBIAGABIgFAIQgKAQgNAQQgOASgSARIgCACIgBABIgCABIgCACIgBABIgCACIgRAPIARgPIACgCIABgBIACgCIACgBIABgBIACgCQASgRAOgSQANgQAKgQIAFgIIANABIgNgBIABgBIAMACIAAAAIASADQgfAkglAbIANgOQATgZASgbQgSAbgTAZIgNAOIAAAAQgYASgaAOIgSAJIgQAHIAQgHQgiAagmARIgCAAIAAAAIgEACIAEgCIAAACIAAgCIACAAQAmgRAigaIASgJIhQAyIBQgyQAagOAYgSIgBACgACXGnIAOgEgAArGkIgegIIAeAIgAARGXIAUAKIgUgKIAHgGIASABIAgADIAEAAQASAAASgBIAIAAIAEgBQAcgDAagHIAAAGIAOgJIgOAJIAAgGQgaAHgcADIgEABIgIAAQgSABgSAAIgEAAIgggDIgSgBQBUhcAVh6QgVB6hUBcIgHAGIAAAAgACyGbQAegPAcgVQgcAVgeAPgAAAGMIgHgEIgRgMQATgPARgRQBJhFAfhbQgfBbhJBFQgRARgTAPIARAMIAGAEIgGgEIAHAEgAEiFDIgKAMQgVAWgXASQAXgSAVgWIAKgMQAdggAUgiIAMACIgIANIgBACIgDADIgBACQgSAZgWAXIgMAMQgRAQgRANQARgNARgQIAMgMQAWgXASgZIABgCIADgDIABgCI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");
	this.shape_145.setTransform(261,212.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF9620").s().p("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");
	this.shape_146.setTransform(271.9,213);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("rgba(134,81,27,0.525)").ss(0.1,1,1).p("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ADABADAAQAFACAFABQAFABAFACQAHACAGACQAKADAKAEQAZgWAagPQABgBABAAQACgBABgBQAPgIAOgHQAOgHAPgEQAYgLAZgGQAGAAAGAAQAEAAAEAAQAKABAKABIAAAAQACAAABAAQAEgBAEgBQACgBACgBIABAAIAAAAQABAAACAAAmGitQAIgJAKgJQADgDADgDQABgBABgBIAJgHQAEgEAEgEQARgMAQgLAltitQAGgGAHgGQAEgFAEgEQAJgIAIgIQAggbAkgRQA7gcBHAAQACgBADAAIAJgCIADAAQABgBACAAAlkirQAAgBABgBQAFAAAEABQACAAACAAQADgDADgDIAGgFQABgCACgBQAKgKAKgIQAegZAhgRQAigRAlgIQAAAAABAAQADgCADgBQAIgCAIgCIAPgDQADgBADAAQADgBACAAAllirIABAAQAAgBAAAAQAAAAABgBIAAAAQADgDADgDIAGgGQAMgMAOgKQAggaAlgQQAkgQAogGQABgBACAAQAjgIAnAAQACAAABAAAlkitIABAAQADgDADgDAlkisQAAAAAAgBIAAAAQAGgLAGgKQAGgJAFgIQAJgNAKgNAlkisIAAAAAllirIABgBAltitQAFAAAEAAAl2iCQABgCABgCQAKgOAMgOIAEgFQACgCACgDIAAAAQAJABAHACQALADAJADQANgOAOgMQACgCADgCQAOAFAOAHQAJAFAJAFQANAGAMAIQAEgFAFgFQAMgMAMgLQAFAEAEAEQABABABABQACACACACQAigdAjgWIAAgCQAAgCgBgCQgBgEAAgFQgCgKAAgKQAAgCAAgBQgBgDAAgCQAKgCAKgCAlrilQADgDADgDAlrilQADgDAEgEAmGitQANgBAMABAlWisQADgDADgDAlajWQAQgMAQgLAljjOQAEgEAFgEAlainQACgCACgDAo6jFQBCgXBLgBQArAAAnAHAoWiCQAkgUAogNQAjgIAhgCAiHkZQADgBADAAIAAAAQAHAAAGAAQABAAACAAQACAAABAAQAKAAAJABQADAAADAAQANABAMACQACAAACAAIAAAAAhwkdQACgBACAAQAJABAIAAQAJABAJACQALgBALAAQADAAADAAQADABADAAIAAAAQAFgCAFgBQABAAACAAIAAAAQAIABAHABIABgBQABgCABgDQARgCAUAAQAPABAQACQAGABAHABQABABABAAIAAAAQARADAQAFQAFAAAFAAQALABAKACQBgANBOBGQABABABABQACACACACQAEADADAEQABABABABQABABACABQAAABABAAQAAABABAAQA7A+AWBPQgJAIgJAIIAAAAQgHAGgHAFQAAAAAAAAQgDADgEABQAFADAEADQABAGABAGIAAAAQgJADgJADIgSAFQgEACgFABQAAACAAACQAAAEgBADQAAADgBAEQAAACAAACQgBAHgCAIQAAABAAACQgBAEAAADQgBAEgBADQgBAFgCAEQgFAAgFAAQgBAVgEAWQgDARgEARQgDAMgFAMQgDAIgDAHQgIgBgIgBQgOgDgOgEQgHgCgHgCQgEgBgEgBQgbBHg8A4QgMALgMAKQgjAbgmARQgBAAgBABQgBAAgBABQgLAFgMAEQgCAAgBABAhfkYQACAAACAAQAEAAAEAAQALABAMABQACAAADAAIAAAAQABAAAAAAAhkkXQADAAACgBAjtjyQADgBADgCAjkirQADgDADgCQAIgIAJgHQAFgFAFgEQAEgDADgDQABgBABgBQABgBABAAQABgBABgBQACgCADgCQApggAugSIARgHQADgBADgBQAHABAHABQASADARAEQABAAABABQABAAABAAQACAAACgBIAAAAIABAAQACAAADgBQAEAAAEgBQAOgBAOgBIABAAQAZAIAZAKQABABACABQANAHAMAIQAEACAEADQAbAVAaAZQAHAGAGAGQAdAcAUAgQABABAAAAQABABAAABIAPAbQADAFACAEIAAAAQAVAKAUAMQATAKASAMQADACADACIABAAQABAEABAFIACAIQACAMACAOQgDACgEACQAAAEgBAFIgJACQgEABgFAAQgBABgBAAQgBAAAAAAQAAABAAABQABAJAAAKQABAOgBAOQAAAFgBAFQgUgCgUgDQgLgBgKgCQgEgBgFgBIgHgCQgEgBgEgBIAAAAQgDACgEABQgGADgGACQgEAygRAsQg0gYgtgmQgHgGgHgHQhehXgZh3QgBgGgBgGQgGgJgGgJQgGgLgFgKQgSglgHgoQAAgBgBAAQAOgIANgHIAAgBQABgDAAgDQAOgGANgFQADgBAEgBQADgBACAAQACAAADgBQAAAAABABQACgBABgBQACAAACgBIABAAQAAAAABAAQAXAIAWAMQASAJAQALAj2i1QADgEAEgDQASgRASgNQAIAFAHAHQAKAHAIAJQAmghAsgTQAPgHAQgFQAQgFARgDQADgBADgBQABAAABAAQACgBACgBQAAAAABAAIABAAQABgBABAAIAAAAQADgBADAAQABAAABAAIAAAAIACgBQACgBACAAQAFgCAEgBQACAAABAAQAEAAAFgBQAIACAHADQALAEAKAEQAIAEAIAEQADACAEACQA9AYA2AsQAEAFAEAFQAOAPANAMQAQASANATQAAABABABQATAaAMAdQASApAFAtQgRADgSACQgBAAgBAAQABAIAAAHQAAABAAABQgBARgDAPQAAAEgBADQgBAJgBAJQgIAugTApQgHAOgHANQgEAIgFAIQgRAagUAbQgEAFgFAFQgBACgCACQgWAXgXATQgHAGgHAFQgdAVgeANQgLAFgLADQgHADgHABQgDABgDABIgBAAQgDABgEABQgFABgFABQAAABAAAAQAAACAAABQgCAAgEAAQgGgBgFAAIgBAAQgBAAAAAAIgBAAQgLgBgLgCQgCAAgBAAAj1jsQAEgDAEgDAiziXIAUgVQABgBABgBQABgBABgBQAYAaATAbQAZAlAQApQAWA4ADBFQgCAVgEAUQAAABAAABQACADABADQgBAAgCAAIAAAAQAAAAgBAAQgKAAgKgBIi1gpQgBAAgCgBQgKgEgKgEQAAgBAAgCIAAAAIgBgBQAAgWADgWQAGgpAOgoQAKgWANgVQAFgIAFgHQAOgUARgTQALgMAMgLQAEgEAFgFQAVgSAWgQQAPgLAOgIIAAAAQAAgEgBgFAgOmJQASgCATgBQADAAAEABQAFAAAFABQAEAAADAAQAHABAIAAQAMgNANgMQBEg/BUgcQAxAVAuAeQCaBkA2COQgjBfhNBMQgIAHgIAHQAFAQADAQIgLAGQgFACgGADIAAAAQgDABgDABIAAABQADACAEADIAAAAQAAAHABAGIAAAWQAAAUgCASQgHABgIABQgRABgSAAQgCAcgHAaQgCALgEALQgHAWgKAUQgMgBgMgCQgXA2goAtQgoAwgwAdQgCABgBABQgZAOgaAGQgBABAAAAQgEAAgEAAIgaABQgEAAgDAAQgHAAgHABQgCAAgBAAIgBAAQgBAAgBAAQgFABgEAAAAmkXQAIABAIABQAIAAAIgBQAQgBAKABQAGAAAGABQArAMAmAWQAZAPAXATQADACADACQATAMAQAPQAhAdAXAiQANATAKAUQAQAgAJAoQABAFABAFQAFAEAFAEQgEACgEACQgJADgJADAAckVIAGgBQACgBACAAQASgEATgCAAWkTIAAAAQADgBADgBAAWkTQADgBADgBABLkdQAGgBAGAAQAEgBAEAAQACAAACAAQALgBALAAQBFAAA7AeQAIAEAIAFQAQAKAQAMQAJASAHASQAHAUAGAVQAFARADASQADAOACAOQAAADABADQABAEABAEQAAADAAAEQABAHAAAIQABAOAAAOQAAABAAAAQAQALAPALQgMAJgOAKQABAFAAAFQADAYgCAYQAAAKgBAJQgKAAgKgBQgCAJgDAJQgBADgBADQgCAEgBAFQgCADgBADQgBACgBACQgOAlgXAiQgHAKgIAKQglAvgtAgQgWAQgZAMQgyAqg8ATQgBAAgBABQgEABgEABQgCABgCAAQgFACgFABQAAABAAABIAAAAQAAABAAABQAAACAAACQAAABAAAAQAAACAAACQgDABgFAAQgGABgFABAgTl8QADgGACgHQAFgKAFgLAgTl8QACgHADgGIAAAAAg4kWIABAAQABAAAAAAQABgBABAAQABgCAAgCQABgCABgDIAehcAg2kVQABAAABgBIAAAAIAAAAQABAAAAAAIAAAAQACABABAAQAEABAFABQAAAAABABQALACALADQAEABAEABAg0kVQAAAAAAgBQACABACAAQARACAQADQABgEACgDQAAgBABgBQABAAAAAAQAEAAAEAAIABAAQAEAAAGAAQAPAAAOACAg2kVQABAAABAAIAGABQAEABADAAQALADAMADQAEABAEABQABABACAAIACgBQACgBABAAAg3kWQABABAAAAAg8kUQACgBACgBAg8kUQADgBADAAAg0kWQABAAAAAAAgKkcQABgCABgDIAAAAQADgHAEgHIA/haQBcALBIA3QAFAEAFAEQABABACABQAjArAXAvQAaAUAYAaQA6A9AZBLQAGASAEATQgEADgFACAgMkXQABAAABAAQAMACANAEQAEgBADgBAgLkbQAFABAEABAgLkZQAAgBAAgBAgIkhQADgHAEgHAgWkZQAFAAAGAAAgWkZQAFABAFABAgakdQAJgCAJgCAgnkaQAJAAAIABAgzkWQAPgCAOgBAACkNQABgBACAAQAAAAABAAQAGgBAGgCQAHACAHACAAAkMQABABADAAQBXAZBEBGQAnAoAXAuQASAGARAIQACAGADAFIAVBOQAAADABAEQAAAEAAAFQAAAEAAAEQgMABgNAAQgEAAgFAAQACAQAAAQQAAACAAACQAAADgBAEQgCA7gUA0QgIgDgHgDQgDgBgDgBQgGgDgGgCQgDAHgDAGQgEAMgGAMQgZA1grAuQgLALgMALQgOAMgOAKQgUAFgVADQgCABgCAAQgEAAgDAAQgEABgEAAQgMABgNAAQgCAAgBAAQgQgBgOgBQgRgBgQgCQgBAAgBgBQgCAAgBAAQgFgBgFgBQgBgBAAAAQgGgDgFgDQAAgBgBAAQgCgBgCgCQgSgNgRgPQgEgDgDgDQgBgBgBgBQgFgFgGgFQAAgBgBgBQgBgBgBAAQAAgBgBgBQgBgBgBAAIghhLQgKgUgIgVQgRgvgFg2QgBgMAAgMIAAgIQADg6AVg0QADgIADgHQAAgBABgCIAHgQQADgFADgFIAAAAQAAgBABgBQABABAAAAQAegJAggGQAKgCALgCQAJgBAIgCQAdgEAegBQgEgKgDgLQgLgqAMgzQAUgLAUgIQABAAACgBQABgBACAAQAKACAIADQAAAAAAAAQAMAEALAFQABAAABABQABAAABAAIAhAQQAGADAHAEQAEADAEADIA5AsQABABABABQACACABABQAZAYATAaQAFAGAEAGQAAABAAABIAFAIQADAEACAEQAEAHADAHIAYBBQAFAaACAbIgLAAQgFgBgGAAQgEAAgEgBIgCAAQAAAPAAAOQAAABAAABQAAACgBADQg9gSg4gkQhHgtgwg7QgIgIgHgIQgLgOgHgQQACAAACAAQAFgBAEAAQgCgNgBgPIAAAAQAAgEABgDQAAgCAAgCQAGgxARgsQAAgBAAgBQABAAAAgBQAAAAAAgBQABgBAAgCQAAAAABgBIAAAAQAAgCABgBQAHACAGACQADgBAEgBAgMkKQABABABAAAgKkKQABgBABAAAgJkJQABAAACgBAgKkJQAIAEAHADAgDkLQACgBABAAAgmkSQALADAKADQACABADABAg6j5QABgCAAgDQACgJACgJQAAgDABgCAhJkQQADgBACgBIABAAQADgBAEgBAhWjlQAAgCgBgCQAPgJAOgHABBjoQAFADAFADQABAAABABQAAAAABAAQATAOASAQQABABABABQAJAIAIAJQAjAlAWAqQAKADAKAEIAAAAQAFACAFACQAbA0AJA6QABAJAAAJQABAOAAAOQAAAEAAADQAAAFAAAFQgDA8gUAzQgNAggTAcQgKAPgLAOQgNAQgQAPQgKAKgKAIQgJAEgIAEQgIADgHADQgUAIgWAFQgcAUgfANQAAACAAACQAAACgBACQgDABgFABQgEgBgFgCQgCABgCABIgBAAQAAgBgBAAABNjhQAFADAEADAAqkNQAIAAAJAAQAXABAXADQAQAGAPAGQAKAFALAFQAvAaAsArQAKAJAGAHQAjAnAXArIAPAnQACAHABAGQACAEABAFAAhkNQAEAAAFAAAAFkCQAlASAhAbQAUAOASASQADADACACQABABABABIAvA6QAEAHAEAHIAAAAQAIACAIADQAhA/ADBLIAAAAQABAPAAAOQAAAFAAAEQgGgBgGgCQAAAHAAAGQg5AVg9ALQg4AJg6AAQgRAAgQgBQAZA+ANBDQABAIACAHQADATACATQACAOABAPQAAARAAAQQABAFAAAGQAAAGAAAGQgDACgDABIgBAAQgFACgGACQgOgDgOgFQgBgBgBAAQAAAAgBAAQgsgJgngTQgPgIgPgJAAbkSQANgCAOgBQAaAEAZAIQAsAHAoAPQBBAaA4AyQAIAJAIAIIBBB0QADAKACAJQADAOABANIAAAAIAAAAQgDABgDACQgEABgEACQABAKABAKQAAAGAAAHQAAACAAACQgBAUgCAUQgGBBgbA4QgWAvgkApQg9A6hMAWQgbAPgdAJQgGABgGAAQgFABgEAAAhHkSQAGgBAFgBAAWkTQACAAADABAgBkZQALACAMAEAgukUQAEABAEABAGQAMIAAAAQAAAEABAEQAAAHABAGAGQAMQABAEAAAEQANALAMAMQAMALAKALQABAEAAADIAAAEQAAAEAAAFQAAABAAABQgFA6gSAsQgDAIgEAIQgCAEgBAEQgPACgPABQgbAugpAqQgIAIgIAIQhIBGheARQgFABgFABQgVAEgWABQgCAAgDAAIAAAAQgHAAgGAAQgSAAgRgCAGbAHQgFADgGACAGMgPQACAOACANAFVgYQABABACABQAAABAAABIAAAAQABADAAAEQAAADAAADQAAABAAAAQgBAOgCAPQgEADgEADQgFADgGADIAAABQgBAAgBAAAFDAkQgBABgCABQgSALgSAJQgNAHgMAFQgEACgEACQgIAEgIADAFMAiQgEABgFABAHEgQQgGAEgGAEIAAAAIAIA2QAAAKAAAJIABAAQAIAJAIAJQAmAuAZAzQg1AZg7AIQgVAsgkAmQgIAJgJAIQg0Atg+AeQgIAEgIADQgxAVg3AGQgIAAgIABQgbABgagDQgNABgNAAQgFAAgFAAQgBAAgCAAQgCBBgQA7QgBAHgCAHQiagBiAg/QhEAahOgBQidgCh3huQghgfgZgjQgRgWgLgYQABgGAAgGQABgCAAgBQAHg9ATg4QgBgDgBgDIgQhqIgBgCQgBgTACgTQAFgMAHgLQAgg4A0gwQA+g3BJgbAHBBBQAAAEAAADAHAAuQAAAKABAJAFRglQACAHACAGAGHgiQADAKACAJAD7hRQADAFACAEQADAGACAFACnh0QAEAHAEAHQAFAHADAIADOhiQADAEACAEQAEAHADAHACvhmQAEAHAEAIIAZBEQACAHACAHQAEAWABAXQhpgKhThDQgngigbgnQgCgJgBgKQAGAAAGAAQAGAAAHAAQBkAABaAbgADuAqQgFgBgGAAQgEAAgEgBADkBPQAAADAAACQABA4gQAyQgXBGg4A7QgBABgBABQAAABgBABQgCACgCACQgBABgBABQgBABgBABQgBABgBABQAAABgBAAQgJAJgJAHIg2AkQgDABgDACQgIAEgKAEQgEACgEABQgHADgJADQAAAAgCABIAAAAQgCAAgCgBQgDABgEABIAAAAQgKACgLACIAAAAQgFAAgFgBIgBAAQgIACgIABQgFgBgFgBQgEAAgFAAQAAAAgBAAQgEAAgDAAQgngBgkgIQgCAAgBgBQgVgFgVgIQgKgEgKgEQg5gbgvgyQgmgngYguQgMgWgIgXQAAgCgBgCQgOgrgDgxIgBgYQAAgBAAgCIABgVQAAgGABgGIAAgBQABgGABgHIADgMQAAgCAAgCQgGgGgHgFQAKgoAUgkQAAgBABgBQABgCABgBQAAgBABgBQABgCACgCIAng3ADrBRQgDgBgEgBAi5iQQADgDADgEAi4iQQADgDACgEAi5iQIABAAQA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");
	this.shape_147.setTransform(272.2,213.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF9900").s().p("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ABIgIACIgIACIgNAAIAXgEIAMgBIgMABIABAAIgJAAIgaABIgDAAIgEAAIgOABIgDAAIgBAAIgFgBIAOgDIAWgJIgWAJIgOADIAFABIgCAAIgJABIAGgCIgGACIgBAAIABAAIAJgBIACAAIABAAQARACASAAIgQACIgVACIALACIgJABIgQAAIAAAAIgBAAIgKAAIgDAAIADAAIAKAAIABAAIAAAAIAQAAIAJgBQASACATAAIABAAIAAAAgABXGiIAWACIgWgCIgDgBIADAAIATgEIAOgEIAAAAIgEgBIgVAEIAKABIgSAEIgBAAIgNgBIgBgBIAXgDIgXADIgDAAIgBgBIARgDIAAAAIAKABIgKgBIAAAAIAdgEIACABIAAAAIAEABIAEACIgEgCIAAAAIAAAAIAHgCIAAAAIAAAAIAEgBIAAAAIgEABIgHACIAEACIgEgCIAHgCIAEABIgBAEIAAABIAAAAIADABIACgBIAFACIgKACIAAgCIAAgCIAAACIAAACIgJABIAJABIABAAIANAAIACAAIACAAIAAAAIABAAIAEgBIAFAAIgFAAIgEABIgBAAIAAAAIgCAAIgCAAIgNAAIgBAAIAAgBIAAgBIAKgCIgFgCIAMAAIgHACIASADIgSgDIAHgCIgMAAIgFgBIABgEIAXADIgXgDIgBgBIABgBIAQgGIABAAIABAAIABAAIAOAAIASgBIAIAAIgIAAIgSABIgOAAIgBAAIgBAAIgBAAIAHgDIASgIIACgBQAmgRAjgbIARgIQgyAqg8ATQA8gTAygqIgRAIIgPAGIAPgGQgjAbgmARIgCABIAGgDIgIAEIgXAJIgDABIgBAAIABAAIAAAAIgEABIADgBIgMAAIAAgCIAAgCQAfgMAcgVQAWgFAUgIQgUAIgWAFQgUAFgVAEIgEAAIgHABIgHAAIAAALIAAAGIAAAGIgHADIgBAAQgVgBgUgEQgXgLgVgOQAVAOAXALIgBAAQgUgIgUgKIgSgKIgVgFIAVAFIASAKQAUAKAUAIIAEABIADABIAQAHIACABIACABIgCgBIgCgBIgQgHIgDgBIAbAIIAJADIAKgCIAAAAIgCAAIgCABIgCABIgCAAIAEABIgHACIgEgBIAHgCIgCAAIACAAIgHACIgCgBIAHgBIgHABIgDgBIADABIgdAEIAWgGIAEABIg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");
	this.shape_148.setTransform(259.2,213.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF9524").s().p("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");
	this.shape_149.setTransform(272.2,213.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("rgba(121,72,24,0.475)").ss(0.1,1,1).p("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BA0APAszAhQADhBAfg2QAcgvAtgnQBDg6BSgSAA1oaQADgDACgCQAhADAgAHIABAAQADgEADgEIASgYQACgCACgDQAkgrAngjAk2iIQADgEAEgDQAPgQAQgNQAEgEAEgDQACgBABgCQAbgUAfgPQAQgHANgGQAAAAABAAQAggHAiAAQAFAAAEAAIABAAQABgBABAAIAAAAQADgBAEAAQABAAAAAAIABAAQAHABAIACIAAAAQAHABAHABQACAAABAAIAAAAQAVADATAGQAGACAGABQABAAAAAAQABgFAAgFQAAgCAAgCQAAgBAAgCIAAAAQABgEAAgFQACgKADgKQAKgyASgvQAAgCABgBQAAgCABgBQAAgCABgBQAAgCABgBQABgBAAgCQABgBAAgCIBKiIQAFgHAFgHQBJAPBDAgQAcANAbARQCWBaA9B/QgtBiheBKQgHAGgIAGQgFAEgEADQgGAEgFADQACAEABAEQAMAhACAjQgEAAgEAAIgIgBQAAAFABAFQAIAGAHAGQAAADAAADQAAA4gRAwQgWBAg0AzQgDADgCACQgIAJgIAJQgHAHgHAGQgnAmgtAOQgDABgDABQgBABgBAAIgyALQgGABgGAAQgBAAAAAAIgIADQgDAAgCABIgBAAQgFAAgFAAQgNADgOAAQgDABgEAAQgNACgMgBQgFAAgGAAQgHAAgHAAQgGABgFAAAkih/QAPgQAQgOQAFgFAFgEQAXgSAXgNQAOgGAMgGQAMgGAOgEQABAAAAgBQACAAABgBQABAAABgBIAbgKQACgBACAAIAAAAQACAAACAAQARAAARADAh5j0IABAAQAHAAAIgBQAHgBAIgBQAIAAAIAAQAXABAXAEAksjPQAogXAtgJQAhgFAdAAQAHAAAIAAQAJAAAIAAAiLjvQAFAAAFAAQARAAARABAh9jzQACAAACgBAh9jzQACAAADgBQARACAQADAiLjvIAOgEAhhjtQACAAACAAQAEAAADAAQAHAAAIABAhyjpQADgBACgBAhyjpQADgBACgBQAGgBAFgBAh2joQACgBACAAAitjmQADgBAEgCQAHgCAIgBQAGgCAGgBAixjlQABAAABAAQAAgBABAAQAdgEAfABAjUiAQAIgIAJgIQAHgGAIgGQAEgEAFgFQACgBACgCQADgDAEgDQArgjAxgUQAYAEAWAHQAAAAABABQABAAACABQAAAAABAAQACgBACgBQABAAAAgBIABAAIAAAAQAAAAgBAAQADgBADgBQACAAACAAQABAAAAgBQAFAAAFgBIAAAAQACgBACgBIAEgBQABAAAAgBQABAAABAAIABgBQACAAABgBQAEACAFACQAAAAAAAAIAAAAQAQgBAQABQARABARACQANAEAMAGQAJAEAJAFQArAYAoAnQAIAIAGAGQAgAkAVAnQAGANAEANQADAIACAHQgLAGgKAFQgGACgFADQACAIACAIQAEAVABAWQAAAMAAAMIgDAkQgBAGgBAHQgBAFgBAGQgBAHgCAIQAAABgBACQgDAMgEALQgUA4goAxQgjAqgpAbQgjAIgmgBQgEABgEAAAkRi6QAsgfA0gMAkYi/QAwgdA3gJAkhjFQBBgrBVABAgSjvQAAAAAAgBQgBgCAAgCQAKgDAKgBQAPgBAPAAQAFABAEAAQAKABAKABQAGABAGABQABABABAAQACAAADABQANADANAEQABAAABAAQABAAAAABIA/AbQAFADAFADQAEACAEADIAYARQABABAAAAQABABAAAAQABABABAAQACACACABQACACADACQAQALAQAMQAZAXATAZQAPAUALAWQAHAMAFAOQAAAAABABQgCAAgBAAIgBABQgFAAgFABIgKABQgDABgEAAQgEAAgEAAQgTABgTAAQAEAJADAJQAHAEAIADQALAGAMAGQAAAGgBAFQAAABAAABQgBABAAABQgOgCgOgEQgMgDgMgDQgJgDgJgDQACAGABAGQAAAEABAEIABAEQAAAEAAAEQABALgBAKQAAAUgEASQgBAIgBAIQgCAHgBAHQgKgFgKgGIAAAAQgJBJgnA5QgJANgLANQgMAOgNANQgEAEgEADQgCACgCACQgIAEgJADQgJAIgJAGQgTAOgUAKQgGADgHADQAAAAAAAAQgBAAgBABQgBAAgBAAQgHAEgIACIAAAAQgEACgEACQgBAAgBABQAAAAgBAAIAAAAQgBAAgBABQgCgBgCgBAgcjuQAFABAFABQAAAAABAAQAAgBgBgCQADAAADAAIABAAQAGACAFABQAAgBAAgCQAFAAAFAAQANABANACQACgGACgGQATg7AngyQA3AOAuAgQAFAEAFADQABABABABQAlAuAXA0QAIARAGASQAHAGAHAGQACABACACQAwAtAZA2QADAIADAIQAMAeAFAgQABAGAAAGQABACAAABQABANgBANQAAAHAAAGQAAABAAABQgCArgMAmQgCAEgCAEQgaA/g3A5QgIAHgHAHQg/BAhVAPQgEABgFABQgSAEgUABQgHAAgGAAAgcjyQAFABAFABQADAAADABAgcjuQAFAAAFgBAgVjZIAAAAQAEgBAEgBQABAAAAAAQgBgDgBgDQgBgFgCgGQAJACAIACQAIACAJADQAAAAABAAQADABAEABQAEACAEABQAAgBAAgCQAEACADABQAIADAHAEQAEACADACQACABABAAQA6AXAzApQAEAEAEAEQALAPAMALQAPAPAMARQAUAaAMAeQgTgBgTgDIAAAAQABABAAACIAAAAQAGARAEASIAAAAQACAGABAGQAAAEABAEAgWjaQABAAAAABQACAAACABQADABADABIAAAAQABAAAAAAIAAgBQACAAACgBIAAAAQACgBABgBQABAAABAAQABgBACgBQABgBACAAIABgBQACAAABgBQACgBACgBAgmjvQAFAAAFABAgLjaIAAgBQADgBACgBQACAAACgBQAAABAAAAQABAAAAAAIAAgBIAAAAQAIgDAKgCQADgBADgBIABAAQADgBAEgBQACgBACAAQABgCAAgCIABAAQAEAAAFABIAAAAQAFAAAFABIAAAAQALgBALAAQAOgBAJAAQACAAACABQAHAAAIAAQAKABAJACQBPAJBDA2QAHAUAEAVIAAAAQAEAPACAPQABAFABAEQABADAAADQABADABAEQAAADAAADQABAIAAAHQABANAAAMQAAACABABQAAABAAABQAAADABACQgBADAAADQAAABAAABQAAABAAABQAAAFAAAFQAAAGgBAHQACACACABQABAFABAFIABAEQABAFAAAGQACAQgBAQQAAAHAAAHQgCAigIAfQgBADgBADQgCAHgCAHQgOArgcAlQgHAIgHAIQgNAQgPARQgdAegfAWQgFAEgFADQgJACgJACQgBABgCABQgWANgXAGQAAAAAAAAQgHACgHABQgQAAgQgCQgCAAgCgBQgFAAgGgBQgOgDgNgDQAAgBgBAAQgBAAAAAAIgBAAQAAAAAAAAQgBAAgBABQgPAEgQAEQgDgBgEgBIgBAAQgCAAgCAAQgEABgDABQgGAAgGAAQAAAAAAAAIAAAAQAAABAAABQgIACgJABQAAAAgBAAQgHABgHABQgGAAgGABQgBAAgBAAQgEgBgDgBIgEAAQgEgBgDgBQgDgBgDAAIgGgCQgIgDgIgCQgVgHgTgKQgHgEgHgEQgUgJgRgLQgMgIgKgIQgGgFgGgFQgGgFgFgEQgdgagUgcQgLgOgIgOQgCgDgBgCQgKgUgIgUQgPgrgDgxIgBgWQAAgDAAgDQAFgEAFgEQAEgYAHgXQACgHADgIQACgHADgIQgGgEgGgEQAOglAXghIAAAAQABgBAAAAQABAAAAgBIAAAAQABgCACgCIAOgRQAAgBABgBQAEgFAFgFQAGgFAGgGQASgSAVgOAgLjaIAAgBQAAAAgBAAAgMjbQABAAAAABQADABACABQACgBABgBAgNjbQABAAAAAAAgBjdQABABACAAQAOAFAOAHQABgHACgHQAOAFAPAGQALAHAMAGQADADADADQAZASAYAXQAGAGAGAFQAaAZATAcQAAABABABQABABABACIAVAoQACAGADAIQgJgCgIgCQAJAEAJADQAGARAEASQgQgGgRgGIgCgBQgEgCgEgCQABAEABADQABACAAABQAAACABACQADAOACAPQADAZgBAbQAAANgCANQgLgHgMgIIAAAAQgDgCgDgDIgGgEQgMgKgLgKQgIgHgGgGQhIAPhNAAQg4AAg1gIQgGgBgGgBQgXgEgXgFQAEAGAEAFQABACABADQABABABAAQAWAkARAnQABABAAABQACADABADQACAEACAEIAnB/QAFAYADAZQgFgEgFgEIgfgdQgCgCgBgCQgPgPgMgRQgKgOgIgOQgGAJgFAJQg0hJgEhgIgBgBQAAgVADgTQAAgCAAgDQADgOADgOQABgCAAgBQABgEABgEQAIAJAIAKQAFgdAMgcQABgEACgFIAAAAQABgBAAgBQABgBAAgBAgBjaQAAgCAAgBAgLjvQAGAAAFAAQABgEAAgFAg+jpQABAAAAAAQABAAABABQADgBACgBQACgBABAAQAMgCALgBAg/jpIABAAIAAAAIAAAAQADgBACAAQADgBADAAAg/jpQABAAAAAAAhWjvQASgCATABQAGAAAFABAhWjtQAMACALACAhHjsQAEABAEACAhMjmQAHgCAHgBAgBjSQACABADABQAAABABAAIALAFQAGACAGADIAAAAQAAgBAAgBQABgFABgEQA0AYArAtIA9BYQADAHADAHIAAAAQABAAAAABIAAAAQgFgBgGgCIAAAAQgLgDgLgFQgBAAAAAAIAAAAQgBgBgBAAIgHgDQgEgCgDgBQABABAAACQAIACAHACIAAAAQAAAAABAAQALADAKADIABAAQAAABAAABQADAGACAGIAEAMQABAEACAEIAAAAQgIgEgIgEIgDgBQgDgCgEgCQACAGABAGIAIA0QgFACgGABQABAQgBAPQAAAGAAAGQgEA3gWAvQgEALgFALQgWAwgnAqQgKALgLAJQgJAIgJAHIAAAAQgGABgHABQgBAAgCABQgDAAgDAAQgOACgRAAQgBAAgBAAQgPAAgNgBQgLAAgMgBIAAAAQgDgBgCAAQgCAAgCgBQgEAAgEgBIAAAAQgWgOgUgTQgNgLgMgNQgFANgGANQgCACgBADQgHgDgGgEIgVgMQgCgBgBgBQgBgBgCgBQgNgJgOgLQgLgJgLgJQgnglgbgtQgFgMgFgJQgGgPgGgNQgBgEgBgCQgDgKgEgKQAAgDgBgDQgDgNgDgOQAAgCAAgCQgBgFgBgFQAAgBAAAAQABgMACgLQABgBAAgBQADgTAGgSQACgJAEgIQAFgOAGgNQAFgLAGgKQADgEADgFQABABABABQAQALAQAOQALgYAQgVQAOgUARgSQAIAIAHAJQALAMAKANIAAABQAFgHAFgGIALgMQABgBABgCQACgBACgCQA+hBBRgTAAAjOQgBgCAAgCQAAgCAAgCQAPAHAOAIQAJAFAIAGQABABABAAQAEADAEACIA4AsQABABABAAQAXAWARAYQAEAFAEAGQABABAAABQABABABABQAAABABABQAFAJAEAIIAEAIQACAEACAEQAFACAFACQABAAAAABQADAJADAIIAFARQAEANADAPQABADAAACQAAABAAABQABADAAADQADAXgBAZQAAARgCAQQgFgDgFgDIAAABQgLgIgMgIQABB0hUBZQAAABgBABQAAAAgBABQAAAAgBABQAAABgBAAQAAABgBABQgFAFgGAFQAAABgBAAQgDADgCACQgUAHgWAFAgIjSQAAgCgBgBQAAgBgBAAQACgBACgBQADABACABQAAgCAAgCAgNjVQABAAABgBQABAAABABQAEABAEACAgNjVQABgBABAAQABAAAAgBQAAgBgBgCAgDjIIgFgKQAEACAEACQANAIANAKQAAgCABgCQAAgCABgDQAJAFAKAFQAaATAYAZQABABAAABQACABABABQABABABABIAzBOQACAGADAGIAAAAQAFANAEAOQgEgCgDgCIgDgCQgDgBgCgCQAHATAEAUQADASABATQgSAGgTAEQg4g3gbhEQgMgggHgiQgBgIgBgJQgCgMgBgMIAAAAQABgHABgIQAHAFAGAGQASANARAPQAtArAYAzIAAABQgFgDgFgCIgbgQQgFgDgFgDQgHgFgGgGQgBAAgBgBQgggagWgeIgVgeQgDgFgCgGQAAAAAAAAQgBgIAAgIAgNjVQADABACACAABi+QgCgFgCgFAABi+QgCgFgCgFAAGizQgDgGgCgFAi0hYQATgZAZgYQAXgWAZgRQAkgaAigOQACACADABAg6joQAXAEAWAJAg7joQATAFASAJAAhjhQAAAAAAAAQABgDABgDQAAgBAAAAQABgCABgCQABgGACgGAAVjkQABAAACgBIAAAAQAEgBADgBAAZjhQAEAAAEAAAAJjfQAIgBAIgBAAjjoQACgBABAAIAEgBQACgBACAAQACgBACAAIAdgGQAPgCAQgCQAKAAAKgBQA+gBA2AdQAHADAHAFQAGADAFAEQAiAXAeAgQAjAmAVAsQAFALAFAKQAPAnAGApQgLABgLAAQgFABgFAAIgFAAQgGgBgGAAIAAAAQABAKgBALQAPAKANALQAMALAMAKQgDAngLAfQgDAAgEAAAAqjqQACgBACAAQACgBACAAAAjjnQAKgCALgBAAYjlQAFgBAGgBAAQjKQAGACAGADQAJAEAIAFQAFADAFADAA4jqQAWAFAVAHQAqAFAnAPQAEADAFADAAAjsQALADAMAEAAGjeQACgBABAAAhfjuQAEABAFAAAB7oVQADgEAEgEAByoHQAFgHAEgHACrjPQAFADAEACQAAABABAAQA8AXAzAuIABABQACABABACQAEAEAEAEIAqA6QABAAAAABQABACABACQAAABABAAQADAIADAHQgIAGgIAFQgBABgBAAQgFABgGABAlFipQARgQATgMAE6AQQABAFAAAFAFlAiQgIAAgIgBQgNgBgMgCQgEgBgFgBQAAACAAACQAAADAAADQgBACAAACQgBAGgBAIQAAABAAACQgBADAAADQgBADgBADQgDANgEANQAAACgBADQgBAEgCAEQgBAEgBACQgEALgEAKIgBABQgCAFgCAFQgOAegUAbQgnA0gzAhQgVAOgWAKIgjAVAGBAkQgGAAgGgBQgEAAgEAAAFVgdQALAdAFAiAFegfQgFABgEABAEoiAQAEAEAEAEAEliDQACABABACABug6IAAAAQARADARAEQAFALAEALQgXgOgUgPQgFgDgEgEIg6g2QgHgGgHgHQgWgZgGghACfgvIAAAAQAFANAEAOIAAAAQACAGABAGACag7QACAGADAGACWgzQgEgCgDgCQgFgCgFgCAC1gpQABABAAABQADAGACAGACygxQACAEABAEADAglQAJACAIADQgIgBgIgDQADAJADAIAC6gzQAEAHACAHADKgDQgEgCgEgCQgIgEgIgEACogUIAAAAIAAAAACvgQQgDgCgEgCACZgdIAAAAQgXgNgUgQQgFgDgEgEACegaQgDgBgCgCADLAkQgMAEgMAEQABARAAASQAAAKAAAKQgDgCgDgDAEPgGQACAGACAGQgKAFgKAFQgIADgHADIAAAAQgOAGgOAFQgEACgFABADigcQABABAAACQAXAJAVAKADdgqQADAGACAIAEZB9QAAAGgBAGQgBAGgCAGAD1CJQgGgDgGgDQgKgFgKgGQgFgCgFgDQgNByhVBQQgHAGgHAGQgIAEgIACIgoAeQgHAEgHAEAFkCmQgHAAgHgBQgUBCgtA3Qg6A2hHAUQgbAPgcAJQgFABgGAAQgHAAgIABIgQgBQgBAAgCAAQgGAAgGABIAAAAQgDAAgDAAQgIABgHABQgCgBgCgBAGbCoQgDAAgEAAIgCAAQgJAAgKAAQgNAAgOgCAGtCnQgJABgJAAAE4AIQABAEABAEAihg3QBEgOBLAAQAhAAAhADQAgADAeAFAi/hnQAFgGAFgGAi0hYQADAGAEAGQAGAKAGALQAHAPAHAQQAPAoAFAwQACANAAAOQgCATgDATQAAAMAAAMIAAAAQAAAGAAAFQgEA1gQAvQgDAJgEAJQgMgOgKgOQgIAMgJALQhChSgBhtQACgcAGgbQAFgZAKgYQAIAJAIAJQAEgOAFgPQADgHAEgIQAEgHAFgIQAGgLAHgKQADgEADgEgAi9gxQABAAABAAIAAAAQABgBAAgBIAAAAQAGgNAHgMQATgjAggfQA1gtA4gaAi9gxQABABAAABQAFAFAFAFQAbAwAMAzQAHAhACAiQgCAIgCAIQgLAxgXAqQgshLgChdIAAgHQABgIABgIQgLgDgKgDQgLgEgLgEQgSgGgRgIQADgPAFgOQABgDABgDQAPgGAOgGQAKgDAJgDQAJgSALgSQAGAHAHAGQAFAFAFAFgAi8gvQABgBAAgBQANgDANgDAi/hmQAGAHAFAHAjwhfQANgSAPgPAkih/QAQAJAQALQAJAGAJAGQAJAHAKAIQAEAEAFAEIAKgPQAFgIAGgHAkugUIAQgoQAAgBABgBQAIAHAJAIQAJAIAIAJQAGAGAFAGQAEgJAEgJQAMgEAMgEQAKgCAJgDAkMgvQAMgZAQgXAjUAtQABgNADgNQAMAQALASQgOgEgNgEgAkYgSQAFgPAHgOAjKhXQAFgIAGgIAiFCTQACADABADQACAEACAEAjREkQgEAFgFAFQgEgEgEgFQgTgUgPgVQg5hUAAhrQACgbAFgaQABgDABgDQABgEABgEQACgHACgHAjREkQgBgBgBgBQhThhgDiEQACgWAFgWQgKgFgKgEQgGgDgHgEQAJgDAIgEQACgHACgHAixFFQgMgLgLgMQgFgFgEgFAjQEkQgBAAAAAAAjDFgQgSgLgSgOQgEgCgDgDQgKgHgKgJQgvgogdg0QgFgLgEgLQgEgIgDgJQgFgRgEgRQgGgegCgfIAAgFQAAgPABgMQgBgGgBgGQAAgEAAgDQAAgBAAgBQACgCADgBQADgCADgCQARgKARgJQgPgHgPgJQgCgBgCgBQgGgDgFgEQgFgDgFgDQAHgPAHgPQAKgUANgSQABgCACgDQADgEAEgEQAIgKAIgJQADgDACgDQAKAEAKAFAjEEVQgGAIgGAHAioE0QgCgBgBgCQgOgNgLgPAirE5IAAAAQgDAGgDAGAiSFEQgCgBgCgCIgSgNAiTFEIgMgFQgGgDgGgDQgHgDgGgEAiTFEQgBgCgCgBAiSFEQAAAAgBAAAifE/QgGgDgGgDAhPFSQgFgFgFgEAhPFRIAAABQABABAAACQAAADABADIAAAAQAAABAAABQABAEAAAFQglgMghgWAhaFTQgdgFgbgKABSGBQgIAAgHABABpF/QgHABgGAAQgFABgFAAAAUFtQgBAAAAABQgHADgIAEQgBAAgBgBAAVFtQgBAAAAAAAATGFQgCgBgCAAIAAAAQgFAAgEAAQgTABgUgCIAAAAQgJACgJACAAjFlQgHAEgIAEAAiFnIgPAJQgHACgHACQAAABAAAAIgBAAQgFACgHACABOGEQgQAEgRACQgVADgXgBQgDAAgFAAQgFAAgFgBQgBAAgBAAQgEAAgEgBIAAAAIgBAAQgUADgWAAQgBAAgBAAQAAAMABALQACBDgLA9QiLgMh0hAQhKAkhagCQiRgChuhlQgfgcgYggQgKgOgIgOQgohGAMhWIAAgBQAIhEAcg5IAAAAQAEgHAEgIQAegyAxgrQBahOBygPAgiFwQAAAAgBAAQgCAAgDgBAgeFxQgCAAgDgBQgOgFgNgHIgIgEQgDgCgEgDQgEgCgDgCIgGgEAgdFxQgDAAgCgBAgdFxQgBAAAAAAIgggUQgGgDgFgEQgDgCgDgDAgTFyIAAABQgFgBgFgBAgTFyQgFAAgGgBAgTGLQgEAAgEgBAgVF/QgFACgHACQgIACgJACAgVF/QgGACgGACQgEgBgFAAQgJACgKABIgBAAQgBAAgCAAAAFF1IAAAAQAAAAgBAAQAAAAgBAAQgFACgGACAAFF1QAAAAgBAAQgEACgGADQgBAAgCABIgMAEAAFF0QAAABgBAAQAAAAgBAAQgEADgFACAgHF5QgBAAgBAAQgBgBgCAAIgLgEQgDgBgDgCAgJF5QgCgBgBAAAgTFzQgCAAgCABQgPAHgQAFQgKgCgKgDQABAEAAADQg8gPgxgmQgGAJgHAKQgFAGgFAHQgDAEgEAFQgEAFgFAFQgBAAgBAAQgDgBgDgBQgBAAgBAAIgGgCQgJgDgJgEQgHgCgHgDQgJgFgJgEQhCAqhPAGQhchJgsheIAAgBQAcg6AtgxQAQgRARgRQgBgKAAgLQAAgDAAgDIAAgKQAAgRACgQQAAgCABgBQAAgBAAgBQAAgBAAgBQAAgBAAgBQABAAAAgBQAAgBAAgBQAAgBAAgBQADgOAEgNQAIgdANgaQgagVgXgXQArgIAmABQAHABAHAAQAFABAEABQAGABAGACQAGABAGADIAAAAQABAAAAgBIAAAAQABgFACgEIALgaQAAgBABgBQAFgLAGgLAgIF0QgFgBgGgBAgIF0QgFgBgGAAAACF0IgKAAAhGFgQgDgDgEgCQgEgCgDgCAhJGCQAAAAAAAAQgGABgGAAQgEgBgDAAIgpgJQgDgBgEgBQgcgIgbgPAhWGDQgDgBgDAAAhVGDQAAAAgBAAQgGAAgHgBQg5gBgxgUQgbgLgagQQgggUgcgeQgfgggUgkAhEGDQgDABgCAAIgGAAQgDgBgDAAAhJGGQgIABgJAAAhEGDQgDAAgCgBAhPGEQgDgBgEAAAhJGLQgHABgIAAIgFAAAhJGKQgHABgIABAgyGAQgFABgGABQgEABgDAAAg1GHQgEgBgEgBAhBGFQgEABgEAAAgzGHQgLACgLABAg+GFQgDgBgDgBAgzGHQgLACgLACAg+FdQgGgDgFgEQgDgCgDgCAgcGKQgLgBgMgCAgLF6QgTAEgTACAAVFtQgIAEgIADAAxF0QgXACgVgBAATFwQgHACgHADAiCGIQgDgBgDgBQgBAAAAAAQgngEgkgMQgdgLgbgRQglgWgfghQhZhdgCiCQAAgDAAgDIAAgBQACg6AWgyQAGgPAIgOQAMgUANgRQANgSAOgOQABgBABgBQABgBACgCQAAAAABgBQAAAAAAAAQABgBAAAAQAYgXAagQAhfGMQgGAAgHgBQgEAAgFgBQgFAAgFAAQgNABgNgBQgkgBgggJIAAABQgMAMgMAMQgqAogwAXQgKgFgJgGQgCgBgBgBQgBAAgBgBQgogYghgbQgXACgYgBQiKgFhjhnQgzg0gZhAQgYg6gChEIgBgCQAAgLAAgMAhbGHQgMABgOgBQgKAAgJgBQgEgBgDAAAjtF8QgZgJgXgNQglgVggghQhUhegHh/QAJgHAJgIQAJgHAJgGQADgyAQgrQgHgEgGgFQgGgEgFgDQgIgHgJgHQAFgLAHgKQAJgPALgPQAPgUASgSQALADALAEQAEABAEACQAAAAABAAQAGACAFACQAHADAHAEAhYGNQgDAAgEgBAAhFTQgZATgbAMAlhhsQABAAAAgBQAAAAABgBQABgEACgFAlfhuQABgCACgCAlghtQAIADAGADQAKAGAJAIQAFgHAFgIQAJgMAKgLAlsg8QAFgZAHgYAmGCvQgOgqACgvIABAAQAAgIAAgJQABgLABgLQAPgKAQgKQgCgXABgVQAAgEABgDQABgSADgSAkygGIAAAAQANgHANgFAk0ACQABgEABgE");
	this.shape_150.setTransform(272.5,213.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF9900").s().p("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jrIADgBIgDABIgDAAIAGgBIANgEIAKABIgKgBIgMgBIgDAAIgCAAIgFAAIAAAAIAAAAIgNAAIgEAAIgJABIAJgBIAEAAIANAAIAAAAIAAAAIAFAAIACAAIADAAIAMABIgNAEIgGABIADAAIAAAAgACpjtIAJABIgJgBIADgMIgJgBIgGAAIgEAAIAAAAIgBAAIgOABIgFAAIgBAJIABgJIAFAAIAOgBIABAAIAAAAIAEAAIAGAAIAJABIgEAMIgBgBIgZgCIgKAAIAKAAIAZACIABABIAEgMIgDAMIAAAAgABQjsIAXgDIgXADgAAtjuIgJgBIAJABIgHAAIgEAAIAEAAIAHAAIAAAAgABejxIgBABIABgBIAJgCIAAAAIAAAAIgJACgACOGLIgEAAIgFAAIgJAAIgKgBIgCAAIgIgBIALgBIgLABIAAAAIgBAAIgXgDIABAAIAgACIACAAIgCAAIgggCIARgFIAFABIAYABIAAAAIAAAAIAFAAIAFAAIgWAFIAWgFIAKgBIAEACIACAAIANADIgGABIgLAAIgBAAIAAAAIgDAAIgEAAIgMAAIgOAAIAOAAIAMAAIAEAAIADAAIAAAAIABAAIALAAIAGgBIALACIgCAAQgQACgRAAIAAAAIAAAAgAgVGJQgkgBgggJIAJgKIAHgJQATAKAVAHIAPAFIAHACIAGABIAGACIAEAAIAGABIADABIgDgBIgGgBIgEAAIgFgCIASABIANAAIANAAIgOACIgMABIgKAAIgMAAIgNAAgAgFGFQgngEgkgMQAkAMAnAEgACxGJIAAAAgABoGJIAAAAgABnGJIAAAAgAAOGJIAAAAgACmGHIAAAAgACmGHIgNgDIgCAAIgEgCIAOgBIAHAAIAAAAQAQACAQAAQgNADgOAAIgHABIAAAAgAgFGFIABAAIAFACIgGgCgABQGGIASgFIgJgBIAJABIgSAFIgBAAIgBAAIgIgCIATgEQAQgDAPgFIACABIgMAFIAMgFIAFACIAQAGIgGACIgFAAIgFAAIAAAAIAAAAIgYgBIgFgBIAMgDIgMADIAAAAIgRAFgABQGGgABOGGIAAAAgABCGEIADAAIABAAIAIACIgMgCgAgEGFIAAAAgACTGCIAAAAIAEACIgEgCgABFGEIAAAAgAA6GDIAAgCIAAAAIAEABIgEABgADIGDIAO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");
	this.shape_151.setTransform(259.4,213.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FF9529").s().p("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");
	this.shape_152.setTransform(272.5,213.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("rgba(107,64,21,0.42)").ss(0.1,1,1).p("AEXqLQAOgNAOgMQAZgVAXgTQAlgeAsgSQBngqBrAaQANAFAMAHQAKAFAFAEQAKAFAJAGQCMBaAcCkQAHApAAApQAABCggA+QgZAugjAqIAAABQgBAAgBACQhtCEidAeQhIAOhFgHQgMgCgMgCQAAABABACQAEAJADAKQAAAAAAABQAIAXADAaQAAAAABABQAAACAAACQABAMAAAMQAAAHAAAGQgBANgCANQADADAEACQAJAHAKAHQgGAggLAYQgCAGgDAGQgRAmgfAfQgHAHgIAHQgqAjgzAZQgGAEgHADQgnARgsAGQgHABgHAAQgCAAgBAAIgygCQgEgBgDgBIgBAAQgDgBgEAAQgFAAgFAAQgPADgOgCQgEAAgFAAQgIAAgHAAQgCgBgCAAQgDABgDABQgXAEgYAAQgOAAgNgCIAAAAQgLgBgLgCQgIgBgHgCQgEgBgEgBQgDgBgDgBQgEgBgEgCQgSgGgRgJQgHgEgGgDQgUgKgQgLQgKgGgIgGQgFgEgFgEQgFgEgFgEQAAAAAAAAQgBAAgBABQgJgIgIgJQgXgYgQgaAJYnXQAGADAFACIBFAvQBxBZgFCDIAAABQAAABAAABQgBANgBAMIhDCZQgCAEgDADQgCACgCADQgDADgEADQgMANgOAOQhjBeiIABQgVAAgVgCQgKgBgKgCQgEgBgEAAQgDAWgGAVQgZA7g1A3QgGAGgHAGQg3A5hKAPQgEABgEABQgQADgSABQgNABgMAAQgNADgMACQgEgBgDAAIgBAAQgIgDgJgDQgQACgPAAQgBAAAAAAQgCAAgCAAQgBAAgBAAQgQgBgQgCQgDgBgDAAQgCgBgCAAQgFgCgFgBQgCAAgBAAQgogIgkgeQgCgCgCgCQgMgKgLgLQgCgDgCgCQgHgIgGgHQgPgJgOgLQgCgCgDgCQAAADgBADQgGgIgGgIQAAgBgBgBIgBgDQgDgDgCgEQgDgFgCgEIgliVQAAgGABgGQAAgJACgJQANgFAMgFQAFgCAFgBQAEgCADgBQAEgBAFgBQAGgCAGgCIAAAAQAFgCAGgBIAAAAQADgKAFgJQgQgEgPgEQACAFADAGQADAIAEALQAFgCAGgBQAMgEAOgDQAFgBAFgBIAKgCQgJgCgJgBQABgEACgDQAYg0AvgsQAVgTAXgQQASgOATgKQADgCADgBQACgBABgBQAEACADACIAAAAQAGgDAEgDQAMAGAMAHQAFADAFADQACACADABQAFADAFAEQABABABABQATAPASATQACABABACIA4BUQACAGADAHIAAAAQgFABgFABQgLACgLACQAAABABABQANADANADQACAGABAHQABACAAABQAIAjgCAmQgFB2hWBOQgDACgCADQgJADgJADQgMADgMADQgBAAgCAAQgDAAgCABQgDAAgDABQgLABgLAAQgBAAgCAAQgNAAgMABQgGAAgGgBQgTgPgQgSQhPhXgCh3IAAgHQADgiAKgfQgCgBAAAAIgBAAAJYnXQAGADAFACAJYnXQACAHACAGQADARABAQQANB/hNBeQhKBdh0ASQgCABgBABQgDACgDACQgJAFgJAGQAQAXAMAZQgQgCgPgEQAYAvgDA6QAAAAAAABQAAALgBAKQAAAIgBAIQgJgCgIgDQgIgDgIgDQgNgFgNgGQAAAFAAAGQgCAegHAbQgDAJgDAJQgNAlgZAhQgGAHgGAIQgMAOgOAPQgZAbgcAUIgBABQgCABgBABQgBAAAAAAQAAAAAAAAQgJACgIACQgEACgDADQgQAJgRAGQgFABgFABQgNAAgNgCIgBAAQgCAAgBAAQgDAAgCABQgEAAgCAAIgBAAQgCAAgCgBIgGgDQgCAAAAgBQgGgCgGgCQgCgCgCgBQAAAAAAAAQgDgCgDgBQgBAAAAgBQgBAAgBABQAAAAAAAAQgEgCgDgBQgBAAgBAAQgGgBgGgBIAAAAQgQAIgQAGQgGACgFACQgxgPgoggQgPgLgOgOQgDgDgCgCQgDgDgCgCQgKgMgJgLQgGAUgIATQgFALgGALQgBABAAACQgUgNgTgRQgFAGgGAFQgEAEgEAEQgFAEgEAEQgCABgBABIAAAAQhBA0hOANIAAAAQggAEgigBQh9gGhaheQgkgmgWgsQAYgyAigtQASgXAUgVQAwgzA5giQAkgVAngOQA3gNAuAGQAIABAHACQAMAEAKAFQAGAEAFAEQACgGADgEQAGgKAFgIQAEgFAEgFQAQgXASgQQAAgBABAAQAAAAAAAAQADgDADgCQAEADAEAFQABAAABABQAEAFAFAFQACgCACgBQANgPAOgMQAFgEAFgEQAYgSAcgOQABgBACgBIARgHQACgBACgBIABAAQAAgBABAAQADgBADgBQAGgCAHgCIAEgBQABgBADAAIAAAAQAIgCAIgCQABgBACAAQAHAAAGgBQAHgBAHgBQAHAAAHgBQAdACAcAGIAAAAQAEABAEABQAUAFASAIQABAAACABQABABACABIAAAAIABAAQAAAAABAAQAAgBABAAQAHgDAHgCQABgBACgBQAFgBAFgCQACABACAAQAIgBAJgBQgBgCgBgCQgCgDgBgDIABAAQgDgGgBgHIgDgNQgCgEgCgDIgVg3QgDgOgCgPIgBAAQgBgJAAgJQAaABAYAFIAAAAQAEgMAEgMIBLicQBCARA8AgQBGgkBUgDQAwgCAtAJIAvAQQAIADAHADgAJJndQAIADAHADAEhqNIAJgBQABAAABAAQB1gPBZBCQAdAWAWAZQAdAkAOAxAMUjGQAAABAAACQgBAMgBAMAoSjWQgRgVgMgWQAAgBAAAAIAAgBQBChyCShRQCThQC0AAQA4AAA3AIQACgDADgEIAFgHQABgBACgBQABgDACgCQABgBABAAICdhkQAGgBAHgCIAAAAQAFgBAFgBAoSjWQAGAAAHABQBoAFBQA/QAIAGAHAHQAGgGAHgGQAAAAAAAAQBCg4BeAEAEXqLQAFgBAFgBABUoDQADgGAEgFQACgDADgEABUoDQADgGAEgFIAAAAQAmAGAkAKQAWgjAbghQAfgoAighAkTi+IAMgQQACgBABgCQAYgaAbgWQALgHAFgDQAPgLAKgHQADgBACgBQAFgCAEgCQACgBADgBQAKgGALgGQACgBAEgBQAEgBAEgBQADgCACAAQALgFALgEQADgBADAAQAEgBAFgBQALgDAIgCQADAAADAAQADgBAEAAQACgBADAAQAVgEATgDQADABADAAQAFAAAEAAQACAAADAAQADAAAEAAIA0izAkeiuQAfgRAjgGQAdgFAaABQAGAAAHAAQALAAAMABQARABAPAEIABAAQAEgBAEAAQARgBARAAQAKABAJABQABABABAAIABAAQACAAADABQADABADABIAgAJQADABACABIAAAAIABAAQABABACAAQACAAACAAAkfiuIABAAQAFgIAGgIAkfiuQAGgIAGgIAiwi7QABAAABAAQABgBABAAQAhgHAlACQAAAAABAAQAAgBAAAAQABAAABABQAAAAABAAQAHABAIABQAHACAGABQAEgBADAAIABAAQAEAAAEABIAAAAQADgBACgBIAJgDQAAAAABAAIAAAAQADgBADAAAiwi7QACgBACAAAiyi5QACgBADgBQAZgEAbACQACAAADAAQAHgDAIgBQABAAACAAQAEAAAFAAQANABANADAkThZQARgUATgQQAZgVAagNQAMgGALgFQALgFAMgDQANgHANgEQASABARADQAHABAHACIAAAAQABgBACAAAhljCQACAAACgBAhljBQABAAABAAQAEAAAFAAQAAAAABAAQADABADABQAFACAGACQABgBABAAIABAAQAEABAFACQADgCADgBQADgBACgBAiRjEQABAAACAAQAVAAAUACAiVjDQACgBACAAABAjjQgDgVAGgZQABgFABgGQABgEACgEQAAgBAAAAQAAgCABgBIAEgRQACgJADgIQADgMAFgMABNk5QACgJADgIQAbAFAZALQANgWAQgUQADgEAEgEQANgQARgQQAEgEAGgFQAmgiArgWQAHADAHAEQCSBRBCBxQg2BghtBHQgDABgCAAQgEAAgDABQABACACACQAVAeANAhQAXA2AABCQAAAEAAAEQgBAIgBAIQgBAGAAAFQBBA0ApA/QAHAJAFAJQhCB0iSBRQiTBRiyAAQhAAAg8gLQgCAlgGAkQgHA/gnAsQgoAthFAQQhaAchjgMQhHgJg+gcQhVgng6hEQhph9AhisQABgHABgGQgwhGAPhXIAAgBQAJhDAeg2QACgDACgDQAcguAtglQBlhWCGgBQA4gBAzAPQhFgwgsg7AhFi8QADgBAEAAIALgDQAGgBAGAAQADgBAEAAQAGgBAGAAQAQgBAPABQAWABAVAEQAJgDAKgCQgBgDgBgDQAGABAGACQgKgOgJgPIAAAAQgCgEgCgDAg/i4QABgBACAAQAUAGATAJIABAAQADABADACQAGgDAFgCQACgBACgBIAFgCQABgBABAAQADgBADAAIACAAQACgBACAAIAAAAQABABABAAIAAAAQABAAACgBQAAAAABAAQAAgBABAAAhDi2QAJACAJADQAJAEAJAGQAEACAEADQADACADACQAEgCADgCQACgBABAAQAFgDAFgDIAAAAQAJgFAKgEIAAAAQAJADAIAEQADABACABIADACQAbAKAZAPQgCgGAAgGIgDgMQgGgGgGgIQAFABAEAAQAAAAABAAIAAAAQAAAAABAAQAAAAABABQACAAACAAQACAAABABIABAAQgGgGgEgFIAAgBQAAgBAAgCQAAgCABgCQAAgCAAgBQAFgcAIgZQALghARgdQAUAIASAMQAFADAEADQABABABABQAoAyAWA6QAFACAGAEQAjAWAfAiQAKAMAKANQgNABgNAAQAGAHAFAHQgLAGgLAGQAAAAAAABQgJAEgIAEQAFAHADAHQACADACAEQAWAkAHA3QgBAFAAAGQAAABAAACQAAAGAAAGQgBADAAADQAAAHgBAIIg4CVQgGAJgIAJQAAABAAAAQgBABgBABQgDADgDAEIgHAIQAAAAgBABQgGAHgGAFQgjAjgpALQgDABgCABQgdAIgfACQgFAAgEABQgNAAgNgBQgCAAgBAAQgEAAgDABAg/i4QAHADAHAEQAMAEALAEQADACAEABQABAAABABQAEABADACIABAAQALAFAMAHQAiATAeAdQAUATAQAVQAEAFADAFQAPAYAJAaQACAFADAHQAFABAGACQAGAUADAWQACAVgBAWQgDBUgrA8QgIAMgJALQgLANgMALQgCACgDACQgDACgDABIgKAEQgCABgBABQgBABgBABIg6AlQgDACgFACQAAAAgBAAIgBABQAAAAAAAAIgBAAIAAAAQgBgBAAAAQgEAAgDgBQgFgCgFgCQgEgCgEgCQgUgKgSgNQgNgJgMgLQhYhOgHh4IAAAAQAAgTACgRQAEgaAIgZIAAgBQABgEABgDQgKgCgKgDQAWgxApgsQAugxA6gUQADgBACgBQADAAADgBQACgBACgBIAJgCQACABACABIAAAAQACgBACgBAhDi2QABgBACAAIABgBAhajBQAOABAOADAhIi7QAEABAFACAhRi5QAEgBAFgBQABgBACAAAhIizQACgCADgBAhIizQACgCADgBAgXjHIAIgCQABAAABAAQAWgHAZACQANAAANACQAFABAFACQgCgGgBgHAgnjBQACgBACgBIADgBQACgBACAAQACgBADgBAgcjFQACgBADgBAggjEQACgBACAAAgaipQADgBACAAQADgBACgBAgRieQAEgCAEgCQABgBABAAQAKAGALAHQAZARAWAYQAtAyARA9QgCABgCAAQACAAADABQAKAogCAtQAJByhQBYQgIAHgHAIQgZAXgcAQQAAAAAAAAQgBAAAAAAIAAAAIgBABIAAAAQAAAAgBAAQgBAAAAABQgJADgIADQgCABgBAAQgLADgMACQgJABgJABQgCgBgBAAQgDABgCAAIAAAAQgEAAgEABQgDgBgCAAIgegGQgEgBgDAAQgOgEgOgGQABAGABAGQABADAAADQABABAAABQAAADABAEQgIgBgIAAQgBAAgBAAQgigCgggKQgPgEgOgHQgVAfgdAcQgaAYgcARQhQAxhkgDQiEgChlhcQgdgagWgcQgFgGgDgFQANhEAdg+Qgfg+gEhMIAAgCQgBgFAAgEQAAhCAfg1QAagqAqgjQBYhLB3ACAgDisQADABADACQAJgFAKgEIAAAAQABAAACgBQADACADACQAEACAEACQAAAAABABQACAAACABAgDisQADABADACAgHiuIAHgBQADgBAFgBIAAAAIABAAQADgCAEgBQACABACAAQABABABAAIAAAAQAJAEAJAEQAJAEAJAGQADACADADQAUAPAVATQgEgKgCgLIAAAAQAZAOAXASQADADAEAEQAKAOALAJQANANALAPQALANAIAPQAJAPAGAPQAEAMADANQABAEABAFQADAMABAMQAAAFABAEQAAALAAALQAAAAAAABQAAABAAABQAAABAAABQgBABABABIgCAVQAAAGgBAHQgBAFgBAFIgDASQgDAKgDAKQgSA0gjAsQgdAkghAYIAAABQgGAAgFABIghADQgDAAgEAAQgCAAgCAAQgPACgNAAQgJAFgJAEQgCAAgBABQgFACgEACQgFABgFACQgJACgKACQgNgBgNgBQgEgBgEAAQgEgBgDgBQgCgBgCAAIgDgBQgEAAgEAAAg2i8QAPADAPAFQAIADAJADAgzjAQAGgBAGAAAAaizIAAAAQAWgDAXACQABAAABAAQAFAAAEAAQgBgBgBgCQgDgEgCgEQAFAAAFAAQACgBACAAIAAAAQABAAACAAQAHAAAGAAQAAAAABABQABAAAAAAQABAAAAAAQABABABAAQAAAAABAAQABAAAAABQABAAAAAAQAdALAbARQAAAAAAAAQASALARAPQACACACABQAPAJAOALQAKAJAKAJQAHAIAIAIQAJALAHAMQgGADgGAEQgBgBgBAAQAAAAAAABQABAGAAAHQAAABABACQAAADAAADQAAADAAADQAAAPgBAOIAAAAQABADABADIAHAsQALAFALAGQALAGALAHQAIAFAIAFQAPAJAOAKQgBACAAACQgPgDgOgEQgFAkgNAgQgBABgBACQgBADgCAEQgCADgBAEQgBABAAABQgBABgBABQgBACgBACQgCAEgCAEQgGAIgGAJQgCADgDAEQgMAQgPAPQgBABgBAAQgBABgBABQgBABgBABIAAAAQgBABgBABQgEAFgEAEAAUi1IABAAQALgEAMgCQAHgBAHgBQALADALADIAGACQADABADABQAAAAABABIAAgBQACABADACIACAAQACABAEACIAAAAQgCgCgCgCQAiAEAhAMAAYizQABAAABAAAAGiwQABgBABAAQAAAAAAAAIABAAQACgBADAAAAIixQAEgCAEgBAALi2QADABACABQACAAACgBAARi0QABAAACgBABUjGQgBAAAAAAQABAAABAAQAEABAEABQAGACAGACQAAAAABAAQAIAAAIABQAJABAJABQABAAABAAQAEAAAEABQACAAADABQABAAACAAIBXAiQAGAEAGAEIAAAAQAFAUAEAUIAAAAQACACADACABUjGQAAAAABAAQAEgBAEAAQANgDAOgBQAJAAAJgBQA4gCAxAaQABABABABQAHAQAFARQAFAEAGAFIAMAJQABABABABQACACACABQARAPANARQgRABgRgCQgHgBgHAAQAAABABACQABACAAADQABADABADQAAAAAAAAQAAADAAADQABAHABAHQAAAEAAAFQgTgHgTgJQgGgDgHgDQhCgjgxgwQgHgGgHgGQgBgGAAgGQACAAADACABci8IAAAAQgCgCgBgCQgDgDgCgDABci8QgCgCgBgCQgDgDgCgDABqitIAAAAIAAAAQACABABABIACABQAJADAIAFQAhATAgAeQAEADAEAFQAIAHAFAGQAMANAKAOQAKANAIAOQAEAGAEAHIALAeQABACABACQABADABADABqitIAAAAQgDgCgCgCQgFgGgEgFABkiwQADACADABABWi1QADABADABABJjDQAFgCAGgBABdizQgBgEAAgFAAAivQAEgBAEgBAhgjDQADABADABAj4gzQAWgoAkghQAjgfAngSQARgHASgFAEKqIQAHgCAGgBABqitQACABABABABximQgDgDgEgEABximQgEgDgDgEAEKhpQACACADACIAEAEQAEADADADQANANAKAOQALAOAIAQQgOgDgOgEQgKgEgKgDQgBAAgBAAQgKAFgKAFQgSAHgSAHQgQAGgRAFIAAAAQgKADgJADIAAAAQgGABgFACQACAFACAGIABAEQAAABABABQAQAEARAFQABAAABABQAAABAAAAQgBgBgBgBQgBgBgBAAIgUgVQgDgEgDgDQgFgGgFgGIghg3IgOgjQgCgGgCgGQABACACABQAFAFAFAFQAYAVARAZQAAAAABABIATAkQADAGADAGQACAHACAGIAHAWQAAAAAAABQAXAHAXAKQAMAEAMAGQABAAABABQABABACAAQAAAAAAABQACAAACABQACABACABQACABADACQABAOgBAOQgKgFgJgGQgKgFgJgHQgVgOgUgRQgFgFgEgEQACAKACALQAAAEABAEQAAAKAAAJQgBARgDAQQgBAIgBAHQgKAygZArQgDAHgEAGQgOAWgPAWQgCABgBACQgDAEgEAEQgQAUgTAQQgFAEgGAEQgQANgRAJQgNAAgMAAQgIgBgGAAIAAAAQgCgBgCAAAD1iZQAGAEAGAEQAFAEAGAFAEKhpQABAGABAHQgGgBgFgBQgigGgegNQgdgNgbgTIgYgVAD/hyQAFAEAGAFAD/hyQAFAEAGAFACzgZQADAGADAGQACAHACAGACsAAQgDgDgDgEQgFgGgFgGACWgRQACAGADAHQACAFACAGAB2ADQgEABgEABQADAKADAMQAFAegCAfQgCA4gWAuQgEAJgEAKQgUAsgjAlQgIAKgKAIQgDADgDADQgPANgRAKQgIgFgIgFQgFgEgEgEQgDgCgCgCQgJAAgJgBQgBgBgBAAQgdgEgcgJIgBAAQgCgCgDgCIgFgEQgBgBgBgBQAAAAgBgBQgBgBAAAAQgBgBAAAAQgCgCgBgBQAAgBgBAAQgBgBAAAAQgJgKgHgJQgBgBgBgBQAAgBgBgBQgKgOgIgNQAAgBAAAAQgMgUgHgWQgBgCgBgCQgCgHgCgHQACAFACAEQAAAAABABQAAABAAABQgBABAAABQgCAYgEAWQgIgNgGgOQgCgDgBgDIgbhsQAAgBAAgBQgBgJAAgKQAAgBAAgBQACgUAEgSQADgNAFgMQAAgBAAAAQAEgKAEgKIACgEQABgDABgCQADAGADAHQgFgCgFgCQgLgDgLgEQgFgCgFgCQgFgCgFgCQAIAIAIAIQAIAHAHAIQABACACADQAFAJAEAKQAKAYAHAYQACgPAEgPQAAgBABgBQAAgDABgCQAAAAAAgBQABgCABgDIAFgOQAMgEAOgCQAFgCAFgBABtABQAFABAEABQADABADAAABtABQAFABAFABIgBAAABtABQABACAAACQg/ALhDAAQhIAAhBgMQAAgBAAAAQBCgMBHAAQACAAADAAQACAAACAAQAEAAAEAAQACAAABAAQA4ACA1AIgAERAFQABACABACQgBADAAAEQAAACAAADQAAADAAADQgBACAAABQAAAHgCAHQAAABABABQgBADAAADIAAAAQgBADAAADQgCAJgDAJQgBADAAACQgBADAAACQgBAEgCAEQgBADgBACQgGATgIASQgBAFgBAFAD0CIIAAAAQgLAXgPAWQgoA6g5AiQAAAAgBABIgdAPQgGACgFACIAAABQgDABgDABAD1B7QAAAGgBAHACHFRIAAAAQgEACgEADIgjAQQgDABgCABQgFACgFABQgBAAAAABQgEgBgEAAQgMADgMACQgJgDgIgDQgDAAgCgBACIFRIAAAAIgBAAIAAAAQgEADgEACACLFPQgCABgBABQgJACgJABQgFABgGABACbFLQgJADgKADACbFLQgKADgKADAEAEPQAAABAAAAQgBABgBABQgKAJgLAIIgXAPIg3AZAECEOQgBABgBAAAEAEQQgMAKgLAJAEOD9QgHAJgHAKABjiOQgBgGgBgGABph5QgEgKgCgLABph5IAAAAAgRieQALAIAKAJQAQAMAPAOQA2AyAUBCAjmgjIAqg5QABgBABgBQAAgBABAAQAAgBABAAQABgCACgBQAGgGAGgFQAHgFAHgFQAEgEAEgEIBLgzAlFhBQACgCABgCQAFgGAFgGQAHgIAHgJQABgBAAAAQADgEADgDQAIAJAIAIAkvgyQAGAFAHAGQAEADAFAEQgNgFgMgGIgBAAQACgDABgCIABgCQABgDACgDQAHgKAIgLQAFgGAFgGQAOATANATQAHAMAGANIAAAAQADgEACgFAjtgVQABgDABgCQACgFADgEAjlAVQAGgCAGgCQACAIACAIIAAAAQAIAgACAlQgCAUgEATQABAUgBAUQALAYAJAaAkJgQQACgFACgDQAFgOAIgNAkkAsQAFAGAFAHQALAPALAQQAJ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");
	this.shape_153.setTransform(272.8,213.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FF9900").s().p("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IALAHIAFgKIALgRIAIAFIAEABIACABIAKAGIgCANIgNAZIANgZIAGgLIAYAMIgCAFIAAABQgGALgFANIgBADIgCAGIACgGIABgDQAFgNAGgLIAAgBIACgFIABAAIgDAFIADgFIgBAAIADgFIABgCIANALIAJAHIgJgHIgNgLIADgGIAPgVIAKgMQAOATANATQAWgoAkgiQAjgeAmgSQARgHASgFIAOADIgFACIAFgCIASAFIgSgFIgFACIAFgCIgOgDIAJgCIgJACQgRgDgSgBQASABARADQgSAFgRAHQgmASgjAeQgkAigWAoQgNgTgOgTQARgUATgQQAZgVAagOIAXgKQALgFAMgEQAMgGANgEQgNAEgMAGQgMAEgLAFIgXAKQgaAOgZAVQgTAQgRAUIgQgRIAEgDQANgPAOgMIAKgIQAYgTAcgNIADgCIARgHIAFgDIADAAIACAAIAAAAQAPgCAPAAIABAAIAAAAIAHAAIACAAIADAAIADAAIAFABIgFgBIgDAAIgDAAIgCAAIgHAAIAAAAIgBAAQgPAAgPACIAAAAIgCAAIgDAAIABAAIADgBQAZgFAbAAIABAAIAAAAIAGAAIACAAIAFABIABAAIgPAEIAPgEIADAAIgDAAIACAAIABAAIgBAAIAJAAIgJAAIgCgBIAEgBIgEABIgBAAQgSgCgTAAIAAAAIgCAAIgDAAIADAAIACAAIAAAAQATAAASACIABAAIAAABIgBAAIgFgBIgCAAIgGAAIAAAAIgBAAQgbAAgZAFIgDABIAGgDIANgDIAEgBIAEgBIgEABIAEgBIAAAAIAPgEQARABAPAEIABAAIgBAAQgPgEgRgBIADgBIANgBIAOgCIAOgBQAdACAcAGQgcgGgdgCIgOABIgOACIgNABIgDABIgWgBIgNAAIgFAAIgEAAIAAAAIgBAAQgTAAgWADIAAAAIgEABQgjAGgfARQgKAOgJAQIAAAAQAIgPAKgPIABAAIALgQIAMgQIADgDQAYgbAbgVIAQgKIAZgSIAFgDIAJgDIAFgCIAUgNIAGgBIAIgCIAFgCIAWgJIAGgCIAJgBIATgFIAGAAIAHgBIAFgCIApgGIAGABIAJAAIAFAAIAHAAIgHAAIgFAAIgJAAIgGgBIgpAGIgFACIgHABIgGAAIgTAFIgJABIgGACIgWAJIgFACIgIACIg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IAFAEIgFgEgAGYhsIAAAAgAieh3IgCgCIAFgDQA1gzBEgPQhEAPg1AzIgFADIgIgIQA6gzBMgKIACgBIgEADIgRAHIgDACQgcANgYATIgKAIQgOAMgNAPIgEADIgJgKgAFPh0IAAAAgAigh5IAAAAgAiuh7IAAAAgAD3h8IAAAAgADOieIgGgFIgSgLIAEACIgEgCIgBAAIAFACIADACQAbAKAZAOIAGAWQgUgTgVgPgAiriDIAIgQIAAAAIgIAQgAiriDIAAAAgAijiTQAJgQAKgOQAfgRAjgGIAEgBIAAAAQAWgDATAAIABAAIAAAAIAEAAIAFAAIANAAIAWABIgPAEIAAAAIgLAAIAAAAIgBAAQhSAAg8AvIgEAEIgCABIAAAAgAGPiUIAAAAgAGPiUIAAAAgACDilIABAAIgIAEIAHgEgACDilIADgCIAAAAIgCACgACDilIAAAAgACGinIAAAAgAB6ipIgHgDIAGgBIgBAAIAFgCIgEACIAGADIgDACIgCgBgAB/iqIAAAAgABci0IAXAIIgFACIgSgKgABzisIAAAAgABzisIAAAAgAB4itIAAAAgAB4itgAC1iuIAAAAgACki1IADgBIAGAEIAIAEIgRgHgADyizIgCAAIgFgDIABAAIAEABIADAAIAFAFIgGgDgAiRixIAAAAgAiFjBIgLAQIgBAAIAMgQgABci0IAAAAgACki1IAAAAgACki1IAAAAgACki1IAAAAgADqi2IAAAAIABAAIAAAAIgBAAgADri2IAAAAgADqi2IgGgCIAGACgADqi2IAAAAgADqi2gACni2IAAAAgACmi2IACgBIgBABgACoi3IAAAAIgBABIABgBgACoi3gACoi3IABAAIgBAAgACZi5IghgJIgGgCIgFgBIAMgBQAUAFATAIIADABIgBAAIgEABIgFgCgABKi5IADgBIgDABgADei6gADei6IAAAAgABNi6IAAAAgABOi7IAAAAgABFi+IADgBIAJADIgDABIgJgDgAA8i8IAAAAgABRi8IAAAAgABIi/IAHgCIAIACIgGADIgJgDgAggi/IABAAIgFADIAEgDgAC6i+IAAAAgADEjBIAEABIgOACIAKgDgAA6jCIANADIgCABIgLgEgAgei/IgCAAIgCABIAEgBgAgfi/gAggi/IACAAIgBAAgAggi/IAAAAgABXi/IAAAAgABXi/gABPjBIAAAAgAA6jCIAAAAgAA6jCIgPgCIAJAAIAGACIAAAAgADnjDIgFgGIAFAGgABajDIAAAAgABmjEIAAAAIgMABIAMgBgABmjEIAGgBIABAAIgHABgAAojEIAAgBIACABIgBAAIgBAAgABmjEIAAAAgABqjGIACABIgGABIAEgCgAAqjEIAAAAgAAojEIAAAAgAAojEIAAAAgAAojFIAAAAgAAojFIAAAAgAAojFIAAAAgAB5jGIAAAAgABxjIIAAAAIgEABIAEgBgAgDjHIAAAAgABxjIIAAAAgAAMjLIAAAAgADglNIAIgYIgIAYg");
	this.shape_154.setTransform(258.6,213.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FF942D").s().p("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");
	this.shape_155.setTransform(272.8,213.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("rgba(94,56,19,0.369)").ss(0.1,1,1).p("AFLqNQAOgPAPgNQAXgWAUgTQAggfAogTQBcguBnARQAMAFAMAGQAJAFAFADQAJAFAJAFQCHBRAfCaQAIAmABAnQABA/geA7QgYAughApQgHAJgIAJQAAAJAAAJQgFByhjBbQhaBUh8ABQg4ABgzgRQgHgCgHgDQgHgCgHgEQACAHAAAGQABAKAAAKQAAAGAAAGQgCAcgHAbQgCAFgBAFQgXAzguAwQgGAGgGAGQgvAyhAANQgEABgDABQgOAEgPABQgTABgSgBQgIADgJACQgCgBgDgBQgNADgNAAQgOACgLgBQgEgBgFAAQgHAAgHgBQgDAAgEAAQgJgBgJgBQgEgBgEgBIgGgBQgBgBgCAAIAAAAQgBgBgCAAQAAAAgBAAQgBgBgCAAIgBgBQgFgBgFgCQg2gVgrgwQgRgTgNgUQgkgegagmQgEgKgFgHIgBgEQgBgCgBgCQgBgCgBgDIgGgKQAAgDgBgCQgBgEgCgEIAAgBQgBgBAAgBIAAAAQAAACAAABIABAAQABgBAAAAQAGgCAGgDQABAIABAIQgBAJgCAIIAAABQgCAKgDAKQACAVgBAVQgBgCAAgCQgDgHgEgGIAAgBQAAgCgBgCIgFgUQAAgBgBgCQAAgBAAgBQgFgSgCgUQAAgEAAgFQAAAAAAgBIAAgEQAAgNABgKQAAgDAAgDQACADABAEQgBgDAAgCQAAgCAAgCQAAgBgBgCQgBgIgCgIQAAgDgBgCQgCgXABgVIAAAAQAAgDAAgCQABgIAAgIIAAAAQAFgHAEgHQAFgFAEgFQAGgIAHgHQAEgGAFgFQACgCACgCQAKgKAKgJQAEgEAFgDQAUgRAZgMIAOgHQACgBACgBQAVgCAWABQACAAABAAQAGABAFAAIAAAAIAAAAQADgBADgBIAHgCIAAAAQABgBABAAQABAAAAAAQAJAAAJACIARADIAAAAQAHACAHACIAAAAQAVAGAUAKQAFACAEADQALgGALgFQADgCADgBQABAAABgBQAIgBAJAAQACgBABgBIADgBQAGgDAGgCQAAAAAAAAQABAAABgBQAOgCAQgBQAGgBAEAAIAAAAQAEABADACIAwAaQAPAJANAMQACACADABQABABABAAQgEgHgEgHIABAAQgIgQgFgRQAcAHAbAPQADAOACAPQABACABADIAAAAQgDABgCABQADACAEACQAAACAAADQABAGAAAGQABACAAACQABAJAAAJQAAABABABQAAADAAACQAAADAAADIAAAAQABARgCAQQAAACAAADQAAACAAADQAAABAAACQAAACAAABQgBAEAAAFQAAABAAACQAAACAAADQgBADgBACQgBALgDALQgBACAAACQgBAEgBADQgBADgBACQgBAFgCAGQANAEAMAFQAVAJAUAKQABABACAAQAAABgBACQAAABAAABQAAABgBABQAAACAAABQAAABgBABIguBuQgFAHgGAHQgDAFgEAFIgIAJQgFAFgFAFQggAgglAJQgCABgCAAQgbAHgdABIAAAAQgEAAgFAAIAAAAQgLAAgLgBQgBAAgBAAQgEAAgEAAQgBABgBAAQgBAAgBAAQgaAEgXgCQgUgBgTgEQgBAAgBAAIAAAAQgBAAgBgBQgEACgEAAQgCABgCABIAAAAQgBgBgCAAAJanVQAhAMAdASQAOAJAMAKQAFADAEAEQBiBJADBrQhhBviIAeQiNAgiBg1QgEACgDACQgDABgDABQgLAGgNAFQADACACACQACABABACQBCA5ANBQQgRgHgRgKQAFAWgCAaQAAABAAABQAAABAAAAQAAACAAABQAAANgCAMQgBALgCAKQgJArgZAlQgEAGgFAGQgBACgCACQgBABgBABQgBABgBABQgHAJgJAJQgFAFgFAEQAAAAgBAAQgxArg+ANQgJACgJABIAAAAQgGAEgFAEQgLAHgMAFAFLqNQBlgOBNA1QAbASATAVQAeAjAOAxQACALABALQABAEAAAEQAOBxhCBVQhCBXhpASQgEABgDAAAFBmzQBJgsBbgFQAsgCAoAHQARAEAQAGAlLhqQgDgCgDgBQiOhGhIhkQAAAAAAgBQBIhkCOhHQCOhHCsAAQBOAABJAPQALgVAQgTQBEhYBogRQACgBACAAAkRiOQAOgVARgVQAVgYAYgUQALgGAFgDQANgKAJgHQACgBADgBQADgCAEgCQACgBACgBQAKgGAJgGQADgBADAAQADgBAEgCQACgBADgBQAKgEAJgFQADAAADgBQAEAAAEgBQAKgDAGgDQADAAADAAQADAAADgBQACgBADAAQATgEASgEQACABACAAQAEAAAEAAQACAAADAAQA1gCAtAQIAAAAQAJAEAIADQACgNAFgQQAAAAAAgBQABgBABgCQAYhYAthQQAdg0AngxQAbgjAdgfAkRiOQAXgJAYgEQAagEAWABQAFAAAGAAQAPAAAOACQADgBADgBQAGgBAGAAQAFgBAGgBQAGgBAGAAQAkACAgAJIAAAAQABAAAAAAIAAAAQANAEALAFQAFADAGADQAEACAEACQAFgBAGgBQAQgGASgDQABAAAAAAQANADAMAFQAGADAFACQABABABAAQAHADAHAEQAgAUAgAgQACACACABQAEAEAEAEQAZAcARAfQAFALAEALQANAogDAoQAAAEgBADQgBAagHAXQgDAIgCAIQgMAggXAcQgFAGgFAHQgLAMgMAOQgVAXgYASQgBABgBAAIgkATQgCACgDABQgDABgEABQgDAAgEgBIAAAAQgKgBgJgBIgOgDQgHgCgGgCQgBAAAAAAQgCgCgDgBIgEgDQgCgBgCgBIAAAAQgFAAgEgBQgFAAgGgBQgCgBgDAAQgCgBgBAAQgJgBgJgDQgDgBgDgBQglgLgfgWQAAgBgBgBQgZgHgYgOQgPgIgPgLQgIgGgIgGQgmg+gChMQAAgEAAgEQAHhOAug7QgXgFgWgHQALgLAMgKQAWgSAYgMQALgEAJgFQAJgEALgCQAAAAABgBIAGgDQAEgBADgCQADgBADgBABrkuIgGgSQgDgMgCgNIgBAAQgGhZAnhJQApAJAmAMQArAPAoAUQAQAIAPAIQB3BBBABYQgxBGhSA3IAAAAIibgaQgIgEgHgEQgEgDgEgCIgDgCQAAAAgBgBQgBAAAAgBQgBAAgBgBQgCgCgCgBQgCgBgBgCQgBAAgBgBQAAAAgBgBQAAAAgBgBQAAAAgBgBQgHgFgGgGQAAgBAAgBQAAAAAAgBQAAAAAAgBIAFgSQABgDABgDQABgDABgCIBiiPQAYgVAbgQAgYiZIARgFQABgBABAAQAUgGAWABQALABAMACQAEABAFABQALADALADQATgFAVgCQAHgBAIAAQABAAACAAIAEgBQAHAAAHABQAFAAAEABIAbAFQAIACAIADIAAAAQAFAQAEAPQARAKAPANQgMAGgNAFQABACABADQAAABAAAAQAKAIALAJQAsAoALA1QgPgJgOgLQgJgHgJgHQgNgMgMgMQgVgWgQgZQgLAEgMADQgWAHgXAFQAEAEAFAEQALALAKAMQAnAtAEA9QAAACAAADQABAGgBAHQAAAAAAABQAAABAAAAQAAAGAAAFIgBALQAAAGgBAGQAAAGgBAFIgCAMQgBABAAABQgBAJgDAJQgPAugfAoQgWAegaAWABwkkQgDgFgCgFABwkkQgCgFgDgFACqj6QABgDABgCACBkdQAIAEAIAFQAFACADACQABABABABQAIAKAHAKIAAAAQATAcAOAfIAAAAQAIARAGASQgYgPgVgSQgGgFgGgEQAAgDgBgDIAAAAQACgJACgJIgcgfQgEgFgDgFIAAAAQgBgKACgMgACoj0QABgDABgDACHj9QgEgFgDgFQgJgOgHgPADLi/QgEgDgEgCACnihIAAAAQgEgSgDgTQgfgagBgnQgJgOgHgPACoicIgBgFQAFAAAEABACZiiQAHABAHAAADai3QgIgEgHgEAEchrQANAMALANQA3A+AMBPQAEAXAAAZQAAADAAAEQgDAdgIAWQgDALgFAKQgDAFgCAGQgOAggcAbQgGAGgHAFQgmAegtAXQgGADgGADQgiARgmAFQgGABgGABQgiADgfgJQgcAHgegCQgEgBgDAAQgEAAgEgBQgJgBgJgBIAAAAQgGgBgHgCQgMgBgMgBQgEAAgEgBIgZADQgIABgJAAQgGABgGABIAAAAQgHABgGAAQgJABgIAAQgKAAgLgBQgCAAgCAAQgOgBgPgDQgHgCgHgBQgGgCgGgCIAAAAIAAAAQAFAQADAQQABADABAEQABADAAAEQABAEABADQABAGABAGQAFAdAEAeQACATABASQABAGAAAGQAEBCgIA7QgDA9gkApQglAqhDAOQhWAYhdgNQhCgJg7gcQhQgmg2hBQhhh2AkikQADgPADgOQgCgCgCgDQg2hCAShWQAKg+AfgzQACgDABgCIAAAAQAAgBAAgBIgBgCQgDhBAggyQAYgkAlgfQBVhEByAHQBwAHBSBRQADAEAEAEQAJgLALgJQAGgGAGgFQAcgXAegNAEphxQgGgCgGgDQgkgRgggVQABADABADQAFACAFADIAKAFQAGADAFAEQASALAQAPADbiWQAFACAFADADBheQAMAHALAJIAAAAQgGACgGACIgGgKQgCgFgDgFQgEgHgDgHQAXAKAVAPQgHACgHADQAMAKALAKQAUAVANAYQAHAMAFAMQAKAYAEAgQAAAEAAAFQAAACAAABQgBAWgDAVQAJAFAIAEQAPAIAPAJQAOAIANAJQBLAxAwA9QAHAIAGAIQhIBliOBHQiOBGirAAQgCAAgBAAQgCAAgCAAQgBAAgBAAQgCAAgCAAQgBAAgCAAQhdgChUgXQg/gQg6gdQgCgBgBgBQgmgSgggVQhSA+hsgDQh4gDhdhSQgYgWgTgXQARhDAhg9QATgiAZggQAQgWATgUQAugxA2ghQAhgVAlgMQA1gNApAHQAfAFAQATQAHgWALgVQAOgbAVgXQAIAJAIAJQAEAGAEAFQAQgYATgQQADgDADgDQABgBACgBQAEgLAFgLQA3gpBLAFQACAAACAAQASAAARACQADAAACAAIAAAAQABAAABAAIAAAAQACABACABQABgBABAAQAAAAABAAIAAAAQAEgBADgCIAIgBQAOgBAPABQAMABAKACQABABAAAAQABAAAAAAIABAAQABgBACAAQABgBABAAQADgBACgBACtiNIAAAAQgCgHgDgIADBheIAAAAACeh3QAOAEANAHQgHgQgFgRQgDgHgCgIABniUQAEAAADAAQAHAAAHAAQAIABAHABQARABARAEABniUQAEABADACAAah/QABABACABQAwATAqAfQADAEADADQAFAHAGAGQgNACgNADQAFAGAFAHQAdAnAKA3QAAADAAADQAAAFAAAEQAAAEAAAEQgBAQgDAOQgBAHgBAGQgJAtgWAmQgDAGgEAGQgMASgMAUQgDACgDABIgRAIQgHADgHADQgBAAgBAAQgBACgBABQgDADgEADQgDACgCACQgUARgWALQgBgBgCgCIgBAAQgDACgDACQgDABgCACIgIADQgFACgEACQgHADgHADQgCABgDABQAAAAgBAAQAAAAgBAAQgBAAgCAAQgHgCgIgDQgYgJgWgSQgCgCgCgBQgMgLgMgNQgIgJgHgKQg7hNgDhkQAAAAAAAAQAEgeAKgcQAPgpAdgfQgOgDgPgEQAOgRASgPQAegcAjgPIAJgDQACgBACAAIAGABQACABADABQAAAAABAAQADABAEABQAMAEALAFQABAAAAABQAHACAHADQABAAABgBQAGAEAGAEQACgCACgBIACgBQADgCADgCQAEACADACQALgGAKgFQABAAABgBQABAAABgBIALgGQADAAACgBQAQgBARABQAFAAAEAAQAmAEAiAMADGhUQgDgFgCgFAB8BBQASADARAEQAaAHAYAIQAIADAIADQgHAWgLAVQAAAGgBAFABFgmIAFAFQAAABABAAQADAEADAFQAUAgAJAlQABAIACAIQAGACAFABQABADAAADQACASgBAUQgDBJgmA1QgHAKgIAKQgIAJgKAJIgJAEQgDABgEABIAAAAIAAAAQgBABgCACQgUARgUAMQgCgBgCgBIAAAAQgDACgDACQgDACgCACQgHAEgGAEQgBAAAAAAQgEACgFACQgCABgDABQAAAAgBAAQgEABgFABQgGABgHABQgKABgLABIAAAAQgCAAgBAAQgLAAgLAAQgngCgjgNQgGgDgFgDQgagNgVgPQgEgDgFgEQAAAAgBAAQgEgEgEgDQgBAAgBgBIgTgSQgDgDgDgEIAAABQgDgEgEgEIgFgHQgBgBAAAAQgEgFgEgFIAAAAIAAAAQgCgCgCgDQgEgGgDgHIgSgnQgBgCgBgDQAAgCgBgBQAAgBgBgBQgDgMgDgNQgDgSgBgSIgBgKQAFAHAFAHQAAgCAAgDQACgdAJgaQACgGACgHQABgCAAgDQABAAAAgBQAAAAAAgBQABgBAAgBQACgDABgEQAGgMAGgMQADAEACAFADLibQAIACAIADADQB8QAAAGgBAGIAAAAQgFALgHAKQgBADgCACQgBACgBABQgBABAAABQgCACgBACQgBABAAABQgBABgBABQgBABgBABQgBACgBABQAAABgBABQgBABAAAAQgCACgBACIhNBCQgDACgDABQgDACgDABADrECQgEAFgEAFAD1D0QgFAHgFAHABxA+QADAXgBAYQgGBmhIBEIgBAAAF1idQgSAMgUAMQgTAKgTAKABbiZIAGADQADABADABAA8iPQABAAAAAAAA8iPIAAAAQACgBABAAQAOgFAOgEAA2iRQADABADABAA2iRQADABADABAAsiHQABgBABgBAAniGQADAAABgBIABAAAAPiEQABABABAAAAPiEIAAAAQABABABAAQAAAAAAAAQAAABABAAQAEABAEACAASiCQADACADACQAEACADACQACACADACQATAQAUASQAFAEAEAEQAOAMAMAOQgQADgRACQgGABgGAAIAAAAQACADACADAAOiEIABAAAAxgqIgBAAQgIABgJAAQgbACgbAAQgfAAgegCQgGgBgHAAQALgOAOgMQATgRAUgOQACgCACgBQADACADACQAHgEAGgEQASANAQASQABABAAABQABABAAAAIAPASQAEAGADAGQADAFADAEIAaBHQABADAAADQABACAAABQABAFAAAGQACAUgBAVQAKBjhGBPQgDADgEADQAAABgBAAQgNACgMABQgBAAgBAAQgDAAgDAAQgCADgDACQgDACgCACQgFgEgEgEQgKgKgKgLQhFhOgChqIAAgFQABgLACgKQAfgEAfgBQAUgBAUAAQAuAAAtAFQAHABAHABQAPACAPACAADhzQAWAOATASQACABABABQAFAGAFAFQABABABABQAIAJAHAJQACADABACQAmAxAJA9AApg2QAEAGAEAGQADAFACAEABBgsQACADACADAA7gyQADADADADAA7gyQADADADADQgIABgIABAgciXQAUgCATACIArAGAgJhrQAbAQAYAYIARARAgfiWIAAAAQACAAABgBAgjiVQACgBACAAQABgBABAAQADgBACgBAgliWQADAAADAAAgkhzIAEgCQABAAABgBQAHAEAGADIABAAQABABACABQACABACABQAGgEAGgEAgphwQACgBADgCAgphwQACgBADgCAgphwIAAAAQAFAEAFAEQABABABABQAGgFAGgEQACABACABQACABABACQABgBAAAAAgEh3IAAAAAgNh8IAAAAQAHgDAHgCQAHgBAGgCAgNh8QAFACAEADAgKhzQADgCADgCAgch3QAHgDAIgCAg2iMIAAAAQAKgFAKgEQAYAHAYAKAg2iMIAAAAQAKgFAJgEAhIiPQACAAACgBAhIiPQACAAACgBQAHACAHACQAVAGAUAKAhGiEQABAAABgBQADgBADgCQAEgCAEgCAhbiJQACgBACAAIAAAAQACgBABAAQADgBAEgBQAHACAIADQASAHAQAKAhUiLQAEACAEACQAEABAEABAhRiJQADABADABQADACACABQAPAJAOALAhXiKQABgBACAAAhNiNIAFgCAhUgpQALgPAOgOQADgDADgDQAPgMAPgKQAKAHAJAJQAUATAPAWQAbAnAKAuQABAGAAAGQADAVgCAVQgCAxgVAoQgDAJgEAIQgRAngdAiQgFAFgGAFQgJAAgIABQgBAAgBAAQgKAAgLgBQgFgDgFgFQhPhEgHhpIAAgBQAAgQACgQQABgGABgGQANgCAMgCQAFgdANgcQACgEACgFQAHgRALgPgAhEiQQAQgEAPgCAgyhsQAEgCAFgCAgyhsQAFgCAEgCAhoiVIAAAAQAKABAJABAhuiWQADABADAAAhuiWQADAAAEABQAEgBADgCAh1iWQAGABAFABAhwiWQABAAABAAAh+iNQAEgBADgCAisiSQADgBACgBQAGgCAFgBQACgBACAAQAHgCAHgCQAOACAOAEAi0iOQACgBACgBQACgBACgBQAagFAdABAi5iPQAFgBAEAAIAAAAQACgBACgBAi5iPQAHgCAGgBAh5gtQAHgJAJgJIA3gtAiog0QALgNAOgLQAGgEAGgFQAEgDAEgEQAZgXAcgRAh5gtQgYgDgXgEAkeh0QAGgNAHgNAkphbQAAAAgBgBQgGgCgFgCQgLgFgLgFAkehXQgFgCgGgCQABgBABgCQAwgoA+gJAkehXQACgBABgBQAsgoA2gOAkwhDQACgCADgDQAGgIAHgHAkpAPIADgIQAAAAABgBQAEgKAGgLQAEgIAEgJQAHgJAHgJQAJgLAKgKQgNgEgNgFQgJgDgJgEAksAbQAAgCABgCQABgEABgEAksAbQAAgBABgCQABgEABgFAkrAXIAAABQAMAhAEAoQAQgGARgFQAMgEAMgEQAXgGAYgFQAEgOAFgNQAEgMAFgLQADgHAEgHQACgDACgDQABgBAAgBQAAAAABgBQAAgBAAAAQAMgTAPgTAizBDQAPgEAPgCQAFgXAIgYQAPgdAYgbQgMgBgMgCAkrBhIgBgDQAAgDgBgCQgCgJgDgIQAFAOAEAOQgBgCgBgBgAkoBmQgBgBAAgBQgBgCgBgBAkcCCQgBgCgBgCAkaCHQgBgCgBgDAkpBnQAGAYACAYIgFASQgBADgBADIgCAGQgBADgBACIAAAAQAGALAFAMQAQAjANAlQABADABACQgRgMgPgRQgEgDgDgEQgCAKgDAKQgFgFgFgFQgJgJgHgKQgIALgJALQglgygOg8QgIgkAAgnQADgTAFgSQAIAJAHAJQALANAJANIAAgHQACgkALghQAAAAABgCQAAAAAAgBQAAgBABgBQAAAAAAgBIAMgaQADgEACgFQAGAJAFAJQADgGADgGAkoCvQAAgCgBgCAkmCpQgBADgBADAkoCvIAAAAAhgFRQgNgDgMgCQgmgJglgcQgLgHgLgJQgngegZgqQgDgHgDgHQAAAEAAAEQgBAEAAAEQgCAUgFATQgDgDgEgEAkqC1QgBADgBACQgBADgBACIgPAgQgBgBgBgBQgBgCgBgBAkiD/QgDgDgDgDQAAAAgBABIgQgUQgCgDgCgEQgDAGgEAFQgCADgCAEQgjgtgNg3QgGgdAAghIAAgBQAAgKABgJQAFghAMgcQADABACABQAGAFAFAEQAHAGAGAGQAHAHAGAGQAIAPAFAQIAAAAAkCEeQAEAMADAMQAAAAgBgBQgBAAgBgBQgagQgWgWQgEAOgGAMQgLgJgLgKQgFgHgGgHQgCADgCACQgDADgCADQgDAEgEADQgHAIgJAHQg1AuhAAPQgPgOgNgOQgDgDgCgDQgJgKgIgLQgEgFgDgFIAAgBQAggtAwgmQAbgXAfgVQgLgjgCgnQAAgCAAgDIAAgHQABgOABgNQADgRAFgQQAEAEADAFQAGAGAHAIQAIgdAMgXQAGAEAGAFQAGgOAHgMQAGgKAGgIQAFAHAFAHQADgDACgEIAIgMQABgBABgBQAFgHAFgHQADgMAEgMAjsFRQgEgBgEgBQgJgDgJgFIgygfQgBACAAACQgTgOgRgSQgDgDgDgDQgogsgSg2QAJgFAIgGQAKgGAKgGQAKgFAKgFQACgBACgBQgBgKABgLIABgBQAAgEAAgEQAHALAHALQAOgGANgHQAHgCAGgDAjsFRQgEgBgEgBQglgMgggXQgaA6gxAtQgLAKgLAJQgpgaghgeQgFgEgFgFQgnAJgrgDQhvgGhRhVQgWgXgQgaQgphBgFhSAj7E2QAEAMADANQgJgEgJgEAiUFVIgBAAQgGgCgGgCQgQgGgQgJQgjgMgegYAhzEUQhGhGAAhjQACgUAEgUAg5EfQgCAAgDAAQgbgCgagJAhgFRQgBAAAAAAQgMAEgMACQgFAAgFAAIgJAAQgBAAAAAAQgCAAgBgBIgBAAQg6gEgwgcAhXFSQgDAAgEgBQgBAAgBAAAhXFSQgEAAgDgBQgBAAgBAAIAAAAAhLFIQgEACgEACQgGACgHADAhBFSQgBgBgCAAAg3FOQgFACgFACAgbEoQgEAEgEADQgGAEgFAEQgOAKgPAHAgbFBQgEACgEACAAAE+IgEgEQgBgBgDgCQgBgBgCgBQgEgDgEgDAgEE6QgDACgDABQAAAAAAAAQgCgBgCgBQgBgBgCgBQgJgEgJgGQgLgHgLgJAAFFEIgHgEQAAAAgBAAQgDgBgEgCQgBABgDABQgPAGgQAEQgFADgFACAgLE1QgEgDgEgDIgIgHABhD9QgDABgDACIAAAAQgBAAAAABQgEAFgEAFQgOARgQAPQgFADgFAEQgKAJgLAHQgIAAgHgBQgDgCgDgBAAlEXIgBAAAArEVQgDABgDABAAkEXQgGACgGACQgCAAgBAAIgBAAQgBAAgCAAQgNAPgPALAANFHQgEgCgEgBAANFHQgEgCgEgBAANFHIAAAAQgMAHgMAEQgCABgBAAQgIADgIACQgCAAgDABAAOFGQAAAAgBABAATFJIAAAAQgDgBgDgBAAUFJQgBAAAAAAQgDgBgDgBAAlFRQgBgBAAAAQgGgCgGgDQgCgBgCgBAAVFCQgDACgEACAAKFDQgCgBgCgBQgDgCgDgBAAhFNQgHgCgHgCABHFRQgCABgDAAABVFOQgCACgDABQgDABgEABABpE9QgSACgTAAQgYADgXAAAhqiUQAPACAOAFAh3iQQAQACAQAEAhqiUQALAEALAFAgjFZQgYAFgaAAQgPAAgNgCQgLgBgKgCAhpFWQgIABgIAAQAAAAgBAAQgEAAgFAAAiLFYQgDgBgCgBQgCAAgCgBAiLFYQgDgBgDgBQgBAAgCgBAiGFZIgFgBAhxFcQgYADgagCQgBAAgBAAQgCAAgCAAIgUgDAjgFVQgEgBgEgBQgCgBgCgBAjaFWIgGgBQgGgCgGgCAhIFUQgUAGgVACAhFFRQgFABgGABIgHgBAhBFSQgDABgEABABCFSQgHADgIABQgHgCgHgDABhiWQADABADABAg+FTQgCgBgBAAAlbg5QAOgRAQgOQAEgEAEgEQALgLAMgJAk5gFQAGALAGANQABACABACAmOgZQAMAGAKAIQANgZAQgVAk0A8QAAgBABgCQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBQAAgBAAgBQAAgBABgCQAAgBAAgBQABgDABgDIADgMAk1BBQABgDAAgCAlJggIAAAAQADgDACgEAk4gaQADgVAFgUAlOgXQADgEACgFAlRB5QAQAZAPAcQAAABABABQADAFACAFQgBADgBACAlgCBQAHgEAIgEAlaCmQgFgRgBgUAk9DfQgBgBgBgBQgFgIgEgIAk5DmQgCgDgCgEAtUBMQAbgmAmggQBdhLB5gCQBhgBBOAv");
	this.shape_156.setTransform(273.2,213.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FF9900").s().p("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BQgPABgOACQANgFAOgEIAHADIgHgDQAUgFAUgCIAQgCIACAAIAFAAIgFAAIgCAAIgQACQgUACgUAFQgOAEgNAFIgDAAIgGgBIgrgHIgPAAIAAAAIgBAAIgYABIAAAAIgCAAIAGgCIgGACIAAAAIAGgCIARgFIABgBIABAAIABgBIABAAQAPgEAQAAIABAAIAAAAIAIAAQAMABALACIAJACIAWAGIgWgGIgJgCQgLgCgMgBIgIAAIAAAAIgBAAQgQAAgPAEIgBAAIgBABIgBAAIgBABIgRAFIgGACIAAAAIgCABIAAAAIACgBIgCABIgFAAIABABIABAAIAAAAIADgBIAEgBIgEABIACgBIACAAIAAAAIAYAIIALAGIAIAFIALgCIASgCIADgBIgDABQARgBARABIAIABIAMAFIABABIAOAHQAhAUAgAfIAEAEQgXAGgXAFIAJAJQAMALAJAMQAnAtAEA8IABAGQgZgIgZgHIgBgJIAAgGQgJg2gdgpIgLgMIAagGIgKgMIgHgHQgpgfgwgUIgEgBIADgBIALgGIAEgCIAAAAIgEACIgLAGIgDABIgIgDIAGgDIACgBIgCABIgGADIAIADIgBABIABgBIAEABQAwAUApAfIAHAHIAKAMIgaAGIALAMQAdApAJA2IAAAGIABAJIgjgHIAjAHIAAAIQgBAQgEAOIgBANQgJAsgXAnIgGAMIgYAmIAYgmIAGgMQAXgnAJgsIABgNQAEgOABgQIAAgIQAZAHAZAIIAAAGIAAAGIAAABIAAABIAAAAIAAABIAAAFIAAAGIgBALIgBAMIgMAVIgDAFIgCADIgCACIgDAEIgBACIgBACIgCACIgCADIgBACIgCABIgDADIhMBCIBMhCIADgDIACgBIABgCIACgDIACgCIABgCIABgCIADgEIACgCIACgDIADgFIAMgVIgCALIgCAMIAAABIgFASQgPAvgeAoQgWAegaAWIgBAAIABAAIASgEIgCACIgkATIAkgTIACgCQA9gMAygrIgHAJIgIAJIgLALQggAfgkAKIgFABQgaAHgdABIAFgDIgGADIgIAAQALgFALgHIALgIIgIAAIgZACIgBAAIgDAAIgCAAQgUACgUABIgBAAIAAAAIgEgBIAWgPIAJgHQAQgPAOgRIAJgKIAAgBIAHgEIgGAEIgGADIgSAIIgNAGI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");
	this.shape_157.setTransform(258,214.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FF9431").s().p("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");
	this.shape_158.setTransform(273.2,213.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("rgba(81,48,16,0.318)").ss(0.1,1,1).p("AF/qOQAPgRAPgPQAVgVASgUQAbgfAkgVQBSgyBhAJQAMAEALAFQAJAEAEADQAJAEAJAFQCCBIAiCQQAIAkADAlQADA7gdA5QgWArgeAnQgRAVgSATQACAPAAAQQAAADAAAEQgFBlhbBTQhSBLhwABQg5ABg0gUQgvgQgogjQg1gsgZg7QgQgjgFgoQABgFABgGQAAgBAAgBQAEgNAEgNQgbgTgSgXQgTgYgJgbQgEgKgCgLIAAAAQgBgBAAgBQAAgCAAgBQAAgBAAgBQAAgBAAgCQAAAAAAgBQAAgBAAgBQAAgBAAgBQAAgCAAgBQgBgQABgQQAAgBAAgBIAIguQACgHADgIIAAAAQACgGADgHIAUgmQACgDACgDQADgFAEgGQA6hOBagTQABgBABAAQAOgCANgCQBIgGA6AkQAXAPARAQQAcAcANAqQADANACANQACARABARQBCAQAzApQACACACABQAAABABAAQABABAAAAQAFAEAFADQBCA1AJBJQhTBXhxAeQiJAkiCgwQgOgGgNgGQgtgVgmgcQgEgCgEgDQgogZADgtQACgTAKgYQAAgCABgCQAAgCABgBQABgCABgCQASg2AZgyQAMAEAMAGQArASAkAVQBLg1BggGQAngCAlAGQAAAAABAAQACBPguA/Qg3BPhcATQgHABgGABQhUALhEgpQgFgDgEgDQAbhMBDg5QALgKAMgIQBTAvA2A7QgnAsg2AlQgkAZgqAVQAAAAAAAAQgWALgXAKQgNAGgOAFQgcALgdAIQgKADgKADQALAAALACQAWAFAVAMQAFADAFADQAaASAXAbQA9BGAABgQAAADAAADQgEAngOAYQgCAEgCAEQgBACgBACQgNAZgVAUQgFAFgGAFQgiAYgoAWQgFACgFADQgdAPghAGQgFABgFAAQgkAEghgNIAAAAQgCgBgCgBQgBAAgBgBQgEgCgDgBQgEAAgDAAQgCABgCAAQghAGgegEQgBABgBABQgGACgFABQgDAAgDAAQgVgCgTgDQgDAAgDAAQgFgBgEgBQAAAAgBAAQAAAAgBAAIAAAAQgIAAgHAAIAAABQgGAAgGgBQgBAAAAAAQgfgCgbgJQAAAAgBAAQgEgDgFgDQgWgLgTgNQgEgCgEgDQgEgDgDgDQgVgQgNgRQgEgFgEgEQgRgXgJgaQAXgJAYgJIAAAAQgGgVgCgXIAAgEQAAgLABgJQABgHABgHQAAAAAAAAQAAgBAAgCQgBgJgDgIQAAgDAAgCQgDgbABgZQABgBABgBQAEgFADgEQAGgHAGgHQAEgEAEgFQAKgLALgJQADgEAEgDQARgOAVgLQAHgEAHgDQAPgBAQABQABAAACAAQALABAKACIAJACQAEABAFABIAAAAQAEACAEADQAJAGAKAIQAEgDAEgDQACgBACgCQAFgDAFgEQAJAEAIAEQAKAFAIAGQAIAFAHAFQAAABABAAQACACABABQAAABABAAQADADADADQABABACABQACADADACQAEAEAEAFQAxA0AKBGQABAPgBAQQAAABAAABQgDA/ghAsQgGAJgHAIQgFAFgEAFQgBAAAAAAQgDAAgCAAIgDABQgCABgCAAQgFABgEAAIgEABQgBAAgBAAQgBAAAAAAIgBAAQgBAAgBAAQgCADgCACIgBAAQgCgCgCgCQgDAAgDAAQgBABgBAAQAAAAgBAAQgBAAgBAAQgFABgGAAIgBAAQgCAAgCAAQgBABgBABQgGAHgHAHQgBAAgBABQgMgGgMgIQgFgFgEgFQgzg4gBhOQAAgBAAgBQAIhPA+hDQANgOAPgLQAGgFAHgFIABAAQAHAHAHAGQACgBACgCQAFgEAGgEQAAAAABgBQAIgHAKgGQAEACADADQALAJALAKQAEADAEAEQASAPANARQAaAgAKAwQgBADAAADQABAIAAAHQgBANgEAMQAAAFgBADQAAACAAACQgIAngUAiQgDAFgDAFQgJAPgJAQQgCACgBACQgDAEgEAEQgMAQgNANQgEADgEADQgCABgBABQgDACgDADQgJgFgKgGQgCABgCACIgDABQgDACgDACQgDgBgDgBQgEgBgDgBQgMgEgMgFQgLAKgLAHQgIgFgHgGQgCgBgCgCQgLgKgKgLQgJgLgIgMQgQgIgPgKQgHgEgGgFQgjgagZgjQgCgDgBgDQARgFARgFQgEgXAAgYQAKhXBCg6QAWgTAYgLQABgBACgBQAKAEALAEQABABACABIAAAAQAMAFAMAGQAGADAFADQAJAFAIAGQADACADACQAJAIAIAIQAQAPANAQQACACADAEQARAdAIAgQAFAZgBAaQAGABAGABQAPACAPACQAeAGAeAHIAAAAQgBALgCALQgBAIgDAIQgMAqgaAkQgQAXgTASIAAAAQgHAHgHAGQgHAEgHADIAAAAQgCAAgBAAQgFgBgGAAQgBAAAAAAQgCgBgBAAIgBgBQgCgBgCgBIAAAAQgNgEgNgGQgBAAgBgBIAAAAQgDgBgCgBQgBABgBABQgPgCgPgDQgDABgDACIgaAKQgEABgDABIAAAAQgCAAgCABIgBAAQgCABgCABIgBAAQAAAAAAAAIgBAAQgDABgCABQgCAAgBAAQgEACgEABQgWAFgZAAIgBAAQgEAAgFAAQgBgBAAAAQgFgCgGgCQgPgFgNgIAj3h9QgpgMgngRQiKg8hOhWQAAAAAAgBIAAAAQBOhWCKg8QCKg9CkAAQBmAABdAYQACgGADgHAj3h9QAKgRANgQQATgWAWgTQAJgFAEgDQAMgJAIgHQACgBACgBQADgBAEgCQACgBACgBQAIgGAIgGQADAAACgBQADgBAEgBQACgBACgBQAJgEAIgFQADAAACgBQAEgBADgBQAJgDAGgCQACAAACAAQADgBADgBQACAAACgBQASgEAPgFQACABADAAQADAAAEgBQABAAACAAQBBgGAzAYQAEABADACQABABABAAQAsA8ATBGQABAEABAEQADANACANIAAABQAaALAZAUQABABABABQA/A0AKBNQABAJgBAJQAAAFAAAFQgCAegIAbQgHAMgIANQgSAegdAeQgFAFgFAFQgnArg2ANQgDABgCABQgMADgNABQgYACgXgDIAAAAQgEACgDABIgDABQgCgBgCgBQgUAIgVgBQgNACgJgCQgDgBgFAAQgGAAgGgBQgHAAgGgBQgBAAgBABQgCgBgCAAIgWgHQgDgBgDgCQgBAAAAAAAClnVQADgHACgIQAqALAnAQQAkhIAxhBQAXggAYgcADGhZQABABABACQABADABACQAAADAAACQABAGAAAGQABAGABAHQAAADAAADQAAABABABQABADAAACQAAACAAACIAAAAQAAAAAAABQABAPgBAQQAAACAAABQAAADAAACQAAABAAACQAAAFgBAGQAAABABABQAAADAAACQgBADAAACQgBACAAACQgBAHgCAJQAAABAAACQgBADAAAEQgBACgBACQgHAkgTAhQgBAAAAABIAAAAQgpBHhHAiQgPAHgQAFQgCABgBAAQgBABgBAAQgEAEgEAEQgBAAgBABQgCACgCABQgBABgBABQgCACgCACQgDACgBACQgFAEgGADQgCgCgDgBQgHAFgHAEQgQAJgQAGQgBAAAAABQgBAAgBAAIAAAAQgDgBgEgCIgLgHQgEADgEADIAAAAQgEgCgEgDIgygoQgEgEgDgEQgQgSgMgUQgVgkgIgpQANgDAOgDQgEgUgBgVQAFgaAJgXQATgvAqggQAFgDAFgEQADgDAEgDQALgLAMgJQAEAEAFAEQAJAGAKAIQACACADADQAFAEAFAFQACADADACQAFgFAFgEQABgBABgBQADgCADgCQAFgEAGgEQAKgHAKgGQAEgCAFgDQAgAPAeAVQADADACADQAIAMAKAGQAKAJAIAKQAiAlAFAxQAAAIAAAHQABAOgBAQIAAAAQAUAFATAHQgCAHgCAHQgCAHgCAHQgLAbgUAXQgEAFgFAGQgJAKgKANQgQARgRAOQgEADgEADQgOAKgPAGQgBABgBAAQgEAAgEgBQgDACgDABABlhrIAfgHQACgBACAAQADAAADgBQAGgBAHgBQAIAAAIAAQgjAJgjAFQABABABAAIAAAAQADACADABIAmAXQALAIALAKQACABACABQAMAGAKAIIAGAEQADACADADQAFAEAFAFIAYAdQABACACADQASAZAHAsQgBAEAAAEQAAABAAACQgBAngLAkQgNApgaAkQgCACgBACABThkQAIgCAJAAQABAAACgBQADACADABABnhnQAHAAAFgBQAGABAGAAQAGAAAGABQAfABAcAMABlhoQABABABAAABPhaQAEACADACQAGADAGADQAcARAcAdQAGAFAEAEQAWAZAPAaQACAFACAFQAQArgGApQgBAPgDANQAXAHAWAJQAHADAIADQADABACABQAMAFALAGQARAIAQAIQBYAuA6A7QAHAHAGAHQhNBXiLA8QiKA9iiAAQgCAAgCAAQgBAAgBAAQgEAAgDAAQgDAAgEgBQgCAAgDAAQgCAAgCAAQgCAAgCAAQgFAAgEgBQh6gFhsgpQACALACALQACARACARQAGBEgEA+QABA6ghAnQgiAnhCALQhRAUhYgOQg9gKg4gbQhLglgxg9QhahxAniaQAFgYAHgWQgJgKgIgKQgzg7AUhNQALg3AdgtQAEgHAFgGQAWgcAfgZQBUhBBtgBQBtgCBUA/QANAJALAKQAEgXAJgWQATgrAngjQAjggApgNQAMgEANgCQANgBAMAAQAIAAAIAAQAFAAAFAAQAQAAAQADIABAAQABAAABgBIAJgCQAEgBAFAAQAFgBAFgBQAFgBAFgBQAmACAhAMQAEABADABQADgBACgBIAFgCQAKgEAJgDQABgBACAAQASgHAUACQAKAAAKADQAEABAEABQAOAEAOAFQADAAACgBADNgzQASALARAOQA1AtgFBFQAAAsgRAmQgPAjgdAdQgBABgBABQgDACgCACQgBABgBABQAAAAgBABQgBABgBAAQgBABAAAAIAAABQgBAAAAAAQgCABgBACQgCABgBABQgBAAgBABQgBABAAAAQgCABgCACQgBAAgBABQAAAAgBABQgBAAgBABQgBABgCABQgCABgBABQgkAWgqAGQgJACgKAAACThNQAeAKAcAQADJgnQADADADACQAFAEAFAFADWD2QgIAJgHAJQgEAFgFAEQgdAdggAGQgCABgCAAQgYAFgbgBQgBABgBAAQgEACgDABAA1hjQACAAADABIAAAAQACABADABQADABADABQABgBACAAQAFgDAFgCQAAAAABAAAA1hjQACAAADABQgjAEgjAAQgBAAgBAAQgGAAgFAAQgLAAgKAAQAGgEAHgDQACgBABgBIABAAQABABACABQAFACAFADQACABACABQACACADABQAGAEAFADQABABABACQABABABABQADACADADQADgCAEgCQAKgGAKgFIAAAAQABAAABAAQAJgEALgDIAAAAQADABADABQAEACAFACQABAAAAAAQACABACAAQAiACAeAKAA6hiQACABADABQAKgDAKgBQAAAAAAgBQABAAABAAIgBAAQAFgCAEgBQACgBABgBIABAAQACACACAAQgIACgIABQAEgCAEgBQACgBACgBQACAAACgBABShkQAAAAABAAIAAAAQAAAAAAgBQABAAAAAAQgNACgNABAgUhrQAQgBAQABQABAAABAAQABABABAAQAHAAAHABQAAABABAAIAWAFAAKhTQABABABAAQAEACAFACQAEACAFACQAPgJAPgHQAFgCAEgCAAKhTIAAAAQAPgEAQgCQAGAAAGgBIAFAAQABAAABAAQAKAAAJAAAAIhSQABAAABgBQAPgEAQgCQAGAAAGgBAAIhSQABAAABgBAAGhRIACgBAhFhiIAWgGQACAAACAAQADgBADAAQAJgBAIgBAhmhpIAPgEQALgBAMABQALABAJADQAAAAABABQAFABAFACQACgBACgBQACgBACgBAghhlQAJADAKAEQADACAEABQAIAEAJAEAhSheQACgBACgBIAAAAQgJAAgJgBIgBAAQAGACAFACQAHADAGADQAEACAFACQAAABAAAAQAKAGAKAHQAFADAEAEQABAAABgBQAHgEAHgEQANgGAMgEAhSheQACgBACgBQACAAACgBIAAAAIAAAAQADABADABIAAAAQgFAAgFgBQACAAACgBQACgBADAAAhqhnQAJABAKACIAIACQACABADAAAhKhhQADgBACAAAhKhhQADABADABQADABACABIAJADQAEgCAEgCQgLAAgLgBQADABACABAhPhiQACABADAAAhWhdQABAAABAAIACgBAhchaQADgBADgCAhwB1QAAgPADgNQAEgaAJgaQAUglAlghQADgDADgCQAGgFAHgGQACADACACQACACACACQA2A+gFBYQAAACAAACQAIBQg1BBQgFAAgEABQgDgDgCgDQgEgFgEgFQgGAIgGAIQg+g4gHhXIgBAAQAPgCAPgBQgBgLAAgLIAAgFQAFgjAOgfQACgEACgFQALgYAVgVQAlAoALA3QAEAXgDAYQAAACAAACQAIABAIAAQARACAQABQAAACAAACQgGBRg1A3IgBAAQgGAHgGAGQgBABgCABQgEgEgEgEQgFAGgFAFQgGgEgFgEIgCgCQgCgCgCgBQgBgBgBgBAhghhQAFACAFACAiVhvQACAAABgBAiYhuQACAAABgBAiYhuQACAAACgBQAJADAKADQADAAAEAAQACAAADAAQAFABAFABQADgBACgBAiDhpQABAAACAAQACABADAAQAGABAFACIAIACQAEABADABQgIAAgIgBQgCgBgCAAQgUgCgTgDQALgBAMAAQABAAABAAQABAAABAAQAAAAABAAQAGADAGACQACABABABQAFACAFADQAFABAGACAkXBGQAFgXAIgVQAEgKAFgJQAEgHAEgGQAGgIAHgIQASgVATgPQAUgQAVgKQAKgDAHgDQAIgDAJgCQABgBACgBQACgBACgBQABAAAAgBQACAAACgBQADgBACgBIABAAQACgBACgBAi7hjQABAAABgBQAEAAAFAAQABgBACgBIA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");
	this.shape_159.setTransform(273.5,213.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FF9900").s().p("AgCIFIgDAAIgGAAIgHAAIgFAAIgEAAIgFgBIgJAAQh6gGhrgpQgViFg0hvQA0BvAVCFIgfgMQhHggg4gmQBGhCAPhgIACgMQAJANALANQAwA1A+AQQgwgOgmgmQgbgjgPgnQAPAnAbAjQAmAmAwAOQg+gQgwg1QgLgNgJgNIAAgBIABgaIAAgDIABgBIgBgCIgBgbQAFgRADgTQgEgpgLggQAXhEAvgmQARgUAVgNIgEAKIgEALIgRANQgWATgSAeQgZAogDAyIAAACQgBAxASAqQgSgqABgxIAAgCQADgyAZgoQASgeAWgTIARgNIgFAWIgDADIgNAQQglAwgEA/IAAAPQACAhALAdIABAHIgEACIgQAHQAPAkAcAfQA8BDBWAGIAGAAIAAAAIAFACQgNACgNAAIgPABIgRgBQgTgCgSgFQASAFATACIARABIAPgBQANAAANgCIAFgBIAAAAIABAAIAAAAQAVgBATgDIAGgCIAGABQgSAHgVADIAAAAIgRgEIgCAAIACAAIARAEIgBAAQgNACgOAAIAAAAIAAAAIgYgCIgCAAIgDAAIgBAAIgZgCIgQgCIgPgFIAPAFIAQACIAZACIABAAIADAAIACAAIAYACIAAAAIAAAAQAOAAANgCIABAAIAAAAQAVgDASgHIAoAEIAEABIgEgBIAGABIALgEIACgBQAQgHAPgMIAHABIAAAAIAMAAIgLgIIADgCIAIgGQANgNAMgPIAHgJIADgEQBHgiAphGIAAAAIgDAWIgEAQQgMApgaAkQgQAYgSASQASgSAQgYQAagkAMgpIAEgQIADgWIAnALIgDAPIgFANQgLAbgUAXIgJALIgTAXQgQASgRAOIgSACIgBAAIABAAIASgCIgIAGQgOAJgPAHQAPgHAOgJIAIgGQAqgHAkgWIADgCIAEgBIABgBIACgBIABgCIAEgCIACgCIACgBIACgCIAEgDIAAAAIAAAAIgEADIgCACIgCABIgCACIgEACIgBACIgCABIgBABIgEABIgDACQgkAWgqAHQARgOAQgSIATgXIAJgLQAUgXALgbIAFgNIADgPIgngLIAAgBIAAABQgdgIgfgFIgegFIgMgBIghgDIAAgEIAAgRQAAhNgyg4IgEgEIAGgEIATAQQAPAOANAQIAFAIQASAbAHAhQAEAVAAAXIAAAHIAAgHQAAgXgEgVQgHghgSgbIgFgIQgNgQgPgOIgTgQIAMgIIAHAFIACADIAGAFIAHAIQAyA1AJBFIABATIgBAMIABgMIgBgTQgJhFgyg1IgHgIIgGgFIgCgDIgHgFIAUgNIAWASIAIAHQASAPANARQAbAhAJAwIAAAFIAAAPQgBAOgEAMIgBAIIABgIQAEgMABgOIAAgPIAAgFQgJgwgbghQgNgRgSgPIgIgHIgWgSIAJgFQAhAOAdAVIAGAHQAHALAKAHQAKAJAIAKQAjAkAEAyIAAAPIABANIgBAQIABgQIgBgNIAAgPQgEgygjgkQgIgKgKgJQgKgHgHgLIgGgHQgdgVghgOIAfgRIABAAIACAAIAAAAIAAAAIAFABIALAAIAGADIANAHQAbARAcAcIAKAKQAWAZAPAZIAFAKIgEAQIAAAEIgBAGIgCAEQgHAkgTAhIgBABIABgBQATghAHgkIACgEIABgGIAAgEIAEgQIAAgEIABgEIAAgFIAAgCIABgLIAAgCIAAgFIgBgEIABgVIAAgLIgBgBIAKAJIAZAfIACADQASAaAHArIAAAIIAAADQgCAogLAjQALgjACgoIAAgDIAAgIQgHgrgSgaIgCgDIgZgfIgKgJIAKAJIgKgJIgGgEIAGAEIAAAAIAAAAIAAgBIABgCIgBgFIgBgCIgBgHQASALASAOQAwApAAA9IgBANQAAAsgQAmQAQgmAAgsIABgNQAAg9gwgpQgSgOgSgLIgCgNIgBgLIAAgFIgCgFIgBgEQAaALAYAUIADACQA+A1AKBMIABAMIAAAGIAAALQgCAdgJAbQgGANgIAMQAIgMAGgNQAJgbACgdIAAgLIAAgGIgBgMQgKhMg+g1IgDgCQgYgUgagLIAAAAIgGgaQgLgCgLAAIAUgGIgUAGQALAAALACIAGAaIAAAAQgdgMgfgBIgMgBIgMAAIgMABIgCgBQAkgGAigIQgiAIgkAGIgEgCIAEgCIAfgHIAFgBIAFAAIANgCIAFgBIAFAAIAAAAIABAAIABAAIAEABIgEgBIgBAAIgBAAIAAAAIgFAAIgFABIgNACIgFAAIgFABIgfAHIgEACQgOgGgPgEIgIgCQgKgCgKgBIgDAAIgEAAQgQAAgPAFIgDABIgTAHIgQACIAHADIgEACIgJgEIAGgBIgGABIAJAEIgNAHIgWgBIAWABIgHAEIgJgDIAJADIgLAHIgIgFIgNgFIABgBIACAAIAEgCIAAAAIAEgBIgEABIgSgBIgIgDIAIADIgRgCIgCgBIAEgCIAHACIgHgCIAFgCIAAAAIATAEIAIABIgIgBIgTgEIAFgCIgFACIgLgBIgFAAIgHgBIgTgFIADgBIAIgDIAKgBIAKgCIAKgBQAlACAiALQgigLglgCIgKABIgKACIgKABIgIADIgDABIAAAAIgDABIADgBIgDABIgGACIgBAAIgGAAIgDAAIAAAAIgCAAIgKgBIgcgGIACAAIABAAIAAAAIABAAIAMABIABAAIAJgBQARAAAQAEQgQgEgRAAIgJABIgBAAIgMgBIgBAAIAAAAIgBAAIgCAAIgogLIAoALIgZACQgMACgNAEQANgEAMgCIAZgCIAcAGIAOADIgCAAIgCABIgEADIgMACIAJgBIgNAHQgVAMgSAOIgHAGIgVAVIgIAJIgMANIgHAJIgBADIACgXIADgPIgDAPIADgOIgDAOIgCAXQgSAagKAdIgDALQgJAXgBAZIgBALIgBABIAAAMQAAARAEAPQgLgdgCghIAAgPQAEg/AlgwIANgQIADgDIAFgWIABgBIADgKIAEgKIAJgUIAKgTQAKgQAOgQQASgXAWgSIAOgIIATgQIAFgCIAGgEIAEgCIARgLIAEgBIAHgDIAEgCIARgJIAFAAIAIgCIAOgGIAFAAIAFgBIAFgBIAfgJIAFAAIAIAAIADAAIACAAIABAAIAXgBIAAAAIAAAAQAuAAAmAPIABABIABABIABAAIACABIABAAIAHAEIACABQAsA8ATBGQgThGgsg8IgCgBIgHgEIgBAAIgCgBIgBAAIgBgBIgBgBQgmgPguAAIAAAAIAAAAIgXABIgBAAIgCAAIgDAAIgIAAIgFAAIgfAJIgFABIgFABIgFAAIgOAGIgIACIgFAAIgRAJIgEACIgHADIgEABIgRALIgEACIgGAEIgFACIgTAQIgOAIQgWASgSAXQgOAQgKAQQgpgMgngRQiKg8hOhVIAAgBIAAgBQBOhVCKg9QCLg8CiAAQBnAABdAYIgEAPIgJAuIAAABQgBAQABARIAAACIAAACIAAACIAAACIAAACIAAADIABACIAAADIAAAAQADALADAJQAKAcATAYQgEAtAoAZIgCAKQAGAoAPAjQgcALgdAJIACAIQAXAEAUAMIAKAGQAbATAXAbQA8BGAABgIAAAGQgEAngOAXIgEAJIgCAEQBYAuA6A7IANANQhNBXiLA9QiJA8ikAAIgCAAgACLE/IASgBIALgBQAggGAdgPIALgFQAngVAigZIALgJQAWgVAMgYIgggRIAgARQgMAYgWAVIgLAJQgiAZgnAVIgLAFQgdAPggAGIgLABIgSABIAAAAIgBAAQgYAAgVgIIgBAAIgDgCIACAAIAHgDIgIgBIABAAIAJAAIgCABIAAAAIAAAAIACgBIgCABIgHADIAHgDIACAAIAZACIAAAAIAAAAIAUgBQANgCAMgDIAFgCQA2gMAogsIAKgKQAcgeATgeIgXgKIgFgCIgQgHQgWgIgXgIQAEgNABgOQABgLAAgLQAAgfgLggQALAgAAAfQAAALgBALQgBAOgEANQAXAIAWAIIAQAHIAFACIAXAKQgTAegcAeIgKAKQgoAsg2AMIgFACQgMADgNACIgUABIAAAAIAAAAIgZgCIgCAAIACgBIgJAAIANgIIAOgMIgRAAIgCAAIgFABQgVADgTAAIgBAAIgCAAIAIAGIgIgGIACAAIABAAQATAAAVgDIAFgBIACAAIARAAIgOAMIgNAIIgDgBIgUgFIgJgEIAIAEQgNgDgNgGIgCgBIACABQANAGANADIAEADIACAAIACABIgHABIgEABIgCAAQgTADgSAAIAAAAIgBAAIgXgBIAXABIABAAIAAAAQASAAATgDIACAAIAEgBIAHgBIAHAEIACAAIgBABIgDABQgQAFgQAAIAAAAIAAAAIgCAAIgBAAIgBAAIgBAAIgMABIgLgBIgIgBIgMAAIgMgBIgCAAQgZAHgcAAQgPAAgPgCQAPACAPAAQAcAAAZgHIAWAEIAHABIAGAAIAOABIAvgGIgvAGIgOgBIgGAAIgHgBIgWgEIACAAIAMABIAMAAIAIABIALABIAMgBIABAAIABAAIABAAIACAAIAAAAIAAAAQAQAAAQgFIADgBIABgBIAFACIgFgCIAFACIAAAAIgHADIAHgDIADACIABAAQAVAIAYAAIABAAIAAAAgABsExQAWAAATgEIADAAIADgCQAhgGAcgcIAJgKIAPgSIAAAAIABgBIACgCIACgBIABgBIAGgFIABgBQAdgdAQgjQgQAjgdAdIgBABIgGAFIgBABIgCABIgCACIgBABIADgEQAagkANgqQgNAqgaAkIgDAEIAAAAIgPASIgJAKQgcAcghAGIgDACIgDAAQgTAEgWAAIgBAAIAAAAIgDAAIgEAAIAEAAIADAAIAAAAIABAAgAlTC2IAXgLIgXALgAj9g1IAAABIAAgBIALgKQAkghAugMIABAAIgBAAQgwAGgnAbIgGAWIAAAAgAjwhfIACgBIABgBIABgBQAigTArAAIAAAAIAAAAIADAAIADAAIgDAAIgDAAIAAAAIAAAAQgrAAgiATIgBABIgBABIgCABgAgkhlIgGgCIAGACIgGgCIAAAAIgFgCIgBAAIAFgCIgEACIAEgCIAWgFIAFgBIgCAAQgJgDgKgBIgDAAIgHgBIgFAAIgBAAIgBAAIgDAAIgEAAIgOAEIAOgEIAEAAIADAAIABAAIABAAIAFAAIAHABIADAAQAKABAJADIACAAIgFABIgWAFIgFACIgFgCIAFACIAAAAIgEABIAKABIgGgCIABAAIAFACIAAAAIAGACIAAAAgAoFE3IAAgBQAkgnAwghQAigYApgWIABADQgXAugpAkQgnAggtAOIgMgMgAh0E5IAAAAgAh5E3IAAAAIgBAAIABAAIgGAAQhWgGg8hDQgcgfgPgkIAQgHIAEgCIABAAIgCgHQgEgPAAgRIAAgMIABgBIABgLQABgZAJgXIADgLQAKgdASgaIABgDIAHgJIAMgNIAIgJIAVgVIAHgGQASgOAVgMIANgHIgJABIAMgCIgDABIADAAIAIAAIAAAAIABAAIAIAAIAEAAIAIABIACAAIAVADIgVgDIgCAAIgIgBIgEAAIgIAAIgBAAIAAAAIgIAAIgDAAIAEgBIgBAAIAEgDIgDADIADgDIACgBIACAAIAAAAIAIABIgPADIAPgDIABAAIAnAGIgEACIgDACQgJABgIADIgRAHQgUAKgVAPQgTAPgSAVIgNAQIgIAPIgJARQgIAVgEAYQAEgYAIgVIAJgRIAIgPIANgQQASgVATgPQAVgPAUgKIARgHQAIgDAJgBIADgCIAJABIAJADIAIAEQgYAMgWATQhCA6gJBWQAAAZAEAXQgEgXAAgZQAJhWBCg6QAWgTAYgMIATAPIgTgPIADgBIAVAIIADABIABAAIgJAHIAJgHIgBAAIgDgBIgVgIIAHgDIgLgEIASABIAAAAIgEACIAEgCIgEACIgCAAIgBABIANAFIAIAFIgDACIAXALIAKAIIgOAJIgTgOIgJgHQgMAJgLAKIgHAHIgKAHQgqAfgTAvQgJAYgEAZQAAAWAEAUQgEgUAAgWQAEgZAJgYQATgvAqgfIAKgHIAHgHQALgKAMgJIAJAHIATAOQgOALgOAOQg9BEgJBOIAAABIAAACIAAgCIAAgBQAJhOA9hEQAOgOAOgLIAGAFIAJAKIgGAFQglAhgUAlQgJAagEAaQgDANAAAOQAAgOADgNQAEgaAJgaQAUglAlghIAGgFIAGAFQgVAVgMAYIgDAIQgPAfgEAjIAAAFIABAXIgBgXIAAgFQAEgjAPgfIADgIQAMgYAVgVIAJgKIABgBIAEAEQAyA4AABNIAAARIAAAEIgQgBIAAgEIABgTQAAgOgCgPQgLg1gkgpQAkApALA1QACAPAAAOIgBATIAAAEIgugBQgcAAgcACQAcgCAcAAIAuABQgDAngRAhIgHAPQgKAXgOAVQgsg5gHhJIgfACIABABQAIBWA9A4IAMgPIAHAJIAGAHIgHAAIgCAAIAAAAIgBAAIgMABIgDgCIgCACIgHAAQgWgBgVgFIAJAKQAMAHANAGIABgBIAOgOIABgCIAFAAIAEAEIgEgEIAMgBIABAAIAAAAIACAAIAHAAIgGgHIgHgJQAOgVAKgXIAHgPQARghADgnIAQABIABAUQAABEgvA5IgIABIAIgBQAvg5AAhEIgBgUIAhADIAAAEQgGBRg1A3QA1g3AGhRIAAgEIAMABIABABIgBABQgDBAghAsIgNARIgJAJIAJgJIANgRQAhgsADhAIABgBIgBgBIAeAFIAAAEQgIAngUAhIgFALIgTAeQgPAHgQAGIgDABIgCAAIgBABIgEAAIgDABIgFABIgJABIgFABIgCAAIgBAAIAAAAIgDAAIAAAAIgIABIAEAEIgLALIgKgJIgBgBIABABIAKAJIgMANQgNgEgLgGQgLAKgMAIIgPgMIgEgCQgKgKgLgMIgRgWQAWALAYAGQgzg5gBhNQABBNAzA5QgYgGgWgLQgjgygLg8QALA8AjAyQgQgIgPgKIgNgJQgVgkgHgpIAagGIAogHIAigFIgiAFIgoAHIgaAGIgjAJIADAHQAZAiAjAbQAMATAQATIAHAIIAyAoIgygoIgHgIQgQgTgMgTIANAJQAPAKAQAIIARAWQALAMAKAKIAEACIAPAMIgIAFIgIgEIAIAEIAAAAIAIgFIAMAHIAHADIAAAAIgHgDIgMgHQAMgIALgKQALAGANAEQgNAJgNAIIgBAAIgBABIABgBIABAAIgCABIAAAAIAAAAIAAAAIAAAAIACgBQARgGAPgJIAFABIgFAEIgaAKIgHABIgBAAIABAAIABAAIAGgBIAagKIAFgEIAHgDIACgCIAFgCIATALIAGgGIALAIIgMAAIAAAAIgFgCIgCABQgQgBgPgEQAPAEAQABQgPAMgQAHIgNgCIgTgEIgFgDIAFADIgGgDIgEABIADgBIgDABIgDABIAGgCIgGACIgBAAIABAAIADAAIgFACIgBAAIAAAAIACgCIgDABIgRgIIARAIIAAAAIgRgIIgTAKIATgKIARAIIgNACIgNACIABAAIgCAAIABAAIgEgBIgCAAIgEgBIgBAAIABAAIAEABIACAAIADABIgBAAIgFAAIgBAAIgGAAIAAAAIgBAAIAEgCIgEACIgCAAIgBAAIAAAAIgEAAIgFAAIALAAIgVAHIAAAAIgKgBIgBAAIgLgEQgOgGgOgHQAcAJAeACIACAAIgCAAQgegCgcgJIAAgBIgJgFQgXgLgTgNIgIgGIgHgFQgUgRgOgRIgIgIQAJAMAKALQAnAqAyARIAAABQAOAHAOAGIALAEIABAAIAKABIgFABIgFgCgAj4CQIAGAYIAGAMIAHAQQAXAkAjAaIAUANQAhAZAgAHIABAAIgBAAQgggHghgZIgUgNQgjgagXgkIgHgQIgGgMIgGgYIAbgJIgFgIIAAgBQgFgLgGgJIgBgFIgHgPIgBgEIgGgUIAGAUIABAEIAHAPIABAFQAGAJAFALIAAABIAFAIIgbAJIAAAAgAkNDTQgQgXgKgaQAXgKAYgIQgYAIgXAKQAKAaAQAXQgTgXgIgaQAIAaATAXgAj4CQIAAAAQgGgWgCgXIAAgDIACgVIACgNIAAgBIAAgDIgFgRIAAgFQgCgRAAgQIABgSIgBASQAAAQACARIAAAFIAFARIAAADIAAABIgCANIgCAVIAAADQACAXAGAWgAgSE3IgVgGIgHgDIAFgCIAEgCIAGADIATAEIANACIgCABIgLAEIgGgBgAhvE4IAVgHIgLAAIAFAAIAEAAIAAAAIABAAIACAAIgBAAIABAAIABAAIAAAAIAGAAIABAAIAFAAIABAAIACAAIABAAIAIABIgGACQgTADgVABIAAAAIgBAAgAhaExIARAAIgRAAgABZE1IAAAAIgHADIAHgDgAg6EzIAMgFIAHADIAVAGIgogEgABZE1IAAAAgABZE1IgFgCIAGgCIAIABIgHADIgCAAgAjTE0IAAAAgABUEzIgCAAIgHgEIABAAIAMABIACABIgGACIAAAAgABUEzIAAAAgAABEzIAAAAgAg6EzIAAAAgAg6EzIgGgBIAIgCIADgBIAGgBIAAAAIABAAIgMAFIAAAAgAhAEyIgIgBIgBAAIAMgCIANgCIAAAAIABABIgGABIgDABIgIACIAAAAgABiEyIAAAAgAhZExgABYEwIADABIgBAAIgCgBgAgnExIAAAAgAguEuIAAAAIAHADIgHgDgAhJExIAAAAgAhlExIAAAAgAhLExIgDgBIAEABgAhLExIAAAAgAhLExgABMEvIgBAAIgCgBIgCAAIgDgDIAUAFIgMgBgAhOEwIAAAAgABLEvIAAAAgAguEuIgBAAIABAAgABDErIABAAIADADIgEgDgAgvEuIgBgBIADgBIgCACgAgvEuIAAAAgAgwEtgAgpErIAAABIgDAAIADgBgAgpEsIAAAAgAgpErIAEgBIgEACgABDErIgIgEIAJAEgAgpErgAgpErIAAAAgAglEqIAHgBIgGABgAglEqIAAAAgAglEqgAgmEqgAgmEqIgHgDIAHADgAgKEYIAGACQgPAJgRAGQANgIANgJgAgeEpIAAAAgAgtEnIAAAAgAhBElIgIgEIAIAEgAihElIAAAAgAj6DqQgKgLgJgMIAIAIQAOARAUARIAHAFIAIAGQATANAXALIAJAFQgygRgngqgAAnEhIAAAAgAAgEgIACgBIAFACIgHgBgAAPEUIAKgIIAPANIgGAGIgTgLgAABEbIAAAAIgFAEIAFgEgAABEbgAABEbIAAAAIAHgDIgHADgAgEEaIAOgKIAFAEIgFACIgCACIgHADIgFgBgAgEEaIgGgCIAMgNIALgLIAHAIIAEgDIANgMIgJABIAJgBIAAAAIAFgBIADgBIAEAAIABgBIgIAIIgCACIgDADIgCACIgFAEIgFADIgFgEIAFAEIgKAIIgFgEIAKgIIgKAIIgIgFIAIAFIgOAKIAAAAgAAoEZIAAAAgAAZEMIAFgDIAFgEIACgCIADgDIACgCIAIgIIACAAIADgBQAQgGAPgHIgDAEIgHAJQgMAPgNANIgIAGIgDACIgPgNgAAIEYIAAAAgAg7EBIgJgKQAVAFAWABIAHAAIgBACIgOAOIgBABQgNgGgMgHgAAZEMIAAAAgAAZEMIAAAAgAANEAIAAAAIAEgFIADAAIAAAAIABAAIACAAIAFgBIAJgBIgNAMIgEADIgHgIgAgND9IAAAAIAEAEIgEgEgAANEAIAAAAgAANEAIAAAAgAANEAIAAAAgAAJD8IAIgBIgEAFIAAAAIgEgEgAgND9IgDgCIADACgAgSD9IACgCIADACIgFAAgAgQD7IAAAAgAhVBtIgBgBIAfgCQAHBJAsA5IgMAPQg9g4gIhWgAARD7IAAAAgAARD7IADAAIgDAAgAAUD7IAAAAgAAlD5IAFgBIgFABgAAqD4IAAAAgAhED3IAAAAgAgEDsIAAAAgABWDoIAAAAgABpDKIAFgLQAUghAIgnIAAgEQAfAFAdAIQgpBGhHAiIATgegAlVDVIgOgXIAPgHIgPAHIAAgBIAKgYIgKAYQgXgtgCg3IAAgEIgBgHIADgWIAAgDIAKAJIAKAZIAAgJQAFgSAFgQIgEgLQgFgNgHgMQATgsAmgjQAkggAogMIgJAUQgVANgRAUQgvAmgXBEQALAgAEApQgDATgFARQgEghgNghIAAAAIAAAAQABAVADATIAHAhIACAFIABAEIgBgFIAEgLIABAbIAAgBIgEgKIAEAKIAAABIAAADIAAADIgBAaIAAABIAAAAgAjaCOIgDgHIAjgJQAHApAVAkQgjgbgZgigAljC9IAAABIgBABIABgCgAlUC3IAAgDIABACIgBABIAAAAgAlUC3IAAAAgAlUC0IAAAAgAlbCgIACAEIAAABIgCgFgAlbCgIgHghQgDgTgBgVQANAhAEAhIgEALIgCgEgAkoCiIAAAAgAkpCbIACAHIgBAAIgBgHgAlbCgIAAAAgAkpCbIAAAAgADGCAIAAAAIAAgBIAAABgACKBzIAAAAgABsBuIAAAAgAhWBsgAAvBpIAAAAgAlmBXIAAAAgAlmBXIAAAAgAlmBXIAAAAgADjARQgPgZgWgZIgKgKQgcgcgbgRIgNgHIgGgDIADAAQAiADAfAKQgfgKgigDIgDAAIgCgBIgJgDIADgCIAKgEIABgBIARgCIADAAIAGADIAnAXIAWARIADADQAMAGALAHIAFAFIgFgFQgLgHgMgGIgDgDIgWgRQAeAJAbAQIABAHIABACIABAFIgBACIAAABIgGgEIAGAEIABABIAAALIgBAVIABAEIAAAFIAAACIgBALIAAACIAAAFIgBAEIAAAEIgFgKgAgBgpIgGgFIAMgLIAEgDIAGAEIgGAEIgEgFIAEAFIgBABIgJAKIAAAAgAgHguIgJgKIgGgFIAOgJIgKgIIALAHIgLgHIgTgMIgBgBIALgHIARAIIARALIgOAIIgBABIAAAAIANANIgMALIAAAAgAj3hLQAngbAwgGQguAMgkAhIgLAKIAGgWgAAPg4IgGgEIALgIIABgBIgOgKQAMgHAOgEIACACIAGAFIgUAOIABABIAEADIABABIgMAIIAAAAgAgIhGIAAAAIABgBIAQALIgEADIgNgNgACuhVIgngXIgGgDIAMgBIAMAAIAMABQAfABAdAMIABAEIACAFIAAAFIABALIACANQgbgQgegJgAAJg8IgQgLIAOgIIAOAKIgBABIgLAIIAAAAgAgWg9IAAAAgAAahBIgEgDIgBgBIAUgOIgGgFIgCgCIABAAIgBAAIgDgCIgLgHIALAHIADACQgOAEgMAHIgRgLIgRgIIAHgEIAUAAIALAAIAIADIgGgDQAkgBAjgDIAFABIgUAHIgCABQgPACgQAEIgRgIIARAIIgCABIADgBIABABIAJADIgGAEIAGAGIgUANIgBgBgAj0hVIgDAKIgBABIAEgLgAj3hLIAAAAgAAphTIAGgEIAJAFIgJAFIgGgGgAgphZIADgCIABABIATAMIgXgLgAAHhPIAAAAgAA4hSIAAAAgAAvhXIAUgKIANgBIgNABIACgBIAUgHIAGADIgIADIgDAAIgEABIAEgBIADAAIgfARIgJgFgAAphTIAAAAgAj0hVIAAAAgACuhVIAAAAgAAmhaIgBgBQAOgEAQgCIgUAKIgJgDgAAihaIAAAAgAAkhbIABAAIgDABIACgBgAAlhbIgBAAQAQgEAPgCIAAAAIAAAAIANgBIgNABQgQACgOAEIAAAAgAAkhbgAgmhbIAAAAgAhFhhIgIgEIALADIgDABIAAAAgABqhiIAAAAgABfhiIgFgBIAAAAIAAAAIgCAAIgBAAIAIgDIAJADIACABIgLAAgAgbhigAhChiIgLgDIgKgGIARACIgIgDIAIADIAAAAIALAEIgHADIAAAAgAhNhlIAAAAIALADIgLgDgABXhjIAAAAgAALhmIACAAIAGADIgIgDgAhGhpIAAAAIALAEIgLgEgAhWhoIAJADIAAAAIgJgDgAgkhlIAAAAgAhWhoIgJgBIAEgCIAEAAIAKAGIgJgDgAANhmIgEgCIgJgGIgDgBIAEgDIAFgCIABAAIAGAAIAHAAIAAAAIABAAIAQABIABAAIACAAIACAAIAOACIABAAIAWAFIAFACQgjADgkABIAAAAgAALhmIgSgHIAEgCIADABIAJAGIAEACIgCAAgAAAhmIgUAAIANgHIASAHIgLAAgABfhmIAAAAgABfhmIAAAAgABfhmIAAAAgABahpIATgEIgBABIgKAEIgDACIgFgDgABZhpIABAAIgBAAIgFgBIAAAAIgFgCIgWgFIgBAAIgOgCIgCAAIgCAAIgBAAIgQgBIgBAAIAAAAIgHAAIgGAAIgBAAIATgHIADgBQAPgFAQAAIAEAAIADAAQAKABAKACIAIACQAPAEAOAGIgEABIgIAEIgbADIAGABIAFADIgGgDgAgUhmIAAAAgAgqhngAg0hoIAEgBIAGACIgKgBgABahpIgGgBIAbgDIgBAAIgBAAIgTAEIAAAAgABZhpgAgwhpgAhGhpgABUhqIgFgCIAFACgABUhqIAAAAgAhbhrIACgBIACABIgEAAgAhbhrIgngGIAHAAIABAAIAKgBIABAAIAAAAIACAAIACAAIADAAIACABIANAFIgCABIAAAAgABPhsIAAAAgAhOhsIAAAAgAhZhsIAAAAgAhZhsIgNgFIAFABIAMACIgEACIAAAAgACBhvIAAAAIAGADIgGgDgABthtIAAAAIgBABIABgBgABthtgABthtgABthtIABAAIgBAAgABthtIAAAAgABuhtIABAAIAIgEIgIAEIAAAAIAIgEIAEgBIAAAAIAEgCIgEACIAEACIgQADIAQgDIACABIgDAAIgRACIABAAgABthtIAAAAgAiThuIABAAIgEABIADgBgAiWhtIAAAAgABvhtIAAAAIgBAAIABAAgAgDhvIAAAAIgEACIAEgCgAhVhuIgMgCIgFgBIgBgBIAHABIAFAAIALABIgFACgACBhvIgCgBIACABgAgDhvIAAAAIAEgDIgEADIAAAAgAgDhvIAAAAgAgDhvIAAAAgAgKhyIAQgCIgFACIgEADIgHgDgAgDhvgAhQhwIAAAAIAFgCIgFACIAAAAgAhQhwIAAAAgAB7hyIAAAAIgEABIAEgBgAiChxIgBAAIgIgBIAHgCIAAAAQAPAAANACIgDAAIgCAAIgCAAIAAAAIgBAAIgKABIgBAAIgHAAIAAAAgAhohyIABAAIABABIgCgBgAABhyIAAAAgAhohyQgNgCgPAAIABAAIAGgCIADgBIATAFIgBAAgAB7hyIAAAAgAB7hygAiLhyIAAAAIgOgDIAKABIACAAIAAAAIADAAIAGAAIgHACIAAAAgAiEh0IAAAAIABAAIgBAAIAAAAgAh6h3gAh6h3IAAAAIADgBIgDABgAh6h3IAAAAgAi1h7IAAAAgADFh+IAAAAg");
	this.shape_160.setTransform(270.9,214.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FF9435").s().p("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");
	this.shape_161.setTransform(273.5,213.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("rgba(67,40,13,0.263)").ss(0.1,1,1).p("AGzqNQAQgTAQgSQASgVAPgTQAXghAfgWQBIg2BcAAQALAEALAFQAIADAEACQAJAEAIAEQB+A+AkCHQAJAhAEAkQAEA4gaA1QgVApgcAlQgaAjgeAcQhEBAhYAbQh/Anh9glQgCgBgBAAQgKgEgKgDQgVgIgVgKQgMgGgLgGQgIgEgHgEQgCgBgCgCQgBAAAAAAQg2gYALg1QgVgUgLgZQgDgIgDgJIAAAAQgBgCAAgDQAAgBAAAAQgBgRAAgPQABgMABgLQACgVAHgTQACgIADgHQADgIAEgHQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAABgBQAAgBAAgBQABAAAAgBQAGgKAGgJQAwhGBMgVQAcgHAaAAQAsABAlATQAUALAQAMQAYAVANAiQADAMACALQAIAsgHAmQgIAngWAiQgtBFhOAVQgGABgGABQgnAcgvAXQgTAKgVAJQgDABgDABQgSAHgUAIQg6AVg+ANIAAAAQhRAQhXAAQhOAAhIgNQhIgNhDgYQiGgyhUhHQAAgBAAgBQBUhHCGgzQCGgyCbAAQCDAAB1AkQAUAHAUAHQATAHARAHQAcg8Akg5QAOgWAPgXQAEgFAEgFQATgbATgZgAGJl9QBKg9BigHQAPgBAPAAQATAAASADQA8ANAuAkQABAAAAAAQAVAOAQAQQAeAeALAlQAIAZgCAbQAAACAAACQgFBYhUBLQhJBDhkABQgyABgvgRQgqgPgkgeQhEg4gUhSQgCgJgCgJIAAgBQADgNAFgMQAHgTAKgSQAPgdAXgZQAHgIAIgHQAJgJALgIQAAgBABAAQAvAbAmAgQgWAUgaARQg7ALg0gUQgKgEgJgFQgYgOgSgRQADgOAIgRQABgBAAgBQAMgfAOgfQA1AWAsAagAiyihQAEgEAEgDQAIgFADgCQALgJAGgHQACAAACgBQADgCADgBQACgBABgBQAIgGAHgFQACgBACAAQADgBADgBQACgCABAAQAIgFAHgEQADgBACAAQADgBADgBQAIgDAEgDQADAAACAAQACAAADgBQABgBACAAQAPgGANgFQADABACAAQADAAADgBQACAAABAAQA4gKAsAPQADABADABQABABABAAQABACABACQARAYANAaQAEAJAEAJQAEAJADAJQAKAcAGAeQABABAAACQABACABACQAAADAAACQAAABABACQAjgDAeASQAEADAEADQAXAQATAYQAyA9AABSQAAADAAACQgEAigNASQgBADgCAEQAAABgBAAIgUAcQgEAFgEAEQAAAAgBABQgEAEgGADQgdAUgiATQgEACgEADQgYANgcAGQgEABgFAAQghAFgfgPQgEgCgEgCIgBAAQgCgBgCgCQgBAAgCAAQgBABgCABQgXAOgagDQgKACgIgCQgDgBgEAAQgFAAgFgBQgHgBgGAAQgCgBgDgBQgBABgCAAIAAAAQgBAAgBAAQgcgDgWgCIAAAAQgBAAgCAAQAAAAgBAAQgBAAgBABQAAAAgBAAQgBAAgBABQgBAAAAAAQgCAAgCABQgBAAgCAAQgBAAgBABQAAAAgBAAQgCAAgCAAQgMACgMAAIgBAAQgBgBgBAAACEi2QAEAJAEAJQAEAJADAJABlg4IABAAQAXgKAbgFQAFgBAGgBQACAAACAAQAAADABAEQABAGABAGQAAADAAADQAAABABABQABACAAACQAAACAAACQABAJAAAKQAAAEAAAFQAAABAAABQAAAAAAACQABACAAACQAAABAAABQAAAEgBAGQABABAAABQAAACAAACQAAACAAACQgBAJgCAJQAAACAAACQAAACgBADQAAACgBACIAAAAQgEAggPAeQgHANgIAMQgQAZgWAUQAPACAOADQASADARAEQgHAMgLAMQgEAFgEAEQgIAJgJALQgKALgKAJQgHAGgGAGQgIAGgIAEQgBAAgBABIAAAAQgEAAgEgBQgBAAgBAAQgDAAgDgBQgEAAgEABQgBAAgCAAQgiAJgegFQgGgBgGgBQgBAAAAAAQgOgEgNgJQgGADgGACIAAAAQgBgBgBgBQgGADgGACQAAAAgBAAQgBAAAAABQgFACgGACIAAAAQgEgBgEgBQgHgCgIgDQgRgGgRgNQgJgFgJgGQgfgVgVgfQgBgCgBgCQgCgFgCgFQgCgFgDgFQgDgLgDgKQgFgTgCgUIAAgDQAAgKABgIQACgLACgJQAEgQAGgPQAEgIAEgIQADgGAEgGQAFgHAGgHQARgQAQgNQATgNASgHQAHgCAHgDIAAAAQABAAAAAAQACgBACgBQADgBAEAAIAAAAQABAAAAAAQAEgCADgCQALgGALgCQAJAAAJABQAJABAHADQACABADABQABgBABAAQADACADACQACABABABQACABACABQANAFAPAHQAGADAIAEIAjgLQAHAAAGgBIAAAAQAFAAAGAAIADAAQACAAABAAQABAAACAAIAAAAQADAAADAAQADAAADABQAYACAXAHQAIAGAIAHQACACABABQAKADAIAGQABAAAAAAQAbARAOAXQARAUAGAmQAAADAAAEQAAABAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQgDAngMAiQgGAQgIAOQAEACAEABQAPAEANAFQgEAFgFAGQgFAEgEAEQgfAlgsALQgCABgCABQgKADgLACQgZADgXgEQgFgBgFgBQgDgBgDgBQgBAAgBgBQAAAAgBABQgKgDgKgEQgGgDgGgDIAAAAQgNgHgMgJQgDADgCADQgCADgEADQgBAAAAAAQgOgCgMgFQgDgCgEgBQgFgCgGgDQgBgBgCgBQgJgJgIgKQAAAAgBgBQgBgCgCgCIgUgnQgDgGgCgHIAAAAQgCgIgBgHIgDgbQAAgBAAAAQAAgBAAgBQAAgBAAAAQAJg8Atg2QADgFAEgEQACgDADgCQAHAKAGAKQAFgGAGgFQAFgFAFgFQAAAAABAAQAJgIAKgIQAEgDAEgCQABgBAAAAQADgCACgCQAEACAEACQAPAIAPAKQADACACADQAGAKAJAGQAIAGAHAJQAeAcAFAnQABAGAAAFQABALgBAOQAAAJgBAKQgBAHgCAHQgCAIgDAJQgKAbgPAYQgKAQgMAOQAAAAgBAAQgBAAgCABQgNACgNACQgDAAgDAAQgHABgIAAABlg4IAAAAQASAKARANQATAFASAJQAaAMAYARQAqAjgGA2QAAABAAACQAAABAAABQAAABAAABQgCA3giAqQgCADgEAEQgEAFgFAFQgHAGgHAFIAAABQgGAIgHAJQgBABgCACQgEAEgEAEQgYAZgcAEQgCABgCAAQgRACgSAAQgGgBgGAAABlg4QADAAADAAQAHgBAFgBQAFAAAFAAQAFAAAFABQAQgBAPAEQAgAHAeAXQABABABABQA3ArAJBBQABAIgBAHQAAAFAAAEQgCAZgHAYQgQAdgcAfQAIADAIADQALAEALAEIAAAAQBrArBKA7QAHAFAHAGQhUBJiGAyQiGAziaAAQibAAiGgzQglgOghgPQAMAxAIA1QADAQACAQQAIA/gBA6QAFA5geAjQgfAlhAAIQhNAQhRgPQg6gLg0gaQhHglgsg5QhShqAqiSQACgGACgGQAFgUAHgSQACgHADgGQgTgRgPgRQgvg1AVhDQAMgwAbgnQAIgLAJgKQgDgPgBgRIgBgDQgEgyAagmQAVgZAdgVQBEgxBXAJQBWAIA/A/QAjAjAUAsQANAfAEApQgEATgGARQAGAhgEAiQgBAHgCAGIAAAAQACADABAEIAIAUQAtgaA2gVQgvg3gDhJQAAgBAAgCIAAgGQABgKABgJQAOg/AxgrQAnghArgHQACgBACAAQATgCAQACQADAAAEAAQATAAARAGQAIgDAJgDQADgBAEAAQAEgBAEgBQAFgBAEgBQAlACAhANQACAAABABQASgEAQAAQALgFAKgEQAQgGARABQAJABAJACQADABADACQASAFARAJgABKgqQAFACAEADQAXAPAYAYQAFAEAEAEQARAUANAVQABABABACQARAqgHAlQgCATgGAQQgCAFgCAGQgDAIgFAIQAYAFAYAHQgGALgHAKQgBACgBACQgqAgg2AEQgJABgKAAQgJAKgJAIQgJgGgJgHQgPgMgOgQQgCgDgCgCQgEgFgEgEQgBAAgBAAQAAABAAAAQgBAAAAAAQgCACgBACQgEAEgFAFQgDgDgDgDQgCgCgCgCQgHAAgIABQgBAAgCAAQgPAAgQgDQAAABgBAAQgGAJgGAIQgDADgCACQgDADgEAEQgCABgCACQgRgNgPgSQgPgSgLgTQgEgHgDgHQgSgoAAgwQALhJA4gvQAFgFAFgDQACABACACQALAHAKAJQAAABABAAQAPANAMAQQAHAKAFALQAHANAEANQACAIABAIQADAUgCAUQgCARgEAPQgGgZAAgbIAAgEQACgQAGgQQAEgMAGgLQABgDACgDQADgIAFgHQAEAEADAFQACADACADQAOAYAHAcQAEAWgCAYQAAABAAACQAAAAAAABQgBAJgCAJQAAABAAABIgBAEQgCAHgCAHQgCAGgCAGIgQAgQgFAHgFAGQAAABgBABQgBAAgCAAQgCAAgDABQgEgFgEgFQgDAGgEAFQgFAHgGAIQgCACgCACQgIAKgKAIQgFAEgFADQgEADgFADQAAAAgBAAQgBAAAAABQgJABgKABQgMABgNgBQgCAAgCAAQgWgCgVgGQgDgCgDgCQgUgJgQgLQgDgCgDgDQgEgCgDgCQgRgNgMgNQgDgDgCgDQgCgDgDgDQgDgFgEgFIgRgiQgDgRABgSIABAAQAAgFABgFQACgWAHgTQABgFACgFQAKgZAPgZQADgEADgDQAAgBABAAQAFgFAFgGQADgDADgEQAJgJAJgJQADgCADgDQAOgMARgKQAEgDAEgCQABgBABAAIABgBQACAAABgBIAAAAIAAAAQADgCACgBIABAAQABgBABAAQABAAABgBIACAAIAAAAQAFABAEACQAAAAAAAAIABAAQABAAABAAQAFAAAFAAIAEAAQABAAABABQAMAAALADQAQADAOAGQAFgDAGgCQAKgDAKgCQAFACAGADQACABACABQAAAAAAAAQALgHAKgFQAMgBAMACQAeADAXALQADACADACQABAAABABQABAAAAAAIABAAQABgBABAAQADgCADgBADEDkQgBACgBABAEjDgQgDAFgFAEQAAAAgBABAA5grQACgBACgBQACgBACgBQAQgGAUgDAA5grQAFAAAGAAABLgqQABgBABAAQADgCADgBIALgFQADgDAEgCAAsgqQAHgBAGAAAhhgmQADABACABIAJAEQAEACAFACQAAAAAAAAQAEACADACQARAJAPANQADACACACQACABABABQAEAEAFAFQAEAEAEAEQADgFAFgFQAHgLALgHQABgBABgBQAPAKALAOQAXAbAJApQAAACAAACQAAAHAAAGQgBAMgEAKQAAAFgBAFQgFAYgLAWQgEAJgFAIQgCAEgCAEQgIALgHANQgBADgCADQgCAEgEAEQgCACgBADQgGAHgFAGQgDgCgCgCQgGgFgFgEQgDACgCADQgIAHgJAGQgOAJgPAGQgCgBgBgBQgCgBgCgCQgDgCgCgCQgCgBgBgBQgGgGgFgFQgEgEgDgEQgLgOgJgOQgRgHgQgJQgEgDgFgDQgIgGgIgGQAFgBAEgBQAOgCAOgCQgPgngDgtQAFgVAJgUQAQglAkgYQAEgDAFgCIAAgBQACgDADgCQAEgEAEgDQAKAJAJAKQADAEAEAEQADgEAEgCQAFgFAGgFQABAAAAAAQABgBABgBQABAAAAgBQAJgGAJgFQAFAFAHAGQABABABABQADACACACQAAAAABAAQAIgFAIgFQAUgMAUgLAhdgoQAHgEAHgDQANAFALAHQAJgHAIgFQADgCACgBQAFADAGADQABACACACQAJAHAIAHQAFgDAGgCQAIADAJAFQAPgMAQgIAhhgmQACgBACgBQAKAFAJAHQADACAEACQAGgGAGgFQARAKAOANQAHAHAHAGQABABABABQADAEADAEQAhAqAHA1QABANgBAPQAAABgBABQAAAKgCAJQgCALgDAKQgHAWgMASQgDADgCAEQgDADgCADQgBACgBACQgIAAgGACQgBABgBABQAAAAgBABQAAAAgBABIAAABQgCABgCACQgBABgBABQgCACgCACQgEAFgFAEQgCABgCACQgMAJgNAHQgFADgGACQgBAAgCgBQgKgGgKgIQgMALgNAHQgFADgFACQgHAEgJADQgCgCgDAAQgBgBgBAAQgBgBAAAAQgMgFgLgGQgsgPgjgmQgBAAAAgBQgCgCgBgBIgDgEQgCgCgCgDQgCgCgCgDQgEgFgDgFAhEgXQAAAAAAgBQABAAAAAAAhKgcQADADADACAg8CvQgHgVgDgYIAAgBQAAgMACgLQAEgWAHgWQAHgMAIgLQAGgHAHgIQAEAJAEAJQAOAkgEAsQAEAbgEAaQANAAAOABIAAAAQAHAAAHAAQAMABAMABQAWACAVADQgeAbgoARIgBAAQAAAAgBABQgDAAgBAAQgJADgKABQAAgBgBgCQgCgEgDgFQgIgLgFgMQgGAPgIAOQgMgOgIgQQAAABAAAAQgJATgMASQgBAAgBAAQgWgEgVgJQgMgTgJgVQASgCASgBQgCgIgBgHAhTggQAFACAEACAikg+QABAAABgBAikg+IAAAAQAGABAHABQAAAAABAAQABAAABAAQAQADAPAFAjBg2QABAAAAAAQAHgBAHAAQALAAALABQANABAMADQABABABAAQALAIALAKQAFgEAFgDAisg6QAAAAAAAAQALgCAKAAQABAAAAAAQAGAAAGAAAivg5QACAAABgBQALgCALAAQAKAEAJAGQABAAACABQAQAEAPAHAjBg2QALgDAKgBAj3g2QAcgMAkAEQAKgBAJABAjAg2QAKgDAKgBAimg9QABgBABAAAj0hBIACgDQAMghAYgeQANgQAPgOAj3g2IAAAAAj/gTQAAAAABgBQABAAAAgBQAHgGAHgFQABAAAAgBIAcgPQAIgEAJgCAj8gkQAAgBAAAAQAAgBAAAAQABgBAAgBQAAgDABgDQABgEACgEQABgGACgFAj6guQACgEABgEQACgGABgFAktCnQgJgagCgcQAAgCAAgCIAAgMQAEg0AggqQAFgFAGgHQAEgFAGgFQABgIACgJAj5BOQgBgCAAgCQAAgBgBgCQgBgIgDgHQAAgCAAgCQgDgUAAgSQAAgQADgRAkrDbQgng1AAhDIAAgCQAEgpAWgjQAQgXARgPQANgLAOgIQAbgPAggDAlIDlQgjg6AAhKQAWhRAwgjQAUgYAagLAjSgwQAJgEAJgCAivC7QgYgTgSgXQgDgIgFgFQgEgLgGgHQgBgCAAgCQgEgHgDgGQgBgDAAgCQgDgHgCgHAkVDUQgSgVgGgYAkVDUQAAgBAAAAIAAAAQAXgHAWgFQAcgHAdgFAkNDdQgCgCgBgCQgBAAAAgBQgCgCgCgCAicEqQgFAAgFgBQhHgHgyg5QgHgHgFgHQALgEALgDAicEqQgQAEgSAAQgGAAgGAAQgHAAgHgBQgLgBgKgCQg6gOgrgxQgBgBAAAAQAFgCAGgDQAGgCAFgCQAJgDAJgDAicEqIAAAAAiDEvQgJgCgIgDQgCgBgBAAIgBAAQgCAAgCABAiDEvQgcAFgggEQgYAAgWgGQgrgMghgiQAAgBgBgBQgIgKgGgLAiVEqQgDAAgEAAAAUCiQgCAHgCAHQgCAGgCAGAhhC/QgDgGgCgHQAVgCAVgBQAJAAAKAAQgDAEgCAFQgDAGgCAGQgFgKgEgLAgpCvQAHAAAHAAQAIAAAIAAQgCALgEALQgGgLgEgLQgDgLgDgLQgDALgFALgAhEEfQgEgBgEgCQgHACgIABQgEADgFACAhEEfQgEgBgEgCQgBgBgBgBABDEjQgiARgogEQgCAAgDAAQgCgBgDAAQgMgCgLgDQgEgBgEAAAgkEkQgEACgEACQgBAAAAAAIgXgJAgwEpQgZAJgbAAQgQAAgPgDAgJEPQgOANgNAIAAcETQgUAAgRgEAhkEkQgPAHgQAEAh1g0QANAFALAHAnXDeIgoAvQgDADgEADQhEA2hWgIQhNgGg6g3QACgDACgCQAPgTAQgSQAogsAvgfQAegTAfgNQAxgLAiAHQAgAIAIAeQACADACAEQAAAAABABQAAABABABQAAABABABQAOAaAOAfIAAAAQAJATAIAVQgDAUgHATQAFgDAGgDQAFgDAFgDQABADACADQAdBIATBRQhCgfgzglQgQgMgPgNIAAgBQAigcAqgZQgPAsgeAjQgMAOgOANQhIA/hjgEQhegDhNhAQgDgCgCgCQAahEAsg7QgGgHgGgGQgwg0gOhGQASgSAWgRQBLg4BhgCQBggBBMA1QARAMAOANQANAgAFAhQgHAVgLATQAJATAIAVQACADABAEAnSDWQgCAEgDAEAnSDWQgCAEgDAE");
	this.shape_162.setTransform(273.8,213.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FF9900").s().p("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gBAAIADABIAEACIAAAAIgIAAIgCgBIACABIAIAAIgBABQgbANgfAAIAAAAIAAAAIgOAAIgCAAIgFgBIgGgBIgVgFIAVAFIAGABIAFABIACAAIAOAAIAAAAIAAAAQAfAAAbgNIABgBIAAAAIABAAIAIAFQAXALAYAAIAAAAIABAAgAiHElQAOAAAOgCIACgBIABAAIACAAIgRgEQAMgBAMgBIAEgBIABAAIABAAIAEgBIAEgBIABAAIABgBIACAAIACgBIABAAIADAAIgDAAIALgEIgTADIgPgFQANgIAMgKQgMAKgNAIIgKAFIgQAGIgEABIAAAAIAAAAIAHABIgHgBIAEgBIABAAIACACIABAAIARAEIgCAAIgBAAIgCABQgOACgOAAIgBAAIAAAAIgUgBIgDAAIgDAAQgYgBgWgGIAUADIAPABIAMAAQARAAARgEIgKAAQhHgIgzg4IgLgPIALAPQAzA4BHAIIAKAAQgRAEgRAAIgMAAIgPgBIgUgDQAWAGAYABIADAAIADAAIAUABIAAAAIABAAgAhIElQAcAAAZgIIAAAAIADgBIAFABIgFgBIAAAAIAIgFQANgIAOgMIAEABQAPACAQAAIABAAIACAAIAAAAIAMAGIAUAHIgDACIgGAAIgIAAIgDABIgCAAIgEABQgSAEgRAAIgBAAIAAAAIgUgBIgEgBIgLgCIALACIAEABIAUABIAAAAIABAAQARAAASgEIAEgBIACAAIADgBIAIAAIAGAAIgCABIgBABQgSAKgTAAIgBAAIAAAAIgHAAIgBgBIgFABIgEAAIAAAAIgBAAIgIgBIgBAAIgHgBIgLgBIgLgBIgIAAIAIAAIALABIALABIAHABIABAAIAIABIABAAIAAAAIAEAAIAFgBIABABIAHAAIAAAAIABAAQATAAASgKIABgBIACgBIADgCIgUgHIgMgGIAPAAQgPgNgOgQIADgFIAGgHIADgHIAAAAQApgQAegcIgrgEIgYgCIAFgVIACgTIAAgDIABgOIgBgOQgHg1ghgpQAhApAHA1IABAOIgBAOIAAADIgCATIgFAVIgOgBIADgNIgDANIgcgBQACgNAAgOQAAgNgCgNIABgRQAAgigLgdQALAdAAAiIgBARQACANAAANQAAAOgCANIAcABIgEAMIgRAhQgIgLgGgMQAEgLADgMIgQAAIg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");
	this.shape_163.setTransform(271,214.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FF9339").s().p("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");
	this.shape_164.setTransform(273.8,213.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FF9900").s().p("AkUHIQhjgfhMgpQgXgMgVgNIAAgBIAfgTQAcgPAfgOQA7gbBHgXIAigKQgggOgagfQglgugDg9IAAgDIAAgFIACgPQANgzApgjQAigcAlgDIASAAIAGgVIAfg6QAOgSARgQIAKgGQAJgIAFgGIAEgCIAFgCIADgCIAMgLIAEgBIAFgCIACgCIANgJIAEAAIAFgCIALgGIADgBIAFgBIADgBIACgBIADgBQiIgDh6glQiBgohag5IAAgBIAAgBQBZg5CCgoQCCgoCSAAQCTAACCAoIAjAMIABAFIAGAMQAOAXAYAQQgWA7A+AVIAEABQgnASgrAPIgqAOQhRAYhWAKQAjA5AOBAIACADIABAEIAAADIACAKIACAPIACACIABAEIAAADIACAYQALgEAMgDIAIgCQAggFAaARIAHAFQARAOAQATQAoA1AABFIAAAEQgEAdgMAMIgCAGQgJAQgPAMIgIAGIg1AfIgDACIgEACQAYAGAYAHQB2AlBVAzIAPAJQhZA6iCApQiCAoiTAAQiSAAiCgogABdDoIgCABIAAABIADgBIABAAIgBAAIgBgCgAg+C7IABAAIAAABIAHACIgHgDIgEgGIADAGgAiCgfIAHAAIgIAAIgHgBIAFABIABAAIABAAIABAAg");
	this.shape_165.setTransform(271,215.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FF933D").s().p("AqnNRQg2gMgwgZQhCgkgog2QhJhkAtiIIADgJQAMgmARgkIgTgOQgTgPgQgSQgrgtAWg6IAAAAQANgpAZghQAMgOAPgNQgGgVgDgXIAAgCIAAgDIgCgDQgEgrAZggQASgVAZgPQA7gmBKAJQBJAIA2A2QAeAeARAlQAMAaAEAlIAAABIgBACIgBAFIgBABIgFASIgDAGQAIAngGAmIAAACIACAIIATA4IABADIACAFIACAIIAEAMIgfATIAAABQAWANAXANQAYBWASBgIAFAeQAJA6AEA3QAIA2gbAhQgbAig/AFQgfAFgeAAQgrAAgsgJgAIDhIQglgNgfgZQhEg1gShSIABgBIAAgCIABgBQAGgSAJgRIgJgEIgDgCQg+gVAWg6QgZgRgNgXIgGgMIgBgFQgJhJAkg7QAlg+A+gWQArgNAmAFIAggsQAQgUAMgUQASghAbgYQA9g6BYgIIAVAHIALAEIARAHQB5A1AmB9QAKAfAFAhQAGA1gZAyQgSAogaAjQglA0gtAkQASAggDAoQgGBLhMBCQhBA7hXABIgFAAQgqAAgngOg");
	this.shape_166.setTransform(274.2,213.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FF9900").s().p("AkHHIQh+gfhggqIAAgBQAsgUAygQQA7gUBFgRQB+geCKAAQCLAAB+AdQByAcBZAmIARAHQhgAsh+AfQh+AeiKAAQiJAAh+gegAi5DwIgMgBIgFgBIgEAAIgJgBQgqgKgfgnQgcglgCgxIAAgCIAAgDIACgMQANgoAggaQAbgUAcgBQAMAAAJACIAEAAQALAAALAFQAAg4AggvQAMgQAOgPIAJgEQAHgIAEgGIADgBIAFgCIACgCIAKgLIADAAIAFgCIACgCIAKgJIADgBIAFgBQAFgEADgDIADAAIAEgBIACgCIAUgMIADgBIAEAAIACgBQAmgRAfgCIAEgBIABABQAiA2APA9IACACIABADIAAADIADAIIACAOIABABIACADIAAAEQACAKAAAMIABACIABADIABACIAAAJIABABIABADIAAADIgBAPIABACIAAAEIAAACIAAARIADgBIAHgCIABAAIAGgCIAFgBIAHgBIAFAAQAOgIAOgEIAHgCQAZgGAVAOIAFAEQANAMAMAQQAeAsAAA3IAAAEQgFAXgKAIIgBAEQgHAKgLAHIgHAEQgUAJgXAPIgFAEQgPAKgQAGIgGACQgWAGgVgNIgFgDIgDgCQgGACgHAAIgDAAQgSgCgXgGIAAAAIgDACQgbAWghgHIgDgBIgEgBIgMgEIgDAAQgXgEgSABIgEADQgSAIgTAAQgRAAgPgHIgEgCQgSAKgWAAQgNAAgOgDgAkHkzQh+gehggrIAAgBQBggrB+geQB+gfCJAAQCKAAB+AfQBWAUBIAaQAhANAfANQgaAMgcALQg7AXhEASIgpALQh+AeiKAAQiJAAh+geg");
	this.shape_167.setTransform(271.1,215.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FF9241").s().p("ArVNgQgxgMgsgZQg+gjgjgyQhCheAwh/QATg3AegzQgYgLgXgRQgRgNgPgOQgngmAYgxIAAgBQAOgiAWgaQASgSAYgQQgJgSgFgVIgEgPIgBgLIgBgEQgEgkAVgZQARgQAVgMQAygaA9AIQA8AJAsAuQAZAZAQAfQAJAVAFAeIgBACIgBADIgIATIgDAHQAFAUABASIAFAHIAEAMIABALQAJA8ATBNQAaBpAYB4IAGAcQALA2AIAzQALA0gXAeQgZAfg9ADQgVADgWAAQgvAAgwgNgAI3hyQgggLgcgVQg7grgThGQAMgdAUgaIgfgKQgUgFgMgJQAcgLAagMQgegNgigNQAEgKAHgMQgagJgQgOIgEgDIgDgDIgGgIIAAAAQgLhAAag0QAbg1AwgXQAwgVApAIIARAEIAigzQANgUAJgVQAOghAWgaQA0g9BSgRIAUAFIALAEIAQAFQB0AsApB0QAKAcAGAfQAIAxgWAwQgSAlgXAhQgyBKhEAsQAOANAIAOQAHALADANIABAIIABABQABAMgBAMQgGA+hEA6Qg5AyhLABIgGAAQgjAAghgLg");
	this.shape_168.setTransform(274.5,213.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FF9900").s().p("Aj7HHQh6gUhlgcIAAgBQAugOAzgKQA8gOBDgLQB6gUCBAAQCCAAB6ATQBvATBeAZIARAFQhlAeh6AUQh6AUiCAAQiBAAh6gUgAjFDVIgCAAIgBAAQgIACgJgCIgFgBIgGgCQgdgKgUgdQgTgdgBgjIAAgDIAAgCIACgIQAMgcAYgRQAVgOATABQAIABAFADIADAAQAIAAAIAIQAQgBANAEIAAAAQAHgBAHAAIAHAAIABAAIABgBIAAgBQgQhDAjg4QAJgOAMgOIAGgDIAKgNIACgBIAEgCIABgBIAIgKIADgBIADgCIACgCQAEgEAEgFIACgBIAEgBIAGgHIADAAIADgCIACAAQAIgHAHgIIADAAIAEgBIABgBQAdgUAXgLIAEgCIABABQAaAvAPAyIACACIACADIAAACIACAHQACAGAAAGIACABIABADIABACIADATIABACIABADIABACIAAAIIACABIABACIAAACIABANIABACIABADIgBACQAFAVgDAUQgCAOgEAMQAMAKALANIAIACQAEgGAGgEQAEgEAIgDIADgDIADgBIAEgBQANgFANADQAJgHAJgEIAFgDQASgGAQAMIADAEQAJAJAIANQAUAjAAAqIAAACQgFATgIACIgCACQgEAEgIADIgEADQgQADgSANIgDADQgKAJgLAGIgEACQgRAGgPgLIgEgCIgBgBIgCgDIgNgBIgJgCQgMAKgNgDIgCAAIgdgNIgDABIgBABQgMAHgLAEIgHAEIgWAEIgHgBIgDgCIgBAAIgBAAIgBgBQgGABgDgDIgEgBIgGgBQgYgFgPAFQgIABgKgDIgCADQgOAHgOAAQgNAAgLgGIgEgCIgDgBIgEgDQgHACgHABIgDABQgNAKgTAAQgMAAgOgFgAj7lkQh6gThlgdIAAgBQBlgdB6gUQB6gUCBAAQCCAAB6AUQB5AUBmAdQhUAYhjASIgoAHQh6AViCgBQiBABh6gVg");
	this.shape_169.setTransform(271.2,215.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FF9245").s().p("AsDNwQgsgNgpgZQg5gigfguQg6hYAzh2IA/h2IALgQQgrgJgpgdQgOgKgNgLQgkgfAZgoQAPgbAUgUQASgPAWgMIAZgMQgcgjgJgxIgBgDQgFgdATgTQAPgKASgIQApgRAvAKQAvAJAjAkQAUAVANAYQAIAQAFAZQgJAVgNAQIANAHQAGAcgCAaQAMABAJADQAYAKgFAhQgBA9ALBKQAQBjAaBvIAGAZIAYBhQAPAygUAbQgVAcg8ABIgUABQg2AAg2gQgAJqidQgbgIgYgQQgzgjgUg5QAYgpAqggQghgEgigIQhKgLAthBIAQgaIgRACIgDAAQgegCgTgIQgEgBgDgDIAAAAQgMgzAQgrQARgsAigZQAhgWAhgDIAUgCQAPAAANANIAFAMIAEAKIArhMQALgTAGgVQAKgiARgbQAqhBBNgaIASAEIALADIAPAEQBvAiAsBqQALAaAHAdQAKAugVAtQgQAjgUAfQhABjhfAvIgNAGIAFADIACABIABABQBGAfgIA4QgGAwg8AyQgxAog+ACIgGAAQgdAAgcgJg");
	this.shape_170.setTransform(274.8,213.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FF9900").s().p("AjvHHQh1gLhsgOIAAgBQAygGAygFQA+gHBAgGQB2gKB5AAQB7AAB1AKQBqAJBkANIASACQhsAPh1ALQh2AKh6AAQh5AAh2gKgAjQC8IgIgBQgJAFgLgFIgDgBIgCgCQgOgKgLgVQgJgTgBgXIAAgBIAAgBIABgFQAMgQAPgJQAPgHAKAEIAIAFIAAAAIADAIQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQgCgKALAIQASgBALAJIAHgGIACgBIACgBQALgDAOAHIABABIABgCQAAgDABgDIAAgBQAAgCACgEIABAAIAAgDIABgCQANABANADIACACIAGAFIABABQADAFAEADIAFgDIACgBQgCgFgFgCIgBgCIgGgHIAAgCIgHgKIgBgCQgCgFgDgDIgBgCQgQg3AZgvQAHgNAJgLIAGgDQAEgGACgGIACAAIADgCIABgCQADgEACgGIADAAIACgBIABgCQAEgEACgFIACgBIACgBQAEgEABgDIACgBIACgBIABgCIAMgPIACAAIACgBIABgCIAlgrIADgDIABAAQATApAOApIACABIACACIAAACIACAGIADAKIACAAIABACIAAADQADAHACAJIABABIACACIABABIAAAHIABABIACACIAAACIADALIABABIABACIABACQAGARACASQADAngUAmQAEgDAEABIACAAIAHAEIABACQAMANALARIACABIAEgEIANgIQAIgEAHAPIAAACIAAABIgBAGIAFACIAKgGQAAgFADgFQAAgCACgEIAAgCIAAgCIADgBQAJgLAPADIACABQAKADAHAFIABgCIAKgNIACgCQAMgIALALIACACIAIASQAKAZAAAcIAAACQgFANgHgDIgBABIgFgDIgEAAQgLgCgMALIgBADIgLANIgDACQgLAHgKgKIgCgCIgDgFIgKADQgIAAgHgDQgQgEgJgMIgHANIgCADQgKAMgMgGIgBAAIgBgBIAAgBIgBgBIgIgHIgDACIgHgHIAAAAQgJAKgJAFQgLAHgJgKIAAABQgMALgMgEQgHACgHgFQgEABgBgEIgDgCIgEgBQgTgFgJAIQgJAFgQgJIgIgBQgGAAgHgDIAAAJQgKAFgJAAQgJAAgHgFIgCgCQgGgDgEgGQgFACgFgBQgGAGgIADQgJACgIgCIgCAAIgBgBQgIAKgOAAQgKAAgMgFgAjvmUQh1gKhsgOIAAgBQBsgOB1gKQB2gLB5AAQB6AAB2ALQB1AKBsAOQhaANhgAJIgnADQh2AKh6AAQh5AAh2gKg");
	this.shape_171.setTransform(271.3,216.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FF9149").s().p("Aq7OTQg8gBg5gTQgpgOglgYQg1ghgagrQgyhRA2huQAjhJAyhCIAWgcIAJgJIAFgGQgZAIgfgDQgrgEgsgbIgXgQQgggYAbgfQAPgUASgOQAQgKATgIQAqgSAvgCIADAAIgIgCQgfgJgZggQgVgbgJgmIgCgEQgEgVARgNQAMgFAOgDQAggHAiALQAiAKAaAbQAPAPALASQAGALAFATQgTAdgcAOQgNAHgNACQAbACAaAIIASAHQACAjgKAcQgFAOgGALIARgKQApgJATAJQAVAKgJAiQgMA/ADBFQAFBfAcBlIAHAXQANAtAQAsQATAvgRAYQgRAYgzAAIgIAAgAKdjIQgWgGgTgMQgsgZgUgsQAbgiArgZQApgYAxgJIAigFQAhAFAYAKQA/AXgIAqQgHAkg1ApQgoAggyABIgGABQgWAAgXgHgAIvmIQhLgFAvg9QA9hSAxhaQAVgmASgnQAJgUADgVQAFgjANgcQAfhFBJgiQAJAAAIACQAHABADABIAOADQBrAZAvBgQALAYAIAbQAMAqgTArQgOAggSAdQg5BehUAxQhWAyhqAHIghABQggAAgggEgAHUnyIAAAAQgNgmAGgiQAHgkAUgaQATgYAXgOIAPgKQAMgGANAEIAFAJQAUAjgDAgQgCAigXAbQgWAWgdANQgWAHgTAFIgDABIgEgBg");
	this.shape_172.setTransform(275.2,213.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],5), null, new cjs.Matrix2D(0.182,0,0,0.182,-45.4,-45.4)).s().p("AnFHGIAAgBIBnAAIMRAAIATAAIAAABgAi6CiIAAgCIAAgtIALABIABABIABAiIAOADIABAAIABAIQgIAHgHAAQgHAAgHgHgAjdCiIAAgCIAAgtQAfgNgEATQgMABgDAIQAOgBABANIgPAHQAOgCABANQgCAJgHAAQgHAAgLgHgADaCiIAAgCIAAgtIANABIAAACIAAAPQAHAJAHgJIAAgDIAAgOQAGgIAFAIIAAACIAAAsQgFAIgGgIIAAgCIAAgNQgHgKgHAKIAAACIAAANQgEAEgDAAQgDAAgDgEgABlCiIgBAAQgCgMgDgIIgCAAQgBALgFAJQgGAJgHgJIgBAAIgNgvIAMABIABABQADAOAFANIABgCQAEgMADgOQAFgIAGAIIAAACIAHAaIABAAIAHgcQAGgKAIAKIgBABQgFAYgIAVQgEAEgDAAQgDAAgEgEgAAWCiIAAgCIAAgtQAVgFAIAKIABAAQAIAMgJAKIgBAAQgDAFAGAGIABAAQACAEAEABQAAANgPgLIgBAAIgGgJIgCAAQgCgBABAMQgEAEgDAAQgDAAgDgEgAAICiQgEAAABgEIgCgCQgOgIgFAMQgEAHgMgFQgNAGgOgGIgCgDIgDgDIgCgFQgEgFgCgGIABgGQAEgIAEgGIAEgCIACgCIAFAAIAAgBQAQgCAIAFQABAEgBACQgDACgBADIgMgDIgKADIgCAFQgEAJAGAGQALAEALAAIABABQAAAFAEgBIABgGIAQgkQAGgIAEAIIACAEQAJAWAJAUQgDAEgDAAQgDAAgDgEgAj/CiIAAgCIAAgtIAAAAIACgBQAYgLADAMIAAABIAAAFQgNABgDAIQANAAABAMQgBAIgNgDIAAACIAAANQgDAEgEAAQgDAAgDgEgAB9CiIABAAIATgvIALABIABABQAIAYALAVQgNAGgDgKQgOgMgGAOQgBAGgEAAQgEAAgGgEgAiYCiIAAgCIAAgtIALABIAAACIAAAsQgDADgCAAQgDAAgDgDgACwCeIABgDQADgBAAgFQALAGAIgGIAAgBQgEgBAAgDQgHgCgFgEIgCgCIgBgBIAAgCQgBgOAKgEQAPgCAGAFIAAADIgDAIQgKgIgFAJQAJAFAIAFIABACQAFAKgGAIQgIAFgIAAQgJAAgIgHgAiJCiIABgCQABgEADgCIABgBQADgEACgFIABgBIACgBIABgCIACgEIgCAAQgCgCgBgEIgBAAQgCgBAAgDIgBgBQgDgCAAgDIgBgBQgCgBAAgDIAPABIAAABIADADIAAABQACAEAEACIAAgBIAFgKQAHgFAJAFIAAABQgBAEgFAAIAAACQgDAHgGAFIAAABQgBABAEAHIABAAIAEAHIABAAQACAGAGADQgKAIgIgIIgBgBIgEgIIAAgBIgGADIAAABQgEAEgCAFIgMABQgIAAAGgCgAgpBXQAAgEgFAAQgCgEgGgBIAAgCIgHgFIAAgBIgHgIIgBgCQgBgDgDgDIgBgBQgWg3AggwIABAAIACgCIAAgBQADgEABgFIACgBIABgBIABgCIADgKIACAAIACgBIAAgCQADgDAAgGIACgBIACgBIABgBQABgCAAgEIACAAIABgCIABgBQAEgIACgJIACAAIACgCIAAgCQANgcAKgfIABAAQAMAhAOAgIACAAIACABIAAACQADAGACAHIACABIACABIABABIAEAOIACAAIACACIABABIABAGIACAAIABACIABABIADAJIACAAIACACIAAABQAlA0gZBAIgBAAQgCAFgEACIAAABQgEACgBAEQgFAFgGADQgXAQgbAAQgTAAgXgJgAEJnEIrOAAIAAgBIOLAAIAAABIi9AAg");
	this.shape_173.setTransform(271.4,216.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FF914D").s().p("ArzOmQhggIhRg2QiNhgBXiYQAlhAAtg9QAhgtArgkQASgPAUgMQBTgTgXBCQg7ChA/CqQAOAoAUApQApBVhVAAIgTgBgAwQFwQgcgRAcgWQAQgMAQgIQBagdBbAOIAEACQgjBqhOAAQgtAAg7gigAvLCIQgFgPAOgGQBHgBAyBEQAFAFAGAPQgeAUgaAAQg0AAghhWgALRjzQg6gNggguQBDgvBcgUQCjAPh7BaQgjAZgpAAQgQAAgRgEgAJVniQBdhoAsh/QAGgTABgVQACh5Bfg8IAQABIAEgBIAGACQCKAOAvCIQAOAngRAoQhzERkzADIgDAAQhJAAAxg3gAIgq6QAIgOANgCQBYBRh0BpQgDADgEABQgrhRA5hdg");
	this.shape_174.setTransform(275.5,213.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_122},{t:this.shape_121}]}).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141}]},1).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_147}]},1).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153}]},1).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159}]},1).to({state:[{t:this.shape_164},{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_166},{t:this.shape_165}]},1).to({state:[{t:this.shape_168},{t:this.shape_167}]},1).to({state:[{t:this.shape_170},{t:this.shape_169}]},1).to({state:[{t:this.shape_172},{t:this.shape_171}]},1).to({state:[{t:this.shape_174},{t:this.shape_173}]},1).to({state:[]},1).wait(543));

	// Intro2
	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.185,0,0,0.185,-46.2,-46.2)).s().p("AnNHOIAAubIObAAIAAObg");
	this.shape_175.setTransform(271.2,216.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.205,0,0,0.205,-51.3,-51.3)).s().p("AoAIBIAAwBIQBAAIAAQBg");
	this.shape_176.setTransform(271.2,216.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.226,0,0,0.226,-56.4,-56.4)).s().p("Ao0I0IAAxnIRpAAIAARng");
	this.shape_177.setTransform(271.2,216.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.246,0,0,0.246,-61.5,-61.5)).s().p("ApnJnIAAzOITOAAIAATOg");
	this.shape_178.setTransform(271.2,216.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.267,0,0,0.267,-66.7,-66.7)).s().p("AqaKbIAA01IU1AAIAAU1g");
	this.shape_179.setTransform(271.2,216.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.287,0,0,0.287,-71.8,-71.8)).s().p("ArNLOIAA2bIWbAAIAAWbg");
	this.shape_180.setTransform(271.2,216.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.308,0,0,0.308,-76.9,-76.9)).s().p("AsAMBIAA4BIYBAAIAAYBg");
	this.shape_181.setTransform(271.2,216.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.328,0,0,0.328,-82,-82)).s().p("AszM1IAA5oIZoAAIAAZog");
	this.shape_182.setTransform(271.2,216.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.349,0,0,0.349,-87.1,-87.1)).s().p("AtmNoIAA7OIbOAAIAAbOg");
	this.shape_183.setTransform(271.2,216.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.369,0,0,0.369,-92.3,-92.3)).s().p("AuaObIAA81Ic1AAIAAc1g");
	this.shape_184.setTransform(271.2,216.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.39,0,0,0.39,-97.4,-97.4)).s().p("AvNPOIAA+bIebAAIAAebg");
	this.shape_185.setTransform(271.2,216.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.41,0,0,0.41,-102.5,-102.5)).s().p("AwAQBMAAAggBMAgBAAAMAAAAgBg");
	this.shape_186.setTransform(271.2,216.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.431,0,0,0.431,-107.6,-107.6)).s().p("Aw0Q0MAAAghoMAhoAAAMAAAAhog");
	this.shape_187.setTransform(271.2,216.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.451,0,0,0.451,-112.7,-112.7)).s().p("AxmRnMAAAgjOMAjNAAAMAAAAjOg");
	this.shape_188.setTransform(271.2,216.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.472,0,0,0.472,-117.9,-117.9)).s().p("AyaSbMAAAgk1MAk1AAAMAAAAk1g");
	this.shape_189.setTransform(271.2,216.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.492,0,0,0.492,-123,-123)).s().p("AzNTOMAAAgmbMAmbAAAMAAAAmbg");
	this.shape_190.setTransform(271.2,216.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.513,0,0,0.513,-128.1,-128.1)).s().p("A0AUBMAAAgoBMAoBAAAMAAAAoBg");
	this.shape_191.setTransform(271.2,216.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.533,0,0,0.533,-133.2,-133.2)).s().p("A0zU1MAAAgpoMApoAAAMAAAApog");
	this.shape_192.setTransform(271.2,216.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.553,0,0,0.553,-138.3,-138.3)).s().p("A1nVnMAAAgrOMArPAAAMAAAArOg");
	this.shape_193.setTransform(271.2,216.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.574,0,0,0.574,-143.5,-143.5)).s().p("A2aWbMAAAgs1MAs1AAAMAAAAs1g");
	this.shape_194.setTransform(271.2,216.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.594,0,0,0.594,-148.6,-148.6)).s().p("A3NXOMAAAgubMAubAAAMAAAAubg");
	this.shape_195.setTransform(271.2,216.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.615,0,0,0.615,-153.7,-153.7)).s().p("A4AYBMAAAgwBMAwBAAAMAAAAwBg");
	this.shape_196.setTransform(271.2,216.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.635,0,0,0.635,-158.8,-158.8)).s().p("A40Y0MAAAgxoMAxoAAAMAAAAxog");
	this.shape_197.setTransform(271.2,216.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.656,0,0,0.656,-163.9,-163.9)).s().p("A5mZoMAAAgzOMAzNAAAMAAAAzOg");
	this.shape_198.setTransform(271.2,216.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.676,0,0,0.676,-169.1,-169.1)).s().p("A6aabMAAAg01MA01AAAMAAAA01g");
	this.shape_199.setTransform(271.2,216.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.697,0,0,0.697,-174.2,-174.2)).s().p("A7NbOMAAAg2bMA2bAAAMAAAA2bg");
	this.shape_200.setTransform(271.2,216.2);
	this.shape_200._off = true;

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.697,0,0,0.697,-141.1,-269.5)).s().p("AliEoIwgAAIAApPMAsFAAAIAADEIAAGLg");
	this.shape_201.setTransform(132.5,330.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Project_atlas_"],6), null, new cjs.Matrix2D(0.697,0,0,0.697,-174.2,-174.2)).s().p("A7NbOIAAhhIblAAIAAmMIQgAAIAApQMgsFAAAMAAAgleMA2bAAAMAAAA2bg");
	this.shape_202.setTransform(271.2,195.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_175}]},20).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_202},{t:this.shape_201}]},1).to({state:[]},1).wait(511));
	this.timeline.addTween(cjs.Tween.get(this.shape_200).wait(45).to({_off:false},0).wait(1).to({y:212.1},0).wait(1).to({y:207.9},0).wait(1).to({y:203.7},0).wait(1).to({y:199.6},0).wait(1).to({y:195.4},0).to({_off:true},1).wait(512));

	// Music
	this.instance_53 = new lib.Symbol55();
	this.instance_53.parent = this;
	this.instance_53.setTransform(480.5,23,1,1,0,0,0,49.5,13);
	this.instance_53.alpha = 0;
	this.instance_53._off = true;

	this.instance_54 = new lib.Symbol56();
	this.instance_54.parent = this;
	this.instance_54.setTransform(480.5,23,1,1,0,0,0,49.5,13);

	this.btnStop = new lib.Symbol59();
	this.btnStop.name = "btnStop";
	this.btnStop.parent = this;
	this.btnStop.setTransform(517,23,1,1,0,0,0,13,13);
	new cjs.ButtonHelper(this.btnStop, 0, 1, 2, false, new lib.Symbol59(), 3);

	this.btnPause = new lib.Symbol58();
	this.btnPause.name = "btnPause";
	this.btnPause.parent = this;
	this.btnPause.setTransform(480,23,1,1,0,0,0,13,13);
	new cjs.ButtonHelper(this.btnPause, 0, 1, 2, false, new lib.Symbol58(), 3);

	this.btnPlay = new lib.Symbol57();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.parent = this;
	this.btnPlay.setTransform(444,23,1,1,0,0,0,13,13);
	new cjs.ButtonHelper(this.btnPlay, 0, 1, 2, false, new lib.Symbol57(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_53}]},95).to({state:[{t:this.instance_54}]},9).to({state:[{t:this.btnPlay},{t:this.btnPause},{t:this.btnStop}]},1).wait(458));
	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(95).to({_off:false},0).to({_off:true,alpha:1},9).wait(459));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274,199,552,402);
// library properties:
lib.properties = {
	id: 'AD98CD24F236774AA4CB03DD8BBFD034',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFF6E5",
	opacity: 1.00,
	manifest: [
		{src:"images/Project_atlas_.png?1575018035243", id:"Project_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1575018038994", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1575018038994", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1575018038994", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AD98CD24F236774AA4CB03DD8BBFD034'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Virtual camera API : 

AdobeAn.VirtualCamera = new function() {
	var _camera = new Object();
	function VirtualCamera(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined )
	{
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VirtualCamera.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VirtualCamera.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VirtualCamera.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VirtualCamera.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VirtualCamera.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VirtualCamera.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VirtualCamera.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VirtualCamera.prototype.resetZoom = function() {
	this.setZoom(100);
};

VirtualCamera.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VirtualCamera.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VirtualCamera.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VirtualCamera.prototype.resetRotation = function() {
this.setRotation(0);
};

VirtualCamera.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VirtualCamera.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VirtualCamera.prototype.getZDepth = function() {
	return this.camera.depth;
}
VirtualCamera.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VirtualCamera.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VirtualCamera.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
if(this.camera.pinToObject != undefined) {
this.camera.pinToObject.pinOffsetX = offsetX;
this.camera.pinToObject.pinOffsetY = offsetY;
this.camera.pinToObject.pinOffsetZ = offsetZ;
}
};

VirtualCamera.prototype.unpinCamera = function() {
this.camera.pinToObject = undefined;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VirtualCamera(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
VirtualCamera.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;