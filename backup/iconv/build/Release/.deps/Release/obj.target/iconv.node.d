cmd_Release/obj.target/iconv.node := flock ./Release/linker.lock g++ -shared -pthread -rdynamic -m32  -Wl,-soname=iconv.node -o Release/obj.target/iconv.node -Wl,--start-group Release/obj.target/iconv/deps/libiconv/libcharset/lib/localcharset.o Release/obj.target/iconv/deps/libiconv/lib/iconv.o Release/obj.target/iconv/src/binding.o -Wl,--end-group 
