import { useState, useEffect } from 'react';
import { List, Carousel } from 'antd';
import '../index.less';

const Position = ({ data, time }) => {
  const [dataArr, setDataArr] = useState([]); //需要存储处理之后的data。处理为二维数组



  useEffect(() => {
    setDataArr(data.map(v => [v])) ;
  }, [data]);




  return (
    <div className="Position">

      <div className="head">
        <span className="head-left">最新职位</span>
        <span className="head-right">更多</span>
      </div>

      <Carousel autoplay dotPosition="left" dots={false} autoplaySpeed={time}>

        {
          dataArr.map((v, i) => {
            return (
              <List
                dataSource={v}
                key={i}
                renderItem={(value) => (
                  <List.Item style={{ background: '#FEFFFF' }}>
                    <div className="data-tittle">{value.title}</div>
                    <div className="data-city">{value.city}</div>
                    <div className="data-time">{value.time}</div>
                  </List.Item>
                )}
              />
            );
          })
        }

      </Carousel>

    </div>
  );
};

export default Position;

/**
 *Carousel： 走马灯
 *    autoplay      自动切换
 *    dotPosition   面板指示点位置, 排列方向
 *    autoplaySpeed 轮播时间
 *    dots  false   不显示面板指示点
 *----------*------------*-----------*
 *List:      列表
 *    dataSource    列表数据源
 *    renderItem    自定义渲染列表项
 *----------*------------*-----------*
 * data   父组件传来的列表数据
 * time   轮播速度
 */
