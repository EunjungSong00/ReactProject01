import styled from '@emotion/styled';
import {FormControlLabel, FormGroup, Checkbox, InputLabel, Select, MenuItem, SelectChangeEvent, Box, FormControl} from '@mui/material';
import _Wrapper from '../src/components/atoms/background';
import Wrapper from '../src/components/atoms/Wrapper';
import useInput from '../src/modules/hooks/useInput';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
const setOption = (value: boolean, setValue: React.Dispatch<any>) => {
  setValue([value[0], !value[1]]);
};

function OptionCheckBox({item, setItem, label}) {
  return <FormControlLabel control={<Checkbox size="small" value={item[1]} onChange={() => setOption(item, setItem)} />} label={label} />;
}
const Search = () => {
  const [searchWord, onChangeSearchWord, setSearchWord] = useInput<string>('');
  const [autocompleteResult, setAutocompleteResult] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchModel, setSearchModel] = useState('');
  const [searchBodyGrade, setSearchBodyGrade] = useState('');

  const [filterAroundViewYn, setFilterAroundViewYn] = useState<any>(['filterAroundViewYn', false]); /* 360도 어라운드 뷰 */
  const [filterAuxYn, setFilterAuxYn] = useState<any>(['filterAuxYn', false]); /* AUX단자 */
  const [filterBluetoothYn, setFilterBluetoothYn] = useState<any>(['filterBluetoothYn', false]); /* 블루투스 */
  const [filterBsdYn, setFilterBsdYn] = useState<any>(['filterBsdYn', false]); /* 후측방 경보시스템 */
  const [filterElectricSeatYn, setFilterElectricSeatYn] = useState<any>(['filterElectricSeatYn', false]); /* 전동시트 */
  const [filterHeatedSteeringWheelYn, setFilterHeatedSteeringWheelYn] = useState<any>(['filterHeatedSteeringWheelYn', false]); /* 열선 스티어링 휠 */
  const [filterHudYn, setFilterHudYn] = useState<any>(['filterHudYn', false]); /* 헤드업 디스플레이 */
  const [filterLdwsYn, setFilterLdwsYn] = useState<any>(['filterLdwsYn', false]); /* 차선이탈 경보 */
  const [filterMemorySeatYn, setFilterMemorySeatYn] = useState<any>(['filterMemorySeatYn', false]); /* 메모리 시트 */
  const [filterNavigationYn, setFilterNavigationYn] = useState<any>(['filterNavigationYn', false]); /* 네비게이션 */
  const [filterParkingSensorYn, setFilterParkingSensorYn] = useState<any>(['filterParkingSensorYn', false]); /* 주차감지 센서 */
  const [filterRearCameraYn, setFilterRearCameraYn] = useState<any>(['filterRearCameraYn', false]); /* 후방 카메라 */
  const [filterSmartKeyYn, setFilterSmartKeyYn] = useState<any>(['filterSmartKeyYn', false]); /* 스마트키 */
  const [filterUsbYn, setFilterUsbYn] = useState<any>(['filterUsbYn', false]); /* USB */
  const optionArr = [
    filterAroundViewYn,
    filterAuxYn,
    filterBluetoothYn,
    filterBsdYn,
    filterElectricSeatYn,
    filterHeatedSteeringWheelYn,
    filterHudYn,
    filterLdwsYn,
    filterMemorySeatYn,
    filterNavigationYn,
    filterParkingSensorYn,
    filterRearCameraYn,
    filterSmartKeyYn,
    filterUsbYn
  ];
  const bodyGradeType = ['전체', 'RV', 'SUV', '경차', '대형차', '소형차', '스포츠카', '승합차', '준중형차', '중형차', '화물차'];
  const filterChange = (option: Array<any>) => (option[1] ? `&${option[0]}=Y` : '');
  const options = optionArr.map((item) => filterChange(item) || '');

  useEffect(() => {
    axios
      .get(`http://dev.search.carmerce.co.kr/autocomplete/search?q=${searchWord}`)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.error(res.data);
        if (res.data.results) setAutocompleteResult(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchWord]);

  useEffect(() => {
    console.log('getSearchList model', searchModel);
    axios
      .get(`http://dev.search.carmerce.co.kr/search/list?q=${searchModel}` + options.join('') + (searchBodyGrade === '전체' ? '' : `&bodyGrade=${searchBodyGrade}`))
      .then((res) => {
        console.log(res?.data?.searchDataHits);
        if (res?.data?.searchDataHits) setSearchResult(res.data.searchDataHits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [
    searchModel,
    filterAroundViewYn,
    filterAuxYn,
    filterBluetoothYn,
    filterBsdYn,
    filterElectricSeatYn,
    filterHeatedSteeringWheelYn,
    filterHudYn,
    filterLdwsYn,
    filterMemorySeatYn,
    filterNavigationYn,
    filterParkingSensorYn,
    filterRearCameraYn,
    filterSmartKeyYn,
    filterUsbYn,
    searchBodyGrade
  ]);

  const onChangeBodyGrade = (event: SelectChangeEvent) => {
    setSearchBodyGrade(event.target.value as string);
  };
  const searchEnter = (e: any) => {
    if (e.key === 'Enter') {
      setSearchModel(e.target.value);
      setSearchWord('');
    }
  };

  return (
    <>
      <Wrapper h column mt={100}>
        <Wrapper width={1000}>
          <OptionCheckBox item={filterAroundViewYn} setItem={setFilterAroundViewYn} label="360도 어라운드 뷰" />
          <OptionCheckBox item={filterAuxYn} setItem={setFilterAuxYn} label="AUX단자" />
          <OptionCheckBox item={filterBluetoothYn} setItem={setFilterBluetoothYn} label="블루투스" />
          <OptionCheckBox item={filterBsdYn} setItem={setFilterBsdYn} label="후측방 경보 시스템" />
          <OptionCheckBox item={filterElectricSeatYn} setItem={setFilterElectricSeatYn} label="전동시트" />
          <OptionCheckBox item={filterHeatedSteeringWheelYn} setItem={setFilterHeatedSteeringWheelYn} label="열선 스티어링 휠" />
          <OptionCheckBox item={filterHudYn} setItem={setFilterHudYn} label="헤드업 디스필레이" />
          <OptionCheckBox item={filterLdwsYn} setItem={setFilterLdwsYn} label="차선이탈 경보" />
          <OptionCheckBox item={filterMemorySeatYn} setItem={setFilterMemorySeatYn} label="메모리 시트" />
          <OptionCheckBox item={filterNavigationYn} setItem={setFilterNavigationYn} label="네비게이션" />
          <OptionCheckBox item={filterParkingSensorYn} setItem={setFilterParkingSensorYn} label="주차감지 센서 " />
          <OptionCheckBox item={filterRearCameraYn} setItem={setFilterRearCameraYn} label="후방카메라" />
          <OptionCheckBox item={filterSmartKeyYn} setItem={setFilterSmartKeyYn} label="스마트키" />
          <OptionCheckBox item={filterUsbYn} setItem={setFilterUsbYn} label="USB" />
        </Wrapper>

        <Box sx={{minWidth: 120, margin: 2}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">외형</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" size="small" value={searchBodyGrade} label="Age" onChange={onChangeBodyGrade} style={{width: 200}}>
              {bodyGradeType.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <div>
          <input
            style={{width: 500, height: 40, paddingLeft: 10}}
            value={searchWord}
            onChange={onChangeSearchWord}
            onKeyPress={searchEnter}
            placeholder="please enter the search word"
          />
          <table style={{borderRadius: '4px', position: 'absolute', background: 'white', boxShadow: '1px 1px 1px 1px #d1d1d1'}}>
            {autocompleteResult &&
              autocompleteResult.map(({modelKorNm, genDetailKorNm, sellMinYear, sellMaxYear}, index) => (
                <Tr
                  key={index}
                  onClick={() => {
                    setSearchModel(modelKorNm);
                    setSearchWord('');
                  }}
                >
                  <th style={{border: '1px solid #444', width: 120, verticalAlign: 'middle'}}>{modelKorNm || '-'}</th>
                  <td style={{border: '1px solid #444', width: 280, verticalAlign: 'middle', paddingLeft: 10}}>{genDetailKorNm || '-'}</td>
                  <td style={{border: '1px solid #444', width: 100, verticalAlign: 'middle', paddingLeft: 10}}>
                    {sellMinYear || '-'} - {sellMaxYear || '-'}
                  </td>
                </Tr>
              ))}
          </table>
        </div>
        <div style={{marginTop: 10}}>검색어 : {searchModel}</div>
        <table style={{marginTop: 10}}>
          <tr style={{height: 30, background: '#d1d1d1'}}>
            <th style={{border: '1px solid #444', width: 120, verticalAlign: 'middle'}}>브랜드</th>
            <th style={{border: '1px solid #444', width: 60, verticalAlign: 'middle', paddingLeft: 10}}>연식</th>
            <th style={{border: '1px solid #444', width: 440, verticalAlign: 'middle', paddingLeft: 10}}>모델</th>
            <th style={{border: '1px solid #444', width: 100, verticalAlign: 'middle', paddingLeft: 10}}>주행거리</th>
          </tr>
          {searchResult &&
            searchResult.map(({salePrice, model, modelYear, manufacturer, mileage}, index) => (
              <tr style={{height: 40}} key={index}>
                <th style={{border: '1px solid #444', width: 120, verticalAlign: 'middle'}}>{manufacturer || '-'}</th>
                <td style={{border: '1px solid #444', width: 60, verticalAlign: 'middle', paddingLeft: 10}}>{modelYear || '-'}</td>
                <td style={{border: '1px solid #444', width: 440, verticalAlign: 'middle', paddingLeft: 10}}>{model || '-'}</td>
                <td style={{border: '1px solid #444', width: 100, verticalAlign: 'middle', paddingLeft: 10}}>{mileage || '-'}</td>
              </tr>
            ))}
        </table>
      </Wrapper>
    </>
  );
};

const Tr = styled.tr`
  height: 30px;
  vertical-align: middle;
  font-size: 15;
  cursor: pointer;
  &:hover {
    background: skyblue;
  }
`;

export default Search;
