(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 720,
	height: 100,
	fps: 13,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"}
	]
};

// stage content:
(lib.Verticaltvone2026 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function changeImage(mv, src) {
			if (mv) {
				if (!src) mv.visible = false;
				var image = new Image();
		
				image.onload = function () {
					mv.visible = true;
		
					var img = new createjs.Bitmap(image);
		
					img.scaleX = mv.instance.getTransformedBounds().width / img.image.width;
					img.scaleY = mv.instance.getTransformedBounds().height / img.image.height;
		
					img.x = mv.instance.x;
					img.y = mv.instance.y;
		
					mv.removeAllChildren();
					mv.addChild(img);
				};
		
				image.src = src;
			}
		}
		
		Object.defineProperty(cjs.Container.prototype, 'source', {
			get: function () {
				return this.imageSource ? this.imageSource : '';
			},
			set: function (value) {
				this.imageSource = value;
				changeImage(this, value);
			}
		});
		
		var defineProperties = function () {};
		
		function changeText(mv, initialSize, value, minSize) {
			if (!mv) return;
			minSize = minSize ? minSize : 1;
			if (!mv.originalHeight) {
				mv.originalHeight = Math.round(mv.parent.nominalBounds.height);
		
				var res = /(\d+)px/g.exec(mv.font);
				if (res) {
					mv.originalFontSize = parseInt(res[1]);
					mv.fontComplement = mv.font.replace(res[0], '');
					mv.originalLineHeight = mv.lineHeight;
				}
		
				mv.originalFont = mv.font;
			}
		
			mv.text = value;
			mv.font = mv.originalFont;
			if (mv.originalLineHeight) mv.lineHeight = mv.originalLineHeight;
			var fontSize = mv.originalFontSize;
		
			var maxinc = 0;
			var firstSub = true;
			while (Math.round(mv.getMeasuredHeight()) > mv.originalHeight) {
				fontSize = fontSize - 1;
				if (fontSize <= minSize) {
					fontSize = minSize;
					if (value.length = 0) break;
		
					if (firstSub) {
						var txtratio = mv.originalHeight / Math.round(mv.getMeasuredHeight());
						var len = Math.round(value.length * txtratio)
						if (len > value.length) len = value.length
						if (len == 0) break;
						value = value.substring(0, len);
						firstSub = false;
					} else {
						value = value.substring(0, value.length - 1);
					}
					mv.text = value + '...';
		
		
				}
				var ratio = fontSize / mv.originalFontSize;
				mv.font = fontSize + "px " + mv.fontComplement;
				if (mv.originalLineHeight) mv.lineHeight = Math.round(mv.originalLineHeight * ratio);
			}
		}
		
		var definirTexto = changeText;
		
		Object.defineProperty(cjs.Text.prototype, "autotext", {
			get: function () {
				return this.text;
			},
			set: function (value) {
				changeText(this, -1, value, this.minfontsize);
			}
		});
		
		
		
		this.SetarNoticiaImagem = function (imagem) {
			this.ImagemNoticia.source = imagem;
		};
		
		
		
		
		function simplificaMoeda(nome) {
			if (!nome) return "";
			var upper = nome.toUpperCase();
			if (upper.indexOf("PESO BOLIVIANO") > -1) return "Peso B.";
			if (upper.indexOf("PESO ARGENTINO") > -1) return "Peso A.";
			if (upper.indexOf("PESO CHILENO") > -1) return "Peso C.";
			if (upper.indexOf("FRANCO") > -1) return "Franco S.";
			if (upper.indexOf("AUSTRALIANO") > -1) return "Dólar A.";
			if (upper.indexOf("CANADENSE") > -1) return "Dólar C.";
			if (upper.indexOf("ESTERLINA") > -1) return "Libra";
			return nome;
		}

		this.SetarCotacao = function (moeda, valor, negativo) {
			setTimeout(function () {
				var moedaSimples = simplificaMoeda(moeda);
				if (this.Moeda.Moeda.autotext === 'Dólar' || this.Moeda.Moeda.autotext === 'DOLÁR' || this.Moeda.Moeda.autotext === moedaSimples) {
					this.Moeda.Moeda.autotext = moedaSimples;
					this.Moeda.Valor.autotext = valor;
				} else if (this.Moeda2.Moeda.autotext === 'Euro' || this.Moeda2.Moeda.autotext === 'EURO' || this.Moeda2.Moeda.autotext === moedaSimples) {
					this.Moeda2.Moeda.autotext = moedaSimples;
					this.Moeda2.Valor.autotext = valor;
				} 
			}.bind(this), 100); 
		};
		
		
		
		/*
		this.SetarTempo = function (situacao, dia, temperatura, maxima, minima, icone) {
			this.Tempo.Dia.text = dia.substring(0, 3);
			this.Tempo.Icone.gotoAndStop(icone);
		};
		
		this.SetarTempo2 = function (situacao, dia, temperatura, maxima, minima, icone) {
			this.Tempo2.Dia.text = dia.substring(0, 3);
			this.Tempo2.Icone.gotoAndStop(icone);
		};
		*/
		
		this.SetarPublicidade = function(imagem) {
		  this.ImagemPublicidade.source = imagem;
		};
		
		this.SetarLogo = function (logo) {
			this.LogoPrincipal.source = logo;
		};
		var DiaSemana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
		var dataSemana = new Date();
		
		
		this.SetarTempo = function (situacao, dia, temperatura, maxima, minima, icone) {
			this.Tempo.Dia.text = DiaSemana[dataSemana.getDay()];
			this.Tempo.Icone.gotoAndStop(icone);
			this.Tempo.Temperatura.text = temperatura.replace(/c/gi, "");
		
		};
		
		this.SetarTempo2 = function (situacao, dia, temperatura, maxima, minima, icone) {
			this.Tempo2.Dia.text = DiaSemana[(dataSemana.getDay() == 6 ? 0 : dataSemana.getDay() + 1)];
			this.Tempo2.Icone.gotoAndStop(icone);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Linhas
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAAjgIAAHB");
	this.shape.setTransform(315,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Cotação
	this.Moeda2 = new lib.Símbolo2();
	this.Moeda2.setTransform(517.5,65.2,1,1,0,0,0,35,39.1);

	this.Moeda = new lib.Símbolo2();
	this.Moeda.setTransform(382.5,65.2,1,1,0,0,0,35,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Moeda},{t:this.Moeda2}]}).wait(1));

	// Previsão
	this.Tempo2 = new lib.Símbolo3();
	this.Tempo2.setTransform(253.3,187.9,1,1,0,0,0,91.4,50.3);

	this.Tempo = new lib.Símbolo1();
	this.Tempo.setTransform(115,20,1,1,0,0,0,0,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Tempo},{t:this.Tempo2}]}).wait(1));

	// Relógio
	this.DataDia = new lib.datad();
	this.DataDia.setTransform(741.5,192,1,1.001,0,0,0,146.1,153.6);

	this.timeline.addTween(cjs.Tween.get(this.DataDia).wait(1));

	// Logo
	this.ImagemPublicidade = new lib.Símbolo4();
	this.ImagemPublicidade.setTransform(138.6,50,1.056,1,0,0,0,45,22.5);
	this.ImagemPublicidade.visible = false;

	this.LogoPrincipal = new lib.Logo();
	this.LogoPrincipal.setTransform(48.6,51.4,1,1,0,0,0,60,30.1);
	this.LogoPrincipal.visible = false;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AAAjgIAAHB");
	this.shape_1.setTransform(585,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.LogoPrincipal},{t:this.ImagemPublicidade}]}).wait(1));

	// Background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("Eg4PAHzIAAvmMBwfAAAIAAPmg");
	this.shape_2.setTransform(360,50);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(360,50,720,197.6);


