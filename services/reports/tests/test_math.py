def test_basic_financial_arithmetic():
    assert 1000 - 350 == 650
    assert 3 * 1250 == 3750

def test_inventory_value_calculation():
    quantity, unit_price = 8, 2400
    assert quantity * unit_price == 19200

def test_payment_balance():
    invoice_total, received = 1200, 700
    assert invoice_total - received == 500
