var catBitMatrixLed = '<xml>'+
'<category name="%{BKY_BITMatrixLed}" colour="%{BKY_BITMatrixLed_HUE}">'+
'  <block type="BitMatrixLed_host">'+
'    <value name="host_">'+
'      <block type="text">'+
'        <field name="TEXT">http://</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_showstate">'+
'    <field name="value_showstate_">1</field>'+
'  </block>'+
'  <block type="BitMatrixLed_matrix_color">'+
'    <field name="L01">#000000</field>'+
'    <field name="L06">#000000</field>'+
'    <field name="L11">#000000</field>'+
'    <field name="L16">#000000</field>'+
'    <field name="L21">#000000</field>'+
'    <field name="L02">#000000</field>'+
'    <field name="L07">#000000</field>'+
'    <field name="L12">#000000</field>'+
'    <field name="L17">#000000</field>'+
'    <field name="L22">#000000</field>'+
'    <field name="L03">#000000</field>'+
'    <field name="L08">#000000</field>'+
'    <field name="L13">#000000</field>'+
'    <field name="L18">#000000</field>'+
'    <field name="L23">#000000</field>'+
'    <field name="L04">#000000</field>'+
'    <field name="L09">#000000</field>'+
'    <field name="L14">#000000</field>'+
'    <field name="L19">#000000</field>'+
'    <field name="L24">#000000</field>'+
'    <field name="L05">#000000</field>'+
'    <field name="L10">#000000</field>'+
'    <field name="L15">#000000</field>'+
'    <field name="L20">#000000</field>'+
'    <field name="L25">#000000</field>'+
'  </block>'+
'  <block type="BitMatrixLed_matrixcode_color">'+
'    <field name="L01">#000000</field>'+
'    <field name="L06">#000000</field>'+
'    <field name="L11">#000000</field>'+
'    <field name="L16">#000000</field>'+
'    <field name="L21">#000000</field>'+
'    <field name="L02">#000000</field>'+
'    <field name="L07">#000000</field>'+
'    <field name="L12">#000000</field>'+
'    <field name="L17">#000000</field>'+
'    <field name="L22">#000000</field>'+
'    <field name="L03">#000000</field>'+
'    <field name="L08">#000000</field>'+
'    <field name="L13">#000000</field>'+
'    <field name="L18">#000000</field>'+
'    <field name="L23">#000000</field>'+
'    <field name="L04">#000000</field>'+
'    <field name="L09">#000000</field>'+
'    <field name="L14">#000000</field>'+
'    <field name="L19">#000000</field>'+
'    <field name="L24">#000000</field>'+
'    <field name="L05">#000000</field>'+
'    <field name="L10">#000000</field>'+
'    <field name="L15">#000000</field>'+
'    <field name="L20">#000000</field>'+
'    <field name="L25">#000000</field>'+
'  </block>'+
'  <block type="BitMatrixLed_matrixcode_line_color">'+
'    <field name="L01">#000000</field>'+
'    <field name="L02">#000000</field>'+
'    <field name="L03">#000000</field>'+
'    <field name="L04">#000000</field>'+
'    <field name="L05">#000000</field>'+
'  </block>'+
'  <block type="BitMatrixLed_color_on">'+
'    <value name="value_x_on_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_on_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_color_on_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ff0000</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_state">'+
'    <value name="value_x_state_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_state_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_getcolor">'+
'    <value name="value_x_state_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_state_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_clear">'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_time">'+
'    <value name="value_marquee_time_">'+
'      <block type="math_number">'+
'        <field name="NUM">500</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_clockwise">'+
'  </block>'+
'  <block type="BitMatrixLed_counterclockwise">'+
'  </block>'+
'  <block type="BitMatrixLed_verticalflip">'+
'  </block>'+
'  <block type="BitMatrixLed_horizontalflip">'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_color">'+
'    <value name="value_marquee_">'+
'      <block type="text_join">'+
'        <mutation items="2"></mutation>'+
'        <value name="ADD0">'+
'          <block type="BitMatrixLed_matrixcode_color">'+
'            <field name="L01">#000000</field>'+
'            <field name="L06">#000000</field>'+
'            <field name="L11">#000000</field>'+
'            <field name="L16">#000000</field>'+
'            <field name="L21">#000000</field>'+
'            <field name="L02">#000000</field>'+
'            <field name="L07">#000000</field>'+
'            <field name="L12">#000000</field>'+
'            <field name="L17">#000000</field>'+
'            <field name="L22">#000000</field>'+
'            <field name="L03">#000000</field>'+
'            <field name="L08">#000000</field>'+
'            <field name="L13">#000000</field>'+
'            <field name="L18">#000000</field>'+
'            <field name="L23">#000000</field>'+
'            <field name="L04">#000000</field>'+
'            <field name="L09">#000000</field>'+
'            <field name="L14">#000000</field>'+
'            <field name="L19">#000000</field>'+
'            <field name="L24">#000000</field>'+
'            <field name="L05">#000000</field>'+
'            <field name="L10">#000000</field>'+
'            <field name="L15">#000000</field>'+
'            <field name="L20">#000000</field>'+
'            <field name="L25">#000000</field>'+
'          </block>'+
'        </value>'+
'        <value name="ADD1">'+
'          <block type="BitMatrixLed_matrixcode_color">'+
'            <field name="L01">#000000</field>'+
'            <field name="L06">#000000</field>'+
'            <field name="L11">#000000</field>'+
'            <field name="L16">#000000</field>'+
'            <field name="L21">#000000</field>'+
'            <field name="L02">#000000</field>'+
'            <field name="L07">#000000</field>'+
'            <field name="L12">#000000</field>'+
'            <field name="L17">#000000</field>'+
'            <field name="L22">#000000</field>'+
'            <field name="L03">#000000</field>'+
'            <field name="L08">#000000</field>'+
'            <field name="L13">#000000</field>'+
'            <field name="L18">#000000</field>'+
'            <field name="L23">#000000</field>'+
'            <field name="L04">#000000</field>'+
'            <field name="L09">#000000</field>'+
'            <field name="L14">#000000</field>'+
'            <field name="L19">#000000</field>'+
'            <field name="L24">#000000</field>'+
'            <field name="L05">#000000</field>'+
'            <field name="L10">#000000</field>'+
'            <field name="L15">#000000</field>'+
'            <field name="L20">#000000</field>'+
'            <field name="L25">#000000</field>'+
'          </block>'+
'        </value>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_color_once">'+
'    <value name="value_marquee_">'+
'      <block type="text_join">'+
'        <mutation items="2"></mutation>'+
'        <value name="ADD0">'+
'          <block type="BitMatrixLed_matrixcode_color">'+
'            <field name="L01">#000000</field>'+
'            <field name="L06">#000000</field>'+
'            <field name="L11">#000000</field>'+
'            <field name="L16">#000000</field>'+
'            <field name="L21">#000000</field>'+
'            <field name="L02">#000000</field>'+
'            <field name="L07">#000000</field>'+
'            <field name="L12">#000000</field>'+
'            <field name="L17">#000000</field>'+
'            <field name="L22">#000000</field>'+
'            <field name="L03">#000000</field>'+
'            <field name="L08">#000000</field>'+
'            <field name="L13">#000000</field>'+
'            <field name="L18">#000000</field>'+
'            <field name="L23">#000000</field>'+
'            <field name="L04">#000000</field>'+
'            <field name="L09">#000000</field>'+
'            <field name="L14">#000000</field>'+
'            <field name="L19">#000000</field>'+
'            <field name="L24">#000000</field>'+
'            <field name="L05">#000000</field>'+
'            <field name="L10">#000000</field>'+
'            <field name="L15">#000000</field>'+
'            <field name="L20">#000000</field>'+
'            <field name="L25">#000000</field>'+
'          </block>'+
'        </value>'+
'        <value name="ADD1">'+
'          <block type="BitMatrixLed_matrixcode_color">'+
'            <field name="L01">#000000</field>'+
'            <field name="L06">#000000</field>'+
'            <field name="L11">#000000</field>'+
'            <field name="L16">#000000</field>'+
'            <field name="L21">#000000</field>'+
'            <field name="L02">#000000</field>'+
'            <field name="L07">#000000</field>'+
'            <field name="L12">#000000</field>'+
'            <field name="L17">#000000</field>'+
'            <field name="L22">#000000</field>'+
'            <field name="L03">#000000</field>'+
'            <field name="L08">#000000</field>'+
'            <field name="L13">#000000</field>'+
'            <field name="L18">#000000</field>'+
'            <field name="L23">#000000</field>'+
'            <field name="L04">#000000</field>'+
'            <field name="L09">#000000</field>'+
'            <field name="L14">#000000</field>'+
'            <field name="L19">#000000</field>'+
'            <field name="L24">#000000</field>'+
'            <field name="L05">#000000</field>'+
'            <field name="L10">#000000</field>'+
'            <field name="L15">#000000</field>'+
'            <field name="L20">#000000</field>'+
'            <field name="L25">#000000</field>'+
'          </block>'+
'        </value>'+
'      </block>'+ 
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_color_degree">'+
'    <field name="value_marquee_direction_">1</field>'+
'    <value name="value_marquee_degree_">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_stop">'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_resume">'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_reverse">'+
'  </block>'+
'  <block type="BitMatrixLed_backcolor">'+
'    <value name="value_color_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#000000</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_color">'+
'    <value name="value_color_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#ff0000</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_matrix">'+
'    <field name="L01">FALSE</field>'+
'    <field name="L06">FALSE</field>'+
'    <field name="L11">FALSE</field>'+
'    <field name="L16">FALSE</field>'+
'    <field name="L21">FALSE</field>'+
'    <field name="L02">FALSE</field>'+
'    <field name="L07">FALSE</field>'+
'    <field name="L12">FALSE</field>'+
'    <field name="L17">FALSE</field>'+
'    <field name="L22">FALSE</field>'+
'    <field name="L03">FALSE</field>'+
'    <field name="L08">FALSE</field>'+
'    <field name="L13">FALSE</field>'+
'    <field name="L18">FALSE</field>'+
'    <field name="L23">FALSE</field>'+
'    <field name="L04">FALSE</field>'+
'    <field name="L09">FALSE</field>'+
'    <field name="L14">FALSE</field>'+
'    <field name="L19">FALSE</field>'+
'    <field name="L24">FALSE</field>'+
'    <field name="L05">FALSE</field>'+
'    <field name="L10">FALSE</field>'+
'    <field name="L15">FALSE</field>'+
'    <field name="L20">FALSE</field>'+
'    <field name="L25">FALSE</field>'+
'  </block>'+
'  <block type="BitMatrixLed_matrixcode">'+
'    <field name="L01">FALSE</field>'+
'    <field name="L06">FALSE</field>'+
'    <field name="L11">FALSE</field>'+
'    <field name="L16">FALSE</field>'+
'    <field name="L21">FALSE</field>'+
'    <field name="L02">FALSE</field>'+
'    <field name="L07">FALSE</field>'+
'    <field name="L12">FALSE</field>'+
'    <field name="L17">FALSE</field>'+
'    <field name="L22">FALSE</field>'+
'    <field name="L03">FALSE</field>'+
'    <field name="L08">FALSE</field>'+
'    <field name="L13">FALSE</field>'+
'    <field name="L18">FALSE</field>'+
'    <field name="L23">FALSE</field>'+
'    <field name="L04">FALSE</field>'+
'    <field name="L09">FALSE</field>'+
'    <field name="L14">FALSE</field>'+
'    <field name="L19">FALSE</field>'+
'    <field name="L24">FALSE</field>'+
'    <field name="L05">FALSE</field>'+
'    <field name="L10">FALSE</field>'+
'    <field name="L15">FALSE</field>'+
'    <field name="L20">FALSE</field>'+
'    <field name="L25">FALSE</field>'+
'  </block>'+
'  <block type="BitMatrixLed_matrixcode_line">'+
'    <field name="L01">FALSE</field>'+
'    <field name="L02">FALSE</field>'+
'    <field name="L03">FALSE</field>'+
'    <field name="L04">FALSE</field>'+
'    <field name="L05">FALSE</field>'+
'  </block>'+
'  <block type="BitMatrixLed_sample">'+
'    <field name="value_sample_">♥</field>'+
'  </block>'+
'  <block type="BitMatrixLed_char">'+
'    <value name="value_char_">'+
'      <block type="text">'+
'        <field name="TEXT">♥</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_code">'+
'    <value name="value_code_">'+
'      <block type="text">'+
'        <field name="TEXT">0110011110011111111001100</field>'+
'      </block>'+
'    </value>'+
'  </block>'+ 
'  <block type="BitMatrixLed_on">'+
'    <value name="value_x_on_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_on_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_off">'+
'    <value name="value_x_off_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_off_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_reverse">'+
'    <value name="value_x_reverse_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_y_reverse_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_texttocode">'+
'    <value name="value_text_">'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_indentcode">'+
'    <value name="value_indentcode_">'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_marquee">'+
'    <value name="value_marquee_">'+
'        <block type="BitMatrixLed_indentcode">'+
'          <value name="value_indentcode_">'+
'            <block type="BitMatrixLed_texttocode">'+
'              <value name="value_text_">'+
'                <block type="text">'+
'                  <field name="TEXT"> ♥ webduino ♡ </field>'+
'                </block>'+
'            </value>'+
'          </block>'+
'        </value>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_once">'+
'    <value name="value_times_">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_marquee_">'+
'      <block type="BitMatrixLed_indentcode">'+
'          <value name="value_indentcode_">'+
'            <block type="BitMatrixLed_texttocode">'+
'              <value name="value_text_">'+
'                <block type="text">'+
'                  <field name="TEXT"> ♥ webduino ♡ </field>'+
'                </block>'+
'            </value>'+
'          </block>'+
'        </value>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_marquee_degree">'+
'    <field name="value_marquee_direction_">1</field>'+
'    <value name="value_marquee_degree_">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_invert">'+
'  </block>'+
'  <block type="BitMatrixLed_linechart">'+
'    <value name="value_value1">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value2">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value3">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value4">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value5">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="BitMatrixLed_barchart">'+
'    <value name="value_value1">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value2">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value3">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value4">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="value_value5">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'</category>'+
'</xml>';
