import { toast } from 'react-hot-toast';
import { RxCross2 } from 'react-icons/rx';
import { TbShoppingCart } from 'react-icons/tb';
import { theme } from 'styles';

export const success = (text, icon) => {
  const defaultIconSuccess = (
    <TbShoppingCart size={20} color={theme.colors.whiteColor} />
  );

  toast(t => <p onClick={() => toast.dismiss(t.id)}>{text}</p>, {
    duration: 3000,
    style: {
      fontSize: theme.fontSizes.xs,
      paddingLeft: theme.spacing(8),
      color: theme.colors.whiteTextColor,
      backgroundImage: `linear-gradient(to right, ${theme.colors.greenBgColor}, ${theme.colors.lightDarckBgColor})`,
      borderRadius: theme.radii.pagination,
      cursor: 'pointer',
    },
    position: 'top-right',

    icon: icon || defaultIconSuccess,
  });
};

export const error = (text, icon) => {
  const defaultIconError = (
    <RxCross2 size={20} color={theme.colors.whiteColor} />
  );

  toast(t => <p onClick={() => toast.dismiss(t.id)}>{text}</p>, {
    duration: 3000,
    style: {
      fontSize: theme.fontSizes.xs,
      paddingLeft: theme.spacing(8),
      color: theme.colors.whiteTextColor,
      background: 'red',
      borderRadius: theme.radii.pagination,
      cursor: 'pointer',
    },
    position: 'top-right',

    icon: icon || defaultIconError,
  });
};

//TODO: Пример использования
/* toast.success(
      'Ingredient removed from shopping list',
      <TbShoppingCartX size={20} color="#fff" />
    );
*/

// или

/* toast.success(
      'Ingredient removed from shopping list'
    );
*/
