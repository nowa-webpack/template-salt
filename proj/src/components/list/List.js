import { Avatar } from 'saltui';

export default ({ list, onClick }) => (
  <div>
    {
      list.map(item => (
        <div className="t-LH44 t-FBH t-FBAC" onClick={onClick.bind(null, item.workNo)}>
          <Avatar size="32" />
          <div className="t-FB1 t-PL10">
            {item.name}{item.nickName ? `(${item.nickName})` : ''}
          </div>
        </div>
      ))
    }
  </div>
);
