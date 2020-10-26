import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import './cart-icon.styles.scss';



function CartIcon ({toggleCartHidden, itemCount}) {
    return (
        <div className='cart-icon' onClick={toggleCartHidden }>
            <ShoppingIcon className='shopping-icon'/>
    <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
     itemCount : selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
