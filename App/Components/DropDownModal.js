import React, { useState } from 'react';

import {
    View,
    StyleSheet,
    Dimensions,
    Modal,
    Text,
    ScrollView,
    TouchableOpacity,
    Platform
} from 'react-native';
import { SearchBar } from 'react-native-elements';

let componentIndex = 0;

const PADDING = 8;
const BORDER_RADIUS = 5;
const FONT_SIZE = 16;
const HIGHLIGHT_COLOR = 'rgba(0,118,255,0.9)';
const OPTION_CONTAINER_HEIGHT = 400;

const {height, width} = Dimensions.get('window');

const DropDownModal = props => {
  const {
    data = [],
    onChange = ()=> {},
    initValue = 'Select me!',
    style = {},
    selectStyle = {},
    optionStyle = {},
    optionTextStyle = {},
    sectionStyle = {},
    sectionTextStyle = {},
    cancelStyle = {},
    cancelTextStyle = {},
    overlayStyle = {},
    cancelText = 'cancel',
    children
  } = props;

  const [selected, setSelected] = useState('Please select')
  const [modalVisible, setModalVisible] = useState(false)
  const [visibledData, setVisibledData] = useState(data)
  const [searchStr, setSearchStr] = useState('')
  const animationType = 'slide';

  const handleChange = item => {
      onChange(item);
      setSelected(item.label)
      _close();
  }

  const _close = () => {
    setModalVisible(false);
  }

  const _open = () => {
    setModalVisible(true);
  }

  const renderSection = (section) => {
      return (
          <View key={section.key} style={[styles.sectionStyle,sectionStyle]}>
              <Text style={[styles.sectionTextStyle,sectionTextStyle]}>{section.label}</Text>
          </View>
      );
  }

  const renderOption = (option) => {
      return (
          <TouchableOpacity key={option.key} onPress={()=>handleChange(option)}>
              <View style={[styles.optionStyle, optionStyle]}>
                  <Text style={[styles.optionTextStyle,optionTextStyle]}>{option.label}</Text>
              </View>
          </TouchableOpacity>)
  }

  const handleSearch = (searchStr) => {
    setSearchStr(searchStr);
    if (!searchStr || searchStr === '' ) {
      setVisibledData(data);
    } else {
        const newData = data.filter((item) => {
          return (item.label.toLowerCase().indexOf(searchStr.toLowerCase()) >= 0) ? true : false;
        })
        setVisibledData(newData);
    }
  }

  const getOptions = () => {
    return visibledData.map((item) => {
      if (item.section) {
          return renderSection(item);
      } else {
          return renderOption(item);
      }
    });
  }

  const renderChildren = () => {
      if(children) {
          return children;
      }
      return (
          <View style={[styles.selectStyle, selectStyle]}>
              <Text style={[styles.selectTextStyle, selectTextStyle]}>{selected}</Text>
          </View>
      );
  }

  return (
      <View style={style}>
        <Modal transparent={true} visible={modalVisible} onRequestClose={_close} animationType={animationType}>
          <View style={[styles.overlayStyle, overlayStyle]}>
            <View style={styles.optionContainer}>
              <SearchBar
                placeholder="Type Here..."
                value={searchStr}
                containerStyle={{
                  backgroundColor: "mintcream"
                }}
                inputContainerStyle={{
                  backgroundColor: "mintcream"
                }}
                onChangeText={handleSearch}
              />
              <ScrollView>
                <View style={{paddingHorizontal:10}}>
                  {getOptions()}
                </View>
              </ScrollView>
            </View>
            <View style={styles.cancelContainer}>
              <TouchableOpacity onPress={_close}>
                <View style={[styles.cancelStyle, cancelStyle]}>
                  <Text style={[styles.cancelTextStyle,cancelTextStyle]}>{cancelText}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={_open}>
            {renderChildren()}
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  overlayStyle: {
      width: width,
      height: height,
      backgroundColor: 'rgba(0,0,0,0.7)'
  },

  optionContainer: {
      borderRadius:BORDER_RADIUS,
      width:width*0.8,
      height:OPTION_CONTAINER_HEIGHT,
      backgroundColor:'mintcream',
      left:width*0.1,
      top:(height-OPTION_CONTAINER_HEIGHT)/2
  },

  cancelContainer: {
      left:width*0.1,
      top:(height-OPTION_CONTAINER_HEIGHT)/2 + 10
  },

  selectStyle: {
      flex: 1,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 8,
      borderRadius: BORDER_RADIUS
  },

  selectTextStyle: {
      textAlign: 'center',
      color: '#333',
      fontSize: FONT_SIZE
  },

  cancelStyle: {
      borderRadius: BORDER_RADIUS,
      width: width * 0.8,
      backgroundColor: 'mintcream',
      padding: PADDING
  },

  cancelTextStyle: {
      textAlign: 'center',
      color: '#333',
      fontSize: FONT_SIZE
  },

  optionStyle: {
      padding: PADDING,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc'
  },

  optionTextStyle: {
      textAlign: 'center',
      fontSize: FONT_SIZE,
      color: HIGHLIGHT_COLOR
  },

  sectionStyle: {
      padding: PADDING * 2,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc'
  },

  sectionTextStyle: {
      textAlign: 'center',
      fontSize: FONT_SIZE
  }
});

export default DropDownModal;
