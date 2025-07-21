import Hello

def test_Hello(capsys):
    Hello.main()
    captured= capsys.readouterr()
    assert "Hello, World!" in captured.out