(this.webpackJsonppokereact=this.webpackJsonppokereact||[]).push([[0],{104:function(e,a,t){},122:function(e,a,t){},123:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(10),o=t.n(l),s=(t(98),t(18)),i=t(35),c=t(52),m={loading:!1,error:"",showerror:!1,pokename:"",browserinfo:{id:25,is_default:!0,location_area_encounters:"https://pokeapi.co/api/v2/pokemon/25/encounters",name:"pikachu",order:35,species:{name:"pikachu",url:"https://pokeapi.co/api/v2/pokemon-species/25/"},sprites:{back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",back_female:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png",back_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png",back_shiny_female:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png",front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",front_female:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png",front_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",front_shiny_female:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png"},stats:[{base_stat:90,effort:2,stat:{name:"speed",url:"https://pokeapi.co/api/v2/stat/6/"}},{base_stat:50,effort:0,stat:{name:"special-defense",url:"https://pokeapi.co/api/v2/stat/5/"}},{base_stat:50,effort:0,stat:{name:"special-attack",url:"https://pokeapi.co/api/v2/stat/4/"}},{base_stat:40,effort:0,stat:{name:"defense",url:"https://pokeapi.co/api/v2/stat/3/"}},{base_stat:55,effort:0,stat:{name:"attack",url:"https://pokeapi.co/api/v2/stat/2/"}},{base_stat:35,effort:0,stat:{name:"hp",url:"https://pokeapi.co/api/v2/stat/1/"}}],types:[{slot:1,type:{name:"electric",url:"https://pokeapi.co/api/v2/type/13/"}}],weight:60},poketeam:[],showreview:!1},u=Object(c.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"POKENAME_CHANGE":return Object(i.a)({},e,{pokename:a.input});case"POKENAME_REQUEST":return Object(i.a)({},e,{loading:!0,error:""});case"GET_DATA_SUCCESS":return Object(i.a)({},e,{loading:!1,browserinfo:a.payload,error:""});case"GET_DATA_ERROR":return Object(i.a)({},e,{loading:!1,error:a.error,showerror:!0});case"ADD_POKEMON":return e.poketeam.length<=5?5===e.poketeam.length?Object(i.a)({},e,{poketeam:e.poketeam.concat(a.newpokemon),showreview:!0}):Object(i.a)({},e,{poketeam:e.poketeam.concat(a.newpokemon),showreview:!1}):Object(i.a)({},e,{showerror:!0,error:"Tu equipo no puede superar los 6 integrantes"});case"DELETE_POKEMON":return Object(i.a)({},e,{poketeam:e.poketeam.filter((function(e){return e.id!==a.pokemon.id})),showreview:!1});case"CLOSE_ERROR":return Object(i.a)({},e,{showerror:!1,error:""})}return e})),p=(t(103),t(59)),d=(t(104),t(80)),g=t.n(d),h=t(38),b=t(11),k=t(29),f=t(15),E=t(37),y=t(55),w=t(64),v=["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle","wartortle","blastoise","caterpie","metapod","butterfree","weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot","rattata","raticate","spearow","fearow","ekans","arbok","pikachu","raichu","sandshrew","sandslash","nidoran-f","nidorina","nidoqueen","nidoran-m","nidorino","nidoking","clefairy","clefable","vulpix","ninetales","jigglypuff","wigglytuff","zubat","golbat","oddish","gloom","vileplume","paras","parasect","venonat","venomoth","diglett","dugtrio","meowth","persian","psyduck","golduck","mankey","primeape","growlithe","arcanine","poliwag","poliwhirl","poliwrath","abra","kadabra","alakazam","machop","machoke","machamp","bellsprout","weepinbell","victreebel","tentacool","tentacruel","geodude","graveler","golem","ponyta","rapidash","slowpoke","slowbro","magnemite","magneton","farfetchd","doduo","dodrio","seel","dewgong","grimer","muk","shellder","cloyster","gastly","haunter","gengar","onix","drowzee","hypno","krabby","kingler","voltorb","electrode","exeggcute","exeggutor","cubone","marowak","hitmonlee","hitmonchan","lickitung","koffing","weezing","rhyhorn","rhydon","chansey","tangela","kangaskhan","horsea","seadra","goldeen","seaking","staryu","starmie","mr-mime","scyther","jynx","electabuzz","magmar","pinsir","tauros","magikarp","gyarados","lapras","ditto","eevee","vaporeon","jolteon","flareon","porygon","omanyte","omastar","kabuto","kabutops","aerodactyl","snorlax","articuno","zapdos","moltres","dratini","dragonair","dragonite","mewtwo","mew","chikorita","bayleef","meganium","cyndaquil","quilava","typhlosion","totodile","croconaw","feraligatr","sentret","furret","hoothoot","noctowl","ledyba","ledian","spinarak","ariados","crobat","chinchou","lanturn","pichu","cleffa","igglybuff","togepi","togetic","natu","xatu","mareep","flaaffy","ampharos","bellossom","marill","azumarill","sudowoodo","politoed","hoppip","skiploom","jumpluff","aipom","sunkern","sunflora","yanma","wooper","quagsire","espeon","umbreon","murkrow","slowking","misdreavus","unown","wobbuffet","girafarig","pineco","forretress","dunsparce","gligar","steelix","snubbull","granbull","qwilfish","scizor","shuckle","heracross","sneasel","teddiursa","ursaring","slugma","magcargo","swinub","piloswine","corsola","remoraid","octillery","delibird","mantine","skarmory","houndour","houndoom","kingdra","phanpy","donphan","porygon2","stantler","smeargle","tyrogue","hitmontop","smoochum","elekid","magby","miltank","blissey","raikou","entei","suicune","larvitar","pupitar","tyranitar","lugia","ho-oh","celebi","treecko","grovyle","sceptile","torchic","combusken","blaziken","mudkip","marshtomp","swampert","poochyena","mightyena","zigzagoon","linoone","wurmple","silcoon","beautifly","cascoon","dustox","lotad","lombre","ludicolo","seedot","nuzleaf","shiftry","taillow","swellow","wingull","pelipper","ralts","kirlia","gardevoir","surskit","masquerain","shroomish","breloom","slakoth","vigoroth","slaking","nincada","ninjask","shedinja","whismur","loudred","exploud","makuhita","hariyama","azurill","nosepass","skitty","delcatty","sableye","mawile","aron","lairon","aggron","meditite","medicham","electrike","manectric","plusle","minun","volbeat","illumise","roselia","gulpin","swalot","carvanha","sharpedo","wailmer","wailord","numel","camerupt","torkoal","spoink","grumpig","spinda","trapinch","vibrava","flygon","cacnea","cacturne","swablu","altaria","zangoose","seviper","lunatone","solrock","barboach","whiscash","corphish","crawdaunt","baltoy","claydol","lileep","cradily","anorith","armaldo","feebas","milotic","castform","kecleon","shuppet","banette","duskull","dusclops","tropius","chimecho","absol","wynaut","snorunt","glalie","spheal","sealeo","walrein","clamperl","huntail","gorebyss","relicanth","luvdisc","bagon","shelgon","salamence","beldum","metang","metagross","regirock","regice","registeel","latias","latios","kyogre","groudon","rayquaza","jirachi","deoxys-normal","turtwig","grotle","torterra","chimchar","monferno","infernape","piplup","prinplup","empoleon","starly","staravia","staraptor","bidoof","bibarel","kricketot","kricketune","shinx","luxio","luxray","budew","roserade","cranidos","rampardos","shieldon","bastiodon","burmy","wormadam-plant","mothim","combee","vespiquen","pachirisu","buizel","floatzel","cherubi","cherrim","shellos","gastrodon","ambipom","drifloon","drifblim","buneary","lopunny","mismagius","honchkrow","glameow","purugly","chingling","stunky","skuntank","bronzor","bronzong","bonsly","mime-jr","happiny","chatot","spiritomb","gible","gabite","garchomp","munchlax","riolu","lucario","hippopotas","hippowdon","skorupi","drapion","croagunk","toxicroak","carnivine","finneon","lumineon","mantyke","snover","abomasnow","weavile","magnezone","lickilicky","rhyperior","tangrowth","electivire","magmortar","togekiss","yanmega","leafeon","glaceon","gliscor","mamoswine","porygon-z","gallade","probopass","dusknoir","froslass","rotom","uxie","mesprit","azelf","dialga","palkia","heatran","regigigas","giratina-altered","cresselia","phione","manaphy","darkrai","shaymin-land","arceus","victini","snivy","servine","serperior","tepig","pignite","emboar","oshawott","dewott","samurott","patrat","watchog","lillipup","herdier","stoutland","purrloin","liepard","pansage","simisage","pansear","simisear","panpour","simipour","munna","musharna","pidove","tranquill","unfezant","blitzle","zebstrika","roggenrola","boldore","gigalith","woobat","swoobat","drilbur","excadrill","audino","timburr","gurdurr","conkeldurr","tympole","palpitoad","seismitoad","throh","sawk","sewaddle","swadloon","leavanny","venipede","whirlipede","scolipede","cottonee","whimsicott","petilil","lilligant","basculin-red-striped","sandile","krokorok","krookodile","darumaka","darmanitan-standard","maractus","dwebble","crustle","scraggy","scrafty","sigilyph","yamask","cofagrigus","tirtouga","carracosta","archen","archeops","trubbish","garbodor","zorua","zoroark","minccino","cinccino","gothita","gothorita","gothitelle","solosis","duosion","reuniclus","ducklett","swanna","vanillite","vanillish","vanilluxe","deerling","sawsbuck","emolga","karrablast","escavalier","foongus","amoonguss","frillish","jellicent","alomomola","joltik","galvantula","ferroseed","ferrothorn","klink","klang","klinklang","tynamo","eelektrik","eelektross","elgyem","beheeyem","litwick","lampent","chandelure","axew","fraxure","haxorus","cubchoo","beartic","cryogonal","shelmet","accelgor","stunfisk","mienfoo","mienshao","druddigon","golett","golurk","pawniard","bisharp","bouffalant","rufflet","braviary","vullaby","mandibuzz","heatmor","durant","deino","zweilous","hydreigon","larvesta","volcarona","cobalion","terrakion","virizion","tornadus-incarnate","thundurus-incarnate","reshiram","zekrom","landorus-incarnate","kyurem","keldeo-ordinary","meloetta-aria","genesect","chespin","quilladin","chesnaught","fennekin","braixen","delphox","froakie","frogadier","greninja","bunnelby","diggersby","fletchling","fletchinder","talonflame","scatterbug","spewpa","vivillon","litleo","pyroar","flabebe","floette","florges","skiddo","gogoat","pancham","pangoro","furfrou","espurr","meowstic-male","honedge","doublade","aegislash-shield","spritzee","aromatisse","swirlix","slurpuff","inkay","malamar","binacle","barbaracle","skrelp","dragalge","clauncher","clawitzer","helioptile","heliolisk","tyrunt","tyrantrum","amaura","aurorus","sylveon","hawlucha","dedenne","carbink","goomy","sliggoo","goodra","klefki","phantump","trevenant","pumpkaboo-average","gourgeist-average","bergmite","avalugg","noibat","noivern","xerneas","yveltal","zygarde","diancie","hoopa","volcanion","rowlet","dartrix","decidueye","litten","torracat","incineroar","popplio","brionne","primarina","pikipek","trumbeak","toucannon","yungoos","gumshoos","grubbin","charjabug","vikavolt","crabrawler","crabominable","oricorio-baile","cutiefly","ribombee","rockruff","lycanroc-midday","wishiwashi-solo","mareanie","toxapex","mudbray","mudsdale","dewpider","araquanid","fomantis","lurantis","morelull","shiinotic","salandit","salazzle","stufful","bewear","bounsweet","steenee","tsareena","comfey","oranguru","passimian","wimpod","golisopod","sandygast","palossand","pyukumuku","type-null","silvally","minior-red-meteor","komala","turtonator","togedemaru","mimikyu-disguised","bruxish","drampa","dhelmise","jangmo-o","hakamo-o","kommo-o","tapu-koko","tapu-lele","tapu-bulu","tapu-fini","cosmog","cosmoem","solgaleo","lunala","nihilego","buzzwole","pheromosa","xurkitree","celesteela","kartana","guzzlord","necrozma","magearna","marshadow","poipole","naganadel","stakataka","blacephalon","zeraora","deoxys-attack","deoxys-defense","deoxys-speed","wormadam-sandy","wormadam-trash","shaymin-sky","giratina-origin","rotom-heat","rotom-wash","rotom-frost","rotom-fan","rotom-mow","castform-sunny","castform-rainy","castform-snowy","basculin-blue-striped","darmanitan-zen","meloetta-pirouette","tornadus-therian","thundurus-therian","landorus-therian","kyurem-black","kyurem-white","keldeo-resolute","meowstic-female","aegislash-blade","pumpkaboo-small","pumpkaboo-large","pumpkaboo-super","gourgeist-small","gourgeist-large","gourgeist-super","venusaur-mega","charizard-mega-x","charizard-mega-y","blastoise-mega","alakazam-mega","gengar-mega","kangaskhan-mega","pinsir-mega","gyarados-mega","aerodactyl-mega","mewtwo-mega-x","mewtwo-mega-y","ampharos-mega","scizor-mega","heracross-mega","houndoom-mega","tyranitar-mega","blaziken-mega","gardevoir-mega","mawile-mega","aggron-mega","medicham-mega","manectric-mega","banette-mega","absol-mega","garchomp-mega","lucario-mega","abomasnow-mega","floette-eternal","latias-mega","latios-mega","swampert-mega","sceptile-mega","sableye-mega","altaria-mega","gallade-mega","audino-mega","sharpedo-mega","slowbro-mega","steelix-mega","pidgeot-mega","glalie-mega","diancie-mega","metagross-mega","kyogre-primal","groudon-primal","rayquaza-mega","pikachu-rock-star","pikachu-belle","pikachu-pop-star","pikachu-phd","pikachu-libre","pikachu-cosplay","hoopa-unbound","camerupt-mega","lopunny-mega","salamence-mega","beedrill-mega","rattata-alola","raticate-alola","raticate-totem-alola","pikachu-original-cap","pikachu-hoenn-cap","pikachu-sinnoh-cap","pikachu-unova-cap","pikachu-kalos-cap","pikachu-alola-cap","raichu-alola","sandshrew-alola","sandslash-alola","vulpix-alola","ninetales-alola","diglett-alola","dugtrio-alola","meowth-alola","persian-alola","geodude-alola","graveler-alola","golem-alola","grimer-alola","muk-alola","exeggutor-alola","marowak-alola","greninja-battle-bond","greninja-ash","zygarde-10","zygarde-50","zygarde-complete","gumshoos-totem","vikavolt-totem","oricorio-pom-pom","oricorio-pau","oricorio-sensu","lycanroc-midnight","wishiwashi-school","lurantis-totem","salazzle-totem","minior-orange-meteor","minior-yellow-meteor","minior-green-meteor","minior-blue-meteor","minior-indigo-meteor","minior-violet-meteor","minior-red","minior-orange","minior-yellow","minior-green","minior-blue","minior-indigo","minior-violet","mimikyu-busted","mimikyu-totem-disguised","mimikyu-totem-busted","kommo-o-totem","magearna-original","pikachu-partner-cap","marowak-totem","ribombee-totem","rockruff-own-tempo","lycanroc-dusk","araquanid-totem","togedemaru-totem","necrozma-dusk","necrozma-dawn","necrozma-ultra"],_=t(159),x=t(160);function z(e,a,t){return e>=a&&e<=t}var O=Object(s.b)((function(e){return{pokemon:e.browserinfo,pokename:e.pokename,loading:e.loading,dictionary:v}}),(function(e){return{pokenameChange:function(a){e({type:"POKENAME_CHANGE",input:a})},pokenameRequest:function(a){if(e({type:"POKENAME_REQUEST"}),a.length>0)return g.a.get("https://pokeapi.co/api/v2/pokemon/"+a.toLowerCase()).then((function(a){e({type:"GET_DATA_SUCCESS",payload:a.data})})).catch((function(a){e({type:"GET_DATA_ERROR",error:"El nombre ingresado no pertenece a ningun pokemon o no se encuentra en la base de datos, por favor, vuelve a intentarlo o prueba con otro pokemon.",payload:""})}));e({type:"GET_DATA_ERROR",error:"No ingresaste ningun nombre, por favor, ingresa el nombre de algun pokemon.",payload:""})},addPokemon:function(a){var t,n=JSON.parse(JSON.stringify(a));n.id=(t=n.name,"".concat(t,"_").concat((new Date).getTime())),e({type:"ADD_POKEMON",newpokemon:n})},progressBarColor:function(e){return z(e,150,255)?"danger":z(e,110,149)?"warning":z(e,50,109)?"success":z(e,0,49)?"info":void 0}}}))((function(e){var a=e.dictionary,t=e.loading,n=e.pokemon,l=e.pokename,o=e.pokenameChange,s=e.pokenameRequest,i=e.progressBarColor,c=e.addPokemon;return r.a.createElement("section",null,r.a.createElement(b.a,{className:"browser"},r.a.createElement(b.a.Header,null,"Escriba el nombre del pokemon que desee agregar a su equipo"),r.a.createElement(b.a.Body,null,r.a.createElement(x.a,{id:"combo-box-demo",autoHighlight:!0,options:a,getOptionLabel:function(e){return e},style:{width:300},onChange:function(e,a){null!==a&&(o(a),s(a))},renderInput:function(e){return r.a.createElement(_.a,Object.assign({},e,{label:"Elije tu pokemon",variant:"outlined",fullWidth:!0,onChange:function(e){return o(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&s(l)}}))}}),r.a.createElement("br",null),t?r.a.createElement(h.a,{variant:"outline danger",disabled:!0},r.a.createElement(w.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Cargando..."):r.a.createElement(h.a,{variant:"outline-danger",onClick:function(){return s(l)}},"Buscar"))),r.a.createElement("br",null),t?r.a.createElement(b.a,{className:"text-center"},r.a.createElement(b.a.Body,{style:{padding:"25%"}},r.a.createElement(w.a,{animation:"grow",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))):r.a.createElement(b.a,{className:"pokeinfo",style:{padding:"1%"}},r.a.createElement(E.a,null,r.a.createElement(k.a,{sm:4,className:"poke-image"},r.a.createElement(b.a,{style:{height:"100%",margin:"1%"}},r.a.createElement(b.a.Img,{src:n.sprites.front_default}))),r.a.createElement(k.a,{className:"poke-basic"},r.a.createElement(y.a,{responsive:!0,bordered:!0,style:{marginTop:"1%"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Nombre"),r.a.createElement("td",null,n.name)),r.a.createElement("tr",null,r.a.createElement("td",null,"Tipo/s"),r.a.createElement("td",null,n.types[1]?r.a.createElement("span",null," ",n.types[0].type.name," / ",n.types[1].type.name):r.a.createElement("span",null," ",n.types[0].type.name," "))),r.a.createElement("tr",null,r.a.createElement("td",null,"Numero de orden"),r.a.createElement("td",null,n.order)),r.a.createElement("tr",null,r.a.createElement("td",null,"Peso"),r.a.createElement("td",null,n.weight)))))),r.a.createElement(E.a,{className:"poke-stats"},r.a.createElement(k.a,{sm:4},r.a.createElement(b.a,{style:{height:"100%",margin:"1%"}},r.a.createElement(b.a.Img,{src:n.sprites.back_default}))),r.a.createElement(k.a,null,r.a.createElement(b.a,{style:{height:"100%",margin:"1%"}},r.a.createElement(b.a.Body,null,r.a.createElement(f.a,{variant:i(n.stats[5].base_stat),label:"HP : ".concat(n.stats[5].base_stat),now:n.stats[5].base_stat,max:255}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:i(n.stats[4].base_stat),label:"Ataque : ".concat(n.stats[4].base_stat),now:n.stats[4].base_stat,max:230}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:i(n.stats[3].base_stat),label:"Defensa : ".concat(n.stats[3].base_stat),now:n.stats[3].base_stat,max:230}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:i(n.stats[2].base_stat),label:"Ataque Spe : ".concat(n.stats[2].base_stat),now:n.stats[2].base_stat,max:230}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:i(n.stats[1].base_stat),label:"Defensa Spe : ".concat(n.stats[1].base_stat),now:n.stats[1].base_stat,max:230}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:i(n.stats[0].base_stat),label:"Velocidad : ".concat(n.stats[0].base_stat),now:n.stats[0].base_stat,max:230}))))),r.a.createElement(h.a,{variant:"outline-success",style:{margin:"1.5%"},onClick:function(){return c(n)}},"Agregar pokemon a mi equipo")))})),N=t(46),q=Object(s.b)((function(e){return{error:e.error,show:e.showerror}}),(function(e){return{closeError:function(){e({type:"CLOSE_ERROR"})}}}))((function(e){var a=e.closeError,t=e.error,n=e.show;return r.a.createElement(N.a,{show:n,onHide:function(){return a()}},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,"Error!")),r.a.createElement(N.a.Body,null,t),r.a.createElement(N.a.Footer,null,r.a.createElement(h.a,{variant:"danger",onClick:function(){return a()}},"Cerrar")))})),j=t(83),A=t(66),P=Object(s.b)((function(e){return{}}),(function(e){return{}}))((function(e){return Object(j.a)(e),r.a.createElement(A.a,{expand:"lg",variant:"dark",bg:"danger",style:{marginBottom:"1%"}},r.a.createElement(p.a,null,r.a.createElement(A.a.Brand,{href:"#"},"PokeReact")))})),S=t(60);function C(e,a,t){return e>=a&&e<=t}var T=Object(s.b)((function(e){return{poketeam:e.poketeam}}),(function(e){return{makeStats:function(e){for(var a=0,t=0,n=0,r=0,l=0,o=0,s=[0,0,0,0,0,0],i=[],c=[],m=0,u=0,p=0;p<e.length;p++)a+=e[p].stats[5].base_stat,s[p]=s[p]+e[p].stats[5].base_stat,t+=e[p].stats[4].base_stat,s[p]=s[p]+e[p].stats[4].base_stat,n+=e[p].stats[3].base_stat,s[p]=s[p]+e[p].stats[3].base_stat,r+=e[p].stats[2].base_stat,s[p]=s[p]+e[p].stats[2].base_stat,l+=e[p].stats[1].base_stat,s[p]=s[p]+e[p].stats[1].base_stat,o+=e[p].stats[0].base_stat,s[p]=s[p]+e[p].stats[0].base_stat;for(p=0;p<6;p++)c=s.slice(),m=s[p],c.splice(p,1),u=c.reduce((function(e,a){return e+a}))/5,Math.abs(u-m)>200&&i.push({p_index:p,stat_sum:m});return{hp:Math.round(a/6),atk:Math.round(t/6),def:Math.round(n/6),satk:Math.round(r/6),sdef:Math.round(l/6),spd:Math.round(o/6),statsum:s,outliers:i}},progressBarColor:function(e){return C(e,150,255)?"danger":C(e,110,149)?"warning":C(e,50,109)?"success":C(e,0,49)?"info":void 0}}}))((function(e){var a=e.makeStats,t=e.poketeam,n=e.progressBarColor,l=a(t);return r.a.createElement(b.a,{className:"review",style:{margin:"1%"}},r.a.createElement(b.a.Header,null,"Analisis de estadisticas Base"),r.a.createElement(b.a.Body,null,r.a.createElement("p",{className:"h4"},"Promedio de estadisticas Base"),r.a.createElement("br",null),r.a.createElement(f.a,{variant:n(l.hp),label:"HP : ".concat(l.hp),now:l.hp,max:255}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:n(l.atk),label:"Ataque : ".concat(l.atk),now:l.atk,max:230}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:n(l.def),label:"Defensa : ".concat(l.def),now:l.def,max:230}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:n(l.satk),label:"Ataque Spe : ".concat(l.satk),now:l.satk,max:230}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:n(l.sdef),label:"Defensa Spe : ".concat(l.sdef),now:l.sdef,max:230}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:n(l.spd),label:"Velocidad : ".concat(l.sdef),now:l.sdef,max:230}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:n(l.spd),label:"Velocidad : ".concat(l.sdef),now:l.sdef,max:230}),r.a.createElement("br",null),r.a.createElement("p",null,"Si la estadistica esta en color ",r.a.createElement("span",{className:"text-danger"},"Rojo"),", significa que la estadistica es muy alta."),r.a.createElement("p",null,"Si la estadistica esta en color ",r.a.createElement("span",{className:"text-warning"},"Amarillo"),", significa que la estadistica es alta."),r.a.createElement("p",null,"Si la estadistica esta en color ",r.a.createElement("span",{className:"text-success"},"Verde")," , significa que la estadistica es equilibrada."),r.a.createElement("p",null,"Si la estadistica esta en color ",r.a.createElement("span",{className:"text-info"},"Celeste"),", significa que la estadistica es baja, deberias mejorarla."),r.a.createElement("br",null),r.a.createElement("p",{className:"h4"}," Suma de las estadisticas "),r.a.createElement("br",null),l.statsum.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(f.a,{variant:n(e/5),label:"".concat(t[a].name," : ").concat(e),now:e,max:720}),r.a.createElement("br",null))})),r.a.createElement(f.a,{variant:n(l.statsum.reduce((function(e,a){return e+a/6}))/6),label:"Promedio de suma de estadisticas : ".concat(Math.round(l.statsum.reduce((function(e,a){return e+a}))/6)),now:Math.round(l.statsum.reduce((function(e,a){return e+a})))/6,max:720}),r.a.createElement("br",null),r.a.createElement("p",{className:"h4"}," Datos atipicos "),r.a.createElement("br",null),l.outliers[0]?r.a.createElement("ul",null,l.outliers.map((function(e,a){return e.stat_sum>l.statsum.reduce((function(e,a){return e+a}))/6?r.a.createElement("li",{key:a}," ",r.a.createElement("img",{src:t[e.p_index].sprites.front_default,alt:""}),"Las estadisticas base de ",t[e.p_index].name," son considerablemente mas altos que el promedio del equipo."):r.a.createElement("li",{key:a}," ",r.a.createElement("img",{src:t[e.p_index].sprites.front_default}),"Las estadisticas base de ",t[e.p_index].name," son considerablemente muy bajos respecto del promedio, deberias cambiarlo por uno mas poderoso.")}))):r.a.createElement("p",null," tu equipo no presenta datos atipicos")))})),R=Object(s.b)((function(e){return{poketeam:e.poketeam}}),(function(e){return{makeStats:function(e){for(var a=["bug","dark","dragon","electric","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","steel","water"],t=[],n=0,r=0;r<e.length;r++)e[r].types[1]?(-1===t.indexOf(e[r].types[0].type.name)&&(t.push(e[r].types[0].type.name),a.splice(a.indexOf(e[r].types[0].type.name),1),n++),-1===t.indexOf(e[r].types[1].type.name)&&(t.push(e[r].types[1].type.name),a.splice(a.indexOf(e[r].types[1].type.name),1),n++)):-1===t.indexOf(e[r].types[0].type.name)&&(t.push(e[r].types[0].type.name),a.splice(a.indexOf(e[r].types[0].type.name),1),n++);return console.log(e),{notcover:a,cover:t,coverlen:n,coverrev:n>9?"Muy alta, tenes una muy buena covertura de equipos":n>=7?"Alta, tenes una buena covertura de equipos":6===n?"Equilibrada, la covertura de equipos es regular":"Mala, tenes poca diversidad de tipos en tu equipo"}}}}))((function(e){var a=e.poketeam,t=(0,e.makeStats)(a);return r.a.createElement(b.a,{style:{margin:"1%"}},r.a.createElement(b.a.Header,null,"Analisis de Covertura de tipos"),r.a.createElement(b.a.Body,null,r.a.createElement("p",null,"Tu equipo cubre ",t.coverlen," de 17 tipos."),r.a.createElement(E.a,null,r.a.createElement(k.a,null,r.a.createElement("p",null,"Tu equipo cubre:"),r.a.createElement("ul",null,t.cover.map((function(e){return r.a.createElement("li",{key:t.cover.indexOf(e)},"".concat(e," "))})))),r.a.createElement(k.a,null,r.a.createElement("p",null,"Tu equipo no cubre:"),r.a.createElement("ul",null,t.notcover.map((function(e){return r.a.createElement("li",{key:t.notcover.indexOf(e)},"".concat(e," "))}))))),r.a.createElement("p",null,"Tu equipo tiene una covertura ",t.coverrev,".")))})),B=t(50);function M(e,a){return e.indexOf(a)>-1}function D(e){for(var a=[0,0,0,0,0,0],t=0,n=0;n<6;n++)H(t=e.stats[n].base_stat,150,255)?a[n]=3:H(t,100,149)?a[n]=3:H(t,50,99)?a[n]=1:a[n]=0;return a}function H(e,a,t){return e>=a&&e<=t}var I=Object(s.b)((function(e){return{poketeam:e.poketeam}}),(function(e){return{makeStats:function(e){for(var a=[],t=[],n=[],r=[],l={},o=0,s=0,i=0;i<6;i++)a=[],t=[],n=[],(l=D(e[i]).slice())[5]+l[3]>3&&(a.push("defensivo fisico"),n.push("wall fisico")),l[5]+l[1]>3&&(a.push("defensivo especial"),n.push("wall especial")),l[4]>=3&&(a.push("atacante fisico"),l[0]>=3&&n.push("wallbreaker especial")),l[2]>=3&&(a.push("atacante especial"),l[0]>=3&&n.push("wallbreaker fisico")),(M(a,"defensivo especial")||M(a,"defensivo fisico"))&&o++,(M(a,"atacante especial")||M(a,"atacante fisico"))&&s++,M(a,"defensivo especial")&&M(a,"defensivo fisico")&&t.push("defensivo completo"),M(a,"atacante especial")&&M(a,"atacante fisico")&&t.push("atacante completo"),r.push({atributes:a.slice(),roles:n.slice(),superatributes:t.slice()});return{pokemons:r,ofensives_len:s,defensives_len:o}}}}))((function(e){var a=e.makeStats,t=e.poketeam,n=a(t);return r.a.createElement(b.a,{style:{margin:"1%"}},r.a.createElement(b.a.Header,null,"Analisis de Roles"),r.a.createElement(b.a.Body,null,r.a.createElement("p",{className:"h4"}," Roles y atributos de cada pokemon "),r.a.createElement("br",null),r.a.createElement(y.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Pokemon"),r.a.createElement("th",null,"Atributos"),r.a.createElement("th",null,"Roles"))),r.a.createElement("tbody",null,n.pokemons.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("th",{className:"align-middle"},r.a.createElement("img",{src:t[a].sprites.front_default,alt:""}),r.a.createElement("span",null," ",t[a].name)),0==e.atributes.length&&0==e.roles.length?r.a.createElement("th",{colSpan:"2"}," ",r.a.createElement(B.a,{variant:"secondary"},"pokemon debil")," deberias cambiarlo por otro m\xe1s fuerte"):r.a.createElement("th",null,e.atributes.map((function(e,a){return r.a.createElement("p",{key:a},r.a.createElement(B.a,{pill:!0,variant:"success"},e))})),e.superatributes.map((function(e,a){return r.a.createElement("p",{key:a},r.a.createElement(B.a,{pill:!0,variant:"danger"},e))}))),r.a.createElement("th",null,e.roles.map((function(e,a){return r.a.createElement("p",null,r.a.createElement(B.a,{key:a,pill:!0,variant:"warning"},e))}))))})))),r.a.createElement("p",{className:"h4"}," Balance entre pokemones ofensivos y defensivos "),r.a.createElement("br",null),r.a.createElement("ul",null,n.ofensives_len<3?r.a.createElement("li",null," ",n.ofensives_len," de tus pokemons son ofensivos competitivos, deberias tener al menos 3"):r.a.createElement("li",null," ",n.ofensives_len," de tus pokemons son ofensivos competitivos, posees una cantidad aceptable"),r.a.createElement("br",null),n.defensives_len<2?r.a.createElement("li",null," ",n.defensives_len," de tus pokemons son defensivos competitivos, deberias tener al menos 2."):r.a.createElement("li",null," ",n.defensives_len," de tus pokemons son defensivos competitivos, posees una cantidad aceptable."))))})),K=Object(s.b)((function(e){return{show:e.showreview}}),(function(e){return{}}))((function(e){return e.show?r.a.createElement(b.a,null,r.a.createElement(T,null),r.a.createElement(R,null),r.a.createElement(I,null)):r.a.createElement(S.a,null,r.a.createElement("p",{className:"h1"}," Para ver las estadisticas debes tener un equipo de 6 pokemons "))})),L=(t(122),t(22)),G=t(16),U=t(65);function V(e,a,t){return e>=a&&e<=t}var W=Object(s.b)((function(e){return{poketeam:e.poketeam}}),(function(e){return{deletePokemon:function(a){e({type:"DELETE_POKEMON",pokemon:a})},progressBarColor:function(e){return V(e,150,255)?"danger":V(e,110,149)?"warning":V(e,50,109)?"success":V(e,0,49)?"info":void 0},capitalize:function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},iconTypeSelector:function(e){switch(e){case"normal":return r.a.createElement(L.g,null);case"dark":return r.a.createElement(G.e,null);case"dragon":return r.a.createElement(G.j,null);case"ice":return r.a.createElement(L.f,null);case"psychic":return r.a.createElement(L.a,null);case"electric":return r.a.createElement(G.d,null);case"grass":return r.a.createElement(G.g,null);case"water":return r.a.createElement(G.c,null);case"fire":return r.a.createElement(L.b,null);case"steel":return r.a.createElement(G.b,null);case"ghost":return r.a.createElement(L.c,null);case"bug":return r.a.createElement(U.a,null);case"rock":return r.a.createElement(G.i,null);case"ground":return r.a.createElement(L.d,null);case"poison":return r.a.createElement(L.e,null);case"flying":return r.a.createElement(G.a,null);case"fighting":return r.a.createElement(G.h,null);case"fairy":return r.a.createElement(G.f,null)}},iconWeaknessSelector:function(e){switch(e){case"normal":case"dark":return r.a.createElement(G.h,null);case"dragon":return r.a.createElement(G.f,null);case"ice":return r.a.createElement(G.b,null);case"psychic":return r.a.createElement(L.c,null);case"electric":return r.a.createElement(L.d,null);case"grass":return r.a.createElement(L.b,null);case"water":return r.a.createElement(G.g,null);case"fire":return r.a.createElement(G.c,null);case"steel":return r.a.createElement(L.b,null);case"ghost":return r.a.createElement(G.e,null);case"bug":return r.a.createElement(G.i,null);case"rock":return r.a.createElement(G.c,null);case"ground":return r.a.createElement(L.f,null);case"poison":return r.a.createElement(L.a,null);case"flying":return r.a.createElement(G.d,null);case"fighting":return r.a.createElement(G.a,null);case"fairy":return r.a.createElement(L.e,null)}}}}))((function(e){var a=e.capitalize,t=e.deletePokemon,n=e.iconTypeSelector,l=e.iconWeaknessSelector,o=e.poketeam,s=e.progressBarColor;return 0===o.length?r.a.createElement("section",null,r.a.createElement(S.a,{style:{marginTop:"2%"}},r.a.createElement("h1",null,"No ten\xe9s pokemons en tu team"))):r.a.createElement("section",null,r.a.createElement(b.a,{style:{padding:"1%",marginTop:"1%",marginBotton:"1%"}},r.a.createElement(b.a.Header,{className:"text-center"},"Equipo Pokemon"),r.a.createElement("div",{id:"primary-content",className:"primary-content"},r.a.createElement("div",{className:"row"},o.map((function(e,o){return r.a.createElement("div",{className:"col",key:o},r.a.createElement("div",{className:"p-card ".concat(e.types[1]?e.types[Math.floor(2*Math.random())].type.name:e.types[0].type.name),style:{x_index:"1"}},r.a.createElement("div",{className:"character-area"},r.a.createElement("img",{className:"character",src:e.sprites.front_default}),r.a.createElement(h.a,{className:"close",style:{borderRadius:"50%",color:"white",backgroundColor:"re#dc3545",padding:"2%",borderColor:"re#dc3545"},variant:"danger",onClick:function(){return t(e)}},r.a.createElement(U.b,null))),r.a.createElement("div",{className:"details text-center"},r.a.createElement("span",null,e.types[1]?r.a.createElement("p",null," ",e.types[0].type.name," / ",e.types[1].type.name):r.a.createElement("p",null," ",e.types[0].type.name)," "),r.a.createElement(E.a,null,r.a.createElement(k.a,{className:"text-center"},r.a.createElement("h3",null,a(e.name)))),r.a.createElement(E.a,null,r.a.createElement(k.a,null,r.a.createElement("span",null,"Atk: ",e.stats[4].base_stat),r.a.createElement(f.a,{variant:s(e.stats[4].base_stat),now:e.stats[4].base_stat,max:230,style:{height:"5%"}}),r.a.createElement("span",null,"Def: ",e.stats[3].base_stat),r.a.createElement(f.a,{variant:s(e.stats[3].base_stat),now:e.stats[3].base_stat,max:230,style:{height:"5%"}}),r.a.createElement("span",null,"Atk esp: ",e.stats[2].base_stat),r.a.createElement(f.a,{variant:s(e.stats[2].base_stat),now:e.stats[2].base_stat,max:230,style:{height:"5%"}})),r.a.createElement(k.a,null,r.a.createElement("span",null,"Def esp: ",e.stats[1].base_stat),r.a.createElement(f.a,{variant:s(e.stats[1].base_stat),now:e.stats[1].base_stat,max:230,style:{height:"5%"}}),r.a.createElement("span",null,"Vel: ",e.stats[0].base_stat),r.a.createElement(f.a,{variant:s(e.stats[0].base_stat),now:e.stats[0].base_stat,max:230,style:{height:"5%"}})))),e.types[1]?r.a.createElement("ul",{className:"stats"},r.a.createElement("li",null,r.a.createElement("span",null,"Type"),r.a.createElement("h5",null,n(e.types[0].type.name)," ",n(e.types[1].type.name))),r.a.createElement("li",null,r.a.createElement("span",null,"HP"),r.a.createElement("h5",null,e.stats[5].base_stat)),r.a.createElement("li",null,r.a.createElement("span",null,"Weakness"),r.a.createElement("h5",null,l(e.types[0].type.name)," ",l(e.types[1].type.name)))):r.a.createElement("ul",{className:"stats"},r.a.createElement("li",null,r.a.createElement("span",null,"Type"),r.a.createElement("h5",null,n(e.types[0].type.name))),r.a.createElement("li",null,r.a.createElement("span",null,"HP"),r.a.createElement("h5",null,e.stats[5].base_stat)),r.a.createElement("li",null,r.a.createElement("span",null,"Weakness"),r.a.createElement("h5",null,l(e.types[0].type.name))))))}))))))}));var J=function(){return r.a.createElement(s.a,{store:u},r.a.createElement(q,null),r.a.createElement(P,null),r.a.createElement(p.a,null,r.a.createElement(O,null),r.a.createElement(W,null),r.a.createElement(K,null)))};o.a.render(r.a.createElement(J,null),document.getElementById("root"))},93:function(e,a,t){e.exports=t(123)},98:function(e,a,t){}},[[93,1,2]]]);
//# sourceMappingURL=main.9d26c24e.chunk.js.map