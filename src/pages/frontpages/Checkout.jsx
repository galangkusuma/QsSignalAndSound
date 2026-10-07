import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";
import { formatPrice, products } from "../../data/products";

export default function Checkout() {
	const { items, clearCart } = useCart();
	const [orderPlaced, setOrderPlaced] = useState(false);
	const cartLines = items
		.map((item) => ({ ...item, product: products.find((product) => product.id === item.productId) }))
		.filter((item) => item.product);
	const subtotal = cartLines.reduce((total, item) => total + item.product.price * item.quantity, 0);

	function handleSubmit(event) {
		event.preventDefault();
		setOrderPlaced(true);
		clearCart();
	}

	if (orderPlaced) {
		return (
			<div className="mx-auto max-w-2xl border border-slate-200 bg-white px-6 py-14 text-center">
				<p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">Order complete</p>
				<h1 className="mt-3 text-3xl font-bold text-slate-950">Thanks for your order.</h1>
				<p className="mt-3 text-slate-600">Your checkout is complete. This starter shop is ready to connect to an order service.</p>
				<Link to="/dashboard" className="mt-7 inline-flex rounded bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600">Back to the shop</Link>
			</div>
		);
	}

	return (
		<div className="mx-auto max-w-7xl">
			<div className="mb-7 border-b border-slate-200 pb-5">
				<p className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-600">Signal & Sound / Secure checkout</p>
				<h1 className="text-3xl font-bold text-slate-950">Checkout</h1>
			</div>

			{cartLines.length === 0 ? (
				<div className="border border-slate-200 bg-white px-6 py-14 text-center">
					<h2 className="text-xl font-semibold text-slate-900">Nothing to check out yet</h2>
					<p className="mt-2 text-slate-600">Add products to your cart before placing an order.</p>
					<Link to="/dashboard" className="mt-6 inline-flex rounded bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600">Browse gear</Link>
				</div>
			) : (
				<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
					<form onSubmit={handleSubmit} className="space-y-7">
						<section className="border border-slate-200 bg-white p-5 sm:p-7">
							<h2 className="text-lg font-semibold text-slate-900">Contact and delivery</h2>
							<div className="mt-5 grid gap-4 sm:grid-cols-2">
								<label className="text-sm font-medium text-slate-700 sm:col-span-2">Email address
									<input type="email" name="email" autoComplete="email" required className="mt-1.5 w-full rounded border border-slate-300 px-3 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
								</label>
								<label className="text-sm font-medium text-slate-700">First name
									<input type="text" name="firstName" autoComplete="given-name" required className="mt-1.5 w-full rounded border border-slate-300 px-3 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
								</label>
								<label className="text-sm font-medium text-slate-700">Last name
									<input type="text" name="lastName" autoComplete="family-name" required className="mt-1.5 w-full rounded border border-slate-300 px-3 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
								</label>
								<label className="text-sm font-medium text-slate-700 sm:col-span-2">Street address
									<input type="text" name="address" autoComplete="street-address" required className="mt-1.5 w-full rounded border border-slate-300 px-3 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
								</label>
								<label className="text-sm font-medium text-slate-700">City
									<input type="text" name="city" autoComplete="address-level2" required className="mt-1.5 w-full rounded border border-slate-300 px-3 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
								</label>
								<label className="text-sm font-medium text-slate-700">Postal code
									<input type="text" name="postalCode" autoComplete="postal-code" required className="mt-1.5 w-full rounded border border-slate-300 px-3 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
								</label>
							</div>
						</section>

						<section className="border border-slate-200 bg-white p-5 sm:p-7">
							<h2 className="text-lg font-semibold text-slate-900">Payment method</h2>
							<label className="mt-4 flex cursor-pointer items-center gap-3 rounded border border-slate-200 p-4 text-sm text-slate-700">
								<input type="radio" name="payment" value="cash-on-delivery" required className="accent-orange-500" />
								Cash on delivery
							</label>
							<p className="mt-3 text-sm text-slate-500">Payment processing can be connected when the shop has a payment provider.</p>
						</section>

						<button type="submit" className="w-full rounded bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">Place order</button>
					</form>

					<aside className="h-fit border border-slate-200 bg-white p-5 sm:p-6">
						<h2 className="text-lg font-semibold text-slate-900">Order summary</h2>
						<ul className="mt-5 divide-y divide-slate-200">
							{cartLines.map(({ product, quantity }) => (
								<li key={product.id} className="flex justify-between gap-4 py-3 text-sm">
									<span className="text-slate-600">{product.name} <span className="text-slate-400">× {quantity}</span></span>
									<span className="shrink-0 font-medium text-slate-800">{formatPrice(product.price * quantity)}</span>
								</li>
							))}
						</ul>
						<div className="mt-3 flex justify-between border-t border-slate-200 pt-4 font-semibold text-slate-900">
							<span>Total</span><span>{formatPrice(subtotal)}</span>
						</div>
						<Link to="/cart" className="mt-4 block text-sm font-medium text-orange-600 hover:text-orange-800">Return to Cart</Link>
					</aside>
				</div>
			)}
		</div>
	);
}