// symbols:
(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,60);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,350);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,45);


(lib.Símbolo4 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,45);


(lib.Símbolo2 = function() {
	this.initialize();

	// Camada 1
	this.Valor = new cjs.Text("", "22px 'Roboto SemiBold'");
	this.Valor.name = "Valor";
	this.Valor.textAlign = "center";
	this.Valor.lineHeight = 19;
	this.Valor.lineWidth = 96;
	this.Valor.setTransform(48,23.7);

	this.Moeda = new cjs.Text("DOLÁR", "bold 22px 'Roboto'");
	this.Moeda.name = "Moeda";
	this.Moeda.textAlign = "center";
	this.Moeda.lineHeight = 19;
	this.Moeda.lineWidth = 96;
	this.Moeda.setTransform(48,0);

	this.addChild(this.Moeda,this.Valor);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,56.5);


(lib.Logo = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120,60);


(lib.IconesTempo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"N.A.":0,sunny:4,cloudy:8,"mostly-sunny":12,"clear-sunny":16,wind:20,snow:24,"risk-of-thunders":28,"thunder-storms":32,"snow-flakes":36,"light-rain":40,rain:44,storms:48,haze:52,"heavy-rain":56});

	// timeline functions:
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_43 = function() {
		this.stop();
	}
	this.frame_47 = function() {
		this.stop();
	}
	this.frame_51 = function() {
		this.stop();
	}
	this.frame_55 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(4).call(this.frame_7).wait(4).call(this.frame_11).wait(4).call(this.frame_15).wait(4).call(this.frame_19).wait(4).call(this.frame_23).wait(4).call(this.frame_27).wait(4).call(this.frame_31).wait(4).call(this.frame_35).wait(4).call(this.frame_39).wait(4).call(this.frame_43).wait(4).call(this.frame_47).wait(4).call(this.frame_51).wait(4).call(this.frame_55).wait(4).call(this.frame_59).wait(1));

	// IMAGENS TEMPO
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAOA7IhIhJQgJgJAAgMQAAgOAJgJQAJgJAOAAQAMAAAJAJIBJBJQAJAJAAANQAAAMgJAKQgJAJgNAAQgNAAgKgJg");
	this.shape.setTransform(83.1,83.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOA7IhIhJQgJgJAAgNQAAgNAJgJQAJgJANAAQANAAAJAJIBJBIQAJAKAAANQAAANgJAJQgKAJgMAAQgMAAgLgJg");
	this.shape_1.setTransform(21.2,21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag6A7QgJgJAAgNQAAgNAJgKIBIhIQAKgJANAAQAMAAAKAJQAJAJAAANQAAANgJAJIhJBJQgJAJgNAAQgNAAgJgJg");
	this.shape_2.setTransform(83.1,21.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6A7QgJgKAAgMQAAgNAJgJIBIhJQAKgJANAAQANAAAJAJQAJAJAAAOQAAAMgJAJIhJBJQgJAJgNAAQgNAAgJgJg");
	this.shape_3.setTransform(21.2,83.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgzAfQgNAAgJgJQgJgJAAgNQAAgLAJgKQAJgJANAAIBnAAQANAAAJAJQAJAKAAALQAAANgJAJQgJAJgNAAg");
	this.shape_4.setTransform(95.9,52.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgzAfQgNAAgKgJQgJgJAAgNQAAgLAJgKQAKgJANAAIBnAAQANAAAKAJQAIAKABALQgBANgIAJQgKAJgNAAg");
	this.shape_5.setTransform(8.4,52.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVBLQgJgKAAgNIAAhnQAAgNAJgKQAKgJALAAQANAAAJAJQAJAKAAANIAABnQAAANgJAKQgJAIgNABQgLgBgKgIg");
	this.shape_6.setTransform(52.1,8.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVBKQgJgJAAgNIAAhnQAAgNAJgJQAKgKALABQANgBAJAKQAJAJAAANIAABnQAAANgJAJQgJAJgNAAQgLAAgKgJg");
	this.shape_7.setTransform(52.1,95.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AivCwQhJhKAAhmQAAhmBJhJQBJhJBmAAQBmAABKBJQBJBJAABmQAABmhJBKQhKBJhmAAQhmAAhJhJg");
	this.shape_8.setTransform(52.2,52.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("ABdCGQgvgzhBgPQgchlhThGQhCg5hWgUQAjghAtgUQAvgSAygBQBdAABFA+QBHA8APBcQA6ACApApQApArAAA6QAAA5gmAqQgmAqg3AFQgMhEgvgyg");
	this.shape_9.setTransform(85.1,25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AkAErQhYAAg+g/Qg/g+AAhXQAAhXA9g9QA9g9BWgDQAlhOBJgwQBLgvBVAAQBuAABUBJQBUBHARBsQBFADAxAxQAwAyAABFQAABIgzAzQgzAzhIAAg");
	this.shape_10.setTransform(47,42.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABRB3QgqgkgzgNQgdhkhShGQgkgfgpgTQBDg1BWAAQBmAABJBJQBJBJAABmQAABag6BFQgVgygpgjg");
	this.shape_11.setTransform(65.8,37.1,0.779,0.779);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjHDpQhEAAgxgxQgxgwAAhFQAAhDAwgvQAvgvBDgCQAdg+A5glQA6glBCAAQBVAABCA5QBBA4AOBUQA2ACAlAlQAmAoAAA2QAAA3goAoQgoAog3AAg");
	this.shape_12.setTransform(36.6,50.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AALAuIg4g4QgHgIAAgJQAAgKAHgIQAHgHAKAAQALAAAGAHIA5A4QAHAHAAAKQAAAKgHAIQgHAHgKAAQgLAAgHgHg");
	this.shape_13.setTransform(86.1,64.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AALAtIg4g3QgHgIAAgJQAAgLAHgHQAIgHAKAAQAKAAAHAHIA4A4QAHAHAAAKQAAAKgHAHQgIAIgKAAQgJAAgIgIg");
	this.shape_14.setTransform(37.9,16.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag6A7QgJgJAAgNQAAgNAJgKIBJhIQAJgJANAAQANAAAJAJQAJAJAAANQAAANgJAJIhJBJQgJAJgNAAQgMAAgKgJg");
	this.shape_15.setTransform(86.1,16.5,0.779,0.779);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgzAfQgNAAgJgJQgKgKAAgMQAAgLAKgKQAJgJANAAIBnAAQANAAAKAJQAJAKAAALQAAANgJAJQgKAJgNAAg");
	this.shape_16.setTransform(96.1,40.6,0.779,0.779);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgVBLQgJgKAAgNIAAhnQAAgNAJgKQAKgJALAAQAMAAAKAJQAJAKAAANIAABnQAAANgJAKQgKAIgMABQgLgBgKgIg");
	this.shape_17.setTransform(62,6.5,0.779,0.779);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABYAmQgMgFgVgOQgPgLgIgEQgOgEgSAAQgRAAgOAEQgJAEgOALQgVAOgMAFQgXAJgbAAQgcAAgYgJQgMgGgUgNQgOgLgJgEQgOgEgTAAQgKAAgGgGQgHgHAAgKQAAgKAHgHQAGgGAKAAQAdAAAWAJQANAGATANQAPALAJAEQAOAEATAAQASAAANgEQAJgEAPgLQAVgNALgGQAYgJAaAAQAbAAAXAJQANAGATANQAQALAIAEQAOAEASAAQASAAAOgEQAKgEAPgLQASgNANgGQAXgJAcAAQAKAAAHAGQAHAHAAAKQAAAKgHAHQgHAGgKAAQgSAAgOAEQgJAEgPALQgTANgNAGQgXAJgcAAQgbAAgXgJg");
	this.shape_18.setTransform(57,92.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABYAmQgMgFgVgOQgPgLgIgEQgOgEgSAAQgRAAgOAEQgIADgPAMQgUANgNAGQgXAKgbAAQgcgBgYgJQgMgGgUgNQgOgLgJgEQgOgEgTAAQgKAAgGgGQgHgIAAgJQAAgKAHgHQAGgHAKAAQAdAAAWAKQAOAFASAOQAPAKAJAEQAOAEATAAQASAAANgEQAKgEAOgKQAUgOAMgFQAYgKAaAAQAbAAAXAKQAOAFASAOQAPAKAJAEQAOAEASAAQATAAANgEQAKgEAPgKQARgOAOgFQAXgKAcAAQAKAAAHAHQAHAHAAAKQAAAJgHAIQgHAGgKAAQgSAAgOAEQgJAEgPALQgUAOgNAFQgWAJgcABQgbgBgXgJg");
	this.shape_19.setTransform(57,79.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABjAqQgPgGgWgPQgRgMgJgEQgQgFgUAAQgTAAgQAFQgJAEgRAMQgWAPgPAGQgZALgfAAQggAAgZgLQgPgGgWgPQgQgMgKgEQgQgFgUAAQgLAAgIgIQgIgHAAgLQAAgLAIgIQAIgHALAAQAfAAAaAKQAPAHAVAPQARAMAKAEQAPAEAVAAQAUAAAQgEQAJgEARgMQAWgPAPgHQAZgKAeAAQAfAAAZAKQAPAHAWAPQAQAMAKAEQAQAEAUAAQAVAAAPgEQAKgEARgMQAVgPAPgHQAagKAfAAQALAAAIAHQAIAIAAALQAAALgIAHQgIAIgLAAQgUAAgQAFQgKAEgRAMQgWAPgOAGQgZALggAAQgfAAgZgLg");
	this.shape_20.setTransform(56.9,65.7,0.891,0.891);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AkAErQhYAAg+g+Qg/g/AAhYQAAhWA9g8QA8g+BXgCQAlhPBJgvQBLgwBVAAQBuAABUBIQBUBIARBsQBFADAxAwQAwAzAABFQAABIgzAzQgzAzhIAAg");
	this.shape_21.setTransform(56.9,26.7,0.891,0.891);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhvBAQgGgLADgMQAEgNALgHICohgQALgGANADQAMAEAHALQAGALgDANQgEAMgLAHIioBgQgHAEgIAAQgSAAgKgQg");
	this.shape_22.setTransform(57.1,93.1,0.896,0.896);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ABFBMIiohgQgLgHgEgMQgDgNAGgLQAHgLANgEQAMgDALAGICoBgQALAHAEANQADAMgGALQgKAQgRAAQgJAAgHgEg");
	this.shape_23.setTransform(57.1,93.1,0.896,0.896);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVB4QgJgJAAgOIAAjBQAAgOAJgJQAKgJALAAQANAAAJAJQAJAJAAAOIAADBQAAAOgJAJQgJAJgNAAQgLAAgKgJg");
	this.shape_24.setTransform(57.1,93.1,0.896,0.896);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhvBAQgGgLADgNQAEgMALgHICohgQALgGANADQAMADAHAMQAGALgDANQgEAMgLAHIioBgQgIAEgHAAQgSAAgKgQg");
	this.shape_25.setTransform(77.7,73.3,0.896,0.896);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("ABFBMIiohgQgLgHgEgMQgDgNAGgLQAHgMAMgDQANgDALAGICoBgQALAHAEAMQADANgGALQgKAQgSAAQgHAAgIgEg");
	this.shape_26.setTransform(77.7,73.3,0.896,0.896);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVB4QgJgKAAgMIAAjDQAAgMAJgKQAJgJAMAAQAMAAAKAJQAJAKAAAMIAADDQAAAMgJAKQgKAJgMAAQgMAAgJgJg");
	this.shape_27.setTransform(77.7,73.3,0.896,0.896);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhvBAQgGgLADgNQADgMAMgHICnhgQALgGANADQANADAGAMQAHALgDANQgEAMgLAHIioBgQgHAEgJAAQgSAAgJgQg");
	this.shape_28.setTransform(36.6,73.3,0.896,0.896);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("ABEBMIinhgQgMgHgDgMQgDgNAGgLQAHgMAMgDQANgDALAGICoBgQALAHAEAMQADANgHALQgIAQgTAAQgIAAgIgEg");
	this.shape_29.setTransform(36.6,73.3,0.896,0.896);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVB4QgJgKAAgMIAAjDQAAgMAJgKQAJgJAMAAQANAAAJAJQAJAKAAAMIAADDQAAAMgJAKQgJAJgNAAQgMAAgJgJg");
	this.shape_30.setTransform(36.6,73.3,0.896,0.896);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AkAErQhYAAg+g+Qg/g/AAhYQAAhWA9g8QA9g+BWgCQAlhPBKgvQBKgwBVAAQBuAABUBIQBUBIARBsQBFADAxAwQAwAzAABFQAABIgzAzQgzAzhIAAg");
	this.shape_31.setTransform(57.1,26.8,0.896,0.896);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag0DhQgJgEADgKIBEjJIiIAAQgHAAgEgGQgEgEACgHIBKjNQAFgOAOAAIBoAAQAGAAADAFQAEAGgDAFIg8CDIB2AAQAIAAAFAHQAEAHgEAHIgZAsIiXDrQgEAGgFAAIgGgCg");
	this.shape_32.setTransform(56.5,79.5,0.903,0.903);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AkAErQhXAAg/g/Qg/g+ABhYQgBhWA9g8QA9g+BWgCQAkhPBLgvQBJgwBWAAQBuAABUBIQBUBIARBsQBFADAxAwQAvAzABBFQAABIgzAzQgzAzhIAAg");
	this.shape_33.setTransform(57.4,27,0.903,0.903);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgOAiQgNgGgFgOQgFgNAFgMIACgDQAGgOAOgFQALgFAOAGQANAGAFANQAGANgGAMIgCAEQgJAVgWAAQgGAAgIgDg");
	this.shape_34.setTransform(67.7,87.4,0.891,0.891);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgOAjQgNgGgGgOQgFgNAGgMIADgGQAGgOAOgFQALgFAOAGQANAGAFANQAFAOgGALIgCAHQgFAKgJAGQgIAFgJAAQgHAAgHgDg");
	this.shape_35.setTransform(73.1,75.2,0.891,0.891);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgOAiQgNgGgFgOQgGgOAGgLIACgEQAGgNAOgFQALgFAOAFQANAGAFAOQAFANgGAMIgBAEQgEAJgJAGQgJAGgJAAQgHAAgHgDg");
	this.shape_36.setTransform(78.5,63,0.891,0.891);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgOAiQgNgGgFgOQgGgNAHgMIABgDQAGgOANgFQAMgFANAGQAOAGAFANQAGANgHAMIgBAEQgFAKgIAFQgJAGgJAAQgGAAgIgDg");
	this.shape_37.setTransform(47.3,87.4,0.891,0.891);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgOAjQgOgGgFgOQgFgNAGgMIACgGQAGgOAOgFQAMgFANAGQANAGAGANQAFAOgGALIgDAHQgEAKgJAGQgJAFgIAAQgIAAgGgDg");
	this.shape_38.setTransform(52.7,75.2,0.891,0.891);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgOAiQgNgGgFgOQgGgOAGgLIACgEQAGgNAOgFQALgFAOAFQANAGAFAOQAFANgFAMIgCAEQgEAJgJAGQgJAGgJAAQgHAAgHgDg");
	this.shape_39.setTransform(58.1,63,0.891,0.891);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgOAiQgNgGgFgOQgGgNAGgMIACgDQAGgOANgFQAMgFANAGQAOAGAFANQAFANgGAMIgBAEQgFAKgJAFQgIAGgJAAQgHAAgHgDg");
	this.shape_40.setTransform(26.9,87.4,0.891,0.891);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgOAjQgOgGgFgOQgFgNAGgMIACgGQAGgOAOgFQAMgFANAGQANAGAGANQAFAOgGALIgDAHQgEAKgJAGQgJAFgIAAQgIAAgGgDg");
	this.shape_41.setTransform(32.3,75.2,0.891,0.891);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgOAiQgNgGgFgOQgGgOAGgLIACgEQAGgNAOgFQALgFAOAFQANAGAFAOQAFANgFAMIgCAEQgEAJgJAGQgJAGgJAAQgGAAgIgDg");
	this.shape_42.setTransform(37.7,63,0.891,0.891);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AkAErQhYAAg+g/Qg/g+AAhYQAAhWA9g8QA9g+BWgCQAlhPBKgvQBKgwBVAAQBuAABUBIQBUBIARBsQBFADAxAwQAwAzAABFQAABIgzAzQgzAzhIAAg");
	this.shape_43.setTransform(56.9,26.7,0.891,0.891);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgfBDQgLgFgFgNQgEgMAGgMIAlhMQAFgLALgFQAMgEALAFQAMAGAEAMQAFAMgGAMIgkBMQgJASgSAAQgGAAgIgDg");
	this.shape_44.setTransform(69.7,88.5,0.922,0.922);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgeBDQgMgFgFgNQgEgMAGgMIAlhMQAFgLALgFQAMgEALAFQAMAGAFAMQAEANgGALIglBMQgDAJgGAFQgIAEgJAAQgHAAgGgDg");
	this.shape_45.setTransform(79.1,68.7,0.922,0.922);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgfBDQgLgFgFgNQgEgMAGgMIAkhMQAGgLAKgFQANgEALAFQAMAGAEAMQAFAMgGAMIglBMQgJASgRAAQgHAAgHgDg");
	this.shape_46.setTransform(48.6,88.5,0.922,0.922);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgeBDQgMgFgEgNQgFgMAGgMIAlhMQAFgLALgFQAMgEALAFQAMAGAFAMQAEANgGALIglBMQgDAJgGAFQgIAEgJAAQgGAAgHgDg");
	this.shape_47.setTransform(58,68.7,0.922,0.922);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgfBDQgLgFgFgNQgEgMAGgMIAkhMQAGgLAKgFQANgEALAFQAMAGAEAMQAFAMgGAMIglBMQgJASgRAAQgHAAgHgDg");
	this.shape_48.setTransform(27.5,88.5,0.922,0.922);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgeBDQgMgFgEgNQgFgMAGgMIAlhMQAFgLALgFQAMgEALAFQAMAGAFAMQAEANgGALIgkBMQgJASgSAAQgGAAgHgDg");
	this.shape_49.setTransform(36.9,68.7,0.922,0.922);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AkAErQhYAAg+g/Qg/g+AAhYQAAhWA9g8QA8g+BXgCQAkhPBKgvQBKgwBVAAQBvAABUBIQBUBIARBsQBFADAwAwQAxAzAABFQAABIgzAzQgzAzhIAAg");
	this.shape_50.setTransform(58.4,27.6,0.922,0.922);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhRCvQgMgGgEgMQgFgNAGgLICIkjQAGgMAMgEQANgFALAGQAMAFAEANQAFAMgGAMIiIEjQgEAIgIAFQgIAFgJAAQgGAAgHgDg");
	this.shape_51.setTransform(78,83.2,0.977,0.977);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhRCvQgMgGgEgMQgFgNAGgLICIkjQAGgMAMgEQANgFALAGQAMAFAEANQAFAMgGAMIiIEjQgEAIgIAFQgIAFgJAAQgGAAgHgDg");
	this.shape_52.setTransform(55.6,83.2,0.977,0.977);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhRCvQgMgGgEgMQgFgNAGgLICIkjQAGgMAMgEQANgFALAGQAMAFAEANQAFAMgGAMIiIEjQgEAIgIAFQgIAFgJAAQgGAAgHgDg");
	this.shape_53.setTransform(33.2,83.2,0.977,0.977);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_10},{t:this.shape_9}]},4).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},4).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},4).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},4).to({state:[{t:this.shape_33},{t:this.shape_32}]},4).to({state:[{t:this.shape_33},{t:this.shape_32}]},4).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},4).to({state:[{t:this.shape_43,p:{scaleX:0.891,scaleY:0.891,x:56.9,y:26.7}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},4).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},4).to({state:[{t:this.shape_43,p:{scaleX:0.977,scaleY:0.977,x:60.9,y:29.2}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},4).to({state:[{t:this.shape_10},{t:this.shape_9}]},4).to({state:[{t:this.shape_43,p:{scaleX:0.977,scaleY:0.977,x:60.9,y:29.2}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.3,104.3);


(lib.HoraInternaMV = function() {
	this.initialize();

	// Camada 1
	this.Hora = new cjs.Text("", "bold 40px 'Roboto'");
	this.Hora.name = "Hora";
	this.Hora.textAlign = "center";
	this.Hora.lineHeight = 40;
	this.Hora.lineWidth = 137;
	this.Hora.setTransform(62,-6.9,0.815,1);

	this.addChild(this.Hora);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.4,-6.9,114.6,56.5);


(lib.Símbolo3 = function() {
	this.initialize();

	// Camada 1
	this.Icone = new lib.IconesTempo();
	this.Icone.setTransform(97.9,54.7,0.307,0.307,0,0,0,265.1,87);

	this.Dia = new cjs.Text("Qui", "22px 'Arial'");
	this.Dia.name = "Dia";
	this.Dia.textAlign = "center";
	this.Dia.lineHeight = 24;
	this.Dia.lineWidth = 61;
	this.Dia.setTransform(30.5,0);

	this.addChild(this.Dia,this.Icone);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65,60);


(lib.Símbolo1 = function() {
	this.initialize();

	// Camada 1
	this.Temperatura = new cjs.Text("99º", "30px 'Roboto SemiBold'");
	this.Temperatura.name = "Temperatura";
	this.Temperatura.textAlign = "right";
	this.Temperatura.lineHeight = 27;
	this.Temperatura.lineWidth = 49;
	this.Temperatura.setTransform(155,14);

	this.Icone = new lib.IconesTempo();
	this.Icone.setTransform(155.3,35,0.26,0.26,0,0,0,265,87);

	this.Dia = new cjs.Text("SEG", "bold 24px 'Roboto'");
	this.Dia.name = "Dia";
	this.Dia.textAlign = "center";
	this.Dia.lineHeight = 21;
	this.Dia.lineWidth = 61;
	this.Dia.setTransform(25,14);

	this.addChild(this.Dia,this.Icone,this.Temperatura);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,11.7,152.3,40);


(lib.CópiadeSímbolo3 = function() {
	this.initialize();

	// Camada 1
	this.Hora = new lib.HoraInternaMV();

	this.addChild(this.Hora);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.4,-6.9,114.6,56.5);


(lib.datad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		var dias = new Array("DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB");
		var meses = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12");
		
		function arredonda(num) {
			if(num < 10){
				return "0" + num;
			}else{
				return num;
			}
		}
		
		
		this.atualiza = function() {
			var agora = new Date();
			
			//this.horaAtual.text = arredonda(agora.getHours()) + ":" + arredonda(agora.getMinutes()) /*+ ":" + arredonda(agora.getSeconds())*/;
		    //this.dataatual.text = dias[agora.getDay()] + " " + arredonda(agora.getDate()) + "." + meses[agora.getMonth()] /*+ "/" + agora.getFullYear()*/;
		
		this.Dat.Hora.Hora.text = arredonda(agora.getHours()) +":" + arredonda(agora.getMinutes());
			
		
		
		}
		
		
		
		setInterval(function() {
		  self.atualiza();
		}, 1000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 2
	this.Dat = new lib.CópiadeSímbolo3();
	this.Dat.setTransform(151.7,-54.5,1,0.999,0,0,0,151.7,-54.6);

	this.timeline.addTween(cjs.Tween.get(this.Dat).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,-6.9,114.6,56.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;

/* === NEONEWS LAYOUT & ANIMATION ENHANCEMENTS === */
function iniciarAnimacao(exportRoot, stage) {
	if (!exportRoot) return;

	if (exportRoot.Tempo) {
		if (exportRoot.Tempo.Dia) {
			exportRoot.Tempo.Dia.textAlign = "center";
			exportRoot.Tempo.Dia.font = "bold 22px 'Roboto', sans-serif";
		}
		if (exportRoot.Tempo.Icone) {
			exportRoot.Tempo.Icone.y = 35;
			exportRoot.Tempo.Icone.scaleX = 0.26;
			exportRoot.Tempo.Icone.scaleY = 0.26;
		}
		if (exportRoot.Tempo.Temperatura) {
			exportRoot.Tempo.Temperatura.textAlign = "center";
			exportRoot.Tempo.Temperatura.font = "bold 24px 'Roboto', sans-serif";
		}
	}

	if (exportRoot.Moeda && exportRoot.Moeda.Moeda) {
		exportRoot.Moeda.Moeda.textAlign = "center";
		exportRoot.Moeda.Moeda.font = "bold 20px 'Roboto', sans-serif";
		if (exportRoot.Moeda.Valor) {
			exportRoot.Moeda.Valor.textAlign = "center";
			exportRoot.Moeda.Valor.font = "20px 'Roboto SemiBold', sans-serif";
		}
	}

	if (exportRoot.Moeda2 && exportRoot.Moeda2.Moeda) {
		exportRoot.Moeda2.Moeda.textAlign = "center";
		exportRoot.Moeda2.Moeda.font = "bold 20px 'Roboto', sans-serif";
		if (exportRoot.Moeda2.Valor) {
			exportRoot.Moeda2.Valor.textAlign = "center";
			exportRoot.Moeda2.Valor.font = "20px 'Roboto SemiBold', sans-serif";
		}
	}

	if (exportRoot.DataDia && exportRoot.DataDia.Dat && exportRoot.DataDia.Dat.Hora && exportRoot.DataDia.Dat.Hora.Hora) {
		exportRoot.DataDia.Dat.Hora.Hora.font = "bold 38px 'Roboto', sans-serif";
		exportRoot.DataDia.Dat.Hora.Hora.textAlign = "center";
	}

	exportRoot.SetarCotacao = function (moeda, valor, negativo) {
		setTimeout(function () {
			if (!moeda) return;
			var m = moeda.toUpperCase();
			var moedaSimples = moeda;
			if (m.indexOf('PESO BOLIVIANO') > -1) moedaSimples = 'Peso B.';
			else if (m.indexOf('PESO ARGENTINO') > -1) moedaSimples = 'Peso A.';
			else if (m.indexOf('PESO CHILENO') > -1) moedaSimples = 'Peso C.';
			else if (m.indexOf('FRANCO') > -1) moedaSimples = 'Franco S.';
			else if (m.indexOf('AUSTRALIANO') > -1) moedaSimples = 'D�lar A.';
			else if (m.indexOf('CANADENSE') > -1) moedaSimples = 'D�lar C.';
			else if (m.indexOf('ESTERLINA') > -1) moedaSimples = 'Libra';

			var m1 = this.Moeda && this.Moeda.Moeda ? this.Moeda.Moeda.autotext : '';
			var m2 = this.Moeda2 && this.Moeda2.Moeda ? this.Moeda2.Moeda.autotext : '';

			if (m.indexOf('DOLAR') > -1 || m1 === 'D�lar' || m1 === 'DOL�R' || m1 === moedaSimples) {
				if (this.Moeda && this.Moeda.Moeda) this.Moeda.Moeda.autotext = moedaSimples;
				if (this.Moeda && this.Moeda.Valor) this.Moeda.Valor.autotext = valor;
			} else if (m.indexOf('EURO') > -1 || m2 === 'Euro' || m2 === 'EURO' || m2 === moedaSimples) {
				if (this.Moeda2 && this.Moeda2.Moeda) this.Moeda2.Moeda.autotext = moedaSimples;
				if (this.Moeda2 && this.Moeda2.Valor) this.Moeda2.Valor.autotext = valor;
			}
		}.bind(this), 100);
	};

	if (stage) stage.update();
}
