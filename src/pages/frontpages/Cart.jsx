import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";
import { formatPrice, products } from "../../data/products";

export default function Cart() {
	const { items, setItemQuantity, removeItem } = useCart();
	const cartLines = items
		.map((item) => ({ ...item, product: products.find((product) => product.id === item.productId) }))
		.filter((item) => item.product);
	const subtotal = cartLines.reduce((total, item) => total + item.product.price * item.quantity, 0);

	return (
		<div className="mx-auto max-w-7xl">
			<div className="mb-7 border-b border-slate-200 pb-5">
				<p className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-600">Signal & Sound / Your rig</p>
				<h1 className="text-3xl font-bold text-slate-950">Your cart</h1>
			</div>

			{cartLines.length === 0 ? (
				<div className="border border-slate-200 bg-white px-6 py-14 text-center">
					<h2 className="text-xl font-semibold text-slate-900">Your cart is empty</h2>
					<p className="mt-2 text-slate-600">Browse the shop and add something you like.</p>
					<Link to="/dashboard" className="mt-6 inline-flex rounded bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600">
						Browse gear
					</Link>
				</div>
			) : (
				<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
					<section aria-label="Cart items" className="divide-y divide-slate-200 border-y border-slate-200 bg-white">
						{cartLines.map(({ product, quantity }) => (
							<article key={product.id} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:p-5">
								<img src={product.image} alt={product.name} className="aspect-[4/3] w-full rounded object-cover sm:h-24 sm:w-32" />
								<div className="min-w-0 flex-1">
									<p className="text-xs font-semibold uppercase tracking-wide text-orange-600">{product.category}</p>
									<h2 className="mt-1 font-semibold text-slate-900">{product.name}</h2>
									<p className="mt-1 text-sm text-slate-600">{formatPrice(product.price)}</p>
								</div>
								<div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
									<div className="flex items-center rounded border border-slate-300">
										<button type="button" aria-label={`Decrease ${product.name} quantity`} onClick={() => setItemQuantity(product.id, quantity - 1)} className="h-9 w-9 text-lg text-slate-700 hover:bg-slate-100">-</button>
										<span className="w-9 text-center text-sm tabular-nums" aria-live="polite">{quantity}</span>
										<button type="button" aria-label={`Increase ${product.name} quantity`} onClick={() => setItemQuantity(product.id, quantity + 1)} className="h-9 w-9 text-lg text-slate-700 hover:bg-slate-100">+</button>
									</div>
									<button type="button" onClick={() => removeItem(product.id)} className="text-sm text-slate-500 underline underline-offset-2 hover:text-red-700">Remove</button>
								</div>
							</article>
						))}
					</section>

					<aside className="h-fit border border-slate-200 bg-white p-5">
						<h2 className="text-lg font-semibold text-slate-900">Order summary</h2>
						<div className="mt-5 flex justify-between border-b border-slate-200 pb-4 text-sm text-slate-600">
							<span>Subtotal</span><span>{formatPrice(subtotal)}</span>
						</div>
						<div className="flex justify-between py-4 text-sm text-slate-600">
							<span>Shipping</span><span>Calculated at checkout</span>
						</div>
						<Link to="/checkout" className="mt-3 block rounded bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-orange-600">
							Continue to Checkout
						</Link>
						<Link to="/dashboard" className="mt-4 block text-center text-sm font-medium text-orange-600 hover:text-orange-800">Continue shopping</Link>
					</aside>
				</div>
			)}
		</div>
	);
}
