var __awaiter=this&&this.__awaiter||function(e,t,i,n){function s(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,a){function r(e){try{l(n.next(e))}catch(t){a(t)}}function o(e){try{l(n["throw"](e))}catch(t){a(t)}}function l(e){e.done?i(e.value):s(e.value).then(r,o)}l((n=n.apply(e,t||[])).next())})},__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t["default"]=e,t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};function setupMainThread(){const e=window.recordConfig?window.recordConfig.paths:window.snMonacoConfig.paths;if(window.recordConfig){window.recordConfig.isYLNSource=e.app.startsWith("http://yln:9090")}require.config({urlArgs:"sysparm_substitute=false",paths:{vs:e.vsSource}}),"function"==typeof Array.prototype.include&&(Array.prototype.include=void 0),window.MonacoEnvironment={getWorkerUrl:function(){return`data:text/javascript;charset=utf-8,${encodeURIComponent(`
			self.MonacoEnvironment = {
			baseUrl: '${e.monacoBase}'
			};
			importScripts('${e.monacoWorker}');`)}`}},requestAnimationFrame(()=>{require(["./main"],({Main:e})=>{e.init()})})}(function(){"undefined"==typeof window||document.addEventListener("DOMContentLoaded",()=>{window.codenowInitialized||(window.codenowInitialized=!0,setupMainThread())})})(),define("codenowUtils",["require","exports"],function(e,t){"use strict";function i(e){return e.host&&e.host.hostType===n.GlideVar?e.host.name:e.name}Object.defineProperty(t,"__esModule",{value:!0});t.CodeNowUtils=class{static snFetch(e,t,i=!0){return __awaiter(this,void 0,void 0,function*(){t||(t={});const n=t.headers||{"Content-Type":"application/json",accept:"application/json"};return n["X-UserToken"]=window.g_ck,t.headers=n,i?yield(yield fetch(e,t)).json():yield fetch(e,t)})}};var n;(function(e){e.Collection="collection",e.Reference="reference",e.Choice="choice",e.string="string",e.type_boolean="boolean",e.DocumentID="document_id",e.SourceID="source_id",e.PhoneNumber="phone_number_e164",e.GlideVar="glide_var"})(n=t.FieldType||(t.FieldType={})),t.getFieldNameFromMonacoField=i}),define("constants",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i;(function(e){e.javascript="javascript",e.typescript="typescript",e.css="css",e.html="html"})(i=t.LangType||(t.LangType={})),t.GLOBAL_SOCPE="global",t.JAVA_GLOBAL_API="JavaGlobalAPI.d.ts",t.JAVA_SCOPE_API="JavaScopeAPI.d.ts",t.TABLE_API="TableAPI.d.ts",t.JS_API="JSAPI.d.ts",t.TYPE_DEFS="sn_typedef.d.ts",t.CURRENT_API="CurrentAPI.d.ts",t.libES5Path="vs/language/typescript/lib/lib-ts",t.libES6Path="vs/language/typescript/lib/lib-es6-ts",t.TS_DECLARATION="ts_definition",t.DECLARATION_DATA_PATH="../metadata/snapi.json",t.DECLARATION_TABLE_PATH="/api/now/table/ts_definition",t.FIELD_DECLARATION="typedeclaration",t.FIELD_SOURCEMAP="typesourcemap",t.FIELD_TS_SCRIPT="tsscript",t.FIELD_SCRIPT="script",t.EL_TS_EDITOR="ts_editor",t.EL_JS_EDITOR="js_editor",t.EL_TS_DECL="ts_decl",t.EL_TS_SOURCEMAP="ts_sourcemap",t.EL_THEME_SELECT="themeselect",t.EL_SCOPE_SELECT="scope-select",t.EL_SCRIPT_RUNNER="script-runner",t.EL_SCRIPT_OUTPUT="script-output",t.READONLY_OUTPUT_FILE_NAME="es5Module.js";var n;(function(e){e.sys_script_include="sys_script_include",e.ts_definition="ts_definitions"})(n=t.TableNames||(t.TableNames={})),t.jsxFactoryTypes=["createElement","createJSXElement"],t.CODENOW_SEISMIC_FS_KEY="CODENOW_SEISMIC_LOCAL_STOREAGE_KEY",t.CODENOW_SCRIPT_RUNNER_FS_KEY="CODENOW_SCRIPT_RUNNER_LOCAL_STORAGE_KEY",t.CSS_FILE_NAME="boot.css",t.HTML_FILE_NAME="boot.html",t.TSX_FILE_NAME="boot.tsx",t.FIDDLE_TABLE_URL="api/now/table/ux_fiddle_play",t.FIDDLE_TABLE_NAME="fx_fiddle_play",t.emojis=["\uD83D\uDE00","\uD83D\uDE01","\uD83D\uDE02","\uD83D\uDE03","\uD83D\uDE04","\uD83D\uDE05","\uD83D\uDE06","\uD83D\uDE07","\uD83D\uDE08","\uD83D\uDE09","\uD83D\uDE0A","\uD83D\uDE0B","\uD83D\uDE0C","\uD83D\uDE0D","\uD83D\uDE0E","\uD83D\uDE0F","\uD83D\uDE10","\uD83D\uDE11","\uD83D\uDE12","\uD83D\uDE13","\uD83D\uDE14","\uD83D\uDE15","\uD83D\uDE16","\uD83D\uDE17","\uD83D\uDE18","\uD83D\uDE19","\uD83D\uDE1A","\uD83D\uDE1B","\uD83D\uDE1C","\uD83D\uDE1D","\uD83D\uDE1E","\uD83D\uDE1F","\uD83D\uDE20","\uD83D\uDE21","\uD83D\uDE22","\uD83D\uDE23","\uD83D\uDE24","\uD83D\uDE25","\uD83D\uDE26","\uD83D\uDE27","\uD83D\uDE28","\uD83D\uDE29","\uD83D\uDE2A","\uD83D\uDE2B","\uD83D\uDE2C","\uD83D\uDE2D","\uD83D\uDE2E","\uD83D\uDE2F","\uD83D\uDE30","\uD83D\uDE31","\uD83D\uDE32","\uD83D\uDE33","\uD83D\uDE34","\uD83D\uDE35","\uD83D\uDE36","\uD83D\uDE37","\uD83D\uDE41","\uD83D\uDE42","\uD83D\uDE43","\uD83D\uDE44","\uD83E\uDD10","\uD83E\uDD11","\uD83E\uDD12","\uD83E\uDD13","\uD83E\uDD14","\uD83E\uDD15","\uD83E\uDD20","\uD83E\uDD21","\uD83E\uDD22","\uD83E\uDD23","\uD83E\uDD24","\uD83E\uDD25","\uD83E\uDD27","\uD83E\uDD28","\uD83E\uDD29","\uD83E\uDD2A","\uD83E\uDD2B","\uD83E\uDD2C","\uD83E\uDD2D","\uD83E\uDD2E","\uD83E\uDD2F","\uD83E\uDDD0"],t.SAMPLE_TS_CONTENT=`// This is a sample typescript SI
  class Point {
	  constructor(public x = 0, public y = 0) {
		  this.initialize(x, y);
	  }
	  initialize(x = 0, y = 0) {
		  this.x = x;
		  this.y = y;
	  }
  }`,t.SAMPLE_JS_CONTENT=`// This is a sample ES6 class style SI
  class Point {
	  constructor(x = 0, y = 0) {
		  this.x = x;
		  this.y = y;
	  }
	  initialize(x = 0, y = 0) {
		  this.x = x;
		  this.y = y;
	  }
  }`,t.SAMPLE_STANDARD_SI_CONTENT=`// This is standard SI
  var Point = Class.create();
  Point.prototype = {
	  /**
	   * @type {number}
	   */
	  x: null,
	  /**
	   * @type {number}
	   */
	  y: null,
	  /**
	   * @param {number=} x
	   * @param {number=} y
	   */
	  initialize: function (x, y) {
		  if (void 0 === x)
			  x = 0;
		  if (void 0 === y)
			  y = 0;
		  this.x = x;
		  this.y = y;
	  },
	  type: 'Point'
  };`,t.SAMPLE_SEISMIC_CONTENT=`// Avoid writing code here 😗
  (function () {
	  // Write your code here 😎
	  window.preloadComponents = () => {
		  // We load all the tags by looking into the code.
		  // But If you are injecting any dynamic tags fill the Array.
		  // e.g return ['now-calendar', 'now-button'];
		  return [];
	  }
	  const getProperties = () => {
		  return {
			  age: {
				  default: 38
			  },
			  gender: {
				  default: 'male'
			  },
			  area: {
				  default: {
					  pin: '',
					  street: {
						  line: '',
						  road: ''
					  }
				  },
				  reflect: true
			  },
			  salary: {
				  computed() {
					  return 0;
				  }
			  },
			  users: {
				  unstableParse: true
			  },
			  name: {
				  default: 'Fred',
				  readonly: true
			  }
		  };
	  };
	  const getInitialState = () => {
		  return {
			  firstName: 'lakshmi',
			  lastName: 'narayana',
			  age: 38
		  };
	  };
	  const config = createComponentConfig(
		  // Component Properties
		  getProperties(),
		  // Component Initial State
		  getInitialState(),
		  // Component style
		  componentStyle, // content of "boot.css".
		  // Actions
		  {
			  click: {},
			  select: {},
			  "COMPONENT#CLICKED": {},
			  "COMPONENT#TEXT_SELECTED": {}
		  },
		  // Action Handlers
		  {
			  ['NOW_ALERT#ACTION_CLICKED']: ({ action, properties, state, dispatch, host }) => {

			  },
			  ['NOW_ALERT#EXPANDED_SET']: ({ action, properties, state, dispatch, host }) => {
			  },
			  clicked(e) {
			  }
		  },
		  // Event Handlers
		  [
			  {
				  events: ['click', 'contextmenu'],
				  effect(e) {
					  e.dispatch('COMPONENT#CLICKED');
					  alert('Do some interesting work here')
				  },
				  target: document
			  }
		  ],
		  // View
		  (state, dispatch) => {
			  return (
				  <div>
					  <div>
						  <now-button label="hello Seismic user" appendToPayload={{name: 'coe', size: 7}} on-click={(e) => {
							  alert('you click me');
						  }}/>
					  </div>
				  </div>)
		  });
	  registerCustomElement('my-sample-component', config);
  })();

  // Avoid writing code here 😗`,t.snippets=[{label:"doc",doc:"Documentation Header ",text:"/**\r \n* Description: $0\r \n* Parameters: \r \n* Returns:\r\n*/\r "},{label:"for",doc:"Standard loop for arrays",text:"for (var i=0; i< myArray.length; i++) {\r\n //myArray[i];\r \n}\r\n\r "},{label:"vargror",doc:"Example GlideRecord Or Query",text:"var gr = new GlideRecord('${1:tableName}');\r \nvar qc = gr.addQuery('${2:columnName}', 'value1');\r \nqc.addOrCondition('${0:columnName}', 'value2');\r\ngr.query();\r \nwhile (gr.next()) {\r\n\r \n}\r\n\r "},{label:"info",doc:"",text:"gs.addInfoMessage(gs.getMessage(\"$0\"));"},{label:"method",doc:"Standard JavaScript Class Method",text:"/*_________________________________________________________________\r\n   * Description:\r\n   * Parameters:\r\n   * Returns:\r\n   ________________________________________________________________*/\r\n   $0: function() {\r\n   \r\n   },\r\n"},{label:"vargr",doc:"A common pattern of creating and querying a GlideRecord",text:"var gr = new GlideRecord(\"$0\");\r\ngr.addQuery(\"name\", \"value\");\r\ngr.query();\r\nif (gr.next()) {\r\n   \r\n}\r\n"}],t.scopes={"3ad18693db92220004997878f0b8f516":{sysId:"3ad18693db92220004997878f0b8f516",displayValue:"Benchmark Client",value:"sn_bm_client"},"1bc6c2d3db92220004997878f0b8f571":{sysId:"1bc6c2d3db92220004997878f0b8f571",displayValue:"Benchmark Common",value:"sn_bm_common"},de0be0e15bb00300514d484c11f91a4b:{sysId:"de0be0e15bb00300514d484c11f91a4b",displayValue:"Benchmarks Spoke",value:"sn_bm_spoke"},"18351d53eb32120034d1eeea1206fe79":{sysId:"18351d53eb32120034d1eeea1206fe79",displayValue:"Change Management - CAB Workbench",value:"sn_change_cab"},cdcf033467020300b410afa00585ef2b:{sysId:"cdcf033467020300b410afa00585ef2b",displayValue:"Change Management - Change Schedule",value:"sn_chg_soc"},"1ae06f355710130034d169202d94f92e":{sysId:"1ae06f355710130034d169202d94f92e",displayValue:"Change Management - Color Picker",value:"sn_chg_soc_cp"},f9752f20d7120200b6bddb0c8252032e:{sysId:"f9752f20d7120200b6bddb0c8252032e",displayValue:"Code Search",value:"sn_codesearch"},"116703c19f200300af7196fcc67fcf17":{sysId:"116703c19f200300af7196fcc67fcf17",displayValue:"Connect Spoke",value:"sn_connect_ah"},"1ae3c8a3c3221200f25d174292d3aea3":{sysId:"1ae3c8a3c3221200f25d174292d3aea3",displayValue:"Delegated Dev User Administration",value:"sn_dd_user_admin"},dc1fcaa2c3032200f7d1ca3adfba8f1a:{sysId:"dc1fcaa2c3032200f7d1ca3adfba8f1a",displayValue:"Enhanced Global Search UI",value:"sn_global_searchui"},"801cef500b312200c438ee6537673a04":{sysId:"801cef500b312200c438ee6537673a04",displayValue:"Flow-Action Designer",value:"sn_flow_designer"},global:{sysId:"global",displayValue:"Global",value:"global"},"5f4ef4ed9f401200b18a7feea57fcfbe":{sysId:"5f4ef4ed9f401200b18a7feea57fcfbe",displayValue:"Guided Setup",value:"sn_guided_setup"},"7f1c13c0731103005e7d234ffff6a7da":{sysId:"7f1c13c0731103005e7d234ffff6a7da",displayValue:"ITSM Spoke",value:"sn_itsm_spoke"},dd9d31505f221200c438ef50ff4666de:{sysId:"dd9d31505f221200c438ef50ff4666de",displayValue:"JavaScript Debugger",value:"sn_jsdebugger"},"2efa4be5db0003004d27b31be0b8f5e9":{sysId:"2efa4be5db0003004d27b31be0b8f5e9",displayValue:"Major Incident Management",value:"sn_major_inc_mgmt"},fae90fb35f6b03006ae6a184ff46667a:{sysId:"fae90fb35f6b03006ae6a184ff46667a",displayValue:"Major workbench components",value:"sn_major_workbench"},b2881e900b3003001e684ac3b6673a93:{sysId:"b2881e900b3003001e684ac3b6673a93",displayValue:"Performance Analytics - Diagnostics",value:"sn_pa_diagnostics"},"1c3f9f936741030032468aaad485efda":{sysId:"1c3f9f936741030032468aaad485efda",displayValue:"Performance Analytics - Enhanced UI",value:"sn_pa_ui"},"9a31657653373200e8960ef5d5dc34d5":{sysId:"9a31657653373200e8960ef5d5dc34d5",displayValue:"Schedule Pages",value:"sn_schedule_pages"},"893ea311d71321004f6a0eca5e6103e6":{sysId:"893ea311d71321004f6a0eca5e6103e6",displayValue:"Scoped App Author",value:"sn_appauthor"},"781f36a96fef21005be8883e6b3ee43d":{sysId:"781f36a96fef21005be8883e6b3ee43d",displayValue:"Scoped App Client",value:"sn_appclient"},"0aa1393093213100ae6e941e867ffb40":{sysId:"0aa1393093213100ae6e941e867ffb40",displayValue:"Scoped App Creator",value:"sn_appcreator"},"6e70d1f5c32302006f333b0ac3d3ae7b":{sysId:"6e70d1f5c32302006f333b0ac3d3ae7b",displayValue:"Service Catalog REST API",value:"sn_sc"},"6c11c4f357201300ff01ac11ac94f982":{sysId:"6c11c4f357201300ff01ac11ac94f982",displayValue:"Service Level Management - Breakdowns",value:"sn_sla_brkdwn"},"67ac5062db10220035417878f0b8f5c4":{sysId:"67ac5062db10220035417878f0b8f5c4",displayValue:"Service Portal Surveys",value:"sn_portal_surveys"},"97515a49134b5200ed373d62f244b04a":{sysId:"97515a49134b5200ed373d62f244b04a",displayValue:"ServiceNow Guided Tour Designer",value:"sn_tourbuilder"},"11722b01473231007f47563dbb9a7154":{sysId:"11722b01473231007f47563dbb9a7154",displayValue:"Social Knowledge",value:"sn_kb_social_qa"},"5d9789f3eb51310007e48c1cf106fe9e":{sysId:"5d9789f3eb51310007e48c1cf106fe9e",displayValue:"Studio",value:"sn_devstudio"},"0fdd6483d72302004f1e82285e61033a":{sysId:"0fdd6483d72302004f1e82285e61033a",displayValue:"Targeted Communications",value:"sn_publications"},"8dfe92d95373030029200ef5d5dc348a":{sysId:"8dfe92d95373030029200ef5d5dc348a",displayValue:"Task Communications Management",value:"sn_comm_management"},"46aa60c2ff10020014ecffffffffffa5":{sysId:"46aa60c2ff10020014ecffffffffffa5",displayValue:"Twilio Driver",value:"sn_twilio_driver"},"9353f56fb33332000abf86d256a8dce9":{sysId:"9353f56fb33332000abf86d256a8dce9",displayValue:"Visual Task Board (VTB) Spoke",value:"sn_vtb_ah"},"0f6ab99a0f36060094f3c09ce1050ee8":{sysId:"0f6ab99a0f36060094f3c09ce1050ee8",displayValue:"[ws] Xplore: Developer Toolkit",value:"global"}},t.SAMPLE_CSS=`.blue-border {
	border: 1px solid blue;
}
`,t.SAMPLE_HTML=`<div class="blue-border">
	<my-sample-component></my-sample-component>
</div>
`,t.SEISMIC_ALL=`(function () {
	const getProperties = () => {
		return {
			age: {
				default: 38
			},
			gender: {
				default: 'male'
			},
			area: {
				default: {
					pin: '',
					street: {
						line: '',
						road: ''
					}
				},
				reflect: true
			},
			salary: {
				computed() {
					return 0;
				}
			},
			users: {
				unstableParse: true
			},
			name: {
				default: 'Fred',
				readonly: true
			}
		};
	};
	const getInitialState = () => {
		return {
			firstName: 'lakshmi',
			lastName: 'narayana',
			age: 38
		};
	};
	function getNowAlert() {
		return <now-alert content="Alert content"
			header="Alert Header" iconName="calendar-fill"
			status="warning"
			action={{ type: "dismiss" }}
			textLinkProps={{ label: 'More info', href: '#' }}></now-alert>;
	}
	function getNowAlertList() {
		return <now-alert-list configAriaLive="polite"
			items={[{
				variant: "info", "iconName": "ban-fill",
				"header": "Alert Header 1",
				"content": "Alert content 1",
				"action": { type: "acknowledge" }
			}, { "variant": "info", "iconName": "calendar-fill", "header": "Alert Header 2", "content": "Alert content 2", "action": { "type": "dismiss" } }]}></now-alert-list>
	}
	function getNowAvatar() {
		return <now-avatar size="md" userName="Fred Luddy" presence="available"></now-avatar>;
	}
	function getNowBadge() {
		return <now-badge maxDigits="3" size="md" status="positive" value="9999" variant="primary"></now-badge>;
	}
	function getNowButton() {
		return (<div>
			<now-button label="Click me" variant="primary" size="lg"></now-button>
			<now-button label="Settings" icon="cog"></now-button>
			<now-button label="Disabled button" disabled></now-button>
		</div>)
	}
	function getNowButtonIconic() {
		return (<div>
			<now-button-iconic icon="envelope-fill" variant="primary" bare></now-button-iconic>
			<now-button-iconic icon="envelope-fill" variant="tertiary"></now-button-iconic>
			<now-button-iconic icon="envelope-outline"></now-button-iconic>
		</div>);
	}
	function getNowButtonBare() {
		return (<div>
			<now-button-bare label="Click me" variant="primary" size="lg"></now-button-bare>
			<now-button-bare label="With icon" icon-start="cog"></now-button-bare>
			<now-button-bare label="Disabled button" disabled></now-button-bare>
		</div>);
	}
	function getNowButtonStateful() {
		return (<div>
			<now-button-stateful
				icon="magnifying-glass-outline"
				variant="primary"
			/>
			<now-button-stateful
				icon="magnifying-glass-outline"
				variant="primary-highlighted"
				configRole="radio"

			/>
			<now-button-stateful
				icon="envelope-outline"
				tooltip-content="Email"
			/>
		</div>);
	}
	function getNowCard() {

	}
	function getNowCardActions() {
		return (<div>
			<now-card-actions items={[{
				"label": "Decline",
				"variant": "secondary-negative"
			}, { "label": "Approve", "variant": "secondary-positive" }]}>
			</now-card-actions>
		</div>);
	}
	function getNowCardFooter() {
		return (<div>
			<now-card-footer label="Updated 2019-01-15 08:41:09" />
			<now-card-footer label={{ start: 'Half width', end: 'Half width' }} />
		</div>);
	}
	function getNowCardHeader() {
		return (<div>
			<now-card-header heading={{ label: 'Title for the Card' }} />
			<now-card-header
				tagline={{ label: 'Tagline for the card' }}
				heading={{ label: 'Title for the card', size: 'md', lines: 2 }}
				caption={{ label: 'Caption for the card', lines: 2 }}
				dropdowns={[{ id: 'dropdown1', items: [{ id: 'dropItem1', label: 'Action One' }] }]}
				actions={[
					{
						id: 'action1',
						icon: 'download-outline', label: 'Download'
					}]}>
				<now-icon slot="identifier" icon="document-outline" />
			</now-card-header>
		</div>);
	}
	function getNowContentTree() {
		return (<div>
			<now-content-tree items={[{ "id": "us", "label": "United States", "children": [{ "id": "us-az", "label": "Arizona", "childrenAvailable": 10 }, { "id": "us-ca", "label": "California", "children": [{ "id": "us-ca-0", "label": "Acton" }, { "id": "us-ca-1", "label": "Adelanto" }] }, { "id": "us-or", "label": "Oregon", "children": [{ "id": "us-or-0", "label": "Acton" }, { "id": "us-or-1", "label": "Adelanto" }] }] }]} showDividers={true} select="multi"></now-content-tree>
		</div>);
	}
	function getDropdown() {
		return (<div>
			<now-dropdown icon="" items={[{ "id": "al", "label": "Alabama" }, { "id": "ak", "label": "Alaska" }, { "id": "az", "label": "Arizona" }, { "id": "ar", "label": "Arkansas" }, { "id": "ca", "label": "California" }, { "id": "co", "label": "Colorado" }]} placeholder="" selectedItems={["al"]} size="md" variant="secondary"></now-dropdown>
		</div>);
	}
	function getNowHeading() {
		return (<div>
			<now-heading label="Heading Label" level="1" purpose="header" variant="header-primary"></now-heading>
		</div>);
	}
	function getNowIcon() {
		return <now-icon icon="arrow-start-fill" />;
	}
	function getNowHightligtedValue() {
		return (<div>
			<now-highlighted-value label="Highlighted Label" status="positive"></now-highlighted-value>
		</div>);
	}
	function getNowIconPresence() {
		return <now-icon-presence presence="available"></now-icon-presence>;
	}
	function getNowLabelValueInline() {
		return <now-label-value-inline label="Inline Label" value="2030"></now-label-value-inline>;
	}
	function getNowLabelValueStacked() {
		return <now-label-value-stacked align="vertical"
			items={[{ "label": "State", "value": { "type": "string", "value": "Closed", "previous": "Opened" } }, { "label": "Incident", "value": { "type": "text-link", "label": "INC0645648", "href": "#", "underlined": true } }, { "label": "State", "value": { "type": "highlighted-value", "label": "In Progress", "status": "positive", "showIcon": true } }]} size="md"></now-label-value-stacked>;
	}
	function getNowLabelValueTabbed() {
		return <now-label-value-tabbed align="vertical"
			items={[{ "label": "State", "value": { "type": "string", "value": "Closed", "previous": "Opened" } }, { "label": "Incident", "value": { "type": "text-link", "label": "INC0645648", "href": "#", "underlined": true } }, { "label": "State", "value": { "type": "highlighted-value", "label": "In Progress", "status": "positive", "showIcon": true } }]} size="md"></now-label-value-tabbed>;
	}
	function getNowLoader() {
		return <now-loader label="Loading..." action="Retry" size="lg"></now-loader>;
	}
	function getNowModal() {
		return <now-modal content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." footerActions={[{ "label": "Save", "variant": "primary" }, { "label": "Cancel", "variant": "secondary" }]} headerLabel="Sed ut perspiciatis unde" headerLevel="2" opened={true} size="md"></now-modal>;
	}
	function getNowPill() {
		return <now-pill icon="envelope-fill" canDismiss></now-pill>
	}
	function getProgressBar() {
		return (<div>
			<now-progress-bar />
			<now-progress-bar pathType="alert" size="lg" value="0.25" />
		</div>);
	}
	function getRichText() {
		return <now-rich-text html="<h2>Rich Text example</h2><ul><li>Item 1</li><li>Item 2</li></ul>"></now-rich-text>;
	}
	function getSplitButton() {
		return (<div>
			<now-split-button label="Save" variant="primary" size="lg" items={[
				{ id: 'update', label: 'Update Record' },
				{ id: 'edit', label: 'Edit Record' },
				{ id: 'delete', label: 'Delete Record' }
			]}></now-split-button>
			<now-split-button icon="cog" label="Open" items={[
				{ id: 'foo', label: 'Foo Bar' }
			]}></now-split-button>
			<now-split-button label="Disabled button" disabled items={[
				{ id: 'foo', label: 'Foo Bar' },
				{ id: 'baz', label: 'Baz Qux' }
			]}></now-split-button>
		</div>);
	}

	function getTabs() {
		return <now-tabs items={[{ "id": "details", "label": "Details" }, { "id": "tasks", "label": "Task SLAs" }, { "id": "affected", "label": "Affected CIs" }, { "id": "impacted", "label": "Impacted Services/CIs" }]}></now-tabs>;
	}
	function getNowTemplateCardAssist() {
		return <now-template-card-assist actions={[{ "id": "share", "label": "Copy URL" }, { "id": "close", "label": "Mark Complete" }]} configAria={{}} content={[{ "label": "State", "value": { "type": "string", "value": "Closed" } }, { "label": "Assigned", "value": { "type": "string", "value": "Carla S" } }, { "label": "Priority", "value": { "type": "string", "value": "Low" } }, { "label": "SLA", "value": { "type": "string", "value": "No SLA Set" } }]} contentItemMinWidth="300" footerContent={{ "label": "Updated", "value": "2019-01-15 08:41:09" }} heading={{ "label": "Submit attachment to malware sandbox and review the results" }} tagline={{ "icon": "tree-view-long-outline", "label": "Process" }}></now-template-card-assist>;
	}
	function getNowCardTemplateAttachment() {
		return <now-template-card-attachment actions={[{ "id": "share", "label": "Copy URL" }, { "id": "close", "label": "Mark Complete" }]} caption="49.8 KB" heading={{ "label": "Pasted Image", "level": 2 }} identifier={{ "type": "icon", "icon": "clipboard-outline" }}></now-template-card-attachment>;
	}
	function getNowTemplateCardOmniChannel() {
		return <now-template-card-omnichannel actions={[{ "label": "Decline", "variant": "secondary-negative" }, { "label": "Approve", "variant": "secondary-positive" }]} content={{ "label": "Joe Employee", "value": "San Diego Tech Lounge" }} heading={{ "label": "Something is broken", "level": 3 }} tagline={{ "icon": "chat-outline", "label": "Chat CH0001081" }}></now-template-card-omnichannel>;
	}
	function getNowTextLink() {
		return <now-text-link accessibleLabel="" href="" label="Text link label" variant="primary"></now-text-link>;
	}
	function getNowToggle() {
		return (<div>
			<now-collapse-trigger controls="collapseID">
				<button>Toggle</button>
			</now-collapse-trigger>
			<now-toggle size="md" id="yln"></now-toggle>
		</div>);
	}
	function getNowChart() {
		const options = {
			width: "auto",
			height: "auto",
			type: "stacked",
			showTooltip: true,
			xAxisConfig: { title: "Fruit" },
			seriesConfig: {
				apples: { x: "fruit", y: "apple" },
				pears: { x: "fruit", y: "pear" },
				plums: { x: "fruit", y: "plum" }
			},
			seriesData: [
				{ fruit: "Sold", apple: 5, pear: 2, plum: 9 }
			]
		}
		return <now-chart-bar {...options} />
	}
	function getNowCheckBox() {
		return <now-checkbox label="I accept these terms" required />;
	}
	function getNowCollapse() {
		return <now-collapse expanded> hello jeffas</now-collapse>;
	}
	function getNowInput() {
		return <now-input label="First Name" placeholder="Susan" />;
	}
	function getNowInputPassword() {
		return <div>
			<now-input-password label="Enter new password" />
			<now-input-password messages={[]} requirements={[]}></now-input-password>
		</div>
	}
	function getNowInputUrl() {
		return <now-input-url ></now-input-url>;
	}
	function getNowInputPhone() {
		return <now-input-phone country-codes={[]} messages={[]} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></now-input-phone>;
	}
	function getNowRadioButton() {
		return (<div>
			<now-radio-buttons
				label="Choose one:"
				name="choice"
				options={[{ id: 'opt1', label: 'Option 1' }]}
			/>
		</div>)
	}
	function getNowScoreAdvanced() {
		return <now-score-advanced
			score="$307.63"
			size="lg"
			heading="ServiceNow stock price"
			change-values={{
				change: "$25.31",
				percent: "8.95%",
				timestamp: "since Jan 1"
			}}
			target-values={{
				targetValue: "$316.88",
				gap: "$9.25",
				percent: "2.91%"
			}}
			sparkline={{
				seriesConfig: {
					mySpark: { x: 'timeStamp', y: 'y0', type: 'area' }
				},
				seriesData: [
					{ timeStamp: 1501843274096, y0: 282.67 },
					{ timeStamp: 1511434701664, y0: 300.00 },
					{ timeStamp: 1521026129232, y0: 307.63 }
				]
			}}
			timestamp="27 Jan 2020"
		>
		</now-score-advanced>;
	}
	function getNowScoreBasic() {
		return <now-score-basic
			score="42"
			score-size="xl"
			heading="Ultimate Question to Life, the Universe, and Everything"
			heading-position="top"
			timestamp="12 October 1979"
		>
		</now-score-basic>
	}
	function getNowStepper() {
		return <now-stepper items={[{ "id": "step1", "label": "Name", "progress": "done" }, { "id": "step2", "label": "Address", "progress": "partial" }, { "id": "step3", "label": "Email" }, { "id": "step4", "label": "Phone", "disabled": true }]}></now-stepper>;
	}
	function getNowTextArea() {
		return <now-textarea messages={[]} resize="vertical"></now-textarea>;
	}
	function getDateRange() {
		return <div>
			<now-date-range-picker start="10-01-2005" end="11-03-2005" preset="custom " />
		</div>
	}
	function getRecordFormSectionConnected() {
		return <now-record-form-section-connected table="incident" sysId="552c48888c033300964f4932b03eb092"
			view="workspace" />
	}
	function getRadioGroup() {
		const options = [{ displayValue: 'Red', value: 'red' }, { displayValue: 'Red', value: 'blue' }];
		return (<div>
			<now-radio-group options={...options} />
		</div>);
	}
	function getNowRecordFieldConnected() {
		return <now-record-field-lookup-connected
			tableName="sys_user"
			fieldName="name"
			value="5137153cc611227c000bbd1bd8cd2005"
			displayValue="Abel Tutor" />;
	}
	function getNowRecordHTMLEditor() {
		return <now-record-html-editor
			label="Enter some HTMLs"
			value="<b>Hello</b> <i>World</i>"
		/>
	}
	function getNowRecordIPAddress() {
		return <now-record-ip-address
			label="I am label"
			value='12.34.56.12'
			placeholder={'10.1.11.111'}
		/>
	}
	function getNowRecordCommonMultiForm() {
		var options = {
			"table": "incident",
			"views": "workspace",
			"sysIds": ["552c48888c033300964f4932b03eb092", 'a83820b58f723300e7e16c7827bdeed2'],
			"workspaceConfigId": "7b24ceae5304130084acddeeff7b12a3"
		}
		return <sn-record-common-multi-form
			sysIds={options.sysIds} table={options.table} view={'workspace'} workspaceConfigId={options.workspaceConfigId}></sn-record-common-multi-form>
	}
	const config = createComponentConfig(
		getProperties(),
		getInitialState(),
		componentStyle, // content of "boot.css" will replaced by this
		{
			['CLICKED']: {},
			['TESTED']: {}
		},
		{
			["NOW_ALERT#ACTION_CLICKED"]: (args) => {

			},
		},
		[],
		(state, dispatch) => {
			return (
				<div>
					<div>
						{getNowRecordFieldConnected()}
					</div>
				</div>)
		});
	registerCustomElement('my-sample-component', config);
})();`}),define("eslintConfig",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i;(function(e){e[e.off=0]="off",e[e.warn=1]="warn",e[e.error=2]="error"})(i=t.ruleSetting||(t.ruleSetting={})),t.eslintConfig={parserOptions:{ecmaVersion:5,sourceType:"script",ecmaFeatures:{}},rules:{"constructor-super":2,"for-direction":2,"getter-return":2,"no-case-declarations":2,"no-class-assign":2,"no-compare-neg-zero":2,"no-cond-assign":2,"no-console":2,"no-const-assign":2,"no-constant-condition":2,"no-control-regex":2,"no-debugger":2,"no-delete-var":2,"no-dupe-args":2,"no-dupe-class-members":2,"no-dupe-keys":2,"no-duplicate-case":2,"no-empty":2,"no-empty-character-class":2,"no-empty-pattern":2,"no-ex-assign":2,"no-extra-boolean-cast":2,"no-extra-semi":2,"no-fallthrough":2,"no-func-assign":2,"no-global-assign":2,"no-inner-declarations":2,"no-invalid-regexp":2,"no-irregular-whitespace":2,"no-mixed-spaces-and-tabs":2,"no-new-symbol":2,"no-obj-calls":2,"no-octal":2,"no-redeclare":2,"no-regex-spaces":2,"no-self-assign":2,"no-sparse-arrays":2,"no-this-before-super":2,"no-unexpected-multiline":2,"no-unreachable":2,"no-unsafe-finally":2,"no-unsafe-negation":2,"no-unused-labels":2,"no-unused-vars":2,"no-useless-escape":2,"require-yield":2,"use-isnan":2,"valid-typeof":2,semi:2,"semi-spacing":2,"semi-style":2,eqeqeq:2,"eol-last":2,"default-case":2,"consistent-return":2,camelcase:2,"no-else-return":2,"no-eq-null":2,"no-eval":2,"no-extend-native":2,"no-extra-bind":2,"no-self-compare":2,"no-unused-expressions":2},env:{browser:!0}}}),define("siParser",["require","exports","eslintConfig","constants"],function(e,t,i,n){"use strict";function s(){let e=/\`(.*?)(\$\$\{[^\{]+(?=\})\})(.*?)\`/g;return e}function a(e,t){var i=f.declare+f.space+f.namespace+f.space+t+f.blockOpen+f.newline;return i+=e+f.newline+f.blockClose,i}function r(e,t){var i=f.interface+f.space+t+f.blockOpen+f.newline;return i+=e,i+=f.newline+f.blockClose,i}function o(e,t,n){function s(e){return!(e.type!=m.ExpressionStatement)&&!(e.expression.type!=m.AssignmentExpression)&&e.expression.left.property&&e.expression.left.property.name==P}var a=l(e,t,n,!1),r=n.split(".");n=r[r.length-1];for(var o=0,p;o<t.body.length;o++)if(p=t.body[o],p.type==m.VariableDeclaration){if(1==p.declarations.length&&p.declarations[0].id.name!=n){t.body[o]=null;continue}for(var d=0;d<p.declarations.length;d++)p.declarations[d].id.name!=n&&(p.declarations[d]=null)}else if(p.type==m.FunctionDeclaration){if(p.id.name!=n){t.body[o]=null;continue}}else if(s(p))p.expression.left.object.name!=n&&(t.body[o]=null);else if(p.type==m.ExpressionStatement&&p.expression&&p.expression.type==m.CallExpression){if(p.expression.callee&&p.expression.callee.object&&"gs"==p.expression.callee.object.name&&"include"==p.expression.callee.property.name){t.body[o]=null;continue}}else if(p.type==m.ExpressionStatement&&p.expression.type==m.AssignmentExpression){if(p.expression.left.type==m.Identifier&&p.expression.left.name==n)continue;if(p.expression.left.type!=m.MemberExpression){t.body[o]=null;continue}if(p.expression.left.object&&p.expression.left.object.name!=n){t.body[o]=null;continue}}}function l(e,t,n,s=!1){function a(e){if(!s)return{fieldType:f.any,paramTypes:{},returnType:f.any};e="/*"+e+"*/";let t=f.any,i=f.any,n;var a={};let r=e.split("\n"),o=r.map(e=>e.trim());if(n=L.parse(o.join("\n")),0<n.length){var l=n[0];for(let e of l.tags){if(!e.type)continue;if(0==e.type.length)continue;let n=e.tag;"param"==n?a[e.name]=e.optional?"?: "+e.type:": "+e.type:"returns"==n||"return"==n?i=e.type:"type"==n&&!!e.type&&(t=e.type)}}return{fieldType:t,paramTypes:a,returnType:i}}function r(e){let t=[];for(let n=0,i;n<e.length;n++){if(i=e[n],i.type!=m.ExpressionStatement)continue;if(!i.expression)continue;if(i.expression.type!=m.AssignmentExpression)continue;if("="!=i.expression.operator)continue;if(!i.expression.left)continue;if(i.expression.left.type!=m.MemberExpression)continue;if(!i.expression.left.object)continue;if(i.expression.left.object.type!=m.ThisExpression)continue;let r={fieldType:f.any,paramTypes:{},returnType:f.any};if(s&&!!i.leadingComments&&0<i.leadingComments.length){let e=i.leadingComments[0].value;r=a(e)}let o="",l=f.any;i.expression.left.property.type==m.Identifier?(o=i.expression.left.property.name,i.expression.right.type==m.Literal&&(l=typeof i.expression.right.value)):i.expression.left.property.type==m.Literal&&(o=i.expression.left.property.value,i.expression.right.type==m.Literal&&(l=typeof i.expression.right.value)),s&&r.fieldType!=f.any&&(l=r.fieldType);let p={name:o,value:l};t.push(p)}return t}var o="",l=new I(e,n),p={getMetaInfo:function(){return l},getSimpleName(){var e=n.split(".");return 0==e.length?"":e[e.length-1]},isSingleFunctionExported:function(e,t,i){return!(e.type!=i||1!=t.body.length)||this.isAnonymousTypeExported(e,t,m.FunctionExpression)},isAnonymousTypeExported:function(e,t,i){var s=n.split("."),a=s[s.length-1];return!(e.type!=m.VariableDeclaration&&e.type!=m.ExpressionStatement||e.type!=m.ExpressionStatement||e.expression.type!=m.AssignmentExpression||e.expression.left.type!=m.Identifier||e.expression.left.name!=a||e.expression.right.type!=i)},anonymousDeclaration:function(t,s,r){var p=r.split("."),d=p[p.length-1],c="";if(t.type==m.VariableDeclaration||t.type==m.ExpressionStatement){if(t.type==m.ExpressionStatement&&t.expression.type==m.AssignmentExpression&&t.expression.left.type==m.Identifier&&t.expression.left.name==d){if(this.isAnonymousTypeExported(t,s,m.CallExpression)){o=d;var u=this.getBaseClassInfo();return c=f.class+f.space+d,u.name&&(c+=f.space+f.extends+f.space+u.name,l.setBaseName(u.name)),c+=f.blockOpen+f.newline,c}if(this.isAnonymousTypeExported(t,s,m.ObjectExpression));else if(this.isAnonymousTypeExported(t,s,m.FunctionExpression)){console.log("anonymous function expression");var g=f.function+f.space+this.getSimpleName();let s=t.expression.right.params;var y=f.functionOpen;for(let e=0;e<s.length;e++)y+=s[e].name+f.colon+f.any,e!=s.length&&(y+=f.comma);return y+=f.functionClose,l=new E(e,n,y),f.function+f.space+this.getSimpleName()+y+f.semicolon}}}else if(this.isSingleFunctionExported(t,s,m.FunctionDeclaration)){let i={fieldType:f.any,paramType:{},returnType:f.any};if(t.leadingComments&&1==t.leadingComments.length){let e=t.leadingComments[0].value;i=a(e),i.paramTypes}for(var g=f.function+f.space+t.id.name,y=f.functionOpen,h=0;h<t.params.length;h++)y+=t.params[h].name,i.paramTypes&&i.paramTypes[t.params[h].name]&&(y+=i.paramTypes[t.params[h].name]),h!=t.params.length-1&&(y+=f.comma);return y+=f.functionClose,!i.returnType||i.returnType==f.any||(y+=f.colon+f.space+i.returnType),l=new E(e,n,y),g+=y,g+=f.semicolon,g}return""},isPrototype:function(e){return!(e.type!=m.ExpressionStatement)&&!(e.expression.type!=m.AssignmentExpression)&&!!e.expression.left.object&&!!(e.expression.left.object&&e.expression.left.object.name==o)&&!!(e.expression.left.property&&e.expression.left.property.name==P)},FunctionDeclaration:function(e){var t=this.getBaseClassInfo();if(!t.name)return o=e.id.name,f.class+f.space+e.id.name+f.space+f.blockOpen},VarialbeDeclarator:function(e){return o=e.id.name,f.class+f.space+e.id.name},getBaseClassInfo:function(){for(var e=0,n;e<t.body.length;e++)if(n=t.body[e],n&&this.isPrototype(n,null)){if(n.expression.right.type==m.ObjectExpression)return{name:void 0,properties:n.expression.right.properties};if(n.expression.right.type==m.CallExpression){var s=n.expression.right.arguments[0],a="";if(s.type==m.Identifier?a=s.name:s.type==m.MemberExpression&&(a=s.object.name+"."+s.property.name),!!a){let e=n.expression.right.arguments,t=[];2<=e.length&&e[1].properties&&(t=e[1].properties);let i=a.split(".");return 1<i.length&&i[1]==f.prototype_1&&(a=i[0]),{name:a,properties:t}}}break}return{}},isObjectDeclaration:function(e){if(!e)return!1;if(e.kind!=v.var)return e.type==m.ExpressionStatement&&e.expression.right&&e.expression.right.type&&e.expression.right.type==m.ObjectExpression;for(var t=0,n;t<e.declarations.length;t++)return n=e.declarations[0],n.init.type==m.ObjectExpression},VariableDeclaration:function(t){var s=t.kind==v.var,a=this.isObjectDeclaration(t);if(t.kind!=v.var&&!a)return void console.log("not defined");if(!s&&a){var o=this.formatObjectExpression(t.expression.right.properties,!0,!1);return o=f.var+f.space+t.expression.left.name+f.colon+f.space+o,o}for(var p=0,d;p<t.declarations.length;p++){if(d=t.declarations[0],d.init.type==m.ObjectExpression){var o=this.formatObjectExpression(d.init.properties,!0,!1);return l=new _(e,n,o),o=f.var+f.space+d.id.name+f.colon+f.space+o,o}var c=this.VarialbeDeclarator(t.declarations[p],t);c+=f.space;var u=this.getBaseClassInfo();return u.name&&(c+=f.extends+f.space+u.name+f.space,l.setBaseName(u.name)),c+=f.blockOpen,c}},ExpressionStatement:function(t,i){var s=t.expression;if(s.type==m.AssignmentExpression){var a=this.isAnonymousTypeExported(t,i,m.ObjectExpression),r=this.isAnonymousTypeExported(t,i,m.FunctionExpression);if(a){var o=this.formatObjectExpression(s.right.properties,!1,!1),p=f.blockOpen+f.newline;return p+=o+f.blockClose,l=new _(e,n,p),""}if(r);return this.MemberExpression(s,t)}},AssignmentExpression:function(){console.log("assignment expression")},FunctionExpression:function(e,t){if(!(e.left.property||e.left.name))return"";let n={};t&&t.leadingComments&&0<t.leadingComments.length&&(n=a(t.leadingComments[0].value));var s="";s=e.left.property?e.left.property.name:e.left.name,s+=f.functionOpen;for(var r=0;r<e.right.params.length;r++){let t=e.right.params[r].name,i=f.any;n.paramTypes&&n.paramTypes[t]?(i=n.paramTypes[t],s+=e.right.params[r].name+i):s+=e.right.params[r].name+f.colon+i,r!=e.right.params.length-1&&(s+=f.comma)}return s+=f.functionClose,n.returnType&&n.returnType!=f.any&&(s+=f.colon+n.returnType),s+=f.semicolon,s},MemberExpression:function(e,t){var i=e.left.object&&e.left.object.name===o,n=e.left.property&&e.left.property.name;let s={};t&&t.leadingComments&&0<t.leadingComments.length&&(s=a(t.leadingComments[0].value));var r="";i&&(r=f.static+f.space);var p=e.right.type==m.FunctionExpression;r+=p?this.FunctionExpression(e,t):n+f.colon;var d=f.any;if(e.right.type==m.Literal){var c=typeof e.right.value;c!=f.function&&(d=c),!s.fieldType||(d=s.fieldType)}else{if(e.right.type==m.ObjectExpression)return s.fieldType?d=s.fieldType:(d=this.formatObjectExpression(e.right.properties),!n&&(r=f.var+f.space+e.left.name+f.colon+f.space),d="{\n"+d+"}"),l.addField(n,d,i,!1),r+d+";\n";if(e.right.type==m.ArrayExpression)d="Array<any>";else{if(e.right.type==m.FunctionExpression){var u=e.right.params,g=f.functionOpen;for(let e=0;e<u.length;e++)g+=u[e].name,!s.paramTypes||!s.paramTypes[u[e].name]||(g+=s.paramTypes[u[e].name]),e!=u.length-1&&(g+=f.comma);return g+=f.functionClose,s.returnType&&s.returnType!=f.any&&(g+=f.colon+s.returnType),l.addField(n,g,!0,!0),console.log("static function found"),r}if(e.right.type==m.NewExpression||e.right.type==m.CallExpression){let e={};t&&t.leadingComments&&0<t.leadingComments.length&&(e=a(t.leadingComments[0].value)),!e.fieldType||(d=e.fieldType)}else console.log("Literal not found")}}return r+=d+f.semicolon,l.addField(n,d,i,!1),r},formatObjectExpression:function(e,t=!1,s=!1){if(!e)return"";for(var o=t?"{\n":"",p=0;p<e.length;p++){var d=e[p],c=d.key.name||d.key.value;let t=c;d.key.name?(o+=c,t=c):(o+=d.key.raw,t=d.key.raw);var u="initialize"==c&&s&&d.value.type==m.FunctionExpression,g="",y=f.any,h=!1,S={},T="",C=f.any;let i;if(d.leadingComments&&0!=d.leadingComments.length&&(i=a(d.leadingComments[0].value),C=i.fieldType,T=i.returnType,S=i.paramTypes),d.value.type==m.NewExpression||d.value.type==m.CallExpression)y=C,o+=f.colon+f.space+C;else if(d.value.type==m.Literal){let e=typeof d.value.value;y=e,o+=f.colon+f.space+e}else if(d.value.type==m.ObjectExpression){if(C==f.any){var b=this.formatObjectExpression(d.value.properties,!0);y=b,o+=f.colon+f.space+b}else y=C,o+=f.colon+f.space+C;}else if(d.value.type==m.FunctionExpression){h=!0;var _=d.value.params;for(let e=0,t;e<_.length;e++)t=_[e].name,g+=t,S[t]&&(g+=S[t]),e!=_.length-1&&(g+=f.comma);if(g=f.functionOpen+g+f.functionClose,(0<T.length&&T!=f.any||!s)&&(s?g+=f.colon+T:(g+=f.arrow,g+=T?T:f.any)),g=k[n+"."+c]||g,s?o+=g:(o+=f.colon+f.space,o+=g),u){l.setConstructor(g);let e=r(d.value.body.body);for(let t of e)l.addField(t.name,t.value,!s,!1)}y=g}else d.value.type==m.ArrayExpression?(o+=f.colon+f.space+"Array<any>",y="Array<any>",C!=f.any&&(y=C)):o+=f.colon+f.space+f.any;s?o+=f.semicolon:p!=e.length-1&&(o+=f.comma),s&&l.addField(t,y,!s,h),o+=f.newline,u&&s&&(o+="\nconstructor",o+=g,o+=";",o+=f.newline)}return t&&(o+=f.blockClose),o},prototypeExpression:function(){var e=this.getBaseClassInfo();return this.formatObjectExpression(e.properties,void 0,!0)}};return p}function p(e,t,n,s,a=!1){var p=n.split("."),d=p[p.length-1],c=s.parse(t,{attachComment:!0}),u=l(e,c,n,a),g="";o(e,c,n);var y=u.isObjectDeclaration(c.body[0]),h=!0,S=!1;let T;for(var C=0,b;C<c.body.length;C++)if(b=c.body[C],b){if("undefined"==typeof u[b.type]){console.log("not defined");continue}var _="";if(h&&(h=!1,_=u.anonymousDeclaration(b,c,n),S=u.isSingleFunctionExported(b,c,m.FunctionDeclaration),_)){g+=_;continue}_=u.isPrototype(b,null)?u.prototypeExpression(b,c):u[b.type](b,c),_&&(g+=_+f.newline)}return T=u.getMetaInfo(),0==g.length?console.log("empty came"):!y&&!S&&(g+=f.blockClose),{strFormat:g,metaInfo:T}}function d(e){var t="";for(var n in e){t+="declare namespace "+n+" {\n";for(var s=e[n],a="",r=0,o;r<s.length;r++)o=s[r],t+=o.declaration,t+="\n";t+="}\n",t+=a+f.newline}return t}function c(e,t,n={},s=!1){let a=[];var r={},o=[],l=[];({})["global.StorageDataSize"]=!0;for(var c=0,u;c<e.length;c++)if(u=new S(e[c]),!n[u.sys_id]&&(u.api_name=u.api_name.trim(),!(0<=g[u.api_name]))){console.log("parsing "+u.api_name);var m="",f=u.api_name.split(".");r[f[0]]||(r[f[0]]=[]);var y=r[f[0]];try{let e=p(u,u.script,u.api_name,t,s||!!u.jsdoc);m=e.strFormat,e.metaInfo.setAccessType(u.access),e.metaInfo.setSysId(u.sys_id),a.push(e.metaInfo),m||(l.push(u.api_name),console.log("Empty declaration => "+u.api_name)),y.push(new A(u.api_name,u.sys_scope.value,m,u.access,u.sys_id))}catch(t){o.push(u.api_name),console.log(" parsing error for => "+u.api_name)}}d(r);var h=new F;for(let i of a)h.addType(i.exportToTS());return{getFormat:function(e=!1){return e?h.exportJSON():h.emit()},getParsingErrors:function(){return o},getEmptyDeclarations:function(){return l}}}Object.defineProperty(t,"__esModule",{value:!0}),i=__importStar(i);var u;(function(e){e.never="never",e["var"]="var",e.fun="fun",e.cls="cls"})(u=t.JSExportedTypes||(t.JSExportedTypes={}));var g;(function(e){e[e["global.Class"]=1]="global.Class",e[e["global.PrototypeServer"]=2]="global.PrototypeServer",e[e["global.CIIdentifier"]=3]="global.CIIdentifier",e[e["global.KBProperty"]=4]="global.KBProperty",e[e["global.KBUtils"]=5]="global.KBUtils",e[e["global.Workflow"]=6]="global.Workflow",e[e["global.StorageDataSize"]=7]="global.StorageDataSize",e[e["global.DevExHelpers"]=8]="global.DevExHelpers"})(g=t.BlockedSI||(t.BlockedSI={}));var m;(function(e){e.VariableDeclaration="VariableDeclaration",e.VariableDeclarator="VariableDeclarator",e.ExpressionStatement="ExpressionStatement",e.AssignmentExpression="AssignmentExpression",e.Literal="Literal",e.Identifier="Identifier",e.FunctionDeclaration="FunctionDeclaration",e.FunctionExpression="FunctionExpression",e.ObjectExpression="ObjectExpression",e.CallExpression="CallExpression",e.MemberExpression="MemberExpression",e.ArrayExpression="ArrayExpression",e.NewExpression="NewExpression",e.ThisExpression="ThisExpression"})(m=t.ExpressionType||(t.ExpressionType={}));var f;(function(e){e.namespace="namespace",e["import"]="import",e["export"]="export",e["class"]="class",e["interface"]="interface",e.space=" ",e.startString="\"",e.endString="\"",e["new"]="new",e.prototype_1="prototype",e.newline="\n",e.tab="\t",e.blockOpen="{",e.blockClose="}",e["static"]="static",e.colon=":",e.semicolon=";",e.any="any",e.boolean="boolean",e.number="number",e.object="object",e.string="string",e.undefined="undefined",e["function"]="function",e.functionOpen="(",e.functionClose=")",e.comma=",",e.dot=".",e["extends"]="extends",e["implements"]="implements",e.constructor="new",e.typeAdd="Constructor",e["var"]="var",e.equal="=",e.declare="declare",e["const"]="const",e.arrow="=>"})(f=t.TokenType||(t.TokenType={}));var y;(function(e){e["public"]="public",e.package_private="package_private"})(y=t.SIAccessType||(t.SIAccessType={}));var h;(function(e){e.read="read",e["protected"]="protected",e.nil=""})(h=t.SISysPolicy||(t.SISysPolicy={}));t.ERROR_MSG=`Errors in the source files, use 'F8' or 'shift + F8' to navigate errors in editor`,t.getDotWalkingRegExp=s;class S{constructor(e,t=!1){this.isNewRecord=t,this.access=y.public,this.active=!1,this.jsdoc=!1,this.api_name="global",this.client_callable=!1,this.description="",this.name="",this.script="",this.script_type="",this.sys_class_name="",this.sys_updated_by="",this.sys_created_on="",this.sys_id="",this.sys_mod_count=0,this.sys_name="",this.sys_package={link:"",value:""},this.sys_policy=h.nil,this.sys_scope={link:"",value:""},this.sys_tags="",this.sys_update_name="",this.sys_created_by="",this.sys_updated_on="",this.tsscript="",this.typedeclaration="",this.typesourcemap="",this.parseReturnType=!0,this.isDirty=!1,this.parseReturnType=!0,!e||(!e.tsscript&&(e.tsscript=e.script),this.copy(e)),0==this.sys_id.length&&(this.sys_id="yln")}canPlaceBreakPoints(){return!this.isNewRecord}isGlobalScope(){return"global"==this.getScopeAndAPIMap().scope}static convertToJSConstructor(e){if(e.isJavascript()){var t=e.tsscript.split("\n"),i=e.getScopeAndAPIMap(),n=t.findIndex(e=>{if(0>e.indexOf("Class.create()"))return!1;let t=e.split(" "),n=t.filter(e=>0<e.trim().length);return 4==n.length&&(n=n.map(e=>e.trim()),"var"==n[0]&&n[1]==i.name&&"="==n[2]&&"Class.create();"==n[3])});-1==n||(S.isClsFound=!0,t[n]=`function ${i.name}() { }`,e.tsscript=e.script=t.join("\n"))}}static getClassConstructorFormat(e){if(e.isTypescript())return e.script;if(window.recordConfig.isES6)return e.script;if(!S.isClsFound)return e.tsscript;var t=e.getScopeAndAPIMap(),i=e.tsscript.split("\n"),n=i.findIndex(e=>!!e.trim().startsWith(`function ${t.name}() { }`));return-1==n?e.tsscript:(i[n]=`var ${t.name} = Class.create();`,i.join("\n"))}getScopeAndAPIMap(){var e=this.api_name.split("."),t=e[0],i=2==e.length?e[1]:"";return{scope:t,name:i}}isTypescriptWithJSStyle(){return!1}isJavascript(){return 0==this.script_type.length||"javascript"==this.script_type||"js"==this.script_type}isTypescript(){return"typescript"==this.script_type||"ts"==this.script_type}updateScriptType(e){if("string"==typeof e&&0!==e.length){const t=e.split(".");2!==t.length||("ts"===t[1]?this.script_type=n.LangType.typescript:this.script_type=n.LangType.javascript)}}containsTemplateExpression(){var e=s();return e.test(this.tsscript)}generateCurrentSIDeclaration(e,t=!1){if(this.isTypescript())return"";var i=this.generateDeclaration(e,t),n=i.getFormat(!0),s=JSON.parse(n),o=this.api_name.split("."),l=o[0],p=o[1],d="\""+p+"\":"+this.api_name+"Constructor",c=r(d,"JSTypes"),u=a(s[l][0].typeFormat+"\n"+s[l][0].aliasFormat,l);return u+"\n"+c}formatCurrentSITSFormat(e){let t=this.api_name.split(".");var i=a(e.tf+"\n\n"+e.af,t[0]);return i}generateDeclaration(e,t=!1){return this.canGenerateDeclaration()||new Error("declaration is not possible"),c([this],e,{},t)}updateTSScript(e){this.tsscript=e}updateScript(e){this.script=e}updateDeclaration(e){this.typedeclaration=e}updateJSDoc(e){this.jsdoc=e}updateSourcemap(e){this.typesourcemap=e}isUpToDate(){return!this.isDirty}setDirtyState(e){this.isDirty=e}canGenerateDeclaration(){if(this.isNew())return console.log("generating declaration without apiname not possible"),!1;if(this.isTypescript())return console.log("generating typescript is automatic"),!1;if(0==this.script.length)return console.log("declaration not possible for empty script"),!1;if(0==this.api_name.length)return!1;var e=this.api_name.split(".");return!(2!=e.length)}isNew(){return"undefined"==typeof window?!("global"!=this.api_name)||0!=this.api_name.length&&0==this.sys_id.length:window.recordConfig.isNewRecord}formatForAddLib(e,t){t=t||e.api.split(".")[0];var i={};i[t]=[e];var n=new N(i);return n.emit(t)}updateAPIName(e){return 0==e.length?console.log("API name should not be empty"):void(this.api_name=e)}updateSysId(e){this.sys_id=e}updateAccessType(e){this.access=e}updateLangType(e){this.script_type=e?e:"javascript"}emitTSDeclaration(e="",t=0){var i=/declare class/gi,n=/declare function/gi,s=/declare enum/gi,a=/declare var/gi,r=/declare const/gi,o=/declare type/gi,l=/declare namespace/gi,p=0<=e.search(i),d=0<=e.search(n),c=0<=e.search(s),g=0<=e.search(a);e=e.replace(i,f.class),e=e.replace(n,f.function),e=e.replace(s,"enum"),e=e.replace(a,"var"),e=e.replace(r,"const"),e=e.replace(o,"type"),e=e.replace(l,"namespace"),e=e.replace("/// <reference types=\"snlib\" />","");var m="",y=this.getScopeAndAPIMap(),h=y.scope,S=y.name||"Point";m=this.isNew()?this.api_name+"_"+S+"":this.api_name.replace(".","_")+"";let T=f.export+f.space+f.import+f.space+S+f.space+f.equal;T+=f.space+h+f.dot+m+f.dot+S+f.semicolon;let b=f.import+f.space+S+f.space+f.equal;b+=f.space+h+f.dot+m+f.dot+S+f.semicolon,b="";var _=f.namespace+f.space+m+f.space+f.blockOpen+f.newline;_+=e+f.newline+f.blockClose+f.newline;var E=new C(S,this.sys_id,_,T,b,this.access,u.cls,0),I={api:S,id:this.sys_id,f:t,tf:_};return C.updateFlags(I,this,u.cls),I}static fromSIRec(e){var t=new S(void 0,!1);for(let i in e)t[i]=e[i].value;t.active="1"==e.active.value,t.jsdoc=window.recordConfig.useTypeChecker;var i=new S(void 0,window.recordConfig.isNewRecord);return i.copy(t),i}copy(e){this.parseReturnType=e.parseReturnType,this.access=e.access,this.active="true"==e.active+"",this.api_name=e.api_name,this.jsdoc="true"==e.jsdoc+"",this.client_callable="true"==e.client_callable+"",this.description=e.description,this.name=e.name,this.script=e.script,this.script_type=!e.script_type?"javascript":e.script_type,this.sys_class_name=e.sys_class_name,this.sys_updated_by=e.sys_updated_by,this.sys_created_on=e.sys_created_on,this.sys_id=e.sys_id,this.sys_mod_count=parseInt(e.sys_mod_count+""),this.sys_name=e.sys_name,this.sys_package=e.sys_package,this.sys_policy=e.sys_policy,this.sys_scope=e.sys_scope,this.sys_tags=e.sys_tags,this.sys_update_name=e.sys_update_name,this.sys_created_by=e.sys_created_by,this.sys_updated_on=e.sys_updated_by,this.sys_updated_on=e.sys_updated_on,this.typedeclaration=!e.typedeclaration?"":e.typedeclaration,this.typesourcemap=!e.typesourcemap?"":e.typesourcemap,this.tsscript=e.tsscript}}t.ClientSIRecordData=S,S.isClsFound=!1;var T;(function(e){e[e["public"]=2]="public",e[e.cls=4]="cls",e[e.fun=8]="fun",e[e.obj=16]="obj",e[e.blocked=32]="blocked",e[e.ts=64]="ts",e[e.jsES6=128]="jsES6"})(T||(T={}));class C{constructor(e,t,i,n,s,a,r,o,l,p){this.api=e,this.id=t,this.tf=i,this.af=n,this.gf=s,this.accessType=a,this.internalType=r,this.f=o,this.td=l,this.sp=p}static expandMinifiedFormat(e,t,i=!1){function n(i){var n=i.f.endsWith(";")?"":";";i.l=i.l||0;var s=`/**
					 * @see http://${t}.${e.api}/${i.l}
					 */
					${i.f}${n}
					`;return s}if(e instanceof C)return e;if(0==e.f&&!i)return null;if(0==e.f)return null;if(i=C.isTypescript(e.f)||C.isES6(e.f),e.df&&!i)if(C.isObject(e.f)){let t="";e.df.forEach(e=>Array.isArray(e)?void console.warn("invalid syntax found"):void(t+=n(e))),e.tf=t}else if((C.isClass(e.f)||this.isFunction(e.f))&&Array.isArray(e.df)&&2==e.df.length){let t=e.df[0],i=e.df[1],s="",a="";t.forEach(e=>{s+=n(e)}),i.forEach(e=>{a+=n(e)}),e.tf=[s,a]}let s=`/** @see http://${t}.${e.api}/1 */
		const ${e.api}: ${e.api}Constructor`,a=`/** @see http://${t}.${e.api}/1 */
		declare const ${e.api}: ${t}.${e.api}Constructor`;if(i)return s=`/** @see http://${t}.${e.api}/1 */
			export import ${e.api} = ${t}.${t}_${e.api}.${e.api}`,a="",e.f|=T.cls,e.af=s,e.gf=a,Array.isArray(e.tf)?e.tf=e.tf[0]:"string"!=typeof e.tf&&(e.tf=""),e;if(C.isObject(e.f))return e.df&&(e.tf=`{
					${e.tf}
				}`),e.tf=`interface ${e.api} ${e.tf}`,e.af=`const ${e.api}: ${e.api}`,e.gf=`declare const ${e.api}: ${t}.${e.api}`,e;if(C.isClass(e.f)||C.isFunction(e.f)){if(!Array.isArray(e.tf))return null;if(C.isClass(e.f)&&2!=e.tf.length)return null;if((C.isClass(e.f)&&!e.sp||C.isFunction(e.f))&&(C.isFunction(e.f)?e.tf=`interface ${e.api}Constructor {
						${e.tf[1]}
					}`:e.tf=`interface ${e.api} {
						${e.tf[0]}
					}
					interface ${e.api}Constructor {
						${e.tf[1]}
					}`),C.isClass(e.f)&&"string"==typeof e.sp){let i=e.sp,n=e.sp.split(".");1==n.length&&(i=`${t}.${e.api}`),e.tf=`interface ${e.api} extends ${i} {
					${e.tf[0]}
				}
				interface ${e.api}Constructor {
					${e.tf[1]}
				}`}return e.af=s,e.gf=a,e}return e.af=s,e.gf=a,e.tf="",e}static expandMinifiedFormat_1(e,t,i=!1){if(e instanceof C)return e;if(0==e.f&&!i)return null;if(0==e.f)return null;i=C.isTypescript(e.f);let n=`const ${e.api}: ${e.api}Constructor`,s=`declare const ${e.api}: ${t}.${e.api}Constructor`;if(i)return n=`export import ${e.api} = ${t}.${t}_${e.api}.${e.api}`,s="",e.f|=T.cls,e.af=n,e.gf=s,Array.isArray(e.tf)?e.tf=e.tf[0]:"string"!=typeof e.tf&&(e.tf=""),e;if(C.isObject(e.f))return e.tf=`interface ${e.api} ${e.tf}`,e.af=`const ${e.api}: ${e.api}`,e.gf=`declare const ${e.api}: ${t}.${e.api}`,e;if(C.isClass(e.f)||C.isFunction(e.f)){if(!Array.isArray(e.tf))return null;if(C.isClass(e.f)&&2!=e.tf.length)return null;if((C.isClass(e.f)&&!e.sp||C.isFunction(e.f))&&(C.isFunction(e.f)?e.tf=`interface ${e.api}Constructor {
						${e.tf[1]}
					}`:e.tf=`interface ${e.api} {
						${e.tf[0]}
					}
					interface ${e.api}Constructor {
						${e.tf[1]}
					}`),C.isClass(e.f)&&"string"==typeof e.sp){let i=e.sp,n=e.sp.split(".");1==n.length&&(i=`${t}.${e.api}`),e.tf=`interface ${e.api} extends ${i} {
					${e.tf[0]}
				}
				interface ${e.api}Constructor {
					${e.tf[1]}
				}`}return e.af=n,e.gf=s,e}return e.af=n,e.gf=s,e.tf="",e}static updateFlags(e,t,i){let n=e.f||0;t.access==y.public&&(n|=T.public),t.isTypescript()&&(n|=T.ts),C.isES6(n)&&(n|=T.ts,n|=T.jsES6),i==u.cls?n|=T.cls:i==u.var?n|=T.obj:i==u.fun&&(n|=T.fun),e.f=n}static updateFlagsMinifiy(e,t,i){let n=e.f||0;t.access==y.public&&(n|=T.public),t.isTypescript()&&(n|=T.ts),i==u.cls?n|=T.cls:i==u.var?n|=T.obj:i==u.fun&&(n|=T.fun),e.f=n}static isTypescript(e){return(e&T.ts)==T.ts}static isES6(e=0){return(e&T.jsES6)===T.jsES6}static isPublic(e){return(e&T.public)==T.public}static isClass(e){return(e&T.cls)==T.cls}static isFunction(e){return(e&T.fun)==T.fun}static isObject(e){return(e&T.obj)==T.obj}static isBlocked(e){return(e&T.blocked)==T.blocked}}t.SITSFormat=C;class b{constructor(e,t,i="",n=""){this.currentSI=e,this.apiName=t,this.accessType=i,this.sysId=n,this.apiName=t.trim(),this.accessType="",this.sysId=""}getJSName(){if(!this.apiName)return{};var e=this.apiName.split("."),t="",i="";return 1==e.length?t=e[0]:2==e.length&&(i=e[0],t=e[1]),{name:t,scopeName:i}}getInternalType(){return u.never}setAccessType(e){this.accessType=e}setSysId(e){this.sysId=e}exportAliasName(e){var t=f.const+f.space+this.getJSName().name+f.space+f.colon+f.space+this.apiName+f.typeAdd+f.semicolon;return e?t:f.declare+f.space+t}}t.TypeData=b;class _ extends b{constructor(e,t,i){super(e,t),this.apiName=t,this.format=i,this.format=i}getTempInterfaceName(){return this.apiName}toInternalFormat(){var e=this.getJSName().name,t=this.getTempInterfaceName(),i=t.split(".");t=i[i.length-1];var n=f.interface+f.space+t+this.format;return n}exportToTS(){var e=new C(this.apiName,this.sysId,this.toInternalFormat(),this.exportAliasName(!0),this.exportAliasName(!1),this.accessType,this.getInternalType(),0);return C.updateFlags(e,this.currentSI,this.getInternalType()),e}getInternalType(){return u.var}exportAliasName(e){var t=this.getJSName(),i=f.const+f.space;return i+=t.name+f.colon+this.getTempInterfaceName()+f.semicolon,e?i:f.declare+f.space+i}}t.TypeVarData=_;class E extends b{constructor(e,t,i,n=!1){super(e,t),this.apiName=t,this.format=i,this.format=i}getTypeFormat(){var e=this.getJSName();return f.function+f.space+e.name+this.format+f.semicolon}exportToTS(){let e=this.getJSName(),t=this.getTypeFormat(),i=new C(this.apiName,this.sysId,"",this.exportAliasName(!0),this.exportAliasName(!1),this.accessType,this.getInternalType(),0);return C.updateFlags(i,this.currentSI,this.getInternalType()),i}getInternalType(){return u.fun}exportAliasName(e){return e?this.getTypeFormat():f.declare+f.space+this.getTypeFormat()}}t.TypeFunctionData=E;class I extends b{constructor(e,t,i="",n=""){super(e,t),this.apiName=t,this.baseName=i,this.constructorFormat=n,this.fields=[],this.baseName=""}setBaseName(e){this.baseName=e}setConstructor(e){this.constructorFormat=e}addField(e,t,i,n){let s=!1;this.fields.every(t=>t.key!=e||t.isStatic!=i||(s=!0,!1));s||this.fields.push({key:e,value:t,isStatic:i,isMemberFunction:n})}getFieldFormat(){for(var e="",t="",n=0;n<this.fields.length;n++){let i=this.fields[n],s=i.key;i.isMemberFunction||(s+=f.colon+f.space),s+=i.value+f.semicolon,s+=f.newline,i.isStatic?t+=s:e+=s}return{staticFields:t,memberFields:e}}getStaticTypeFormat(){var e=this.getJSName(),t=f.interface+f.space+e.name+f.typeAdd+f.space+f.blockOpen+f.newline,i=this.getFieldFormat().staticFields;return this.constructorFormat||(this.constructorFormat=f.functionOpen+f.functionClose),t+=f.new+this.constructorFormat+f.colon+this.getJSName().name+f.semicolon,t+=f.newline+f.prototype_1+f.colon+f.space+e.name+f.semicolon,t+=f.newline+i,t+=f.newline+f.blockClose,t}getMemberTypeFormat(){var e=f.interface+f.space,t=this.getJSName();e+=t.name,this.baseName&&(e+=f.space+f.extends+f.space+this.baseName),e+=f.space+f.blockOpen+f.newline;var i=this.getFieldFormat().memberFields;return e+=i,e=e.trim(),e+=f.newline+f.blockClose,e+=f.newline,e}exportToTS(){var e=this.getMemberTypeFormat()+f.newline+this.getStaticTypeFormat();let t=new C(this.apiName,this.sysId,e,this.exportAliasName(!0),this.exportAliasName(!1),this.accessType,this.getInternalType(),0);return C.updateFlags(t,this.currentSI,this.getInternalType()),t}getInternalType(){return u.cls}exportAliasName(e){if("global.JSON"==this.apiName)return"";var t=f.const+f.space+this.getJSName().name+f.space+f.colon+f.space+this.apiName+f.typeAdd+f.semicolon;return e?t:f.declare+f.space+t}}t.TypeClassData=I;class A{constructor(e,t,i,n,s,a=""){this.apiName=e,this.scope=t,this.declaration=i,this.accessType=n,this.sysId=s,this.aliasFormat=a}}t.TSClassDefinitionFormat=A,t.wrapInNamespace=a,t.wrapInInterface=r;var x={"global.XMLDocument":!0,"global.JSON":!0};class N{constructor(e={},t=!1){this.siJSData=e,this.emitForVSCode=t}emit(e,t={}){let i="",n="",s={};for(let i in this.siJSData)for(let e of this.siJSData[i])if(e.sp){var r=e.sp.split(".");if(1==r.length){s[i]=s[i]||{},s[i][e.sp]=!0;continue}s[r[0]]=s[r[0]]||{},s[r[0]][r[1]]=!0}for(let r in this.siJSData){let o="",l=e==r||this.emitForVSCode,p="",d="";for(let e of this.siJSData[r]){if(!e.f){console.warn("skipping declaration for => "+e.api);continue}if(t[e.id])continue;let i=this.emitForVSCode||C.isPublic(e.f);(l||i||s[r]&&s[r][e.api])&&(o+=e.tf+f.newline),(i||l&&!i)&&"string"==typeof e.af&&0!=e.af.length&&(p+=e.af+f.semicolon+f.newline),l&&!x[r+"."+e.api]&&"string"==typeof e.gf&&(d+=e.gf+f.semicolon+f.newline)}0<p.length&&(o+=f.newline+p.trim()),0<d.length&&(n+=d.trim()+f.newline);let c=a(o,r)+f.newline;i+=c}return i.trim()+f.newline+n.trim()}getSysIdMap(){let e={};for(var t in this.siJSData){let n=this.siJSData[t];for(let t=0;t<n.length;t++)e[n[t].id]=n[t]}return e}}t.DefinitionEmittor=N;class F extends N{constructor(e={}){super(e,!0),this.siJSData=e,this.interfaceFormat={},this.aliasFormat={},this.globalAliasFormat={},this.typeMapFormat={},this.allJSTypes={},this.scopeTypes={}}exportJSON(){return JSON.stringify(this.siJSData)}addType(e){var t=e.api.split("."),i=t[0];this.siJSData[i]=this.siJSData[i]||[],this.siJSData[i].push(e)}emit(){return super.emit("")}}t.DefinitionEmittorForVSCode=F;const v={var:"var"},P="prototype";t.stripPrivateTypes=o,t.getEmittor=l,t.emitDeclarationForScope=d,t.parseSI=c;var L;(function(e){function t(e){var t=0;do if(" "!==e[t])return t;while(++t<e.length);return t}function i(...e){for(var t={},n=Array.prototype.slice.call(arguments),s=0,a=n.length,r,o;s<a;s++)for(r in o=n[s],o)o.hasOwnProperty(r)&&(t[r]=o[r]);return t}function n(e,t){for(var n=e.length,s=!0,a;n--;){for(a in t)t.hasOwnProperty(a)&&(s=t[a]===e[n][a]&&s);if(s)return e[n]}return null}function s(e,t){if("string"!=typeof e||"@"!==e[0])return null;var n=t.reduce(function(e,t){var n;try{n=t(e.source,i({},e.data))}catch(i){e.data.errors=(e.data.errors||[]).concat(t.name+": "+i.message)}return n&&(e.source=e.source.slice(n.source.length),e.data=i(e.data,n.data)),e},{source:e,data:{}}).data;return n.optional=!!n.optional,n.optional&&!!n.type&&(n.type=n.type.substring(0,n.type.length-1)),n.type=void 0===n.type?"":n.type,n.name=void 0===n.name?"":n.name,n.description=void 0===n.description?"":n.description,n}function a(e,t){var i=t.trim?function(e){return e.trim()}:function(e){return e},a=e.map(function(e){return i(e.source)}).join("\n");a=i(a);var r=e[0].number;e=e.reduce(function(e,n){if(n.source=i(n.source),n.source.match(/^\s*@(\w+)/))e.push({source:[n.source],line:n.number});else{var s=e[e.length-1];if(void 0!==t.join&&!1!==t.join&&0!==t.join&&!n.startWithStar&&0<s.source.length){var a;a="string"==typeof t.join?t.join+n.source.replace(/^\s+/,""):"number"==typeof t.join?n.source:" "+n.source.replace(/^\s+/,""),s.source[s.source.length-1]+=a}else s.source.push(n.source)}return e},[{source:[]}]).map(function(e){return e.source=i(e.source.join("\n")),e});var o=e.shift();if(""===o.source&&0===e.length)return null;var l=e.reduce(function(e,i){var a=s(i.source,t.parsers);if(!a)return e;if(a.line=i.line,a.source=i.source,t.dotted_names&&-1!==a.name.indexOf(".")){for(var r=e,o=a.name.split("."),l,p;1<o.length;)l=o.shift(),p=n(r,{tag:a.tag,name:l}),p||(p={tag:a.tag,line:+a.line,name:l,type:"",description:""},r.push(p)),p.tags=p.tags||[],r=p.tags;return a.name=o[0],r.push(a),e}return e.concat(a)},[]);return{tags:l,line:r,description:o.source,source:a}}function r(e){var t=0,n=0,s;return e=i({},{trim:!0,dotted_names:!1,parsers:[o.parse_tag,o.parse_type,o.parse_name,o.parse_description]},e||{}),function(i){var r=i.indexOf("/**"),o=i.indexOf("*/"),l;if(-1!==r&&i.indexOf("/***")!==r&&(s=[],t=r+3),s){var p=t,d=!1,c=i.match(/\S/);0<s.length&&c&&("*"===c[0]?(p=c.index+2,d=!0):c.index<t&&(p=c.index)),s.push({number:n,startWithStar:d,source:i.slice(p,-1===o?i.length:o)}),-1!==o&&(l=a(s,e),s=null,t=0)}return n+=1,l}}var o={parse_tag:function(e){var t=e.match(/^\s*@(\S+)/);if(!t)throw new Error("Invalid `@tag`, missing @ symbol");return{source:t[0],data:{tag:t[1]}}},parse_type:function(e,i){if(i.errors&&i.errors.length)return null;var n=t(e),s="",a=0;if("{"!==e[n])return null;for(;n<e.length&&(a+="{"===e[n]?1:"}"===e[n]?-1:0,s+=e[n],n++,0!==a););if(0!==a)throw new Error("Invalid `{type}`, unpaired curlies");return{source:e.slice(0,n),data:{type:s.slice(1,-1)}}},parse_name:function(e,i){if(i.errors&&i.errors.length)return null;for(var n=t(e),s="",a=0;n<e.length&&(a+="["===e[n]?1:"]"===e[n]?-1:0,s+=e[n],n++,!(0===a&&/\s/.test(e[n]))););if(0!==a)throw new Error("Invalid `name`, unpaired brackets");var r={name:s,optional:!1,default:""};if(/=$/.test(i.type)&&(r.optional=!0),"["===s[0]&&"]"===s[s.length-1]&&(r.optional=!0,s=s.slice(1,-1),-1!==s.indexOf("="))){var o=s.split("=");s=o[0],r.default=o[1].replace(/^(["'])(.+)(\1)$/,"$2")}return r.name=s,{source:e.slice(0,n),data:r}},parse_description:function(e,t){if(t.errors&&t.errors.length)return null;var i=e.match(/^\s+((.|\s)+)?/);return i?{source:i[0],data:{description:void 0===i[1]?"":i[1]}}:null}};e.parse=function(e,t){for(var n=[],s=r(t),a=e.split(/\n/),o=0,p=a.length,l;o<p;o++)l=s(a.shift()),l&&n.push(l);return n}})(L||(L={}));const k={"global.PwdEmailNotificationManager._sendCodeToDevices":"(devices, code, userSysId?: string)","global.OCDHTMLXCalendarFormatter.initialize":"(groupEvents?: any)","global.OCRotationV2.initialize":"(schedulePage, formatter?: any)","global.WorkflowIconsSCR.initialize":"(ref?: any)","global.KnowledgeTypeDefaultsAjax.getValue":"(ge?: any)","global.SchedulePriorityECCJob.initialize":"(label?: any, document?: any, script?: any)","global.ClientTestRunnerBrowserInfo.initialize":"(browserName, version, osName, osVersion?: any)","global.PwdSMSNotificationManager._sendCodeToDevices":"(devices, code, userSysId?: string)","global.KBViewModelSNC.getKnowledgeRecord":"(query?: any, value?: any, stopWorkflow?: any)","global.KBMyKnowledgeSNC.initialize":"(type?: any, windowStart?: any)","global.sc_ic_RequestedItem.initialize":"(_gr, _gs, _workflow?: any)","global.StdChangeUtilsSNC.getValue":"(property?: any)","sn_schedule_pages.CMNScheduleRESTWrapper.getEvents":"(params?: any)","sn_schedule_pages.CMNScheduleRESTWrapper.updateEvent":"(params?: any)","sn_comm_management.CommunicationManagementChannelAbstractSNC.getConfig":"(sourceTable: string)"};var M;(function(e){e[e.typeDefs=0]="typeDefs",e[e.callback=1]="callback"})(M=t.JSDocTypes||(t.JSDocTypes={}));var D;(function(e){function n(e){function t(t,i,n){if("<"!=e[0]&&"("!=e[0])throw"Not a function";for(var s=-1,a=0,r=!1;t<e.length;t++)if(e[t]==i&&(-1==s&&(s=t),a++),e[t]==n&&(a--,0==a)){t++,r=!0;break}return{start:s,length:r?t-s:0}}var i={template:"",paramBody:"",returnType:""},n=t(0,"<",">"),s=0;0!=n.length&&(i.template=e.substr(n.start,n.length),s=1);var a=t(s,"(",")");if(0==a.length)throw"Not a arrow function";i.paramBody=e.substr(a.start,a.length);var r=a.start+a.length,o=e.substr(r).trim();if(0==o.indexOf("=>"))o=o.replace("=>","").trim();else throw"Not a function";return i.returnType=o,i}function a(e,t,i,n){return ts.typeToDisplayParts(e,t,i,n)}function r(e){let t="";for(let i in e){let n=c(e[i],i);0<n.decl.length&&(t+="\n"+n.decl+"\n")}return t}function o(e){w[e]=!0}function l(){w={}}function p(e){j[e]=!0}function d(e){return!!(j[e]||w[e])}function c(e,t){function i(e){var t="";for(var n in e)if("object"==typeof e[n]){let s=i(e[n]);t+="namespace "+n+" {\n"+s+"\n}\n"}else"string"==typeof e[n]&&(t+=e[n]);return t}var n={decl:""};if(!Array.isArray(e))return n;var s={};for(let n=0;n<e.length;n++)for(let i=0,d;i<e[n].length;i++){if(d=e[n][i],!d.name)continue;var a=d.name.split(".");let c="";var r=a.splice(a.length-1,1)[0];let u=d.type.trim();c=u.startsWith("{")?u.endsWith("[]")?`type ${r} = ${u}; \n\n`:"interface "+r+" "+u+"\n\n":`interface ${r} extends ${u} {}\n`,p(t+"."+r);for(var o=s,l=0;l<a.length;l++)o[a[l]]=o[a[l]]||{},"string"==typeof o[a[l]]&&(console.log("module is defined as type overriding the type with modue "),o[a[l]]={}),o=o[a[l]];o[r]=c}var d=i(s);return 0==d.length?n:(d=`declare namespace ${t} {
			${d}
		}`,n.decl=d,n)}function g(e,t="-1"){var n={};for(let s in e){n[s]||(n[s]=[]);for(let a=0;a<e[s].length;a++)Array.isArray(e[s][a].td)&&e[s][a].id!=t&&n[s].push(e[s][a].td)}return n}function m(e){var t=0,n=[],s=0;for(let t=0;t<e.length;t++)if(n.push(e[t]),"punctuation"==e[t].kind){if("{"==e[t].text){s++;continue}if("}"==e[t].text){s--;continue}if(0==s)continue;if(":"!=e[t].text&&"("!=e[t].text&&"<"!=e[t].text)continue;if("<"==e[t].text){if(1>t)continue;if("methodName"!=e[t-1].kind)continue}let i=n.length-2;for(;1<i;){let e=n[i].kind,t=n[i].text;if(("punctuation"!=e||"."!=t)&&"propertyName"!=e&&"localName"!=e&&"methodName"!=e){i++;break}i--}n.splice(i,n.length-i-2)}t=0;var a=n.filter(e=>0<t?(t--,!1):("keyword"==e.kind&&"typeof"==e.text?(t=2,e.text="any"):"functionName"==e.kind&&(e.text="Function"),!0)),r={kind:"type",text:""};return r=a.reduce((e,t)=>(e.text+=t.text,e),{text:"",kind:"type"}),r.text.endsWith("...")?"any":r.text}function f(e,t,s,p){function c(e){return{isOptional:!1,name:e.getName(),documentation:ts.displayPartsToString(e.getDocumentationComment(p)),type:p.typeToString(p.getTypeOfSymbolAtLocation(e,e.valueDeclaration),void 0,ts.TypeFormatFlags.UseFullyQualifiedType)}}function u(e,t=!1){var i=e.getTypeParameters(),n=[];null!=i&&i.forEach(e=>{let t=e.getSymbol();t&&n.push(t.getName())});var s=ts.TypeFormatFlags.UseFullyQualifiedType;s|=ts.TypeFormatFlags.WriteArrayAsGenericType,s|=ts.TypeFormatFlags.NoTruncation;let r="";if(!t){let t=a(p,e.getReturnType(),void 0,s);r=m(t)}var o=ts.displayPartsToString(e.getDocumentationComment(p)),l={line:0,character:0};return 0<o.length&&(l.doc=o),{lineInfo:l,parameters:e.parameters.map(c),returnType:r,documentation:o,typeParams:n}}function g(e){var t=I.getLineAndCharacterOfPosition(e.pos);return t.line+=1,t.character+=1,{line:t.line,character:t.character}}function f(t){function i(){return-1!=t.body.getText().indexOf("return this;")||!e.parseReturnType}function n(e){if(!(ts.isFunctionExpression(e)||ts.isFunctionDeclaration(e))){if(ts.isReturnStatement(e)){if(3!=e.getChildCount())return;let t=e.getChildAt(1);if(ts.isObjectLiteralExpression(t)){let e=h(t),i=new D("temp");i.setKeysType(e);let n=i.toTypeFormat();return void(-1==o.indexOf(n)&&o.push(n))}let i=!1;if(ts.isFunctionExpression(t)&&(i=!0),"this"==t.getText())return void o.push("this");let n=p.getTypeAtLocation(t),s=ts.TypeFormatFlags.UseTypeOfFunction|ts.TypeFormatFlags.NoTruncation|ts.TypeFormatFlags.UseFullyQualifiedType|ts.TypeFormatFlags.MultilineObjectLiterals,r=a(p,n,void 0,s),l=m(r);return"any"==l||0<=o.indexOf(l)?void 0:void(i?o.unshift(l):o.push(l))}e.forEachChild(n)}}var s=g(t),o=[],l=p.getTypeAtLocation(t).getCallSignatures().map(e=>u(e,i())),r=_(t);if(0<r.length&&(l[0].returnType=r),l[0].lineInfo=s,i()&&(l[0].returnType="this"),l[0].parameters.length>t.parameters.length&&l[0].parameters.splice(l[0].parameters.length-1,1),0<t.parameters.length){let e=0;t.parameters.forEach(t=>{l[0].parameters[e++].isOptional=p.isOptionalParameter(t)})}let d=ts.getJSDocReturnTag(t);var c=l[0].returnType;if("Function"==c||"any"==c)try{n(t.body);var f=o.join("|");"Function"==c&&(l[0].returnType=0<f.length?f:"void")}catch(e){console.log("Return type parsing error "+e)}else if("boolean"==c&&d){let e=ts.getJSDocReturnType(t);if(e){var y=e.getText().split(" ");if(3==y.length&&"is"==y[1]){let i=ts.TypeFormatFlags.UseTypeOfFunction|ts.TypeFormatFlags.NoTruncation|ts.TypeFormatFlags.UseFullyQualifiedType|ts.TypeFormatFlags.MultilineObjectLiterals,n=a(p,p.getTypeAtLocation(t),void 0,i),s=m(n),r=e.getText();s.endsWith(r)&&(l[0].returnType=r)}}}return l}function y(e){var t=[];let i=e.getChildren(s).find(ts.isBlock);if(!i)return t;let r=i.getChildren().find(e=>e.kind==ts.SyntaxKind.SyntaxList);if(!r)return t;let o=r.getChildren(s).filter(ts.isExpressionStatement);return o.forEach(e=>{let i=g(e),r=e.getChildren(s).find(ts.isBinaryExpression);if(!r)return t;let o=r.getChildren(),l=o.find(ts.isPropertyAccessExpression);if(!l)return t;let d=l.getChildren();if(d[0].kind!=ts.SyntaxKind.ThisKeyword)return t;let c=d[d.length-1],u=c.getText(),f=ts.TypeFormatFlags.UseTypeOfFunction|ts.TypeFormatFlags.NoTruncation|ts.TypeFormatFlags.UseFullyQualifiedType|ts.TypeFormatFlags.MultilineObjectLiterals,y=o[o.length-1];i=g(y);var h="";if(ts.isNumericLiteral(y))h="number";else if(ts.isStringLiteral(y))h="string";else if(ts.isLiteralTypeNode(y))h="number";else if(ts.SyntaxKind.FalseKeyword==y.kind||ts.SyntaxKind.TrueKeyword==y.kind)h="boolean";else if(ts.SyntaxKind.FirstLiteralToken==y.kind)h="number";else{h=p.typeToString(p.getTypeAtLocation(y),s,0);let e=a(p,p.getTypeAtLocation(y),void 0,ts.TypeFormatFlags.UseFullyQualifiedType),t=m(e);h!=t&&(h=t),"Function"==h&&(h="any")}var S=!1;try{var T=n(h);S=!0,t.push(new P(u,T.paramBody,T.returnType,T.template).setLineInfo(i))}catch(t){}S||t.push(new F(u,h).setLineInfo(i).setLineInfo(i))}),t}function h(e,t=!1){var i={};return e.properties.forEach(e=>{var r=e.name.getText(),o=e.getChildren(),l=o.find(ts.isIdentifier),d=o.find(ts.isFunctionExpression);if(t&&d&&"initialize"==r){let e=y(d);e.forEach(e=>{i[e.name]=e})}let c=o[o.length-1];var u="";let h=ts.isStringLiteral(o[0]),S=g(c);if(ts.isNumericLiteral(c))i[r]=new x(r,"number").setLineInfo(S);else if(ts.isStringLiteral(c))i[r]=new N(r,"string").setLineInfo(S);else if(d){let e=f(d),t=L.create(r,e[0]);i[r]=t}else{let t=ts.TypeFormatFlags.UseTypeOfFunction|ts.TypeFormatFlags.NoTruncation|ts.TypeFormatFlags.UseFullyQualifiedType|ts.TypeFormatFlags.MultilineObjectLiterals;u=p.typeToString(p.getTypeAtLocation(c),void 0,t);let o=p.typeToString(p.getTypeAtLocation(e),s,t);u!=o&&(console.log("different types found, overriding default one"),u=o);let l=a(p,p.getTypeAtLocation(e),void 0,t);u=m(l);let d=!1;try{let e=n(u);i[r]=new P(r,e.paramBody,e.returnType,e.template),d=!0}catch(t){}d||(i[r]=new F(r,u))}h&&i[r].setAsElement(),i[r].setLineInfo(S)}),i}function S(e,t,i){var s=g(t);let a=ts.TypeFormatFlags.NoTruncation|ts.TypeFormatFlags.MultilineObjectLiterals,r=p.typeToString(p.getTypeAtLocation(t),void 0,a),o=!1;try{let t=n(r);o=!0,e==A?(j.addConstructorFunction(new P(e,t.paramBody,t.returnType,t.template).setLineInfo(s)),j.setAsFunction()):j.addField(new P(e,t.paramBody,t.returnType,t.template).setLineInfo(s))}catch(t){}o||j.addField(new F(e,r,i).setLineInfo(s))}function T(e){let t;var i=e.getChildren().find(ts.isParenthesizedExpression);if(!i)return t;var n=i.getChildren().find(ts.isFunctionExpression);if(!n)return t;var s=n.getChildren().find(ts.isBlock);if(!s)return t;let a=s.getChildren().find(e=>e.kind==ts.SyntaxKind.SyntaxList);return a}function C(e){var t=[];let i=e.getChildCount();if(!(1<=i&&2>=i))return t;let n=e.getChildAt(0);if(!ts.isCallExpression(n))return t;let s=T(n);return s?s.getChildren():t}function b(e){let t=ts.getJSDocTags(e).filter(ts.isJSDocTypedefTag);t.forEach(e=>{let t=e.getChildren();var i=ts.getNameOfJSDocTypedef(e);if(console.log(i.getText()),3!=t.length)return;let r=t.find(ts.isModuleDeclaration);if(r&&!V[r.getText()]){var l=t[2].getChildren();l.forEach(e=>{let t=p.getTypeAtLocation(e);var i=a(p,t,s,ts.TypeFormatFlags.NoTruncation|ts.TypeFormatFlags.UseFullyQualifiedType);console.log(m(i))})}let d=t[2],c="any",u=d.getText().trim(),g=u;if(!r){let e=p.getSymbolAtLocation(d);if(!e)return;let t=a(p,p.getDeclaredTypeOfSymbol(e),void 0,ts.TypeFormatFlags.NoTruncation|ts.TypeFormatFlags.UseFullyQualifiedType);if(c=m(t),"any"==c){let t="",i=p.getDeclaredTypeOfSymbol(e),s=i.getProperties();i.getApparentProperties(),s.forEach(e=>{let i=p.typeToString(p.getTypeOfSymbolAtLocation(e,e.valueDeclaration),void 0,ts.TypeFormatFlags.NoTruncation|ts.TypeFormatFlags.UseFullyQualifiedType),s="";try{let e=n(i);s=e.template+e.paramBody+": "+e.returnType}catch(t){}t+=0<s.length?`${e.getEscapedName()}${s},\n`:`${e.getEscapedName()}: ${i},\n`}),c=`{
								${t}
							}`}}else{let e=u.split(".");if(e.shift(),u=e.join("."),1>t[1].getChildCount())return;let i=p.getTypeAtLocation(t[1].getChildren()[1]);var f=a(p,i,void 0,void 0);if(c=m(f),"any"==c){let e="",i=[];try{i=t[1].getChildren()[1].getChildAt(1).getChildren()}catch(t){console.log("typedef parsing error")}i.forEach(t=>{let i=t.getChildren().find(ts.isIdentifier);if(null==i)return;let s=a(p,p.getTypeAtLocation(t),void 0,ts.TypeFormatFlags.NoTruncation|ts.TypeFormatFlags.UseFullyQualifiedType),r=m(s),o="";try{let e=n(r);o=`${e.template}${e.paramBody}: ${e.returnType}`}catch(t){}e+=0<o.length?`${i.getText()}${o},\n`:`${i.getText()}: ${r},\n`}),e=`{${e}}`,c=e}}"any"==c?console.warn("typedef came as any "+u):(o(g),j.addTypedefData({type:c,kind:M.typeDefs,name:u}))})}function _(e){var t=ts.getJSDocReturnTag(e);if(!t)return"";var i=ts.getJSDocReturnType(e);return i?d(i.getText())?i.getText():"":""}function E(e,t=!0){b(e);var i=g(e);if(ts.isVariableStatement(e)){let t=e.declarationList.declarations[0],c=t.getChildren(s);if(1==c.length)return void(R=c[0].getText().trim()==A);if(3!=c.length)return;let u=c[0],g=c[2];if(ts.isObjectLiteralExpression(g)&&(U[u.getText().trim()]=g),R)return;if(ts.isIdentifier(u)){if(u.getText().trim()!=A)return;if(ts.isCallExpression(g)){let e=g.getFullText().trim();if("Class.create()"==e)return R=!0,void j.setAsClass();var r=T(g);if(r)r.getChildren(s).forEach(e=>{E(e,!1)});else{let e=p.getTypeAtLocation(g),t=ts.TypeFormatFlags.UseTypeOfFunction|ts.TypeFormatFlags.NoTruncation|ts.TypeFormatFlags.UseFullyQualifiedType|ts.TypeFormatFlags.MultilineObjectLiterals,s=a(p,e,void 0,t);var o=m(s);if(o.startsWith("{")&&o.endsWith("}"))R=!0,j.addField(new k(A,o).setLineInfo(i)),j.setAsObjectLiteral();else try{n(o)}catch(t){}}}else if(ts.isObjectLiteralExpression(g)){R=!0;let e=h(g),t=new D(A);t.setLineInfo(i),t.setKeysType(e),j.addField(t),j.setAsObjectLiteral()}else if(ts.isFunctionExpression(g)){R=!0,j.setAsFunction();let e=f(g);j.addConstructorFunction(L.create(A,e[0]));let t=y(g);0<t.length&&j.setAsClass(),t.forEach(e=>j.addField(e))}else if(ts.isIdentifier(g)){var l=g.getText().trim();if(!U[l])return;R=!0;let e=h(U[l]),t=new D(A);t.setKeysType(e),j.addField(t),j.setAsObjectLiteral()}else if(ts.isParenthesizedExpression(g)){let e=g.getChildren().filter(ts.isFunctionExpression);if(0!=e.length){R=!0,j.setAsFunction();let t=f(e[0]);j.addConstructorFunction(L.create(A,t[0]))}else{if(1!=s.statements.length)return;let e=g.getChildren().filter(ts.isCallExpression);if(1!=e.length)return;var d=e.find(ts.isCallExpression);if(!d)return;let t=d.getChildren().find(ts.isFunctionExpression);if(!t)return;let i=t.getChildren().find(ts.isBlock);if(!i)return;let n=i.getChildren().find(e=>e.kind==ts.SyntaxKind.SyntaxList);if(!n)return;n.getChildren().forEach(e=>{E(e,!1)})}}}return}if(ts.isExpressionStatement(e)){if(!R){let t=e.getChildren().find(ts.isBinaryExpression);if(!t){let t=e.getChildren();return 2==t.length?ts.isIdentifier(t[0])&&t[1].kind==ts.SyntaxKind.SemicolonToken?void(R=t[0].getText().trim()==A):void 0:void 0}let i=t.getChildren();if(3!=i.length)return;let n=i[2],s=i[0];if(ts.isIdentifier(s))if(s.getText().trim()!=A)ts.isObjectLiteralExpression(n)&&(U[s.getText().trim()]=n);else if(ts.isCallExpression(n)){let e=n.getFullText().trim();"Class.create()"==e&&(R=!0,j.setAsClass())}else if(ts.isObjectLiteralExpression(n)){R=!0;let e=p.getSymbolAtLocation(n),t;e&&(t=ts.displayPartsToString(e.getDocumentationComment(p)));let i=new D(A,t);i.setLineInfo(g(n));let s=h(n);i.setKeysType(s),j.addField(i),j.setAsObjectLiteral()}else if(ts.isFunctionExpression(n)){R=!0;let e=f(n);j.setAsFunction(),j.addConstructorFunction(L.create(s.getText(),e[0]));let t=y(n);0<t.length&&j.setAsClass(),t.forEach(e=>j.addField(e))}else if(ts.isIdentifier(n)){let e=n.getText().trim();if(!U[e])return;R=!0;let t=h(U[e]),i=new D(A);i.setLineInfo(g(n)),i.setKeysType(t),j.setAsObjectLiteral(),j.addField(i)}return}let n=e.getChildren();if(1<=n.length&&2>=n.length&&t&&ts.isCallExpression(n[0])){let t=C(e);t.forEach(e=>{E(e,!1)})}let a=n.find(ts.isBinaryExpression);if(!a)return;let r=a.getChildren();if(3!=r.length)return;ts.isObjectLiteralExpression(r[2])&&(U[r[0].getText().trim()]=r[2]);let o=r.find(ts.isPropertyAccessExpression),l="",d="",c="",u=!1,m;if(o){u=!0;let e=o.getChildren(s).filter(ts.isIdentifier),t=o.getText().trim(),i=t.split(".");if(m=r[r.length-1],i[0]!=A)return;if(ts.isIdentifier(m)&&U[m.getText().trim()]&&(m=U[m.getText().trim()]),l=i.join("."),3<i.length)return}else if(ts.isIdentifier(r[0])&&(ts.isObjectLiteralExpression(r[2])&&(U[r[0].getText()]=r[2]),r[0].getText().trim()==A&&r[1].kind==ts.SyntaxKind.FirstAssignment&&(j.clearAll(),m=r[2],l=A,ts.isCallExpression(m)&&"Class.create()"==m.getText().trim())))return j.clearAll(),void j.setAsClass();if(m&&ts.isIdentifier(m)&&U[m.getText()]&&(m=U[m.getText()]),!m)return;if(i=g(m),ts.isNumericLiteral(m))j.addField(new x(l,"").setLineInfo(i));else if(ts.isStringLiteral(m))j.addField(new N(l,"").setLineInfo(i));else if(ts.isObjectLiteralExpression(m)){let e=h(m,!0),t=new D(l,d);t.setLineInfo(g(m)),t.setKeysType(e),j.addField(t),u||j.setAsObjectLiteral()}else if(ts.isFunctionExpression(m)){let e=f(m);u?j.addField(L.create(l,e[0])):(j.addConstructorFunction(L.create(A,e[0])),j.setAsFunction())}else if(l==A+".prototype"&&ts.isCallExpression(m)){let e=m.getChildren().find(ts.isPropertyAccessExpression);if(e&&"Object.extendsObject"==e.getText()){let e=m.getChildren().find(e=>e.kind==ts.SyntaxKind.SyntaxList),t=e.getChildCount();if(3!=t)return;let n=e.getChildAt(0,s);if(ts.isIdentifier(n)||(n=void 0),n||(n=e.getChildren().find(ts.isPropertyAccessExpression)),!n)return void console.log("unable to find the base class information");j.setAsClass();let a=n.getText();1==a.split(".").length&&(a=v+"."+a),j.setBaseType(a);let r=e.getChildren().find(ts.isObjectLiteralExpression);if(!r){let t=e.getChildren(),i=t[t.length-1];if(ts.isIdentifier(i)){let e=i.getText().trim();r=U[e]}}if(r){let e=h(r,!0),t=new D(l);t.setLineInfo(i),t.setKeysType(e),j.addField(t)}else{let i=ts.TypeFormatFlags.NoTruncation|ts.TypeFormatFlags.UseFullyQualifiedType|ts.TypeFormatFlags.MultilineObjectLiterals;c=p.typeToString(p.getTypeAtLocation(e.getChildAt(t-1)),void 0,i),-1==c.indexOf("typeof")&&S(l,e.getChildAt(t-1),d)}}else{let e=T(m),t=[];e&&(t=e.getChildren(s)),t.forEach(e=>{E(e,!1)});let n=t.filter(ts.isReturnStatement);if(0<n.length){1<n.length&&console.warn("Found multiple return statements in prototype assignment");let e=n[n.length-1].getChildren()[1],t;if(ts.isIdentifier(e))t=U[e.getText()];else if(ts.isObjectLiteralExpression(e))t=e;else if(ts.isCallExpression(e)){let i=e.getChildren();if(4!==i.length)return;let n=i[0];if(!ts.isPropertyAccessExpression(n))return;if("Object.extendsObject"!==n.getText())return;let s=e.getChildren().find(e=>e.kind==ts.SyntaxKind.SyntaxList);if(!s)return;let a=s.getChildren();if(3!=a.length)return;let r=a[0];if(!ts.isPropertyAccessExpression(r))return;let o=a[2];if(!ts.isObjectLiteralExpression(o))return;j.setAsClass();let l=r.getText();1==l.split(".").length&&(l=v+"."+l),j.setBaseType(l),t=o}if(t){let e=h(t,!0),n=new D(l);return n.setLineInfo(i),n.setKeysType(e),void j.addField(n)}}S(l,m,d)}}else S(l,m,"")}else if(ts.isFunctionDeclaration(e)){let t=e.name.getText();if(t!=A)return;R=!0;let i=p.getSymbolAtLocation(e.name),n=p.getTypeOfSymbolAtLocation(i,i.valueDeclaration),s=n.getCallSignatures().map(e=>u(e));var c=_(e);if(0<c.length&&(s[0].returnType=c),0<e.parameters.length){let t=0;e.parameters.forEach(e=>{s[0].parameters[t++].isOptional=p.isOptionalParameter(e)})}j.setAsFunction(),j.addConstructorFunction(L.create(t,s[0]));let r=y(e);0<r.length&&j.setAsClass(),r.forEach(e=>{j.addField(e)});let o=ts.getJSDocAugmentsTag(e);if(!o)return;let l=o.getChildren();if(2!=l.length)return;let d=l[0];if(!d)return;let g=p.getTypeAtLocation(l[1]);if(!g)return;let f=a(p,g,void 0,ts.TypeFormatFlags.UseFullyQualifiedType|ts.TypeFormatFlags.NoTruncation),h=m(f);0<h.length&&"any"!=h&&j.setBaseType(h)}else ts.isClassDeclaration(e)&&j.setAsES6()}l();var I=s;let A="",v="",w=t.split(".");1==w.length?A=t:(A=w[1],v=w[0]);var j=new O(e,t,"","12345"),R=!1,V={};(function(e){function t(e){if(e){if(ts.isJSDocTypedefTag(e)){var i=ts.getNameOfJSDocTypedef(e);console.log(i.getText());let t=e.getChildren(),s=t.find(ts.isModuleDeclaration);if(!s)return;if(2<=t.length){let e=s.getText();var n=e.split(".");if(2>n.length)return void console.warn("typedef should start with 'sn' namespace");if("sn"!=n[0])return void console.warn("typedef should start with 'sn' namespace");V[e]=!0}}else if(ts.isTypeReferenceNode(e)){var s=e.getFullText();if(!V[s])return;let t=e.typeName.getChildren();if(0==t.length)return void console.log("type children must exists "+e.getFullText());let i=p.getSymbolAtLocation(t[t.length-1]);if(!i)return;var r=a(p,p.getDeclaredTypeOfSymbol(i),void 0,8388608),o=m(r);j.addTypedefData({type:o,kind:M.typeDefs,name:s})}var l=e.getChildren();0<l.length&&l.forEach(e=>t(e))}}t(e)})(s);var U={};for(let n=0,i;s&&n<s.statements.length;n++)i=s.statements[n],E(i);return j}function h(e){e.forEach(e=>{"javaGlobalAPI"==e.name?W=e:"tableAPI"==e.name?G=e:"javaScopedAPI"==e.name?K=e:"jsAPI"==e.name&&(z=e)}),H="string"==typeof W.json_value?JSON.parse(W.json_value).api+"\n\n"+W.customization:W.json_value.api+"\n\n"+W.customization,q="string"==typeof K.json_value?JSON.parse(K.json_value).api+"\n\n"+W.customization:K.json_value.api+"\n\n"+K.customization,Y="string"==typeof G.json_value?JSON.parse(G.json_value).api+"\n\n"+G.customization+"\n\n"+z.customization:G.json_value.api+"\n\n"+G.customization,Q="string"==typeof z.json_value?JSON.parse(z.json_value).api:z.json_value.api}function _(e,t=!1){var i=e.split("."),n=i[0],s=i[1],a="";if(t)return Q[n]?(Q[n].forEach(e=>{var t=e.api.split(".");t[1]!=s&&"string"==typeof e.gf&&(a+=e.gf+";\n")}),a):(console.log("Unable to find the scope falling back to default one "+e),"");let r={};for(let i in Q){let e=Q[i];e.forEach(e=>{if(e.sp){let t=e.sp.split(".");return 1==t.length?(r[i]=r[i]||{},void(r[i][e.sp]=!0)):void(r[t[0]]=r[t[0]]||{},r[t[0]][t[1]]=!0)}})}for(let i in Q){let e=Q[i];a+="declare namespace "+i+" {",e.forEach(e=>{if("string"==typeof e.gf&&(C.isPublic(e.f)||i==n))a+="\n"+e.tf+"\n"+e.af+"\n";else{if(!r[i])return;r[i][e.api]&&(a+="\n"+e.tf+"\n")}}),a+="}\n"}return"global"==n?H+Y+a:q+Y+a}function E(n,s,a){h(s);let o="point.js",l=g(Q,a.sys_id),p=r(l),d,c,u;var m=new eslint.Linter;return{dispose:function(){d&&(d.disposeAll(),d=null),c&&(c=null)},getTypeInfo:function(s,a){s.api_name||(s.api_name="global.point"),u||(u=s.api_name);var r=s.getScopeAndAPIMap();if(!d||u!=s.api_name){let e=0;s.access==y.public&&(e|=T.public),e|=T.cls;let t=new C(s.api_name,s.sys_id,"export class "+r.name+" { prop: number; }","","",s.access,"",e),i=s.formatCurrentSITSFormat(t);var l=n+"\n\n"+_(s.api_name)+"\n\n\n"+_(s.api_name,!0);l+="\n\n"+i+"\n\n"+p+"\n\n"+z.customization+"",d||(d=new B(l)),u!=s.api_name&&(u=s.api_name,d.updateLib(l))}let g={js:"",declaration:"",sourceMap:"",afterDotWalK:"",errorMsg:t.ERROR_MSG,linterErrors:[],tsDeclaration:""};let h=3.7<=parseFloat(ts.versionMajorMinor);if(s.isJavascript()){a.allowJs=!0,a.declaration=h&&self.recordConfig.isES6,a.removeComments=!0,a.noEmitOnError=!0,a.outFile="pointOut.js";let e=s.tsscript;self.recordConfig.isES6&&!self.recordConfig.isFromScriptRunner&&(e+=`\n/// @ts-ignore\n${r.name} = global.__extends(Class.create(), ${r.name});\n`),d.updateSI(e),o="point.js"}else{a.allowJs=!1,a.declaration=!0;let e=s.tsscript;self.recordConfig.isFromScriptRunner||(e+=`\n/// @ts-ignore\n${r.name} = global.__extends(Class.create(), ${r.name});\n`),d.updateTypeScriptSI(e),o="point.ts"}a.noLib=!0,a.types=["snlib"],ts.defaultMaximumTruncationLength=1e4,a.noResolve=!1,a.skipLibCheck=!0,c=ts.createProgram([o],a,d,c);let S=c.emit(c.getSourceFile(o),void 0,void 0,void 0,{before:[e.dotWalkingTransformer]}),b=ts.getPreEmitDiagnostics(c).concat(S.diagnostics);if(b.forEach(e=>{if(e.file){let{line:t,character:i}=e.file.getLineAndCharacterOfPosition(e.start),n=ts.flattenDiagnosticMessageText(e.messageText,"\n");console.log(`${e.file.fileName} (${t+1},${i+1}): ${n}`)}else console.log(`${ts.flattenDiagnosticMessageText(e.messageText,"\n")}`)}),S.emitSkipped)return g;let E=d.getOutFiles();if(s.isTypescript()?(g.js=E["point.js"],g.sourceMap=E["point.js.map"]):(h&&(g.tsDeclaration=E["pointOut.d.ts"]),g.js=E["pointOut.js"],g.sourceMap=E["pointOut.js.map"]),g.afterDotWalK=s.tsscript,g.errorMsg="",s.isTypescript())return g.tsDeclaration=g.declaration=E["point.d.ts"],g;var I;try{I=f(s,s.api_name,c.getSourceFile(o),c.getTypeChecker()),I.sysId=s.sys_id,I.accessType=s.access;let e=I.toMinifiedInterfaceFormat();g.declaration=JSON.stringify(e),g.afterDotWalK=s.tsscript,a.linter&&(g.linterErrors=m.verify(s.tsscript,i.eslintConfig))}catch(t){g.errorMsg=JSON.stringify({error:t+"",id:1})}return g}}}let I;(function(e){e[e.NumericLiteral=0]="NumericLiteral",e[e.StringLiteral=1]="StringLiteral",e[e.StringType=2]="StringType",e[e.FunctionType=3]="FunctionType",e[e.ObjectLiteral=4]="ObjectLiteral",e[e.AnonymouseStringLiteral=5]="AnonymouseStringLiteral"})(I=e.LiteralType||(e.LiteralType={}));class A{constructor(e,t,i,n=!1){this.name=e,this.type=t,this.doc=i,this.isStringPropertyElement=n}setLineInfo(e){return this.lineInfo=e,this}toJSONDecl(){var e={};return e.f=this.toTypeFormat(),this.lineInfo&&(e.l=this.lineInfo.line,this.lineInfo.doc&&(e.d=this.lineInfo.doc)),e}setDoc(e){this.doc=e}setAsElement(){this.isStringPropertyElement=!0}static isNumericType(e){return e instanceof A&&e.type==I.NumericLiteral}static isStringLiteral(e){return e instanceof A&&e.type==I.StringLiteral}static isStringType(e){return e instanceof A}static isParamType(e){return e instanceof v}static isFunctionType(e){return e instanceof A&&e.type==I.FunctionType}static isRawFunctionType(e){return e instanceof P}static isObjectLiteral(e){return e instanceof A&&e.type==I.ObjectLiteral}static isAnonymousStringType(e){return e instanceof A&&e.type==I.AnonymouseStringLiteral}getPropertyName(){if(this.isStringPropertyElement)return this.name;var e=this.name.split(".");return e[e.length-1]}isStatic(){var e=this.name.split(".");return!(2>e.length)&&"prototype"!=e[1]}}e.RawFieldType=A;class x extends A{constructor(e,t){super(e,I.NumericLiteral,t)}toTypeFormat(){return this.getPropertyName()+": number"}}e.NumericLiteralType=x;class N extends A{constructor(e,t){super(e,I.StringLiteral,t)}toTypeFormat(){return this.getPropertyName()+": string"}}e.StringLiteralType=N;class F extends A{constructor(e,t,i){super(e,I.StringType,i),("true"==t||"false"==t)&&(t="boolean"),t=t.replace(/undefined\[\]/g,"Array<any>"),this.rawType=t}toTypeFormat(){return this.getPropertyName()+": "+this.rawType}}e.StringType=F;class v extends F{constructor(e,t,i=!1,n){super(e,t,n),this.isOpt=i}toTypeFormat(){return this.isOpt?this.name+(this.isOpt?"?: ":": ")+this.rawType:"any"==this.rawType?this.name:this.name+": "+this.rawType}}e.ParamInfoType=v;e.AnonymousStringType=class extends F{constructor(e,t){super("",e,t)}toTypeFormat(){return"any"==this.rawType?"":this.rawType}};class P extends F{constructor(e,t,i,n,s){super(e,t,s),this.returnType=i,this.templateBody=n}getParts(){var e="";!this.templateBody||(e=this.templateBody),e+=this.rawType;var t;return this.returnType&&"any"!=this.returnType&&(t=this.returnType),{name:this.getPropertyName(),body:e,returnType:t}}getParamsFormat(){var e=this.getParts();return e.body}getClsFunctionFormat(){var e=this.getParts();return!e.returnType?e.body+": "+e.returnType:e.body}toTypeFormat(){var e="",t=this.getParts();return e=t.name+t.body,!t.returnType||(e+=": "+t.returnType),e}}e.RawFunctionType=P;class L extends A{constructor(e,t){super(e,I.FunctionType,t)}getParts(){var e=this.getPropertyName(),t="";if(Array.isArray(this.typeParams)&&0<this.typeParams.length&&(t="<"+this.typeParams.join(", ")+">"),Array.isArray(this.params)&&0<this.params.length){var i=[];this.params.map(e=>{i.push(e.toTypeFormat())}),t+="("+i.join(",")+")"}else t="()";var n;return this.returnType&&"any"!=this.returnType&&(n=this.returnType),{name:e,body:t,returnType:n}}getParamsFormat(){var e=this.getParts();return e.body}getClsFunctionFormat(){var e=this.getParts();return e.returnType&&(!e.returnType||"any"!=e.returnType)?e.body+": "+e.returnType:e.body}toTypeFormat(){var e=this.getParts();return e.returnType&&(!e.returnType||"any"!=e.returnType)?e.name+e.body+": "+e.returnType:e.name+e.body}addParam(e,t,i=!1,n){Array.isArray(this.params)||(this.params=[]),this.params.push(new v(e,t,i,n))}setReturnType(e,t){this.returnType=e,this.returnDoc=t}setTypeParams(e){Array.isArray(e)&&0<e.length&&(this.typeParams=e)}static create(e,t){var i=new L(e,t.documentation);return t.parameters.forEach(e=>{i.addParam(e.name,e.type,e.isOptional,e.documentation)}),t.lineInfo&&i.setLineInfo(t.lineInfo),i.setReturnType(t.returnType),i.setTypeParams(t.typeParams),i}}e.FunctionType=L;class k extends A{constructor(e,t,i){super(e,I.StringType),this.typeFormat=t}toTypeFormat(){return this.typeFormat}toJSONDecl(){var e=this.toTypeFormat().trim();return e.startsWith("{")&&(e=e.substring(1)),e.endsWith("}")&&(e=e.substr(0,e.length-1)),e=e.trim(),{l:0,f:e}}}e.RawStringObjectLiteralType=k;class D extends A{constructor(e,t){super(e,I.ObjectLiteral,t)}addField(e){this.keys[e.name]=e}setKeysType(e){this.keys=e}getPartsWithLineInfo(){var e=[];for(var t in this.keys){let i={};i.f=this.keys[t].toTypeFormat(),this.keys[t].lineInfo&&(i.l=this.keys[t].lineInfo.line,this.keys[t].lineInfo.doc&&(i.d=this.keys[t].lineInfo.doc)),e.push(i)}return e}getParts(){var e=[];for(var t in this.keys)e.push(this.keys[t].toTypeFormat());return e}toTypeFormat(){var e="{\n",t=this.getParts();return e+=t.join(";\n"),e+="\n}",e}}e.ObjectLiteraltype=D;class O extends b{constructor(e,t,i,n){super(e,t,i,n),this.fields={},this.flags=0,this.isES6=!1}setAsES6(){this.isES6=!0,this.flags|=T.jsES6}getInternalType(){return this.isClass()||this.isSubClass()?u.cls:this.isFunctionType()?u.fun:this.isObjectLiteral()?u.var:u.never}clearAll(){this.fields={}}exportToTS(){var e;return e}addConstructorFunction(e){this.constFun=e}addField(e){var t=e.name.split(".");if(1<t.length&&"prototype"==t[1])this.setAsClass();else if(this.isObjectLiteral()){let t=e.name.split("."),i=this.fields[t[0]];return void(i instanceof D&&2==t.length&&(e.name=t[1],i.addField(e)))}this.fields[e.name]=e}exportAliasName(e){return""}isSubClass(){return!!this.baseName}setBaseType(e){this.baseName=e}setAsFunction(){this.resetState(),this.flags|=T.fun}isFunctionType(){return!!(this.flags&T.fun)}setAsObjectLiteral(){this.resetState(),this.flags|=T.obj}isObjectLiteral(){return!!(this.flags&T.obj)}resetState(){this.flags=0}setAsClass(){this.resetState(),this.flags|=T.cls}isClass(){return!!(this.flags&T.cls)}addTypedefData(e){this.typeDefs||(this.typeDefs=[]),this.typeDefs.push(e)}toMinifiedInterfaceFormat_1(){var e=this.apiName.split("."),t=e[0],i=e[1];let n="",s="";var a=Object.keys(this.fields),r="",o;if(0==this.flags&&1==Object.keys(this.fields).length){this.fields[i]}if(this.isObjectLiteral()){let e="";for(let t in this.fields)this.fields[t]instanceof D?e+=this.fields[t].toTypeFormat():this.fields[t]instanceof k&&(e+=this.fields[t].toTypeFormat());let t={api:i,id:this.sysId,tf:e,f:0};return C.updateFlags(t,this.currentSI,this.getInternalType()),t}if(a.forEach(e=>{let t=this.fields[e],a="";if(e!=i+".prototype")a=t.toTypeFormat()+";\n",t.isStatic()?A.isObjectLiteral(t)?s+=t.getPropertyName()+": "+a:s+=a:A.isObjectLiteral(t)?n+=t.getPropertyName()+": "+a:n+=a;else if(A.isObjectLiteral(t)){a=t.getParts().join(";\n"),0<a.length&&(n+=a+";\n");var l=t.keys.initialize;l&&A.isFunctionType(l)&&(o=l)}else A.isStringType(t)&&(r=t.rawType,"{"==r[0]&&r[r.length-1]||(r=""))}),this.isClass()){var l="new";o=o||this.constFun,l+=o?o.getParamsFormat()+": "+this.apiName:"(): "+this.apiName,s=l+";\nprototype: "+this.apiName+";\n"+s}this.isFunctionType()&&!!this.constFun&&(this.constFun instanceof L?s=this.constFun.getClsFunctionFormat()+";\n"+s:this.constFun instanceof P&&(s=this.constFun.rawType+": "+this.constFun.returnType+";\n"+s)),0<r.length&&(r=r.substring(1),r=r.substr(0,r.length-1),n+="\n"+r);let p=[];p.push(n.trim()),p.push(s.trim());var d={api:i,id:this.sysId,f:0,tf:p};return this.isSubClass()&&(d.sp=this.baseName),!this.typeDefs||(d.td=this.typeDefs),C.updateFlags(d,this.currentSI,this.getInternalType()),d}toMinifiedInterfaceFormat(){var e=this.apiName.split("."),t=e[0],i=e[1];let n="",s="";var a=Object.keys(this.fields),r="",o;if(0==this.flags&&1==Object.keys(this.fields).length){this.fields[i]}if(this.isES6){let e={api:i,id:this.sysId,f:this.flags};return"undefined"!=typeof this.typeDefs&&(e.td=this.typeDefs),e}if(this.isObjectLiteral()){let e="",t=[];for(let i in this.fields)this.fields[i]instanceof D?e+=this.fields[i].toTypeFormat():this.fields[i]instanceof k&&(e+=this.fields[i].toTypeFormat(),t.push(this.fields[i].toJSONDecl()));let n=this.fields[i];if(n.keys)for(let e in n.keys)t.push(n.keys[e].toJSONDecl());let s={api:i,id:this.sysId,df:t,f:0};return C.updateFlags(s,this.currentSI,this.getInternalType()),s}let l=[],p=[];if(a.forEach(e=>{let t=this.fields[e],a="";if(e!=i+".prototype"){a=t.toTypeFormat()+";\n";let e=t.lineInfo;var d={};d.l=e.line,e.doc&&(d.d=e.doc),t.isStatic()?(p.push(d),A.isObjectLiteral(t)?(d.f=t.getPropertyName()+": "+t.toTypeFormat(),s+=t.getPropertyName()+": "+a):(d.f=t.toTypeFormat(),s+=a)):(l.push(d),A.isObjectLiteral(t)?(d.f=t.getPropertyName()+": "+t.toTypeFormat(),n+=t.getPropertyName()+": "+a):(d.f=t.toTypeFormat(),n+=a))}else if(A.isObjectLiteral(t)){l=t.getPartsWithLineInfo(),a=t.getParts().join(";\n"),0<a.length&&(n+=a+";\n");var c=t.keys.initialize;c&&A.isFunctionType(c)&&(o=c)}else A.isStringType(t)&&(r=t.rawType,"{"==r[0]&&r[r.length-1]||(r=""))}),this.isClass()){var d="new";o=o||this.constFun;let e={};p.push(e),o?(d+=o.getParamsFormat()+": "+this.apiName,e.f=d,o.lineInfo&&(e.l=o.lineInfo.line,o.doc&&(e.d=o.doc))):(d+="(): "+this.apiName,e.f=d,e.l=0);let t={};t.f=`prototype: ${this.apiName}`,t.l=0,p.push(t),s=d+";\nprototype: "+this.apiName+";\n"+s}if(this.isFunctionType()&&!!this.constFun){let e={};e.l=0,e.f="",p.push(e),this.constFun instanceof L?(s=this.constFun.getClsFunctionFormat()+";\n"+s,e.f=this.constFun.getClsFunctionFormat()):this.constFun instanceof P&&(s=this.constFun.rawType+": "+this.constFun.returnType+";\n"+s,e.f=this.constFun.rawType+": "+this.constFun.returnType)}0<r.length&&(console.warn("fix this extra user case"),r=r.substring(1),r=r.substr(0,r.length-1),n+="\n"+r);let c=[];c.push(n.trim()),c.push(s.trim());var u={api:i,id:this.sysId,f:0,df:[l,p]};return this.isSubClass()&&(u.sp=this.baseName),!this.typeDefs||(u.td=this.typeDefs),C.updateFlags(u,this.currentSI,this.getInternalType()),u}toInterfaceFormat(){var e=this.apiName.split("."),t=e[0],i=e[1];let n="",s="";var a=Object.keys(this.fields),r="",o;if(0==this.flags&&1==Object.keys(this.fields).length){this.fields[i];console.log("unknown type")}if(this.isObjectLiteral()){let e="interface "+i+" ";for(let t in this.fields)e+=this.fields[t].toTypeFormat();let t="declare const "+i+": "+this.apiName+";",n=new C(this.apiName,this.sysId,e,"const "+i+": "+i+";",t,this.accessType,u.var,0,this.typeDefs);return C.updateFlags(n,this.currentSI,this.getInternalType()),n}if(a.forEach(e=>{let t=this.fields[e],a="";if(e!=i+".prototype")a=t.toTypeFormat()+";\n",t.isStatic()?A.isObjectLiteral(t)?s+=t.getPropertyName()+": "+a:s+=a:n+=a;else if(A.isObjectLiteral(t)){a=t.getParts().join(";\n"),n+=a+";\n";var l=t.keys.initialize;l&&A.isFunctionType(l)&&(o=l)}else A.isStringType(t)&&(r=t.rawType,"{"==r[0]&&r[r.length-1]||(r=""))}),this.isClass()){var l="new";l+=o?o.getParamsFormat()+": "+this.apiName:"(): "+this.apiName,s=l+";\nprototype: "+this.apiName+";\n"+s}this.isFunctionType()&&!!this.constFun&&(this.constFun instanceof L?s=this.constFun.getClsFunctionFormat()+";\n"+s:this.constFun instanceof P&&(s=this.constFun.rawType+": "+this.constFun.returnType+";\n"+s)),0<r.length&&(r=r.substring(1),r=r.substr(0,r.length-1),n+="\n"+r);let p="interface "+i;this.isSubClass()&&(p+=" extends "+this.baseName),n=n.trim(),p+=" {\n"+n+"\n}";let d="interface "+i+"Constructor {\n";s=s.trim(),d+=s+"\n}";let c=p+"\n"+d;var g="declare const "+i+": "+this.apiName+"Constructor;";let m=new C(this.apiName,this.sysId,c,"const "+i+": "+i+"Constructor;",g,this.accessType,u.cls,0,this.typeDefs);return C.updateFlags(m,this.currentSI,this.getInternalType()),m}}e.TSTypeExporter=O,e.generateTypedefDeclFromScopemap=r;var w={};e.addToThisSITypedefMap=o,e.clearThisSITypedefMap=l;var j={};e.addToTypeDefMap=p,e.isTypedefType=d,e.generateTypedefDeclFromScopeName=c,e.generateTypedefDecl=function(e){function t(e){var i="";for(var n in e)if("object"==typeof e[n]){let s=t(e[n]);i+="namespace "+n+" {\n"+s+"\n}\n"}else"string"==typeof e[n]&&(i+=e[n]);return i}if(!Array.isArray(e))return"";var i={};for(let t=0;t<e.length;t++)for(let o=0,l;o<e[t].length;o++){if(l=e[t][o],!l.name)continue;var n=l.name.split(".");let p="interface "+n[n.length-1]+" "+l.type+"\n\n";1<n.length&&n.splice(0,1);for(var s=n.splice(n.length-1,1)[0],a=i,r=0;r<n.length;r++)a[n[r]]=a[n[r]]||{},"string"==typeof a[n[r]]&&(console.log("module is defined as type overriding the type with modue "),a[n[r]]={}),a=a[n[r]];a[s]=p}var o=t(i);return o="declare namespace sn {\n"+o+"}",console.log(o),o},e.getTypeDefsAsScopeMap=g,e.getTypeDefs=function(e,t="-1"){var n=[];for(let s in e)for(let a=0;a<e[s].length;a++)Array.isArray(e[s][a].td)&&e[s][a].id!=t&&n.push(e[s][a].td);return n},e.parseSIWithTypeChecker=f;const R="atypes.ts",V="point.js",U="node_modules/@types/snlib/index.d.ts";class B{constructor(e,t,i){this.snlib=e,this.sourceFiles={},this.outFiles={},this.updateContent(U,this.snlib),t&&this.updateContent(R,t),i&&this.updateContent(V,i)}getOutFiles(){return this.outFiles}disposeAll(){for(let e in this.sourceFiles)ts.disposeEmitNodes(this.sourceFiles[e]),this.sourceFiles[e]=null}updateContent(e,t){this.sourceFiles[e]&&(ts.disposeEmitNodes(this.sourceFiles[e]),this.sourceFiles[e]=null);var i=ts.createSourceFile(e,t,ts.ScriptTarget.ES5,!0,e.endsWith(".ts")?ts.ScriptKind.TS:ts.ScriptKind.JS);this.sourceFiles[e]=i}updateLib(e){this.updateContent(U,e)}updateAnonymousContent(e){this.updateContent(R,e)}updateTypeScriptSI(e){this.updateContent("point.ts",e)}updateSI(e){this.updateContent(V,e)}getTypeInfo(e,t,i="Point"){var n=null;return n=f(e,i,this.sourceFiles[V],t),n}getSourceFile(e){return this.sourceFiles[e]?this.sourceFiles[e]:void 0}writeFile(e,t){this.outFiles[e]=t}getDefaultLibFileName(){return"lib.d.ts"}useCaseSensitiveFileNames(){return!1}getCanonicalFileName(e){return e}getCurrentDirectory(){return""}getNewLine(){return"\r\n"}fileExists(e){return!0}readFile(e){return console.log("read file "+e),""}directoryExists(){return!0}getDirectories(){return[]}}e.MyCompilerHost=B;var J={allowNonTsExtensions:!0,target:1,allowJs:!0,sourceMap:!0,noLib:!0,noErrorTruncation:!0,types:["snlib"],linter:!1},W,K,G,z,H,q,Y,Q;e.dotWalkingTransformer=e=>t=>{function i(t){if(t=ts.visitEachChild(t,i,e),!ts.isTemplateExpression(t))return t;let n=t.getFullText(),a=s(),r=n.match(a);if(!r)return t;if(0==r.length)return t;var o=r[0].split(".");if(1>=o.length)return t;let l=function(e){let t=e.replace(a,(e,t,i,n)=>{var s=i;i.startsWith("$$")&&(i=i.substring(2,i.length)),i.startsWith("{")&&(i=i.substring(1,i.length)),i.endsWith("}")&&(i=i.substr(0,i.length-1));let a=i.split(".");return 1==a.length?s:(a.splice(0,1),t+a.join(".")+n)});return t.trim()}(n);return ts.createStringLiteral(l)}return!t.sourceFiles||(t=t.sourceFiles[0]),ts.visitNode(t,i)},e.initTypeInfoForSingleSI=E,e.generateTypeInfo=function(e,t,i,n){h(i);var s={},a=[],o={};e.forEach(e=>(e instanceof S||(e=new S(e)),"global"==e.sys_scope.value?void a.push(e):void(!o[e.sys_scope.value]&&(o[e.sys_scope.value]=[]),o[e.sys_scope.value].push(e))));var l=[];for(var p in 0<a.length&&l.push(a),o)l.push(o[p]);var d=null,c=[],u=["point.js","atypes.ts"],m=[],f=0,y="global",T;return l.forEach(i=>{i.forEach(i=>{f++;var a=(100*f/e.length).toFixed(2);if(n)try{n({name:i.api_name,percentage:a,sysId:i.sys_id})}catch(e){}i instanceof S||(i=new S(i));var o=i.getScopeAndAPIMap();if("string"!=typeof i.script)return void console.log("skipping: undefined script found for api "+i.api_name);let l=_(i.api_name,!0);if(!d){let e=_(i.api_name),n=g(Q,"-1"),s=r(n);d=new B(t+"\n\n"+e+"\n\n"+s)}if(d.updateAnonymousContent(l),d.updateSI(i.script),o.scope!=y){let e=_(i.api_name);d.updateLib(t+"\n\n"+e),y=o.scope,T=void 0}T=ts.createProgram(u,J,d,T);try{let e=d.getTypeInfo(i,T.getTypeChecker(),i.api_name);e.accessType=i.access,e.sysId=i.sys_id,e&&c.push(e),s[o.scope]||(s[o.scope]=[]);var p=e.toMinifiedInterfaceFormat();if(s[o.scope].push(p),n)try{n({name:i.api_name,percentage:a,sysId:i.sys_id,decl:p})}catch(e){}}catch(t){m.push(i.api_name)}})}),{formatterResult:s,types:c,errors:m,program:T,host:d}}})(D=t.TSChecker||(t.TSChecker={}))}),define("tsCompilerOptions",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={allowNonTsExtensions:!0,module:0,noResolve:!0,suppressOutputPathCheck:!0,skipLibCheck:!0,skipDefaultLibCheck:!0,target:1,noImplicitAny:!1,strict:!1,strictNullChecks:!1,noImplicitThis:!1,noImplicitReturns:!1,experimentalDecorators:!1,noUnusedLocals:!1,noUnusedParameters:!1,declaration:!0,sourceMap:!0,jsx:2,jsxFactory:"createElement",noEmitHelpers:!1,isolatedModules:!1,noEmitOnError:!1,stripInternal:!1,allowJs:!0,checkJs:!1,noFallthroughCasesInSwitch:!1,allowUnreachableCode:!1,linter:!1,inlineSourceMap:!1,inlineSources:!1}}),define("recordWatcher",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){function e(e){return"string"==typeof e?(e=e.replace(/\^EQ/g,"").replace(/\^ORDERBY(?:DESC)?[^^]*/g,"").replace(/^GOTO/,""),btoa(e).replace(/=/g,"-")):""}function t(e){return d.getChannel(e)}function i(i,n){var s="/rw/default/"+i+"/"+e(n||"");return d.getChannel(s)}function n(e,t,i="sys_idISNOTEMPTY"){if(e){var n="";return n=t?"sys_id="+t:i,n||(n="sys_idISNOTEMPTY"),r(e,n)}}function s(e,t){if(e)return t=t||"sys_idISNOTEMPTY",r(e,t)}function a(e,t){t&&t.unsubscribe();var i=e.toString();return r("task","sys_idIN"+i)}function r(e,t="sys_idISNOTEMPTY"){return p(e)?(l("Blocked from watching",e),null):(l(">>> init "+e+"?"+t),c=i(e,t),c.subscribe(o),d.connect(),c)}function o(e){var t=e.data,i=e.channel;l(t)}function l(...e){console.log(e.join("s"))}function p(e){return"sys_amb_message"==e||e.startsWith("sys_rw")}let d;if("undefined"==typeof g_ambClient?window.top.g_ambClient&&(d=window.top.g_ambClient):d=g_ambClient,!!d){var c;return{getChannel:t,initTaskList:a,initChannel:r,init:function(e,t,i=""){n(e,t,i)},initList:s,initRecord:function(e,t){n(e,t,"")}}}}}),define("seismic",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.seismicDTS=`import react from 'react';
export { };
declare global {
	interface ActionTypes<T = any> {
		"NOW_ALERT#ACTION_CLICKED": {action: {type: 'dismiss'}},
		"NOW_ALERT#EXPANDED_SET": { value: boolean },
		"NOW_ALERT#TEXT_LINK_CLICKED": Record<string, any>,

		"NOW_ALERT_LIST#ITEMS_SET": {value: Array<NowAlertItem>},
		"NOW_ALERT_LIST#ITEM_ACTION_CLICKED": {item: NowAlertItem},
		"NOW_ALERT_LIST#ITEM_TEXT_LINK_CLICKED": {item: NowAlertItem},

		"NOW_BUTTON#CLICKED": Record<string, any>,
		"NOW_BUTTON_BARE#CLICKED": Record<string, any>,
		"NOW_BUTTON_ICONIC#CLICKED": Record<string, any>,
		"NOW_BUTTON_STATEFUL#SELECTED_SET": Record<string, any>,

		"NOW_CARD#CLICKED": Record<string, any>,
		"NOW_CARD#SELECTED_SET": {value: boolean},

		"NOW_CARD_ACTIONS#ACTION_CLICKED": T,

		"NOW_CARD_HEADER#ACTION_CLICKED": T,

		"NOW_CONTENT_TREE#ACTIONABLE_ITEM_CLICKED": T,
		"NOW_CONTENT_TREE#ACTION_CLICKED": T,
		"NOW_CONTENT_TREE#ACTION_MOUSEENTER": T,
		"NOW_CONTENT_TREE#ACTION_MOUSELEAVE": T,
		"NOW_CONTENT_TREE#EXPANDED_ITEMS_SET": T,
		"NOW_CONTENT_TREE#ITEM_CLICKED": T,
		"NOW_CONTENT_TREE#LOADING_CANCELLED": T,
		"NOW_CONTENT_TREE#LOADING_REQUESTED": T,
		"NOW_CONTENT_TREE#SELECTED_ITEMS_SET": T,

		"NOW_DROPDOWN#ITEM_CLICKED": T,
		"NOW_DROPDOWN#OPENED_SET": T,
		"NOW_DROPDOWN#SELECTED_ITEMS_SET": T,

		"NOW_LOADER#ACTION_CLICKED": T,

		"NOW_MODAL#FOOTER_ACTION_CLICKED": T,
		"NOW_MODAL#OPENED_SET": T,

		"NOW_PILL#DISMISSED": T,
		"NOW_PILL#SELECTED_SET": T,

		"NOW_SPLIT_BUTTON#ACTION_CLICKED": T,
		"NOW_SPLIT_BUTTON#ITEM_CLICKED": T,
		"NOW_SPLIT_BUTTON#OPENED_SET": T,

		"NOW_TABS#SELECTED_ITEM_SET": T,

		"NOW_TEMPLATE_CARD_ASSIST#SELECTED_SET": T,

		"NOW_TEMPLATE_CARD_ATTACHMENT#ACTION_CLICKED": T,

		"NOW_TEXT_LINK#CLICKED": T,

		"NOW_TOGGLE#CHECKED_SET": T,

		"NOW_DROPDOWN_PANEL#ITEM_CLICKED": T,
		"NOW_DROPDOWN_PANEL#OPENED_SET": T,
		"NOW_DROPDOWN_PANEL#SELECTED_ITEMS_SET": T,

		"NOW_INPUT#INVALID_SET": T,
		"NOW_INPUT#VALUE_SET": T,


		"NOW_INPUT_PASSWORD#INVALID_SET": T,
		"NOW_INPUT_PASSWORD#VALUE_SET": T,

		"NOW_INPUT_PHONE#BUTTON_CLICKED": T,
		"NOW_INPUT_PHONE#COUNTRY_CODE_SET": T,
		"NOW_INPUT_PHONE#INVALID_SET": T,
		"NOW_INPUT_PHONE#VALUE_SET": T,

		"NOW_INPUT_URL#INVALID_SET": T,

		"NOW_RADIO_BUTTONS#VALUE_SET": T,

		"NOW_SCORE#CLICKED": T,

		"NOW_STEPPER#NEXT_PAGE_BUTTON_CLICKED": T,

		"NOW_TEXTAREA#INVALID_SET": T,
		"NOW_TEXTAREA#VALUE_SET": T,

		'NOW_RADIO_GROUP#VALUE_CHANGED': T,

		"NOW_RECORD_CHECKBOX#VALUE_CHANGED": T,

		'PREVIEW_RECORD': T,

		'NOW_RECORD_COMMON_SIDEBAR#OPENED_SET': T,

		"NOW_RECORD_UI_ACTION_BAR#CLICKED": T,

		"NOW_RECORD_DATE_PICKER#STAGED_VALUE_CHANGED": T,
		'NOW_RECORD_DATE_PICKER#VALUE_CHANGED': T,

		"NOW_RECORD_FILE_ATTACHMENT#VALUE_CHANGED": T,

		"NOW_RECORD_HTML_EDITOR#STAGED_VALUE_CHANGED": T,
		"NOW_RECORD_HTML_EDITOR#VALUE_CHANGED": T,

		'NOW_RECORD_IP_ADDRESS#STAGED_VALUE_CHANGED': T,
		'NOW_RECORD_IP_ADDRESS#VALUE_CHANGED': T
		//[action: string]: any
	}
	interface ActionTypes {
		"COMPONENT_CONNECTED": "SEISMIC_COMPONENT_CONNECTED",
		"COMPONENT_DISCONNECTED": "SEISMIC_COMPONENT_DISCONNECTED",
		"COMPONENT_BOOTSTRAPPED": "SEISMIC_COMPONENT_BOOTSTRAPPED",
		"COMPONENT_PROPERTY_CHANGED": "SEISMIC_COMPONENT_PROPERTY_CHANGED",
		"COMPONENT_RENDERED": "SEISMIC_COMPONENT_RENDERED",
		"COMPONENT_ERROR_THROWN": "SEISMIC_COMPONENT_ERROR_THROWN",
		"COMPONENT_DOM_READY": "SEISMIC_COMPONENT_DOM_READY"
	}
	interface ComponentService {
		t(formatter: string, ...args: any): string;
		actionTypes: ActionTypes,
		createRef(): any,
		createElement(tag: string, props?: any, ...children: Array<any>): any,
		Fragment(): any,
		createHttpEffect(url: string, options?: any): Function;
		//createUpdateStateEffect(reducer: (...args: Array<any>) => void): Function;
		createGraphQLEffect(query: string, options?: any): Function;
		createAmbSubscriptionEffect(channelId: string, options?: any): Function;
		createAmbEventEffect(...args: any[]): any;
		createAmbPublishEffect(...args: any[]): any;
		getTemplates(recordIds: Array<any>, consolidated?: boolean): Promise<any>;
		componentSysIds(componentSysIds: Array<string>, consolidated?: boolean): Promise<any>;
		getComponentsByTagNames(componentTagNames: Array<string>, consolidated?: boolean): Promise<any>;
		createComponentConfig: typeof createComponentConfig,
		registerCustomElement: typeof registerCustomElement
	}
	interface Window {
		snComponentServices: ComponentService
		createElement(tag: string, props?: any, ...children: Array<any>): any
		createComponentConfig: typeof createComponentConfig,
		registerCustomElement(tag: string, config: any): void;
		componentStyle: string;
		provideComponentStyle(): string;
		createJSXElement(tagName: string, props?: any, ...children: Array<any>): any
		preloadComponents?(): Array<string>
	}
	const snComponentServices: typeof window.snComponentServices;
	const createElement: typeof window.createElement;//(tag: string, props?: any, ...children: Array<any>): any;
	const createJSXElement: typeof window.createJSXElement;
	const registerCustomElement: typeof window.registerCustomElement;//(tag: string, config: any): void;
	const provideComponentStyle: typeof window.provideComponentStyle;
	const preloadComponents: typeof window.preloadComponents;
	const componentStyle: string;

	type UnknownPropKeys = 'readonly' | 'reflect' | 'unstableParse' | 'unstablePreseveEmptyStr' | 'selectable' | 'schema';
	type ExtractComponentProps<T, U, E = UnknownPropKeys> = T extends U ? T : T extends E ? never : T;
	type ComponentPropValueOf<T> = T[ExtractComponentProps<keyof T, 'default'>] extends null ? any : T[ExtractComponentProps<keyof T, 'default'>];
	type ComponentPropType<T> = { [p in keyof T]: ComponentPropValueOf<T[p]> extends (...args) => infer R ? R : ComponentPropValueOf<T[p]> };


	interface ActionPayload<T extends keyof ActionTypes> {
		type: T,
		payload?: ActionTypes[T],
		meta?: {
			componentName?: string,
			event?: Event,
			hoiestHost?: any,
			id?: string
		},
		error?: any,
		stopPropagation(): void
	}

	interface EventHandlerArgs<P, T extends ComponentState, Actions = Record<string, any>> {
		action: {
			type: keyof DocumentEventMap,
			error: any,
			meta: any,
			payload: { event: any, host: Element },
			stopPropagation(): void;
		},
		host: Element,
		properties: P,
		state: T,
		dispatch(type: keyof Actions, payload?: any, meta?: any, error?: boolean | null): void;
		updateState(obj: Partial<{ [prop in keyof Omit<T, "properties">]: T[prop] }>): void;
		updateState(obj: { path: string, value: any, operation?: 'set' | 'assign' | 'merge' | 'pop' | 'push' | 'shift' | 'unshift' | 'splice' | 'concat' }): void;
		updateProperties(obj: Partial<{ [prop in keyof T["properties"]]: T['properties'][prop] }>): void;
	}

	interface ComponentState {
		properties?: Record<string, any>
	}
	type ActionHandler<P, AS, D, ActionName extends keyof ActionTypes> = (args: {
		action: ActionPayload<ActionName>,
		dispatch: D,
		properties: P,
		state: AS,
		host: HTMLElement
	}) => void | {
		effect?: Function,
		args?: Array<any>,
		interceptors?: Array<Function | Record<string, any>>,
		modifiers?: {name: 'throttle', limit: number} | {name: 'debounce', delay: number},
	};

	interface Dispatcher<T extends ComponentState, Actions = Record<string, any>> {
		<K extends keyof Actions>(type: K extends keyof Actions? K: string, payload?: K extends keyof ActionTypes? ActionTypes[K]: any , meta?: any, error?: boolean | null): void;
		updateState(obj: Partial<{ [prop in keyof Omit<T, "properties">]: T[prop] }>): void;
		updateState(obj: { path: string, value: any, operation?: 'set' | 'assign' | 'merge' | 'pop' | 'push' | 'shift' | 'unshift' | 'splice' | 'concat' }): void;
		updateProperties(obj: Partial<{ [prop in keyof T["properties"]]: T['properties'][prop] }>): void;
	}
	interface ActionDispatcher<T extends ComponentState, Actions, ActionName extends keyof ActionTypes> extends Dispatcher<T, Actions> {
		action?: ActionPayload<ActionName>
	}
	type AggregateState<RawProperties, InitialState> = InitialState & { properties: ComponentPropType<RawProperties> };
	function createComponentConfig<
		RawProperties,
		InitialState,
		Actions = Record<string, any>,
		ComponentState = AggregateState<RawProperties, InitialState>,
		ActionHandlers = Partial<{ [ActionName in keyof ActionTypes]:  ActionHandler<ComponentPropType<RawProperties>, ComponentState, ActionDispatcher<ComponentState, Actions, ActionName>, ActionName>}>,
		>
		(
			properties?: RawProperties,
			initialState?: InitialState,
			styles?: string,
			actions?: Actions,
			actionHandlers?: ActionHandlers,
			eventHandlers?: Array<{
				events: Array<keyof DocumentEventMap>,
				effect?: (args: EventHandlerArgs<RawProperties, ComponentState, Actions>) => void,
				target?: Element | Document | Window
			}>,
			view?: (State?: ComponentState, dispatch?: Dispatcher<ComponentState, Actions>) => void
		): any;
	interface VNode {
		elm: Node | undefined
	}

	type HookInitHandler = (vNode?: VNode) => void;
	type HookInsertHandler = (vNode?: VNode) => void;
	type HookUpdateHandler = (oldVNode?: VNode, vNode?: VNode) => void;
	type HookRemoveHandler = (vNode?: VNode, callback?: (...args) => void) => void;
	type HookDestroyHandler = (vNode?: VNode) => void;


}


declare module 'react' {
	interface DOMAttributes<T> {
		appendToPayload?: Record<string, any>
	}
	interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
		appendToPayload?: Record<string, any>,
		attrs?: Record<string, any>,
		hookInsert?: HookInsertHandler,
		hookInit?: HookInitHandler,
		hookUpdate?: HookUpdateHandler,
		hookRemove?: HookRemoveHandler,
		hookDestroy?: HookDestroyHandler,
		"hook-init"?: HookInitHandler,
		"hook-insert"?: HookInsertHandler,
		"hook-update"?: HookUpdateHandler,
		"hook-remove"?: HookRemoveHandler,
		"hook-destroy"?: HookDestroyHandler,
		hook?: {
			init?: HookInitHandler
			insert?: HookInsertHandler,
			update?: HookUpdateHandler,
			remove?: HookRemoveHandler,
			destroy?: HookDestroyHandler
		},
		on?: Partial<{ [P in keyof DocumentEventMap]: (e: DocumentEventMap[P]) => void; }>
		// Clipboard Events
		"on-copy"?: ClipboardEventHandler<T>;
		"on-copycapture"?: ClipboardEventHandler<T>;
		"on-cut"?: ClipboardEventHandler<T>;
		"on-cutcapture"?: ClipboardEventHandler<T>;
		"on-paste"?: ClipboardEventHandler<T>;
		"on-pastecapture"?: ClipboardEventHandler<T>;

		// Composition Events
		"on-compositionend"?: CompositionEventHandler<T>;
		"on-compositionendcapture"?: CompositionEventHandler<T>;
		"on-compositionstart"?: CompositionEventHandler<T>;
		"on-compositionstartcapture"?: CompositionEventHandler<T>;
		"on-compositionupdate"?: CompositionEventHandler<T>;
		"on-compositionupdatecapture"?: CompositionEventHandler<T>;

		// Focus Events
		"on-focus"?: FocusEventHandler<T>;
		"on-focuscapture"?: FocusEventHandler<T>;
		"on-blur"?: FocusEventHandler<T>;
		"on-blurcapture"?: FocusEventHandler<T>;

		// Form Events
		"on-change"?: FormEventHandler<T>;
		"on-changecapture"?: FormEventHandler<T>;
		"on-beforeinput"?: FormEventHandler<T>;
		"on-beforeinputcapture"?: FormEventHandler<T>;
		"on-input"?: FormEventHandler<T>;
		"on-inputcapture"?: FormEventHandler<T>;
		"on-reset"?: FormEventHandler<T>;
		"on-resetcapture"?: FormEventHandler<T>;
		"on-submit"?: FormEventHandler<T>;
		"on-submitcapture"?: FormEventHandler<T>;
		"on-invalid"?: FormEventHandler<T>;
		"on-invalidcapture"?: FormEventHandler<T>;

		// Image Events
		"on-load"?: ReactEventHandler<T>;
		"on-loadcapture"?: ReactEventHandler<T>;
		"on-error"?: ReactEventHandler<T>; // also a Media Event
		"on-errorcapture"?: ReactEventHandler<T>; // also a Media Event

		// Keyboard Events
		"on-keydown"?: KeyboardEventHandler<T>;
		"on-keydowncapture"?: KeyboardEventHandler<T>;
		"on-keypress"?: KeyboardEventHandler<T>;
		"on-keypresscapture"?: KeyboardEventHandler<T>;
		"on-keyup"?: KeyboardEventHandler<T>;
		"on-keyupcapture"?: KeyboardEventHandler<T>;

		// Media Events
		"on-abort"?: ReactEventHandler<T>;
		"on-abortcapture"?: ReactEventHandler<T>;
		"on-canplay"?: ReactEventHandler<T>;
		"on-canplaycapture"?: ReactEventHandler<T>;
		"on-canplaythrough"?: ReactEventHandler<T>;
		"on-canplaythroughcapture"?: ReactEventHandler<T>;
		"on-durationchange"?: ReactEventHandler<T>;
		"on-durationchangecapture"?: ReactEventHandler<T>;
		"on-emptied"?: ReactEventHandler<T>;
		"on-emptied-capture"?: ReactEventHandler<T>;
		"on-encrypted"?: ReactEventHandler<T>;
		"on-encryptedcapture"?: ReactEventHandler<T>;
		"on-ended"?: ReactEventHandler<T>;
		"on-endedcapture"?: ReactEventHandler<T>;
		"on-loadeddata"?: ReactEventHandler<T>;
		"on-loadeddatacapture"?: ReactEventHandler<T>;
		"on-loadedmetadata"?: ReactEventHandler<T>;
		"on-loadedmetadatacapture"?: ReactEventHandler<T>;
		"on-loadstart"?: ReactEventHandler<T>;
		"on-loadstartcapture"?: ReactEventHandler<T>;
		"on-pause"?: ReactEventHandler<T>;
		"on-pause-capture"?: ReactEventHandler<T>;
		"on-play"?: ReactEventHandler<T>;
		"on-playcapture"?: ReactEventHandler<T>;
		"on-playing"?: ReactEventHandler<T>;
		"on-playingcapture"?: ReactEventHandler<T>;
		"on-progress"?: ReactEventHandler<T>;
		"on-progress-capture"?: ReactEventHandler<T>;
		"on-ratechange"?: ReactEventHandler<T>;
		"on-ratechangecapture"?: ReactEventHandler<T>;
		"on-seeked"?: ReactEventHandler<T>;
		"on-seekedcapture"?: ReactEventHandler<T>;
		"on-seeking"?: ReactEventHandler<T>;
		"on-seekingcapture"?: ReactEventHandler<T>;
		"on-stalled"?: ReactEventHandler<T>;
		"on-stalledcapture"?: ReactEventHandler<T>;
		"on-suspend"?: ReactEventHandler<T>;
		"on-suspend-capture"?: ReactEventHandler<T>;
		"on-timeupdate"?: ReactEventHandler<T>;
		"on-timeupdatecapture"?: ReactEventHandler<T>;
		"on-volumechange"?: ReactEventHandler<T>;
		"on-volumechangecapture"?: ReactEventHandler<T>;
		"on-waiting"?: ReactEventHandler<T>;
		"on-waitingcapture"?: ReactEventHandler<T>;

		// MouseEvents
		"on-auxclick"?: MouseEventHandler<T>;
		"on-auxclickcapture"?: MouseEventHandler<T>;
		"on-click"?: MouseEventHandler<T>;
		"on-clickcapture"?: MouseEventHandler<T>;
		"on-contextmenu"?: MouseEventHandler<T>;
		"on-contextmenucapture"?: MouseEventHandler<T>;
		"on-doubleclick"?: MouseEventHandler<T>;
		"on-doubleclickcapture"?: MouseEventHandler<T>;
		"on-drag"?: DragEventHandler<T>;
		"on-dragcapture"?: DragEventHandler<T>;
		"on-dragend"?: DragEventHandler<T>;
		"on-dragendcapture"?: DragEventHandler<T>;
		"on-dragenter"?: DragEventHandler<T>;
		"on-dragentercapture"?: DragEventHandler<T>;
		"on-dragexit"?: DragEventHandler<T>;
		"on-dragexitcapture"?: DragEventHandler<T>;
		"on-dragleave"?: DragEventHandler<T>;
		"on-dragleavecapture"?: DragEventHandler<T>;
		"on-dragover"?: DragEventHandler<T>;
		"on-dragovercapture"?: DragEventHandler<T>;
		"on-dragstart"?: DragEventHandler<T>;
		"on-Dragstartcapture"?: DragEventHandler<T>;
		"on-drop"?: DragEventHandler<T>;
		"on-dropcapture"?: DragEventHandler<T>;
		"on-mousedown"?: MouseEventHandler<T>;
		"on-mousedowncapture"?: MouseEventHandler<T>;
		"on-mouseenter"?: MouseEventHandler<T>;
		"on-mouseleave"?: MouseEventHandler<T>;
		"on-mousemove"?: MouseEventHandler<T>;
		"on-mousemovecapture"?: MouseEventHandler<T>;
		"on-mouseout"?: MouseEventHandler<T>;
		"on-mouseoutcapture"?: MouseEventHandler<T>;
		"on-mouseover"?: MouseEventHandler<T>;
		"on-mouseovercapture"?: MouseEventHandler<T>;
		"on-mouseup"?: MouseEventHandler<T>;
		"on-mouseupcapture"?: MouseEventHandler<T>;

		// Selection Events
		"on-select"?: ReactEventHandler<T>;
		"on-selectcapture"?: ReactEventHandler<T>;

		// Touch Events
		"on-touchcancel"?: TouchEventHandler<T>;
		"on-touchcancelcapture"?: TouchEventHandler<T>;
		"on-touchend"?: TouchEventHandler<T>;
		"on-touchendcapture"?: TouchEventHandler<T>;
		"on-touchmove"?: TouchEventHandler<T>;
		"on-touchmovecapture"?: TouchEventHandler<T>;
		"on-touchstart"?: TouchEventHandler<T>;
		"on-touchstartcapture"?: TouchEventHandler<T>;

		// Pointer Events
		"on-pointerdown"?: PointerEventHandler<T>;
		"on-pointerdowncapture"?: PointerEventHandler<T>;
		"on-pointermove"?: PointerEventHandler<T>;
		"on-pointermovecapture"?: PointerEventHandler<T>;
		"on-pointerup"?: PointerEventHandler<T>;
		"on-pointerupcapture"?: PointerEventHandler<T>;
		"on-pointercancel"?: PointerEventHandler<T>;
		"on-pointercancelcapture"?: PointerEventHandler<T>;
		"on-pointerenter"?: PointerEventHandler<T>;
		"on-pointerentercapture"?: PointerEventHandler<T>;
		"on-pointerleave"?: PointerEventHandler<T>;
		"on-pointerleavecapture"?: PointerEventHandler<T>;
		"on-pointerover"?: PointerEventHandler<T>;
		"on-pointerovercapture"?: PointerEventHandler<T>;
		"on-pointerout"?: PointerEventHandler<T>;
		"on-pointeroutcapture"?: PointerEventHandler<T>;
		"on-gotpointercapture"?: PointerEventHandler<T>;
		"on-gotpointercapturecapture"?: PointerEventHandler<T>;
		"on-lostpointercapture"?: PointerEventHandler<T>;
		"on-lostpointercapturecapture"?: PointerEventHandler<T>;

		// UI Events
		"on-scroll"?: UIEventHandler<T>;
		"on-scrollcapture"?: UIEventHandler<T>;

		// Wheel Events
		"on-wheel"?: WheelEventHandler<T>;
		"on-wheelcapture"?: WheelEventHandler<T>;

		// Animation Events
		"on-animationstart"?: AnimationEventHandler<T>;
		"on-animationstartcapture"?: AnimationEventHandler<T>;
		"on-animationend"?: AnimationEventHandler<T>;
		"on-animationendcapture"?: AnimationEventHandler<T>;
		"on-animationiteration"?: AnimationEventHandler<T>;
		"on-animationiterationcapture"?: AnimationEventHandler<T>;

		// Transition Events
		"on-transitionend"?: TransitionEventHandler<T>;
		"on-transitionendcapture"?: TransitionEventHandler<T>;
	}
}


declare global {

	interface NowAlertItem {
		action?: { type: "dismiss" | "acknowledge" | "open", href?: string }
		content?: string,
		expanded?: boolean,
		header?: string,
		iconName?: string,
		linkHref?: string,
		linkText?: string,
		manageExpanded?: boolean,
		status?: "critical" | "high" | "moderate" | "warning" | "info" | "positive" | "low" | "info",
		variant?: string,//"critical" | "high" | "moderate" | "warning" | "info" | "positive" | "low" | "info",
		textLinkProps?: { label: string, href: string }
	}
	namespace JSX {
		interface NowCalendarAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			style?: {height: string, display: string},
			dir?: string,
			availableViews?: Array<string>
		}
		interface NowAlertAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T>, NowAlertItem {
			// action?: { type: "dismiss" | "acknowledge" | "open", href?: string }
			// content?: string,
			// expanded?: boolean,
			// header?: string,
			// iconName?: string,
			// linkHref?: string,
			// linkText?: string,
			// manageExpanded?: boolean,
			// status?: "critical" | "high" | "moderate" | "warning" | "info" | "positive" | "low" | "info",
			// variant?: string,//"critical" | "high" | "moderate" | "warning" | "info" | "positive" | "low" | "info",
			// textLinkProps?: { label: string, href: string }
		}
		interface NowAlertListAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			configAriaLive?: 'polite' | 'off' | 'assertive',
			items: Array<NowAlertItem>,
			manageItems?: boolean
		}
		type ElementSize = 'sm' | 'md' | 'lg';
		type VariantType = 'primary' | 'secondary';
		type ButtonVariant = "primary" | "primary-positive" | "primary-negative" | "secondary" | "secondary-positive" | "secondary-negative" | "tertiary" | "inherit";
		interface NowAvatarAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			ariaHidden?: string,
			imageSrc?: string,
			presence?: "available" | "busy" | "away" | "offline",
			size?: ElementSize,
			userName?: string
		}
		interface NowBadgeAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			variant?: VariantType,
			value: number | string,
			status?: "critical" | "high" | "warning" | "moderate" | "info" | "positive" | "low",
			size: ElementSize,
			round?: boolean,
			maxDigits?: number | string
		}
		interface NowButtonAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			cta?: string,
			iconName?: string,
			iconSet?: string,
			label?: string,
			size?: ElementSize,
			variant?: ButtonVariant,
			icon?: string,
			disabled?: boolean,
			configAria?: Record<string, string>,
			tooltipContent?: string,
			bare?: boolean,
			inherit?: boolean
		}
		interface NowButtonBareAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			disabled?: boolean,
			configAria?: Record<string, string>,
			hidePadding?: boolean,
			highContrast?: boolean,
			iconEnd?: string,
			iconStart?: string,
			label?: string,
			size?: ElementSize,
			variant?: VariantType
		}
		interface NowButtonIconicAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			icon?: string,
			size?: ElementSize,
			tooltipContent?: string,
			variant?: "primary" | "secondary" | "tertiary",
			bare?: boolean,
			configAria?: Record<string, string>,
			disabled?: boolean,
			hidePadding?: boolean,
			highContrast?: boolean
		}
		interface NowButtonStatefulAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			icon?: string,
			variant?: "primary" | "primary-highlighted" | "secondary" | "secondary-highlighted" | "tertiary",
			tooltipContent?: string,
			size?: ElementSize,
			selected?: boolean,
			manageSelected?: boolean,
			highContrast?: boolean,
			hidePadding?: boolean,
			disabled?: boolean,
			configRole?: 'button' | 'radio' | 'tab',
			configAria?: Record<string, string>
		}
		type NowElement<T> = React.DetailedHTMLProps<T, HTMLElement>
		interface NowCardAttributes extends React.AriaAttributes, React.DOMAttributes<HTMLElement> {
			configArial?: Record<string, string>,
			interaction?: 'none' | 'click' | 'select',
			manageSelected?: boolean,
			slected?: boolean,
			size?: ElementSize
		}
		interface NowCardActionItem {
			label?: string,
			icon?: string,
			variant?: ButtonVariant,
			disabled?: boolean,
			clickActionType?: string
		}
		interface NowCardActionsAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			items?: Array<NowCardActionItem>
		}
		interface NowCardFooterAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			label?: string | { start: string, end: string },
			split?: 'equal' | 'unequal'
		}
		interface NowCardHeaderAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			actions?: Array<Partial<{ icon: string, label: string, disabled: boolean, clickActionType: string }>>,
			caption?: Partial<{ label: string, lines: number, size: ElementSize }>
			dropdowns?: Array<{ id: string, items: Array<{ id: string, label: string }> }>,
			heading?: Partial<{ label: string, lines: number, level?: number, size: ElementSize, variant: ButtonVariant }>,
			tagline?: Partial<{ label: string, icon: string, variant: 'secondary' | 'tertiary' }>
		}
		interface NowContentTreeAction {
			icon: string,
			label: string,
			clickActionType: string,
			mouseenterActionType: string,
			mouseleaveActionType: string,
		}
		interface NowContentTreeHightlightedValue {
			label: string,
			status: string,
			widht: string,
		}
		interface NowContentTreeIdentifier {
			type: 'icon' | 'avatar',
			icon: string,
			userName: string,
			imageSrc: string,
			ariaHidden: string
		}

		interface NowContentTreeItem {
			id: string,
			label: string,
			children: Array<Partial<NowContentTreeItem>>,
			childrenAvailable: number,
			identifierProps: Partial<NowContentTreeIdentifier>,
			actionable: boolean,
			actions: Array<Partial<NowContentTreeAction>>,
			highlightedValueProps: Array<Partial<NowContentTreeHightlightedValue>>,
			disabled: boolean
		}
		interface NowContentTreeAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			showDividers?: boolean,
			select?: 'single' | 'multi' | 'none',
			items?: Array<Partial<NowContentTreeItem>>,
			loadingItems?: Array<{ path?: Array<string>, error?: Array<any>, erroMessage?: string }>,
			manageExpandedItems?: boolean,
			expandedItems?: Array<string>,
			selectedItems?: Array<Array<string>>,
			manageSelectedItems?: boolean
			searchTerm?: string,

		}
		interface NowDropdownItem {
			id?: string | number,
			label: string,
			count?: number,
			icon?: string,
			presence?: "available" | "away" | "busy" | "offline",
			disabled?: boolean
		}
		interface NowDropdownSection {
			id?: string | number,
			label?: string,
			children?: Array<Partial<NowDropdownItem>>,
		}
		interface NowDropdownAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			bare?: boolean,
			configAria?: Record<string, string>,
			disabled?: boolean,
			hideCaret?: boolean,
			hideLabel?: boolean,
			icon?: string,
			items?: Array<Partial<NowDropdownItem | NowDropdownSection>>,
			manageOpended?: boolean,
			manageSelectedItems?: boolean,
			opened?: boolean,
			panelFitProps?: { position?: Array<string>, container?: HTMLElement, constrain: Object },
			placeholder?: string,
			select: 'single' | 'multi' | 'none',
			selectedItems?: Array<Array<string>>,
			showPadding?: boolean,
			size?: ElementSize,
			toooltipContent?: string,
			variant?: "primary" | "secondary" | "secondary-selected" | "tertiary" | "tertiary-selected" | "inherit"
		}
		interface NowHeadingAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			hasNoMargin?: boolean,
			label?: string,
			level?: string | number,
			variant?: "header-primary" | "header-secondary" | "header-tertiary" | "title-primary" | "title-secondary" | "title-tertiary",
			wontWrap?: boolean,
			purpose: string,

		}
		interface NowHighlightedValueAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			label?: string,
			showIcon?: boolean,
			status?: "critical" | "high" | "warning" | "moderate" | "positive" | "info" | "low"
		}
		interface NowIconAttriutes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			icon?: string,
			size?: ElementSize | 'x1',
			spin?: boolean
		}
		interface NowIconPresenceAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			accessibilityMode?: boolean,
			presence?: "available" | "busy" | "away" | "offline",
			size?: ElementSize | 'x1'
		}
		interface NowImageAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			alt?: string,
			src?: string,
			height?: number | string,
			width?: number | string,
			fit?: "fill" | "contain" | "cover" | "none" | "scale-down",
			position?: any,
			sources?: Array<{ srcset?: string, type: string, media?: string, sizes?: string }>
		}

		interface NowLabelValueInlineAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			label?: string,
			reversed?: boolean,
			truncated?: boolean,
			value?: string
		}
		interface NowLabelValueStackedAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			align?: "vertical" | "horizontal" | "horizontal-equal",
			delimiter?: string,
			itemMinWidth?: string,
			items?: Array<{ label: string, value: any }>,
			size?: ElementSize,
			truncated?: boolean,
			wrapped?: boolean
		}
		interface NowLabelHighlightedStringType {
			type?: 'string',
			value?: string,
			previous?: string
		}
		interface NowLabelHighlightedValueType {
			type?: 'highlighted-value',
			label?: string,
			status?: string,
			showIcon?: boolean
		}
		interface NowLabelHightlightedTextLinkType {
			type?: 'text-link',
			label?: string,
			href?: string,
			variant?: string,
			underlined?: boolean,
			opensWindow?: boolean
		}
		interface NowLabelHightligtedJSXType {
			type?: 'jsx',
			value?: any,
			previous?: any
		}
		interface NowLabelHighlightedHTMLType {
			type?: 'html',
			value?: string,
			previous?: string
		}
		interface NowLabelValueTabbedAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			delimiter?: boolean,
			items?: Array<NowLabelHighlightedStringType | NowLabelHighlightedValueType | NowLabelHightlightedTextLinkType | NowLabelHightligtedJSXType | NowLabelHighlightedHTMLType>
			size?: ElementSize
		}

		interface NowLoaderAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			label?: string,
			action?: string,
			size?: ElementSize
		}
		interface NowModalAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			content?: string,
			contentFullWidth?: boolean,
			footerActions?: Array<{ label?: string, variant?: string, disabled?: boolean, clickActionType?: string }>,
			headerLabel?: string,
			manageOpened?: boolean,
			opened?: boolean,
			size?: ElementSize
		}
		interface NowPillAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			canDismiss?: boolean,
			icon?: string,
			imageSrc?: string,
			label?: string,
			manageSelected?: boolean,
			selected?: boolean,
			size?: ElementSize
		}
		interface NowProgressBarAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			configAria?: Record<string, string>
			max?: number,
			pathType?: "initial" | "alert" | "error" | "inactive",
			size?: ElementSize | 'xs',
			value?: number | string
		}
		interface NowRichTextAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			html?: string
		}
		interface NowSplitButtonAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			configAriaAction?: Record<string, string>,
			configAriaTrigger?: Record<string, string>,
			disabled?: boolean,
			icon?: string,
			items?: Array<NowDropdownItem | NowDropdownSection>,
			label?: string,
			manageOpened?: boolean,
			opened?: boolean,
			size?: ElementSize,
			variant?: ButtonVariant,
		}
		interface NowTabItem {
			id: string,
			label?: string,
			icon?: string,
			count?: number,
			presence?: string,
			disabled?: boolean
		}
		interface NowTabsAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			fixedWidth?: boolean,
			hideLabel?: boolean,
			items: Array<NowTabItem>
			manageSelectedItem?: boolean,
			maxWidth?: number,
			selectedItem?: string
		}
		interface NowTemplateCardAssistAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			actions?: Array<{ label?: string, id?: string }>,
			configAria?: Record<string, string>,
			content?: Array<any>,
			footerContent?: { label?: string, value?: string, reversed?: boolean },
			heading?: { label?: string, value?: number | string },
			manageSelected?: boolean,
			selected?: boolean,
			tagline?: { label?: string, icon?: string }
		}
		interface NowTemplateCardAttachmentAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			actions?: Array<{ id?: string, label?: string }>,
			caption?: string,
			heading?: { label?: string, level?: number | string },
			identifier?: { type?: "icon" | 'image', icon?: string, src?: string, alt?: string },
		}
		interface NowTemplateCardOmniChannelAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			actions?: Array<{ label?: string, icon?: string, variant?: string, disabled?: boolean, clickActionType?: string }>,
			content?: { label?: string, value?: string },
			heading?: { label?: string, level?: number | string },
			tagline?: { label?: string, icon?: string }
		}
		interface NowTextLinkAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			configAria?: Record<string, string>,
			download?: boolean | string,
			href?: string,
			label?: string,
			opensWindow?: boolean,
			underlined?: boolean,
			variant?: "primary" | "secondary",
			accessibleLabel?: string
		}
		interface NowToggleAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			checked?: boolean,
			configAria?: Record<string, string>,
			disabled?: boolean,
			manageChecked?: boolean,
			size?: ElementSize
		}
		type TOOLTIP_POSITIONS = "top-center bottom-center" | "bottom-center top-center" | "center-end center-start" | "center-start center-end" | "top-end top-start" | "bottom-end bottom-start" | "top-start top-end" | "bottom-start bottom-end";
		interface NowTooltipAttributes<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			container?: HTMLElement,
			content?: string,
			delay?: number | { show?: number, hide?: number },
			manageOpened?: boolean,
			opened?: boolean,
			position?: Array<TOOLTIP_POSITIONS>
		}
		interface NowCardDividerAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			fullWidth?: boolean,
			blockSpacing?: ElementSize | 'none'
		}
		interface NowChartBarAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			options?: Record<string, any>
		}
		interface NowCheckBoxAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			checked?: boolean,
			label?: string,
			required?: boolean,
			confitAria?: Record<string, string>,
			disabled?: boolean,
			invalid?: boolean,
			manageChecked?: boolean,
			name?: string,
			readonly?: boolean,
			value?: "true" | 'false' | 'indeterminate',
		}
		interface NowCollapseAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			expanded?: boolean
		}
		interface NowCollapseTriggerAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			controls: string
		}
		interface NowDropdownPanelAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			constrain?: { minHeight?: number, minWidth?: string, maxWidth?: number, maxHeight?: number },
			container?: HTMLElement,
			items?: Array<string>,
			manageOpened?: boolean,
			manageSelectedItems?: boolean,
			opened?: boolean,
			position?: Array<string>,
			slect?: 'single' | 'multi' | 'none',
			selectedItems?: Array<string>,
			targetRef?: HTMLElement
		}
		interface NowInputAtts<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			autofocus?: boolean,
			disabled?: boolean,
			helperContent: any,
			invalid?: boolean,
			label?: string,
			manageInvalid?: boolean,
			manageValue?: boolean,
			max?: number,
			maxLength?: number,
			messages?: Array<{ status?: string, header?: string, content?: string, icon?: string }>,
			min?: number,
			minLength?: number,
			multiple?: boolean,
			name?: string,
			optional?: boolean,
			pattern?: string,
			placeHolder?: string,
			readonly?: boolean,
			required?: boolean,
			step?: number,
			type?: 'email' | 'ip' | 'number' | 'text',
			value?: string
		}
		interface NowInputPasswordAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			label?: string,
			autofocus?: boolean,
			compact?: boolean,
			disabled?: boolean,
			invalid?: boolean,
			manageInvalid?: boolean,
			manageValue?: boolean,
			message?: Array<{ status?: string, header?: string, content?: string, icon?: string }>,
			name?: string,
			optional?: boolean,
			placeholder?: string,
			readonly?: boolean,
			required?: boolean,
			requirements?: Array<{ label?: string, pattern?: RegExp }>
			value?: string
		}
		interface NowInputPhoneAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			autofocus?: boolean,
			countryCodes?: Array<{ code: string, name: string }>,
			disabled?: boolean,
			helperContent?: any,
			invalid?: boolean,
			label?: string,
			manageInvalid?: boolean,
			manageValue?: boolean,
			max?: number,
			maxlength?: number,
			messages?: Array<{ status?: string, header?: string, content?: string, icon?: string }>,
			min?: number,
			minlength?: number,
			name?: string,
			number?: string,
			optional?: boolean,
			pattern?: string,
			placeholder?: string,
			readonly?: boolean,
			required?: boolean,
			selectedCountryCode?: string,
			value?: string
		}
		interface NowInputUrlAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			disabled?: boolean,
			helperContent?: any,
			invalid?: boolean,
			label?: string,
			manageInvalid?: boolean,
			manageValue?: boolean,
			maxlength?: number,
			messages?: Array<{ status?: string, header?: string, content?: string, icon?: string }>
			minlength?: number,
			name?: string,
			optional?: boolean,
			pattern?: string,
			placeholder?: string,
			readonly?: boolean,
			required?: boolean,
			value?: string
		}
		interface NowLegacyIconAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			border?: boolean,
			fixedWidth?: boolean,
			flip?: "horizontal" | 'vertical' | 'both',
			inverse?: boolean,
			pull?: 'left' | 'right',
			pulse?: boolean,
			rotation?: '90' | '180' | '270',
			size?: ElementSize | 'xs' | 'xl' | 'xxl' | 'xxxl',
			spin?: boolean,
			transfrom?: string,
			type?: string,
			weight?: 'regular' | 'bold' | 'strong' | 'custom'
		}
		interface NowRadioButtonOption {
			id?: string,
			label?: string,
			checked?: boolean,
			readonly?: boolean,
			disabled?: boolean
		}
		interface NowRadioButtonsAttr<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			disabled?: boolean,
			helperContent?: boolean,
			invalid?: boolean,
			label?: string,
			layout?: 'horizontal' | 'vertical',
			manageValue?: boolean,
			messages?: Array<{ status?: string, header?: string, content?: string, icon?: string }>,
			name?: string,
			optional?: boolean,
			options?: Array<NowRadioButtonOption>,
			readonly?: boolean,
			required?: boolean,
			value?: string
		}
		interface NowScoreAdvancedAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			canClick?: boolean,
			changeInfo?: { change?: string, timestamp?: string, arrow?: string },
			configAria?: Record<string, string>,
			heading?: string,
			hideWhitespace?: boolean,
			score?: string,
			scoreSize?: string,
			sparkline?: any,
			targetInfo?: any,
			timestamp?: string,
			size?: ElementSize
		}
		interface NowScoreBasicAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			canClick?: boolean,
			heading?: string,
			headingPosition?: string,
			hideWhitespace?: boolean,
			score?: string,
			scoreSize?: ElementSize,
			timestamp?: string
		}
		interface NowStepperItem {
			id?: string | number,
			label?: string,
			icon?: string,
			subLabel?: string,
			progress?: 'none' | 'partial' | 'done',
			disabled?: boolean
		}
		interface NowStepperAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			hideNumbers?: boolean,
			items?: Array<NowStepperItem>,
			manageSelectedItem?: boolean,
			selctedItem?: string,
			showCompletedCount?: boolean
		}
		interface NowTextAreaAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			autofocus?: boolean,
			autoresize?: boolean,
			cols?: number,
			configAria?: Record<string, string>,
			disabled?: boolean,
			helperContent?: any,
			invalid?: boolean,
			label?: string,
			manageInvalid?: boolean,
			manageValue?: boolean,
			maxlength?: number,
			messages?: Array<{ status?: string, header?: string, content?: string, icon?: string }>,
			minlength?: number,
			name?: string,
			optional?: boolean,
			placeholder?: string,
			readonly?: boolean,
			required?: boolean,
			resize?: 'both' | 'horizontal' | 'none' | 'vertical',
			rows?: number,
			showBorders?: boolean,
			showCounter?: boolean,
			value?: string
		}
		interface NowDateRangePickerAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			end?: string,
			format?: string,
			labelEnd?: string,
			labelStart?: string,
			language?: string,
			name?: string,
			preset?: string,
			presets?: any,
			start?: string
		}
		interface NowRecordFormSectionConnectedAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			query?: string,
			readOnlyForm?: boolean,
			sysId?: string,
			table?: string,
			view?: string
		}
		interface NowRadioGroupAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			description?: string,
			invalid?: boolean,
			label?: string,
			language?: string,
			name?: string,
			options?: Array<{ value?: string, displayValue?: string }>,
			readonly?: boolean,
			required?: boolean,
			value?: any
		}
		interface NowRecordCheckBoxAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			autofocus?: string | boolean,
			configAria?: Record<string, string>,
			description?: string,
			invalid?: boolean,
			label?: string,
			messages?: Array<{ type?: string, liveUpdate?: string }>,
			name?: string,
			readonly?: boolean,
			required?: boolean,
			value?: string
		}
		interface SecondaryItem {
			fieldLabel?: string,
			displayValue?: string,
			table?: string,
			sysId?: string,
			type: 'simple' | 'reference' | 'highlighted'
		}
		interface PreviewRecordPayload {
			table?: string,
			sysId?: string
		}
		interface NowRecordCommonHeaderAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			classicForm?: boolean,
			primaryValue?: string,
			recordDisplayValue?: string,
			recordTags?: Array<string>,
			secondaryItems?: Array<SecondaryItem>,
			sysId?: string,
			table?: string,
			width?: string,
			workspaceConfigId?: string
		}
		interface SidebarModelConditions {
			field?: string,
			operator?: string,
			value?: string,
			newQuery?: string,
			or?: string,

		}
		interface SidbarFormAction {
			actionAttributes?: string,
			actionComponent?: string,
			addignmentId?: string,
			icon?: string,
			label?: string,
			modelConditions?: Array<SidebarModelConditions>,
			name?: string,
			order?: number,
			tooltip?: string
		}
		interface NowRecordCommonSidebarAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			actions?: Array<SidbarFormAction>,
			classicForm?: boolean,
			formModel?: Record<string, any>,
			manageOpened?: boolean,
			opened?: boolean,
			sidebarPanelExtras?: Record<string, any>
		}
		interface UIAction {
			clientScript?: string,
			hasClientScript?: boolean,
			hint?: string,
			label?: string,
			name?: string,
			sysId?: string,
			type?: string,
		}
		interface UIActionNode {
			label?: string,
			overflow?: boolean,
			type?: string,
			color?: string,
			order?: number,
			'null-null'?: Array<UIAction>
		}
		interface NowRecordCommonUIActionBarAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			classicForm?: boolean,
			handleClick?: (a: UIAction) => void,
			uiActionNodes?: Array<UIActionNode>,
			width?: string
		}
		interface NowRecordDatePickerAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			autofocus?: string | boolean,
			confiAria?: Record<string, string>,
			description?: string,
			firstDayOfWeek?: number,
			formData?: Record<string, any>,
			format?: string,
			invalid?: boolean,
			label?: string,
			language?: string,
			messages?: Array<any>,
			name?: string,
			placeholder?: string,
			readonly?: boolean,
			recordSysId?: string,
			required?: boolean | string,
			tableName?: string,
			timePicker?: boolean,
			utcOffset?: number,
			value?: string
		}
		interface NowRecordFieldLookupConnectedAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			ariDescribedBy?: string,
			ariaLabel?: string,
			ariaLabelledBy?: string,
			autofocus?: boolean,
			dependentField?: string,
			dependentFieldValue?: string,
			description?: string,
			disableDisplayValueWarning?: boolean,
			disableEmailFreeFormEntry?: boolean,
			disableReferenceQualifier?: boolean,
			displayValue?: Array<any> | string | number,
			fieldName?: string,
			hideReferenceIcon?: boolean,
			invalid?: boolean,
			isSearching?: boolean,
			label?: string,
			messages?: Array<any>,
			multiSelection?: boolean,
			name?: string,
			placeholder?: string,
			readonly?: boolean,
			recordSysId?: string,
			referenceAddonReadonly?: boolean,
			referenceTable?: string,
			required?: boolean | string,
			resultLimit?: number,
			results?: Array<any>,
			searchDebounce?: number,
			serilizedChanges?: string,
			tableName?: string,
			value?: any
		}
		interface NowRecordFileAttachmentAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			componentType?: string,
			description?: string,
			displayValue?: string,
			error?: string | boolean,
			extensions?: string,
			fileContent?: Object,
			label?: string,
			language?: string,
			maxAttachmentSize?: string,
			messages?: Array<any>,
			name?: string,
			readonly?: boolean,
			required?: boolean,
			tableName?: string,
			tableSysId?: string,
			value?: string,
			virusState?: string
		}
		interface HTMLEditorMentionConfig {
			enableMentions?: boolean,
			fetch: Function,
			table?: string,
			resourceTable?: string,
			resourceSysId?: string,
			messages?: { loading?: string, noMatches?: string, init?: string }
		}
		interface NowRecordHTMLEditorAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			autofocus?: boolean | string,
			configMentions?: HTMLEditorMentionConfig,
			contentStyle?: string,
			convertUrls?: boolean,
			description?: string,
			enableCodeBlocks?: boolean,
			extendedValidElements?: string
			fonts?: string,
			height?: number,
			invalid?: boolean,
			label?: string,
			language?: string,
			maxHeight?: number,
			messages?: Array<any>,
			minHeight?: number,
			minLineCount?: number,
			name?: string,
			placeHolder?: string,
			plugins?: string,
			readonly?: boolean,
			referringRecordSysId?: string,
			referringTable?: string,
			relativeUrls?: boolean,
			removeHost?: boolean,
			required?: boolean,
			toolbar?: Array<string>,
			validButtons?: string,
			value?: string
		}
		interface NowRecordIPAddressAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			description?: string,
			error?: string | boolean,
			label?: string,
			language?: string,
			messages?: Array<any>,
			name?: string,
			placeholder?: string,
			required?: boolean | string,
			value?: string
		}
		interface SnRecordCommonMultiFormAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			sysIds?: Array<string>,
			table?: string,
			title?: string,
			view?: string,
			workspaceConfigId?: string
		}
		interface NowChartSparkline<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {

		}
		interface SnCheckListAttrs<T = HTMLElement> extends React.AriaAttributes, React.DOMAttributes<T> {
			title?: string,
			checklistId?: string,
			documentId?: string
		}
		interface IntrinsicElements {
			'now-alert': NowElement<NowAlertAttrs>,
			'now-alert-list': NowElement<NowAlertListAttrs>,
			'now-avatar': NowElement<NowAvatarAttrs>
			'now-badge': NowElement<NowBadgeAttrs>,
			'now-button': NowElement<NowButtonAttrs>,
			'now-button-bare': NowElement<NowButtonBareAttrs>,
			'now-button-iconic': NowElement<NowButtonIconicAttributes>,
			'now-button-stateful': NowElement<NowButtonStatefulAttributes>,
			'now-calendar': NowElement<NowCalendarAttributes>
			'now-card': NowElement<NowCardAttributes>
			'now-card-divider': NowElement<NowCardDividerAttrs>,
			'now-card-actions': NowElement<NowCardActionsAttributes>,
			'now-card-footer': NowElement<NowCardFooterAttributes>,
			'now-card-header': NowElement<NowCardHeaderAttributes>,
			'now-chart-bar': NowElement<NowChartBarAttrs>
			'now-content-tree': NowElement<NowContentTreeAttributes>,
			'now-dropdown': NowElement<NowDropdownAttributes>,
			'now-heading': NowElement<NowHeadingAttributes>,
			'now-highlighted-value': NowElement<NowHighlightedValueAttributes>
			'now-icon': NowElement<NowIconAttriutes>,
			'now-icon-presence': NowElement<NowIconPresenceAttributes>,
			'now-image': NowElement<NowImageAttributes>,
			'now-label-value-inline': NowElement<NowLabelValueInlineAttributes>,
			'now-label-value-stacked': NowElement<NowLabelValueStackedAttributes>,
			'now-label-value-tabbed': NowElement<NowLabelValueTabbedAttributes>,
			'now-loader': NowElement<NowLoaderAttributes>,
			'now-modal': NowElement<NowModalAttributes>,
			'now-pill': NowElement<NowPillAttributes>,
			'now-progress-bar': NowElement<NowProgressBarAttributes>,
			'now-rich-text': NowElement<NowRichTextAttributes>,
			'now-split-button': NowElement<NowSplitButtonAttributes>
			'now-tabs': NowElement<NowTabsAttributes>,
			'now-template-card-assist': NowElement<NowTemplateCardAssistAttributes>,
			'now-template-card-attachment': NowElement<NowTemplateCardAttachmentAttributes>,
			'now-template-card-omnichannel': NowElement<NowTemplateCardOmniChannelAttributes>,
			'now-text-link': NowElement<NowTextLinkAttributes>,
			'now-toggle': NowElement<NowToggleAttributes>,
			'now-tooltip': NowElement<NowTooltipAttributes>,
			'now-checkbox': NowElement<NowCheckBoxAttrs>,
			'now-collapse': NowElement<NowCollapseAttrs>,
			'now-collapse-trigger': NowElement<NowCollapseTriggerAttrs>,
			'now-dropdown-panel': NowElement<NowDropdownPanelAttrs>,
			'now-input': NowElement<NowInputAtts>,
			'now-input-password': NowElement<NowInputPasswordAttrs>,
			'now-input-phone': NowElement<NowInputPhoneAttrs>,
			'now-input-url': NowElement<NowInputUrlAttrs>,
			'now-legacy-icon': NowElement<NowLegacyIconAttrs>,
			'now-radio-buttons': NowElement<NowRadioButtonsAttr>,
			'now-score-advanced': NowElement<NowScoreAdvancedAttrs>,
			'now-score-basic': NowElement<NowScoreBasicAttrs>,
			'now-stepper': NowElement<NowStepperAttrs>,
			'now-textarea': NowElement<NowTextAreaAttrs>,
			'now-date-range-picker': NowElement<NowDateRangePickerAttrs>,
			'now-record-form-section-connected': NowElement<NowRecordFormSectionConnectedAttrs>,
			'now-radio-group': NowElement<NowRadioGroupAttrs>,
			'now-record-checkbox': NowElement<NowRecordCheckBoxAttrs>,
			'now-record-common-header': NowElement<NowRecordCommonHeaderAttrs>,
			'now-record-common-sidebar': NowElement<NowRecordCommonSidebarAttrs>,
			'now-record-common-uiactionbar': NowElement<NowRecordCommonUIActionBarAttrs>,
			'now-record-date-picker': NowElement<NowRecordDatePickerAttrs>,
			'now-record-field-lookup-connected': NowElement<NowRecordFieldLookupConnectedAttrs>,
			'now-record-file-attachment': NowElement<NowRecordFileAttachmentAttrs>,
			'now-record-html-editor': NowElement<NowRecordHTMLEditorAttrs>,
			'now-record-ip-address': NowElement<NowRecordIPAddressAttrs>,
			'sn-record-common-multi-form': NowElement<SnRecordCommonMultiFormAttrs>,
			'sn-checklist': NowElement<SnCheckListAttrs>
		}
	}
}`}),define("siDeclEmittor",["require","exports","constants","siParser","tsCompilerOptions","recordWatcher","seismic"],function(e,t,i,n,s,a,r){"use strict";var w=Math.max;function o(){return"undefined"!=typeof window}function l(){return!o()}function d(){return!!l()||c()&&window.recordConfig.canWrite}function c(){return!!l()||window.recordConfig.canRead}function u(e){d()&&e&&(H=new G(e),self.yln={dispatcher:H},H.sendMsg({cmd:W.THREAD_INITIALIZED}))}function g(t=!1){if(!window.recordConfig.isYLNSource){var i=window.ylnWorker;if(t&&(clearTimeout(Q),Q=-1),-1==Q){const t=w(15,parseInt(localStorage.getItem("codenow.threadWaitTime")||"15"));Q=setTimeout(()=>{i!=window.ylnWorker||(console.error("unresponsive parser thread. killing it"),window.ylnWorker.terminate(),q=!1,Y=0,Ce.parseReturnType=!1,H.cancelAllExistingPromises(),createParserThread(e("scripts/SIDeclEmittor")))},1e3*t)}}}function m(t=Object.assign({},b(P().isJavascript()))){if(!d())return Promise.reject("Unable to write Script Include");let i=Object.assign({},Ce);if(i.script="",i.typedeclaration="",i.typesourcemap="",!q){let t={cmd:W.UPDATE_LIBS,lib:e("vs/language/typescript/lib/lib").lib_es5_dts,typeDecl:Te,siRecord:i,isScriptRunner:C()};H.sendMsg(t).then(function(){q=!0})}let n={cmd:W.SINGLE_SCRIPT_INCLUDE_REQUEST,siRecord:i,options:t},s=H.sendMsg(n);return g(),s.then(()=>{clearTimeout(Q),Q=-1,Y--},()=>{clearTimeout(Q),Q=-1,Y--}),Y++,s}function f(t){if(!d())return Promise.reject("Unable to write Script Include");var i=e("vs/language/typescript/lib/lib").lib_es5_dts;t.forEach(e=>{X[e.sys_id]={record:e},e.parseReturnType=!0,"undefined"!=typeof Z[e.sys_id]&&(!Z[e.sys_id]&&console.log("skipping return type for "+e.api_name),e.parseReturnType=Z[e.sys_id])}),g();var n=H.sendMsg({cmd:W.SCRIPT_INCLUDE_REQUEST,typeDecl:Te,lib:i,siRecords:t});return n}function y(){let e=Ce.getScopeAndAPIMap().scope;var t=monaco.languages.typescript.typescriptDefaults;(0==R.length||R!=e)&&(0!=R.length&&V.dispose(),V=e==i.GLOBAL_SOCPE?t.addExtraLib(ue,"yln_"+ee+i.JAVA_GLOBAL_API):t.addExtraLib(ge,"yln_"+ee+i.JAVA_SCOPE_API)),R=e}function h(){ee++,y();let e=new n.DefinitionEmittor(Se);var t={};Ce.isNew()||(t[Ce.sys_id]=!0),fe=e.emit(Ce.getScopeAndAPIMap().scope,t)+j.newline+ye,B&&(B.dispose(),B=null);var s="yln_"+ee+i.JS_API;B=monaco.languages.typescript.typescriptDefaults.addExtraLib(fe,s),J&&J.dispose(),J=null;let a=n.TSChecker.getTypeDefsAsScopeMap(Se,Ce.sys_id),r=n.TSChecker.generateTypedefDeclFromScopemap(a);var o="yln_"+ee+i.TYPE_DEFS;J=monaco.languages.typescript.typescriptDefaults.addExtraLib(r,o),q=!1}function S(e){if(!e)return void h();if(e.id==Ce.sys_id)return;if(!e.sc)return void console.warn("scope name not found in record watcher "+JSON.stringify(e));Se[e.sc]||(Se[e.sc]=[]);let t=-1,s=Se[e.sc];for(let n=0;n<s.length;n++)if(s[n].id==e.id){t=n;break}let a=n.SITSFormat.expandMinifiedFormat(e,e.sc,n.SITSFormat.isTypescript(e.f));-1==t?Se[e.sc].push(a):"delete"==e.op?Se[e.sc].splice(t,1):Se[e.sc][t]=a,h()}function T(){return!!window.g_ck}function C(){return!!window.recordConfig&&window.recordConfig.isFromScriptRunner&&"undefined"==typeof g_form}function b(e,t=!1){let i={};if(e){var n=monaco.languages.typescript.typescriptDefaults.getCompilerOptions();return n.target=s.default.target,n.allowJs=s.default.allowJs,n.checkJs=s.default.checkJs,n.strict=s.default.strict,n.jsx=s.default.jsx,n.jsxFactory=s.default.jsxFactory,n.noImplicitAny=s.default.noImplicitAny,n.strictNullChecks=s.default.strictNullChecks,(s.default.target>re.ES2015||C())&&(n.sourceMap=s.default.sourceMap),n.noImplicitThis=s.default.noImplicitThis,n.noImplicitReturns=s.default.noImplicitReturns,n.noUnusedParameters=s.default.noUnusedParameters,n.noUnusedLocals=s.default.noUnusedLocals,n.noFallthroughCasesInSwitch=s.default.noFallthroughCasesInSwitch,n.linter=s.default.linter,t||(n.declaration=!1),n}return i.jsx=s.default.jsx,i.jsxFactory=s.default.jsxFactory,i.noFallthroughCasesInSwitch=s.default.noFallthroughCasesInSwitch,i.allowUnreachableCode=s.default.allowUnreachableCode,i.module=monaco.languages.typescript.ModuleKind.None,i.noResolve=s.default.noResolve,i.skipLibCheck=s.default.skipLibCheck,i.skipDefaultLibCheck=s.default.skipDefaultLibCheck,i.target=s.default.target,i.noImplicitAny=s.default.noImplicitAny,i.strictNullChecks=s.default.strictNullChecks,i.noImplicitThis=s.default.noImplicitThis,i.noImplicitReturns=s.default.noImplicitReturns,i.experimentalDecorators=s.default.experimentalDecorators,i.noUnusedLocals=s.default.noUnusedLocals,i.noUnusedParameters=s.default.noUnusedParameters,i.declaration=s.default.declaration,i.sourceMap=s.default.sourceMap,i.noEmitHelpers=s.default.noEmitHelpers,i.isolatedModules=s.default.isolatedModules,i.noEmitOnError=s.default.noEmitOnError,i.allowJs=!0,i.strict=s.default.strict,i.stripInternal=s.default.stripInternal,i.linter=s.default.linter,i}function _(){return Se}function E(){return P().isGlobalScope()?ue:ge}function I(){return me}function A(){return fe}function x(){return he}function N(){return E()+j.newline+I()+j.newline+A()+j.newline+x()}function F(){return Te}function v(e,t,s,a){Te=e;var r=i.GLOBAL_SOCPE;if(0!=t.length){var o=t.split(".");r=o[0].trim()}var l={};for(let i of Te)l[i.name]="string"==typeof i.json_value?{api:JSON.parse(i.json_value).api,customization:i.customization}:{api:i.json_value.api,customization:i.customization};for(let i in Se||!l.jsAPI||(Se=l.jsAPI.api),"string"==typeof Se&&(Se=JSON.parse(Se+"")),Se){let e=Se[i];e.forEach((e,t,s)=>{if("undefined"!=typeof e.f){let a=n.SITSFormat.expandMinifiedFormat(e,i);a&&(s[t]=a)}})}let p=n.TSChecker.getTypeDefsAsScopeMap(Se,s),d=n.TSChecker.generateTypedefDeclFromScopemap(p),c=new n.DefinitionEmittor(Se);ue=l.javaGlobalAPI.api+j.newline+l.javaGlobalAPI.customization,ge=l.javaScopedAPI.api+j.newline+l.javaScopedAPI.customization,me=l.tableAPI.api+j.newline+l.tableAPI.customization,fe=c.emit(r,a)+j.newline+l.jsAPI.customization,ye=l.jsAPI.customization;var u=monaco.languages.typescript.typescriptDefaults;(0==R.length||R!=r&&r==i.GLOBAL_SOCPE)&&(0!=R.length&&V.dispose(),V=r==i.GLOBAL_SOCPE?u.addExtraLib(ue,i.JAVA_GLOBAL_API):u.addExtraLib(ge,i.JAVA_SCOPE_API)),R=r,U||(U=u.addExtraLib(me,i.TABLE_API)),B&&B.dispose(),B=null,B=u.addExtraLib(fe,i.JS_API),J&&J.dispose(),J=null,he=d,0<d.length&&(J=u.addExtraLib(d,i.TYPE_DEFS))}function P(){return Ce}function L(){return D()?i.TSX_FILE_NAME:Ce.isJavascript()?"module.js":"module.ts"}function k(e=!1,t){if(!Ce.isTypescript()&&(be&&(be.dispose(),be=null),Ce.canGenerateDeclaration()||C()))if(!window.recordConfig.useTypeChecker){var i=Ce.generateCurrentSIDeclaration(esprima,e||!!window.recordConfig.jsdoc);be=monaco.languages.typescript.typescriptDefaults.addExtraLib(i,"current.d.ts")}else{if(!t)return;if(0<t.tf.length){let e=Ce.formatCurrentSITSFormat(t);be=monaco.languages.typescript.typescriptDefaults.addExtraLib(e,"current.d.ts")}}}function M(){return window.recordConfig?window.recordConfig.libVersions.jsLibState:!!window.snMonacoConfig&&window.snMonacoConfig.libState.jsLibState}function D(){return window.recordConfig&&window.recordConfig.isSeismic}function O(){if(_e)return;_e=!0;const e=["node_modules/@types/react/global.d.ts","node_modules/@types/prop-types/index.d.ts","node_modules/@types/react/index.d.ts","node_modules/csstype/index.d.ts"];const t=window.recordConfig.paths.app.startsWith("http://yln:9090");t?monaco.languages.typescript.typescriptDefaults.addExtraLib(r.seismicDTS,"typings/seismic/index.d.ts"):e.push("typings/seismic/index.d.ts"),e.forEach(e=>{let i="";t||!T()?i+=`${"http://yln:9090"}/${e}`:i=e.replace("node_modules","https://www.unpkg.com/"),fetch(i).then(e=>e.text()).then(t=>{monaco.languages.typescript.typescriptDefaults.addExtraLib(t,e)})})}Object.defineProperty(t,"__esModule",{value:!0}),i=__importStar(i),n=__importStar(n),s=__importDefault(s),a=__importDefault(a),r=__importStar(r);var j=n.TokenType,R="",V,U,B,J,W;(function(e){e[e.THREAD_INITIALIZED=0]="THREAD_INITIALIZED",e[e.SCRIPT_INCLUDE_REQUEST=1]="SCRIPT_INCLUDE_REQUEST",e[e.SCRIPT_INCLUDE_RESPONSE=2]="SCRIPT_INCLUDE_RESPONSE",e[e.SINGLE_SCRIPT_INCLUDE_REQUEST=3]="SINGLE_SCRIPT_INCLUDE_REQUEST",e[e.SINGLE_SCRIPT_INCLUDE_RESPONSE=4]="SINGLE_SCRIPT_INCLUDE_RESPONSE",e[e.UPDATE_LIBS=5]="UPDATE_LIBS",e[e.PROGRESS_MSG=6]="PROGRESS_MSG"})(W||(W={}));class K{constructor(){}static getInstance(e,t,i){return null==K.instance?(K.instance=new K,K.instance.typeInfo=n.TSChecker.initTypeInfoForSingleSI(e,t,i),K.instance):(e&&t&&(K.instance.typeInfo.dispose(),K.instance.typeInfo=n.TSChecker.initTypeInfoForSingleSI(e,t,i)),K.instance)}handleRequest(e){let t=new n.ClientSIRecordData(e.siRecord);return Ce=t,console.log("si reqest parser came"),Ce.isNew()&&2>t.api_name.split(".").length&&(t.api_name="global.Point"),this.typeInfo.getTypeInfo(Ce,e.options)}}t.SingleSIRequestHandler=K;class G{constructor(e){this.sender=e,this.pendingReplies={},this.seqNumber=0,e.onmessage=this.handleMessage.bind(this)}cancelAllExistingPromises(){for(let e in this.pendingReplies)this.pendingReplies[e].reject("Parser thread is too busy for this operation. Please try again or contact yln99517@gmail.com with your SI"),delete this.pendingReplies[e]}sendReplyMsg(e,t){this.sender.postMessage(Object.assign({seqNum:t},e))}sendMsg(e){var t=this.seqNumber++ +"",i=Object.assign({seqNum:t},e),n=new Promise((e,n)=>{this.pendingReplies[t]={resolve:e,reject:n},this.sender.postMessage(i)});return n}isSIProgressMsg(e){return e.cmd==W.PROGRESS_MSG}isSingleSIRequest(e){return e.cmd==W.SINGLE_SCRIPT_INCLUDE_REQUEST}isSIParserRequest(e){return e.cmd==W.SCRIPT_INCLUDE_REQUEST}isSIParserResp(e){return e.cmd==W.SCRIPT_INCLUDE_RESPONSE}isLibUpdateMsg(e){return e.cmd==W.UPDATE_LIBS}handleMessage(t){var e=t.data,i=this.pendingReplies[e.seqNum];if(i){delete this.pendingReplies[e.seqNum];try{e.errorMsg?i.reject(e.errorMsg):i.resolve(e)}catch(t){console.log("error on resolving thread message "+t)}return}if(this.isSIParserRequest(e)){var s=n.TSChecker.generateTypeInfo(e.siRecords,e.lib,e.typeDecl,e=>{var t={seqNum:"-1",cmd:W.PROGRESS_MSG,name:e.name,sysId:e.sysId,percentage:e.percentage,decl:e.decl};this.sendReplyMsg(t,"-1")}),a={seqNum:e.seqNum,cmd:W.SCRIPT_INCLUDE_RESPONSE,formatterResult:s.formatterResult,types:s.types,errors:s.errors};this.sendReplyMsg(a,e.seqNum)}else if(this.isSingleSIRequest(e)){let t=K.getInstance().handleRequest(e);this.sendReplyMsg(t,e.seqNum)}else this.isLibUpdateMsg(e)?(K.getInstance(e.lib,e.typeDecl,e.siRecord),self.recordConfig.isFromScriptRunner=e.isScriptRunner,this.sendReplyMsg({replayMsg:"thank you",cmd:W.SINGLE_SCRIPT_INCLUDE_RESPONSE},e.seqNum)):e.cmd==W.THREAD_INITIALIZED?z=!0:this.isSIProgressMsg(e)&&o()&&(g(!0),Z[e.sysId]=!!e.decl,!e.decl&&console.log("Parser started for => "+e.name),"function"==typeof window.onSIParserProgressEvent&&window.onSIParserProgressEvent(e))}}t.isMainThread=o,t.isWorkerThread=l,t.canWriteSI=d,t.canReadSI=c;var z=!1,H;t.onThreadInitialized=u;var q;let Y=0,Q=-1;t.generateTypeDeclForSingleRecord=m;t.gotoDefintionService={open:function(){var e=arguments[0];if("string"==typeof arguments[0]&&(e=monaco.Uri.parse(arguments[0])),"code.devsnc.com"===e.authority)return void window.open(arguments[0]);let t=e.authority.split(".");const i=_();if(!i||!i[t[0]])return window.open(e.toString(),null),void console.log("invalid scope name when opening file "+e.authority);const n=i[t[0]].find(e=>e.api==t[1]);if(!n)return void console.log("invalid scope name when opening file "+e.authority);var s=e.path.substr(1),a=`./sys_script_include.do?sys_id=${n.id}&gotoLine=${s}`;return window.open(a),console.log(JSON.stringify(arguments)),{catch:function(){console.log("eror callback")}}}};var X={},Z={};t.generateTypeDeclarations=f,t.scopeUpdated=y;var ee=0;t.apiDeclarationUpdated=h,t.siUpdated=S;var te;if(o()&&"undefined"!=typeof BroadcastChannel){var ie=a.default();if(ie){var ne=ie.getChannel("/yln/typedef");ne.subscribe(e=>{S(e.data)})}}t.updateSIDeclListeners=function(e){!te||te.postMessage(JSON.stringify(e))},t.isServiceNow=T;class se{constructor(e="",t="",i="",n="",s,a){this.js=e,this.declaration=t,this.sourceMap=i,this.tsScript=n,this.backEndDecl=s,this.linterErrors=a}}t.TranspilerOutput=se;const ae=e=>t=>{function i(t){if(t=ts.visitEachChild(t,i,e),!ts.isTemplateExpression(t))return t;let s=t.getFullText(),a=n.getDotWalkingRegExp(),r=s.match(a);if(!r)return t;if(0==r.length)return t;var o=r[0].split(".");if(1>=o.length)return t;let l=function(e){let t=e.replace(a,(e,t,i,n)=>{var s=i;i=i.replace(/^\$\${/,""),i=i.replace(/\}$/,"");let a=i.split(".");return 1==a.length?s:(a.splice(0,1),t+a.join(".")+n)});return t.trim()}(s);return ts.createStringLiteral(l)}return ts.visitNode(t,i)};t.isScriptRunner=C;var re;(function(e){e[e.ES3=0]="ES3",e[e.ES5=1]="ES5",e[e.ES2015=2]="ES2015",e[e.ES2016=3]="ES2016",e[e.ES2017=4]="ES2017",e[e.ES2018=5]="ES2018",e[e.ESNext=6]="ESNext",e[e.JSON=100]="JSON",e[e.Latest=6]="Latest"})(re||(re={})),t.getCompilerOptions=b;class oe{constructor(e,t,i,n=ts.ScriptTarget.ES5){this.sourceContent=e,this.libContent=t,this.snLibContent=i,this.SOURCE_PATH="module.ts",this.LIB_PATH="lib.d.ts",this.SN_LIB_PATH="node_modules/@types/snlib/index.d.ts",this.sourceFileMap={},this.fileMap={},t+="\n\n\n"+N(),this.sourceFileMap[this.LIB_PATH]=ts.createSourceFile(this.LIB_PATH,t,n);let s=Ce.isJavascript()?ts.ScriptKind.JS:ts.ScriptKind.TS;Ce.isJavascript()&&(this.SOURCE_PATH="module.js");const a=ts.createSourceFile(this.SOURCE_PATH,Ce.tsscript,ts.ScriptTarget.ES5,!0,s);this.sourceFileMap[this.SOURCE_PATH]=a;const r=ts.transform(a,[ae]),o=r.transformed[0],l=ts.createPrinter();let p=l.printFile(o);ts.disposeEmitNodes(a),r.dispose(),this.sourceFileMap[this.SOURCE_PATH]=a.update(p,{span:{start:0,length:e.length},newLength:p.length})}getFileMap(){return this.fileMap}getSourceFile(e){return this.sourceFileMap[e]}writeFile(e,t){"module.js"==e?this.fileMap.js=t:"module.d.ts"==e?this.fileMap.declaration=t:this.fileMap.sourceMap=t}getDefaultLibFileName(){return"lib.d.ts"}useCaseSensitiveFileNames(){return!1}getCanonicalFileName(e){return e}getCurrentDirectory(){return""}getNewLine(){return"\r\n"}fileExists(e){return!0}readFile(e){return""}directoryExists(){return!0}getDirectories(){return[]}static compile(t=Object.assign({},b(!1)),i=!1){let n=new se,s=e("vs/language/typescript/lib/lib").lib_es5_dts+"\n\n\n"+N();var a=new oe(P().tsscript,s,N());let r=ts.createProgram([i?"module.js":"module.ts"],t,a),o=r.emit(),l=a.getFileMap();for(var d in l)console.log(l[d]);let p=ts.getPreEmitDiagnostics(r).concat(o.diagnostics);p.forEach(e=>{if(e.file){let{line:t,character:i}=e.file.getLineAndCharacterOfPosition(e.start),n=ts.flattenDiagnosticMessageText(e.messageText,"\n");console.log(`${e.file.fileName} (${t+1},${i+1}): ${n}`)}else console.log(`${ts.flattenDiagnosticMessageText(e.messageText,"\n")}`)});let c=o.emitSkipped?1:0;if(console.log(`Process exiting with code '${c}'.`),r.getSourceFiles().forEach(e=>ts.disposeEmitNodes(e)),0!=c)return Promise.reject("Compilation Errros");n.js=l.js,n.tsScript=Ce.tsscript,n.sourceMap=l.sourceMap;var u=Ce.emitTSDeclaration(l.declaration);return n.declaration=Ce.typedeclaration=JSON.stringify(u),Ce.script=n.js,Ce.typesourcemap=n.sourceMap,Promise.resolve(n)}static getModelValueAfterTransform(e){let t=oe.applyTemplateTransformation(e);const i=t.transformed[0],n=ts.createPrinter();let s=n.printFile(i);return t.dispose(),s}static getSourceAfterTransform(e){let t=oe.applyTemplateTransformation(e);return t.transformed[0]}static applyTemplateTransformation(e){let t="proxyModel.js",i=ts.ScriptKind.JS;Ce.isTypescript()&&(t="proxyModel.ts",i=ts.ScriptKind.TS);const s=ts.createSourceFile(t,e,ts.ScriptTarget.ES5,!0,i),a=ts.transform(s,[n.TSChecker.dotWalkingTransformer]);return a}}t.TSCompilerHost=oe,o()&&(window.transform=oe.getModelValueAfterTransform);class le{constructor(e,t=""){this.pathName=e,this.filter=t}fetch(){if(this.fetchPromise)return this.fetchPromise;var e=this;return this.fetchPromise=new Promise(t=>{jQuery.ajax({url:e.pathName,data:{},headers:{"X-UserToken":window.g_ck},success:function(i){e.onFetch(i);try{t(i.result)}catch(e){console.log("error on resolving promise")}console.log("received for path "+e.pathName)}})}),this.fetchPromise}onFetch(e){}}t.RecordFetcher=le;class pe extends le{constructor(e,t=""){super(e,t),this.pathName=e,this.isDataAvailable=!1,(!T()||M())&&(this.isDataAvailable=!0,this.cachedData="string"==typeof window.snLibContent?JSON.parse(window.snLibContent).result:window.snLibContent.result)}fetch(){return this.isDataAvailable?new Promise(e=>{e(this.cachedData)}):super.fetch()}onFetch(e){this.isDataAvailable=!0,this.cachedData=e.result}}t.CachedRecordData=pe;var de=i.DECLARATION_TABLE_PATH;o()&&!T()&&(de=i.DECLARATION_DATA_PATH);var ce=null;o()&&(ce=new pe(de,""),ce.fetch());let ue="",ge="",me="",fe="",ye="",he="",Se;t.getSIMap=_,t.getJavaAPI=E,t.setJavaAPI=function(e){ue=e},t.getTableAPI=I,t.getJSAPI=A,t.getTypedefAPI=x,t.getAllDeclAPI=N;var Te;t.getTypeDeclarations=F,t.internalInitialize=v;let Ce;t.getCurrentSI=P,t.getCurrentModuleName=L;let be;t.updateCurrentSIDeclaration=k,t.isJSCacheReady=M,t.isSeismicComponent=D,t.isNewFiddle=function(){return window.recordConfig&&"-1"===window.recordConfig.uxfRecord.sys_id};let _e=!1;t.loadJSXIntellisense=O,t.initializeWithSIRecord=function(e){Ce=e;var t=new Promise(e=>D()?e():void ce.fetch().then(function(t){let i={};Ce.isNew()||(i[Ce.sys_id]=!0),v(t,Ce.api_name,Ce.sys_id,i),T()&&k(!1),e()}));return t},t.initializeTypeDeclarations=function(e=""){return e=e||"global.",new Promise(t=>{ce.fetch().then(function(i){v(i,e,"-1",{}),t()})})}}),define("fileSearch",["require","exports","siDeclEmittor","siParser"],function(e,t,n,s){"use strict";var o=Math.floor,l=Math.max;function a(e,t){for(var n=-1,s=0,a=0,r=e.length,o=0,p=t.length,d=!1,c=!1,u=!0,g=null,m=null,f=null,y=0,h=[];o!=p;){var S=a==r?null:e.charAt(a),T=t.charAt(o),C=null==S?null:S.toLowerCase(),b=T.toLowerCase(),_=T.toUpperCase(),E=S&&C==b,I=g&&m==b,A=E&&g,x=g&&S&&m==C;if((A||x)&&(s+=y,h.push(f),g=null,m=null,f=null,y=0),E||I){var N=0;if(0==a){var F=l(o*-3,-9);s+=F}d&&(N+=5),u&&(N+=10),c&&T==_&&b!=_&&(N+=10),E&&++a,N>=y&&(null!=g&&(s+=n),g=T,m=g.toLowerCase(),f=o,y=N),d=!0}else v+=T,s+=n,d=!1;c=T==b&&b!=_,u="_"==T||" "==T,++o}g&&(s+=y,h.push(f));for(var v="",P=0,L=0,k;L<h.length;++L){k=h[L];let e=t.substr(P,k-P),i=t.charAt(k);v+=`<span class = "no-match">${e}</span><span class='highlight'>${i}</span>`,P=k+1}0!=t.length-P&&(v+=`<span class="no-match">${t.substr(P,t.length-P)}</span>`);var M=a==r;return[M,s,v]}function r(e,t,s){function r(){clearTimeout(p),p=null;var r=performance.now()+o,d=n.getSIMap();for(var c in d){let i=d[c];for(var u=0;u<i.length;u++){let n=i[u].api.split("."),s=n[0];2==n.length&&i[u].api.split(".")[1];let r=e(t,s);e==a&&!0!=r[0]||l.push({rank:r[1],matchStr:r[2],item:i[u]})}}return s(l),null}var o=1e3/30,l=[],p=null;this.cancel=function(){null!==p&&clearTimeout(p)},this.start=function(){r()},this.flush=function(){o=1/0,r()}}Object.defineProperty(t,"__esModule",{value:!0}),n=__importStar(n);class p{constructor(e){this.domNode=e,this.id="FileSearch"}getId(){return this.id}getDomNode(){return this.domNode}getPosition(){return null}}var d="<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAPCAMAAADXs89aAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABOFBMVEVCpfX///9CpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfVCpfX///8Jns0AAAAAZnRSTlMAAEx9fn98eAcsiqeURr0SAkTi+HQOmtTTz+ff0Agg6uu25jIWKCYhYSInUvV1Q1kLZD5XbvryVm1ezUkxuu38XwYw7vNjRSOTrBCp+cQ6Kp0Pw7zW/r9yThOHszaIgCQFjqWbaBXwbi/OAAAAAWJLR0QB/wIt3gAAAAd0SU1FB+MCDg4uBi7hZswAAAABb3JOVAHPoneaAAAA2klEQVQY022QaVcBcRTGb/4TlUhkUKSpUGNsMVH2Jdq0b5Rdz/f/CGYmh8nxe3Gf5/ze3HsuGRjjuFXGmNG0RrS+Yd60kIIVM7Zs23YlHDtOIt7l9uwCe163x7fvx4FwCBwRHQeCIQ44ORWDFIYUoSgfi5NGAjhTMwkHR3NSgLZHlHEupGc6M9W2CxmQLrMLmiiXLwDFUnlBE1XMVdSu/ut6QxnXwI1e397dNx98jwLwpL/k+QWwv7694yOn6U/gS81WW1Kf8B36W/PT6fa00q8PhqPxr9JWljIBIUAu3lTAeuwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDItMTRUMTQ6NDY6MDYrMDA6MDBwkCElAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAyLTE0VDE0OjQ2OjA2KzAwOjAwAc2ZmQAAAABJRU5ErkJggg==\" alt=\"\" />";class c{constructor(e,t){this.editor=e,this.callback=t,this.id="FileSearch",this.fileSearchWrapper="FileSearch-filesWrapper",this.fileSearchInput="FileSearch-searchInput",this.domNode=document.createElement("div"),this.domNode.setAttribute("id",this.id),this.domNode.setAttribute("class",this.id),this.filterTimerId=-1,this.nextResultTimerId=-1,this.currentIndex=0}getNode(){return this.domNode}close(){}static isActive(){return c.isOpen}dispose(){c.isOpen=!1,this.domNode.removeEventListener("click",this),this.domNode.removeEventListener("keydown",this),this.domNode.removeEventListener("mousewheel",this),document.removeEventListener("keydown",this),this.editor.removeOverlayWidget(this.overlayWidget),this.editor.focus()}handleEvent(t){var e=Math.ceil;if("mousewheel"==t.type)return t.stopImmediatePropagation(),void t.stopPropagation();let i,n;if("keydown"==t.type){var s=t;if(27==s.keyCode||13==s.keyCode){if(13==s.keyCode&&(i=jQuery(this.domNode).find("#FileSearch-filesWrapper"),n=i.children(),this.currentIndex<n.length)){let e=n[this.currentIndex].getAttribute("data-sysid"),t=n[this.currentIndex].getAttribute("data-apiname");this.callback({apiName:t,sysId:e})}return s.stopImmediatePropagation(),s.stopPropagation(),s.preventDefault(),void this.dispose()}if(40==s.keyCode||38==s.keyCode){t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),i=jQuery(this.domNode).find("#FileSearch-filesWrapper"),n=i.children();let a=this.currentIndex;40==s.keyCode?this.currentIndex++:(this.currentIndex--,0>this.currentIndex&&(this.currentIndex=n.length-1)),this.currentIndex%=n.length,0<=a&&jQuery(n[a]).removeClass("selected"),jQuery(n[this.currentIndex]).addClass("selected"),!c.itemHieght&&0<n.length&&(c.itemHieght=n[0].getBoundingClientRect().height);let r=c.itemHieght||23,l=r*this.currentIndex,p=i.height(),d=i.scrollTop();if(38==s.keyCode){if(l=o(l),l>=d&&l<p+d)return;i.scrollTop(l)}else{let t=e(l+r);if(t>=d&&t<p+d)return;i.scrollTop(t-p)}return}let r=s.keyCode;if(!(47<r&&58>r||64<r&&91>r||96<r&&123>r||8==r||13==r))return;var a=this.domNode.querySelector("#"+this.fileSearchInput);return-1!=this.filterTimerId&&(window.clearTimeout(this.filterTimerId),this.filterTimerId=-1),-1!=this.nextResultTimerId&&window.clearTimeout(this.nextResultTimerId),this.nextResultTimerId=-1,void(this.filterTimerId=window.setTimeout(()=>{this.filter(a.value)},100))}var r=t.target,l=r.closest("div.FileSearch-file");if(null!=l){let e=l.dataset.apiname,t=l.dataset.sysid;return this.dispose(),void this.callback({apiName:e,sysId:t})}null==r.closest("div#FileSearch")&&this.dispose()}open(){c.isOpen=!0,this.domNode.innerHTML=this.constructHTML(),this.domNode.addEventListener("click",this),this.domNode.addEventListener("keydown",this),this.domNode.addEventListener("mousewheel",this),document.addEventListener("keydown",this),this.overlayWidget=new p(this.domNode),this.editor.addOverlayWidget(this.overlayWidget),this.domNode.querySelector("#"+this.fileSearchInput).focus()}filter(e){var t=this.domNode.querySelector("#"+this.fileSearchWrapper);let i=this.constructItems(e);this.currentIndex=-1,!i||(t.innerHTML=i)}constructItemsUsingFuzzy(e,t=50){!this.asyncMatcher||(this.asyncMatcher.cancel(),this.asyncMatcher=void 0),this.asyncMatcher=new r(a,e,e=>{e=e.sort(function(e,t){return t.rank-e.rank});let i=0,n="",a="";for(let r of e){let e="<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4gcPDwoiWcgyPAAAAh5JREFUSMfV1U2IjWEUB/Df/aDBVVj4mHEZnwmFBVGWdthJESGEUrOSpTWRKERNYqwsSKJ8pGztrCjF1FgIibi5GMPiOdc83ebOZXb+9fae53nOec/X/zkv/zsKI23WB7pbGnRU+0c9b9YdzUEJMzEev/AOtSbVMqqYFTpvMIDBXKEVpqEPi8OgB7ey8yU4gg2hCx/wCMfxvJ2DErrigUnZ2QJcwZommwp2Yzl24nmxTRl/xXsok2Ff9vEaHuIBvsTefCxtl0ErTMS6bN2LoxHAXmzEKTz+GwcjkaCEjmz9BvWQL0Xp/pChXYlGwleJKQ0cwB6p0YP5xzuq/aM6KLTYH8QNfI/1XFzEHRxGZ0OxPtA9pgzgJk7jW6zHYS3O4i52xF5bB3kWOYvqOIb9eGL4YhWwQupFD4pjzUBE3yexZg/uG272BOkSri//7VxpyiDHe1yLsm3DCUzFdGzKM1goNSwvT34+lMmzcQjzsr0aLkfJGugqhreDUnPOSiwoYjVmhOIPfAx5C27jPM5gmdTQElZJt7iBD2VpWJ2UZs1CzMHrUK6EYj+ehbwIK0PeHPJT/AybOXH2GQ/K0gy5Ho0qhMHKLIofuBBO4Zw0ovdF5NV4cgxJTLpXiCZPkS7J9lAeL7HkZSj2GuY8aR5txa4o0eQI7ite4Gr0o1ZoYlFnNK6CT+HgrdaooFtiTEn6H7yKd2LKv/z+GhiLzf+L3xLMgT1r10J2AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA3LTE1VDEzOjEwOjM0KzAyOjAwRXld0gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNy0xNVQxMzoxMDozNCswMjowMDQk5W4AAAAASUVORK5CYII=\" alt=\"\" />";s.SITSFormat.isTypescript(r.item.f)&&(e=d);let o=`<div class="FileSearch-file" data-apiname="${r.item.api}" data-sysId="${r.item.id}">
					${e}<span class="normName">${r.matchStr}</span></div>`;if(i>t){a+=o;continue}i++,n+=o}var r=this.domNode.querySelector("#"+this.fileSearchWrapper);this.currentIndex=-1,r.innerHTML=n;let o=jQuery(this.domNode).find("#FileSearch-filesWrapper");setTimeout(()=>{o.scrollTop(0)},0),this.appendNextResultSet(a)}),this.asyncMatcher.start()}appendNextResultSet(e){if(0!=e.length){var t=this.domNode.querySelector("#"+this.fileSearchWrapper);this.nextResultTimerId=window.setTimeout(()=>{jQuery(e).appendTo(t)},200)}}constructItems(e,t=50){if(0<e.length)return this.constructItemsUsingFuzzy(e);var a="",r=0;0>t&&(t=50),t=l(t,50);var o=new RegExp(e,"gi"),p=n.getSIMap();let c="";for(var u in p)for(var g=p[u],m=0;m<g.length;m++){var f=g[m],y=f.api.split("."),h=y[0];if(1<y.length&&(h=y[1]),!e||null!=h.match(o)){r++;var S="<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4gcPDwoiWcgyPAAAAh5JREFUSMfV1U2IjWEUB/Df/aDBVVj4mHEZnwmFBVGWdthJESGEUrOSpTWRKERNYqwsSKJ8pGztrCjF1FgIibi5GMPiOdc83ebOZXb+9fae53nOec/X/zkv/zsKI23WB7pbGnRU+0c9b9YdzUEJMzEev/AOtSbVMqqYFTpvMIDBXKEVpqEPi8OgB7ey8yU4gg2hCx/wCMfxvJ2DErrigUnZ2QJcwZommwp2Yzl24nmxTRl/xXsok2Ff9vEaHuIBvsTefCxtl0ErTMS6bN2LoxHAXmzEKTz+GwcjkaCEjmz9BvWQL0Xp/pChXYlGwleJKQ0cwB6p0YP5xzuq/aM6KLTYH8QNfI/1XFzEHRxGZ0OxPtA9pgzgJk7jW6zHYS3O4i52xF5bB3kWOYvqOIb9eGL4YhWwQupFD4pjzUBE3yexZg/uG272BOkSri//7VxpyiDHe1yLsm3DCUzFdGzKM1goNSwvT34+lMmzcQjzsr0aLkfJGugqhreDUnPOSiwoYjVmhOIPfAx5C27jPM5gmdTQElZJt7iBD2VpWJ2UZs1CzMHrUK6EYj+ehbwIK0PeHPJT/AybOXH2GQ/K0gy5Ho0qhMHKLIofuBBO4Zw0ovdF5NV4cgxJTLpXiCZPkS7J9lAeL7HkZSj2GuY8aR5txa4o0eQI7ite4Gr0o1ZoYlFnNK6CT+HgrdaooFtiTEn6H7yKd2LKv/z+GhiLzf+L3xLMgT1r10J2AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA3LTE1VDEzOjEwOjM0KzAyOjAwRXld0gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNy0xNVQxMzoxMDozNCswMjowMDQk5W4AAAAASUVORK5CYII=\" alt=\"\" />";s.SITSFormat.isTypescript(f.f)&&(S=d);let e=`<div class="FileSearch-file" data-apiname="${f.api}" data-sysId="${f.id}">${S}<span class="normName">${h}</span></div>`;r>=t?c+=e:a+=e}}return this.appendNextResultSet(c),a}constructHTML(){var e=this.constructItems("");return`<div class="FileSearch-searchWrapper">
					<input type="text" class="FileSearch-searchInput" id="FileSearch-searchInput" autocorrect="off" autocapitalize="off" spellcheck="false" autocomplete="off">
				</div>
				<div class="FileSearch-filesWrapper" id="FileSearch-filesWrapper">
				${e}
			</div>`}}t.FileSearch=c,c.isOpen=!1}),define("monacoField",["require","exports","codenowUtils","siDeclEmittor"],function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=__importStar(n);let s=CustomEvent;var a;(function(e){e.js="javascript",e.jsx="javascript",e.ts="typescript",e.tsx="typescript",e.html="html",e.css="css",e.xml="xml",e.json="json"})(a||(a={}));var r;(function(e){e[e.set=0]="set",e[e.add=1]="add"})(r||(r={}));class o{constructor(e,t){this.el=e,this.monacoField=t;let s=t.fileName.split(".");this.internalSave=!1;let r=a.js;this.decorationSet=new Set,this.hasTranspiler()&&(r=a[t.srcType]),0<s.length&&(r=a[s[s.length-1]]);let o=r;o===a.js||o===a.jsx||o===a.ts||o===a.tsx?o=a.ts:o===a.xml||o===a.html?o=a.html:void 0;this.oldDecorations=[],this.model=monaco.editor.createModel(t.srcValue,o,monaco.Uri.file(t.fileName)),this.editor=monaco.editor.create(e,{model:this.model,glyphMargin:!0,language:o,fontSize:16,formatOnType:!0,lineNumbersMinChars:2,formatOnPaste:!0},{openerService:n.gotoDefintionService}),this.editor.onMouseDown(t=>{t.target.type==monaco.editor.MouseTargetType.GUTTER_GLYPH_MARGIN&&t.event.leftButton&&!u.isNew()&&1===t.target.position.column&&this.onDebuggerMarginClick(t.target.position.lineNumber,t.target.position.column)});const l=this;this.editor.addAction({id:"debugger",label:"Open Debugger",contextMenuGroupId:"modification",contextMenuOrder:2.5,keybindings:[monaco.KeyMod.CtrlCmd|monaco.KeyCode.F8],run(e){return __awaiter(this,void 0,void 0,function*(){const e=i.getFieldNameFromMonacoField(l.monacoField);c.get().startDebugger(u.getTableName(),u.getSysId(),e)})}}),this.hasTranspiler()&&(this.editor.addAction({id:"Save",label:"Save",contextMenuGroupId:"modification",contextMenuOrder:2.5,keybindings:[monaco.KeyMod.CtrlCmd|monaco.KeyCode.KEY_S],run(e){l.onSave()}}),this.editor.addAction({id:"SaveAll",label:"Save All",contextMenuGroupId:"modification",contextMenuOrder:3,keybindings:[monaco.KeyMod.Shift|monaco.KeyMod.CtrlCmd|monaco.KeyCode.KEY_S],run(){l.onSaveAll()}})),this.editor.onDidChangeModelContent(()=>{g_form.fieldChanged(this.monacoField.ref,!0),this.onValueChanged()})}toggleDebugPoints(e,t=r.set){if(!Array.isArray(e))return;if(t===r.add){const t=new Set(e),i=this.model.getAllDecorations(),n=i.filter(e=>this.decorationSet.has(e.id)),s=new Set(n.map(e=>e.range.startLineNumber)),a=e.filter(e=>s.has(e));a.forEach(e=>{t.delete(e),s.delete(e)}),e=[...Array.from(t),...Array.from(s)]}const i=this.model.getLineCount();e=e.filter(e=>e<=i);const n=e.map(e=>{const t={range:new monaco.Range(e,1,e,1),options:{glyphMarginClassName:"dbg-breakpoint",stickiness:monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges}};return t});this.oldDecorations=this.editor.deltaDecorations(this.oldDecorations,n),this.decorationSet=new Set(this.oldDecorations)}isGlideVar(){return this.monacoField.host.hostType===i.FieldType.GlideVar}onDebuggerMarginClick(e,t=1){return __awaiter(this,void 0,void 0,function*(){const t=this.isGlideVar()?this.monacoField.host.tableName:this.monacoField.tableName,i=this.isGlideVar()?this.monacoField.host.sysId:this.monacoField.sysId,n=this.isGlideVar()?this.monacoField.host.name:this.monacoField.name,s=yield u.toggleDebugPoint(t,i,n,e),a=Object.keys(s.debugpoints.BREAKPOINT).map(e=>parseInt(e));this.toggleDebugPoints(a,r.set)})}onSave(){return __awaiter(this,void 0,void 0,function*(){try{u.save((yield this.getBackendValue())),g_form.addInfoMessage("Successfully saved")}catch(t){g_form.addErrorMessage("Unable to save the value")}})}onSaveAll(){return __awaiter(this,void 0,void 0,function*(){})}hasTranspiler(){return void 0!==this.monacoField.srcType}getLanguageServiceOutput(){return new Promise((e,t)=>__awaiter(this,void 0,void 0,function*(){const i=yield monaco.languages.typescript.getTypeScriptWorker(),n=yield i(this.model.uri),s=yield n.getEmitOutput(this.model.uri.toString());return s.emitSkipped?void Promise.all([n.getSyntacticDiagnostics(this.model.uri.toString()),n.getSemanticDiagnostics(this.model.uri.toString())]).then(e=>{t({syntacticDiagnostics:e[0],semanticDiagnostics:e[1]})}):void e(s)}))}updateTranspilerOutput(){return __awaiter(this,void 0,void 0,function*(){const e=yield this.getLanguageServiceOutput();e.outputFiles.forEach(e=>{e.name.endsWith(".d.ts")?this.monacoField.declaration=e.text:e.name.endsWith(".js.map")?this.monacoField.sourcemap=e.text:e.name.endsWith(".js")&&(this.monacoField.transpiledValue=e.text)})})}isFromEditorSave(){return this.internalSave}updateModelValue(e){this.internalSave||this.model.setValue(e)}onValueChanged(){if(!this.hasTranspiler()){this.internalSave=!0;try{g_form.setValue(this.monacoField.ref,this.model.getValue())}finally{this.internalSave=!1}return void(this.monacoField.transpiledValue=this.model.getValue())}this.updateTranspilerOutput()}getValue(){return{value:this.hasTranspiler()?this.monacoField.transpiledValue:this.model.getValue()}}getDebugPointKey(){return u.isNew()?void 0:this.isGlideVar()?`${this.monacoField.host.tableName}.${this.monacoField.host.sysId}.${this.monacoField.host.name}`:`${this.monacoField.tableName}.${this.monacoField.sysId}.${this.monacoField.name}`}getMonacoField(){return Object.assign({},this.monacoField)}getBackendValue(){return __awaiter(this,void 0,void 0,function*(){return yield this.updateTranspilerOutput(),{ref:this.monacoField.ref,host:Object.assign({},this.monacoField.host),name:this.monacoField.name,srcValue:this.model.getValue(),declaration:this.monacoField.declaration,sourcemap:this.monacoField.sourcemap,transpiledValue:this.monacoField.transpiledValue}})}}t.MonacoEditor=o;let l=!1;const p=new Map;class d extends o{constructor(e,t){super(e,t),d.loadJSXTypedefs()}static loadJSXTypedefs(){if(!l){l=!0;["node_modules/@types/react/global.d.ts","node_modules/@types/prop-types/index.d.ts","node_modules/@types/react/index.d.ts","node_modules/csstype/index.d.ts"].forEach(e=>{const t=e.replace("node_modules","https://www.unpkg.com/");fetch(t).then(e=>e.text()).then(t=>{p.set(e,t),monaco.languages.typescript.typescriptDefaults.addExtraLib(t,e)})})}}onValueChanged(){monaco.languages.typescript.getTypeScriptWorker().then(e=>{e(this.model.uri).then(e=>{let t=e.getEmitOutput(this.model.uri.toString());t.then(e=>{e.emitSkipped||(this.js=e.outputFiles[0].text,"undefined"==typeof g_form||(g_form.setValue(this.monacoField.ref,this.model.getValue()),g_form.setValue(this.monacoField.tupleName,this.js)))})})})}getValue(){return{jsx:this.js,value:this.model.getValue()}}}t.MonacoJSXEditor=d;class c{constructor(){}static get(){return c.instance||(c.instance=new c,c.sourcemap=new Map),c.instance}getJSLine(e,t=!1){if(!window.recordConfig.isES6||!this.sourcemapConsumer)return Promise.resolve(e);if(!Array.isArray(e))return Promise.resolve([]);const i=`point.${t?"ts":"js"}`;let n=[];return e.forEach(e=>{const t=this.sourcemapConsumer.generatedPositionFor({source:i,line:e,column:1,bias:sourceMap.SourceMapConsumer.LEAST_UPPER_BOUND});t||n.push(t.line)}),Promise.resolve(n)}getTSLine(e,t=!1){if(!window.recordConfig.isES6||!this.sourcemapConsumer)return Promise.resolve(e);if(!Array.isArray(e))return Promise.resolve([]);`point.${t?"ts":"js"}`;let i=[];return e.forEach(e=>{const t=this.sourcemapConsumer.originalPositionFor({line:e,column:1,bias:sourceMap.SourceMapConsumer.LEAST_UPPER_BOUND});t||i.push(t.line)}),Promise.resolve(i)}applySourceMap(t,i){return __awaiter(this,void 0,void 0,function*(){const e=i.sourcemap;if(this.sourcemapConsumer=null,"undefined"==typeof sourceMap)return Promise.resolve(void 0);if("string"!=typeof e||0===e.length)return Promise.reject(void 0);let n=null;try{n=yield new sourceMap.SourceMapConsumer(JSON.parse(e))}catch(i){this.sourcemapConsumer=null;let e=c.sourcemap.get(t.fileName);e.consumer=null,n=null}return c.sourcemap.set(t.fileName,{field:t,transpiledField:i,consumer:n}),Promise.resolve(n)})}loadAllDebugPoints(){return __awaiter(this,void 0,void 0,function*(){if(this.debugPointServerState)return Promise.resolve(this.debugPointServerState);const{result:e}=yield i.CodeNowUtils.snFetch("/api/now/js/debugger/scripts");for(const t in e)e[t].debugpoints=e[t].debugpoints||{},e[t].debugpoints.BREAKPOINT=e[t].debugpoints.BREAKPOINT||{};return this.debugPointServerState=e,Promise.resolve(e)})}getDebugLineNumbers(e){let t=this.getDebugPoints(e);return t?Object.keys(t.debugpoints.BREAKPOINT).map(e=>parseInt(e)):[]}getDebugPoints(e){return this.debugPointServerState?this.debugPointServerState[e]:null}getKey(e,t,i){return`${e}.${t}.${i}`}loadDebugPoints(e,t,n){return __awaiter(this,void 0,void 0,function*(){const{result:s}=yield i.CodeNowUtils.snFetch(`api/now/js/debugpoints/script/${e}/${t}/${n}`);return s.debugpoints=s.debugpoints||{},s.debugpoints.BREAKPOINT=s.debugpoints.BREAKPOINT||{},this.debugPointServerState=this.debugPointServerState||{},this.debugPointServerState[s.key.value]=s,Promise.resolve(s)})}toggleDebugPoint(e,t,n,s,a=1){return __awaiter(this,void 0,void 0,function*(){const a={},r=this.getKey(e,t,n);return this.debugPointServerState[r]&&!this.debugPointServerState[r].debugpoints.BREAKPOINT[s]&&(a.evaluationString=""),yield i.CodeNowUtils.snFetch(`api/now/js/debugger/breakpoint/${e}/${t}/${n}/${s}`,{method:"POST",body:JSON.stringify(a)}),this.loadDebugPoints(e,t,n)})}startDebugger(e,t,i){function n(){var n=window.innerWidth-40,s=window.innerHeight,a=window.screenX+20,r=window.screenY+20,o="width="+n+",height="+s+",toolbar=no,status=no,directories=no,menubar=no,resizable=yes,screenX="+a+",left="+a+",screenY="+r+",top="+r,l=window.open("","sn_ScriptDebugger",o,!1),p=l.location.href,d=!1;if("about:blank"===p){try{var c=parseInt(localStorage.getItem("sn_ScriptDebugger")),u=new Date().getTime();if(c&&6e4>u-c)return l.close(),void localStorage.setItem("sn_ScriptDebuggerExist_ShowNotification",new Date().getTime()+"")}catch(t){}d=!0}var g="/$jsdebugger.do?sysparm_nostack=true";if(t&&e&&i&&(g="/$jsdebugger.do?scriptId="+t+"&scriptType="+e+"&scriptField="+i+"&sysparm_nostack=true",!d))try{localStorage.setItem("sn_ScriptDebugger_url",g)}catch(t){var m=p.slice(p.indexOf("$jsdebugger.do"));m!=g&&(d=!0)}d&&(l=window.open(g,"sn_ScriptDebugger",o,!1)),l.focus(),l.setTimeout(focus,1)}var s;if("undefined"==typeof window.top.launchScriptDebugger?window.top.opener&&window.top.opener.top.launchScriptDebugger&&(s=window.top.opener.top.launchScriptDebugger):s=window.top.launchScriptDebugger,"undefined"!=typeof s&&"undefined"!=typeof g_form)return void s(e,t);try{n()}catch(t){}}}t.BreakpointManager=c;class u{static toggleDebugPoint(e,t,i,n,s=1){return __awaiter(this,void 0,void 0,function*(){return c.get().toggleDebugPoint(e,t,i,n)})}static getMonacoInstance(e){return u.instanceMap.get(e)}static initMonacoForOthers(e){function t(e){let i=document.getElementById(e);return i?void i.classList.add("sn_original_editor"):void setTimeout(t,100,e)}function i(e=!0){a.fields.forEach(i=>{if(i.isEditorInitialized)return;if(!(i.canRead||i.canWrite))return void(i.isEditorInitialized=!0);let n=document.getElementById(i.ref);if(n&&0===n.offsetWidth&&0==n.offsetHeight)return;let s=document.getElementById("monaco_"+i.ref),a="element."+i.ref;if(!s){let e=document.getElementById("element."+i.ref);if(!e)return;let t=document.createElement("fieldset"),n=document.createElement("div");n.setAttribute("oncontextmenu","return elementAction(this, event)"),n.setAttribute("data-type","label"),n.setAttribute("type",i.internalType),n.setAttribute("id",`label.${i.ref}`);let r=document.createElement("legend");r.textContent=i.name,n.appendChild(r),t.appendChild(n),s=document.createElement("div"),s.classList.add("sn_monaco_editor"),s.setAttribute("file-name",i.fileName),s.setAttribute("id","monaco_"+i.ref),r.appendChild(s),a=i.ref,e.insertBefore(t,e.firstChild)}i.isEditorInitialized=!0;let l;if(l="jsx"===i.internalType||"tsx"===i.internalType?new d(s,i):new o(s,i),u.instanceMap.set(i.ref,l),e){const e=c.get().getDebugLineNumbers(l.getDebugPointKey());l.toggleDebugPoints(e,r.set)}t(a)})}const a=u.snMonacoConfig=e||{};a.fieldMap=new Map;let l="";"string"==typeof a.customDeclaration&&(l+=a.customDeclaration+"\n"),Array.isArray(a.fields)&&a.fields.forEach(e=>{"string"==typeof e.customDeclaration&&(l+=e.customDeclaration+"\n"),a.fieldMap.set(e.ref,e)});var p=n.getCompilerOptions(!1);p.sourceMap=!0,p.declaration=!0,p.outDir="./out/",delete p.allowNonTsExtensions,monaco.languages.typescript.typescriptDefaults.setCompilerOptions(p),n.initializeTypeDeclarations(a.appScope+".jeffa").then(()=>__awaiter(this,void 0,void 0,function*(){i(!1);yield c.get().loadAllDebugPoints();for(let e=u.instanceMap.keys();;){let t=e.next();if(t.done)break;const i=t.value,n=u.instanceMap.get(i);let s=c.get().getDebugLineNumbers(n.getDebugPointKey());const a=u.instanceMap.get(i);a.toggleDebugPoints(s,r.set)}})),0<l.length&&monaco.languages.typescript.typescriptDefaults.addExtraLib(l,"jeffa.d.ts");const g="undefined"!=typeof s&&"undefined"!=typeof s.observe;g&&(s.observe("tabs.disable",()=>{i()}),s.observe("element_script_display_true",()=>{i()}),s.observe("tab.activated",function(){i()}))}static getTableName(){return u.snMonacoConfig.tableName}static getSysId(){return u.snMonacoConfig.sysId}static isNew(){return"-1"===u.snMonacoConfig.sysId}static save(e){return __awaiter(this,void 0,void 0,function*(){const t=`/api/now/typescript_helpers/monaco_fields_update/${u.snMonacoConfig.tableName}/${u.snMonacoConfig.sysId}`;return i.CodeNowUtils.snFetch(t,{method:"POST",body:JSON.stringify({[e.name]:e})})})}static saveAll(){return __awaiter(this,void 0,void 0,function*(){})}}t.MonacoUtils=u,u.instanceMap=new Map}),define("main",["require","exports","monacoField","siDeclEmittor","codenowUtils","monacoField","constants"],function(e,t,i,n,s,a,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=__importStar(i),n=__importStar(n),r=__importStar(r);class o{constructor(e){this.name=e,this.name=e}initialize(e){this.name=e}setReadOnly(e){}isDisabled(){return!1}isReadOnly(){return!1}getValue(){if("undefined"!=typeof currentSI)return currentSI.script;let e=a.MonacoUtils.getMonacoInstance(this.name);if(e)return a.MonacoUtils.getMonacoInstance(this.name).getValue().value;const t=g_form.getElement(this.name);return t?t.value:""}setValue(e){"undefined"==typeof currentSI||e!=currentSI.script;const t=g_form.getElement(this.name);if(t){t.value=e;const i=a.MonacoUtils.getMonacoInstance(this.name);null===i||void 0===i?void 0:i.updateModelValue(e),onChange(this.name)}}isVisible(){return!0}}t.CodeMirrorNoScriptTextAreaElement=o;class l{static loadMonaco(){return __awaiter(this,void 0,void 0,function*(){return l.monacoLoaderPromise?l.monacoLoaderPromise:(l.monacoLoaderPromise=new Promise(t=>{e(["vs/editor/editor.main"],()=>{function e(){return"undefined"==typeof monaco?requestAnimationFrame(e):void t(!0)}e()})}),l.monacoLoaderPromise)})}static waitForGlideForm(){return __awaiter(this,void 0,void 0,function*(){return new Promise(e=>{function t(){return"undefined"==typeof g_form?setTimeout(t,50):void e({tableName:g_form.getTableName(),sysId:g_form.getUniqueValue(),isNewRecord:g_form.isNewRecord()})}t()})})}static init(){return __awaiter(this,void 0,void 0,function*(){const e="undefined"!=typeof window;if(e){if(n.isServiceNow()&&(window.CodeMirrorNoScriptTextAreaElement=o,!!window.snMonacoConfig)){let e=yield l.waitForGlideForm();e.isNewRecord&&(e.sysId="-1"),window.snMonacoConfig.tableName=e.tableName,window.snMonacoConfig.sysId=e.sysId,window.snMonacoConfig.isNewRecord=e.isNewRecord;const t={tableName:window.snMonacoConfig.tableName,sysId:window.snMonacoConfig.sysId,isNew:window.snMonacoConfig.isNewRecord,fields:window.snMonacoConfig.codeNowFieldConfig.fieldNames};return yield l.loadMonaco(),window.snMonacoConfig.fields=yield s.CodeNowUtils.snFetch("/api/now/typescript_helpers/monaco_fields_config",{method:"POST",body:JSON.stringify(t)}),void i.MonacoUtils.initMonacoForOthers(window.snMonacoConfig)}if(n.isSeismicComponent()){const e=new URL(document.location.href).searchParams,t=e.get("fid");window.recordConfig.uxfRecord={sys_id:"-1",number:"",payload:{},short_description:""},"string"==typeof t&&0<t.length&&(window.recordConfig.uxfRecord.sys_id=t);let i=!1;if(!n.isNewFiddle()){const e=`api/now/table/ux_fiddle_play/${window.recordConfig.uxfRecord.sys_id}`;try{const t=(yield s.CodeNowUtils.snFetch(e,void 0,!0)).result;if(t){Object.assign(window.recordConfig.uxfRecord,t);const e=t.payload;"string"==typeof e&&0<e.length&&(window.recordConfig.uxfRecord.payload=JSON.parse(e)),i=!0}}catch(t){}}if(!i){const e={[r.TSX_FILE_NAME]:{source:r.SAMPLE_SEISMIC_CONTENT},[r.CSS_FILE_NAME]:{source:r.SAMPLE_CSS},[r.HTML_FILE_NAME]:{source:r.SAMPLE_HTML}},t=localStorage.getItem(r.CODENOW_SEISMIC_FS_KEY);if("string"==typeof t&&0<t.length)try{Object.assign(e,JSON.parse(t))}catch(t){}finally{window.recordConfig.uxfRecord.payload=e}else window.recordConfig.uxfRecord.payload=e}let a=window.recordConfig.uxfRecord.payload;const o=Object.keys(a);for(const e of o){const t=0<e.search(/(\.(js|ts)x|css|html)$/);if(!t||0===Object.keys(a[e]).length)return void delete a[e];("string"!=typeof a[e].source||0===a[e].source.length)&&(a[e].source=e.search(/(ts|js)x$/)?r.SAMPLE_SEISMIC_CONTENT:e.search(/css$/)?r.SAMPLE_CSS:r.SAMPLE_HTML,a[e].source="")}}if(!window.recordConfig.isFromScriptRunner){function e(){n||(localStorage.setItem(t,Date.now()+""),setTimeout(e,1e3))}const t="codenow_"+window.recordConfig.sysId,i=parseInt(localStorage.getItem(t));!isNaN(i)&&4e3>Date.now()-i&&confirm("Seems like you already opened this SI, click OK to close")&&window.close();let n=!1;e(),window.addEventListener("beforeunload",()=>{n=!0,localStorage.removeItem(t)})}l.loadEditorUI()}})}static escapeText(e){for(var t=0,n=null,s=[],a=0,r=e.length,o;a<r;a++)o=e.charCodeAt(a),o===96?n="\\`":o===8?n="\\b":o===12?n="\\f":o===10?n="\\n":o===0?n="\\0":o===13?n="\\r":o===9?n="\\t":o===11?n="\\v":o===92?n="\\\\":o===34?n="\\\"":void 0,null!==n&&(s.push(e.substring(t,a)),s.push(n),t=a+1,n=null);return s.push(e.substring(t,r)),s.join("")}static getWorkerUrl(e){if(0<=window.navigator.userAgent.toLowerCase().indexOf("chrome")){let t="ylnworker.jsdbx";return window.g_ck||(t="./ylnworker.js"),t+"?v="+e}let t=location.origin+"/";window.recordConfig.paths.app.startsWith("ylnEditorMain")?t+=window.recordConfig.paths.app:t=window.recordConfig.paths.app,window.g_ck||(t=location.origin+"/app.js");const i="'"+window.recordConfig.paths.linter+"'",n="'"+window.recordConfig.paths.vsLoader+"'",s="'"+window.recordConfig.paths.tsCompiler+"'",a=[i,n,s].join(","),r={libVersions:{appVersion:window.recordConfig.libVersions.appVersion},paths:{app:window.recordConfig.paths.app,tsCompiler:window.recordConfig.paths.tsCompiler,vsLoader:window.recordConfig.paths.vsLoader,linter:window.recordConfig.paths.linter},isES6:window.recordConfig.isES6};let o="self.recordConfig = JSON.parse('"+JSON.stringify(r)+"');\n";return o+="importScripts("+a+");",o+="require.config({baseUrl: './',urlArgs: 'sysparm_substitute=false', paths: {},ignoreDuplicateModules: []});",o+="define('typescript', [], function () {return self.ts;});",o+="importScripts('"+t+"');",o+="var siDeclName = './siDeclEmittor';require(siDeclName).onThreadInitialized(self);","data:text/javascript;charset=utf-8,"+encodeURIComponent(o)}static createParserThread(e){const t={libVersions:{appVersion:window.recordConfig.libVersions.appVersion},paths:{app:window.recordConfig.paths.app,tsCompiler:window.recordConfig.paths.tsCompiler,vsLoader:window.recordConfig.paths.vsLoader,linter:window.recordConfig.paths.linter},isES6:window.recordConfig.isES6};window.ylnWorker=new Worker(l.getWorkerUrl(window.recordConfig.libVersions.appVersion+""),{name:"ylnworker?codenowWorkerParams="+JSON.stringify(t)}),e.onThreadInitialized(window.ylnWorker)}static cacheWindowObject(){"undefined"==typeof window.g_ck||("undefined"!=typeof g_form&&(g_form.ylnWindow=window),setTimeout(l.cacheWindowObject,1e3))}static loadEditorUI(){return __awaiter(this,void 0,void 0,function*(){function t(){window.removeEventListener("visibilitychange",t),settings.initialize()}yield l.loadMonaco(),e(["vs/language/typescript/tsWorker"],()=>{define("typescript",["require"],()=>window.ts),l.cacheWindowObject(),n.canWriteSI()&&!n.isSeismicComponent()&&l.createParserThread(n),"undefined"==typeof document.hidden?settings.initialize():document.hidden?window.addEventListener("visibilitychange",t):settings.initialize()})})}}t.Main=l}),define("monacoInit",["require","exports","constants","fileSearch","recordWatcher","siDeclEmittor","siParser","tsCompilerOptions","codenowUtils"],function(e,t,i,n,s,a,r,o,l){"use strict";var d=Math.floor;function p(){var F=Math.round;function e(e){return e.path.replace("/","")}function t(e){let t=new c;try{let r=a.getCurrentSI();D()&&(r.updateAPIName("global.Point"),r.updateSysId("yln"),r.updateAccessType("public"),r.updateLangType("javascript"));let o=r.getScopeAndAPIMap();var i=u();if(t.js=i.outputText,t.sourceMap=i.sourceMapText,r.updateScript(i.outputText),window.recordConfig.useTypeChecker)return t;var n=r.generateDeclaration(esprima,e||!!window.recordConfig.jsdoc).getFormat(!0),s=JSON.parse(n);s[o.scope]&&Array.isArray(s[o.scope])&&0<s[o.scope].length&&(t.declaration=JSON.stringify(s[o.scope][0]))}catch(e){console.log(e.toString())}return t}function p(e=!1){let i=a.getCurrentSI();if(!D()){let e=g_form.getValue("api_name");if(0==e.length)return Promise.reject("API Name shouldn't be empty");let t=g_form.getUniqueValue(),n=g_form.getValue("access");i.isNew()||(i.updateAPIName(e),i.updateSysId(t),i.updateAccessType(n))}const n=i.api_name;var s=new Promise((s,o)=>{let l=Date.now();if(i.isJavascript()){if(!window.recordConfig.useTypeChecker)return console.log("compilation time is "+(Date.now()-l)),void s(t(e));let p=monaco.languages.typescript.typescriptDefaults.getCompilerOptions();return void a.generateTypeDeclForSingleRecord(p).then(e=>{console.log("compilation time is "+(Date.now()-l)),D()?i.api_name!==n&&requestAnimationFrame(()=>{w.dispatchCompilation()}):!window.recordConfig.isES6&&(e.js=i.tsscript),i.setDirtyState(!1),i.updateScript(e.js);let t=new c(e.js,"",e.sourceMap,i.tsscript,void 0,e.linterErrors),o=JSON.parse(e.declaration);if(r.SITSFormat.isES6(o.f)){let t=i.emitTSDeclaration(e.tsDeclaration,o.f);t.td=o.td,o=t}t.backEndDecl=Object.assign({sc:i.getScopeAndAPIMap().scope},o);let p=r.SITSFormat.expandMinifiedFormat(o,i.getScopeAndAPIMap().scope,r.SITSFormat.isES6(o.f));a.updateCurrentSIDeclaration(!0,p),t.declaration=JSON.stringify(p),s(t)},e=>{o(e)})}let p=monaco.languages.typescript.typescriptDefaults.getCompilerOptions();a.generateTypeDeclForSingleRecord(p).then(e=>{console.log("compilation time is "+(Date.now()-l)),i.setDirtyState(!1),i.updateScript(e.js);let t=new c(e.js,"",e.sourceMap,i.tsscript),o=i.emitTSDeclaration(e.declaration);t.backEndDecl=Object.assign({sc:i.getScopeAndAPIMap().scope},o);let p=r.SITSFormat.expandMinifiedFormat(o,i.getScopeAndAPIMap().scope,i.isTypescript());t.declaration=JSON.stringify(p),a.updateCurrentSIDeclaration(!0,p),s(t),i.api_name!==n&&requestAnimationFrame(()=>{w.dispatchCompilation()})},e=>{o(e)})});return s}function u(){let e=a.getCurrentSI(),t=a.getCompilerOptions(e.isJavascript());t.declaration=!1;let i=e.tsscript;if(e.containsTemplateExpression()&&(i=a.TSCompilerHost.getModelValueAfterTransform(e.tsscript)),t.target<ts.ScriptTarget.ES2015&&!D())return{outputText:e.tsscript};const n=ts.transpileModule(i,{compilerOptions:t,fileName:"./module.js"});return console.log(n.outputText),n}function g(e=!1,t=!1,n=!1,s,o){var l="global.Point",d="yln",c="public";let u=a.getCurrentSI();var g=u.script_type,m=[],f="undefined"!=typeof g_form;if(f){if(m=g_form.getEditableFields(),R)return!0;l=g_form.getValue("api_name"),d=g_form.getUniqueValue(),c=g_form.getValue("access"),-1!=m.indexOf("script_type")&&(g=g_form.getValue("script_type")),-1!=m.indexOf("jsdoc")&&(e="true"==g_form.getValue("jsdoc"))}return u.updateAPIName(l),u.updateSysId(d),u.updateAccessType(c),u.updateLangType(g),u.updateJSDoc(e),p(e).then(function(e){u.setDirtyState(!1),u.updateScript(e.js),u.updateDeclaration(e.declaration),u.updateSourcemap(e.sourceMap);const l=r.ClientSIRecordData.getClassConstructorFormat(a.getCurrentSI());u.updateScript(l),f&&(g_form.setValue(i.FIELD_SCRIPT,l),g_form.setValue(i.FIELD_TS_SCRIPT,u.tsscript),g_form.setValue(i.FIELD_SOURCEMAP,u.typesourcemap),g_form.setValue(i.FIELD_DECLARATION,u.typedeclaration),(-1!=m.indexOf(i.FIELD_DECLARATION)||n)&&(R=!0),(window.recordConfig.useTypeChecker||!n||-1!=m.indexOf(i.FIELD_TS_SCRIPT))&&a.updateSIDeclListeners(JSON.parse(e.declaration)));var p=g_form.getActionName();if(t&&f&&-1==m.indexOf(i.FIELD_DECLARATION))return jQuery.ajax({url:"api/now/typescript_helpers/update_declaration",type:"post",data:JSON.stringify(e.backEndDecl),headers:{"X-UserToken":window.g_ck},contentType:"application/json",success:function(e){console.log(e)}}).done(e=>{console.log(e),s&&s()}).fail(()=>{o&&o()}),!1;if(n){let e=window.recordConfig;e.isNewRecord?gsftSubmit(void 0,void 0,"sysverb_insert"):gsftSubmit(void 0,void 0,p)}},function(e){g_form.addErrorMessage(e,"script_error")}),!1}function m(e=""){if(a.isSeismicComponent())return i.SAMPLE_SEISMIC_CONTENT;const t=i.emojis,n=t[F(Math.random()*(t.length-1))];return`// Avoid writing code here ${n}
(function() {

	// Write your code here 😎
	gs.info('Hi, ${e}');




})();
// Avoid writing code here ${n}`}function f(e,t=i.LangType.typescript){function n(e){if("undefined"!=typeof g_form&&(g_form.setValue(i.FIELD_SCRIPT,e.js),g_form.setValue(i.FIELD_DECLARATION,e.declaration),g_form.setValue(i.FIELD_TS_SCRIPT,e.tsScript),g_form.setValue(i.FIELD_SOURCEMAP,e.sourceMap)),!d||d.updateModelContent(e.js),c){let t="";0!=e.declaration.length&&(t=a.getCurrentSI().formatForAddLib(JSON.parse(e.declaration),g.getScopeAndAPIMap().scope)),t=t.replace(/</gi,"&lt;"),c.innerHTML=t,0!=t.length&&monaco.editor.colorizeElement(c,{theme:j})}!u||(u.innerText=e.sourceMap)}var s,r,o;const l=document.getElementById(i.EL_TS_EDITOR),p=document.getElementById(i.EL_JS_EDITOR);let d;const c=document.getElementById(i.EL_TS_DECL),u=document.getElementById(i.EL_TS_SOURCEMAP);let g=a.getCurrentSI();return a.isSeismicComponent()&&(g.tsscript=null===(o=null===(r=null===(s=null===window||void 0===window?void 0:window.recordConfig)||void 0===s?void 0:s.uxfRecord)||void 0===r?void 0:r.payload[K])||void 0===o?void 0:o.source),w=a.isSeismicComponent()?new G(l,n,!0,g.tsscript):new B(l,n,!0,g.tsscript),p&&(d=new U(p,null,"// wating ...",!0),w.setJSInstance(d),window.jsInstnace=d),window.tsInstance=w,{dispose(){}}}function y(e){let t=0,i=0,n=0,s=0,a=0;return a=F(e%1e3),s=d(e/1e3),n=d(s/60),s%=60,i=d(n/60),n%=60,t=d(i/24),i%=24,{day:t,hour:i,minute:n,seconds:s,ms:a}}function h(){var e=localStorage.getItem("sn.codenow"),t={theme:j};if(!e)return t;var i=JSON.parse(e);return i.theme=i.theme||t.theme,D()||(i.theme=j),i}function S(e){var t=h();for(var i in e)t[i]=e[i];D()&&localStorage.setItem("sn.codenow",JSON.stringify(t))}function T(e){jQuery("#yln-standalone-editor").removeClass(j).addClass(e),j=e,monaco.editor.setTheme(j),S({theme:e}),jQuery(z).val(e)}function C(){function e(e){var t=e.split("\n"),n=[];for(let s=0;s<t.length;s++)t[s].match(/^\s*debugger;\s?/)&&(n.push(s+2),t[s]="\"debugger\";");return{dbgStatements:n,js:t.join("\n")}}if(z&&(z.onchange=function(){T(z.value)}),a.isSeismicComponent())return jQuery("#"+i.EL_SCOPE_SELECT).hide(),jQuery(`#UpdateSI`).hide(),void jQuery("#UpdateTableAPI").hide();let t=document.getElementById(i.EL_SCOPE_SELECT);if(t){var n="",s=window.recordConfig;for(let e in s.scopes){let t=s.scopes[e];"global"!=t.sysId&&(n+=`<option value='${t.value}' scope-id='${t.sysId}'>${t.displayValue}</option>\n`)}n=`<option value='global' scope-id='global' selected>Global</option>\n`+n.trim(),t.innerHTML=n,t.onchange=function(){let e=t.value,i=a.getCurrentSI();i.updateAPIName(e+"."),a.siUpdated()}}let r=document.getElementById(i.EL_SCRIPT_RUNNER);a.isServiceNow()||a.isSeismicComponent()||jQuery(r).hide(),r&&a.isServiceNow()&&(r.onclick=function(){function n(e){return __awaiter(this,void 0,void 0,function*(){jQuery("a[href=\"#script-output\"]").tab("show");var t=jQuery("#"+i.EL_SCRIPT_OUTPUT);let n=Date.now();var s=!1,a=document.getElementById("excution-timer"),t=jQuery("#"+i.EL_SCRIPT_OUTPUT);t.html(`<div class = "script-running">
							<i class="glyphicon glyphicon-refresh spin"></i>
							</div>`);var l=()=>{let e=Date.now();var t=y(e-n);let i=t.minute+":"+t.seconds+":"+t.ms;a.innerText=i,s||window.requestAnimationFrame(l)};l();try{const t=yield E(e,o),n=new DOMParser,s=n.parseFromString(t,"text/html");jQuery("#"+i.EL_SCRIPT_OUTPUT).html(s.body.innerHTML)}catch(t){console.error(" Found error "+t)}finally{s=!0,r.disabled=!1}return Promise.resolve()})}function s(t){return __awaiter(this,void 0,void 0,function*(){function i(e=!1){return a.map(t=>{const i={data:JSON.stringify({evaluationString:""}),url:`/api/now/js/debugger/breakpoint/sys_script_include/${k}/script/${t}`,method:"POST",contentType:"application/json",headers:{"X-UserToken":window.g_ck}};return e&&delete i.data,$.ajax(i)})}const s=e(t),a=s.dbgStatements,o=s.js.split("\n");if(0<o.length&&o.splice(o.length-1,1),t=o.join("\n"),0==a.length)return yield n(t);const l={sysparm_key:"sys_script_include.1172f0210bf213008e64aabcb4673aee.script",sysparm_breakpoints:JSON.stringify(a),sysparm_processor:"BreakpointProcessor",sysparm_action:"SET_BREAKPOINTS",sysparm_express_transaction:!0,sysparm_debugger_transaction:!0},p={url:"xmlhttp.do",data:l,headers:{"X-UserToken":window.g_ck}},d={contentType:"application/json",data:JSON.stringify({script:`function ${M}(){\n${t}\n};`}),headers:{X_UserToken:window.g_ck},method:"POST",type:"POST",url:"/api/now/typescript_helpers/UpdateDebuggerScript"},c={data:JSON.stringify({evaluationString:""}),url:`/api/now/js/debugger/breakpoint/sys_script_include/${k}/script/2`,method:"POST",contentType:"application/json",headers:{"X-UserToken":window.g_ck}};jQuery.when(i(),$.ajax(d)).then((...e)=>{$.ajax(c).done(()=>__awaiter(this,void 0,void 0,function*(){n(`global.${M}()`).then(()=>{jQuery.when(i(!0)).then(()=>{})},()=>{jQuery.when(i(!0)).then(()=>{})})}))},(...e)=>{r.disabled=!1,console.log("failure to update breakpoints and scripts")})})}if(a.isServiceNow()){r.disabled=!0;let e=a.getCurrentSI();var o=t.selectedOptions[0].getAttribute("scope-id");return e.isUpToDate()?void s(e.script):void p().then(e=>{s(e.js)},e=>{alert(e),r.disabled=!1})}})}function b(){function e(){let e=jQuery(document.getElementById("sys_script_include.form_scroll")),t=e.offset();if(t){let i=jQuery("#ts_editor_container").offset();if(i){let n=i.top-t.top;0<n&&e.scrollTop(n)}}}a.isServiceNow()||(window.recordConfig.scopes=i.scopes,window.recordConfig.snippets=i.snippets),C(),T(h().theme);var t=window.recordConfig;if(!a.isServiceNow()){let e=new r.ClientSIRecordData;e.updateAPIName(t.apiName),e.updateLangType(t.langType),a.initializeWithSIRecord(e).then(()=>{f(t.apiName,t.langType||i.LangType.javascript)})}else if(t.isNewRecord){let n=new r.ClientSIRecordData(void 0,!0);n.updateLangType(window.recordConfig.langType),a.initializeWithSIRecord(n).then(()=>{f("",t.langType||i.LangType.javascript),D()||a.getCurrentSI().isNew()||e()})}else{var n=r.ClientSIRecordData.fromSIRec(window.recordConfig.siRec);r.ClientSIRecordData.convertToJSConstructor(n),a.initializeWithSIRecord(n).then(()=>{f(t.apiName,t.langType||i.LangType.javascript),D()||e()})}}function _(e="gs.info('hello yln')",t="0f6ab99a0f36060094f3c09ce1050ee8"){var i={script:e,sysparm_ck:window.g_ck,runscript:"Run script",sys_scope:t},n="",s=[];for(let n in i)s.push(encodeURIComponent(n)+"="+encodeURIComponent(i[n]));return n=s.join("&").replace(/%20/g,"+"),n}function E(e,t){return __awaiter(this,void 0,void 0,function*(){const i=yield l.CodeNowUtils.snFetch("/sys.scripts.do",{method:"POST",mode:"cors",headers:{"content-type":"application/x-www-form-urlencoded"},body:_(e,t)},!1);return(yield i).text()})}function I(e=k,t="sys_script_include",i="script"){function n(){var n=window.innerWidth-40,s=window.innerHeight,a=window.screenX+20,r=window.screenY+20,o="width="+n+",height="+s+",toolbar=no,status=no,directories=no,menubar=no,resizable=yes,screenX="+a+",left="+a+",screenY="+r+",top="+r,l=window.open("","sn_ScriptDebugger",o,!1),p=l.location.href,d=!1;if("about:blank"===p){try{var c=parseInt(localStorage.getItem("sn_ScriptDebugger")),u=new Date().getTime();if(c&&6e4>u-c)return l.close(),void localStorage.setItem("sn_ScriptDebuggerExist_ShowNotification",new Date().getTime()+"")}catch(t){}d=!0}var g="/$jsdebugger.do?sysparm_nostack=true";if(e&&t&&i&&(g="/$jsdebugger.do?scriptId="+e+"&scriptType="+t+"&scriptField="+i+"&sysparm_nostack=true",!d))try{localStorage.setItem("sn_ScriptDebugger_url",g)}catch(t){var m=p.slice(p.indexOf("$jsdebugger.do"));m!=g&&(d=!0)}d&&(l=window.open(g,"sn_ScriptDebugger",o,!1)),l.focus(),l.setTimeout(focus,1)}if(H){H=!1;try{n()}catch(t){}H=!0}}function A(){let e=a.getCompilerOptions(a.getCurrentSI().isJavascript(),window.recordConfig.isES6);monaco.languages.typescript.typescriptDefaults.setCompilerOptions(e);var t=w;t.triggerCompilation()}function x(e,t,i){function n(){i.off("hidden.bs.modal",n),e.removeAttr("disabled"),t.addClass("hide")}i.on("hidden.bs.modal",n),i.modal()}function N(e,t,i=2500){if("undefined"==typeof GlideUI)return void alert(e);let n=document.createElement("span");n.setAttribute("data-type",t),n.setAttribute("data-text",e),n.setAttribute("data-duration",i+""),GlideUI.get().fire(new GlideUINotification({xml:n}))}var v=0;const P=a.isSeismicComponent()?i.CODENOW_SEISMIC_FS_KEY:i.CODENOW_SCRIPT_RUNNER_FS_KEY;window.addEventListener("beforeunload",function(e){if(0<v&&(D()||"undefined"!=typeof g_form&&!g_form.submitted)){if(D()){const e=window.tsInstance;e&&e.saveToLocalStorage()}e.returnValue="There is a pending work. sure you want to leave"}});const L=-1,k="1172f0210bf213008e64aabcb4673aee",M="TempDebugger",D=a.isScriptRunner;var O=o.default,w;let j="vs";jQuery(function(){function e(){let e=[ts.JsxEmit.None,ts.JsxEmit.Preserve,ts.JsxEmit.React,ts.JsxEmit.ReactNative],t=[ts.ScriptTarget.ES3,ts.ScriptTarget.ES5,ts.ScriptTarget.ES2015,ts.ScriptTarget.ES2016,ts.ScriptTarget.ES2018,ts.ScriptTarget.Latest],n=`<select onchange="settings.onTargetChange('target', this.value)">`,s=O.target;for(let e=0,i;e<t.length;e++)i="",s==t[e]&&(i="selected"),n+=`<option ${i} value='${t[e]}'>${ts.ScriptTarget[t[e]]}</option>`;n+="</select>";let a=`<select onchange="settings.onJSXChange('jsxTarget', this.value)">`;e.forEach((e,t)=>{let i="",n=O.jsx;t===n&&(i="selected"),a+=`<option ${i} value='${e}'>${ts.JsxEmit[e]}</option>`}),a+=`</select>`,D()||(a="");let r=`<select onchange="settings.onJSXFactoryChange('jsxFactory', this.value)">`;i.jsxFactoryTypes.forEach(e=>{let t="";O.jsxFactory===e&&(t="selected"),r+=`<option ${t} value='${e}'>${e}</option>`}),r+=`</select>`,D()||(r="");const l="glyphicon-unchecked";let p=`<div style="max-height: 300px;overflow: auto; white-space: nowrap;">
				<div class="eslint">
					<label style="margin: 8px;">
						<input onclick="javascript:settings.toggleLinter();" style="margin: 0px 8px;" type='checkbox' ${o.default.linter?"checked":""}>
						Enable ESlint
					</label>
				</div>
				<ul class="list-group checked-list-box" onclick="javascript:settings.onCompilerSettingsChange(event.target)">
					<li class="list-group-item">Target ${n}</li>
					<li class="list-group-item">JSX ${a}</li>
					<li class="list-group-item">JSX Factory ${r}</li>
					<li class="list-group-item" title="Allows js to compile" data-key="allowJs">
						<span class='state-icon glyphicon ${O.allowJs?"glyphicon-check":l}'></span>
						allowJs
					</li>
					<li class="list-group-item" title="Enable type checking on JavaScript files" data-key="checkJs">
						<span class='state-icon glyphicon ${O.checkJs?"glyphicon-check":l}'></span>
						checkJs
					</li>
					<li class="list-group-item" title = "Warn on expressions and declarations with an implied 'any' type" data-key="noImplicitAny">
						<span class='state-icon glyphicon ${O.noImplicitAny?"glyphicon-check":l}'></span>
						noImplicitAny
					</li>
					<li class="list-group-item" title="Enable strict null checks" data-key="strictNullChecks">
						<span class='state-icon glyphicon ${O.strictNullChecks?"glyphicon-check":l}'></span>
						strictNullChecks
					</li>
					<li class="list-group-item" title="Raise error on 'this' expressions with an implied any type" data-key="noImplicitThis">
						<span class='state-icon glyphicon ${O.noImplicitThis?"glyphicon-check":l}'></span>
						noImplictThis
					</li>
					<li class="list-group-item" title="Report error when not all code paths in function return a value" data-key="noImplicitReturns">
						<span class='state-icon glyphicon ${O.noImplicitReturns?"glyphicon-check":l}'></span>
						noImplicitReturns
					</li>
					<li class="list-group-item" title="Do not report errors on unreachable code" data-key="allowUnreachableCode">
						<span class='state-icon glyphicon ${O.noImplicitReturns?"glyphicon-check":l}'></span>
						allowUnreachableCode
					</li>
					<li class="list-group-item" title="Report errors for fallthrough cases in switch statement" data-key="noFallthroughCasesInSwitch">
						<span class='state-icon glyphicon ${O.noImplicitReturns?"glyphicon-check":l}'></span>
						noFallthroughCasesInSwitch
					</li>
					<li class="list-group-item" title="Enable all strict type-checking options" data-key="strict">
						<span class='state-icon glyphicon ${O.strict?"glyphicon-check":l}'></span>
						strict
					</li>
					<li class="list-group-item" title="Parse in strict mode and emit 'use strict'" data-key="alwaysStrict">
						<span class='state-icon glyphicon ${O.alwaysStrict?"glyphicon-check":l}'></span>
						alwaysStrict
					</li>
					<li class="list-group-item" title="Do not generate custom helper functions like __extends in compiled output.'" data-key="noEmitHelpers">
						<span class='state-icon glyphicon ${O.noEmitHelpers?"glyphicon-check":l}'></span>
						noEmitHelpers
					</li>
					<li class="list-group-item" title="Report errors on unused parameters" data-key="noUnusedParameters">
						<span class='state-icon glyphicon ${O.noUnusedParameters?"glyphicon-check":l}'></span>
						noUnusedParameters
					</li>
					<li class="list-group-item" title="Report errors on unused locals" data-key="noUnusedLocals">
						<span class='state-icon glyphicon ${O.noUnusedLocals?"glyphicon-check":l}'></span>
						noUnusedLocals
					</li>
					<li class="list-group-item" title="strip @internal methods when generating declaration" data-key="stripInternal">
						<span class='state-icon glyphicon ${O.stripInternal?"glyphicon-check":l}'></span>
						stripInternals
					</li>
				</ul>
			</div>`;return p}jQuery("#compiler-settings").popover({html:!0,trigger:"manual",content:function(){return e()},title:"Compiler Settings"}).click(function(t){0==jQuery("#compiler-settings-container > .popover").length?jQuery(this).popover("show"):jQuery(this).popover("hide"),t.stopPropagation(),t.preventDefault()}),jQuery(document).on("click",function(t){var e=jQuery(t.target);e.data&&"undefined"==typeof e.data("original-title")&&!jQuery(t.target).parents().is(".popover.in")&&jQuery("[data-original-title]").popover("hide")})}),window.compileJS=u,window.compileTS=p;var R=!1;class V{constructor(e,t,n,s="",r="/module.ts",o=!1){function l(){if(a.isScriptRunner()){var e=jQuery("#yln-standalone-editor > .navbar-default").height();jQuery("#yln-standalone-editor > .workspace-area").css({top:e})}}function p(){u=L,this.editor&&this.editor.layout(),l()}this.isReadonly=o,this.breakPoints=[],this.existingBreakPoints=[],this.initialModelVersion=-1,this.lastModelVersion=-1,this.gotoDefLine=-1;let d=a.getCurrentSI();window.currentSI=d,s||(s=m("Welcome to ServiceNow Developement IDE! \uD83D\uDE4F"),!D()&&!a.isSeismicComponent()&&(window.recordConfig.isES6?s=d.isTypescript()?i.SAMPLE_TS_CONTENT:i.SAMPLE_JS_CONTENT:s=i.SAMPLE_STANDARD_SI_CONTENT)),0==d.tsscript.length&&D()&&!o&&d.updateTSScript(s),"function"==typeof Array.prototype.include&&(Array.prototype.include=void 0),this.model=monaco.editor.createModel(s,n,monaco.Uri.file(r)),this.model.updateOptions({trimAutoWhitespace:!0,tabSize:4,insertSpaces:!1}),this.initialModelVersion=this.model.getAlternativeVersionId(),this.modelVersion=this.model.getAlternativeVersionId();let c=a.getCurrentSI().isNew();this.editor=monaco.editor.create(e,{model:this.model,language:n,renderWhitespace:o?"none":"all",fontSize:14,formatOnType:!0,formatOnPaste:!0,glyphMargin:!c||window.recordConfig.breakpoints,readOnly:o,renderIndentGuides:!0,lineNumbersMinChars:2,suggestSelection:"recentlyUsed",scrollBeyondLastLine:!1,lightbulb:{enabled:!0},minimap:{enabled:!1},scrollbar:{useShadows:!1,verticalHasArrows:!1,horizontalHasArrows:!1,vertical:"visible",horizontal:"visible",verticalScrollbarSize:7,horizontalScrollbarSize:7,arrowSize:30}},{openerService:a.gotoDefintionService});var u=L;window.addEventListener("resize",()=>{u!=L&&window.clearTimeout(u),u=window.setTimeout(p.bind(this),2000)}),l()}onBreakpoint(e,t){a.isServiceNow()&&!D()?this.toggleBreakPointInServer(e):this.toggleBreakPoint([e])}loadBreakPointsFromServer(e){if(!a.isServiceNow())return;let t=a.getCurrentSI();if(t.canPlaceBreakPoints()){const e={url:"/api/now/js/debugger/scripts",method:"GET",headers:{"X-UserToken":window.g_ck}};jQuery.ajax(e).done(e=>{if(e&&"object"==typeof e){const n=t.sys_class_name+"."+t.sys_id+".script";var i=e.result[n];this.jsBreakPointsState=i,i&&(!i.debugpoints&&(i.debugpoints={BREAKPOINT:{}}),!i.debugpoints.BREAKPOINT&&(i.debugpoints.BREAKPOINT={}),this.updateBreakPoints(i))}})}}updateBreakPoints(e){var t=[];t=Object.keys(e.debugpoints.BREAKPOINT).map(e=>parseInt(e)),0<t.length&&this.toggleBreakPoint(t)}toggleBreakPointInServer(e,t="",i=!1){if(!a.isServiceNow())return;if(D())return;let n=a.getCurrentSI();const s="/api/now/js/debugger/breakpoint/"+n.sys_class_name+"/"+n.sys_id+"/script/"+e;let r={url:s,contentType:"application/json",method:"POST",headers:{"X-UserToken":window.g_ck}};this.jsBreakPointsState&&(this.jsBreakPointsState.debugpoints.BREAKPOINT&&!this.jsBreakPointsState.debugpoints.BREAKPOINT[e]||0<t.length||i)&&(r.data=JSON.stringify({evaluationString:t})),jQuery.ajax(r).done(()=>{this.loadBreakPointsFromServer(n.sys_class_name+".script")})}toggleBreakPoint(e){if(a.isServiceNow()&&!D())this.breakPoints=e;else{var t=this.breakPoints.indexOf(e[0]);-1==t?this.breakPoints.push(e[0]):this.breakPoints.splice(t,1)}let i=[],n=!1;const s=this.editor.getModel().getLineCount();for(let t of this.breakPoints){if(t>s)continue;const e={range:new monaco.Range(t,1,t,1),options:{glyphMarginClassName:"dbg-breakpoint",stickiness:monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges}};this.gotoDefLine==t&&(n=!0,e.options.isWholeLine=!0,e.options.className="gotoLine"),i.push(e)}if(-1!=this.gotoDefLine&&this.gotoDefLine<=s&&!n){let e={range:new monaco.Range(this.gotoDefLine,1,this.gotoDefLine,1),options:{isWholeLine:!0,className:"gotoLine"}};i.push(e)}this.existingBreakPoints=this.editor.deltaDecorations(this.existingBreakPoints,i)}updateModelContent(e){this.editor.getModel().setValue(e)}}class U extends V{constructor(e,t,n="",s=!1){super(e,t,i.LangType.javascript,n,i.READONLY_OUTPUT_FILE_NAME,s),this.cb=t}onContentChanged(t){}}class B extends V{constructor(t,n,s=!1,r="",l="",p=!1){function d(t){if(t.target.type!=monaco.editor.MouseTargetType.GUTTER_GLYPH_MARGIN)return;let e=t.target.position.lineNumber;if(!f)y=e;else if(y==e)return;y=e,f=!0;let i=t.event.browserEvent.clientX,n=t.event.browserEvent.clientY,s=S.jsBreakPointsState;S.tsBreakPointState&&(s=S.tsBreakPointState);let a=s&&s.debugpoints.BREAKPOINT&&s.debugpoints.BREAKPOINT[e],r=jQuery("#new-breakpoint-menu"),o="";a&&(o=s.debugpoints.BREAKPOINT[e].evaluationString+"");let l=document.getElementById("ts_editor");if(l){let e=l.getBoundingClientRect();n-=e.top-60,0>n&&(n=0),i+=30}r.find("#breakpoint-line-number").text(e);let p=r.find("#breakpoint-condition");p.attr("data-linenumber",e),p.val(o),r.css({display:"block",transform:`translate(${i}px, ${n}px)`}).addClass("show")}function c(){-1!=h&&(clearTimeout(h),h=-1);f&&(jQuery("#new-breakpoint-menu").removeClass("show").hide(),f=!1)}super(t,n,i.LangType.typescript,r,a.getCurrentModuleName(),!a.canWriteSI()),this.cb=n,this.autoCompile=s,this.compileTriggerTimoutID=L,this.isBreakPointsLoaded=!1,this.editorViewMap={},this.tsBreakPointState={debugpoints:{BREAKPOINT:{}}},this.tsFileIndex=1,this.jsFileIndex=1;let u=a.getCurrentSI();u.tsscript;this;if(D()){const t=e(this.model.uri);this.createTab(t,!0),u.setDirtyState(!0),this.selectTab(t),a.isSeismicComponent()&&window.recordConfig.snippets.push({label:"Seismic",doc:"Creates seismic component template",text:i.SAMPLE_SEISMIC_CONTENT});let n=[];for(var g of window.recordConfig.snippets)n.push({range:void 0,label:"yln_"+g.label,kind:monaco.languages.CompletionItemKind.Snippet,documentation:g.doc,insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:g.text});0<n.length&&monaco.languages.registerCompletionItemProvider("typescript",{provideCompletionItems:()=>({suggestions:n})}),this.editor.addAction({id:"Run",label:"Run",contextMenuGroupId:"modification",contextMenuOrder:3.5,keybindings:[monaco.KeyMod.CtrlCmd|monaco.KeyCode.KEY_R],run(e){return document.getElementById(i.EL_SCRIPT_RUNNER).click(),null}})}else a.isServiceNow()&&!u.isNew()&&this.editor.addAction({id:"Save",label:"Save",contextMenuGroupId:"modification",contextMenuOrder:2.5,keybindings:[monaco.KeyMod.CtrlCmd|monaco.KeyCode.KEY_S],run:function(){Y.saveSI(null)}});this.editor.addAction({id:"FielOpen",label:"FileOpen",keybindings:[monaco.KeyMod.CtrlCmd|monaco.KeyCode.KEY_P],contextMenuGroupId:"navigation",contextMenuOrder:1.5,run:this.openFileSelector.bind(this)});let m=L,f=!1,y=0,h=-1,S=this;this.isReadonly||(this.editor.onDidChangeModel(()=>{this.dispatchCompilation()}),this.editor.onDidChangeModelContent(t=>{v++;const e=this.editor.getModel().uri.path;e.endsWith("css")||e.endsWith("html")||(u.setDirtyState(!0),u.updateTSScript(this.editor.getModel().getValue()),m!=L&&clearTimeout(m),m=window.setTimeout(()=>{m=L,this.onContentChanged(t)},a.isSeismicComponent()?2e3:5e3))}),jQuery(document).on("keyup",t=>{27==t.keyCode&&c()}),jQuery("#ts_editor_container").on("keyup","#breakpoint-condition",t=>{if(27==t.keyCode)return void c();if(13==t.keyCode){let e=jQuery(t.target),i=parseInt(e.attr("data-linenumber")),n=e.val();this.onBreakpoint(i,1,n,!0),c()}}),(!u.isNew()||!!window.recordConfig.breakpoints)&&(this.editor.onMouseDown(t=>{t.target.type==monaco.editor.MouseTargetType.GUTTER_GLYPH_MARGIN&&t.event.leftButton&&(u.isUpToDate()&&u.canPlaceBreakPoints()||!!window.recordConfig.breakpoints)&&this.onBreakpoint(t.target.position.lineNumber,1)}),!D()&&(this.editor.onContextMenu(t=>{d(t)}),this.editor.onMouseMove(t=>t.target.type==monaco.editor.MouseTargetType.GUTTER_GLYPH_MARGIN?f?void d(t):-1==h?void(h=window.setTimeout(()=>{d(t),h=-1},500)):void 0:void(h-1&&(clearTimeout(h),h=-1)))))),this.editor.onDidFocusEditorText(()=>{console.log("focus to editor");-1==this.gotoDefLine||(this.gotoDefLine=-1,this.toggleBreakPoint(this.breakPoints))}),setTimeout(()=>{let e=0;window.recordConfig.gotoLine&&(e=parseInt(window.recordConfig.gotoLine)||0,e&&(this.gotoDefLine=e,this.editor.revealPositionInCenter({lineNumber:e,column:0}),this.toggleBreakPoint(this.breakPoints)))},10),D()?a.isSeismicComponent()&&(o.default.jsx=monaco.languages.typescript.JsxEmit.React,o.default.inlineSourceMap=!0,o.default.inlineSources=!0):o.default.declaration=window.recordConfig.isES6,monaco.languages.typescript.typescriptDefaults.setCompilerOptions(o.default),setTimeout(()=>{this.restorePreviousSessionTabs()},60),setTimeout(()=>this.triggerCompilation(),1e3)}setJSInstance(e){this.jsInstance=e}updateReadonlyModelContent(e){this.jsInstance&&this.jsInstance.updateModelContent(e)}saveToLocalStorage(){if(!a.isScriptRunner())return;const t={};monaco.editor.getModels().forEach(n=>{const s=e(n.uri);s.endsWith(i.READONLY_OUTPUT_FILE_NAME)||(t[s]={source:n.getValue(),active:n===this.editor.getModel()})}),localStorage.setItem(P,JSON.stringify(t))}getPreviousSessionState(){const e={},t=localStorage.getItem(P);if("string"==typeof t&&0<t.length)try{const i=JSON.parse(t);for(const t in i)e[t]=i[t]}catch(t){}return e}restorePreviousSessionTabs(){if(!a.isScriptRunner())return;const t=new Map;monaco.editor.getModels().forEach(i=>{t.set(e(i.uri),i)});const n=this.getPreviousSessionState(),s=Object.keys(n);let r="";for(const e of s){let s=null,o=n[e];o=o||{source:i.SAMPLE_JS_CONTENT},("string"!=typeof o.source||0==o.source.length)&&(o.source=a.isSeismicComponent()?i.SAMPLE_SEISMIC_CONTENT:i.SAMPLE_JS_CONTENT),t.has(e)?(s=t.get(e),s.setValue(o.source)):(s=monaco.editor.createModel(o.source,i.LangType.typescript,monaco.Uri.file(e)),this.createTab(e,!1,!!o.active)),0!==r.length||!o.active||(r=e)}this.selectFile(r),v=0}openFileSelector(){if(n.FileSearch.isActive())return null;var e=new n.FileSearch(this.editor,e=>{var t="./?sys_id="+e.sysId;a.isServiceNow()&&(t="./sys_script_include.do?sys_id="+e.sysId),window.open(t)});e.open()}createTab(e,t=!1,i=!0){const n=e.replace(".","_"),s=`${n} clickable ${i?"active":""} ${t?"home":""}`;let a=`<i class="glyphicon glyphicon-remove close-icon" onclick="javascript: settings.onRemoveTab('${e}')"></i>`;t&&(a="");var r=`<li class= '${s}' onclick='javascript: settings.onSelectTab("${e}")'>
				<a href="#">
					${e}
					${a}
				</a>
			</li>`,o=jQuery("#file-menu-container");i&&o.find(".active").removeClass("active");var l=o.find(".add-file");l.before(r)}removeTab(e){var t=jQuery("#file-menu-container");const i=e.replace(".","_");var n=t.find("."+i);n.remove()}selectTab(e){const t=e.replace(".","_");var i=jQuery(`#file-menu-container`),n=i.find(".active");n.hasClass(t)||(n.removeClass("active"),i.find(`.${t}`).addClass("active"))}addFile(e=!0){let t=`Point${e?this.tsFileIndex+".ts":this.jsFileIndex+".js"}`;a.isSeismicComponent()&&(t+="x");let n=prompt(`Enter your file name e.g ${t}`,t);if("string"==typeof n&&0!==n.length){let o=n.split(".");if(2!==o.length)return void alert("wrong file name, file name should have an valid extension");if(a.isSeismicComponent()&&!/(\.(ts|js)x$)/.test(n))return void alert(`you can only add '.jsx' or '.tsx' files`);const l=o[1];let p=t.split(".");(t===n||o[0]===p[0])&&(e||"ts"===l?this.tsFileIndex++:this.jsFileIndex++);var s=monaco.editor.getModels().find(e=>e.uri.path==="/"+n);if(s)return void alert("Already this file is in workspace");this.createTab(n);var r=m(`"${n}" user 🙏`);let d=monaco.editor.createModel(r,i.LangType.typescript,monaco.Uri.file(n));this.editorViewMap[this.editor.getModel().uri.path]=this.editor.saveViewState(),this.editor.setModel(d);const c=a.getCurrentSI();c.updateScriptType(n),c.updateTSScript(d.getValue()),c.setDirtyState(!0);const u=jQuery("#scope-select").val();c.updateAPIName(u+"."+n),this.dispatchCompilation()}}removeFile(t){let i=monaco.editor.getModels().find(e=>e.uri.path==="/"+t);if(i){const s=e(i.uri).replace(".","_");var n=jQuery(`#file-menu-container`);n.find(".active").hasClass(s)&&this.selectFile(e(this.model.uri)),this.removeTab(t),delete this.editorViewMap[i.uri.path],i.dispose(),this.saveToLocalStorage()}}selectFile(e){let t=monaco.editor.getModels().find(t=>t.uri.path==="/"+e);if(t){let i=this.editor.saveViewState();if(this.editorViewMap[this.editor.getModel().uri.path]=i,this.editor.setModel(t),this.editorViewMap[t.uri.path]&&this.editor.restoreViewState(this.editorViewMap[t.uri.path]),this.selectTab(e),!(a.isSeismicComponent()&&/(\.css|html)$/.test(e))){const i=a.getCurrentSI();i.updateScriptType(e),i.updateTSScript(t.getValue()),i.setDirtyState(!0);const n=jQuery("#scope-select").val();i.updateAPIName(n+"."+e),this.dispatchCompilation()}}}updateBreakPoints(e){var t;if(!D()&&null!==(t=null===e||void 0===e?void 0:e.debugpoints)&&void 0!==t&&t.BREAKPOINT){var i=Object.keys(e.debugpoints.BREAKPOINT).map(e=>parseInt(e));this.convertLineNoFromJSToTS(i).then(e=>{this.toggleBreakPoint(e)})}}onBreakpoint(e,t,i="",n=!1){a.getCurrentSI();this.convertLineNoFromTStoJS([e]).then(e=>{this.jsInstance&&this.jsInstance.toggleBreakPoint(e),!a.isServiceNow()||D()?this.convertLineNoFromJSToTS(e).then(e=>{this.toggleBreakPoint(e)},e=>{console.log(e)}):this.toggleBreakPointInServer(e[0],i,n)},e=>{console.log(e)})}canCurrentModelGetTranspiled(){const e=this.editor.getModel().uri.path;return!/(css|html|scss|saas)$/.test(e)}dispatchCompilation(){if(this.canCurrentModelGetTranspiled()){let i=a.getCurrentSI();i.setDirtyState(!0),i.updateTSScript(this.editor.getModel().getValue()),this.compileTriggerTimoutID!=L&&(clearTimeout(this.compileTriggerTimoutID),this.compileTriggerTimoutID=L);var e="undefined"!=typeof ts,t="undefined"!=typeof monaco;e&&t&&(this.compileTriggerTimoutID=window.setTimeout(this.triggerCompilation.bind(this),5000))}}onContentChanged(t){this.dispatchCompilation()}triggerCompilation(){return __awaiter(this,void 0,void 0,function*(){if(!this.canCurrentModelGetTranspiled())return;const e=a.getCurrentSI();this.compileTriggerTimoutID=L;let t=null;try{t=yield p()}catch(t){return void console.error(t)}if(e.updateScript(t.js),e.setDirtyState(!1),e.updateDeclaration(t.declaration),e.updateSourcemap(t.sourceMap),this.sourcemapConsumer&&this.sourcemapConsumer.destroy(),this.sourcemapConsumer=void 0,this.tsOuput=t,e.isJavascript()){t.linterErrors=t.linterErrors||[];var i=t.linterErrors.map(e=>({startLineNumber:e.line,endLineNumber:e.endLine||e.line,startColumn:e.column,endColumn:e.endColumn||e.column,message:`${e.message} (${e.ruleId})`,severity:monaco.MarkerSeverity.Warning,source:"ESLint"}));monaco.editor.setModelMarkers(this.editor.getModel(),"eslint",i)}if(this.sourcemapConsumer=yield this.applySourcemap(),!!this.isBreakPointsLoaded)this.updateBreakPoints(this.jsBreakPointsState);else if(this.isBreakPointsLoaded=!0,a.getCurrentSI().canPlaceBreakPoints()&&!D()&&this.loadBreakPointsFromServer("sys_script_include.script"),a.isServiceNow()&&!e.isNew()){const t=s.default(),i="script_id="+e.sys_id;let n=-1;t.initChannel("sys_js_breakpoint",i).subscribe(()=>{-1!=n&&clearTimeout(n),n=self.setTimeout(()=>{this.loadBreakPointsFromServer("sys_script_include.script")},5e3)})}this.cb(t)})}convertLineNoFromTStoJS(e){if(!window.recordConfig.isES6)return Promise.resolve(e);if(!this.sourcemapConsumer)return Promise.resolve(e);let t=[];var i=a.getCurrentSI();let n="point.js";i.isTypescript()&&(n="point.ts");for(let i of e){let e=this.sourcemapConsumer.generatedPositionFor({source:n,line:i,column:1,bias:sourceMap.SourceMapConsumer.LEAST_UPPER_BOUND});e&&e.line&&t.push(e.line)}return Promise.resolve(t)}convertLineNoFromJSToTS(e){if(!window.recordConfig.isES6)return Promise.resolve(e);if(!this.sourcemapConsumer)return this.tsBreakPointState=this.jsBreakPointsState,Promise.resolve(e);let t=[],i={debugpoints:{BREAKPOINT:{}},key:this.jsBreakPointsState&&this.jsBreakPointsState.key};for(let n of e){let e=this.sourcemapConsumer.originalPositionFor({line:n,column:1,bias:sourceMap.SourceMapConsumer.LEAST_UPPER_BOUND});e&&e.line&&(i.debugpoints.BREAKPOINT[e.line]=this.jsBreakPointsState&&this.jsBreakPointsState.debugpoints.BREAKPOINT&&this.jsBreakPointsState.debugpoints.BREAKPOINT[n],t.push(e.line))}return this.tsBreakPointState=i,Promise.resolve(t)}applySourcemap(){if("undefined"==typeof sourceMap)return Promise.resolve(void 0);if(!this.tsOuput.sourceMap)return Promise.resolve(void 0);var e=new sourceMap.SourceMapConsumer(JSON.parse(this.tsOuput.sourceMap));return e}}const J=i.CSS_FILE_NAME,W=i.HTML_FILE_NAME,K=i.TSX_FILE_NAME;class G extends B{constructor(e,t,i=!1,n="",s="",r=!1){super(e,t,i,n,s,r),this.jsxUpdateTimerId=-1,this.registerForRun(),a.loadJSXIntellisense(),this.addSeismicCSSAndHTML()}openFileSelector(){var e=jQuery("#fiddle_select");const t=()=>{e.off("hidden.bs.modal",t)};e.on("show",()=>{$(".modal-body",this).css({width:"auto",height:"auto","max-height":"100%"})}),e.on("hidden.bs.modal",t),window.changeFiddle=function(t){e.modal("hide");const i=new URL(location.href),n=i.searchParams;n.set("fid",t),location.href=i.toString()},e.modal()}getPreviousSessionState(){return window.recordConfig.uxfRecord.payload}addSeismicCSSAndHTML(){const e=window.recordConfig.uxfRecord.payload;this.cssModel=monaco.editor.createModel(e[J].source,i.LangType.css,monaco.Uri.file(J)),this.htmlModel=monaco.editor.createModel(e[W].source,i.LangType.html,monaco.Uri.file(W)),this.createTab(J,!0,!1),this.createTab(W,!0,!1)}share(){return __awaiter(this,void 0,void 0,function*(){const t={[W]:{source:this.htmlModel.getValue(),active:this.htmlModel===this.editor.getModel()},[J]:{source:this.cssModel.getValue(),active:this.cssModel===this.editor.getModel()}};let n=monaco.editor.getModels();const s=window.recordConfig.uxfRecord;n=n.filter(e=>0<e.uri.path.search(/((js|ts)x)$/g)),n.forEach((r,o)=>__awaiter(this,void 0,void 0,function*(){const p=e(r.uri),d=yield monaco.languages.typescript.getTypeScriptWorker(),c=yield d(r.uri),u=yield c.getEmitOutput(r.uri.toString());if(t[p]={source:r.getValue(),transpiledValue:u.outputFiles[0].text,active:r===this.editor.getModel()},o!==n.length-1)return;let g=i.FIDDLE_TABLE_URL;const m=a.isNewFiddle(),f={payload:JSON.stringify(t)},y=prompt("Enter short description for fiddle",s.short_description?s.short_description:"Super feature demo");if(y){f.short_description=y,m||(g+=`/${s.sys_id}`);const e=document.getElementById(i.EL_SCRIPT_RUNNER);e.innerText="Updating ...";let n=yield l.CodeNowUtils.snFetch(g,{body:JSON.stringify(f),method:a.isNewFiddle()?"POST":"PATCH"},!0);const r=n.result;for(const i in Object.assign(s,r),s.payload=JSON.parse(s.payload),e.innerText="Update",t)delete t[i].transpiledValue;if(localStorage.setItem(P,JSON.stringify(t)),v=0,console.log(r),m){const e=new URL(location.href);e.searchParams.set("fid",r.sys_id),history.pushState({sysId:r.sys_id},document.title,e.href)}}}))})}registerForRun(){var e=document.getElementById(i.EL_SCRIPT_RUNNER);e.innerText=a.isNewFiddle()?"Share":"Update",e.addEventListener("click",()=>{this.share()})}onContentChanged(t){return this.handleJSXChanges()}triggerCompilation(){return a.isSeismicComponent()?Promise.resolve(this.handleJSXChanges()):Promise.resolve()}renderOutput(){let e=this.jsxValue,t=this.cssModel.getValue(),n=this.htmlModel.getValue();if(window.getComponent=function(){return{jsx:e,style:t,html:n}},jQuery("a[href=\"#script-output\"]").tab("show"),this.outputWindow)return void this.outputWindow.postMessage({cmd:"codenowSeismicUpdated"},location.href);var s=jQuery("#"+i.EL_SCRIPT_OUTPUT),r=document.createElement("iframe");r.id="seismic_host",r.style.width="100%",r.style.height="100%",r.style.border="1px solid darkgray",r.src=a.isServiceNow()?`seismic_playground.do?sysparm_nostack=true&cache=${Date.now()}`:`./PluginLoader/index.html?cache=${Date.now()}`,r.onload=()=>{this.outputWindow=r.contentWindow},s.html(r)}handleJSXChanges(){return __awaiter(this,void 0,void 0,function*(){const e=this.editor.getModel();if(!this.canCurrentModelGetTranspiled())return;const t=yield monaco.languages.typescript.getTypeScriptWorker(),i=yield t(e.uri),n=yield i.getEmitOutput(e.uri.toString());if(!n.emitSkipped){const e=n.outputFiles.find(e=>/(\.js)$/.test(e.name));this.jsxValue=e.text,this.updateReadonlyModelContent(e.text),-1!==this.jsxUpdateTimerId&&(window.clearTimeout(this.jsxUpdateTimerId),this.jsxUpdateTimerId=-1),this.jsxUpdateTimerId=setTimeout(()=>{this.renderOutput()},1e3)}})}}let z=document.getElementById(i.EL_THEME_SELECT);var H=!0;let q=-1;var Y={startDebugger:function(){var e;return"undefined"==typeof window.top.launchScriptDebugger?window.top.opener&&window.top.opener.top.launchScriptDebugger&&(e=window.top.opener.top.launchScriptDebugger):e=window.top.launchScriptDebugger,"undefined"!=typeof e&&"undefined"!=typeof g_form?void e(g_form.getUniqueValue(),g_form.getTableName()):"undefined"==typeof g_form?void I():void I(g_form.getUniqueValue(),g_form.getTableName())},saveSI:function(e){-1==q&&e&&(q=self.setTimeout(()=>{q=-1},60000),N("You can use ` CMD/CTRL + s ` keyboard shorcut to save the script. It's pretty handy!","info",1e4)),e||(e=document.getElementById("codenow.savesi"));var t=jQuery(e),i=t.find(">i");return t.attr("disabled","disabled"),i.removeClass("hide"),p(!0).then(e=>{let n=r.ClientSIRecordData.getClassConstructorFormat(a.getCurrentSI()),s={js:n,decl:e.backEndDecl,esNext:e.tsScript,sourceMap:e.sourceMap};var o={contentType:"application/json",data:JSON.stringify(s),headers:{X_UserToken:window.g_ck},method:"POST",type:"POST",url:"/api/now/typescript_helpers/UpdateSI"};jQuery.ajax(o).done(()=>{t.removeAttr("disabled"),i.addClass("hide"),v=0,N("Updated successfully","info")}).fail(()=>{x(t,i,jQuery("#fail_modal"))})},e=>{N(e,"error"),t.removeAttr("disabled"),i.addClass("hide")}),!1},toggleLinter:function(){o.default.linter=!o.default.linter,monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:o.default.linter,noSyntaxValidation:o.default.linter}),A()},updateAllSIDeclaration:function(e,t=!1){function i(e){if(0==e.length)return void x(n,s,jQuery("#success_modal"));if(a.isServiceNow()){let i={url:"/api/now/typescript_helpers/updateMultiSIDecl",type:"POST",data:e,headers:{"X-UserToken":window.g_ck},contentType:"application/json",success:function(e){console.log(e)}};t&&(i.url="/api/now/table/ts_definition/b4c6d3500ba213008e64aabcb4673a6c",i.type="put",i.data=JSON.stringify({json_value:e})),jQuery.ajax(i).done(e=>{x(n,s,jQuery("#success_modal")),console.log(e)}).fail(()=>{x(n,s,jQuery("#fail_modal"))})}}var n=jQuery(e),s=n.find(">i");n.attr("disabled","disabled"),s.removeClass("hide");let o="";o=t?"/api/now/table/sys_script_include?&sysparm_query=active=true":"/api/now/typescript_helpers/getOutOfSyncSI",a.isServiceNow()||(o="/metadata/sys_script_include.json");var l=new a.RecordFetcher(o);l.fetch().then(e=>{var t=jQuery("#UpdateSI");if(0==e.length)return x(n,s,jQuery("#success_modal")),void t.text("Update Scripts");if(!window.recordConfig.useTypeChecker){var o=r.parseSI(e,esprima),l=JSON.stringify({api:JSON.parse(o.getFormat(!0))}),p=o.getParsingErrors(),d=o.getEmptyDeclarations();p.forEach(e=>{console.error("Parsing error for => "+e)}),d.forEach(e=>{console.error("empty declaration for "+e)}),i(l)}else{window.onSIParserProgressEvent=function(e){t.text("Updating ... "+e.percentage+" %")};let s=a.generateTypeDeclarations(e);s.then(e=>{var n=JSON.stringify({api:e.formatterResult});i(n),console.log("type checker parser results came "),e.errors&&0<e.errors.length&&e.errors.forEach(e=>{console.log("parsing error "+e)}),t.text("Update Scripts")},()=>{n.removeAttr("disabled"),t.text("Try again")}),console.log("parsing done")}},e=>{alert("unable to fetch the script include with error "+e)})},updateTableDeclarations:function(e){var t=jQuery(e),i=t.find(">i");t.attr("disabled","disabled"),i.removeClass("hide");jQuery.ajax({url:"/api/now/typescript_helpers/updatetabledefinition",type:"post",data:JSON.stringify({}),headers:{"X-UserToken":window.g_ck},contentType:"application/json",success:function(e){console.log(e)}}).done(e=>{x(t,i,jQuery("#success_modal")),console.log(e)}).fail(()=>{x(t,i,jQuery("#fail_modal"))})},openNewWindow:function(){window.open(location.href)},updateOnSave:function(){return window.recordConfig.isES6?("undefined"!=typeof g_form&&g_form.addErrorMessage("With ES6, save is not possible use \"CMD + s\" keyboard short cut","error_message_es6_save"),!1):g(!1,window.recordConfig.useTypeChecker,!0,function(){let e=window.recordConfig;e.isNewRecord?gsftSubmit(void 0,void 0,"sysverb_insert"):gsftSubmit(void 0,void 0,g_form.getActionName())},function(){})},updateDecl:function(e,t){var i=jQuery(e),n=i.find(">i");return i.attr("disabled","disabled"),n.removeClass("hide"),g(t,!0,!1,function(){x(i,n,jQuery("#success_modal"))},function(){x(i,n,jQuery("#fail_modal"))})},onCompilerSettingsChange(e){var t=e.closest("li");let i=t.dataset.key;i&&(O[i]=!O[i],O[i]?jQuery(t).find(".state-icon").removeClass("glyphicon-unchecked").addClass("glyphicon-check"):jQuery(t).find(".state-icon").removeClass("glyphicon-check").addClass("glyphicon-unchecked"),A())},onTargetChange:function(e,t){let i=parseInt(t);O.target=i,A()},onJSXFactoryChange(e,t){O.jsxFactory=t.trim(),A()},onJSXChange:function(e,t){let i=parseInt(t);return O.jsx=i,a.loadJSXIntellisense(),A()},onAddTab:function(e=!0){w.addFile(e)},onRemoveTab:function(e){w.removeFile(e),console.log(`${e} removed`)},onSelectTab:function(e){w.selectFile(e)},initialize:function(){b()}};return Y}Object.defineProperty(t,"__esModule",{value:!0}),i=__importStar(i),s=__importDefault(s),a=__importStar(a),r=__importStar(r),o=__importDefault(o);var c=a.TranspilerOutput;t.initMainEditor=p,a.isMainThread()&&window.recordConfig&&(window.settings=p())});